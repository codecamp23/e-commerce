<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Brand extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'slug', 'image', 'image_name', 'image_size', 'image_extention', 'meta_title', 'meta_description'
    ];

    public static function generateSlug($name)
    {
        $category = Brand::where('name', $name)->get();
        if ($category->count() > 0) {
            $count = $category->count();
            $slug = Str::slug($name).'-'.$count;
        }else{
            $slug = Str::slug($name);
        }
        return $slug;
    }

    // public static function Image($hasFileImage, $fileImage, $brandImage)
    // {
    //     if ($hasFileImage) {
    //         $file_path = public_path() . '/upload/images/brands/' . $brandImage;

    //         if (File::exists($file_path)) {
    //             File::delete($file_path);
    //         }
    //         $file = $fileImage;
    //         $extension = $file->getClientOriginalName();
    //         $filename = time() . '-brand-' . $extension;
    //         $file->move('upload/images/brands/', $filename);
    //         return $filename;
    //     }else{
    //         return null;
    //     }
    // }
    public static function getBrandById($id)
    {
        return Brand::findOrFail(intval($id));
    }
    public static function generateSlugForUpdate($brandName, $brandSlug, $requestName)
    {
        if ($brandName != $requestName) {
            $slug = Brand::generateSlug($requestName);
        }else{
            $slug = $brandSlug;
        }
        return $slug;
    }
}
