// page/frontend/Support/Support.jsx

// React
import { Suspense, useEffect, useRef } from "react";

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
// Main Support Component
// ============================================================================

const Support = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;
  const mainContentRef = useRef(null);

  // Handle hash navigation
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

  // Navigation Mapping for Support sections
  const sectionsWithDisplayName = [
    {
      id: "section-hero",
      type: "hero",
      displayName: "Support",
    },
    ...sections.map((section) => {
      const displayNames = {
        helpCenter: "Help Center",
        knowledgeBase: "Knowledge Base",
        videoTutorials: "Video Tutorials",
        documentation: "Documentation",
        ticketSystem: "Ticket System",
        liveChat: "Live Chat",
        communityForum: "Community Forum",
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
  ];

  return (
    <FrontEnd_Layout>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <PageHero
        heroData={meta?.hero}
        defaults={{
          sectionId: "section-hero",
          ariaLabel: "Support page hero section",
          breadcrumbLabel: "Support",
          title: "We're Here to",
          highlightedText: "Help You",
          description:
            "Find answers, access documentation, watch tutorials, or connect with our support team. Whatever you need, we're here to ensure your success.",
          stats: [
            { value: "24/7", label: "Support Available" },
            { value: "< 2hr", label: "Avg Response Time" },
            { value: "95%", label: "Satisfaction Rate" },
          ],
          primaryCta: {
            label: "Visit Help Center",
            ariaLabel: "Browse help center articles",
          },
          secondaryCta: {
            label: "Contact Support",
            ariaLabel: "Contact our support team",
          },
          statsAriaLabel: "Support statistics",
          theme: {
            wrapperClass:
              "relative bg-linear-to-r from-green-600 to-teal-700 dark:from-green-900 dark:to-teal-900 text-white overflow-hidden",
            breadcrumbClass:
              "flex items-center justify-center gap-2 text-sm text-green-100 dark:text-green-200 mb-6",
            descriptionClass:
              "text-lg md:text-xl text-green-100 dark:text-green-200 mb-8 max-w-2xl mx-auto",
            statValueClass:
              "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
            statLabelClass:
              "text-sm text-green-100 dark:text-green-200",
            highlightClass: "text-yellow-300 dark:text-yellow-400",
            primaryBtnClass:
              "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-green-900 dark:text-green-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
            secondaryBtnClass:
              "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200",
          },
        }}
      />

      {/* Navigation */}
      {sectionsWithDisplayName.length > 0 && (
        <SectionNavigation sections={sectionsWithDisplayName} />
      )}

      {/* Main Content */}
      <main
        id="main-content"
        ref={mainContentRef}
        role="main"
        tabIndex={-1}
        className="focus:outline-none"
      >
        {sections.map((section, index) => {
          const { type, variant, props, config, _id } = section;
          const sectionId = `${type}-${_id || index}`;

          const SectionComponent =
            sectionRegistry[type]?.[variant] ||
            sectionRegistry[type]?.variant1;

          const SkeletonComponent =
            skeletonRegistry[type] || skeletonRegistry.default;

          const skeletonProps = getSkeletonProps(type, variant, config);

          if (!SectionComponent) {
            return (
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
  );
};

export default Support;