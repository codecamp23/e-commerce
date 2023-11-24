<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand_id',
        'category_id',
        'name',
        'slug',
        'unit',
        'price',
        'discount',
        'discount_price',
        'offer',
        'description',
        'refundable',
        'image',
        'meta_tag',
        'meta_title',
        'meta_description'
    ];

    public static function generateSlug($name)
    {
        $product = Product::where('name', $name)->get();
        if ($product->count() > 0) {
            $count = $product->count();
            $slug = Str::slug($name).'-'.$count;
        }else{
            $slug = Str::slug($name);
        }
        return $slug;
    }

    public static function Image($hasFileImage, $fileImage, $productImage)
    {
        return $productImage;
        if ($hasFileImage) {
            $file_path = public_path() . '/upload/images/products/' . $productImage;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $file = $fileImage;
            $extension = $file->getClientOriginalName();
            $filename = time() . '-product-' . $extension;
            $file->move('upload/images/products/', $filename);
            return $filename;
        }else{
            return null;
        }
    }
    public static function getBrandById($id)
    {
        return Product::findOrFail(intval($id));
    }
    public static function generateSlugForUpdate($productName, $productSlug, $requestName)
    {
        if ($productName != $requestName) {
            $slug = Product::generateSlug($requestName);
        }else{
            $slug = $productSlug;
        }
        return $slug;
    }
}
