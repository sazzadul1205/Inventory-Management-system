// page/frontend/Home/Home.jsx

import { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";
import ServicesSectionSkeleton from "./ServicesSection/ServicesSectionSkeleton";

// Import the JSON configurations
import homeConfig from "./HomeConfig.json";
import servicesConfig from "./ServicesConfig.json";

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));
const HeroSectionCustom = lazy(() => import("./HeroSection/HeroSectionCustom"));

// Lazy Services Sections
const ServicesSection1 = lazy(() => import("./ServicesSection/ServicesSection1"));
const ServicesSection2 = lazy(() => import("./ServicesSection/ServicesSection2"));
const ServicesSection3 = lazy(() => import("./ServicesSection/ServicesSection3"));
const ServicesSectionCustom = lazy(() => import("./ServicesSection/ServicesSectionCustom"));

// ============================================================================
// Page Configuration - Control which sections appear and their order
// ============================================================================

const pageConfig = {
  // Enable/disable entire sections
  sections: {
    hero: {
      enabled: true,        // Set to false to hide hero section completely
      variant: "variant1",   // Options: "variant1", "variant2", "variant3", "custom"
      order: 1,              // Lower numbers appear first
      props: {}              // Additional props to pass to the hero section
    },
    services: {
      enabled: true,         // Set to false to hide services section completely
      variant: "variant2",    // Options: "variant1", "variant2", "variant3", "custom"
      order: 2,               // Lower numbers appear first
      props: {}               // Additional props to pass to the services section
    }
  },

  // Global settings for all sections
  global: {
    siteName: "Sazzad Inventory & Logistics",
    defaultProps: {
      // Common props to pass to all sections
      showAnimation: true,
      lazyLoad: true
    }
  },

  // Quick visibility toggles (overrides individual section settings)
  quickToggles: {
    showHero: true,          // Quick toggle for hero section
    showServices: true       // Quick toggle for services section
  }
};

// ============================================================================
// Extract configurations from imported JSON
// ============================================================================

// Hero configurations
const {
  heroSectionConfig,
  heroSection1,
  heroSection2,
  heroSection3,
  heroSectionCustom
} = homeConfig;

// Services configurations
const {
  servicesSectionConfig,
  servicesSection1,
  servicesSection2,
  servicesSection3,
  servicesSectionCustom
} = servicesConfig;

// ============================================================================
// Helper function to get ordered sections
// ============================================================================

const getOrderedSections = (config) => {
  const sections = [];

  // Check quick toggles first (they override individual enabled settings)
  const showHero = config.quickToggles.showHero !== undefined
    ? config.quickToggles.showHero
    : config.sections.hero.enabled;

  const showServices = config.quickToggles.showServices !== undefined
    ? config.quickToggles.showServices
    : config.sections.services.enabled;

  // Add hero section if enabled
  if (showHero && config.sections.hero.enabled) {
    sections.push({
      type: 'hero',
      variant: config.sections.hero.variant,
      order: config.sections.hero.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.hero.props
      }
    });
  }

  // Add services section if enabled
  if (showServices && config.sections.services.enabled) {
    sections.push({
      type: 'services',
      variant: config.sections.services.variant,
      order: config.sections.services.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.services.props
      }
    });
  }

  // Sort sections by order
  return sections.sort((a, b) => a.order - b.order);
};

// ============================================================================
// Home Component
// ============================================================================

const Home = () => {
  // Get ordered sections based on configuration
  const orderedSections = getOrderedSections(pageConfig);

  // Render a specific section based on type and variant
  const renderSection = (section) => {
    const { type, variant, props } = section;

    switch (type) {
      case 'hero':
        switch (variant) {
          case "variant1":
            return <HeroSection1 key="hero1" config={heroSection1} {...props} />;
          case "variant2":
            return <HeroSection2 key="hero2" config={heroSection2} {...props} />;
          case "variant3":
            return <HeroSection3 key="hero3" config={heroSection3} {...props} />;
          case "custom":
            return <HeroSectionCustom key="hero-custom" config={heroSectionCustom} {...props} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to variant1
            const defaultVariant = pageConfig.sections.hero.variant;
            if (defaultVariant === "variant2") {
              return <HeroSection2 key="hero-default" config={heroSection2} {...props} />;
            } else if (defaultVariant === "variant3") {
              return <HeroSection3 key="hero-default" config={heroSection3} {...props} />;
            } else if (defaultVariant === "custom") {
              return <HeroSectionCustom key="hero-default" config={heroSectionCustom} {...props} />;
            } else {
              return <HeroSection1 key="hero-default" config={heroSection1} {...props} />;
            }
        }

      case 'services':
        switch (variant) {
          case "variant1":
            return <ServicesSection1 key="services1" config={servicesSection1} {...props} />;
          case "variant2":
            return <ServicesSection2 key="services2" config={servicesSection2} {...props} />;
          case "variant3":
            return <ServicesSection3 key="services3" config={servicesSection3} {...props} />;
          case "custom":
            return <ServicesSectionCustom key="services-custom" config={servicesSectionCustom} {...props} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to variant2
            const defaultServicesVariant = pageConfig.sections.services.variant;
            if (defaultServicesVariant === "variant1") {
              return <ServicesSection1 key="services-default" config={servicesSection1} {...props} />;
            } else if (defaultServicesVariant === "variant3") {
              return <ServicesSection3 key="services-default" config={servicesSection3} {...props} />;
            } else if (defaultServicesVariant === "custom") {
              return <ServicesSectionCustom key="services-default" config={servicesSectionCustom} {...props} />;
            } else {
              return <ServicesSection2 key="services-default" config={servicesSection2} {...props} />;
            }
        }

      default:
        return null;
    }
  };

  return (
    <FrontEnd_Layout>
      {orderedSections.map((section, index) => (
        <Suspense
          key={`${section.type}-${index}`}
          fallback={
            section.type === 'hero'
              ? <HeroSectionSkeleton />
              : <ServicesSectionSkeleton />
          }
        >
          {renderSection(section)}
        </Suspense>
      ))}
    </FrontEnd_Layout>
  );
};

export default Home;