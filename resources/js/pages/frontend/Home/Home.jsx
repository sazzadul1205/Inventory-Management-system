import React, { Suspense, lazy, useState, useEffect } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";

// Config
import { Configuration } from "./Config";
import BadgeSection from "./HeroSection/components/BadgeSection";
import TitleSection from "./HeroSection/components/TitleSection";

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));


// Hero Section Selector
const HeroSectionSelector = ({ section, props }) => {
  const sections = {
    "1": <HeroSection1 {...props} />,
    "2": <HeroSection2 {...props} />,
    "3": <HeroSection3 {...props} />,
    none: null,
  };

  return sections[section] || null;
};


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionProps, setSectionProps] = useState({});

  useEffect(() => {
    const loadConfig = () => {
      try {
        const config = Configuration;

        // Determine hero section for current page
        const pageSection =
          config.pageMappings?.home ?? config.activeSection;

        let finalSection = pageSection;

        // A/B Testing Logic
        if (config.abTesting?.enabled) {
          const { variants, distribution } = config.abTesting;

          const random = Math.random() * 100;
          let cumulative = 0;

          for (let i = 0; i < variants.length; i++) {
            cumulative += distribution[i];

            if (random < cumulative) {
              finalSection = variants[i];
              break;
            }
          }
        }

        // Validate section
        if (
          finalSection !== "none" &&
          config.sections[finalSection]?.enabled
        ) {
          setActiveSection(finalSection);
          setSectionProps(config.sections[finalSection]?.props || {});
        } else {
          setActiveSection("none");
        }
      } catch (error) {
        console.error("Failed to load configuration:", error);
        setActiveSection("none");
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  if (loading) {
    return (
      <FrontEnd_Layout>
        <HeroSectionSkeleton />
      </FrontEnd_Layout>
    );
  }

  const badgeConfig = {
    showBadge: true,

    badgeText: "Next Generation Platform ",

    variant: "gradient",
    size: "lg",

    icon: "hi2:HiSparkles",

    colors: {
      bg: "from-indigo-500 via-purple-500 to-pink-500"
    },

    darkMode: {
      bg: "dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"
    },

    animation: {
      type: "entrance",
      name: "scaleIn",
      duration: 0.6
    },

    hoverAnimation: "glow",
    tapAnimation: "scale",

    tooltip: "Learn more about our platform",

    href: "/features",

    alignment: "center"
  };

  const titleConfig = {
    title: "Build the Future of Web Apps ",
    highlightText: "Future",
    highlight: { type: "gradient" },

    // Inline CSS gradient fallback — this will always render.
    highlightColors: {
      gradientCss: "linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)"
    },

    size: "2xl",
    align: "center"
  };
  return (
    <FrontEnd_Layout>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSectionSelector
          section={activeSection}
          props={sectionProps}
        />
      </Suspense>

      <BadgeSection config={badgeConfig} />
      <TitleSection config={titleConfig} />
    </FrontEnd_Layout>
  );
};

export default Home;