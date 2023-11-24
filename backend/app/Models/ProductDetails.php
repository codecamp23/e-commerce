<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class ProductDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'image'
    ];

    public static function Image($hasFileImage, $fileImage, $productDetailImage)
    {
        if ($hasFileImage) {
            $file_path = public_path() . '/upload/images/product_details/' . $productDetailImage;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $file = $fileImage;
            $extension = $file->getClientOriginalName();
            $filename = time() . '-product-details-' . $extension;
            $file->move('upload/images/product_details/', $filename);
            return $filename;
        }else{
            return null;
        }
    }
    public static function getBrandById($id)
    {
        return ProductDetails::findOrFail(intval($id));
    }
}
