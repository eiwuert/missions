<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\v1\AccoladeRequest;
use App\Http\Requests\v1\FilteredAccoladeRequest;
use App\Http\Transformers\v1\AccoladeTransformer;
use App\Models\v1\Accolade;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AccoladesController extends Controller
{

    /**
     * @var Accolade
     */
    private $accolade;

    /**
     * AccoladesController constructor.
     * @param Accolade $accolade
     */
    public function __construct(Accolade $accolade)
    {
        $this->accolade = $accolade;
    }

    /**
     * Get all filtered accolades.
     *
     * @param $recipient
     * @param $id
     * @return \Dingo\Api\Http\Response
     */
    public function index($recipient, $id)
    {
        $accolades = $this->accolade
                          ->where('recipient_type', $recipient)
                          ->where('recipient_id', $id)
                          ->get();

        return $this->response->collection($accolades, new AccoladeTransformer);
    }

    /**
     * Update or Create an Accolade.
     *
     * @param $recipient
     * @param $id
     * @param AccoladeRequest $request
     * @return \Dingo\Api\Http\Response
     */
    public function store($recipient, $id, AccoladeRequest $request)
    {
        $accolade = $this->accolade->updateOrCreate([
            'recipient_id' => $id,
            'recipient_type' => $recipient,
            'name' => $request->get('name')
        ], $request->all());

        return $this->response->item($accolade, new AccoladeTransformer);
    }
}