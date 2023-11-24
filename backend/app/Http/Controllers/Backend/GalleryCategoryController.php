<?php

namespace App\Http\Controllers\backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\GalleryCategory\StoreRequest;
use App\Http\Requests\GalleryCategory\UpdateRequest;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;

class GalleryCategoryController extends Controller
{
    function get()
    {
        return GalleryCategory::where('deleted_at', null)->latest()->get();
    }
    function store(StoreRequest $request)
    {
        $galleryCategory = new GalleryCategory();
        $galleryCategory->name = $request->name;
        $galleryCategory->slug = GalleryCategory::generateSlug($request->name);
        $galleryCategory->save();

        return Response::Out('success', 'Gallery Category Added!', '', 200);
    }
    function edit($id)
    {
        return GalleryCategory::getGalleryCategoryById($id);
    }
    function update(UpdateRequest $request, $id)
    {
        $galleryCategory = GalleryCategory::getGalleryCategoryById($id);
        $slug = GalleryCategory::generateSlugForUpdate($galleryCategory->name, $galleryCategory->slug, $request->name);
        $galleryCategory->name = $request->name;
        $galleryCategory->slug = $slug;
        $galleryCategory->save();

        return Response::Out('success', 'Gallery Category Updated!', '', 200);
    }
    function destroy($id)
    {
        $galleryCategory = GalleryCategory::getGalleryCategoryById($id);
        $galleryCategory->delete();
        return Response::Out('success', 'Gallery Category Deleted!', '', 200);
    }

}
