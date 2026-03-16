// page/frontend/Home/Home.jsx

import { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";
import ServicesSectionSkeleton from "./ServicesSection/ServicesSectionSkeleton";
import FeaturesSectionSkeleton from "./FeaturesSection/FeaturesSectionSkeleton";
import HowItWorksSectionSkeleton from "./HowItWorksSection/HowItWorksSectionSkeleton";
import IndustriesSectionSkeleton from "./IndustriesSection/IndustriesSectionSkeleton";
import TestimonialsSectionSkeleton from "./TestimonialsSection/TestimonialsSectionSkeleton";
import SuccessStoriesSectionSkeleton from "./SuccessStoriesSection/SuccessStoriesSectionSkeleton";

// Import the JSON configurations
import homeConfig from "./HomeConfig.json";
import servicesConfig from "./ServicesConfig.json";
import featuresConfig from "./FeaturesConfig.json";
import howItWorksConfig from "./HowItWorksConfig.json";
import industriesConfig from "./IndustriesConfig.json";
import TestimonialsConfig from "./TestimonialsConfig.json";
import successStoriesConfig from "./SuccessStoriesConfig.json";


// Import the CustomSection component
const CustomSection = lazy(() => import("./CustomSection"));

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));

// Lazy Services Sections
const ServicesSection1 = lazy(() => import("./ServicesSection/ServicesSection1"));
const ServicesSection2 = lazy(() => import("./ServicesSection/ServicesSection2"));
const ServicesSection3 = lazy(() => import("./ServicesSection/ServicesSection3"));

// Lazy Features Sections
const FeaturesSection1 = lazy(() => import("./FeaturesSection/FeaturesSection1"));
const FeaturesSection2 = lazy(() => import("./FeaturesSection/FeaturesSection2"));
const FeaturesSection3 = lazy(() => import("./FeaturesSection/FeaturesSection3"));

// Lazy How It Works Sections
const HowItWorksSection1 = lazy(() => import("./HowItWorksSection/HowItWorksSection1"));
const HowItWorksSection2 = lazy(() => import("./HowItWorksSection/HowItWorksSection2"));
const HowItWorksSection3 = lazy(() => import("./HowItWorksSection/HowItWorksSection3"));

// Lazy Industries Sections
const IndustriesSection1 = lazy(() => import("./IndustriesSection/IndustriesSection1"));
const IndustriesSection2 = lazy(() => import("./IndustriesSection/IndustriesSection2"));
const IndustriesSection3 = lazy(() => import("./IndustriesSection/IndustriesSection3"));

// Lazy Success Stories Sections
const SuccessStoriesSection1 = lazy(() => import("./SuccessStoriesSection/SuccessStoriesSection1"));
const SuccessStoriesSection2 = lazy(() => import("./SuccessStoriesSection/SuccessStoriesSection2"));
const SuccessStoriesSection3 = lazy(() => import("./SuccessStoriesSection/SuccessStoriesSection3"));

// Lazy Contact Sections
const TestimonialsSection1 = lazy(() => import("./TestimonialsSection/TestimonialsSection1"));
const TestimonialsSection2 = lazy(() => import("./TestimonialsSection/TestimonialsSection2"));
const TestimonialsSection3 = lazy(() => import("./TestimonialsSection/TestimonialsSection3"));

// ============================================================================
// Page Configuration - Control which sections appear and their order
// ============================================================================

