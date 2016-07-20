<?php

namespace App\Models\v1;

use App\Scopes\PublicScope;
use App\UuidForKey;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use SoftDeletes, Filterable, UuidForKey;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'groups';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type', 'timezone', 'url', 'public',
        'address_one', 'address_two',
        'city', 'state', 'zip', 'country', 'phone_one',
        'phone_two', 'email', 'description',
        'stripe_id', 'card_brand', 'card_last_four'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at', 'updated_at', 'deleted_at'
    ];

    /**
     * All of the relationships to be touched.
     * Update the parent's timestamp.
     *
     * @var array
     */
    protected $touches = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

    /**
     * Get all the group's trips.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trips()
    {
        return $this->hasMany(Trip::class);
    }

    /**
     * Get all the group's trip reservations.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function reservations()
    {
        return $this->hasManyThrough(Reservation::class, Trip::class);
    }

    /**
     * Get all the group's managers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function managers()
    {
        return $this->belongsToMany(User::class, 'managers')
                    ->withTimestamps()
                    ->withPivot('permissions');
    }

    /**
     * Get all the group's trip facilitators.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function facilitators()
    {
        return $this->hasManyThrough(Facilitator::class, Trip::class);
    }

    /**
     * Get all the group's fundraisers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function fundraisers()
    {
        return $this->morphMany(Fundraiser::class, 'sponsor');
    }

    /**
     * Get all of the group's tags.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * Synchronize all the group's managers.
     *
     * @param $user_ids
     */
    public function syncManagers($user_ids)
    {
        if ( ! $user_ids) return;

        $this->managers()->sync($user_ids);
    }
}
