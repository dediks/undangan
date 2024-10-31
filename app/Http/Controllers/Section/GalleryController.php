<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGalleryRequest;
use App\Models\ImageGallery;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $images = auth()->user()->invitations()->first()->galleries()->get();

        return Inertia::render('Dashboard/Galleries/Index', ["images" => $images]);
    }

    public function create()
    {
        $images = auth()->user()->invitations()->first()->galleries()->get();

        if (count($images) >= 10) {
            return;
        }

        return Inertia::render('Dashboard/Galleries/Create');
    }

    public function destroy($galleryId)
    {
        try {
            $gallery = ImageGallery::find($galleryId);

            $path = public_path($gallery->image_url);

            $delete = unlink($path);

            if ($delete) {
                $gallery->delete();
            }

            return back()->with('message', 'Gambar berhasil dihapus');
        } catch (\Throwable $th) {
            return back()->with('message', 'Gambar gagal dihapus');
        }
    }

    public function store(StoreGalleryRequest $request, $invitationId)
    {
        $validated_file = $request->safe()->only(['image']);
        $validated_data = $request->safe()->except(['image']);

        try {
            DB::beginTransaction();

            $invitation = Invitation::find($invitationId);

            if (count($invitation->galleries) >= 10) {
                return back()->with('message', "Slot untuk mengupload gambar udah habis");
            }

            $gallery  = $invitation->galleries()->create($validated_data);

            if (!empty($validated_file)) {
                $background_image_extension = $validated_file['image']->getClientOriginalExtension();

                $validated_file['image']->storeAs('images/' . $gallery->invitation_id, '/galleries/gallery_' . $gallery->id . '.' . $background_image_extension, 'public');

                $gallery->update([
                    'image_url' => 'storage/images/' . $gallery->invitation_id . '/galleries/gallery_' . $gallery->id . '.' . $background_image_extension
                ]);
            }

            DB::commit();

            return to_route('galleries.index', ["invitationId" => $invitation->id])->with('message', "Berhasil disimpan");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }

    public function edit()
    {
    }
}
