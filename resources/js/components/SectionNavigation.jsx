// ============================================================================
// Section Navigation Component
// ============================================================================

import { useEffect, useRef, useState } from "react";

const SectionNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    // Handle mouse movement near the right edge
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      // If mouse is within 50px of the right edge
      if (mouseX > windowWidth - 50) {
        // Clear any existing timeout
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
        setIsVisible(true);
        setIsHovering(true);
      }
      // If mouse is not hovering over the navigation and is far from the edge
      else if (!navigationRef.current?.contains(e.target) && mouseX < windowWidth - 100) {
        // Delay hiding to prevent flickering
        hoverTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
          setIsHovering(false);
        }, 300);
      }
    };

    // Find which section is currently in view
    const handleScroll = () => {
      const sectionElements = sections.map(section =>
        document.getElementById(`section-${section.type}`)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].type);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [sections]);

  const scrollToSection = (type) => {
    const element = document.getElementById(`section-${type}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Invisible hover zone */}
      <div
        className="fixed right-0 top-0 w-12.5 h-full z-40"
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          setIsVisible(true);
        }}
      />

      {/* Always visible indicator (peek) */}
      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-45 transition-all duration-300 ${isVisible ? 'opacity-0 translate-x-0' : 'opacity-100 translate-x-0'
          }`}
        style={{ pointerEvents: 'none' }}
      >
        <div className="relative">
          {/* Subtle gradient line */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-16 bg-linear-to-l from-blue-400/50 to-transparent rounded-l-full" />

          {/* Dot pattern indicator */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
            <div className="w-1 h-1 bg-blue-400/40 rounded-full" />
            <div className="w-1 h-1 bg-blue-400/60 rounded-full" />
            <div className="w-1 h-1 bg-blue-400/80 rounded-full" />
            <div className="w-1 h-1 bg-blue-400/60 rounded-full" />
            <div className="w-1 h-1 bg-blue-400/40 rounded-full" />
          </div>

          {/* Peek tab that appears on extreme edge */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 opacity-70">
            <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-l-md py-2 px-1 text-xs font-medium text-gray-600 whitespace-nowrap origin-right transition-transform hover:scale-105 border border-gray-200">
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
                  Navigate
                </span>
              </div>
            </div>
          </div>

          {/* Pulsing dot to attract attention (only shows after scrolling a bit) */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div
        ref={navigationRef}
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          setIsVisible(true);
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          hoverTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsHovering(false);
          }, 300);
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-l-lg shadow-lg p-3 border-l border-y border-gray-200">
          {/* Pull tab indicator */}
          <div className={`absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 transition-opacity duration-300 ${!isHovering && isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-l-md whitespace-nowrap shadow-md">
              Quick Nav
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {sections.map((section) => (
              <button
                key={section.type}
                onClick={() => scrollToSection(section.type)}
                className={`group relative flex items-center justify-end transition-all duration-200 hover:scale-110`}
                title={section.displayName}
              >
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-2.5 py-1.5 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                  {section.displayName}
                </span>

                {/* Dot indicator */}
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${activeSection === section.type
                    ? 'bg-blue-600 scale-125 ring-2 ring-blue-200'
                    : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group relative mx-auto"
            title="Scroll to top"
          >
            <span className="absolute right-full mr-3 px-2.5 py-1.5 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Top
            </span>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionNavigation;
