<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGiftRequest;
use App\Models\Gift;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GiftController extends Controller
{
    public function index($invitationId)
    {
        $gifts = Gift::where('invitation_id', $invitationId)->get();

        return Inertia::render('Dashboard/Gift/Index', ['gifts' => $gifts]);
    }

    public function destroy($giftId)
    {
        Gift::find($giftId)->delete();

        return back();
    }

    public function create()
    {
        return Inertia::render('Dashboard/Gift/Create');
    }

    public function store(StoreGiftRequest $request, $invitationId)
    {
        try {
            $requestData = $request->safe()->all();

            $invitation =  Invitation::find($invitationId);

            $result = $invitation->gifts()->create($requestData);

            return to_route('gifts.index', ['invitationId' => $invitationId]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
