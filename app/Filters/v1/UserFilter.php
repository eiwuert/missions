<?php namespace App\Filters\v1;

class UserFilter extends Filter
{

    /**
     * Fields that can be sorted.
     *
     * @var array
     */
    public $sortable = [
        'name', 'email', 'alt_email', 'zip',
        'country_code', 'state', 'city', 'created_at',
        'updated_at', 'birthday'
    ];

    /**
     * Fields that can be searched.
     *
     * @var array
     */
    public $searchable = [
        'name', 'email', 'alt_email', 'city', 'state',
        'phone_one', 'phone_two', 'zip', 'slug.url'
    ];

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
     * By gender.
     *
     * @param $gender
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function gender($gender)
    {
        return $this->where('gender', $gender);
    }

    /**
     * By relationship status.
     *
     * @param $status
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function status($status)
    {
        return $this->where('status', $status);
    }

    /**
     * By country code.
     *
     * @param $countries
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function country($countries)
    {
        return $this->whereIn('country_code', $countries);
    }

    /**
     * By url.
     *
     * @param $url
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function url($url)
    {
        return $this->where('url', $url);
    }

    /**
     * By fundraiser url.
     *
     * @param $url
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function fundraiser($url)
    {
        return $this->whereHas('fundraisers', function($fundraiser) use($url) {
           $fundraiser->where('url', $url);
        });
    }
}