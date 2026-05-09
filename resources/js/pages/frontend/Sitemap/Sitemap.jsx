// page/frontend/Sitemap/Sitemap.jsx

// Inertia
import { Head } from "@inertiajs/react";

// React
import { Suspense, useEffect, useRef, useMemo } from "react";

// Layout
import FrontEnd_Layout from "../../../layouts/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Registry
import { skeletonRegistry, getSkeletonProps } from "./skeletonRegistry";

// Components
import PageHero from "@/components/PageHero";
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Main Sitemap Component
// ============================================================================

const Sitemap = ({ pageData = { meta: {}, sections: [] } }) => {
  const {
    sections = [],
    meta = {},
    seo = {}
  } = pageData;

  const mainContentRef = useRef(null);

  // Prepare SEO data
  const pageSeoData = useMemo(() => ({
    title: seo.title || meta.title || "Sitemap | Find Your Way Around Our Site",
    description: seo.description || meta.description || "Browse our complete sitemap to easily navigate through all pages, categories, resources, legal information, and social channels.",
    keywords: seo.keywords || meta.keywords || "sitemap, navigation, site index, all pages, categories, resources, legal links, social media links, site structure",
    ogImage: seo.ogImage || meta.ogImage || "/sitemap-og-image.jpg",
    ogType: seo.ogType || "website",
    twitterCard: seo.twitterCard || "summary_large_image",
    canonical: seo.canonical || meta.canonical || "",
    robots: seo.robots || "index, follow",
  }), [seo, meta]);

  // Handle scroll to main content and hash links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && mainContentRef.current) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  // Prepare sections for navigation
  const sectionsWithDisplayName = useMemo(() => [
    {
      id: "section-hero",
      type: "hero",
      displayName: "Sitemap",
    },
    ...sections.map((section) => {
      const displayNames = {
        allPagesIndex: "All Pages Index",
        categoryLinks: "Category Links",
        
        resourceLinks: "Resource Links",
        legalLinks: "Legal Links",
        socialMediaLinks: "Social Media Links",
      };

      const id = `section-${section.type}`;

      return {
        ...section,
        id,
        displayName:
          displayNames[section.type] ||
          section.type.replace(/([A-Z])/g, " $1").trim(),
      };
    }),
  ], [sections]);

  // Error section renderer
  const renderErrorSection = (type, variant, sectionId) => (
    <section
      key={sectionId}
      id={`section-${type}`}
      className="p-8 bg-red-100 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-700 rounded-lg m-4"
      role="alert"
      aria-label={`Error: Section ${type} not found`}
    >
      <h3 className="text-red-700 dark:text-red-400 font-bold">
        Error: Section not found
      </h3>
      <p className="text-red-600 dark:text-red-300">
        Type: {type}, Variant: {variant || "default"}
      </p>
      <p className="text-red-600 dark:text-red-300 text-sm mt-2">
        Available types: {Object.keys(sectionRegistry).join(", ")}
      </p>
    </section>
  );

  return (
    <>
      <Head>
        <title>{pageSeoData.title}</title>
        <meta name="description" content={pageSeoData.description} />
        {pageSeoData.keywords && <meta name="keywords" content={pageSeoData.keywords} />}
        <meta name="robots" content={pageSeoData.robots} />
        {pageSeoData.canonical && <link rel="canonical" href={pageSeoData.canonical} />}
        <meta property="og:title" content={pageSeoData.title} />
        <meta property="og:description" content={pageSeoData.description} />
        <meta property="og:image" content={pageSeoData.ogImage} />
        <meta property="og:type" content={pageSeoData.ogType} />
        <meta name="twitter:title" content={pageSeoData.title} />
        <meta name="twitter:description" content={pageSeoData.description} />
        <meta name="twitter:image" content={pageSeoData.ogImage} />
        <meta name="twitter:card" content={pageSeoData.twitterCard} />

        {/* Sitemap specific meta tags */}
        <meta property="og:site_name" content={seo.companyName || meta.companyName || "Our Company"} />
        <meta property="og:locale" content={seo.locale || meta.locale || "en_US"} />
      </Head>

      <FrontEnd_Layout>
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Skip to main content
        </a>

        {/* Page Hero */}
        <PageHero
          heroData={meta?.hero}
          defaults={{
            sectionId: "section-hero",
            ariaLabel: "Sitemap page hero section",
            breadcrumbLabel: "Sitemap",
            title: "Find Your Way",
            highlightedText: "Around Our Site",
            description:
              "Browse our complete sitemap to easily navigate through all pages, categories, resources, legal information, and social channels.",
            stats: [
              { value: "50+", label: "Total Pages" },
              { value: "8", label: "Main Categories" },
              { value: "100%", label: "Accessible" },
            ],
            primaryCta: {
              label: "Browse All Pages",
              ariaLabel: "View all pages index",
            },
            secondaryCta: {
              label: "Contact Us",
              ariaLabel: "Contact our team",
            },
            statsAriaLabel: "Sitemap statistics",
            theme: {
              wrapperClass:
                "relative bg-linear-to-r from-amber-600 to-orange-700 dark:from-amber-900 dark:to-orange-900 text-white overflow-hidden",
              breadcrumbClass:
                "flex items-center justify-center gap-2 text-sm text-amber-100 dark:text-amber-200 mb-6",
              descriptionClass:
                "text-lg md:text-xl text-amber-100 dark:text-amber-200 mb-8 max-w-2xl mx-auto",
              statValueClass:
                "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
              statLabelClass:
                "text-sm text-amber-100 dark:text-amber-200",
              highlightClass: "text-yellow-300 dark:text-yellow-400",
              primaryBtnClass:
                "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-amber-900 dark:text-amber-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
              secondaryBtnClass:
                "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200",
            },
          }}
        />

        {/* Section Navigation */}
        {sectionsWithDisplayName?.length > 0 && (
          <SectionNavigation sections={sectionsWithDisplayName} />
        )}

        {/* Main */}
        <main
          id="main-content"
          ref={mainContentRef}
          role="main"
          tabIndex={-1}
          className="focus:outline-none"
        >
          {/* Render sections */}
          {sections?.map((section, index) => {
            const { type, variant, props, config, _id } = section;
            const sectionId = `${type}-${_id || index}`;

            // Get the component from registry
            const SectionComponent =
              sectionRegistry[type]?.[variant] ||
              sectionRegistry[type]?.variant1;

            // Get skeleton component and props based on section type
            const SkeletonComponent =
              skeletonRegistry[type] || skeletonRegistry.default;

            const skeletonProps = getSkeletonProps(type, variant, config);

            // If component doesn't exist, show error with proper accessibility
            if (!SectionComponent) {
              return renderErrorSection(type, variant, sectionId);
            }

            return (
              <section
                key={sectionId}
                id={`section-${type}`}
                aria-label={`${type.replace(/([A-Z])/g, " $1").trim()} section`}
                data-section-type={type}
                data-section-variant={variant}
              >
                <Suspense
                  fallback={
                    <SkeletonComponent
                      {...skeletonProps}
                      aria-label={`Loading ${type} section content`}
                    />
                  }
                >
                  <SectionComponent config={config} {...props} />
                </Suspense>
              </section>
            );
          })}
        </main>
      </FrontEnd_Layout>
    </>
  );
};

export default Sitemap;