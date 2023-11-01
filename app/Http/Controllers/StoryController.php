<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStoryRequest;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function index()
    {
        $stories = auth()->user()->invitations()->first()->storySection()->first()->stories()->get();

        return Inertia::render('Dashboard/Stories/Index', ["stories" => $stories]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Stories/Create');
    }

    public function store(StoreStoryRequest $request, $invitationId)
    {
        $validated_file = $request->safe()->only(['image']);
        $validated_data = $request->safe()->except(['image']);

        try {
            DB::beginTransaction();

            $invitation = Invitation::findOrFail($invitationId);

            if (count($invitation->storySection()->first()->stories()->get()) >= 10) {
                return back()->with('message', "Cerita maksimal hanya 10");
            }

            $stories  = $invitation->storySection()->first()->stories()->create($validated_data);

            if (!empty($validated_file)) {
                $background_image_extension = $validated_file['image']->getClientOriginalExtension();

                $validated_file['image']->storeAs('images/' . $invitationId, '/galleries/gallery_' . $stories->id . '.' . $background_image_extension, 'public');

                $stories->update([
                    'image' => 'storage/images/' . $invitationId . '/galleries/gallery_' . $stories->id . '.' . $background_image_extension
                ]);
            }

            DB::commit();

            return back()->with('message', "Berhasil disimpan");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
