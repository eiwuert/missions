<?php

namespace App\Http\Controllers\Api\Rooming\Accommodations;

use App\Repositories\Rooming\Interfaces\Room;
use App\Services\Rooming\ManageRooms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoomsController extends Controller
{
    private $room;

    public function __construct(Room $room)
    {
        $this->room = $room;
    }

    public function store(Request $request, $accommodationId)
    {
        $manager = new ManageRooms('acommodations', $accommodationId);
        $manager->add($request->get('roomIds'));

        return $this->response->created();
    }

    public function destroy($accommodationId, $id)
    {
        $manager = new ManageRooms('acommodations', $accommodationId);
        $manager->remove([$id]);

        return $this->response->noContent();
    }
}
