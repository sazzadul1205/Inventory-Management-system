<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Page\Page;
use App\Models\Page\SectionVariant as PageSectionVariant;
use Illuminate\Support\Facades\Log;

class FrontEndController extends Controller
{
    /**
     * Normalize section key by removing spaces and converting to lowercase.
     */
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
     * Load and transform page sections with their variants.
     * 
     * @param Page $page
     * @param array $allVariants
     * @param array $allVariantsNormalized
     * @param string|null &$errorReason
     * @return array
     */
    private function loadPageSections($page, $allVariants, $allVariantsNormalized, &$errorReason = null)
    {
        return $page->sections->map(function ($section) use ($allVariants, $allVariantsNormalized, &$errorReason) {
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
    }

    /**
     * Get all page variants grouped by section key.
     * 
     * @return array
     */
    private function getAllVariants()
    {
        $allVariants = PageSectionVariant::all()->groupBy('section_key');

        $allVariantsNormalized = $allVariants->mapWithKeys(function ($value, $key) {
            return [$this->normalizeSectionKey($key) => $value];
        });

        return [$allVariants, $allVariantsNormalized];
    }

    /**
     * Generic method to render a page by slug.
     * 
     * @param string $slug Page slug (home, services, features, howItWorks, industries)
     * @param string $componentPath Inertia component path
     * @param int $orderOffset Order offset for sections (0 for home, 2 for pages with hero)
     * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
     */
    private function renderPage($slug, $componentPath, $orderOffset = 0, $allowEmptySections = false)
    {
        try {
            $errorReason = null;

            // Fetch the page from database with its sections
            $page = Page::where('slug', $slug)
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
                $errorReason = ucfirst($slug) . ' page not found or inactive.';
                Log::error($errorReason);
                return redirect()->route('page.broken')->with('error_reason', $errorReason);
            }

            // Get all variants
            [$allVariants, $allVariantsNormalized] = $this->getAllVariants();

            // Load and transform sections
            $sections = $this->loadPageSections($page, $allVariants, $allVariantsNormalized, $errorReason);

            // If no valid sections → redirect with reason
            if (empty($sections)) {
                if ($allowEmptySections) {
                    $sections = [];
                } else {
                    $errorReason = $errorReason ?: "No valid sections found for " . ucfirst($slug) . " page.";
                    Log::error($errorReason);
                    return redirect()->route('page.broken')->with('error_reason', $errorReason);
                }
            }

            // Normalize order with offset
            foreach ($sections as $index => $section) {
                $sections[$index]['order'] = $index + $orderOffset;
            }

            // Prepare final data
            $pageData = [
                'id' => $page->id,
                'name' => $page->name,
                'slug' => $page->slug,
                'meta' => $page->meta,
                'sections' => $sections,
            ];

            return Inertia::render($componentPath, [
                'pageData' => $pageData
            ]);
        } catch (\Exception $e) {
            $errorReason = 'Database error: ' . $e->getMessage();
            Log::error($errorReason, ['trace' => $e->getTraceAsString()]);
            return redirect()->route('page.broken')->with('error_reason', $errorReason);
        }
    }

    /**
     * Show the Home page with data from database.
     */
    public function home()
    {
        return $this->renderPage('home', 'frontend/Home/Home', 0);
    }

    /**
     * Show the Services page with data from database.
     */
    public function services()
    {
        return $this->renderPage('services', 'frontend/Services/Service', 2);
    }

    /**
     * Show the Features page with data from database.
     */
    public function features()
    {
        return $this->renderPage('features', 'frontend/Features/Feature', 2);
    }

    /**
     * Show the How It Works page with data from database.
     */
    public function howItWorks()
    {
        return $this->renderPage('howItWorks', 'frontend/HowItWorks/HowItWorks', 2);
    }

    /**
     * Show the Industries page with data from database.
     */
    public function industries()
    {
        return $this->renderPage('industries', 'frontend/Industries/Industries', 2);
    }

    /**
     * Show the SuccessStories page with data from database.
     */
    public function successStories()
    {
        return $this->renderPage('successStories', 'frontend/SuccessStories/SuccessStories', 2);
    }

    /**
     * Show the Testimonials page with data from database.
     */
    public function testimonials()
    {
        return $this->renderPage('testimonials', 'frontend/Testimonials/Testimonials', 2);
    }

    /**
     * Show the PricingPlans page with data from database.
     */
    public function pricingPlans()
    {
        return $this->renderPage('pricingPlans', 'frontend/PricingPlans/PricingPlans', 2);
    }

    /**
     * Show the FAQ page with data from database.
     */
    public function faq()
    {
        return $this->renderPage('faq', 'frontend/FAQ/FAQ', 2);
    }

    /**
     * Show the Contact page with data from database.
     */
    public function contact()
    {
        return $this->renderPage('contact', 'frontend/Contact/Contact', 2);
    }

    /**
     * Show the AboutUs page with data from database.
     */
    public function aboutUs()
    {
        return $this->renderPage('aboutUs', 'frontend/AboutUs/AboutUs', 2);
    }

    /**
     * Show the WhyChooseUs page with data from database.
     */
    public function whyChooseUs()
    {
        return $this->renderPage('whyChooseUs', 'frontend/WhyChooseUs/WhyChooseUs', 2);
    }

    /**
     * Show the Blog page with data from database.
     */
    public function blog()
    {
        return $this->renderPage('blog', 'frontend/Blog/Blog', 2);
    }

    /**
     * Show the News page with data from database.
     */
    public function news()
    {
        return $this->renderPage('news', 'frontend/News/News', 2);
    }

    /**
     * Show the Partners page with data from database.
     */
    public function partners()
    {
        return $this->renderPage('partners', 'frontend/Partners/Partners', 2);
    }

    /**
     * Show the GlobalPresence page with data from database.
     */
    public function globalPresence()
    {
        return $this->renderPage('globalPresence', 'frontend/GlobalPresence/GlobalPresence', 2);
    }
}
