<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LinkController extends Controller
{
    public function index($invitationId)
    {
        $invitation = Invitation::find($invitationId);
        $identifier = $invitation->guests()->pluck('nickname');
        $arrIdentifer = [];

        foreach ($identifier as $key => $value) {
            $arrIdentifer[] = url('') . '/' . $invitation->couple_id . '?to=' . preg_replace('/&/', '%26', $value);
        }

        return Inertia::render('Dashboard/Link/Generate', ['identifier' => $arrIdentifer]);
    }
}
