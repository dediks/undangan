<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateCoverSectionRequest;
use App\Http\Requests\UpdateGmapRequest;
use App\Models\CoverSection;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CoverController extends Controller
{
    public function edit($invitationId)
    {
        $invitation = Invitation::findOrFail($invitationId);

        $cover = $invitation->cover;
        $events = $invitation->events;

        return Inertia::render('Invitation/Section/CoverSection', ['coverData' => $cover, 'events' => $events]);
    }

    public function update(UpdateCoverSectionRequest $request, $coverId)
    {
        $validated_file = $request->safe()->only(['background_image']);
        $validated_data = $request->safe()->except(['background_image']);

        try {
            DB::beginTransaction();

            $cover = CoverSection::find($coverId);

            if (!empty($validated_file)) {
                if ($cover->background_image != null || $cover->background_image != "") {
                    Storage::disk('public')->delete('images/' . $cover->background_image);
                }

                $background_image_extension = $validated_file['background_image']->getClientOriginalExtension();

                $validated_file['background_image']->storeAs('images/' . $cover->invitation_id, '/cover/cover.' . $background_image_extension, 'public');

                $cover->update([
                    'background_image' => $cover->invitation_id . '/cover/cover.' . $background_image_extension,
                ]);
            }

            $cover->update($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
