// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection1.jsx

/**
 * Success Metrics Section Component
 * Displays key performance indicators, ROI calculator, and customer success stories
 * Features animated counters, tabbed metrics view, and interactive elements
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useRef } from 'react';

// React Icons - All icons from react-icons library
import {
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineShoppingCart,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChartPie,
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineExternalLink
} from 'react-icons/hi';

const SuccessMetricsSection1 = ({ config }) => {
  // State Management
  const [isVisible, setIsVisible] = useState(false);                             // Visibility state for animation
  const [animatedMetrics, setAnimatedMetrics] = useState({});                    // Stores animated metric values
  const [activeTab, setActiveTab] = useState(config?.initialTab || 'overview');  // Current active tab

  // Ref for intersection observer
  const sectionRef = useRef(null);                                   

  // Memoize metrics data for performance
  const metrics = useMemo(() => config?.metrics || [], [config]);

  /**
   * Intersection Observer - Triggers animation when section becomes visible
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Animate metrics counting from 0 to target value
   */
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in milliseconds
    const steps = 60;      // Number of animation steps
    const stepDuration = duration / steps;

    // Initialize starting values
    const startValues = {};
    const targetValues = {};
    const increments = {};

    metrics.forEach(metric => {
      const target = parseFloat(metric.value);
      startValues[metric.id] = 0;
      targetValues[metric.id] = target;
      increments[metric.id] = target / steps;
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      metrics.forEach(metric => {
        const increment = increments[metric.id];
        let newValue = startValues[metric.id] + (increment * currentStep);

        // Clamp to target value at final step
        if (currentStep >= steps) {
          newValue = targetValues[metric.id];
        }

        newValues[metric.id] = newValue;
      });

      setAnimatedMetrics(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, metrics]);

  /**
   * Format metric value based on suffix type
   * @param {number} value - The numeric value to format
   * @param {string} suffix - Suffix type ('%', 'x', 'k', 'm', or empty)
   * @returns {string} Formatted value string
   */
  const formatValue = (value, suffix) => {
    const numValue = parseFloat(value);

    if (isNaN(numValue)) return value;

    switch (suffix) {
      case '%':
        return `${Math.floor(numValue)}%`;
      case 'x':
        return `${numValue.toFixed(1)}x`;
      case 'k':
        return `${(numValue / 1000).toFixed(1)}K`;
      case 'm':
        return `${(numValue / 1000000).toFixed(1)}M`;
      default:
        return numValue >= 1000 ? `${(numValue / 1000).toFixed(1)}K` : `${Math.floor(numValue)}`;
    }
  };

  /**
   * Get trend icon based on trend direction
   * @param {string} trend - Trend direction ('up', 'down', or 'neutral')
   * @returns {JSX.Element} Trend icon component
   */
  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <HiOutlineTrendingUp className="w-3 h-3" />;
      case 'down':
        return <HiOutlineTrendingUp className="w-3 h-3 rotate-180" />;
      default:
        return <HiOutlineChartBar className="w-3 h-3" />;
    }
  };

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      'dollar': HiOutlineCurrencyDollar,
      'chart': HiOutlineChartBar,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'cog': HiOutlineCog,
      'cart': HiOutlineShoppingCart,
      'clock': HiOutlineClock,
      'check': HiOutlineCheckCircle,
      'bulb': HiOutlineLightBulb,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'group': HiOutlineUserGroup,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'pie': HiOutlineChartPie,
      'calculator': HiOutlineCalculator,
      'document': HiOutlineDocumentText,
      'play': HiOutlinePlay,
      'external': HiOutlineExternalLink
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  };

  // Tab configuration for detailed metrics
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'chart' },
    { id: 'operational', label: 'Operational', icon: 'cog' },
    { id: 'financial', label: 'Financial', icon: 'dollar' },
    { id: 'customer', label: 'Customer', icon: 'users' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Success Metrics Section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      {/* Floating Decorative Circles */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-green-300/10 dark:bg-green-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-300/10 dark:bg-emerald-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Metrics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* ==================== KEY METRICS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon and Trend Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(metric.icon, "w-7 h-7 text-green-600 dark:text-green-400")}
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${metric.trend === 'up'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : metric.trend === 'down'
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                  {getTrendIcon(metric.trend)}
                  <span>{metric.change}</span>
                </div>
              </div>

              {/* Metric Value - Animated Counter */}
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                {animatedMetrics[metric.id] !== undefined
                  ? formatValue(animatedMetrics[metric.id], metric.suffix)
                  : metric.value}
              </div>

              {/* Metric Label */}
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {metric.label}
              </div>

              {/* Metric Description */}
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== TESTIMONIAL SECTION ==================== */}
        {config?.testimonial && (
          <div className="mb-16 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 md:p-8 border border-green-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Quote Icon */}
              <div className="shrink-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  {getIcon("sparkles", "w-8 h-8 text-green-600")}
                </div>
              </div>

              {/* Quote Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{getIcon("star", "w-5 h-5 text-yellow-500 fill-yellow-500")}</span>
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{config.testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
                  <div className="text-sm text-gray-500">{config.testimonial.role}, {config.testimonial.company}</div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="text-center shrink-0">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{config.testimonial.result}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">achieved in {config.testimonial.timeline}</div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== DETAILED METRICS TABS ==================== */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon(tab.icon, "w-4 h-4")}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config?.detailedMetrics?.[activeTab]?.map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    {getIcon(metric.icon, "w-5 h-5 text-green-600")}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{metric.title}</h4>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400 font-mono">{metric.value}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500">Industry average:</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{metric.industryAvg}</span>
                      {metric.beatsAverage && (
                        <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs">
                          Above average
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ROI CALCULATOR PREVIEW ==================== */}
        {config?.showRoiCalculator && (
          <div className="mb-16 bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text Content */}
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  {getIcon("calculator", "w-7 h-7 text-white")}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{config?.roiTitle || "Calculate Your ROI"}</h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  {config?.roiDescription || "See how much you could save with our platform. Get a personalized estimate in minutes."}
                </p>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Calculate Now
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
              </div>

              {/* Right Column - Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">{config?.avgSavings || "25-35%"}</div>
                  <div className="text-sm text-green-100 mt-1">Cost Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">{config?.avgPayback || "3-6"}</div>
                  <div className="text-sm text-green-100 mt-1">Months Payback</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center col-span-2">
                  <div className="text-2xl font-bold">{config?.avgRoi || "300%"}</div>
                  <div className="text-sm text-green-100 mt-1">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CUSTOMER SUCCESS STORIES ==================== */}
        {config?.showStories && config?.successStories?.length > 0 && (
          <div className="mb-16">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.storiesTitle || "Customer Success Stories"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.storiesDescription || "Real results from real businesses"}
              </p>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.successStories.map((story, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    {/* Company Icon */}
                    <div className="w-14 h-14 bg-linear-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {getIcon(story.icon, "w-7 h-7 text-green-600")}
                    </div>

                    {/* Company Name */}
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{story.company}</h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{story.description}</p>

                    {/* Result and Link */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400 font-mono">{story.result}</div>
                      <Link
                        href={story.link}
                        className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline group-hover:gap-2 transition-all"
                      >
                        Read story
                        {getIcon("arrow", "w-3 h-3")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-green-600")}
              </div>

              {/* Text */}
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to achieve these results?"}
              </span>

              {/* Button */}
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Success Story"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Blob Animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        /* Grid Pattern Background */
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        
        /* Line Clamp for Text */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Rotate Animation for Down Trend */
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default SuccessMetricsSection1;