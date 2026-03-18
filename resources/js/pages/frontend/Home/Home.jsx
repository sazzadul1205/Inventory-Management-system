// page/frontend/Home/Home.jsx

// React
import { Suspense } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Imports
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
import FAQConfig from "./JSON/FAQConfig.json";
import ContactConfig from "./JSON/ContactConfig.json";
import AboutUsConfig from "./JSON/AboutUsConfig.json";
import WhyChooseUsConfig from "./JSON/WhyChooseUsConfig.json";
import IntegrationsConfig from "./JSON/IntegrationsConfig.json";
import BlogConfig from "./JSON/BlogConfig.json";
import NewsConfig from "./JSON/NewsConfig.json";
import PartnersConfig from "./JSON/PartnersConfig.json";
import GlobalPresenceConfig from "./JSON/GlobalPresenceConfig.json";
import CareerConfig from "./JSON/CareerConfig.json";
import TrustSignalConfig from "./JSON/TrustSignalsConfig.json";


// Map section → JSON config
const configMap = {
  hero: homeConfig,
  services: servicesConfig,
  features: featuresConfig,
  howItWorks: howItWorksConfig,
  industries: industriesConfig,
  successStories: successStoriesConfig,
  testimonials: testimonialsConfig,
  pricingPlans: pricingPlansConfig,
  faq: FAQConfig,
  contact: ContactConfig,
  aboutUs: AboutUsConfig,
  whyChooseUs: WhyChooseUsConfig,
  integrations: IntegrationsConfig,
  blog: BlogConfig,
  news: NewsConfig,
  partner: PartnersConfig,
  globalPresence: GlobalPresenceConfig,
  career: CareerConfig,
  trustSignal: TrustSignalConfig
};

// ============================================================================
// Page Config
// ============================================================================

const pageConfig = {
  sections: {
    hero: { enabled: false, variant: "variant3", order: 1, props: {} },
    services: { enabled: false, variant: "variant3", order: 2, props: {} },
    features: { enabled: false, variant: "variant3", order: 3, props: {} },
    howItWorks: { enabled: false, variant: "variant3", order: 4, props: {} },
    industries: { enabled: false, variant: "variant3", order: 5, props: {} },
    successStories: { enabled: false, variant: "variant3", order: 6, props: {} },
    testimonials: { enabled: false, variant: "variant3", order: 7, props: {} },
    pricingPlans: { enabled: false, variant: "variant3", order: 8, props: {} },
    faq: { enabled: false, variant: "variant3", order: 9, props: {} },
    contact: { enabled: false, variant: "variant3", order: 10, props: {} },
    aboutUs: { enabled: false, variant: "variant3", order: 11, props: {} },
    whyChooseUs: { enabled: false, variant: "variant3", order: 12, props: {} },
    integrations: { enabled: false, variant: "variant3", order: 13, props: {} },
    blog: { enabled: false, variant: "variant3", order: 14, props: {} },
    news: { enabled: false, variant: "variant3", order: 15, props: {} },
    partner: { enabled: false, variant: "variant3", order: 16, props: {} },
    globalPresence: { enabled: false, variant: "variant3", order: 17, props: {} },
    career: { enabled: true, variant: "variant3", order: 18, props: {} },
    trustSignal: { enabled: false, variant: "variant3", order: 19, props: {} }, 
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

// Get ordered sections
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

  // Get ordered sections
  const orderedSections = getOrderedSections();

  // Render
  return (
    <FrontEnd_Layout>
      {/* Render sections */}
      {orderedSections.map((section, index) => {

        // Destructure
        const { type, variant, props } = section;

        // Get component from registry
        const SectionComponent =
          sectionRegistry?.[type]?.[variant] ||
          sectionRegistry?.[type]?.variant1;

        // Get skeleton
        const Skeleton =
          skeletonRegistry?.[type] ||
          (() => <div className="animate-pulse h-96 bg-gray-200" />);

        // Get config
        const config = configMap[type]?.[`${type}Section${variant.replace("variant", "")}`];

        // Check if component exists
        if (!SectionComponent) return null;

        // Render
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