// resources/js/pages/frontend/Home/Home.jsx

import React, { Suspense, lazy, useState, useEffect } from 'react';

// Layout
import FrontEnd_Layout from '../Layout/FrontEnd_Layout';
import HeroSectionSkeleton from './HeroSection/HeroSectionSkeleton';

// Import configuration
import { Configuration } from './Config';

// Lazy load hero sections
const HeroSection1 = lazy(() => import('./HeroSection/HeroSection1'));
const HeroSection2 = lazy(() => import('./HeroSection/HeroSection2'));
const HeroSection3 = lazy(() => import('./HeroSection/HeroSection3'));
const HeroSectionCustom = lazy(() => import('./HeroSection/HeroSectionCustom'));

// Hero section selector component
const HeroSectionSelector = ({ section, props }) => {
  const sections = {
    '1': <HeroSection1 {...props} />,
    '2': <HeroSection2 {...props} />,
    '3': <HeroSection3 {...props} />,
    'custom': <HeroSectionCustom config={props} />,
    'none': null
  };

  return sections[section] || null;
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionProps, setSectionProps] = useState({});

  useEffect(() => {
    // Load configuration
    const loadConfig = () => {
      try {
        const config = Configuration;

        // Get section for current page (home)
        const pageSection = config.pageMappings?.home || config.activeSection;

        // Check for A/B testing
        let finalSection = pageSection;
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

        setActiveSection(finalSection);

        // Get props for the selected section
        if (finalSection && config.sections[finalSection]?.enabled) {
          setSectionProps(config.sections[finalSection].props || {});
        }
      } catch (error) {
        console.error('Failed to load configuration:', error);
        setActiveSection('none');
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
      {/* Hero Section with Lazy Loading */}
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSectionSelector
          section={activeSection}
          props={sectionProps}
        />
      </Suspense>
    </FrontEnd_Layout>
  );
};

export default Home;