// page/frontend/Home/Home.jsx

// React
import { Suspense } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";

// Section Imports
import { sectionRegistry } from "./sectionRegistry";

// Skeleton Imports
import { skeletonRegistry } from "./skeletonRegistry";
import SectionNavigation from "@/components/SectionNavigation";

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
import NewsletterConfig from "./JSON/NewsletterConfig.json";
import MobileAppConfig from "./JSON/MobileAppConfig.json";
import EventsConfig from "./JSON/EventConfig.json";

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
  trustSignal: TrustSignalConfig,
  newsletter: NewsletterConfig,
  mobileApp: MobileAppConfig,
  event: EventsConfig,
};

// ============================================================================
// Page Config
// ============================================================================

const pageConfig = {
  sections: {
    hero: { enabled: true, variant: "variant3", order: 1, props: {}, displayName: "Hero" },
    services: { enabled: true, variant: "variant3", order: 2, props: {}, displayName: "Services" },
    features: { enabled: true, variant: "variant3", order: 3, props: {}, displayName: "Features" },
    howItWorks: { enabled: true, variant: "variant3", order: 4, props: {}, displayName: "How It Works" },
    industries: { enabled: true, variant: "variant3", order: 5, props: {}, displayName: "Industries" },
    successStories: { enabled: true, variant: "variant3", order: 6, props: {}, displayName: "Success Stories" },
    testimonials: { enabled: true, variant: "variant3", order: 7, props: {}, displayName: "Testimonials" },
    pricingPlans: { enabled: true, variant: "variant3", order: 8, props: {}, displayName: "Pricing" },
    faq: { enabled: true, variant: "variant3", order: 9, props: {}, displayName: "FAQ" },
    contact: { enabled: true, variant: "variant3", order: 10, props: {}, displayName: "Contact" },
    aboutUs: { enabled: true, variant: "variant3", order: 11, props: {}, displayName: "About Us" },
    whyChooseUs: { enabled: true, variant: "variant3", order: 12, props: {}, displayName: "Why Choose Us" },
    integrations: { enabled: true, variant: "variant3", order: 13, props: {}, displayName: "Integrations" },
    news: { enabled: true, variant: "variant3", order: 14, props: {}, displayName: "News" },
    partner: { enabled: true, variant: "variant3", order: 15, props: {}, displayName: "Partners" },
    globalPresence: { enabled: true, variant: "variant3", order: 16, props: {}, displayName: "Global Presence" },
    career: { enabled: true, variant: "variant3", order: 17, props: {}, displayName: "Careers" },
    trustSignal: { enabled: true, variant: "variant3", order: 18, props: {}, displayName: "Trust Signals" },
    newsletter: { enabled: true, variant: "variant3", order: 19, props: {}, displayName: "Newsletter" },
    mobileApp: { enabled: true, variant: "variant3", order: 20, props: {}, displayName: "Mobile App" },
    event: { enabled: true, variant: "variant3", order: 21, props: {}, displayName: "Events" },
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
      {/* Section Navigation */}
      <SectionNavigation sections={orderedSections} />

      {/* Render sections with IDs for navigation */}
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
          <div key={`${type}-${index}`} id={`section-${type}`}>
            <Suspense fallback={<Skeleton />}>
              <SectionComponent
                config={config}
                {...pageConfig.global.defaultProps}
                {...props}
                pageConfig={pageConfig}
              />
            </Suspense>
          </div>
        );
      })}
    </FrontEnd_Layout>
  );
};

export default Home;
