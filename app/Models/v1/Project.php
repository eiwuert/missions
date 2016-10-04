<?php

namespace App\Models\v1;

use App\UuidForKey;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes, UuidForKey;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'funded_at',
        'completed_at',
        'launched_at',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * The attributes that can be mass assigned.
     *
     * @var array
     */
    protected $fillable = [
        'project_package_id',
        'rep_id',
        'sponsor_id',
        'sponsor_type',
        'plaque_prefix',
        'plaque_message',
        'funded_at',
        'launched_at',
        'completed_at'
    ];

    /**
     * Notes attached to the project.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function notes()
    {
        return $this->morphMany(Note::class, 'noteable');
    }

    /**
     * The costs associated with the project.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function costs()
    {
        return $this->belongsToMany(Cost::class, 'project_costs')
                    ->withPivot('quantity')
                    ->withTimestamps();
    }

    /**
     * Sync costs with the project.
     *
     * @param $costs
     */
    public function syncCosts($costs)
    {
        if ( ! $costs) return;

        if ( ! $costs instanceof Collection)
            $costs = collect($costs);

        $data = $costs->keyBy('id')->map(function($item) {
            return [
                'quantity' => $item->quantity,
            ];
        })->toArray();

        $this->costs()->sync($data);
    }
}
