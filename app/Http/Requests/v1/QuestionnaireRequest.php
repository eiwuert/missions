<?php

namespace App\Http\Requests\v1;

use Dingo\Api\Http\FormRequest;

class QuestionnaireRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'required|in:airport_preference,arrival_designation',
            'content' => 'required|array',
            'reservation_id' => 'required|exists:reservations,id'
        ];
    }
}
