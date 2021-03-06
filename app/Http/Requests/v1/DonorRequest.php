<?php

namespace App\Http\Requests\v1;

use App\Utilities\v1\Country;
use Dingo\Api\Http\FormRequest;

class DonorRequest extends FormRequest
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
        $rules = [
            'name'         => 'required|string',
            'company'      => 'string',
            'email'        => 'email',
            'phone'        => 'string',
            'address'      => 'string',
            'city'         => 'string',
            'state'        => 'string',
            'zip'          => 'required|string',
            'country_code' => 'required|in:' . Country::codes(),
            'account_id'   => 'string|unique:donors',
            'account_type' => 'in:users,groups',
            'tags'         => 'array'
        ];

        if ($this->isMethod('put')) {
            $rules['account_id'] = 'string|unique:donors,account_id,' . $this->donors;
        }

        return $rules;
    }
}
