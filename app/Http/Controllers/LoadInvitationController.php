<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoadInvitationController extends Controller
{
    public function __invoke(Request $request, $couple)
    {
        $invitation = Invitation::where('couple_id', $couple)->with('cover')->with('event')->with('guests')->with('galleries')->firstOrFail();

        if ($request->query('to')) {
            $guest = $invitation->guests()->where('nickname', $request->query('to'))->first();
            $invitation->to = $guest;
        }

        return Inertia::render('Themes/' . $invitation->theme_id, ["data" => $invitation]);
    }
}
