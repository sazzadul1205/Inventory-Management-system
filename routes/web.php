<?php

use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;


// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

// Public routes
Route::get('/', [FrontEndController::class, 'home'])->name('home.index');
Route::get('/services', [FrontEndController::class, 'services'])->name('services.index');
Route::get('/features', [FrontEndController::class, 'features'])->name('features.index');
Route::get('/how-it-works', [FrontEndController::class, 'howItWorks'])->name('how-it-works.index');

// Error pages
Route::get('/page-broken', [PageController::class, 'broken'])->name('page.broken');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'backend/Dashboards/AdminDashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
