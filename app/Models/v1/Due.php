<?php

namespace App\Models\v1;

use Illuminate\Database\Eloquent\Model;

class Due extends Model
{
    protected $primaryKey = null;

    public $incrementing = false;

    protected $table = 'dues';

    protected $fillable = [
        'reservation_id', 'payment_id', 'due_at', 'grace_period', 'outstanding_balance'
    ];

    protected $dates = ['due_at'];

    public $timestamps = false;

    /**
     * Get the due's payment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    /**
     * Get the due's owning model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payable()
    {
        return $this->morphTo();
    }

    /**
     * Get the due's current status.
     *
     * @return string
     */
    public function getStatus()
    {
        if ($this->due_at->isPast() and $this->outstanding_balance > 0) return 'late';
        if ($this->due_at > $this->payment->due_at and $this->due_at->isFuture()) return 'extended';
        if ($this->outstanding_balance == 0) return 'paid';

        return 'pending';
    }

    /**
     * Update the due's outstanding balance (WIP)
     *
     * @param $payment_amount
     * @return $this
     */
    public function updateBalance($payment_amount)
    {
        $new_balance = $this->outstanding_balance - $payment_amount;

        $this->save(['outstanding_balance' => $new_balance]);

        return $this;
    }
}