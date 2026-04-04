<?php

use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;


// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::controller(FrontEndController::class)->group(function () {

    // Home
    Route::get('/', 'home')->name('home.index');

    // Static Pages
    $pages = [
        'services',
        'features',
        'how-it-works' => 'howItWorks',
        'industries',
        'success-stories' => 'successStories',
        'testimonials',
        'pricing-plans' => 'pricingPlans',
        'faq',
        'contact',
        'about-us' => 'aboutUs',
        'why-choose-us' => 'whyChooseUs',
        'blog',
        'news',
        'partners',
        'global-presence' => 'globalPresence',
        'careers',
        'trust-signals' => 'trustSignals',
    ];

    foreach ($pages as $uri => $method) {

        // Handle numeric keys (same name)
        if (is_int($uri)) {
            $uri = $method;
        }

        // Convert URI to route name
        $routeName = str_replace('-', '.', $uri) . '.index';

        Route::get("/{$uri}", $method)->name($routeName);
    }
});

/*
|--------------------------------------------------------------------------
| Error Routes
|--------------------------------------------------------------------------
*/

Route::get('/page-broken', [PageController::class, 'broken'])->name('page.broken');

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'backend/Dashboards/AdminDashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';