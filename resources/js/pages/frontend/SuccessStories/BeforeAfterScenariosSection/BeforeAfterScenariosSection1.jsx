// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection1.jsx

/**
 * Before & After Transformation Scenarios Section Component
 * A powerful comparison component showcasing client transformations with:
 * - Interactive scenario selector by industry
 * - Visual before/after comparison with metrics
 * - Performance impact summaries
 * - Client testimonials for each scenario
 * - Transformation statistics
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';
import { FaWindows } from 'react-icons/fa';

// React Icons - All from react-icons library
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineLightBulb,
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineCloud,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const BeforeAfterScenariosSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeScenario, setActiveScenario] = useState(config?.initialScenario || 0);

  // ==================== MEMOIZED DATA ====================
  const scenarios = useMemo(() => config?.scenarios || [], [config]);
  const transformationStats = useMemo(() => config?.transformationStats || [], [config]);
  const currentScenario = scenarios[activeScenario];

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
      'arrow': HiArrowRight,
      'trending': HiOutlineTrendingUp,
      'bulb': HiOutlineLightBulb,
      'exclamation': HiOutlineExclamation,
      'check': HiOutlineCheck,
      'x': HiOutlineX,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'users': HiOutlineUsers,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'building': HiOutlineBuildingOffice,
      'chip': HiOutlineChip,
      'cloud': HiOutlineCloud,
      'google': TbBrandGoogle,
      'microsoft': FaWindows,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Render star rating for testimonials
   * @param {number} rating - Rating value (1-5)
   * @returns {JSX.Element} Star rating component
   */
  const renderStarRating = useCallback((rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center justify-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", "w-4 h-4 text-yellow-500 fill-yellow-500")}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i}>{getIcon("star", "w-4 h-4 text-yellow-500 fill-yellow-500 opacity-50")}</span>;
          }
          return <span key={i}>{getIcon("star", "w-4 h-4 text-gray-300 dark:text-gray-600")}</span>;
        })}
      </div>
    );
  }, [getIcon]);

  // Return early if no scenarios
  if (!currentScenario) return null;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Scenarios"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-24 h-24 bg-green-300/5 dark:bg-green-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-green-100 dark:bg-green-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-green-200 dark:border-green-800'}`}
            aria-label="Before & After badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-green-700 dark:text-green-300'}`}>
              {config?.badge?.text || "Transformation Stories"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Before vs'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'After'}
            </span>{' '}
            {config?.title?.suffix || 'Real Transformations'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See how we've helped businesses overcome challenges and achieve remarkable results across industries."}
          </p>
        </div>

        {/* ==================== SCENARIO NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeScenario === index
                ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`View ${scenario.industry} transformation story`}
            >
              <span className="flex items-center gap-2">
                {getIcon(scenario.icon, "w-4 h-4")}
                {scenario.industry}
              </span>
            </button>
          ))}
        </div>

        {/* ==================== BEFORE & AFTER COMPARISON CARD ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-3xl">
          {/* Header with Company Info */}
          <div className="bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-green-400">
                  {getIcon(currentScenario.icon, "w-12 h-12")}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentScenario.company}</h3>
                  <p className="text-gray-300 text-sm mt-1">{currentScenario.industry}</p>
                </div>
              </div>
              {currentScenario.location && (
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  {getIcon("building", "w-4 h-4")}
                  <span>{currentScenario.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Before & After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Before Column */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("x", "w-5 h-5 text-red-600")}
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  {config?.beforeLabel || "Before Transformation"}
                </h3>
              </div>
              <div className="space-y-6">
                {/* Challenge Description */}
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    The Challenge
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentScenario.before?.challenge}
                  </p>
                </div>

                {/* Key Metrics - Before */}
                {currentScenario.before?.metrics && currentScenario.before.metrics.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Key Metrics
                    </div>
                    <ul className="space-y-2">
                      {currentScenario.before.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                          <span className="text-sm font-semibold text-red-600 dark:text-red-400">{metric.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pain Points */}
                {currentScenario.before?.painPoints && currentScenario.before.painPoints.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Pain Points
                    </div>
                    <ul className="space-y-2">
                      {currentScenario.before.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 text-sm">✗</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* After Column */}
            <div className="p-6 md:p-8 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  {getIcon("check", "w-5 h-5 text-green-600")}
                </div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                  {config?.afterLabel || "After Transformation"}
                </h3>
              </div>
              <div className="space-y-6">
                {/* Solution Description */}
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    The Solution
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentScenario.after?.solution}
                  </p>
                </div>

                {/* Results Achieved */}
                {currentScenario.after?.metrics && currentScenario.after.metrics.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Results Achieved
                    </div>
                    <ul className="space-y-2">
                      {currentScenario.after.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700/50 rounded-lg">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-green-600 dark:text-green-400">{metric.value}</span>
                            {metric.improvement && (
                              <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full">
                                ↑ {metric.improvement}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Improvements */}
                {currentScenario.after?.improvements && currentScenario.after.improvements.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Key Improvements
                    </div>
                    <ul className="space-y-2">
                      {currentScenario.after.improvements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {getIcon("check-circle", "w-4 h-4 text-green-500 mt-0.5 shrink-0")}
                          <span className="text-sm text-gray-600 dark:text-gray-400">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Impact Summary Banner */}
          {currentScenario.impact && currentScenario.impact.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentScenario.impact.map((item, idx) => (
                  <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="text-green-600 dark:text-green-400 flex justify-center mb-2">
                      {getIcon(item.icon || "trending", "w-5 h-5")}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-200 dark:border-gray-700">
            <Link
              href={currentScenario.caseStudyLink || "/case-studies"}
              className="px-5 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {getIcon("arrow", "w-4 h-4")}
              Read Full Case Study
            </Link>
            <Link
              href={currentScenario.demoLink || "/demo"}
              className="px-5 py-2.5 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 inline-flex items-center gap-2"
            >
              {getIcon("bulb", "w-4 h-4")}
              See How It Works
            </Link>
          </div>
        </div>

        {/* ==================== TRANSFORMATION STATS ==================== */}
        {config?.showStats && transformationStats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {transformationStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center mb-3 text-green-600 dark:text-green-400">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== CLIENT TESTIMONIAL ==================== */}
        {currentScenario?.testimonial && (
          <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-12 text-center">
            <div className="mb-3">
              {renderStarRating(currentScenario.testimonial.rating || 5)}
            </div>
            <div className="text-4xl text-green-400 mb-3">"</div>
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-5 max-w-3xl mx-auto leading-relaxed">
              {currentScenario.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">
                {currentScenario.testimonial.author}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentScenario.testimonial.role}, {currentScenario.testimonial.company}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-green-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-green-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to write your own transformation story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                {getIcon("arrow", "w-4 h-4")}
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
          animation: fadeIn 0.3s ease-out;
        }
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterScenariosSection1;