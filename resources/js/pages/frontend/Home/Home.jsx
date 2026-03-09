import React, { Suspense, lazy, useState, useEffect } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";

// Config
import { Configuration } from "./Config";

import F_Title from "../../../components/CMS_Title";

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

// Example 2: Title with multiple text color highlights using Tailwind
const heroConfig = {
  level: "h1",
  text: "Build Modern Interfaces With Smart Components",
  variant: "hero",
  alignment: "center",

  gradient: "from-blue-600 via-purple-600 to-pink-600",
  darkGradient: "dark:from-blue-400 dark:via-purple-400 dark:to-pink-400",

  highlightParts: [
    {
      start: 6,
      end: 12,
      highlightGradient: "from-yellow-400 to-orange-500"
    },
    {
      start: 24,
      end: 29,
      highlightColor: "text-green-600",
      darkHighlightColor: "dark:text-green-400"
    }
  ],

  margin: "mb-12",
  zLayer: "20",
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


  return (
    <FrontEnd_Layout>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSectionSelector
          section={activeSection}
          props={sectionProps}
        />
      </Suspense>

      <F_Title config={heroConfig} />

    </FrontEnd_Layout>
  );
};

export default Home;