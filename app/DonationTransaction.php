<?php
namespace App;

use App\Events\TransactionWasCreated;
use App\Http\Requests\v1\DonationRequest;
use Dingo\Api\Contract\Http\Request;

class DonationTransaction extends TransactionHandler
{

    /**
     * Create a new donation.
     *
     * @param Request $request
     */
    public function create(Request $request)
    {
        $this->validate();

        if ($request->get('details.type') == 'card') {
            // has a credit card token already been created and provided?
            // if not, tokenize the card details.
            $request->has('token') ?
                $token = $request->get('token') :
                $token = $this->merchant->createCardToken($request->get('card'));

            // create the charge with token, and donation details
            $charge = $this->merchant->createCharge($request->all(), $token);

            // capture the charge
            $this->merchant->captureCharge($charge['id']);

            // rebuild the payment array with new details
            $request['details'] = [
                'type' => 'card',
                'charge_id' => $charge['id'],
                'brand' => $charge['source']['brand'],
                'last_four' => $charge['source']['last4'],
                'cardholder' => $charge['source']['name'],
            ];
        }

        // we can pass donor details to try and find a match
        // or to create a new donor if a match isn't found.
        $request->has('donor') ?
            $donor = $this->donor->firstOrCreate($request->get('donor')) :
            $donor = $this->donor->findOrFail($request->get('donor_id'));

        // Create the donation for the donor.
        $donation = $donor->donations()->create($request->all());

        event(new TransactionWasCreated($donation));
    }

    /**
     * Delete a donation.
     * @param $id
     */
    public function destroy($id)
    {
        $transaction = $this->transaction->findOrFail($id);
        $fund = $transaction->fund;

        // Refund the credit card
        if (isset($transaction->details['charge_id'])) {
            $this->merchant->refundCharge(
                $transaction->details['charge_id'],
                $transaction->amount
            );
        }

        $transaction->delete();

        $fund->reconcile();
    }

    /**
     * Validate incoming request.
     */
    private function validate()
    {
        app(DonationRequest::class)->validate();
    }
}