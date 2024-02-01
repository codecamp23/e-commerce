<?php

namespace App\Http\Controllers\Backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Models\Size;
use Illuminate\Http\Request;

class SizeController extends Controller
{
    function get(Request $request)
    {
        $search = $request->search;
        if ($search != '') {
            $colors = Size::where('name', 'like', '%' . $search . '%')
                ->orWhere('color_code', 'like', '%' . $search . '%')
                ->latest()
                ->get();
        } else {
            $colors = Size::latest()->get();
        }
        return $colors;
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'color_code' => 'required|unique:colors,color_code',
        ]);
        Size::create($request->all());
        return Response::Out('success', 'Color Created!', '', 200);
    }
    function edit($id)
    {
        return Size::findOrFail(intval($id));
    }
    // function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'name' => 'required',
    //         'color_code' => 'required',
    //     ]);
    //      $colorCodeUnique = Color::where('color_code', $request->color_code)->first();
    //     if (!$colorCodeUnique) {
    //         Color::updateOrCreate(['id' => $id], $request->all());
    //         return Response::Out('success', 'Color Updated!', '', 200);
    //     } else {
    //         return Response::Out('unique', 'This color code is unique!', '', 200);
    //     }
    // }
    // function destroy($id)
    // {
    //     Color::findOrFail(intval($id))->delete();
    //     return Response::Out('success', 'Color Deleted!', '', 200);
    // }
}
