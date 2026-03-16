// page/frontend/Home/Home.jsx

import { Suspense } from "react";
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";

import { sectionRegistry } from "./sectionRegistry";
import { skeletonRegistry } from "./skeletonRegistry";

// JSON configs
import homeConfig from "./JSON/HomeConfig.json";
import servicesConfig from "./JSON/ServicesConfig.json";
import featuresConfig from "./JSON/FeaturesConfig.json";
import howItWorksConfig from "./JSON/HowItWorksConfig.json";
import industriesConfig from "./JSON/IndustriesConfig.json";
import testimonialsConfig from "./JSON/TestimonialsConfig.json";
import pricingPlansConfig from "./JSON/PricingPlansConfig.json";
import successStoriesConfig from "./JSON/SuccessStoriesConfig.json";

// Map section → JSON config
const configMap = {
  hero: homeConfig,
  services: servicesConfig,
  features: featuresConfig,
  howItWorks: howItWorksConfig,
  industries: industriesConfig,
  testimonials: testimonialsConfig,
  pricingPlans: pricingPlansConfig,
  successStories: successStoriesConfig,
};

// ============================================================================
// Page Config
// ============================================================================

const pageConfig = {
  sections: {
    hero: { enabled: true, variant: "variant3", order: 1, props: {} },
    services: { enabled: true, variant: "variant3", order: 2, props: {} },
    features: { enabled: true, variant: "variant3", order: 3, props: {} },
    howItWorks: { enabled: true, variant: "variant3", order: 4, props: {} },
    industries: { enabled: true, variant: "variant3", order: 5, props: {} },
    successStories: { enabled: true, variant: "variant3", order: 6, props: {} },
    testimonials: { enabled: true, variant: "variant3", order: 7, props: {} },
    pricingPlans: { enabled: true, variant: "variant3", order: 8, props: {} },
  },

  global: {
    siteName: "Sazzad Inventory & Logistics",
    defaultProps: {
      showAnimation: true,
      lazyLoad: true,
    },
  },
};

// ============================================================================
// Helpers
// ============================================================================

const getOrderedSections = () => {
  return Object.entries(pageConfig.sections)
    .filter(([_, section]) => section.enabled)
    .map(([type, section]) => ({
      type,
      ...section,
    }))
    .sort((a, b) => a.order - b.order);
};

// ============================================================================
// Component
// ============================================================================

const Home = () => {
  const orderedSections = getOrderedSections();

  return (
    <FrontEnd_Layout>
      {orderedSections.map((section, index) => {
        const { type, variant, props } = section;

        const SectionComponent =
          sectionRegistry?.[type]?.[variant] ||
          sectionRegistry?.[type]?.variant1;

        const Skeleton =
          skeletonRegistry?.[type] ||
          (() => <div className="animate-pulse h-96 bg-gray-200" />);

        const config = configMap[type]?.[`${type}Section${variant.replace("variant", "")}`];

        if (!SectionComponent) return null;

        return (
          <Suspense key={`${type}-${index}`} fallback={<Skeleton />}>
            <SectionComponent
              config={config}
              {...pageConfig.global.defaultProps}
              {...props}
              pageConfig={pageConfig}
            />
          </Suspense>
        );
      })}
    </FrontEnd_Layout>
  );
};

export default Home;