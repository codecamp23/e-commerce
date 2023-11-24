<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:200',
            'brand_id' => 'required',
            'category_id' => 'required',
            'unit' => 'required',
            'price' => 'required',
            'discount' => 'nullable',
            'discount_price' => 'nullable',
            'offer' => 'nullable',
            'description' => 'required',
            'refundable' => 'required',
            'image' => 'required|image|mimes:png,jpg,png,jpeg,webp',
            'meta_tag' => 'nullable',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable',
        ];
    }
}
