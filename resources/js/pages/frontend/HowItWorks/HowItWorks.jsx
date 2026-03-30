// page/frontend/HowItWorks/HowItWorks.jsx

// React
import { Suspense, useEffect, useRef } from "react";

// Layout
import FrontEnd_Layout from "../../../layouts/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Registry
import { skeletonRegistry, getSkeletonProps } from "./skeletonRegistry";

// Section Navigation
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Custom Page Hero Component
// ============================================================================

const PageHero = ({ heroData }) => {
  // Provide default values if heroData is null/undefined
  const title = heroData?.title || "Simple";
  const highlightedText = heroData?.highlightedText || "4-Step Process";
  const description =
    heroData?.description ||
    "Get started with our proven methodology designed to deliver results quickly and efficiently.";
  const stats = heroData?.stats || [
    { value: "98%", label: "Success Rate" },
    { value: "2 Weeks", label: "Avg. Time to Value" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section
      className="relative bg-linear-to-r from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-950 text-white overflow-hidden"
      aria-label="How it works page hero section"
    >
      {/* Background Pattern - Hidden from screen readers */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated shapes - Hidden from screen readers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-purple-100 dark:text-purple-200 mb-6"
          >
            <a
              href="/"
              className="hover:text-white dark:hover:text-purple-100 transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">•</span>
            <span className="text-white dark:text-white" aria-current="page">
              How It Works
            </span>
          </nav>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}{" "}
            <span className="text-yellow-300 dark:text-yellow-400">
              {highlightedText}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-purple-100 dark:text-purple-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Stats/Highlights */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5"
                role="listitem"
              >
                <div className="text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-purple-100 dark:text-purple-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-purple-900 dark:text-purple-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200"
              aria-label="Start your journey"
            >
              Get Started Today
            </button>
            <button
              className="px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200"
              aria-label="Watch demo video"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration - Hidden from screen readers */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
};

// ============================================================================
// Main HowItWorks Component
// ============================================================================

const HowItWorks = ({ pageData = { meta: {}, sections: [] } }) => {
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

  // Prepare sections for navigation with proper display names
  const sectionsWithDisplayName = sections.map(section => {
    const displayNames = {
      stepByStepProcess: 'Step-by-Step Process',
      onboardingGuide: 'Onboarding Guide',
      implementationTimeline: 'Implementation Timeline',
      trainingAndSupport: 'Training & Support',
      successMetrics: 'Success Metrics',
      caseStudies: 'Case Studies'
    };

    return {
      ...section,
      displayName: displayNames[section.type] || section.type.replace(/([A-Z])/g, ' $1').trim()
    };
  });

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
      <PageHero heroData={meta?.hero} />

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

          // If component doesn't exist, show error
          if (!SectionComponent) {
            return (
              <section
                key={sectionId}
                id={`section-${type}`}
                className="p-8 bg-red-100 dark:bg-red-900/20 border-2 border-red-500 rounded-lg m-4"
                role="alert"
                aria-label={`Error: Section ${type} not found`}
              >
                <h3 className="text-red-700 dark:text-red-400 font-bold">Error: Section not found</h3>
                <p className="text-red-600 dark:text-red-300">Type: {type}, Variant: {variant || 'default'}</p>
              </section>
            );
          }

          return (
            <section
              key={sectionId}
              id={`section-${type}`}
              aria-label={section.displayName || `${type.replace(/([A-Z])/g, ' $1').trim()} section`}
              data-section-type={type}
              data-section-variant={variant}
            >
              <Suspense
                fallback={
                  <SkeletonComponent
                    {...skeletonProps}
                    aria-label={`Loading ${section.displayName || type} section content`}
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

export default HowItWorks;