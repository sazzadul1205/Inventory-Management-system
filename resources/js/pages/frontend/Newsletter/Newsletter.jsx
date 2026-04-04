// page/frontend/Newsletter/Newsletter.jsx

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
// Main Newsletter Component
// ============================================================================

const Newsletter = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;
  const mainContentRef = useRef(null);

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

  // Navigation Mapping
  const sectionsWithDisplayName = [
    {
      id: "section-hero",
      type: "hero",
      displayName: "Newsletter",
    },
    ...sections.map((section) => {
      const displayNames = {
        subscribeForm: "Subscribe Form",
        newsletterArchive: "Newsletter Archive",
        contentPreview: "Content Preview",
        subscriptionBenefits: "Subscription Benefits",
        unsubscribeOption: "Unsubscribe Option",
        emailPreferences: "Email Preferences",
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

      {/* Updated Hero */}
      <PageHero
        heroData={meta?.hero}
        defaults={{
          sectionId: "section-hero",
          ariaLabel: "Newsletter page hero section",
          breadcrumbLabel: "Newsletter",
          title: "Stay Updated with Our",
          highlightedText: "Newsletter",
          description:
            "Get the latest updates, insights, and exclusive content delivered straight to your inbox. Stay informed and never miss important announcements.",
          stats: [
            { value: "Weekly", label: "Updates" },
            { value: "Exclusive", label: "Content" },
            { value: "1K+", label: "Subscribers" },
          ],
          primaryCta: {
            label: "Subscribe Now",
            ariaLabel: "Join our newsletter",
          },
          secondaryCta: {
            label: "View Archive",
            ariaLabel: "Browse past newsletters",
          },
          statsAriaLabel: "Newsletter statistics",
          theme: {
            wrapperClass:
              "relative bg-linear-to-r from-indigo-600 to-blue-700 dark:from-indigo-900 dark:to-blue-900 text-white overflow-hidden",
            breadcrumbClass:
              "flex items-center justify-center gap-2 text-sm text-indigo-100 dark:text-indigo-200 mb-6",
            descriptionClass:
              "text-lg md:text-xl text-indigo-100 dark:text-indigo-200 mb-8 max-w-2xl mx-auto",
            statValueClass:
              "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1",
            statLabelClass:
              "text-sm text-indigo-100 dark:text-indigo-200",
            highlightClass: "text-yellow-300 dark:text-yellow-400",
            primaryBtnClass:
              "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-indigo-900 dark:text-indigo-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
            secondaryBtnClass:
              "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200",
          },
        }}
      />

      {/* Navigation */}
      {sectionsWithDisplayName.length > 0 && (
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

export default Newsletter;