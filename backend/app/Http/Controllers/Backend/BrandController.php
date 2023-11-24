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
            'brands' => Brand::latest()->get(),
            'url' => URL::to('/')
        ];
        return Response::Out('', '', $data, 200);
    }
    function store(StoreRequest $request)
    {
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->slug = Brand::generateSlug($request->name);
        $brand->image = Brand::Image($request->hasFile('image'), $request->file('image'), '');
        ;
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
        $imageName = Brand::Image($request->hasFile('image'), $request->file('image'), $brand->image);
        if ($imageName != null) {
            $brand->image = $imageName;
        }
        $brand->update();

        return Response::Out('success', 'Brand Updated!', '', 200);
    }
    function destroy($id)
    {
        $brand = Brand::getBrandById($id);
        $file_path = public_path() . '/upload/images/brands/' . $brand->image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $brand->delete();

        return Response::Out('success', 'Brand Deleted!', '', 200);
    }
}
