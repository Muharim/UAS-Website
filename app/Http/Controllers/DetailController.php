<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(News $news, $id)
    {
        $myNews= $news::where('id',$id)->get();
        return Inertia::render('NewsDetail', [
            'title' => "UAS-Berita",
            'desc' => "Selamat datang di portal UAS-Berita",
            'id' => $id,
            'news' => $myNews
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
