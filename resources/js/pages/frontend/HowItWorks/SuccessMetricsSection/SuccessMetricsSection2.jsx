// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection2.jsx

/**
 * Success Metrics Section 2 Component
 * Displays interactive KPI dashboard with animated charts, benchmark comparisons,
 * ROI projections, and customer success timeline
 * Features: Interactive metric selection, animated bar charts, benchmark comparisons
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// React Icons - All icons from react-icons library (no emojis, no custom icons)
import {
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiArrowRight,
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlineRefresh,
  HiOutlineTrendingUp,
  HiOutlineUsers,
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
  HiOutlineExternalLink,
  HiOutlineCog,
  HiOutlineShoppingCart
} from 'react-icons/hi';

const SuccessMetricsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [hoveredBar, setHoveredBar] = useState(null);                                          // Currently hovered chart bar
  const [animatedValues, setAnimatedValues] = useState({});                                    // Animated counter values
  const [isChartVisible, setIsChartVisible] = useState(false);                                 // Chart animation trigger
  const [timeRange, setTimeRange] = useState(config?.initialTimeRange || '6months');           // Time range for chart data
  const [selectedMetric, setSelectedMetric] = useState(config?.initialMetric || 'inventory');  // Currently selected KPI

  // Ref for chart visibility
  const chartSectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  // Memoize metrics data for performance
  const metrics = useMemo(() => config?.metrics || [], [config]);

  // Memoize chart data based on selected metric and time range
  const chartData = useMemo(() => {
    const data = config?.chartData?.[selectedMetric]?.[timeRange] || config?.chartData?.default?.[timeRange] || [];
    return data;
  }, [selectedMetric, timeRange, config]);

  // Memoize benchmarks data
  const benchmarks = useMemo(() => config?.benchmarks || [], [config]);

  // ==================== INTERSECTION OBSERVER ====================
  // Trigger chart animation when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (chartSectionRef.current) {
      observer.observe(chartSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATION EFFECTS ====================
  // Animate KPI counter values on mount
  useEffect(() => {
    const duration = 1500; // Animation duration in milliseconds
    const steps = 50;       // Number of animation steps
    const stepDuration = duration / steps;

    // Initialize starting values and increments
    const startValues = {};
    const targetValues = {};
    const increments = {};

    metrics.forEach(metric => {
      const target = parseFloat(metric.current);
      startValues[metric.id] = 0;
      targetValues[metric.id] = target;
      increments[metric.id] = target / steps;
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      metrics.forEach(metric => {
        let newValue = startValues[metric.id] + (increments[metric.id] * currentStep);
        if (currentStep >= steps) {
          newValue = targetValues[metric.id];
        }
        newValues[metric.id] = newValue;
      });

      setAnimatedValues(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [metrics]);

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Format numeric values for display (K, M suffixes)
   * @param {number} value - The numeric value to format
   * @returns {string} Formatted value string
   */
  const formatValue = useCallback((value) => {
    if (typeof value !== 'number') return value;
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
  }, []);

  /**
   * Format metric value with suffix
   * @param {number} value - The numeric value
   * @param {string} suffix - Suffix type ('%', 'x', or empty)
   * @returns {string} Formatted value with suffix
   */
  const formatMetricValue = useCallback((value, suffix) => {
    if (suffix === '%') return `${Math.floor(value)}%`;
    if (suffix === 'x') return `${value.toFixed(1)}x`;
    return formatValue(value);
  }, [formatValue]);

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
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
      'external': HiOutlineExternalLink,
      'cog': HiOutlineCog,
      'cart': HiOutlineShoppingCart,
      'calendar': HiOutlineCalendar,
      'refresh': HiOutlineRefresh,
      'download': HiOutlineDownload,
      'arrow': HiArrowRight
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get trend icon based on direction
   * @param {string} trend - 'up' or 'down'
   * @returns {string} Arrow symbol
   */
  const getTrendSymbol = useCallback((trend) => {
    return trend === 'up' ? '↑' : '↓';
  }, []);

  // Calculate max value for chart scaling
  const maxChartValue = Math.max(...(chartData.map(d => d.value) || [0]), 100);

  // Get current metric label
  const currentMetricLabel = metrics.find(m => m.id === selectedMetric)?.label || 'Performance Trend';

  // Time range display text
  const getTimeRangeText = () => {
    switch (timeRange) {
      case '3months': return '90 days';
      case '6months': return '180 days';
      case '1year': return '365 days';
      default: return '180 days';
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Success Metrics Dashboard Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-green-300/10 dark:bg-green-500/5 rounded-full blur-xl" aria-hidden="true" />
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-emerald-300/10 dark:bg-emerald-500/5 rounded-full blur-xl" aria-hidden="true" />

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

        {/* ==================== TIME RANGE SELECTOR ==================== */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-1">
            {config?.timeRanges?.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${timeRange === range.value
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show ${range.label} data`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== KPI CARDS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedMetric === metric.id ? 'ring-2 ring-green-500 shadow-xl' : ''
                }`}
              onClick={() => setSelectedMetric(metric.id)}
              role="button"
              tabIndex={0}
              aria-label={`Select ${metric.label} metric`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMetric(metric.id)}
            >
              {/* Icon and Trend Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(metric.icon, "w-6 h-6 text-green-600 dark:text-green-400")}
                </div>
                <span className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-full ${metric.trend === 'up'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                  {getTrendSymbol(metric.trend)} {metric.change}
                </span>
              </div>

              {/* Value */}
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                {animatedValues[metric.id] !== undefined
                  ? formatMetricValue(animatedValues[metric.id], metric.suffix)
                  : metric.current}
              </div>

              {/* Label and Comparison */}
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                vs {metric.previous}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CHART SECTION ==================== */}
        <div ref={chartSectionRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          {/* Chart Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {currentMetricLabel}
              </h3>
              <p className="text-sm text-gray-500">
                Last {getTimeRangeText()}
              </p>
            </div>
            <button
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Refresh chart data"
            >
              {getIcon("refresh", "w-5 h-5")}
            </button>
          </div>

          {/* Bar Chart Visualization */}
          <div className="relative h-72 mb-6">
            <div className="absolute inset-0 flex items-end gap-2">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2 group/chart"
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Value Tooltip */}
                  {hoveredBar === index && (
                    <div className="absolute -mt-10 transform -translate-x-1/2 left-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 animate-fadeIn">
                      {item.value}{item.suffix || ''}
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    className={`w-full bg-linear-to-t from-green-500 to-emerald-500 rounded-t-lg transition-all duration-500 cursor-pointer ${isChartVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{
                      height: isChartVisible ? `${(item.value / maxChartValue) * 220}px` : '0px',
                      transition: 'height 0.5s ease-out, opacity 0.3s ease'
                    }}
                  >
                    <div className="w-full h-full hover:bg-green-600/20 rounded-t-lg transition-colors" />
                  </div>

                  {/* Label */}
                  <span className="text-xs text-gray-500 dark:text-gray-400 transform -rotate-45 origin-top-left whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-sm" />
              <span className="text-xs text-gray-600 dark:text-gray-400">Current Period</span>
            </div>
            {chartData.some(d => d.previousValue !== undefined) && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Previous Period</span>
              </div>
            )}
          </div>
        </div>

        {/* ==================== BENCHMARK & ROI SECTION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Benchmark Comparison Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                {getIcon("chart", "w-5 h-5 text-green-600")}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Industry Benchmark</h3>
            </div>

            <div className="space-y-5">
              {benchmarks.map((benchmark, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 dark:text-gray-400">{benchmark.metric}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {benchmark.yourScore} vs {benchmark.industryAvg}
                    </span>
                  </div>

                  {/* Comparison Bar */}
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-green-500 rounded-full transition-all duration-700"
                      style={{
                        width: `${(benchmark.yourScore / benchmark.industryAvg) * 100}%`,
                        maxWidth: '100%'
                      }}
                    />
                    <div
                      className="absolute h-full bg-gray-400 dark:bg-gray-500 rounded-full opacity-40"
                      style={{ width: '100%' }}
                    />
                  </div>

                  {/* Labels */}
                  <div className="flex justify-between text-xs mt-1.5">
                    <span className="text-green-600 dark:text-green-400 font-medium">Your Score</span>
                    <span className="text-gray-500 dark:text-gray-400">Industry Average</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Projection Card */}
          <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                {getIcon("calculator", "w-5 h-5 text-white")}
              </div>
              <h3 className="font-bold text-lg">ROI Projection</h3>
            </div>

            {/* Savings Grid */}
            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">${config?.roiProjection?.year1 || "125K"}</div>
                <div className="text-sm text-green-100 mt-1">Year 1 Savings</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">${config?.roiProjection?.year3 || "450K"}</div>
                <div className="text-sm text-green-100 mt-1">Year 3 Savings</div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1.5">
                <span>Payback Period</span>
                <span className="font-semibold">{config?.roiProjection?.payback || "4.2"} months</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-700"
                  style={{ width: `${((config?.roiProjection?.payback || 4.2) / 12) * 100}%` }}
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={config?.roiLink || "/roi-calculator"}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Calculate Your ROI
              {getIcon("arrow", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== SUCCESS TIMELINE ==================== */}
        {config?.showTimeline && config?.timeline?.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                {getIcon("calendar", "w-5 h-5 text-green-600")}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Success Timeline</h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500 to-emerald-500" />

              {config.timeline.map((item, index) => (
                <div key={index} className="relative flex gap-4 mb-6 last:mb-0 group">
                  {/* Timeline Dot */}
                  <div className="shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <span className="text-sm font-bold text-green-600">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="text-sm font-semibold text-green-600 mb-1">{item.month}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                    <div className="text-sm font-semibold text-green-600">{item.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CUSTOMER LOGOS GRID ==================== */}
        {config?.showCustomers && config?.customerLogos?.length > 0 && (
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.customersTitle || "Trusted by Industry Leaders"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.customersDescription || "Join 10,000+ businesses achieving remarkable results"}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {config.customerLogos.map((customer, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex justify-center mb-3">
                    {getIcon(customer.icon, "w-10 h-10 text-green-600")}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                    {customer.name}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                    {customer.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD REPORT CTA ==================== */}
        {config?.showDownload && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center mb-8 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("download", "w-4 h-4 text-green-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.downloadText || "Want the full picture?"}
              </span>
            </div>
            <Link
              href={config?.reportLink || "/reports/success-metrics"}
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all"
            >
              Download Complete Success Metrics Report
              {getIcon("arrow", "w-4 h-4")}
            </Link>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-green-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to see these results for your business?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Your Free Assessment"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Dots Pattern Background */
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default SuccessMetricsSection2;