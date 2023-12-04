<?php

namespace App\Http\Controllers\backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Gallery\StoreRequest;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class GalleryController extends Controller
{
    function get(Request $request)
    {
        $search = $request->input('search');
        $gallery_category_id = $request->input('gallery_category_id');
        if (!is_null($search) && !is_null($gallery_category_id)) {
            $galleries = Gallery::where('gallery_category_id', $gallery_category_id)
                ->where('name', 'like', '%' . $search . '%')
                ->latest()
                ->get();
        } elseif ($gallery_category_id != "") {
            $galleries = Gallery::where('gallery_category_id', $gallery_category_id)
                ->latest()
                ->get();
        } elseif ($search != "") {
            $galleries = Gallery::where('name', 'like', '%' . $search . '%')
                ->latest()
                ->get();
        } else {
            $galleries = Gallery::latest()->get();
        }
        $data = [
            'galleries' => $galleries,
            'url' => URL::to('/')
        ];
        return Response::Out('', '', $data, 200);
    }
    function store(StoreRequest $request)
    {
        $gallery = new Gallery();
        $gallery->name = $request->name;
        $gallery->gallery_category_id = $request->gallery_category_id;
        $gallery->file_type = Gallery::fileType($request->file('image'));
        $gallery->size = Gallery::imageSize($request->file('image'));
        $gallery->extention = Gallery::imageExtention($request->file('image'));
        $gallery->image = Gallery::Image($request->hasFile('image'), $request->file('image'), $request->name, '');
        $gallery->save();

        return Response::Out('success', 'Gallery Image Added!', '', 200);
    }
    function info($id)
    {
        $gallery = Gallery::findOrFail(intval($id));
        $data = [
            'gallery' => $gallery,
            'gallery_category' => $gallery->gallery_category
        ];
        return Response::Out('', '', $data, 200);
    }
    function imageDetailDownload($image)
    {
        return Gallery::Download($image);
    }
    function imageDownload($image)
    {
        return Gallery::Download($image);
        // return $image;
    }
    function destroy($id)
    {
        $gallery = Gallery::findOrFail(intval($id));
        $gallery->delete();

        return Response::Out('success', 'Gallery Image Delete', '', 200);
    }
    function destroyMultiple(Request $request)
    {
        if ($request->ids != null) {
            Gallery::whereIn('id', $request->ids)->delete();
            return Response::Out('success', 'Selected Gallery Images Delete', '', 200);
        } else {
            return Response::Out('fail', 'Something wrong!', '', 200);
        }
    }
    function trustBin(Request $request)
    {
        $search = $request->search;
        if ($search != null) {
            $galleries = Gallery::onlyTrashed()->where('name', 'like', '%' . $search . '%')->get();
        } else {
            $galleries = Gallery::onlyTrashed()->get();
        }
        $data = [
            'galleries' => $galleries,
            'url' => URL::to('/')
        ];
        return Response::Out('', '', $data, 200);
    }
    function trustBinInfo($id)
    {
        $gallery = Gallery::withTrashed()->findOrFail(intval($id));
        $data = [
            'gallery' => $gallery,
            'gallery_category' => $gallery->gallery_category
        ];
        return Response::Out('', '', $data, 200);
    }
    function restore($id)
    {
        $gallery = Gallery::withTrashed()->findOrFail(intval($id));
        if (!is_null($gallery)) {
            $gallery->restore();
        }
        return Response::Out('success', 'This Image Restore', '', 200);
    }
    function restoreMultiple(Request $request)
    {
        if ($request->ids != null) {
            Gallery::withTrashed()->whereIn('id', $request->ids)->restore();
            return Response::Out('success', 'Selected Gallery Images Restore', '', 200);
        } else {
            return Response::Out('fail', 'Something wrong!', '', 200);
        }
    }
    function forceDelete($id)
    {
        $gallery = Gallery::withTrashed()->findOrFail(intval($id));
        if (!is_null($gallery)) {
            $file_path = public_path() . '/upload/images/gallery/' . $gallery->image;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
        }
        $gallery->forceDelete();
        return Response::Out('success', 'Gallery Image Permanently Delete!', '', 200);
    }
    function forceDeleteMultiple(Request $request)
    {
        if ($request->ids != null) {
            $galleries = Gallery::withTrashed()->whereIn('id', $request->ids)->get();

            foreach ($galleries as $gallery) {
                $file_path = public_path() . '/upload/images/gallery/' . $gallery->image;

                if (File::exists($file_path)) {
                    File::delete($file_path);
                }
                $gallery->forceDelete();
            }
            return Response::Out('success', 'Gallery Image Permanently Delete!', '', 200);
        } else {
            return Response::Out('fail', 'Something wrong!', '', 200);
        }
    }
    function galleries(Request $request)
    {
        $gallery_category_id = $request->gallery_category_id;
        $search = $request->search;
        if ($gallery_category_id != null && $search != null) {
            $galleries = Gallery::where('gallery_category_id', $request->gallery_category_id)
                ->where('name', 'like', '%' . $search . '%')
                ->latest()
                ->paginate(6);
        } elseif ($gallery_category_id != null) {
            $galleries = Gallery::where('gallery_category_id', $request->gallery_category_id)
                ->latest()
                ->paginate(6);
        } elseif ($search != null) {
            $galleries = Gallery::where('name', 'like', '%' . $search . '%')
                ->latest()
                ->paginate(6);
        } else {
            $galleries = Gallery::latest()->paginate(6);
        }
        $data = [
            'galleries' => $galleries,
            'url' => URL::to('/')
        ];
        return Response::Out('', '', $data, 200);
    }
    function galleryCategories()
    {
        return GalleryCategory::all();
    }
}
