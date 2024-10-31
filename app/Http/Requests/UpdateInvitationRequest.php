<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class UpdateInvitationRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;

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
            "groom_nickname" => ['required'],
            "groom_fullname" => ['required'],
            "bride_fullname" => ['required'],
            "bride_father" => ['required'],
            "bride_mother" => ['required'],
            "groom_mother" => ['required'],
            "groom_father" => ['required'],
            "groom_domicile" => ['required'],
            "bride_domicile" => ['required'],
            "bride_as_child_position" => ['required'],
            "groom_as_child_position" => ['required'],
            'bride_photo' => [
                Rule::excludeIf(gettype($this->bride_photo) == 'string' || gettype($this->bride_photo) == "NULL")
            ],
            'groom_photo' => [
                Rule::excludeIf(gettype($this->groom_photo) == 'string' || gettype($this->groom_photo) == "NULL")
            ],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        // $validator->after(function (Validator $validator) {
        //     if ($this->somethingElseIsInvalid()) {
        //         $validator->errors()->add('field', 'Something is wrong with this field!');
        //     }
        // });
    }

    public function attributes(): array
    {
        return [
            'bride_nickname' => 'Nama mempelai wanita',
            'groom_nickname' => 'Nama mempelai pria',
        ];
    }

    public function messages(): array
    {
        return [
            'bride_nickname.required' => 'Nama mempelai wanita harus diisi',
            'groom_nickname.required' => 'Nama mempelai pria harus diisi',
        ];
    }
}
