// page/frontend/Industries/Industries.jsx

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
// Main Industries Component
// ============================================================================

const Industries = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;
  const mainContentRef = useRef(null);

  // Handle hash scroll
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && mainContentRef.current) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  // Section display names (UPDATED FOR INDUSTRIES)
  const sectionsWithDisplayName = [
    {
      id: "section-hero",
      type: "hero",
      displayName: "Overview",
    },
    ...sections.map((section) => {
      const displayNames = {
        eCommerceAndRetail: "E-Commerce & Retail",
        manufacturing: "Manufacturing",
        healthcareAndPharmaceuticals: "Healthcare & Pharmaceuticals",
        foodAndBeverage: "Food & Beverage",
        automotive: "Automotive",
        electronics: "Electronics",
        fashionAndApparel: "Fashion & Apparel",
        wholesaleAndDistribution: "Wholesale & Distribution",
        thirdPartyLogistics: "Third Party Logistics",
        construction: "Construction",
      };

      const id = `section-${section.type}`;

      return {
        ...section,
        id,
        displayName: displayNames[section.type] ||
          section.type.replace(/([A-Z])/g, " $1").trim(),
      };
    }),
  ];

  return (
    <FrontEnd_Layout>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded"
      >
        Skip to content
      </a>

      {/* Hero */}
      <PageHero
        heroData={meta?.hero}
        defaults={{
          sectionId: "section-hero",
          ariaLabel: "Industries page hero section",
          breadcrumbLabel: "Industries",
          title: "Industries We",
          highlightedText: "Serve",
          description:
            "Discover how our platform adapts to different industries, helping businesses streamline operations, improve efficiency, and scale with confidence.",
          stats: [
            { value: "10+", label: "Industries Covered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "40%", label: "Efficiency Increase" }
          ],
          primaryCta: { label: "Explore Solutions", ariaLabel: "Explore industry solutions" },
          secondaryCta: { label: "Contact Sales", ariaLabel: "Contact our sales team" },
          statsAriaLabel: "Company statistics",
          statsGridClass: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto",
          theme: {
            wrapperClass:
              "relative bg-linear-to-r from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-950 text-white overflow-hidden",
            breadcrumbClass:
              "flex items-center justify-center gap-2 text-sm text-purple-100 dark:text-purple-200 mb-6",
            descriptionClass:
              "text-lg md:text-xl text-purple-100 dark:text-purple-200 mb-8 max-w-2xl mx-auto",
            statValueClass: "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
            statLabelClass: "text-sm text-purple-100 dark:text-purple-200",
            highlightClass: "text-yellow-300 dark:text-yellow-400",
            primaryBtnClass:
              "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-purple-900 dark:text-purple-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
            secondaryBtnClass:
              "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200"
          }
        }}
      />

      {/* Navigation */}
      {sectionsWithDisplayName.length > 0 && (
        <SectionNavigation sections={sectionsWithDisplayName} />
      )}

      {/* Main */}
      <main id="main-content" ref={mainContentRef}>
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
                className="p-6 bg-red-100 border border-red-500 m-4 rounded"
              >
                <h3 className="text-red-700 font-bold">
                  Section Not Found
                </h3>
                <p>
                  Type: {type}, Variant: {variant}
                </p>
              </section>
            );
          }

          return (
            <section key={sectionId} id={`section-${type}`}>
              <Suspense fallback={<SkeletonComponent {...skeletonProps} />}>
                <SectionComponent config={config} {...props} />
              </Suspense>
            </section>
          );
        })}
      </main>
    </FrontEnd_Layout>
  );
};

export default Industries;



