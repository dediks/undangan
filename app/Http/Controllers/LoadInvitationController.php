<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;

class LoadInvitationController extends Controller
{
    public function __invoke(Request $request, $couple)
    {
        $invitation = Invitation::where('couple_id', $couple)->firstOrFail();

        if ($request->query('to')) {
            $guest = $invitation->guests()->where('nickname', $request->query('to'))->first();
            $invitation->to = $guest;
        }

        // if ($invitation->has("gmap")) {
        //     $invitation->gmap->api_key = config('gmap.api_key');
        // }

        $invitation = $invitation->load([
            'cover' => function (Builder $query) {
                $query->select('*');
            }, 'intro:id,invitation_id,title,show,image' => [
                'attributes' => (function (Builder $query) {
                    $query->select('id', 'attributable_id', 'attribute_name', 'value');
                })
            ], 'couple:id,invitation_id,title,show,description' => [
                'attributes' => (function (Builder $query) {
                    $query->select('id', 'attributable_id', 'attribute_name', 'value');
                })
            ], 'galleries' => function (Builder $query) {
                $query->select('*');
            }, 'quoteSection:id,invitation_id,title,subtitle,quote_id' => [
                'attributes' => (function (Builder $query) {
                    $query->select('id', 'attributable_id', 'attribute_name', 'value');
                }),
                'quote' => (function (Builder $query) {
                    $query->select('id', 'title', 'content', 'author');
                }),
            ], 'gmap' => function (Builder $query) {
                $query->select('*');
            }, 'events' => function (Builder $query) {
                $query->select('*');
            }, 'whatsappForm' => function (Builder $query) {
                $query->select('*');
            }, 'guests' => function (Builder $query) {
                $query->where('message', '!=', '');
            }, 'storySection:id,invitation_id,title,description,background_image' => [
                'attributes' => (function (Builder $query) {
                    $query->select('id', 'attributable_id', 'attribute_name', 'value');
                }),
                'stories' => (function (Builder $query) {
                    $query->select('id', 'title', 'story', 'date', 'image', "story_section_id");
                }),
            ], 'guestBookSection:id,invitation_id,title,description' => [
                'attributes' => (function (Builder $query) {
                    $query->select('id', 'attributable_id', 'attribute_name', 'value');
                }),
            ],
            'music:id,url',
            'gifts:id,invitation_id,title,address,name,bank,type',
        ]);

        $invitationData = $invitation->attributesToArray();
        $relations = $invitation->relationsToArray();

        // dd($relations);

        $response = array_merge($invitationData, $relations);

        return Inertia::render('Themes/' . $invitation->theme_id, ["data" => $response]);
    }
}
