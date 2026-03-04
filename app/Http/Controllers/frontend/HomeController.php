<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Show the user's password settings page.
     */
    public function index()
    {
        return Inertia::render('frontend/Home/Home');
    }
}
