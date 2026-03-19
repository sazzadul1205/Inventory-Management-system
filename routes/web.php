<?php

use App\Http\Controllers\FrontEndController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::get('/', [FrontEndController::class, 'home'])->name('home.index');
Route::get('/services', [FrontEndController::class, 'services'])->name('services.index');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'backend/Dashboards/AdminDashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
