// page/frontend/Home/Home.jsx

// React
import { Suspense } from "react";

// Layout
import FrontEnd_Layout from "../../../layouts/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Registry
import { skeletonRegistry, getSkeletonProps } from "./skeletonRegistry";

// Section Navigation
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Main Home Component - Receives data from server via Inertia
// ============================================================================

const Home = ({ pageData = { meta: {}, sections: [] } }) => {
  const { sections = [] } = pageData;

  // Prepare sections for navigation by adding displayName
  const sectionsWithDisplayName = sections.map(section => {
    const displayNames = {
      hero: 'Hero',
      services: 'Services',
      features: 'Features',
      howItWorks: 'How It Works',
      industries: 'Industries',
      successStories: 'Success Stories',
      testimonials: 'Testimonials',
      pricingPlans: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      aboutUs: 'About Us',
      whyChooseUs: 'Why Choose Us',
      integrations: 'Integrations',
      news: 'News',
      partner: 'Partners',
      globalPresence: 'Global Presence',
      career: 'Careers',
      trustSignal: 'Trust Signals',
      newsletter: 'Newsletter',
      mobileApp: 'Mobile App',
      event: 'Events',
      customSolutions: 'Custom Solutions',
      orderFulfillment: 'Order Fulfillment',
      returnsManagement: 'Returns Management',
      supplyChainConsulting: 'Supply Chain Consulting',
      transportationManagement: 'Transportation Management',
      warehouseManagement: 'Warehouse Management',
    };

    return {
      ...section,
      displayName: displayNames[section.type] || section.type
    };
  });

  return (
    <FrontEnd_Layout>
      {/* Section Navigation - Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Skip to main content
      </a>

      {/* Section Navigation */}
      {sectionsWithDisplayName?.length > 0 && (
        <SectionNavigation sections={sectionsWithDisplayName} />
      )}

      {/* Main content wrapper with landmark */}
      <main
        id="main-content"
        role="main" tabIndex={-1} className="focus:outline-none">
        {/* Render sections - Data from server */}
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

export default Home;