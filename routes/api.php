<?php

use App\Models\Page\Page;
use Illuminate\Support\Facades\Route;

// GET: /api/pages -- Get all pages
Route::get('/pages', function () {
  return Page::query()
    ->where('is_active', true)
    ->orderBy('order')
    ->select(["name", "slug", "is_active", "order",])
    ->get();
});
