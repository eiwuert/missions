<?php

namespace App\Events;

use App\Events\Event;
use App\Models\v1\Transaction;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TransactionWasCreated extends Event
{
    use SerializesModels;
    /**
     * @var Transaction
     */
    public $transaction;

    /**
     * Create a new event instance.
     *
     * @param Transaction $transaction
     */
    public function __construct(Transaction $transaction)
    {
        $this->transaction = $transaction;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
