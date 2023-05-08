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

        $invitation = Auth::user()->invitations()->firstOrCreate([
            'couple_id' => $incomingCoupleId,
            'theme_id' => 'Theme_1'
        ]);

        $invitation->couple_id = $incomingCoupleId;
        $status = $invitation->save();

        return response()->json([
            "status" => $status == 200 ? "success" : "error",
            "message" => "Update berhasil !"
        ]);
    }
}
