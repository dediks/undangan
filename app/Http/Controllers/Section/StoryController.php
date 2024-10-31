<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateStorySectionRequest;
use App\Models\Story;
use App\Models\StorySection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function edit($invitationId)
    {
        $story_section = StorySection::where('invitation_id', $invitationId)->first();

        // dd("sini");

        return Inertia::render('Invitation/Section/StorySection', ['storyData' => $story_section]);
    }

    public function update(UpdateStorySectionRequest $request, $storySectionId)
    {
        // dd("sini");
        $validated_file = $request->safe()->only(['background_image']);
        $validated_data = $request->safe()->except(['background_image']);

        try {
            DB::beginTransaction();

            $story_section = StorySection::find($storySectionId);

            if (!empty($validated_file)) {
                if ($story_section->background_image != null || $story_section->background_image != "") {
                    Storage::disk('public')->delete('images/' . $story_section->background_image);
                }

                $background_image_extension = $validated_file['background_image']->getClientOriginalExtension();

                $validated_file['background_image']->storeAs('images/' . $story_section->invitation_id, '/story_section/story_section.' . $background_image_extension, 'public');

                $story_section->update([
                    'background_image' => $story_section->invitation_id . '/story_section/story_section.' . $background_image_extension,
                ]);
            }

            $story_section->update($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
