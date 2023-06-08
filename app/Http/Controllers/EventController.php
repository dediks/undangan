<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Invitation;
use Carbon\Carbon;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = auth()->user()->invitations()->first()->events()->get();
        return Inertia::render('Dashboard/Event/Index', ["events" => $events]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Dashboard/Event/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEventRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEventRequest $request, $invitationId)
    {
        $validated = $request->safe();
        $start = Carbon::parse($validated->start)->setTimezone('Asia/Jakarta');
        $end = Carbon::parse($validated->end)->setTimezone('Asia/Jakarta');

        $data = ['description' => $validated->description, "title" => $validated->title, 'location' => $validated->location, "start" => $start, "end" => $end];

        try {
            $event = Invitation::findOrFail($invitationId)->events()->create($data);

            return back()->with('message', 'Event berhasil ditambahkan');
        } catch (\Throwable $th) {
            throw $th;
        }
        return back()->with('message', 'Event gagal ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit($eventId)
    {
        $event = Event::find($eventId);

        return Inertia::render('Dashboard/Event/Create', ['event' => $event]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEventRequest  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEventRequest $updateEventRequest)
    {
        $validated = $updateEventRequest->safe();
        $invitationId = $updateEventRequest->invitationId;
        $eventId = $updateEventRequest->eventId;

        $start = Carbon::parse($validated->start)->setTimezone('Asia/Jakarta');
        $end = Carbon::parse($validated->end)->setTimezone('Asia/Jakarta');

        $data = ['description' => $validated->description, "title" => $validated->title, 'location' => $validated->location, "start" => $start, "end" => $end];

        try {
            $event = Event::findOrFail($eventId);
            $event->update($data);

            return back()->with('message', 'Update berhasil');
        } catch (\Throwable $th) {
            throw $th;
            return back()->with('message', 'Update Gagal');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */

    public function destroy($eventId)
    {
        $event = Event::find($eventId)->delete();

        return back()->with('message', 'Tamu berhasil dihapus');
    }
}
