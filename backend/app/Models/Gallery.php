<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'name',
        'gallery_category_id',
        'extention',
        'file_type',
        'size',
        'image',
    ];

    public function gallery_category()
    {
        return $this->belongsTo(GalleryCategory::class);
    }
    public static function Image($hasFileImage, $fileImage, $requestName, $brandImage)
    {
        if ($hasFileImage) {
            $file_path = public_path() . '/upload/images/gallery/' . $brandImage;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $file = $fileImage;
            $name = $requestName;
            $fileExtension = $file->getClientOriginalExtension();
            $filename = $name . "." . $fileExtension;
            $file->move('upload/images/gallery/', $filename);
            return $filename;
        } else {
            return null;
        }
    }
    public static function fileType($requestImage)
    {
        if ($requestImage) {
            $file = $requestImage;
            $fileType = $file->getClientMimeType();
            return $fileType;
        }
    } 
    public static function imageSize($requestImage)
    {
        if ($requestImage) {
            $file = $requestImage;
            $fileSize = $file->getSize();
            $fileSizeInKB = round($fileSize / 1024, 2);
            return $fileSizeInKB;
        }
    }
    public static function imageExtention($requestImage)
    {
        if ($requestImage) {
            $file = $requestImage;
            $extension = $file->getClientOriginalExtension();
            $fileExtension = ".".$extension;
            return $fileExtension;
        }
    }
    public static function Download($requestImage)
    {
        $file_path = public_path() . "/upload/images/gallery/" . $requestImage;
        if (!file_exists($file_path)) {
            abort(404);
        }

        $file = file_get_contents($file_path);
        return (new Response($file, 200))
            ->header('Content-Type', 'image/jpeg');
    }
}
