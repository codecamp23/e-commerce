<?php

namespace App\Http\Controllers\Backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    function get()
    {
        return Category::latest()->get();
    }
    function store(StoreRequest $request)
    {
        // return $request->all();
        $category = new Category();
        $category->name = $request->name;
        $category->slug = Category::generateSlug($request->name);
        $category->brand_id = $request->brand_id;
        $category->image = $request->image;
        $category->image_name = $request->image_name;
        $category->image_size = $request->image_size;
        $category->image_extention = $request->image_extention;
        //seo
        $category->meta_title = $request->meta_title;
        $category->meta_des = $request->meta_des;
        $category->save();

        return Response::Out('success', 'Category Created!', '', 200);
    }
    function changeCategoryStatus($id)
    {
        $category = Category::findOrFail(intval($id));
        if ($category->status == "active") {
            $category->status = "inactive";
            $category->save();
            return Response::Out('success', 'Category Inactive!', '', 200);
        }else{
            $category->status = "active";
            $category->save();
            return Response::Out('success', 'Category Active!', '', 200);
        }
    }
    function edit($id)
    {
        return Category::getBrandById($id);
    }
    function update(UpdateRequest $request, $id)
    {
        $category = Category::getBrandById($id);
        // generate slug
        $slug = Category::generateSlugForUpdate($category->name, $category->slug, $request->name);
        $category->name = $request->name;
        $category->slug = $slug;
        $category->brand_id = $request->brand_id;
        $imageName = Category::Image($request->hasFile('image'), $request->file('image'), $category->image);
        if ($imageName != null) {
            $category->image = $imageName;
        }
        $category->update();

        return Response::Out('success', 'Category Updated!', '', 200);
    }
    function destroy($id)
    {
        $categories = Category::getBrandById($id);
        $categories->delete();

        return Response::Out('success', 'Category Deleted!', '', 200);
    }
}
