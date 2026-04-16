// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection2.jsx

/**
 * ROI Projection Dashboard Component
 * An interactive ROI projection tool featuring:
 * - Industry-specific scenario selection
 * - Dynamic investment and time horizon controls
 * - Animated savings and ROI metrics
 * - Cumulative savings bar chart visualization
 * - Year-by-year ROI comparison with progress bars
 * - ROI comparison table for different investment levels
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// React Icons - All from react-icons library
import { FaChartLine, FaMicrosoft } from 'react-icons/fa';
import {
  HiArrowRight,
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdOutlinePieChart } from 'react-icons/md';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const ROICalculationsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [roiData, setRoiData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [timeHorizon, setTimeHorizon] = useState(config?.defaultTimeHorizon || 3);
  const [selectedScenario, setSelectedScenario] = useState(config?.initialScenario || 'retail');
  const [investmentAmount, setInvestmentAmount] = useState(config?.defaultInvestment || 150000);

  // ==================== REFS ====================
  const dashboardRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const scenarios = useMemo(() => config?.scenarios || {}, [config]);
  const currentScenario = scenarios[selectedScenario];
  const investmentLevels = useMemo(() => config?.investmentLevels || [], [config]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'calculator': HiOutlineCalculator,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'check-circle': HiOutlineCheckCircle,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'arrow': HiArrowRight,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Format currency for display
   * @param {number} value - Numeric value
   * @returns {string} Formatted currency string
   */
  const formatCurrency = useCallback((value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  /**
   * Format large numbers with K/M suffix for compact display
   * @param {number} value - Numeric value
   * @returns {string} Formatted value with suffix
   */
  const formatLargeNumber = useCallback((value) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  }, []);

  // ==================== ROI CALCULATION EFFECT ====================
  useEffect(() => {
    if (!currentScenario) return;

    const annualSavings = investmentAmount * currentScenario.savingsRate;
    const totalSavings = annualSavings * timeHorizon;
    const netROI = ((totalSavings - investmentAmount) / investmentAmount) * 100;
    const paybackMonths = (investmentAmount / (annualSavings / 12)).toFixed(1);
    const monthlySavings = annualSavings / 12;

    // Generate year-by-year data for charts
    const yearlyData = [];
    for (let i = 1; i <= timeHorizon; i++) {
      yearlyData.push({
        year: i,
        savings: annualSavings * i,
        cumulativeROI: ((annualSavings * i - investmentAmount) / investmentAmount) * 100,
      });
    }

    setRoiData({
      annualSavings,
      totalSavings,
      netROI,
      paybackMonths: parseFloat(paybackMonths),
      monthlySavings,
      yearlyData,
    });
  }, [investmentAmount, currentScenario, timeHorizon]);

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

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE ROI VALUES ====================
  useEffect(() => {
    if (!isVisible || !roiData) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      annualSavings: roiData.annualSavings,
      monthlySavings: roiData.monthlySavings,
      netROI: roiData.netROI,
      payback: roiData.paybackMonths,
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const newValues = {};

      Object.keys(targets).forEach(key => {
        const target = targets[key];
        let currentValue = target * progress;
        if (currentStep >= steps) currentValue = target;

        if (key === 'netROI') {
          newValues[key] = `${Math.floor(currentValue)}%`;
        } else if (key === 'payback') {
          newValues[key] = `${currentValue.toFixed(1)} mo`;
        } else if (key === 'monthlySavings') {
          newValues[key] = formatLargeNumber(currentValue);
        } else if (key === 'annualSavings') {
          newValues[key] = formatLargeNumber(currentValue);
        }
      });

      setAnimatedValues(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, roiData, formatLargeNumber]);

  // Calculate max savings for bar chart scaling
  const maxSavings = roiData?.yearlyData?.[roiData.yearlyData.length - 1]?.savings || 0;
  const maxBarHeight = 180;

  // Return early if no scenario data
  if (!currentScenario) return null;

  return (
    <section
      ref={dashboardRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="ROI Projection Dashboard"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="ROI dashboard badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "ROI Projection Dashboard"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Project Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Investment Returns'}
            </span>{' '}
            {config?.title?.suffix || 'Over Time'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Interactive dashboard to visualize potential ROI based on your industry, investment, and time horizon."}
          </p>
        </div>

        {/* ==================== MAIN DASHBOARD GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Industry Scenario Selector */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("chart", "w-5 h-5 text-blue-600")}
                Industry Scenario
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedScenario(key)}
                    className={`p-3 rounded-xl text-center transition-all duration-300 transform hover:scale-105 ${selectedScenario === key
                      ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    aria-label={`Select ${scenario.name} scenario`}
                  >
                    <div className="text-2xl mb-1">{getIcon(scenario.icon, "w-6 h-6 mx-auto")}</div>
                    <div className="text-sm font-medium">{scenario.name}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                {currentScenario.description}
              </p>
            </div>

            {/* Investment Amount Slider */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Initial Investment
              </label>
              <div className="relative mb-2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseInt(e.target.value) || 0)}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Investment amount"
                />
              </div>
              <input
                type="range"
                min={config?.investmentMin || 50000}
                max={config?.investmentMax || 500000}
                step={config?.investmentStep || 10000}
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(parseInt(e.target.value))}
                className="w-full"
                aria-label="Investment amount slider"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>${(config?.investmentMin || 50) / 1000}K</span>
                <span>${(config?.investmentMax || 500) / 1000}K</span>
              </div>
            </div>

            {/* Time Horizon Slider */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Horizon: {timeHorizon} Year{timeHorizon !== 1 ? 's' : ''}
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                className="w-full"
                aria-label="Time horizon slider"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>1 Year</span>
                <span>5 Years</span>
              </div>
            </div>

            {/* Key Metrics Summary Card */}
            {roiData && (
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  {getIcon("trending", "w-5 h-5 text-white")}
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-blue-400 pb-2">
                    <div className="text-xs text-blue-200">Annual Savings</div>
                    <div className="text-2xl font-bold">{animatedValues.annualSavings || formatLargeNumber(roiData.annualSavings)}</div>
                  </div>
                  <div className="border-b border-blue-400 pb-2">
                    <div className="text-xs text-blue-200">Monthly Savings</div>
                    <div className="text-lg font-semibold">{animatedValues.monthlySavings || formatLargeNumber(roiData.monthlySavings)}</div>
                  </div>
                  <div className="border-b border-blue-400 pb-2">
                    <div className="text-xs text-blue-200">Payback Period</div>
                    <div className="text-lg font-semibold">{animatedValues.payback || `${roiData.paybackMonths.toFixed(1)} mo`}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">{timeHorizon}-Year ROI</div>
                    <div className="text-2xl font-bold">{animatedValues.netROI || `${Math.floor(roiData.netROI)}%`}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Charts and Visualizations */}
          <div className="lg:col-span-2 space-y-6">
            {/* ROI Summary Cards */}
            {roiData && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center border border-green-100 dark:border-green-800">
                  <div className="flex justify-center mb-3 text-green-600 dark:text-green-400">
                    {getIcon("dollar", "w-8 h-8")}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(roiData.totalSavings)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Total Savings ({timeHorizon} Year{timeHorizon !== 1 ? 's' : ''})
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {getIcon("trending", "w-8 h-8")}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {roiData.netROI.toFixed(0)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    ROI ({timeHorizon} Year{timeHorizon !== 1 ? 's' : ''})
                  </div>
                </div>
              </div>
            )}

            {/* Cumulative Savings Bar Chart */}
            {roiData && roiData.yearlyData.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FaChartLine className="w-5 h-5 text-blue-600" />
                  Cumulative Savings Projection
                </h3>
                <div className="relative h-64">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 h-52">
                    {roiData.yearlyData.map((data, idx) => {
                      const height = (data.savings / maxSavings) * maxBarHeight;
                      return (
                        <div key={idx} className="flex flex-col items-center flex-1 group">
                          <div className="relative w-full max-w-20 mx-auto">
                            <div
                              className="w-full bg-linear-to-t from-blue-500 to-indigo-500 rounded-t-lg transition-all duration-700 hover:from-blue-600 hover:to-indigo-600 cursor-pointer"
                              style={{ height: `${Math.max(height, 4)}px` }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
                                {formatCurrency(data.savings)}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-3">Year {data.year}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                  Cumulative savings over {timeHorizon} year{timeHorizon !== 1 ? 's' : ''}
                </div>
              </div>
            )}

            {/* ROI by Year Progress Bars */}
            {roiData && roiData.yearlyData.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <MdOutlinePieChart className="w-5 h-5 text-blue-600" />
                  ROI by Year
                </h3>
                <div className="space-y-5">
                  {roiData.yearlyData.map((data, idx) => {
                    const roiPercent = data.cumulativeROI;
                    const isPositive = roiPercent >= 0;
                    const barColor = isPositive ? 'bg-linear-to-r from-green-500 to-emerald-500' : 'bg-linear-to-r from-red-500 to-rose-500';
                    const barWidth = Math.min(Math.abs(roiPercent) / 500 * 100, 100);

                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Year {data.year}</span>
                          <span className={`font-semibold ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {isPositive ? '+' : ''}{roiPercent.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`${barColor} rounded-full h-3 transition-all duration-1000 ease-out`}
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================== ROI COMPARISON TABLE ==================== */}
        {config?.showComparison && investmentLevels.length > 0 && roiData && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6 flex items-center justify-center gap-2">
              {getIcon("chart", "w-5 h-5 text-blue-600")}
              {config?.comparisonTitle || "ROI Comparison by Investment Level"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Investment</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Annual Savings</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Payback Period</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">3-Year ROI</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">5-Year ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {investmentLevels.map((level, idx) => {
                    const annualSavings = level.value * currentScenario.savingsRate;
                    const payback = (level.value / (annualSavings / 12)).toFixed(1);
                    const roi3Year = ((annualSavings * 3 - level.value) / level.value) * 100;
                    const roi5Year = ((annualSavings * 5 - level.value) / level.value) * 100;

                    return (
                      <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {formatCurrency(level.value)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {formatCurrency(annualSavings)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {payback} months
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
                          +{roi3Year.toFixed(0)}%
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
                          +{roi5Year.toFixed(0)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== CLIENT TESTIMONIAL ==================== */}
        {config?.showTestimonial && config?.testimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center border border-blue-100 dark:border-blue-800">
            <div className="text-5xl text-blue-400 mb-4">"</div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 max-w-3xl mx-auto leading-relaxed">
              {config.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{config.testimonial.role}</div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
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

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to see your personalized ROI projection?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Custom Analysis"}
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
          animation: fadeIn 0.5s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        
        /* Custom Range Slider Styles */
        input[type="range"] {
          -webkit-appearance: none;
          background: #e5e7eb;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #2563eb;
        }
        .dark input[type="range"] {
          background: #374151;
        }
        .dark input[type="range"]::-webkit-slider-thumb {
          background: #60a5fa;
        }
        
        /* Number Input Styles */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
};

export default ROICalculationsSection2;