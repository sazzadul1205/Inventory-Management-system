// page/frontend/Home/Home.jsx

import { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";
import ServicesSectionSkeleton from "./ServicesSection/ServicesSectionSkeleton";
import FeaturesSectionSkeleton from "./FeaturesSection/FeaturesSectionSkeleton"; // Add this import

// Import the JSON configurations
import homeConfig from "./HomeConfig.json";
import servicesConfig from "./ServicesConfig.json";
import featuresConfig from "./FeaturesConfig.json";

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

// Lazy Features Sections
const FeaturesSection1 = lazy(() => import("./FeaturesSection/FeaturesSection1"));
const FeaturesSection2 = lazy(() => import("./FeaturesSection/FeaturesSection2"));
const FeaturesSection3 = lazy(() => import("./FeaturesSection/FeaturesSection3"));
const FeaturesSectionCustom = lazy(() => import("./FeaturesSection/FeaturesSectionCustom"));

// ============================================================================
// Page Configuration - Control which sections appear and their order
// ============================================================================

const pageConfig = {
  // Enable/disable entire sections
  sections: {
    hero: {
      enabled: true,
      variant: "custom", // Changed to custom to use CMS builder
      order: 1,
      props: {}
    },
    services: {
      enabled: true,
      variant: "custom", // Changed to custom to use CMS builder
      order: 2,
      props: {}
    },
    features: {
      enabled: true,
      variant: "custom", // Changed to custom to use CMS builder
      order: 3,
      props: {}
    }
  },

  // Global settings for all sections
  global: {
    siteName: "Sazzad Inventory & Logistics",
    defaultProps: {
      // Common props to pass to all sections
      showAnimation: true,
      lazyLoad: true,
      pageConfig: {} // Pass page config to sections
    }
  },

  // Quick visibility toggles (overrides individual section settings)
  quickToggles: {
    showHero: true,
    showServices: true,
    showFeatures: true
  }
};

// ============================================================================
// Extract configurations from imported JSON
// ============================================================================

// Hero configurations
const {
  heroSection1,
  heroSection2,
  heroSection3,
  heroSectionCustom
} = homeConfig;

// Services configurations
const {
  servicesSection1,
  servicesSection2,
  servicesSection3,
  servicesSectionCustom
} = servicesConfig;

// Features configurations
const {
  featuresSection1,
  featuresSection2,
  featuresSection3,
  featuresSectionCustom
} = featuresConfig;

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

  const showFeatures = config.quickToggles.showFeatures !== undefined
    ? config.quickToggles.showFeatures
    : config.sections.features.enabled;

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

  // Add features section if enabled
  if (showFeatures && config.sections.features.enabled) {
    sections.push({
      type: 'features',
      variant: config.sections.features.variant,
      order: config.sections.features.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.features.props
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

    // Common props to pass to all sections
    const commonProps = {
      ...props,
      pageConfig: pageConfig // Pass the entire page config for context
    };

    switch (type) {
      case 'hero':
        switch (variant) {
          case "variant1":
            return <HeroSection1 key="hero1" config={heroSection1} {...commonProps} />;
          case "variant2":
            return <HeroSection2 key="hero2" config={heroSection2} {...commonProps} />;
          case "variant3":
            return <HeroSection3 key="hero3" config={heroSection3} {...commonProps} />;
          case "custom":
            return <HeroSectionCustom key="hero-custom" config={heroSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultVariant = pageConfig.sections.hero.variant;
            if (defaultVariant === "variant1") {
              return <HeroSection1 key="hero-default" config={heroSection1} {...commonProps} />;
            } else if (defaultVariant === "variant2") {
              return <HeroSection2 key="hero-default" config={heroSection2} {...commonProps} />;
            } else if (defaultVariant === "variant3") {
              return <HeroSection3 key="hero-default" config={heroSection3} {...commonProps} />;
            } else {
              return <HeroSectionCustom key="hero-default" config={heroSectionCustom} {...commonProps} />;
            }
        }

      case 'services':
        switch (variant) {
          case "variant1":
            return <ServicesSection1 key="services1" config={servicesSection1} {...commonProps} />;
          case "variant2":
            return <ServicesSection2 key="services2" config={servicesSection2} {...commonProps} />;
          case "variant3":
            return <ServicesSection3 key="services3" config={servicesSection3} {...commonProps} />;
          case "custom":
            return <ServicesSectionCustom key="services-custom" config={servicesSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultServicesVariant = pageConfig.sections.services.variant;
            if (defaultServicesVariant === "variant1") {
              return <ServicesSection1 key="services-default" config={servicesSection1} {...commonProps} />;
            } else if (defaultServicesVariant === "variant2") {
              return <ServicesSection2 key="services-default" config={servicesSection2} {...commonProps} />;
            } else if (defaultServicesVariant === "variant3") {
              return <ServicesSection3 key="services-default" config={servicesSection3} {...commonProps} />;
            } else {
              return <ServicesSectionCustom key="services-default" config={servicesSectionCustom} {...commonProps} />;
            }
        }

      case 'features':
        switch (variant) {
          case "variant1":
            return <FeaturesSection1 key="features1" config={featuresSection1} {...commonProps} />;
          case "variant2":
            return <FeaturesSection2 key="features2" config={featuresSection2} {...commonProps} />;
          case "variant3":
            return <FeaturesSection3 key="features3" config={featuresSection3} {...commonProps} />;
          case "custom":
            return <FeaturesSectionCustom key="features-custom" config={featuresSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultFeaturesVariant = pageConfig.sections.features.variant;
            if (defaultFeaturesVariant === "variant1") {
              return <FeaturesSection1 key="features-default" config={featuresSection1} {...commonProps} />;
            } else if (defaultFeaturesVariant === "variant2") {
              return <FeaturesSection2 key="features-default" config={featuresSection2} {...commonProps} />;
            } else if (defaultFeaturesVariant === "variant3") {
              return <FeaturesSection3 key="features-default" config={featuresSection3} {...commonProps} />;
            } else {
              return <FeaturesSectionCustom key="features-default" config={featuresSectionCustom} {...commonProps} />;
            }
        }

      default:
        return null;
    }
  };

  // Function to get the appropriate skeleton based on section type
  const getSkeleton = (sectionType) => {
    switch (sectionType) {
      case 'hero':
        return <HeroSectionSkeleton />;
      case 'services':
        return <ServicesSectionSkeleton />;
      case 'features':
        return <FeaturesSectionSkeleton />;
      default:
        return <div className="animate-pulse bg-gray-200 h-96" />;
    }
  };

  return (
    <FrontEnd_Layout>
      {orderedSections.map((section, index) => (
        <Suspense
          key={`${section.type}-${index}`}
          fallback={getSkeleton(section.type)}
        >
          {renderSection(section)}
        </Suspense>
      ))}
    </FrontEnd_Layout>
  );
};

export default Home;