<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIntroSectionRequest;
use App\Http\Requests\UpdateIntroSectionRequest;
use App\Models\IntroSection;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Inertia\Inertia;

class IntroController extends Controller
{
    public function edit($invitationId)
    {
        $invitation = Invitation::findOrFail($invitationId);

        $bridegroom = [
            'bride' => $invitation->bride_nickname,
            'groom' => $invitation->groom_nickname,
        ];

        if ($invitation->events) {
            $invitation->load(['events:id,title,start,end,invitation_id']);
        }

        if ($invitation->intro) {
            $invitation->load(
                ['intro:id,invitation_id,title,show,image' => [
                    'attributes' => function (Builder $query) {
                        $query->select('id', 'attributable_id', 'attribute_name', 'value');
                    }
                ]]
            );
        }

        $events = $invitation->events->toArray();
        // dd($events);
        $introData = $invitation->intro->attributesToArray();
        // dd($introData);
        $introAttributes = $invitation->intro->attributes->toArray();
        // dd($introAttributes);

        $theme_id = auth()->user()->invitations()->first('theme_id')['theme_id'];

        // dd($theme_id);
        $json = File::get(resource_path('themes/' . $theme_id . '.json'));
        $schema = json_decode($json, true);

        foreach ($schema as $a) {
            if ($a["collectionName"] == 'intros') {
                $schema = $a;
            }
        }

        // dd($schema);

        return Inertia::render('Invitation/Section/IntroSection', ['introData' => $introData, 'attributes' => $introAttributes, 'events' => $events, 'bridegroom' => $bridegroom, 'schema' => $schema]);
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

    public function update(UpdateIntroSectionRequest $request, $introId)
    {
        $validated_file = $request->safe()->only(['image']);
        $validated_data = $request->safe()->except(['image', 'attributes']);
        $list_attributes = $request->safe()->only('attributes');

        try {
            DB::beginTransaction();

            $intro = IntroSection::findOrFail($introId);

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

            if ($list_attributes) {
                foreach ($list_attributes['attributes'] as $key => $attr) {
                    $intro->attributes()->where('attribute_name', $attr['attribute_name'])->update(['value' => $attr["value"]]);
                }
            }

            DB::commit();

            return back()->with('message', "Berhasil diupdate");
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return back()->with('message', "Gagal diupdate");
    }
}
