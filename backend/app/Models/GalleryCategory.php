<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class GalleryCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug'
    ];

    public static function generateSlug($name)
    {
        $category = GalleryCategory::where('name', $name)->get();
        if ($category->count() > 0) {
            $count = $category->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function getGalleryCategoryById($id)
    {
        return GalleryCategory::findOrFail(intval($id));
    }
    public static function generateSlugForUpdate($galleryCategoryName, $galleryCategorySlug, $requestName)
    {
        if ($galleryCategoryName != $requestName) {
            $slug = GalleryCategory::generateSlug($requestName);
        } else {
            $slug = $galleryCategorySlug;
        }
        return $slug;
    }
}
