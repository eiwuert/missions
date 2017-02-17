<?php

namespace App\Http\Transformers\v1;

use Carbon\Carbon;
use App\Models\v1\User;
use League\Fractal\ParamBag;
use App\Models\v1\Reservation;
use App\Utilities\v1\ShirtSize;
use League\Fractal\TransformerAbstract;

class ReservationTransformer extends TransformerAbstract
{
    private $validParams = ['status'];

    /**
     * List of resources available to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'trip', 'rep', 'costs', 'deadlines',
        'requirements', 'notes', 'todos', 'companions',
        'fundraisers', 'dues', 'fund'
    ];

    /**
     * Turn this item object into a generic array
     *
     * @param Reservation $reservation
     * @return array
     */
    public function transform(Reservation $reservation)
    {
        $reservation->load('tagged', 'avatar', 'fund');

        $data = [
            'id'                  => $reservation->id,
            'given_names'         => $reservation->given_names,
            'surname'             => $reservation->surname,
            'gender'              => $reservation->gender,
            'status'              => $reservation->status,
            'shirt_size'          => $reservation->shirt_size,
            'shirt_size_name'     => shirtSize($reservation->shirt_size),
            'age'                 => $reservation->age,
            'birthday'            => $reservation->birthday->toDateString(),
            'email'               => $reservation->email,
            'phone_one'           => $reservation->phone_one,
            'phone_two'           => $reservation->phone_two,
            'address'             => $reservation->address,
            'city'                => $reservation->city,
            'state'               => $reservation->state,
            'zip'                 => $reservation->zip,
            'country_code'        => $reservation->country_code,
            'country_name'        => country($reservation->country_code),
            'companion_limit'     => (int) $reservation->companion_limit,
            // 'arrival_designation' => $reservation->arrival_designation,
            'avatar'              => $reservation->avatar ? image($reservation->avatar->source) : url('/images/placeholders/user-placeholder.png'),
            'desired_role'        => [ 
                                        'code' => $reservation->desired_role, 
                                        'name' => teamRole($reservation->desired_role) 
                                     ],
            'total_cost'          => $reservation->totalCostInDollars(),
            'total_raised'        => $reservation->fund->balanceInDollars(),
            'percent_raised'      => (int) $reservation->getPercentRaised(),
            'total_owed'          => $reservation->totalOwedInDollars(),
            'created_at'          => $reservation->created_at->toDateTimeString(),
            'updated_at'          => $reservation->updated_at->toDateTimeString(),
            'tags'                => $reservation->tagSlugs(),
            'links'               => [
                [
                    'rel' => 'self',
                    'uri' => '/api/reservations/' . $reservation->id,
                ]
            ],
        ];

        if($reservation->pivot) {
            $data['relationship'] = $reservation->pivot->relationship;
        }

        return $data;
    }

    /**
     * Include Dues
     *
     * @param Reservation $reservation
     * @param ParamBag|null $params ( i.e dues:status(active|extended) )
     * @return \League\Fractal\Resource\Collection
     */
    public function includeDues(Reservation $reservation, ParamBag $params = null)
    {
        // Optional params validation
        if ( ! is_null($params)) {
            $this->validateParams($params);

            $dues = $reservation->dues->filter(function ($value) use ($params) {
                return in_array($value->getStatus(),  $params->get('status'));
            });

        } else {
            $dues = $reservation->dues;
        }

        return $this->collection($dues, new DueTransformer);
    }

    /**
     * Include Fund
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Item
     */
    public function includeFund(Reservation $reservation)
    {
        $fund = $reservation->fund;

        return $this->item($fund, new FundTransformer);
    }

    /**
     * Include User
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Item
     */
    public function includeUser(Reservation $reservation)
    {
        $user = $reservation->user;

        return $this->item($user, new UserTransformer);
    }

    /**
     * Include Trip
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Item
     */
    public function includeTrip(Reservation $reservation)
    {
        $trip = $reservation->trip;

        return $this->item($trip, new TripTransformer);
    }

    /**
     * Include Rep
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Item
     */
    public function includeRep(Reservation $reservation)
    {
        $rep = $reservation->rep ? $reservation->rep : $reservation->trip->rep;

        if ( ! $rep) $rep = new User([
            'name' => 'none',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return $this->item($rep, new UserTransformer);
    }

    /**
     * Include Costs
     *
     * @param Reservation $reservation
     * @param ParamBag $params
     * @return \League\Fractal\Resource\Collection
     */
    public function includeCosts(Reservation $reservation, ParamBag $params = null)
    {
        // Optional params validation
        if ( ! is_null($params)) {
            $this->validateParams($params);

            $costs = [];

            if (in_array('active', $params->get('status')))
            {
                $active = $reservation->activeCosts;

                $maxDate = $active->where('type', 'incremental')->max('active_at');

                $costs = $active->reject(function ($value, $key) use($maxDate) {
                    return $value->type == 'incremental' && $value->active_at < $maxDate;
                });
            }

        } else {
            $costs = $reservation->costs;
        }

        return $this->collection($costs, new CostTransformer);
    }

    /**
     * Include Deadlines
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Item
     */
    public function includeDeadlines(Reservation $reservation)
    {
        $deadlines = $reservation->deadlines;

        return $this->collection($deadlines, new DeadlineTransformer);
    }

    /**
     * Include Requirements
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Collection
     */
    public function includeRequirements(Reservation $reservation)
    {
        $requirements = $reservation->requirements;

        return $this->collection($requirements, new ReservationRequirementTransformer);
    }

    /**
     * Include Notes
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Collection
     */
    public function includeNotes(Reservation $reservation)
    {
        $notes = $reservation->notes;

        return $this->collection($notes, new NoteTransformer);
    }

    /**
     * Include Todos
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Collection
     */
    public function includeTodos(Reservation $reservation)
    {
        $todos = $reservation->todos;

        return $this->collection($todos, new TodoTransformer);
    }

    /**
     * Include Companions
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Collection
     */
    public function includeCompanions(Reservation $reservation)
    {
        $companions = $reservation->companionReservations;

        return $this->collection($companions, new ReservationTransformer);
    }

    /**
     * Include Fundraisers
     *
     * @param Reservation $reservation
     * @return \League\Fractal\Resource\Collection
     */
    public function includeFundraisers(Reservation $reservation)
    {
        $fundraisers = $reservation->fundraisers()->get();

        return $this->collection($fundraisers, new FundraiserTransformer);
    }

    private function validateParams($params)
    {
        $usedParams = array_keys(iterator_to_array($params));
        if ($invalidParams = array_diff($usedParams, $this->validParams)) {
            throw new \Exception(sprintf(
                'Invalid param(s): "%s". Valid param(s): "%s"',
                implode(',', $usedParams),
                implode(',', $this->validParams)
            ));
        }
    }

}