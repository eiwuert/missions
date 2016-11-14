<?php
namespace App;

use App\Events\TransactionWasCreated;
use App\Http\Requests\v1\DonationRequest;
use Dingo\Api\Contract\Http\Request;

class DonationTransaction extends TransactionHandler
{

    public function create(Request $request)
    {
        app(DonationRequest::class)->validate();

        // has a credit card token already been created and provided?
        // if not, tokenize the card details.
        if( ! $request->has('token')) {
            $token = $this->merchant->createCardToken($request->get('card'));
        } else {
            $token = $request->get('token');
        }

        $donor = $this->donor->firstOrCreate($request->get('donor'));

        if( ! $donor->customer_id) {
            $customer = $this->merchant
                ->createCustomer($donor->toArray(), $token);
        } else {
            $customer = ['id' => $donor->customer_id];
        }

        // merge the customer id with donor details
        $request['donor'] = $donor->toArray() + ['customer_id' => $customer['id']];

        // create the charge with customer id, token, and donation details
        $charge = $this->merchant->createCharge(
            $request->all(),
            $customer['default_source'],
            $customer['id']
        );

        // capture the charge
        $this->merchant->captureCharge($charge['id']);

        // rebuild the payment array with new details
        $request['payment'] = [
            'type' => 'card',
            'charge_id' => $charge['id'],
            'brand' => $charge['source']['brand'],
            'last_four' => $charge['source']['last4'],
            'cardholder' => $charge['source']['name'],
        ];

        // we can pass donor details to try and find a match
        // or to create a new donor if a match isn't found.
        if($request->has('donor')) {
            $donor = $this->donor->firstOrCreate($request->get('donor'));
            // Alternatively, we can use an existing donor by id.
        } else {
            $donor = $this->donor->findOrFail($request->get('donor_id'));
        }

        // Create the donation for the donor.
        $fund = $this->fund->findOrFail($request->get('fund_id'));
        $request->merge(['type' => 'donation', 'description' => 'Donation to ' . $fund->name]);
        $donation = $donor->donations()->create($request->all());

        event(new TransactionWasCreated($donation));
    }

    public function update($id, Request $request)
    {
        dd('updating donation');
    }
}