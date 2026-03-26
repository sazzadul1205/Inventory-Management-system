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
import SectionNavigation from "@/components/SectionNavigation";

// ============================================================================
// Industries Page Hero Component
// ============================================================================

const PageHero = ({ heroData }) => {
  const title = heroData?.title || "Industries We";
  const highlightedText = heroData?.highlightedText || "Serve";
  const description =
    heroData?.description ||
    "Discover how our platform adapts to different industries, helping businesses streamline operations, improve efficiency, and scale with confidence.";

  const stats = heroData?.stats || [
    { value: "10+", label: "Industries Covered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "40%", label: "Efficiency Increase" },
  ];

  return (
    <section className="relative bg-linear-to-r from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex justify-center gap-2 text-sm text-purple-100 mb-6">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <span>•</span>
          <span className="text-white">Industries</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}{" "}
          <span className="text-yellow-300">{highlightedText}</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-8">
          {description}
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
            >
              <div className="text-3xl font-bold text-yellow-300">
                {stat.value}
              </div>
              <div className="text-sm text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-8 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
            Explore Solutions
          </button>
          <button className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white/10">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

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
  const sectionsWithDisplayName = sections.map((section) => {
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

    return {
      ...section,
      displayName:
        displayNames[section.type] ||
        section.type.replace(/([A-Z])/g, " $1").trim(),
    };
  });

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
      <PageHero heroData={meta?.hero} />

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