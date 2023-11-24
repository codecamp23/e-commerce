<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name', 'slug', 'image', 'brand_id'
    ];


    public static function generateSlug($name)
    {
        $category = Category::where('name', $name)->get();
        if ($category->count() > 0) {
            $count = $category->count();
            $slug = Str::slug($name).'-'.$count;
        }else{
            $slug = Str::slug($name);
        }
        return $slug;
    }

    public static function Image($hasFileImage, $fileImage, $categoryImage)
    {
        if ($hasFileImage) {
            $file_path = public_path() . '/upload/images/categories/' . $categoryImage;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $file = $fileImage;
            $extension = $file->getClientOriginalName();
            $filename = time() . '-category-' . $extension;
            $file->move('upload/images/categories/', $filename);
            return $filename;
        }else{
            return null;
        }
    }
    public static function getBrandById($id)
    {
        return Category::findOrFail(intval($id));
    }
    public static function generateSlugForUpdate($categoryName, $categorySlug, $requestName)
    {
        if ($categoryName != $requestName) {
            $slug = Category::generateSlug($requestName);
        }else{
            $slug = $categorySlug;
        }
        return $slug;
    }
}
