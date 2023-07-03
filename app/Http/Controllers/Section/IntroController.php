<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIntroSectionRequest;
use App\Http\Requests\UpdateCoverSectionRequest;
use App\Models\CoverSection;
use App\Models\IntroSection;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class IntroController extends Controller
{
    public function edit($invitationId)
    {
        $intro = Invitation::find($invitationId)->intro;

        return Inertia::render('Invitation/Section/Intro', ['introData' => $intro]);
    }

    public function store(StoreIntroSectionRequest $request)
    {
        $validated_file = $request->safe()->only(['image']);
        $validated_data = $request->safe()->except(['image']);

        try {
            DB::beginTransaction();

            $invitation = auth()->user()->invitations()->findOrFail($request->invitationId);
            $intro = $invitation->intro()->create($validated_data);

            if (!empty($validated_file)) {
                $image_extension = $validated_file['image']->getClientOriginalExtension();

                $validated_file['image']->storeAs('images/' . $request->invitationId, '/intro/intro.' . $image_extension, 'public');

                $intro->update([
                    'image' => $invitation->id . '/intro/intro.' . $image_extension,
                ]);
            }

            DB::commit();

            return back()->with('message', "Berhasil dibuat");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function update(UpdateCoverSectionRequest $request, $introId)
    {
        $validated_file = $request->safe()->only(['image']);
        $validated_data = $request->safe()->except(['image']);

        try {
            DB::beginTransaction();

            $intro = IntroSection::find($introId);

            if (!empty($validated_file)) {
                if ($intro->image != null || $intro->image != "") {
                    Storage::disk('public')->delete('images/' . $intro->image);
                }

                $background_image_extension = $validated_file['image']->getClientOriginalExtension();

                $validated_file['image']->storeAs('images/' . $intro->invitation_id, '/intro/intro.' . $background_image_extension, 'public');

                $intro->update([
                    'image' => $intro->invitation_id . '/intro/intro.' . $background_image_extension,
                ]);
            }

            $intro->update($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
