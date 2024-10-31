<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGmapSectionRequest;
use App\Http\Requests\UpdateGmapRequest;
use App\Models\GmapSection;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GmapController extends Controller
{
    public function edit($invitationId)
    {
        $gmap = Invitation::find($invitationId)->gmap;

        return Inertia::render('Invitation/Section/Gmap', ['gmapData' => $gmap, 'apiKey' => config('gmap.api_key')]);
    }

    public function store(StoreGmapSectionRequest $request)
    {
        $validated_data = $request->safe()->toArray();

        try {
            DB::beginTransaction();

            $invitation = auth()->user()->invitations()->findOrFail($request->invitationId);
            $gmap = $invitation->gmap()->create($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil dibuat");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function update(UpdateGmapRequest $request, $gmapId)
    {
        $validated_data = $request->safe()->toArray();

        try {
            DB::beginTransaction();

            $gmap = GmapSection::find($gmapId);

            $gmap->update($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
