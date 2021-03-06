<?php

namespace App\Http\Controllers\Api;

use App\Events\TripInterestWasCreated;
use App\Http\Requests\v1\ExportRequest;
use App\Http\Requests\v1\TripInterestRequest;
use App\Http\Transformers\v1\TripInterestTransformer;
use App\Jobs\ExportTripInterests;
use App\Models\v1\TripInterest;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class TripInterestsController extends Controller
{

    /**
     * @var TripInterest
     */
    private $interest;

    /**
     * TripInterestsController constructor.
     * @param TripInterest $interest
     */
    public function __construct(TripInterest $interest)
    {
        $this->interest = $interest;
    }

    /**
     * Get all trip interests.
     *
     * @param Request $request
     * @return \Dingo\Api\Http\Response
     */
    public function index(Request $request)
    {
        $interests = $this->interest->filter($request->all())->paginate();

        return $this->response->paginator($interests, new TripInterestTransformer);
    }

    /**
     * Get trip interest by id.
     *
     * @param $id
     * @return \Dingo\Api\Http\Response
     */
    public function show($id)
    {
        $interest = $this->interest->findOrFail($id);

        return $this->response->item($interest, new TripInterestTransformer);
    }

    /**
     * Create a new trip interest.
     *
     * @param TripInterestRequest $request
     * @return \Dingo\Api\Http\Response
     */
    public function store(TripInterestRequest $request)
    {
        $interest = $this->interest->create($request->all());

        event(new TripInterestWasCreated($interest));

        return $this->response->item($interest, new TripInterestTransformer);
    }

    /**
     * Update a new trip interest.
     *
     * @param TripInterestRequest $request
     * @return \Dingo\Api\Http\Response
     */
    public function update(TripInterestRequest $request, $id)
    {
        $interest = $this->interest->findOrFail($id);

        $interest->update($request->all());

        return $this->response->item($interest, new TripInterestTransformer);
    }

    /**
     * Delete a trip interest by id.
     *
     * @param $id
     * @return \Dingo\Api\Http\Response
     */
    public function destroy($id)
    {
        $interest = $this->interest->findOrFail($id);

        $interest->delete();

        return $this->response->noContent();
    }

    /**
     * Export trip interests.
     *
     * @param ExportRequest $request
     * @return \Dingo\Api\Http\Response
     */
    public function export(ExportRequest $request)
    {
        $this->dispatch(new ExportTripInterests($request->all()));

        return $this->response()->created(null, [
            'message' => 'Report is being generated and will be available shortly.'
        ]);
    }
}
