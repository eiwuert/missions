<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

use Illuminate\Http\Request;

$dispatcher = app('Dingo\Api\Dispatcher');

Route::group(['middleware' => ['auth', 'can:access-dashboard'], 'prefix' => 'dashboard' ], function () use($dispatcher)
{
    Route::get('/', function () {
        return view('dashboard.index');
    });

    Route::get('settings', function() {
        return view('dashboard.settings');
    });

    Route::get('groups', function() {
        if( ! auth()->user()->managing()->count()) abort(403);
        return view('dashboard.groups.index');
    });

    Route::get('groups/{id}', function($id) use ($dispatcher) {
        if( ! auth()->user()->managing()->count()) abort(403);
        $group = $dispatcher->get('groups/' . $id);
        return view('dashboard.groups.show', compact('group', 'id'));
    });

    Route::get('groups/{id}/edit', function($id) use ($dispatcher) {
        if( ! auth()->user()->managing()->count()) abort(403);
        $group = $dispatcher->get('groups/' . $id);
        return view('dashboard.groups.edit', compact('group', 'id'));
    });

    Route::get('groups/{groupId}/trips/{id}/{tab?}', function($groupId, $id, $tab = 'details') use ($dispatcher) {
        if( ! auth()->user()->managing()->count()) abort(403);
        $group = $dispatcher->get('groups/' . $groupId);
        $trip = $dispatcher->get('trips/' . $id, ['include' => 'campaign,costs.payments,requirements,notes,deadlines']);
        return view('dashboard.groups.trips.show', compact('group', 'groupId', 'trip', 'id', 'tab'));
    });

    Route::get('records/{tab?}', function($tab = 'passports') {
        return view('dashboard.'.$tab.'.index', compact('tab'));
    });

    Route::get('records/passports/create', function () {
        return view('dashboard.passports.create');
    });

    Route::get('records/passports/{id}', function ($id) use ($dispatcher) {
        $passport = $dispatcher->get('passports/' . $id);
        return view('dashboard.passports.show', compact('passport'));
    });

    Route::get('records/passports/{id}/edit', function ($id) {
        return view('dashboard.passports.edit', compact('id'));
    });

    Route::get('records/visas/create', function () {
        return view('dashboard.visas.create');
    });

    Route::get('records/visas/{id}', function ($id) use($dispatcher) {
        $visa = $dispatcher->get('visas/' . $id);
        return view('dashboard.visas.show', compact('visa'));
    });

    Route::get('records/visas/{id}/edit', function ($id) {
        return view('dashboard.visas.edit', compact('id'));
    });

    Route::get('records/medical-releases/create', function () {
        return view('dashboard.medical-releases.create');
    });

    Route::get('records/medical-releases/{id}', function ($id) use($dispatcher) {
        $release = $dispatcher->get('medical/releases/' . $id);
        return view('dashboard.medical-releases.show', compact('release'));
    });

    Route::get('records/medical-releases/{id}/edit', function ($id) {
        return view('dashboard.medical-releases.edit', compact('id'));
    });

    Route::get('records/medical-releases/create', function () {
        return view('dashboard.medical-releases.create');
    });

    Route::get('records/essays/create', function () {
        return view('dashboard.essays.create');
    });

    Route::get('records/essays/{id}', function ($id) use($dispatcher) {
        $essay = $dispatcher->get('essays/' . $id);
        return view('dashboard.essays.show', compact('essay'));
    });

    Route::get('records/essays/{id}/edit', function ($id) {
        return view('dashboard.essays.edit', compact('id'));
    });

    Route::get('records/referrals/create', function () {
        return view('dashboard.referrals.create');
    });

    Route::get('records/referrals/{id}', function ($id) use($dispatcher) {
        $referral = $dispatcher->get('referrals/' . $id);
        return view('dashboard.referrals.show', compact('referral'));
    });

    Route::get('records/referrals/{id}/edit', function ($id) {
        return view('dashboard.referrals.edit', compact('id'));
    });

    Route::get('reservations', 'ReservationsController@index');
    Route::get('reservations/{id}/{tab?}', 'ReservationsController@show');

    Route::get('projects', 'ProjectsController@index');
    Route::get('projects/{id}/{tab?}', 'ProjectsController@show');


});

Route::get('/campaigns', function () {
    return view('site.campaigns.index');
});

