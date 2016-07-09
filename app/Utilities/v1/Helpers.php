<?php

use Carbon\Carbon;

function country($code)
{
    return implode('', array_keys(App\Utilities\v1\Country::get($code)));
}

function stripPhone($phone)
{
    return preg_replace('/\D+/', '', $phone);
}

function now()
{
    return Carbon::now();
}