<?php

namespace App\Http\Controllers\Backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    function get()
    {
        return Product::latest()->get();
    }
    function store(StoreRequest $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->slug = Product::generateSlug($request->name);
        $product->brand_id = $request->brand_id;

        $product->category_id = $request->category_id;
        $product->unit = $request->unit;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->discount_price = $request->discount_price;
        $product->offer = $request->offer;
        $product->description = $request->description;
        $product->refundable = $request->refundable;
        $product->meta_tag = $request->meta_tag;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $product->image = Product::Image($request->hasFile('image'), $request->file('image'), '');
        $product->save();

        return Response::Out('success', 'Product Created!', '', 200);
    }
    function edit($id)
    {
        return Product::getBrandById($id);
    }
    function update(UpdateRequest $request, $id)
    {
        $product = Product::getBrandById($id);
        // return $product->image;
        // generate slug
        $slug = Product::generateSlugForUpdate($product->name, $product->slug, $request->name);
        $product->name = $request->name;
        $product->slug = $slug;
        $product->brand_id = $request->brand_id;
        
        $product->category_id = $request->category_id;
        $product->unit = $request->unit;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->discount_price = $request->discount_price;
        $product->offer = $request->offer;
        $product->description = $request->description;
        $product->refundable = $request->refundable;
        $product->meta_tag = $request->meta_tag;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $imageName = Product::Image($request->hasFile('image'), $request->file('image'), $product->image);
        if ($imageName != null) {
            $product->image = $imageName;
        }
        $product->update();

        return Response::Out('success', 'Product Updated!', '', 200);
    }
    function destroy($id)
    {
        $product = Product::getBrandById($id);
        $file_path = public_path() . '/upload/images/products/' . $product->image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $product->delete();

        return Response::Out('success', 'Product Deleted!', '', 200);
    }
}
