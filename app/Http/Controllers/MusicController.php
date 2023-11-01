<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MusicController extends Controller
{
    public function index()
    {
        $musics = Music::get();

        $selected_music = auth()->user()->invitations()->first()->music()->first();

        $songs = Storage::disk('public')->files('/assets/song');

        return Inertia::render('Dashboard/Music/Index', ["musics" => $musics, 'selected_music' => $selected_music]);
    }

    public function create($invitationId)
    {
        dd("hahah");
    }

    public function store($invitationId, $musicId)
    {
        try {
            $invitation = Invitation::findOrFail($invitationId);

            $invitation->music_id = $musicId;
            $invitation->save();

            return back();
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
