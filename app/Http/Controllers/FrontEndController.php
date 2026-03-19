<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    /**
     * Show the Home page.
     * 
     */
    public function home()
    {
       return Inertia::render('frontend/Home/Home');
    }

    /**
     * Show the Services page.
     * 
     */
    public function services()
    {
       return Inertia::render('frontend/Services/Service');
    }

}
