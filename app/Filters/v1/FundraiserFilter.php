<?php namespace App\Filters\v1;

use EloquentFilter\ModelFilter;

class FundraiserFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relatedModel => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function url($slug)
    {
        return $this->where('url', $slug);
    }
}
