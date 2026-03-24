<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page\Page;
use App\Models\Page\SectionVariant as PageSectionVariant;

class FrontEndController extends Controller
{
   /**
    * Show the Home page with data from database.
    */
   public function home()
   {
      // Fetch the Home page from database with its sections and configs
      $page = Page::where('slug', 'home')
         ->where('is_active', true)
         ->with([
            'sections' => function ($query) {
               $query->where('enabled', true)
                  ->orderBy('order');
            }
         ])
         ->first();

      // If page not found → redirect
      if (!$page) {
         return redirect()->route('page.broken');
      }

      // Load all variants once (NO N+1)
      $allVariants = PageSectionVariant::all()->groupBy('section_key');

      // Transform sections safely
      $sections = $page->sections->map(function ($section) use ($allVariants) {
         // Find matching variant config
         $variantConfig = $allVariants[$section->section_key] ?? collect();
         $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

         // Fallback to variant1 if specific variant missing
         if (!$matchedVariant) {
            $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
         }

         // Still no config → skip section
         if (!$matchedVariant) {
            return null;
         }

         return [
            'type' => $section->section_key,
            'variant' => $section->variant,
            'order' => $section->order,
            'enabled' => $section->enabled,
            'props' => $section->props ?? [],
            'config' => $matchedVariant->config,
         ];
      })
         ->filter()
         ->sortBy('order')
         ->values()
         ->toArray();

      // If no valid sections → redirect
      if (empty($sections)) {
         return redirect()->route('page.broken');
      }

      // Normalize order to start at 1 for Home page
      foreach ($sections as $index => $section) {
         $sections[$index]['order'] = $index + 1;
      }

      // Prepare final data
      $pageData = [
         'id' => $page->id,
         'name' => $page->name,
         'slug' => $page->slug,
         'meta' => $page->meta,
         'sections' => $sections,
      ];

      return Inertia::render('frontend/Home/Home', [
         'pageData' => $pageData
      ]);
   }

   /**
    * Show the Services page with data from database.
    */
   public function services()
   {
      // Fetch the Services page from database with its sections and configs
      $page = Page::where('slug', 'services')
         ->where('is_active', true)
         ->with([
            'sections' => function ($query) {
               $query->where('enabled', true)
                  ->orderBy('order');
            }
         ])
         ->first();

      // If page not found → redirect
      if (!$page) {
         return redirect()->route('page.broken');
      }

      // Load all variants once (NO N+1)
      $allVariants = PageSectionVariant::all()->groupBy('section_key');

      // Transform sections safely
      $sections = $page->sections->map(function ($section) use ($allVariants) {
         // Find matching variant config
         $variantConfig = $allVariants[$section->section_key] ?? collect();
         $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

         // Fallback to variant1 if specific variant missing
         if (!$matchedVariant) {
            $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
         }

         // Still no config → skip section
         if (!$matchedVariant) {
            return null;
         }

         return [
            'type' => $section->section_key,
            'variant' => $section->variant,
            'order' => $section->order,
            'enabled' => $section->enabled,
            'props' => $section->props ?? [],
            'config' => $matchedVariant->config,
         ];
      })
         ->filter()
         ->sortBy('order')
         ->values()
         ->toArray();

      // If no valid sections → redirect
      if (empty($sections)) {
         return redirect()->route('page.broken');
      }

      // Normalize order to start at 2 for Services (hero is built-in)
      foreach ($sections as $index => $section) {
         $sections[$index]['order'] = $index + 2;
      }

      // Prepare final data
      $pageData = [
         'id' => $page->id,
         'name' => $page->name,
         'slug' => $page->slug,
         'meta' => $page->meta,
         'sections' => $sections,
      ];

      return Inertia::render('frontend/Services/Service', [
         'pageData' => $pageData
      ]);
   }

   /**
    * Show the Features page with data from database.
    */
   public function features()
   {
      // Fetch the Features page from database with its sections and configs
      $page = Page::where('slug', 'features')
         ->where('is_active', true)
         ->with([
            'sections' => function ($query) {
               $query->where('enabled', true)
                  ->orderBy('order');
            }
         ])
         ->first();

      // If page not found → redirect
      if (!$page) {
         return redirect()->route('page.broken');
      }

      // Load all variants once (NO N+1)
      $allVariants = PageSectionVariant::all()->groupBy('section_key');

      // Transform sections safely
      $sections = $page->sections->map(function ($section) use ($allVariants) {
         // Find matching variant config
         $variantConfig = $allVariants[$section->section_key] ?? collect();
         $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

         // Fallback to variant1 if specific variant missing
         if (!$matchedVariant) {
            $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
         }

         // Still no config → skip section
         if (!$matchedVariant) {
            return null;
         }

         return [
            'type' => $section->section_key,
            'variant' => $section->variant,
            'order' => $section->order,
            'enabled' => $section->enabled,
            'props' => $section->props ?? [],
            'config' => $matchedVariant->config,
         ];
      })
         ->filter()
         ->sortBy('order')
         ->values()
         ->toArray();

      // If no valid sections → redirect
      if (empty($sections)) {
         return redirect()->route('page.broken');
      }

      // Normalize order to start at 2 for Features (hero is built-in)
      foreach ($sections as $index => $section) {
         $sections[$index]['order'] = $index + 2;
      }

      // Prepare final data
      $pageData = [
         'id' => $page->id,
         'name' => $page->name,
         'slug' => $page->slug,
         'meta' => $page->meta,
         'sections' => $sections,
      ];

      return Inertia::render('frontend/Features/Feature', [
         'pageData' => $pageData
      ]);
   }
}
