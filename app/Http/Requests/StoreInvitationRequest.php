<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class StoreInvitationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "bride_nickname" => ['required'],
            "groom_nickname" => [''],
            "groom_fullname" => [''],
            "bride_fullname" => ['required'],
            "bride_father" => ['required'],
            "bride_mother" => ['required'],
            "groom_mother" => [''],
            "groom_father" => [''],
            "bride_as_child_position" => ['required'],
            "groom_as_child_position" => [],
            'bride_photo' => [
                '',
                File::image()
                    ->min(10)
                    ->max(1000)
                    ->dimensions(Rule::dimensions()->maxWidth(1000)->maxHeight(1000)),
            ],
            'groom_photo' => [
                '',
                File::image()
                    ->min(10)
                    ->max(1000)
                    ->dimensions(Rule::dimensions()->maxWidth(1000)->maxHeight(1000)),
            ],
        ];
    }
}
