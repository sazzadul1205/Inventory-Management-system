<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Page\Page;
use App\Models\Page\SectionVariant as PageSectionVariant;
use Illuminate\Support\Facades\Log;

class FrontEndController extends Controller
{
   private function normalizeSectionKey($key)
   {
      $key = trim((string) $key);
      if ($key === '') {
         return $key;
      }
      $key = str_replace(' ', '', $key);
      return lcfirst($key);
   }
   /**
    * Show the Home page with data from database.
    */
   public function home()
   {
      try {
         $errorReason = null;

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

         // If page not found → redirect with reason
         if (!$page) {
            $errorReason = 'Home page not found or inactive.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
         }

         // Load all variants once (NO N+1)
         $allVariants = PageSectionVariant::all()->groupBy('section_key');
         $allVariantsNormalized = $allVariants->mapWithKeys(function ($value, $key) {
            return [$this->normalizeSectionKey($key) => $value];
         });

         // Transform sections safely
         $sections = $page->sections->map(function ($section) use ($allVariants, $allVariantsNormalized, &$errorReason) {
            $normalizedKey = $this->normalizeSectionKey($section->section_key);
            // Find matching variant config
            $variantConfig = $allVariantsNormalized[$normalizedKey]
               ?? $allVariants[$section->section_key]
               ?? collect();
            $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

            // Fallback to variant1 if specific variant missing
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
            }
            // Final fallback: use any available variant for this section
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->first();
            }

            // Still no config → skip section and record reason
            if (!$matchedVariant) {
               $errorReason = "No variant config for section key: {$section->section_key}, variant: {$section->variant}";
               Log::warning($errorReason);
               return null;
            }

            return [
               'type' => $normalizedKey ?: $section->section_key,
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

         // If no valid sections → redirect with reason
         if (empty($sections)) {
            $errorReason = $errorReason ?: 'No valid sections found for Home page.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
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
      } catch (\Exception $e) {
         $errorReason = 'Database error: ' . $e->getMessage();
         Log::error($errorReason, ['trace' => $e->getTraceAsString()]);
         return redirect()->route('page.broken')->with('error_reason', $errorReason);
      }
   }

   /**
    * Show the Services page with data from database.
    */
   public function services()
   {
      try {
         $errorReason = null;

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

         // If page not found → redirect with reason
         if (!$page) {
            $errorReason = 'Services page not found or inactive.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
         }

         // Load all variants once (NO N+1)
         $allVariants = PageSectionVariant::all()->groupBy('section_key');
         $allVariantsNormalized = $allVariants->mapWithKeys(function ($value, $key) {
            return [$this->normalizeSectionKey($key) => $value];
         });

         // Transform sections safely
         $sections = $page->sections->map(function ($section) use ($allVariants, $allVariantsNormalized, &$errorReason) {
            $normalizedKey = $this->normalizeSectionKey($section->section_key);
            // Find matching variant config
            $variantConfig = $allVariantsNormalized[$normalizedKey]
               ?? $allVariants[$section->section_key]
               ?? collect();
            $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

            // Fallback to variant1 if specific variant missing
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
            }
            // Final fallback: use any available variant for this section
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->first();
            }

            // Still no config → skip section and record reason
            if (!$matchedVariant) {
               $errorReason = "No variant config for section key: {$section->section_key}, variant: {$section->variant}";
               Log::warning($errorReason);
               return null;
            }

            return [
               'type' => $normalizedKey ?: $section->section_key,
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

         // If no valid sections → redirect with reason
         if (empty($sections)) {
            $errorReason = $errorReason ?: 'No valid sections found for Services page.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
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
      } catch (\Exception $e) {
         $errorReason = 'Database error: ' . $e->getMessage();
         Log::error($errorReason, ['trace' => $e->getTraceAsString()]);
         return redirect()->route('page.broken')->with('error_reason', $errorReason);
      }
   }

   /**
    * Show the Features page with data from database.
    */
   public function features()
   {
      try {
         $errorReason = null;

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

         // If page not found → redirect with reason
         if (!$page) {
            $errorReason = 'Features page not found or inactive.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
         }

         // Load all variants once (NO N+1)
         $allVariants = PageSectionVariant::all()->groupBy('section_key');
         $allVariantsNormalized = $allVariants->mapWithKeys(function ($value, $key) {
            return [$this->normalizeSectionKey($key) => $value];
         });

         // Transform sections safely
         $sections = $page->sections->map(function ($section) use ($allVariants, $allVariantsNormalized, &$errorReason) {
            $normalizedKey = $this->normalizeSectionKey($section->section_key);
            // Find matching variant config
            $variantConfig = $allVariantsNormalized[$normalizedKey]
               ?? $allVariants[$section->section_key]
               ?? collect();
            $matchedVariant = $variantConfig->firstWhere('variant', $section->variant);

            // Fallback to variant1 if specific variant missing
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->firstWhere('variant', 'variant1');
            }
            // Final fallback: use any available variant for this section
            if (!$matchedVariant) {
               $matchedVariant = $variantConfig->first();
            }

            // Still no config → skip section and record reason
            if (!$matchedVariant) {
               $errorReason = "No variant config for section key: {$section->section_key}, variant: {$section->variant}";
               Log::warning($errorReason);
               return null;
            }

            return [
               'type' => $normalizedKey ?: $section->section_key,
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

         // If no valid sections → redirect with reason
         if (empty($sections)) {
            $errorReason = $errorReason ?: 'No valid sections found for Features page.';
            Log::error($errorReason);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
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
      } catch (\Exception $e) {
         $errorReason = 'Database error: ' . $e->getMessage();
         Log::error($errorReason, ['trace' => $e->getTraceAsString()]);
         return redirect()->route('page.broken')->with('error_reason', $errorReason);
      }
   }
}
