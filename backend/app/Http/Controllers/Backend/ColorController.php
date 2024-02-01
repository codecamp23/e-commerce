<?php

namespace App\Http\Controllers\Backend;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    function get(Request $request)
    {
        $search = $request->search;
        if ($search != '') {
            $colors = Color::where('name', 'like', '%' . $search . '%')
                ->orWhere('color_code', 'like', '%' . $search . '%')
                ->latest()
                ->get();
        } else {
            $colors = Color::latest()->get();
        }
        return $colors;
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'color_code' => 'required|unique:colors,color_code',
        ]);
        Color::create($request->all());
        return Response::Out('success', 'Color Created!', '', 200);
    }
    function edit($id)
    {
        return Color::findOrFail(intval($id));
    }
    function update(Request $request, $id)
    { 
        $request->validate([
            'name' => 'required',
            'color_code' => 'required',
        ]);
        $colorCodeUnique = Color::where('color_code', $request->color_code)->first();
        if (!$colorCodeUnique) {
            Color::updateOrCreate(['id' => $id], $request->all());
            return Response::Out('success', 'Color Updated!', '', 200);
        }else{ 
            return Response::Out('unique', 'This color code is unique!', '', 200);
        }
    }
    function destroy($id)
    {
        Color::findOrFail(intval($id))->delete();
        return Response::Out('success', 'Color Deleted!', '', 200);
    }
}
