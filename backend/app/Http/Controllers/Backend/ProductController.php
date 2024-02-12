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
        return Product::with('category', 'brand')->latest()->get();
    }
    function productRefundableChange($id)
    {
        $product = Product::findOrFail(intval($id)); 
        if ($product->refundable == 'yes') {
            $product->refundable = 'no';
            $product->save();

            return Response::Out('success_no', 'Product Refundable Cancel!', '', 200);
        }else{
            $product->refundable = 'yes';
            $product->save();

            return Response::Out('success_yes', 'Product Refundable!', '', 200);
        }
    }
    function productStatusChange($id)
    {
        $product = Product::findOrFail(intval($id)); 
        if ($product->status == 'publish') {
            $product->status = 'unpublish';
            $product->save();

            return Response::Out('unpublish', 'Product Status Unpublish!', '', 200);
        }else{
            $product->status = 'publish';
            $product->save();

            return Response::Out('publish', 'Product Status Publish!', '', 200);
        }
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
        $product->purchase_qty = $request->purchase_qty;
        $product->weight = $request->weight;
        $product->barcode = $request->barcode;
        $product->color_id = $request->color_id;
        $product->measurement_points = $request->measurement_points;
        $product->size = $request->size;
        $product->measurement_type = $request->measurement_type;
        $product->discount = $request->discount;
        $product->discount_price = $request->discount_price;
        $product->remark = $request->remark;
        $product->description = $request->description;
        $product->refundable = $request->refundable;
        $product->status = $request->status;
        // image name, size, extention
        $product->image = $request->image;
        $product->image_name = $request->image_name;
        $product->image_size = $request->image_size;
        $product->image_extention = $request->image_extention;
        // vat & tax
        $product->vat = $request->vat;
        $product->vat_status = $request->vat_status;
        $product->tax = $request->tax;
        $product->tax_status = $request->tax_status;
        // seo
        $tagTexts = [];
        foreach ($request->tags as $tag) { 
            $tagTexts[] = $tag['text'];
        }
        $tags = implode(', ', $tagTexts);
        $product->meta_tag = $tags;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description; 
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
        $product->purchase_qty = $request->purchase_qty;
        $product->weight = $request->weight;
        $product->barcode = $request->barcode;
        $product->color_id = $request->color_id;
        $product->measurement_points = $request->measurement_points;
        $product->size = $request->size;
        $product->measurement_type = $request->measurement_type;
        $product->discount = $request->discount;
        $product->discount_price = $request->discount_price;
        $product->remark = $request->remark;
        $product->description = $request->description;
        $product->refundable = $request->refundable;
        $product->status = $request->status;
        // image name, size, extention
        $product->image = $request->image;
        $product->image_name = $request->image_name;
        $product->image_size = $request->image_size;
        $product->image_extention = $request->image_extention;
        // vat & tax
        $product->vat = $request->vat;
        $product->vat_status = $request->vat_status;
        $product->tax = $request->tax;
        $product->tax_status = $request->tax_status;
        // seo
        $tagTexts = [];
        foreach ($request->tags as $key => $tag) {
            $tagTexts[] = $tag['text'];
        }
        $tags = implode(', ', $tagTexts);
        $product->meta_tag = $tags;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $product->update();

        return Response::Out('success', 'Product Updated!', '', 200);
    }
    function destroy($id)
    {
        $product = Product::getBrandById($id);
        $product->delete();

        return Response::Out('success', 'Product Deleted!', '', 200);
    }
}
