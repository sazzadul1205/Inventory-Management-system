// page/frontend/Home/Home.jsx

// React
import { Suspense } from "react";

// Layout
import FrontEnd_Layout from "../../../layouts/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Imports
import { skeletonRegistry } from "./skeletonRegistry";

// Section Navigation
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Main Home Component - Receives data from server via Inertia
// ============================================================================

const Home = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;

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
    };

    return {
      ...section,
      displayName: displayNames[section.type] || section.type
    };
  });

  return (
    <FrontEnd_Layout>
      {/* Section Navigation */}
      {sectionsWithDisplayName?.length > 0 && (
        <SectionNavigation sections={sectionsWithDisplayName} />
      )}

      {/* Render sections - Data from server */}
      {sections?.map((section, index) => {
        const { type, variant, props, config } = section;

        // Get the component from registry
        const SectionComponent =
          sectionRegistry[type]?.[variant] ||
          sectionRegistry[type]?.variant1;
        const Skeleton =
          skeletonRegistry[type] ||
          (() => <div className="animate-pulse h-96 bg-gray-200" />);

        // If component doesn't exist, show error
        if (!SectionComponent) {
          return (
            <div key={`${type}-${index}`} className="p-8 bg-red-100 border-2 border-red-500 rounded-lg m-4">
              <h3 className="text-red-700 font-bold">Error: Section not found</h3>
              <p className="text-red-600">Type: {type}, Variant: {variant}</p>
              <p className="text-red-600">Available types: {Object.keys(sectionRegistry).join(', ')}</p>
            </div>
          );
        }

        return (
          <div key={`${type}-${index}`} id={`section-${type}`}>
            <Suspense fallback={<Skeleton />}>
              <SectionComponent
                config={config}
                {...props}
              />
            </Suspense>
          </div>
        );
      })}
    </FrontEnd_Layout>
  );
};

export default Home;
