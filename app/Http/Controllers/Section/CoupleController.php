<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Models\CoupleSection;
use App\Http\Requests\StoreCoupleSectionRequest;
use App\Http\Requests\UpdateCoupleSectionRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CoupleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCoupleSectionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCoupleSectionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CoupleSection  $coupleSection
     * @return \Illuminate\Http\Response
     */
    public function show(CoupleSection $coupleSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CoupleSection  $coupleSection
     * @return \Illuminate\Http\Response
     */
    public function edit(CoupleSection $coupleSection, $invitationId)
    {
        $coupleSection = $coupleSection->where('invitation_id', $invitationId)->first();

        return Inertia::render('Invitation/Section/CoupleSection', ['coupleData' => $coupleSection]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoupleSectionRequest  $request
     * @param  \App\Models\CoupleSection  $coupleSection
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoupleSectionRequest $request, CoupleSection $coupleSection, $coupleId)
    {
        $validated_file = $request->safe()->only(['background_image']);
        $validated_data = $request->safe()->except(['background_image']);

        try {
            DB::beginTransaction();

            $couple_section = $coupleSection->find($coupleId);

            if (!empty($validated_file)) {
                if ($couple_section->background_image != null || $couple_section->background_image != "") {
                    Storage::disk('public')->delete('images/' . $couple_section->background_image);
                }

                $background_image_extension = $validated_file['background_image']->getClientOriginalExtension();

                $validated_file['background_image']->storeAs('images/' . $couple_section->invitation_id, '/couple_section/couple_section.' . $background_image_extension, 'public');

                $couple_section->update([
                    'background_image' => $couple_section->invitation_id . '/couple_section/couple_section.' . $background_image_extension,
                ]);
            }

            $couple_section->update($validated_data);

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CoupleSection  $coupleSection
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoupleSection $coupleSection)
    {
        //
    }
}
