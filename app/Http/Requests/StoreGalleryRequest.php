<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreGalleryRequest extends FormRequest
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
            'alt' => "",
            'height' => "",
            'width' => "",
            'image' => [
                Rule::excludeIf(gettype($this->image) == 'string' || gettype($this->image) == "NULL")
            ],
        ];
    }
}