// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection1.jsx

/**
 * Industry-Specific Success Examples Component
 * A comprehensive showcase of industry-specific solutions featuring:
 * - Interactive industry tabs for 6 major industries
 * - Key metrics display for each industry
 * - Challenge vs Solution comparison
 * - Real client success stories with measurable results
 * - ROI highlights for each industry
 * - Industry-specific CTAs
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineExclamation,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const IndustrySpecificExamplesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeIndustry, setActiveIndustry] = useState(config?.initialIndustry || 'retail');

  // ==================== MEMOIZED DATA ====================
  const industries = useMemo(() => config?.industries || {}, [config]);
  const currentIndustry = industries[activeIndustry];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'star': HiOutlineStar,
      'bulb': HiOutlineLightBulb,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'sparkles': HiOutlineSparkles,
      'exclamation': HiOutlineExclamation,
      'location': HiOutlineLocationMarker,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  // Industry tabs configuration
  const industryTabs = useMemo(() => [
    { id: 'retail', name: 'Retail & E-commerce', icon: 'database' },
    { id: 'manufacturing', name: 'Manufacturing', icon: 'building' },
    { id: 'logistics', name: 'Logistics & 3PL', icon: 'truck' },
    { id: 'healthcare', name: 'Healthcare', icon: 'shield' },
    { id: 'food', name: 'Food & Beverage', icon: 'star' },
    { id: 'electronics', name: 'Electronics', icon: 'chip' },
  ], []);

  // Return early if no industry data
  if (!currentIndustry) return null;

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry-Specific Success Examples"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Industry examples badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Industry Solutions"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Tailored Solutions for'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Every Industry'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See how we've helped businesses across different sectors overcome unique challenges and achieve remarkable results."}
          </p>
        </div>

        {/* ==================== INDUSTRY TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndustry(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeIndustry === tab.id
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`View ${tab.name} solutions`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.name}
            </button>
          ))}
        </div>

        {/* ==================== INDUSTRY CONTENT ==================== */}
        <div className="space-y-12 animate-fadeIn">
          {/* Industry Overview */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {currentIndustry.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {currentIndustry.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {currentIndustry.metrics && currentIndustry.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentIndustry.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Solution Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges Column */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 md:p-8 border border-red-100 dark:border-red-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("exclamation", "w-5 h-5 text-red-600")}
                </div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                  Common Challenges
                </h3>
              </div>
              <ul className="space-y-3">
                {currentIndustry.challenges?.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 text-sm">✗</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 md:p-8 border border-green-100 dark:border-green-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  {getIcon("bulb", "w-5 h-5 text-green-600")}
                </div>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                  Our Solutions
                </h3>
              </div>
              <ul className="space-y-3">
                {currentIndustry.solutions?.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {getIcon("check-circle", "w-5 h-5 text-green-500 mt-0.5 shrink-0")}
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Success Stories Section */}
          {currentIndustry.stories && currentIndustry.stories.length > 0 && (
            <div>
              <div className="flex items-center justify-center gap-2 mb-8">
                {getIcon("star", "w-6 h-6 text-yellow-500")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Success Stories
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentIndustry.stories.map((story, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-6">
                      {/* Company Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-blue-600 dark:text-blue-400">
                          {getIcon(story.icon, "w-10 h-10")}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {story.company}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            {getIcon("location", "w-3 h-3")}
                            <span>{story.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Before & After Comparison */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Before</div>
                          <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                            {story.before}
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">After</div>
                          <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                            {story.after}
                          </div>
                        </div>
                      </div>

                      {/* Result Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.results?.map((result, ridx) => (
                          <span
                            key={ridx}
                            className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full flex items-center gap-1"
                          >
                            {getIcon("trending", "w-3 h-3")}
                            {result}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={story.link || "/case-studies"}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all group"
                      >
                        Read Full Story
                        {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROI Highlight Banner */}
          {currentIndustry.roiHighlight && (
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <div className="flex justify-center mb-3">
                {getIcon("trending", "w-10 h-10 text-white")}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {currentIndustry.roiHighlight.value}
              </div>
              <p className="text-blue-100 max-w-md mx-auto">
                {currentIndustry.roiHighlight.description}
              </p>
            </div>
          )}

          {/* Industry-Specific CTA */}
          {currentIndustry.cta && (
            <div className="text-center pt-4">
              <Link
                href={currentIndustry.cta.link || "/demo"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {currentIndustry.cta.text || "Learn More"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          )}
        </div>

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-12 mt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-300 hover:opacity-100 hover:scale-110">
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MAIN CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to see how we can help your industry?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Consultation"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default IndustrySpecificExamplesSection1;