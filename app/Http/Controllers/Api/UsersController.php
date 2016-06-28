<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Models\v1\User;
use Dingo\Api\Contract\Http\Request;
use App\Http\Requests\v1\UserRequest;
use App\Http\Transformers\v1\UserTransformer;

class UsersController extends Controller
{

    /**
     * Instantiate a new UsersController instance.
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->middleware('api.auth', ['except' => ['show']]);
        $this->middleware('jwt.refresh', ['except' => ['show']]);
        $this->user = $user;
    }

    /**
     * Get a list of users
     *
     * @param Request $request
     * @return \Dingo\Api\Http\Response
     */
    public function index(Request $request)
    {
        // if ( ! $this->auth->user()->isAdmin()) abort(403);

        $users = $this->user
                      ->filter($request->all())
                      ->paginate($request->get('per_page', 25));

        return $this->response->paginator($users, new UserTransformer);
    }

    /**
     * Get a single user
     *
     * @param null $id
     * @return \Dingo\Api\Http\Response
     */
    public function show($id = null)
    {

        // return $this->auth->user()->withAvailableRegions();

        if($id)
        {
            $user = $this->user->findOrFail($id);

            if ( ! $user->public)
            {
                if ($user->id !== $this->auth->user()->id and ! $this->auth->user()->isAdmin())
                {
                    abort(403);
                }
            }
        }
        else
        {
            $user = $this->auth->user();
            if(! $user) return $this->response->errorNotFound();
        }

        return $this->response->item($user, new UserTransformer());
    }

    /**
     * Create a new user and save in storage
     *
     * @param UserRequest $request
     * @return \Dingo\Api\Http\Response
     */
    public function store(UserRequest $request)
    {
        if ( ! $this->auth->user()->isAdmin()) abort(403);

        $user = new User($request->all());
        $user->url = $request->get('url', str_random(10));
        $user->save();

        return $this->response->item($user, new UserTransformer);
    }

    /**
     * Update a user in storage
     *
     * @param UserRequest $request
     * @param null $id
     * @return \Dingo\Api\Http\Response
     */
    public function update(UserRequest $request, $id = null)
    {
        if($id)
            $user = $this->user->findOrFail($id);
        else
            $user = $this->auth()->user();

        if ( $user->id !== $this->auth->user()->id or ! $this->auth->user()->isAdmin()) {
            abort(403);
        }

        $user->update($request->all());

        return $this->response->item($user, new UserTransformer);
    }

    /**
     * Delete a user
     *
     * @param $id
     * @return \Dingo\Api\Http\Response
     */
    public function destroy($id)
    {
        if ( ! $this->auth->user()->isAdmin()) abort(403);

        $user = $this->user->findOrFail($id);

        $user->delete();

        return $this->response->noContent();
    }
}
