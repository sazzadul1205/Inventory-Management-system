// page/frontend/Legal/Legal.jsx

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
// Main Legal Component
// ============================================================================

const Legal = ({ pageData = { meta: {}, sections: [] } }) => {
  const {
    sections = [],
    meta = {},
    seo = {}
  } = pageData;

  const mainContentRef = useRef(null);

  // Prepare SEO data
  const pageSeoData = useMemo(() => ({
    title: seo.title || meta.title || "Legal & Compliance | Transparency & Data Protection",
    description: seo.description || meta.description || "Our commitment to transparency and compliance. Review our policies, terms, and agreements to understand how we protect your rights and data.",
    keywords: seo.keywords || meta.keywords || "legal, privacy policy, terms of service, cookie policy, GDPR compliance, data processing agreement, security policy, acceptable use policy, compliance",
    ogImage: seo.ogImage || meta.ogImage || "/legal-og-image.jpg",
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
      displayName: "Legal",
    },
    ...sections.map((section) => {
      const displayNames = {
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",

        gdprCompliance: "GDPR Compliance",
        dataProcessingAgreement: "Data Processing Agreement",
        securityPolicy: "Security Policy",
        acceptableUsePolicy: "Acceptable Use Policy",
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

        {/* Legal specific meta tags */}
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
            ariaLabel: "Legal page hero section",
            breadcrumbLabel: "Legal",
            title: "Legal &",
            highlightedText: "Compliance",
            description:
              "Our commitment to transparency and compliance. Review our policies, terms, and agreements to understand how we protect your rights and data.",
            stats: [
              { value: "100%", label: "GDPR Compliant" },
              { value: "SOC 2", label: "Type II Certified" },
              { value: "ISO", label: "27001 Certified" },
            ],
            primaryCta: {
              label: "View Privacy Policy",
              ariaLabel: "Read our privacy policy",
            },
            secondaryCta: {
              label: "Contact DPO",
              ariaLabel: "Contact Data Protection Officer",
            },
            statsAriaLabel: "Legal and compliance certifications",
            theme: {
              wrapperClass:
                "relative bg-linear-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 text-white overflow-hidden",
              breadcrumbClass:
                "flex items-center justify-center gap-2 text-sm text-slate-300 dark:text-slate-400 mb-6",
              descriptionClass:
                "text-lg md:text-xl text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto",
              statValueClass:
                "text-3xl font-bold text-blue-300 dark:text-blue-400 mb-1",
              statLabelClass:
                "text-sm text-slate-300 dark:text-slate-400",
              highlightClass: "text-blue-300 dark:text-blue-400",
              primaryBtnClass:
                "px-8 py-3 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-400 dark:hover:bg-blue-500 transition-colors transform hover:scale-105 duration-200",
              secondaryBtnClass:
                "px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-500 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-colors transform hover:scale-105 duration-200",
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

export default Legal;