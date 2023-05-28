<?php

use App\Http\Controllers\DetailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MainPostController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/new', function () {
    $news = new NewsCollection(News::orderBy('id', 'desc')->paginate(10));
    return Inertia::render('NewestNews', [
        'title' => "UAS-Berita",
        'desc' => "Selamat datang di portal UAS-Berita",
        'news' => $news,
    ]);
})->name('new');

Route::get('/popular', function () {
    $news = News::all();
    return Inertia::render('PopularNews', [
        'title' => "UAS-Berita",
        'desc' => "Selamat datang di portal UAS-Berita",
        'news' => $news,
    ]);
})->name('popular');

Route::get('/detail/{id}', [DetailController::class, 'index'])->name('detail.show');

Route::get('/mainpost', [MainPostController::class, 'index'])->name('mainpost.index');

Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');

Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');

Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');

Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.news');

Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.news');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
