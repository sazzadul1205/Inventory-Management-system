<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
  /**
   * Show the broken page with error reason.
   */
  public function broken()
  {
    $reason = session('error_reason', 'No specific error details available.');
    return Inertia::render('Errors/PageBroken', [
      'reason' => $reason
    ]);
  }
}
