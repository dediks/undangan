<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoadInvitationController extends Controller
{
    public function __invoke(Request $request, $couple)
    {
        $invitation = Invitation::where('couple_id', $couple)->with(['cover', 'intro', 'galleries', 'gmap', 'events', 'whatsappForm'])->with(['guests' => function ($query) {
            $query->where('message', '!=', '');
        }])->firstOrFail();

        if ($request->query('to')) {
            $guest = $invitation->guests()->where('nickname', $request->query('to'))->first();
            $invitation->to = $guest;
        }

        if ($invitation->gmap) {
            $invitation->gmap->api_key = config('gmap.api_key');
        }

        return Inertia::render('Themes/' . $invitation->theme_id, ["data" => $invitation]);
    }
}