const pageConfig = {
  // Enable/disable entire sections
  sections: {
    hero: {
      enabled: true,
      variant: "custom",
      order: 1,
      props: {}
    },
    services: {
      enabled: true,
      variant: "custom",
      order: 2,
      props: {}
    },
    features: {
      enabled: true,
      variant: "custom",
      order: 3,
      props: {}
    },
    howItWorks: {
      enabled: true,
      variant: "custom",
      order: 4,
      props: {}
    },
    industries: {
      enabled: true,
      variant: "custom",
      order: 5,
      props: {}
    },
    successStories: {
      enabled: true,
      variant: "custom",
      order: 6,
      props: {}
    },
    testimonials: {
      enabled: true,
      variant: "custom",
      order: 7,
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
    showFeatures: true,
    showHowItWorks: true,
    showIndustries: true,
    showSuccessStories: true,
    showTestimonials: true,
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

// How It Works configurations
const {
  howItWorksSection1,
  howItWorksSection2,
  howItWorksSection3,
  howItWorksSectionCustom
} = howItWorksConfig;

// Industries configurations
const {
  industriesSection1,
  industriesSection2,
  industriesSection3,
  industriesSectionCustom
} = industriesConfig;

// Success Stories configurations
const {
  successStoriesSection1,
  successStoriesSection2,
  successStoriesSection3,
  successStoriesSectionCustom
} = successStoriesConfig;

// Testimonials configurations
const {
  testimonialsSection1,
  testimonialsSection2,
  testimonialsSection3,
  testimonialsSectionCustom
} = TestimonialsConfig;

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

  const showHowItWorks = config.quickToggles.showHowItWorks !== undefined
    ? config.quickToggles.showHowItWorks
    : config.sections.howItWorks.enabled;

  const showIndustries = config.quickToggles.showIndustries !== undefined
    ? config.quickToggles.showIndustries
    : config.sections.industries.enabled;

  const showSuccessStories = config.quickToggles.showSuccessStories !== undefined
    ? config.quickToggles.showSuccessStories
    : config.sections.successStories.enabled;

  const showTestimonials = config.quickToggles.showTestimonials !== undefined
    ? config.quickToggles.showTestimonials
    : config.sections.testimonials.enabled;

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

  // Add how it works section if enabled
  if (showHowItWorks && config.sections.howItWorks.enabled) {
    sections.push({
      type: 'howItWorks',
      variant: config.sections.howItWorks.variant,
      order: config.sections.howItWorks.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.howItWorks.props
      }
    });
  }

  // Add industries section if enabled
  if (showIndustries && config.sections.industries.enabled) {
    sections.push({
      type: 'industries',
      variant: config.sections.industries.variant,
      order: config.sections.industries.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.industries.props
      }
    });
  }

  // Add success stories section if enabled
  if (showSuccessStories && config.sections.successStories.enabled) {
    sections.push({
      type: 'successStories',
      variant: config.sections.successStories.variant,
      order: config.sections.successStories.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.successStories.props
      }
    });
  }

  // Add testimonials section if enabled
  if (showTestimonials && config.sections.testimonials.enabled) {
    sections.push({
      type: 'testimonials',
      variant: config.sections.testimonials.variant,
      order: config.sections.testimonials.order,
      props: {
        ...config.global.defaultProps,
        ...config.sections.testimonials.props
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
            return <CustomSection key="hero-custom" config={heroSectionCustom} {...commonProps} />;
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
              return <CustomSection key="hero-default" config={heroSectionCustom} {...commonProps} />;
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
            return <CustomSection key="services-custom" config={servicesSectionCustom} {...commonProps} />;
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
              return <CustomSection key="services-default" config={servicesSectionCustom} {...commonProps} />;
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
            return <CustomSection key="features-custom" config={featuresSectionCustom} {...commonProps} />;
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
              return <CustomSection key="features-default" config={featuresSectionCustom} {...commonProps} />;
            }
        }

      case 'howItWorks':
        switch (variant) {
          case "variant1":
            return <HowItWorksSection1 key="howItWorks1" config={howItWorksSection1} {...commonProps} />;
          case "variant2":
            return <HowItWorksSection2 key="howItWorks2" config={howItWorksSection2} {...commonProps} />;
          case "variant3":
            return <HowItWorksSection3 key="howItWorks3" config={howItWorksSection3} {...commonProps} />;
          case "custom":
            return <CustomSection key="howItWorks-custom" config={howItWorksSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultHowItWorksVariant = pageConfig.sections.howItWorks.variant;
            if (defaultHowItWorksVariant === "variant1") {
              return <HowItWorksSection1 key="howItWorks-default" config={howItWorksSection1} {...commonProps} />;
            } else if (defaultHowItWorksVariant === "variant2") {
              return <HowItWorksSection2 key="howItWorks-default" config={howItWorksSection2} {...commonProps} />;
            } else if (defaultHowItWorksVariant === "variant3") {
              return <HowItWorksSection3 key="howItWorks-default" config={howItWorksSection3} {...commonProps} />;
            } else {
              return <CustomSection key="howItWorks-default" config={howItWorksSectionCustom} {...commonProps} />;
            }
        }

      case 'industries':
        switch (variant) {
          case "variant1":
            return <IndustriesSection1 key="industries1" config={industriesSection1} {...commonProps} />;
          case "variant2":
            return <IndustriesSection2 key="industries2" config={industriesSection2} {...commonProps} />;
          case "variant3":
            return <IndustriesSection3 key="industries3" config={industriesSection3} {...commonProps} />;
          case "custom":
            return <CustomSection key="industries-custom" config={industriesSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultIndustriesVariant = pageConfig.sections.industries.variant;
            if (defaultIndustriesVariant === "variant1") {
              return <IndustriesSection1 key="industries-default" config={industriesSection1} {...commonProps} />;
            } else if (defaultIndustriesVariant === "variant2") {
              return <IndustriesSection2 key="industries-default" config={industriesSection2} {...commonProps} />;
            } else if (defaultIndustriesVariant === "variant3") {
              return <IndustriesSection3 key="industries-default" config={industriesSection3} {...commonProps} />;
            } else {
              return <CustomSection key="industries-default" config={industriesSectionCustom} {...commonProps} />;
            }
        }

      case 'successStories':
        switch (variant) {
          case "variant1":
            return <SuccessStoriesSection1 key="successStories1" config={successStoriesSection1} {...commonProps} />;
          case "variant2":
            return <SuccessStoriesSection2 key="successStories2" config={successStoriesSection2} {...commonProps} />;
          case "variant3":
            return <SuccessStoriesSection3 key="successStories3" config={successStoriesSection3} {...commonProps} />;
          case "custom":
            return <CustomSection key="successStories-custom" config={successStoriesSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultSuccessStoriesVariant = pageConfig.sections.successStories.variant;
            if (defaultSuccessStoriesVariant === "variant1") {
              return <SuccessStoriesSection1 key="successStories-default" config={successStoriesSection1} {...commonProps} />;
            } else if (defaultSuccessStoriesVariant === "variant2") {
              return <SuccessStoriesSection2 key="successStories-default" config={successStoriesSection2} {...commonProps} />;
            } else if (defaultSuccessStoriesVariant === "variant3") {
              return <SuccessStoriesSection3 key="successStories-default" config={successStoriesSection3} {...commonProps} />;
            } else {
              return <CustomSection key="successStories-default" config={successStoriesSectionCustom} {...commonProps} />;
            }

        }

      case 'testimonials':
        switch (variant) {
          case "variant1":
            return <TestimonialsSection1 key="testimonials1" config={testimonialsSection1} {...commonProps} />;
          case "variant2":
            return <TestimonialsSection2 key="testimonials2" config={testimonialsSection2} {...commonProps} />;
          case "variant3":
            return <TestimonialsSection3 key="testimonials3" config={testimonialsSection3} {...commonProps} />;
          case "custom":
            return <CustomSection key="testimonials-custom" config={testimonialsSectionCustom} {...commonProps} />;
          default:
            // If variant doesn't match, use the one from pageConfig or fallback to custom
            const defaultTestimonialsVariant = pageConfig.sections.testimonials.variant;
            if (defaultTestimonialsVariant === "variant1") {
              return <TestimonialsSection1 key="testimonials-default" config={testimonialsSection1} {...commonProps} />;
            } else if (defaultTestimonialsVariant === "variant2") {
              return <TestimonialsSection2 key="testimonials-default" config={testimonialsSection2} {...commonProps} />;
            } else if (defaultTestimonialsVariant === "variant3") {
              return <TestimonialsSection3 key="testimonials-default" config={testimonialsSection3} {...commonProps} />;
            } else {
              return <CustomSection key="testimonials-default" config={testimonialsSectionCustom} {...commonProps} />;
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
      case 'howItWorks':
        return <HowItWorksSectionSkeleton />;
      case 'industries':
        return <IndustriesSectionSkeleton />;
      case 'successStories':
        return <SuccessStoriesSectionSkeleton />;
      case 'testimonials':
        return <TestimonialsSectionSkeleton />;
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