// page/frontend/Home/Home.jsx

import { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";

// Import the single JSON configuration
import homeConfig from "./HomeConfig.json";

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));
const HeroSectionCustom = lazy(() => import("./HeroSection/HeroSectionCustom"));

// ============================================================================
// Home Component
// ============================================================================

const Home = () => {
  // Extract configuration
  const { pageConfig, heroSection1, heroSection2, heroSection3, heroSectionCustom } = homeConfig;
  const { heroVariant, heroProps, siteConfig } = pageConfig;

  // Render the appropriate hero section based on config
  const renderHeroSection = () => {
    // Common props to pass to all hero sections
    const commonProps = {
      ...heroProps,
      pageConfig: {
        siteConfig,
        ...heroProps
      }
    };

    switch (heroVariant) {
      case "variant1":
        return <HeroSection1 config={heroSection1} {...commonProps} />;

      case "variant2":
        return <HeroSection2 config={heroSection2} {...commonProps} />;

      case "variant3":
        return <HeroSection3 config={heroSection3} {...commonProps} />;

      case "custom":
      default:
        return <HeroSectionCustom config={heroSectionCustom} {...commonProps} />;
    }
  };

  return (
    <FrontEnd_Layout>
      <Suspense fallback={<HeroSectionSkeleton />}>
        {renderHeroSection()}
      </Suspense>
    </FrontEnd_Layout>
  );
};

export default Home;