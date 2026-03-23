// page/frontend/Services/Service.jsx

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
// Custom Page Hero Component
// ============================================================================

const PageHero = ({ heroData }) => {
  // Provide default values if heroData is null/undefined
  const title = heroData?.title || 'Our';
  const highlightedText = heroData?.highlightedText || 'Services';
  const description = heroData?.description || 'Comprehensive inventory and logistics solutions tailored to streamline your business operations and drive growth.';
  const stats = heroData?.stats || [
    { value: '500+', label: 'Happy Clients' },
    { value: '50K+', label: 'Shipments Handled' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="relative bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-100 dark:text-blue-200 mb-6">
            <a href="/" className="hover:text-white dark:hover:text-blue-100 transition-colors">Home</a>
            <span>•</span>
            <span className="text-white dark:text-white">Services</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}{' '}
            <span className="text-yellow-300 dark:text-yellow-400">
              {highlightedText}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5">
                <div className="text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100 dark:text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-blue-900 dark:text-blue-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200">
              Explore Services
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
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
// Main Service Component
// ============================================================================

const Service = ({ pageData = { meta: {}, sections: [] } }) => {
  const { meta = {}, sections = [] } = pageData;

  // Prepare sections for navigation
  const sectionsWithDisplayName = sections.map(section => {
    const displayNames = {
      allServices: 'All Services',
      warehouseManagement: 'Warehouse Management',
      orderFulfillment: 'Order Fulfillment',
      supplyChainConsulting: 'Supply Chain Consulting',
      transportationManagement: 'Transportation Management',
      returnManagement: 'Returns Management',
      customSolution: 'Custom Solutions'
    };

    return {
      ...section,
      displayName: displayNames[section.type] || section.type
    };
  });

  return (
    <FrontEnd_Layout>
      {/* Page Hero */}
      <PageHero heroData={meta?.hero} />

      {/* Section Navigation */}
      {sectionsWithDisplayName?.length > 0 && (
        <SectionNavigation sections={sectionsWithDisplayName} />
      )}

      {/* Render sections */}
      {sections?.map((section, index) => {
        const { type, variant, props, config } = section;

        // Get the component from registry
        const SectionComponent = sectionRegistry[type]?.[variant];
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

export default Service;
