// page/frontend/Partners/Partners.jsx

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

// Section Navigation
import PageHero from "@/components/PageHero";
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Main Partners Component
// ============================================================================

const Partners = ({ pageData = { meta: {}, sections: [] } }) => {
  const {
    sections = [],
    meta = {},
    seo = {}
  } = pageData;

  const mainContentRef = useRef(null);

  // Prepare SEO data
  const pageSeoData = useMemo(() => ({
    title: seo.title || meta.title || "Partners | Strategic Partnerships & Alliances",
    description: seo.description || meta.description || "Join our global network of partners and unlock new opportunities. Together, we deliver innovative solutions that transform supply chains worldwide.",
    keywords: seo.keywords || meta.keywords || "partners, partnerships, technology partners, solution partners, integration partners, partner program, strategic alliances, channel partners, reseller partners",
    ogImage: seo.ogImage || meta.ogImage || "/partners-og-image.jpg",
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
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Prepare sections for navigation
  const sectionsWithDisplayName = useMemo(() => [
    {
      id: 'section-hero',
      type: 'hero',
      displayName: 'Overview'
    },
    ...sections.map(section => {
      const displayNames = {
        partnerProgramOverview: 'Partner Program Overview',
        technologyPartners: 'Technology Partners',
        solutionPartners: 'Solution Partners',
        
        integrationPartners: 'Integration Partners',
        becomeAPartner: 'Become a Partner',
        partnerResources: 'Partner Resources',
        partnerDirectory: 'Partner Directory'
      };

      const id = `section-${section.type}`;

      return {
        ...section,
        id,
        displayName: displayNames[section.type] ||
          section.type.replace(/([A-Z])/g, ' $1').trim()
      };
    })
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
      <h3 className="text-red-700 dark:text-red-400 font-bold">Error: Section not found</h3>
      <p className="text-red-600 dark:text-red-300">Type: {type}, Variant: {variant || 'default'}</p>
      <p className="text-red-600 dark:text-red-300 text-sm mt-2">
        Available types: {Object.keys(sectionRegistry).join(', ')}
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

        {/* Additional meta tags for partners */}
        <meta property="business:contact_data:street_address" content={seo.streetAddress || meta.streetAddress} />
        <meta property="business:contact_data:locality" content={seo.locality || meta.locality} />
        <meta property="business:contact_data:region" content={seo.region || meta.region} />
        <meta property="business:contact_data:country_name" content={seo.countryName || meta.countryName} />
        <meta property="business:contact_data:email" content={seo.contactEmail || meta.contactEmail || "partners@company.com"} />
        <meta property="business:contact_data:phone_number" content={seo.contactPhone || meta.contactPhone} />
      </Head>

      <FrontEnd_Layout>
        {/* Skip to content link */}
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
            ariaLabel: "Partners page hero section",
            breadcrumbLabel: "Partners",
            title: "Strategic",
            highlightedText: "Partners",
            description:
              "Join our global network of partners and unlock new opportunities. Together, we deliver innovative solutions that transform supply chains worldwide.",
            stats: [
              { value: "500+", label: "Global Partners" },
              { value: "150+", label: "Countries" },
              { value: "50M+", label: "Customers Reached" }
            ],
            primaryCta: { label: "Become a Partner", ariaLabel: "Become a partner" },
            secondaryCta: { label: "Find a Partner", ariaLabel: "Find a partner" },
            statsAriaLabel: "Partner statistics",
            theme: {
              wrapperClass:
                "relative bg-linear-to-r from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 text-white overflow-hidden",
              breadcrumbClass:
                "flex items-center justify-center gap-2 text-sm text-indigo-100 dark:text-indigo-200 mb-6",
              descriptionClass:
                "text-lg md:text-xl text-indigo-100 dark:text-indigo-200 mb-8 max-w-2xl mx-auto",
              statValueClass: "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
              statLabelClass: "text-sm text-indigo-100 dark:text-indigo-200",
              highlightClass: "text-yellow-300 dark:text-yellow-400",
              primaryBtnClass:
                "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-indigo-900 dark:text-indigo-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
              secondaryBtnClass:
                "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200"
            }
          }}
        />

        {/* Section Navigation */}
        {sectionsWithDisplayName?.length > 0 && (
          <SectionNavigation sections={sectionsWithDisplayName} />
        )}

        {/* Main content wrapper */}
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
            const SectionComponent = sectionRegistry[type]?.[variant] || sectionRegistry[type]?.variant1;

            // Get skeleton component and props based on section type
            const SkeletonComponent = skeletonRegistry[type] || skeletonRegistry.default;
            const skeletonProps = getSkeletonProps(type, variant, config);

            // If component doesn't exist, show error with proper accessibility
            if (!SectionComponent) {
              return renderErrorSection(type, variant, sectionId);
            }

            return (
              <section
                key={sectionId}
                id={`section-${type}`}
                aria-label={`${type.replace(/([A-Z])/g, ' $1').trim()} section`}
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
                  <SectionComponent
                    config={config}
                    {...props}
                  />
                </Suspense>
              </section>
            );
          })}
        </main>
      </FrontEnd_Layout>
    </>
  );
};

export default Partners;