<?php

namespace App\Http\Controllers\Backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductDetail\StoreRequest;
use App\Http\Requests\ProductDetail\UpdateRequest;
use App\Models\Product;
use App\Models\ProductDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductDetailController extends Controller
{
    
    function get()
    {
        return Product::latest()->get();
    }
    function store(StoreRequest $request)
    {
        $productDetail = new ProductDetails();
        $productDetail->name = $request->name;
        $productDetail->brand_id = $request->brand_id;
        $productDetail->image = ProductDetails::Image($request->hasFile('image'), $request->file('image'), '');
        $productDetail->save();

        return Response::Out('success', 'Product detail Created!', '', 200);
    }
    function edit($id)
    {
        return ProductDetails::getBrandById($id);
    }
    function update(Request  $request, $id)
    {
        $productDetail = ProductDetails::getBrandById($id);
        $productDetail->name = $request->name;
        $productDetail->brand_id = $request->brand_id;
        $imageName = ProductDetails::Image($request->hasFile('image'), $request->file('image'), $productDetail->image);
        if ($imageName != null) {
            $productDetail->image = $imageName;
        }
        $productDetail->update();

        return Response::Out('success', 'Product detail Updated!', '', 200);
    }
    function destroy($id)
    {
        $productDetail = ProductDetails::getBrandById($id);
        $file_path = public_path() . '/upload/images/product_details/' . $productDetail->image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $productDetail->delete();

        return Response::Out('success', 'Product detail Deleted!', '', 200);
    }
}
