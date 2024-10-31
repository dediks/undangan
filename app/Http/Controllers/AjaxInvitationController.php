<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AjaxInvitationController extends Controller
{
    public function updateCoupleId(Request $request)
    {
        $incomingCoupleId = $request->couple_id;
        $invitationId = $request->invitation_id;
        $themeId = $request->theme_id;

        $invitation = Auth::user()->invitations()->firstOrNew([
            'id' => $invitationId
        ]);

        $invitation->couple_id = $incomingCoupleId;
        $status = $invitation->save();

        return response()->json([
            "status" => $status == 200 ? "success" : "error",
            "message" => "Update berhasil !"
        ]);
    }
}
