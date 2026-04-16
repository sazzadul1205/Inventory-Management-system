// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection3.jsx

/**
 * Before & After Transformation Library Component
 * A comprehensive showcase of client transformations featuring:
 * - Interactive scenario selection grid with cards
 * - Detailed before/after comparison view
 * - Animated impact metrics counters
 * - Expandable detail sections for deeper insights
 * - ROI calculator preview integration
 * - Case study download and sharing options
 * - Client testimonials with transformations
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaWindows } from 'react-icons/fa';
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlinePrinter,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineCloud,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

// Sweetalert
import Swal from 'sweetalert2';

const BeforeAfterScenariosSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(config?.initialScenario || 0);

  const sectionRef = useRef(null);
  const shareTooltipTimeout = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const scenarios = useMemo(() => config?.scenarios || [], [config]);
  const currentScenario = scenarios[selectedScenario];

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
      'exclamation': HiOutlineExclamation,
      'check': HiOutlineCheck,
      'x': HiOutlineX,
      'download': HiOutlineDownload,
      'share': HiOutlineShare,
      'printer': HiOutlinePrinter,
      'document': HiOutlineDocumentText,
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'users': HiOutlineUsers,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'bulb': HiOutlineLightBulb,
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
   * Parse metric value to extract numeric value
   * @param {string} value - Metric value string
   * @returns {number} Numeric value
   */
  const parseMetricValue = useCallback((value) => {
    const match = value.match(/[\d,.]+/);
    return match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  }, []);

  /**
   * Format value with original suffix
   * @param {number} value - Current animated value
   * @param {string} original - Original value string
   * @returns {string} Formatted value
   */
  const formatAnimatedValue = useCallback((value, original) => {
    const suffix = original.replace(/[\d,.]+/, '').trim();
    const prefix = original.match(/^[^\d]*/)?.[0] || '';

    if (suffix === '%') return `${Math.floor(value)}%`;
    if (suffix === 'x') return `${value.toFixed(1)}x`;
    if (value >= 1000000) return `${prefix}${(value / 1000000).toFixed(1)}M${suffix === 'M' ? '' : suffix}`;
    if (value >= 1000) return `${prefix}${(value / 1000).toFixed(1)}K${suffix === 'K' ? '' : suffix}`;
    return `${prefix}${Math.floor(value)}${suffix}`;
  }, []);

  /**
   * Handle share functionality
   */
  const handleShare = useCallback(async () => {
    const shareUrl = currentScenario?.shareUrl || window.location.href;
    const shareTitle = currentScenario?.company || 'Transformation Story';

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check out how ${shareTitle} transformed their operations!`,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Share cancelled', { err });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);

        // Show tooltip
        setShowShareTooltip(true);

        // Clear existing timeout
        if (shareTooltipTimeout.current) {
          clearTimeout(shareTooltipTimeout.current);
        }

        // Hide tooltip after 2 seconds
        shareTooltipTimeout.current = setTimeout(() => {
          setShowShareTooltip(false);
        }, 2000);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Failed to copy the link. ${err}`,
        });
      }
    }
  }, [currentScenario]);

  /**
   * Handle print functionality
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (shareTooltipTimeout.current) {
        clearTimeout(shareTooltipTimeout.current);
      }
    };
  }, []);

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE IMPACT METRICS ====================
  useEffect(() => {
    if (!isVisible || !currentScenario?.impact) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const startValues = {};
    const targetValues = {};
    const increments = {};

    currentScenario.impact.forEach((impact, index) => {
      const numericValue = parseMetricValue(impact.value);
      startValues[index] = 0;
      targetValues[index] = numericValue;
      increments[index] = numericValue / steps;
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      currentScenario.impact.forEach((_, index) => {
        let newValue = startValues[index] + (increments[index] * currentStep);
        if (currentStep >= steps) {
          newValue = targetValues[index];
        }
        newValues[index] = newValue;
      });

      setAnimatedValues(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, currentScenario, parseMetricValue]);

  // ==================== TOGGLE EXPANDABLE DETAIL ====================
  const toggleDetail = useCallback((index) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  }, [expandedDetail]);

  // Return early if no scenarios
  if (!currentScenario) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Library"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/30 to-transparent dark:from-green-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-green-300/5 dark:bg-green-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-green-100 dark:bg-green-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-green-200 dark:border-green-800'}`}
            aria-label="Transformation library badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-green-700 dark:text-green-300'}`}>
              {config?.badge?.text || "Transformation Library"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Client'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Transformation'}
            </span>{' '}
            {config?.title?.suffix || 'Stories'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Explore real-world examples of how we've helped businesses overcome challenges and achieve remarkable results."}
          </p>
        </div>

        {/* ==================== SCENARIO SELECTION GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              onClick={() => setSelectedScenario(index)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedScenario(index)}
              role="button"
              tabIndex={0}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${selectedScenario === index
                ? 'bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 shadow-lg'
                : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`View ${scenario.company} transformation story`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-green-600 dark:text-green-400">
                  {getIcon(scenario.icon, "w-10 h-10")}
                </div>
                {scenario.badge && (
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    {scenario.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {scenario.company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{scenario.industry}</p>
              <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 mb-3">
                {getIcon("trending", "w-3 h-3")}
                <span>{scenario.keyResult}</span>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
              <div className="flex justify-between text-sm">
                <span className="text-red-600 dark:text-red-400">Before</span>
                <span className="text-green-600 dark:text-green-400">After</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>{scenario.beforeMetric}</span>
                {getIcon("arrow", "w-3 h-3")}
                <span className="font-semibold text-green-600 dark:text-green-400">{scenario.afterMetric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== DETAILED COMPARISON VIEW ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-3xl">
          {/* Header with Company Info and Actions */}
          <div className="bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 p-6 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-green-400">
                  {getIcon(currentScenario.icon, "w-12 h-12")}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{currentScenario.company}</h3>
                  <p className="text-gray-300 text-sm">{currentScenario.industry}</p>
                  {currentScenario.location && (
                    <p className="text-gray-400 text-xs mt-1">{currentScenario.location}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2 relative">
                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Share this transformation story"
                >
                  {getIcon("share", "w-4 h-4")}
                </button>

                {/* Share Tooltip */}
                {showShareTooltip && (
                  <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg animate-fadeIn whitespace-nowrap">
                    Link copied to clipboard!
                  </div>
                )}

                {/* Print Button */}
                <button
                  onClick={handlePrint}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Print this transformation story"
                >
                  {getIcon("printer", "w-4 h-4")}
                </button>

                {/* Download Button */}
                {currentScenario.downloadLink && (
                  <Link
                    href={currentScenario.downloadLink}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label="Download case study PDF"
                  >
                    {getIcon("download", "w-4 h-4")}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Before/After Split Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Before Section */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("x", "w-5 h-5 text-red-600")}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">
                  Before Transformation
                </h3>
              </div>

              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    {getIcon("exclamation", "w-4 h-4")}
                    The Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {currentScenario.before?.challenge}
                  </p>
                </div>

                {/* Key Metrics - Before */}
                {currentScenario.before?.metrics && currentScenario.before.metrics.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Metrics</h4>
                    <div className="space-y-3">
                      {currentScenario.before.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                            <span className="font-semibold text-red-600 dark:text-red-400">{metric.value}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-red-500 rounded-full h-2 transition-all duration-1000"
                              style={{ width: metric.percentage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pain Points */}
                {currentScenario.before?.painPoints && currentScenario.before.painPoints.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Pain Points</h4>
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

            {/* After Section */}
            <div className="p-6 md:p-8 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  {getIcon("check", "w-5 h-5 text-green-600")}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">
                  After Transformation
                </h3>
              </div>

              <div className="space-y-6">
                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    {getIcon("bulb", "w-4 h-4")}
                    The Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {currentScenario.after?.solution}
                  </p>
                </div>

                {/* Results Achieved */}
                {currentScenario.after?.metrics && currentScenario.after.metrics.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Results Achieved</h4>
                    <div className="space-y-3">
                      {currentScenario.after.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-green-600 dark:text-green-400">{metric.value}</span>
                              {metric.improvement && (
                                <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                  ↑ {metric.improvement}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-green-500 rounded-full h-2 transition-all duration-1000"
                              style={{ width: metric.percentage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Improvements */}
                {currentScenario.after?.improvements && currentScenario.after.improvements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Improvements</h4>
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

          {/* Measurable Impact Metrics */}
          {currentScenario.impact && currentScenario.impact.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
              <h4 className="text-center font-bold text-gray-800 dark:text-gray-200 mb-5 flex items-center justify-center gap-2">
                {getIcon("chart", "w-5 h-5 text-green-600")}
                Measurable Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentScenario.impact.map((impact, idx) => (
                  <div key={idx} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="flex justify-center mb-2 text-green-600 dark:text-green-400">
                      {getIcon(impact.icon, "w-6 h-6")}
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {animatedValues[idx] !== undefined
                        ? formatAnimatedValue(animatedValues[idx], impact.value)
                        : impact.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROI Calculator Preview */}
          {currentScenario.roiCalculator && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    {getIcon("dollar", "w-5 h-5 text-green-600")}
                    See Your Potential ROI
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Based on {currentScenario.company}'s results, businesses like yours typically achieve:
                  </p>
                  <div className="flex gap-6 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">
                        {currentScenario.roiCalculator.savings}
                      </span>
                      <span className="text-xs text-gray-500">cost reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">
                        {currentScenario.roiCalculator.payback}
                      </span>
                      <span className="text-xs text-gray-500">months payback</span>
                    </div>
                    {currentScenario.roiCalculator.roi && (
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">
                          {currentScenario.roiCalculator.roi}
                        </span>
                        <span className="text-xs text-gray-500">ROI</span>
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  href={currentScenario.roiCalculator.link || "/roi-calculator"}
                  className="px-5 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap inline-flex items-center gap-2"
                >
                  Calculate Your ROI
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
              </div>
            </div>
          )}

          {/* Expandable Details Section */}
          {currentScenario.details && currentScenario.details.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              {currentScenario.details.map((detail, idx) => (
                <div key={idx} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <button
                    onClick={() => toggleDetail(idx)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                    aria-label={`Toggle ${detail.title}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-green-600 dark:text-green-400">
                        {getIcon(detail.icon, "w-5 h-5")}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {detail.title}
                      </span>
                    </div>
                    <span className="text-xl text-green-500">
                      {expandedDetail === idx ? '−' : '+'}
                    </span>
                  </button>
                  {expandedDetail === idx && (
                    <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed animate-fadeIn">
                      {detail.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 dark:bg-gray-800/30">
            <Link
              href={currentScenario.caseStudyLink || "/case-studies"}
              className="px-6 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              {getIcon("document", "w-4 h-4")}
              Download Full Case Study
            </Link>
            <Link
              href={currentScenario.demoLink || "/demo"}
              className="px-6 py-2.5 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 inline-flex items-center gap-2"
            >
              Schedule a Demo
              {getIcon("arrow", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== CLIENT TESTIMONIAL ==================== */}
        {currentScenario?.testimonial && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center">
            <div className="text-5xl text-green-400 mb-4">"</div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 max-w-3xl mx-auto leading-relaxed">
              {currentScenario.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">{currentScenario.testimonial.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{currentScenario.testimonial.role}</div>
              {currentScenario.testimonial.company && (
                <div className="text-xs text-gray-400 mt-1">{currentScenario.testimonial.company}</div>
              )}
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
          animation: fadeIn 0.3s ease-out forwards;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        @media print {
          .bg-noise-pattern, .absolute, button, .cursor-pointer {
            display: none !important;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterScenariosSection3;