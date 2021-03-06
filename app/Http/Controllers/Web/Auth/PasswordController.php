<?php

namespace App\Http\Controllers\Web\Auth;

use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Foundation\Auth\ResetsPasswords;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    protected $redirectPath = '/dashboard';

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware());
    }

    /**
     * Get the response for after a successful password reset.
     *
     * @param  string  $response
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function getResetSuccessResponse($response)
    {
        return redirect('/logout'); //temp solution until JS can be updated with authenticated user

        // $user = Auth::user();

        // try {
        //     // attempt to verify the credentials and create a token for the user
        //     if (! $token = JWTAuth::fromUser($user)) {
        //         return response()->json(['error' => 'invalid_credentials'], 401);
        //     }
        // } catch (JWTException $e) {
        //     // something went wrong whilst attempting to encode the token
        //     return response()->json(['error' => 'could_not_create_token'], 500);
        // }

        // $cookie = $this->makeApiTokenCookie($token);

        // return redirect($this->redirectPath())->with('status', trans($response)->withCookie($cookie));
    }

    /**
     * Make the API token cookie.
     */
    protected function makeApiTokenCookie($token)
    {
        return cookie('api_token', sprintf('Bearer %s', $token), 60, '/', null, false, false);
    }
}
