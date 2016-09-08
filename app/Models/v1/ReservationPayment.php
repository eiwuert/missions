<?php

namespace App\Models\v1;


class ReservationPayment {

    /**
     * @var Reservation
     */
    private $reservation;

    /**
     * ReservationPayment constructor.
     * @param Reservation $reservation
     */
    public function __construct(Reservation $reservation)
    {
        $this->reservation = $reservation;
    }

    /**
     * Synchronize all the reservation's due payments.
     */
    public function sync()
    {
        if($this->reservation->has('dues')) $this->reservation->dues()->delete();

        $this->addDues($this->calculateDues());
    }

    /**
     * Calculate the reservation's due payments.
     *
     * @return mixed
     */
    public function calculateDues()
    {
        // generate dues based on assigned costs
        $dues = $this->reservation->costs()
            ->with('payments')
            ->get()
            ->flatMap(function ($cost) {
                return $cost->payments->map(function ($payment) {
                    return [
                        'payment_id' => $payment->id,
                        'due_at' => $payment->due_at,
                        'grace_period' => $payment->grace_period,
                        'outstanding_balance' => $payment->amount_owed
                    ];
                })->all();
            });

        return $dues;
    }

    /**
     * Add dues to the reservation.
     *
     * @param $dues
     */
    public function addDues($dues)
    {
        if ( ! $dues) return;

        if ( ! $dues instanceof Collection)
            $dues = collect($dues);

        $data = $dues->map(function($due) {
            return new Due($due);
        })->all();

        $this->reservation->dues()->saveMany($data);
    }

    /**
     * Update the reservation's outstanding balances.
     *
     * @param $amount
     */
    public function updateBalances($amount)
    {
        while ($amount <> 0)
        {
            $due = $this->reservation->dues()
                ->withBalance()
                ->sortRecent()
                ->first();

            if ($due->outstanding_balance < $amount) {
                $carryOver = $amount - $due->outstanding_balance;
                $payment = $due->outsanding_balance;
            } else {
                $carryOver = 0;
                $payment = $amount;
            }

            $due->updateBalance($payment);

            $amount = $carryOver;
        }
    }
}