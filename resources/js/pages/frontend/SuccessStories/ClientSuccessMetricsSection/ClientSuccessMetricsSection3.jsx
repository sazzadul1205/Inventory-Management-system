// frontend/SuccessStories/ClientSuccessMetricsSection/ClientSuccessMetricsSection3.jsx

/**
 * Client Success Metrics Section 3 Component - Case Studies & ROI Impact
 * A comprehensive showcase of client success metrics featuring:
 * - Animated statistics counters with number parsing
 * - Industry performance metrics with interactive selection
 * - Dynamic case study display based on selected industry
 * - ROI calculator preview with key metrics
 * - Client testimonials with star ratings
 * - Trust badges and industry recognition
 * - Downloadable success report link
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaWindows } from 'react-icons/fa';
import {
  HiArrowRight,
  HiOutlineDownload,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineCheckCircle,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const ClientSuccessMetricsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);                                 // Visibility state for animation
  const [animatedValues, setAnimatedValues] = useState({});                           // Stores animated metric values
  const [selectedMetric, setSelectedMetric] = useState(config?.initialMetric || 0);  // Currently selected industry metric index

  const sectionRef = useRef(null);                                                   // Ref for intersection observer

  // ==================== MEMOIZED DATA ====================
  const metrics = useMemo(() => config?.metrics || [], [config]);
  const trustBadges = useMemo(() => config?.trustBadges || [], [config]);
  const caseStudies = useMemo(() => config?.caseStudies || [], [config]);
  const testimonials = useMemo(() => config?.testimonials || [], [config]);
  const detailedMetrics = useMemo(() => config?.detailedMetrics || [], [config]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'arrow': HiArrowRight,
      'download': HiOutlineDownload,
      'chart': HiOutlineChartBar,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'bulb': HiOutlineLightBulb,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'document': HiOutlineDocumentText,
      'play': HiOutlinePlay,
      'check': HiOutlineCheckCircle,
      'globe': HiOutlineGlobeAlt,
      'trophy': HiOutlineTrophy,
      'google': TbBrandGoogle,
      'microsoft': FaWindows,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Parse metric value to extract numeric value and suffix
   * @param {string} value - Metric value string (e.g., "287%", "$1.2M", "500+")
   * @returns {Object} Object containing numeric value and suffix
   */
  const parseMetricValue = useCallback((value) => {
    const numericMatch = value.match(/[\d,.]+/);
    const numericValue = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, '')) : 0;
    const suffix = value.replace(/[\d,.]+/, '').trim();
    const prefix = value.match(/^[^\d]*/)?.[0] || '';
    return { numericValue, suffix, prefix };
  }, []);

  /**
   * Format animated value with original formatting
   * @param {number} value - Current animated numeric value
   * @param {string} originalValue - Original metric value string
   * @returns {string} Formatted value with prefix/suffix
   */
  const formatAnimatedValue = useCallback((value, originalValue) => {
    const { suffix, prefix } = parseMetricValue(originalValue);
    let formattedNumber = value;

    if (suffix === '%') {
      formattedNumber = Math.floor(value);
    } else if (suffix === 'x') {
      formattedNumber = value.toFixed(1);
    } else if (suffix === 'K' || suffix === 'M' || suffix === 'B') {
      if (value >= 1000000000) formattedNumber = `${(value / 1000000000).toFixed(1)  }B`;
      else if (value >= 1000000) formattedNumber = `${(value / 1000000).toFixed(1)  }M`;
      else if (value >= 1000) formattedNumber = `${(value / 1000).toFixed(1)  }K`;
      else formattedNumber = Math.floor(value);
    } else if (value >= 1000000) {
      formattedNumber = `${(value / 1000000).toFixed(1)  }M`;
    } else if (value >= 1000) {
      formattedNumber = `${(value / 1000).toFixed(1)  }K`;
    } else {
      formattedNumber = Math.floor(value);
    }

    return `${prefix}${formattedNumber}${suffix === 'K' || suffix === 'M' || suffix === 'B' ? '' : suffix}`;
  }, [parseMetricValue]);

  /**
   * Render star rating component
   * @param {number} rating - Rating value (1-5)
   * @returns {JSX.Element} Star rating component
   */
  const renderStarRating = useCallback((rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", "w-3 h-3 text-yellow-500 fill-yellow-500")}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i}>{getIcon("star", "w-3 h-3 text-yellow-500 fill-yellow-500 opacity-50")}</span>;
          }
          return <span key={i}>{getIcon("star", "w-3 h-3 text-gray-300 dark:text-gray-600")}</span>;
        })}
      </div>
    );
  }, [getIcon]);

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

  // ==================== ANIMATION EFFECT ====================
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    const stepDuration = duration / totalFrames;

    const startValues = {};
    const targetValues = {};
    const increments = {};

    metrics.forEach((metric, index) => {
      const { numericValue } = parseMetricValue(metric.value);
      startValues[index] = 0;
      targetValues[index] = numericValue;
      increments[index] = numericValue / totalFrames;
    });

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      const newValues = {};

      metrics.forEach((_, index) => {
        let newValue = startValues[index] + (increments[index] * currentFrame);
        if (currentFrame >= totalFrames) {
          newValue = targetValues[index];
        }
        newValues[index] = newValue;
      });

      setAnimatedValues(newValues);

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, metrics, parseMetricValue]);

  // Get current case study based on selected metric
  const currentCaseStudy = caseStudies[selectedMetric];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics & Case Studies"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-32 right-10 w-24 h-24 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Success metrics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Proven Results"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Client'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Success'}
            </span>{' '}
            {config?.title?.suffix || 'Metrics'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Real results from real clients across industries. See how we deliver measurable impact."}
          </p>
        </div>

        {/* ==================== HERO METRICS - ANIMATED COUNTERS ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {getIcon(metric.icon, "w-10 h-10")}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono">
                {animatedValues[index] !== undefined
                  ? formatAnimatedValue(animatedValues[index], metric.value)
                  : metric.value}
              </div>
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== DETAILED METRICS WITH INTERACTIVE SELECTION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Industry Performance Metrics */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {getIcon("chart", "w-6 h-6 text-blue-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.detailedTitle || "Performance by Industry"}
              </h3>
            </div>
            <div className="space-y-4">
              {detailedMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${selectedMetric === index
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 shadow-md'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 border-l-4 border-transparent'
                    }`}
                  onClick={() => setSelectedMetric(index)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedMetric(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${metric.industry} performance details`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {getIcon(metric.icon, "w-6 h-6 text-blue-600")}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {metric.industry}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-full h-2 transition-all duration-1000"
                      style={{ width: metric.percentage }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-gray-500 dark:text-gray-400">{metric.label}</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{metric.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Featured Case Study */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {getIcon("document", "w-6 h-6 text-blue-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.caseStudyTitle || "Featured Case Study"}
              </h3>
            </div>
            {currentCaseStudy && (
              <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    {getIcon(currentCaseStudy.icon, "w-14 h-14 text-blue-600")}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold text-center mb-1 uppercase tracking-wide">
                    {currentCaseStudy.industry}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                    {currentCaseStudy.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-5">
                    {currentCaseStudy.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {currentCaseStudy.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-white dark:bg-gray-700/50 rounded-xl">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={currentCaseStudy.link || "/case-studies"}
                    className="inline-flex items-center justify-center gap-2 w-full text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all group"
                  >
                    Read Full Case Study
                    {getIcon("arrow", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================== ROI IMPACT CALCULATOR PREVIEW ==================== */}
        {config?.showROICalculator && (
          <div className="mb-16 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon("dollar", "w-8 h-8 text-white")}
                  <h3 className="text-2xl font-bold">
                    {config?.roiTitle || "Calculate Your Potential ROI"}
                  </h3>
                </div>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  {config?.roiDescription || "Based on data from 500+ implementations across industries, see what you could achieve with our solutions."}
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {config?.roiMetrics?.map((metric, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Calculate Your ROI
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
              </div>

              {/* Right Column - Visual */}
              <div className="bg-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {getIcon("chart", "w-16 h-16 text-white")}
                  </div>
                  <div className="text-white font-semibold">Custom ROI Analysis</div>
                  <div className="text-sm text-blue-200 mt-1">Tailored to your business</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CLIENT TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("star", "w-6 h-6 text-yellow-500")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.testimonialsTitle || "What Our Clients Say"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-3">
                    {renderStarRating(testimonial.rating || 5)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed mb-4 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      {getIcon(testimonial.icon || "users", "w-5 h-5 text-blue-600")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                  {testimonial.result && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Result achieved:</span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 ml-1">
                        {testimonial.result}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES & RECOGNITION ==================== */}
        {config?.showTrust && trustBadges.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Recognized by industry leaders and analysts worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center group transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="mb-2">
                    {getIcon(badge.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD REPORT CALL TO ACTION ==================== */}
        {config?.showDownload && (
          <div className="text-center mt-12">
            <Link
              href={config?.downloadLink || "/success-report"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-md group"
            >
              {getIcon("download", "w-5 h-5 group-hover:-translate-y-0.5 transition-transform")}
              {config?.downloadText || "Download Full Success Report"}
            </Link>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Line Clamp Utility for Testimonials */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Noise Pattern Background */
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default ClientSuccessMetricsSection3;