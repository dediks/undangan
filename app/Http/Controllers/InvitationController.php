<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvitationRequest;
use App\Http\Requests\UpdateInvitationRequest;
use App\Models\Invitation;
use App\Models\TemporaryFile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class InvitationController extends Controller
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
        $invitation_data = null;

        if (Auth::user()->isUser()) {
            $invitation_data = Auth::user()->invitations()->first();
        };
        // dd($invitation_data);
        return Inertia::render('Invitation/BrideGroomSection/Create', ["invitation_data" => $invitation_data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInvitationRequest $request)
    {
        $validated_file = $request->safe()->only(['groom_photo', 'bride_photo']);
        $validated_data = $request->safe()->except(['groom_photo', 'bride_photo']);

        try {
            DB::beginTransaction();

            $invitation = Auth::user()->invitations()->create($validated_data);

            $groom_photo_extension = $validated_file['groom_photo']->getClientOriginalExtension();
            $bride_photo_extension = $validated_file['bride_photo']->getClientOriginalExtension();

            $validated_file['groom_photo']->storeAs('images/' . $invitation->id, '/groom_photo.' . $groom_photo_extension, 'public');
            $validated_file['bride_photo']->storeAs('images/' . $invitation->id, '/bride_photo.' . $bride_photo_extension, 'public');

            $invitation->update([
                'groom_photo' => $invitation->id . '/groom_photo.' . $groom_photo_extension,
                'bride_photo' => $invitation->id . '/bride_photo.' . $bride_photo_extension
            ]);

            DB::commit();

            return to_route('invitation.show', $invitation->id);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal disimpan");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Invitation $invitation)
    {
        return Inertia::render('Invitation/Show', ['invitation' => $invitation]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        dd($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInvitationRequest $request, $bridegroomId)
    {
        $validated_file = $request->safe()->only(['groom_photo', 'bride_photo']);
        $validated_data = $request->safe()->except(['groom_photo', 'bride_photo']);

        try {
            DB::beginTransaction();

            $invitation = Invitation::find($bridegroomId);

            if (!empty($validated_file)) {
                foreach ($validated_file as $key => $value) {
                    //menghapus gambar sebelumnya
                    Storage::disk('public')->delete('images/' . $invitation[$key]);

                    $folder = 'images/' . $invitation->id;
                    $filename = '/' . $key . '.' . $value->getClientOriginalExtension();

                    $value->storeAs($folder, $filename, 'public');

                    $invitation->update([
                        $key => $invitation->id . $filename
                    ]);
                }
            }

            $invitation->update($validated_data);

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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
