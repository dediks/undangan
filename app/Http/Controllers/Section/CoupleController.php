<?php

namespace App\Http\Controllers\Section;

use App\Models\CoupleSection;
use App\Http\Requests\StoreCoupleSectionRequest;
use App\Http\Requests\UpdateCoupleSectionRequest;

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
    public function edit(CoupleSection $coupleSection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoupleSectionRequest  $request
     * @param  \App\Models\CoupleSection  $coupleSection
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoupleSectionRequest $request, CoupleSection $coupleSection)
    {
        //
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
