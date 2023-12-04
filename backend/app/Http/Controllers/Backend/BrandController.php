<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Exceptions\Response;
use App\Http\Requests\Brand\StoreRequest;
use App\Http\Requests\Brand\UpdateRequest;
use App\Models\Brand;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class BrandController extends Controller
{
    function get()
    {
        $data = [
            'brands' => Brand::latest()->get()
        ];
        return Response::Out('', '', $data, 200);
    }
    function store(StoreRequest $request)
    {
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->slug = Brand::generateSlug($request->name);
        $brand->image = $request->image;
        $brand->image_name = $request->image_name;
        $brand->image_size = $request->image_size;
        $brand->image_extention = $request->image_extention;
        //seo
        $brand->meta_title = $request->meta_title;
        $brand->meta_description = $request->meta_description;
        $brand->save();

        return Response::Out('success', 'Brand Created!', '', 200);
    }
    function edit($id)
    {
        return Brand::getBrandById($id);
    }
    function update(UpdateRequest $request, $id)
    {
        $brand = Brand::getBrandById($id);
        // generate slug
        $slug = Brand::generateSlugForUpdate($brand->name, $brand->slug, $request->name);
        $brand->name = $request->name;
        $brand->slug = $slug;
        $brand->image = $request->image;
        $brand->image_name = $request->image_name;
        $brand->image_size = $request->image_size;
        $brand->image_extention = $request->image_extention;
        $brand->update();

        return Response::Out('success', 'Brand Updated!', '', 200);
    }
    function destroy($id)
    {
        $brand = Brand::getBrandById($id);
        $brand->delete();

        return Response::Out('success', 'Brand Deleted!', '', 200);
    }
}
