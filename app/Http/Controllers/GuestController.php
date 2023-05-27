<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGuestRequest;
use App\Models\Guest;
use App\Models\Invitation;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function store(StoreGuestRequest $storeGuestRequest)
    {
        $validated = $storeGuestRequest->safe();
        $invitationId = $storeGuestRequest->invitationId;
        $guest = $storeGuestRequest->to;

        $invitation = Invitation::findOrFail($invitationId);

        if ($guest != 'null') {
            try {
                $guest = Guest::where('nickname', $guest)->firstOrFail();

                $guest->message = $validated->comment;
                $guest->will_attend = $validated->will_attend;
                $guest->save();
            } catch (\Throwable $th) {
                dd($th);
            }
        } else {
            $guest = $invitation->guests()->create(
                [
                    'nickname' => $validated->name,
                    'message' => $validated->comment,
                    'will_attend' => $validated->will_attend,
                ]
            );
        }

        return back();
    }
}
