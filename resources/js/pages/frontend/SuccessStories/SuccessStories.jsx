// page/frontend/SuccessStories/SuccessStories.jsx

// React
import { Suspense, useEffect, useRef } from "react";

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
// Main SuccessStories Component
// ============================================================================

const SuccessStories = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;
  const mainContentRef = useRef(null);

  // Handle scroll to main content
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
  const sectionsWithDisplayName = [
    {
      id: 'section-hero',
      type: 'hero',
      displayName: 'Overview'
    },
    ...sections.map(section => {
      const displayNames = {
        clientSuccessMetrics: 'Success Metrics',
        beforeAfterScenarios: 'Before & After',
        roiCalculations: 'ROI Analysis',
        industrySpecificExamples: 'Industry Examples'
      };

      const id = `section-${section.type}`;

      return {
        ...section,
        id,
        displayName: displayNames[section.type] ||
          section.type.replace(/([A-Z])/g, ' $1').trim()
      };
    })
  ];

  return (
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
          ariaLabel: "Success stories page hero section",
          breadcrumbLabel: "Success Stories",
          title: "Client",
          highlightedText: "Success Stories",
          description:
            "Discover how our innovative solutions have transformed businesses across industries, delivering measurable results and exceptional ROI.",
          stats: [
            { value: "98%", label: "Client Satisfaction" },
            { value: "$2.5B+", label: "Client Value Generated" },
            { value: "500+", label: "Success Stories" }
          ],
          primaryCta: { label: "View Stories", ariaLabel: "View success stories" },
          secondaryCta: { label: "Share Your Story", ariaLabel: "Share your success story" },
          statsAriaLabel: "Success metrics",
          theme: {
            wrapperClass:
              "relative bg-linear-to-r from-green-600 to-emerald-700 dark:from-green-900 dark:to-emerald-900 text-white overflow-hidden",
            breadcrumbClass:
              "flex items-center justify-center gap-2 text-sm text-green-100 dark:text-green-200 mb-6",
            descriptionClass:
              "text-lg md:text-xl text-green-100 dark:text-green-200 mb-8 max-w-2xl mx-auto",
            statValueClass: "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
            statLabelClass: "text-sm text-green-100 dark:text-green-200",
            highlightClass: "text-yellow-300 dark:text-yellow-400",
            primaryBtnClass:
              "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-green-900 dark:text-green-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
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
            return (
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
  );
};

export default SuccessStories;


