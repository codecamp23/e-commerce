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
        'name',
        'slug',
        'brand_id',
        'category_id',
        'unit',
        'price',
        'purchase_qty',
        'weight',
        'barcode',
        'tags',
        'color_id',
        'measurement_points',
        'size',
        'measurement_type',
        'discount',
        'discount_price',
        'offer',
        'remark',
        'description',
        'refundable',
        'status',
        'image',
        'image_name',
        'image_size',
        'image_extention',
        'vat',
        'vat_status',
        'tax',
        'tax_status',
        'meta_tag',
        'meta_title',
        'meta_description',
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
