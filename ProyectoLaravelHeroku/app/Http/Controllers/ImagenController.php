<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imagen;

class ImagenController extends Controller
{
    //

    public function index()
    {

        $imagen = Imagen::all(); 
        return response()->json($imagen);
    }

    
    public function create(Request $request)
    {
        
        Imagen::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($imagen_id)
    {
       
        $catalogo= Imagen::findOrFail($imagen_id);
        
        return response()->json($imagen);
    }


    public function update(Request $request, $imagen_id)
    {
        
            Imagen::findOrFail($imagen_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($imagen_id)
    {
        Imagen::findOrFail($imagen_id)->delete();
        return response()->json(['success' => true]);
    }
    
}
