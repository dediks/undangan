<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\StoreGuestRequest;
use App\Models\Guest;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function index()
    {
        $guests = auth()->user()->invitations()->first()->guests()->get();

        return Inertia::render('Dashboard/Guest/Index', ['guests' => $guests]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Guest/Create');
    }

    public function store(StoreGuestRequest $storeGuestRequest)
    {
        $validated = $storeGuestRequest->safe();
        $invitationId = $storeGuestRequest->invitationId;


        try {

            $invitation = Invitation::findOrFail($invitationId);

            $invitation->guests()->create([
                "nickname" => $validated->nickname,
                "fullname" => $validated->fullname,
            ]);

            return back();
        } catch (\Throwable $th) {
        }
    }


    public function storeComment(StoreCommentRequest $storeCommentRequest)
    {
        $validated = $storeCommentRequest->safe();
        $invitationId = $storeCommentRequest->invitationId;
        $guest = $storeCommentRequest->to;

        $invitation = Invitation::findOrFail($invitationId);

        if ($guest != 'null') {
            try {

                $guestTobeUpdated = $invitation->guests()->where('nickname', $guest)->firstOrFail();

                $guestTobeUpdated->fullname = $validated->fullname;
                $guestTobeUpdated->message = $validated->message;
                $guestTobeUpdated->will_attend = $validated->will_attend;
                $guestTobeUpdated->save();
            } catch (\Throwable $th) {
                dd($th);
            }
        } else {
            $guest = $invitation->guests()->create(
                [
                    'fullname' => $validated->fullname,
                    'message' => $validated->message,
                    'will_attend' => $validated->will_attend,
                ]
            );
        }

        return back()->with('message', "Berhasil mengirim pesan");
    }
}
