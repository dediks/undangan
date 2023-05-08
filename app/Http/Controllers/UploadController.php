<?php

namespace App\Http\Controllers;

use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('groom_photo')) {
            $file = $request->file('groom_photo');

            return $this->uploadFile($file);
        }

        if ($request->hasFile('bride_photo')) {
            $file = $request->file('bride_photo');

            return $this->uploadFile($file);
        }

        return '';
    }

    protected function uploadFile($file)
    {
        $filename = $file->getClientOriginalName();
        $folder = uniqid() . '-' . now()->timestamp;

        $file->storeAs('images/tmp/' . $folder, $filename, 'public');

        TemporaryFile::create([
            'filename' => $filename,
            'folder' => $folder
        ]);

        return $folder;
    }

    public function destroy(Request $request)
    {

        $fileId = $request->getContent();
        $temp_file = TemporaryFile::where('folder', $fileId)->first();

        if ($temp_file) {
            Storage::deleteDirectory('public/images/tmp/' . $fileId);
            $temp_file->delete();

            return response('');
        }

        return null;
    }

    public function show(Request $request, $id)
    {
        // $disk = config('filepond.temporary_files_disk', 'local');
        // $path = config('filepond.temporary_files_path', 'filepond') . DIRECTORY_SEPARATOR . $request->getContent();

        $temp_file = TemporaryFile::where('folder', $id)->first();

        if ($temp_file) {
            $path = 'public/images/tmp/' . $id . '/' . $temp_file->filename;

            $mime = Storage::disk('public')->mimeType($path);
            $file = Storage::disk('public')->get($path);

            return Response::make($file, 200, [
                'Content-Type' => $mime,
                'Content-Disposition' => 'inline; filename="' . $id . '"',
            ]);
        }
    }


    public function load(Request $request, $source)
    {
        // $disk = config('filepond.temporary_files_disk', 'local');
        // $path = config('filepond.temporary_files_path', 'filepond') . DIRECTORY_SEPARATOR . $request->getContent();

        $temp_file = TemporaryFile::where('folder', $source)->first();

        if ($temp_file) {
            $path = 'public/images/tmp/' . $source . '/' . $temp_file->filename;

            $mime = Storage::disk('public')->mimeType($path);
            $file = Storage::disk('public')->get($path);

            return Response::make($file, 200, [
                'Content-Type' => $mime,
                'Content-Disposition' => 'inline; filename="' . $source . '"',
            ]);
        }
    }
}