Route::get('/campaigns/{slug}', function ($slug = null) use ($dispatcher) {
    try {
        $campaign = $dispatcher->get('campaigns/' . $slug);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }
    return view('site.campaigns.show', compact('campaign'));
});

Route::get('/campaigns/{slug}/trips', function ($slug = null) use ($dispatcher) {
    try {
        $campaign = $dispatcher->get('campaigns/' . $slug);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }
    return view('site.campaigns.trips.index', compact('campaign'));
});

Route::get('/trips', function () use ($dispatcher) {
    try {
        $trips = $dispatcher->get('trips', ['include' => 'campaign']);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }
    return view('site.trips.index')->with('trips', $trips);
});

Route::get('/trips/{id}', function ($id = null) use ($dispatcher) {
    try {
        $trip = $dispatcher->get('trips/'. $id, ['include' => 'campaign,costs.payments,requirements,notes,deadlines']);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }
    return view('site.trips.show')->with('trip', $trip);
});

Route::get('/trips/{id}/register', function ($id = null) use ($dispatcher) {
    try {
        $trip = $dispatcher->get('trips/'. $id);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }
    return view('site.trips.register')->with('trip', $trip);
});

/**
 * Referrals
 */
Route::get('referrals/{id}', function($id) use($dispatcher) {
    try {
        $referral = $dispatcher->get('referrals/'. $id);
    } catch (Dingo\Api\Exception\InternalHttpException $e) {
        // We can get the response here to check the status code of the error or response body.
        $response = $e->getResponse();

        return $response;
    }

    return view('site.referrals.response')->with(compact('referral'));
});

Route::get('/login', 'Auth\AuthController@login');
Route::post('/login', 'Auth\AuthController@authenticate');
Route::get('/register', 'Auth\AuthController@create');
Route::post('/register', 'Auth\AuthController@register');
Route::get('/logout', 'Auth\AuthController@logout');
// Password Reset Routes...
$this->get('/password/email', 'Auth\PasswordController@showLinkRequestForm');
$this->get('/password/reset/{token?}', 'Auth\PasswordController@showResetForm');
$this->post('/password/email', 'Auth\PasswordController@sendResetLinkEmail');
$this->post('/password/reset', 'Auth\PasswordController@reset');

Route::get('/fundraisers', 'FundraisersController@index');
Route::get('/groups', function() {
    return view('site.groups.index');
});
Route::get('/groups/{slug}', 'GroupsController@profile');
Route::get('groups/{slug}/signup', 'GroupsController@signup');
Route::get('/profiles/{slug}', function ($slug) {
    return redirect('@'.$slug);
});
Route::get('/users/{slug}', function ($slug) {
   return redirect('@'.$slug);
});
Route::get('/@{slug}', 'UsersController@profile');
Route::get('@{slug}/donate', function ($slug) {
    $type = 'users';
    return view('site.donate', compact('type', 'slug'));
});

Route::get('{type}/{slug?}/donate', function ($type, $slug) {
    return view('site.donate', compact('type', 'slug'));
})->where('type', 'profiles|groups|reservations|trips');

Route::get('/donate', function () {
    return view('site.donate');
});
Route::get('/speakers', function () {
    return view('site.speakers');
});
Route::get('/water', function () {
    return view('site.water');
});
Route::get('/orphans', function () {
    return view('site.orphans');
});
Route::get('/college', function () {
    return view('site.college');
});
Route::get('/college-financial', function () {
    return view('site.college-financial');
});
Route::get('/support', function () {
    return view('site.support');
});
Route::get('/medical', function () {
    return view('site.medical');
});
Route::get('/about-mm', function () {
    return view('site.about-mm');
});
Route::get('/contact', function () {
    return view('site.contact');
});
Route::get('/1n1d13', function () {
    return view('site.1n1d13');
});
Route::get('/1n1d15', function () {
    return view('site.1n1d15');
});
Route::get('/sponsor-a-project', function () {
    return view('site.sponsor-a-project');
});
Route::get('/support-monthly', function () {
    return view('site.support-monthly');
});
Route::get('/legacy', function () {
    return view('site.legacy');
});

Route::get('/{slug}', function ($slug) {
    return $slug;
});

Route::get('/{sponsor_slug}/{fundraiser_slug}', 'FundraisersController@show')->where('sponsor_slug', '.+');

Route::get('/', function () {
    return view('site.index');
});
