<?php namespace App\Filters\v1;

use Dingo\Api\Auth\Auth;
use EloquentFilter\ModelFilter;

class GroupFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relatedModel => [method1, method2]]
    *
    * @var array
    */
    public $relations = [
        'tags' => ['tags']
    ];

    /**
     * Apply automatically.
     */
    public function setup()
    {
        if ( ! $this->input('pending')) $this->approved();
    }


    /**
     * Find by public or private
     *
     * @param $isPublic
     * @return mixed
     */
    public function isPublic($isPublic)
    {
        return $isPublic == 'yes' ?
            $this->where('public', true) :
            $this->where('public', false);
    }

    /**
     * Find by type
     *
     * @param $type
     * @return mixed
     */
    public function type($type)
    {
        return $this->where('type', $type);
    }

    /**
     * Find by country
     *
     * @param $country
     * @return mixed
     */
    public function country($country)
    {
        return $this->where('country_code', $country);
    }

    /**
     * Find by state
     *
     * @param $state
     * @return mixed
     */
    public function state($state)
    {
        return $this->where('state', $state);
    }

    /**
     * Find by search
     *
     * @param $search
     * @return mixed
     */
    public function search($search)
    {
        return $this->where(function($q) use ($search)
        {
            return $q->where('name', 'LIKE', "%$search%")
                ->orWhere('type', 'LIKE', "%$search%")
                ->orWhere('email', 'LIKE', "%$search%")
                ->orWhere('city', 'LIKE', "%$search%")
                ->orWhere('state', 'LIKE', "%$search%")
                ->orWhere('phone_one', 'LIKE', "$search%")
                ->orWhere('phone_two', 'LIKE', "$search%")
                ->orWhere('zip', 'LIKE', "$search%");

            // ->orWhereHas('trips', function($trip) { $trip->orWhere('type', $type) });
        });
    }

    /**
     * Sort by fields
     *
     * @param $sort
     * @return mixed
     */
    public function sort($sort)
    {
        $sortable = [
            'name', 'type', 'email', 'zip',
            'country_code', 'state', 'city', 'created_at',
            'updated_at'
        ];

        $param = preg_split('/\|+/', $sort);
        $field = $param[0];
        $direction = isset($param[1]) ? $param[1] : 'asc';

        if ( in_array($field, $sortable) )
            return $this->orderBy($field, $direction);

        return $this;
    }

    /**
     * Find only public groups
     */
    public function onlyPublicGroups()
    {
        $this->where('public', true);
    }

    /**
     * Find by url slug.
     *
     * @param $url
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function url($url)
    {
        return $this->where('url', $url);
    }

    /**
     * Find approved groups.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function approved()
    {
        return $this->orWhere('status', 'approved');
    }

    /**
     * Find pending groups.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function pending()
    {
        return $this->orWhere('status', 'pending');
    }

}