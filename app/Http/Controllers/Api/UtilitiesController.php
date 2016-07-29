<?php

namespace App\Http\Controllers\Api;

use App\Utilities\v1\Country;
use Dingo\Api\Contract\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class UtilitiesController extends Controller
{

    public function getCountries()
    {
        $countryList = Country::all();
        /*array_walk($countries, function (&$item, $key){
            $item = "['name' => $key, 'code' => $item]";
        });*/
        $countries = [];
        foreach ($countryList as $key => $country) {
            $countries[] = ['name' => $key, 'code' => $country];
        }
        return response()->json(compact('countries'));
    }

    public function getCountry($code)
    {
        $country = (array)Country::get($code);
        return response()->json(compact('country'));
    }

    public function getTimezones()
    {
        $timezones = \DateTimeZone::listIdentifiers();
        return response()->json(compact('timezones'));
    }
}