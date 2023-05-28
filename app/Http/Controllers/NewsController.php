<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::orderBy('id', 'asc')->paginate(3));
        return Inertia::render('Homepage', [
            'title' => "UAS-Berita",
            'desc' => "Selamat datang di portal UAS-Berita",
            'news' => $news,
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
        $news = new News();
        if($image = $request->file('image')){
            $destinationPath = 'build/assets/image';
            $imageName = date('YmdHis') . "." . $image -> getClientOriginalExtension();
            $image->move($destinationPath, $imageName);
            $news->image = $imageName;
        }
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->content = $request->content;
        $news->save();

        return redirect()->back()->with('message', 'berita berhasil dibuat');

    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews= $news::where('author',auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if($image = $request->file('image')){
            $destinationPath = 'build/assets/image';
            $imageName = date('YmdHis') . "." . $image -> getClientOriginalExtension();
            $image->move($destinationPath, $imageName);
            News::where('id',$request->id)->update([
                'image' => $imageName,
            ]);
        }
        News::where('id',$request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'content' => $request->content,
        ]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $news = News::Find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'berita berhasil dihapus');
    }
}
