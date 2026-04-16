// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection1.jsx

/**
 * ROI Calculator Section Component
 * An interactive ROI calculator that helps prospects estimate their potential savings
 * Features:
 * - Industry-specific calculator presets
 * - Interactive sliders for business metrics
 * - Animated ROI results
 * - Industry benchmarks display
 * - Real client success stories
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
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
  HiOutlineChip,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const ROICalculationsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [formValues, setFormValues] = useState({
    currentStockoutRate: 8,
    annualRevenue: 10000000,
    currentOrderAccuracy: 94,
    currentLaborCost: 2000000,
    currentInventoryValue: 5000000,
  });
  const [roiResults, setRoiResults] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [activeIndustry, setActiveIndustry] = useState(config?.initialIndustry || 0);

  // ==================== REFS ====================
  const resultsRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const industries = useMemo(() => config?.industries || [], [config]);
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
      'chip': HiOutlineChip,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'bulb': HiOutlineLightBulb,
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
   * Format large numbers with K/M suffix
   * @param {number} value - Numeric value
   * @returns {string} Formatted value with suffix
   */
  const formatLargeNumber = useCallback((value) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  }, []);

  /**
   * Handle input change from slider or number input
   * @param {string} field - Field name to update
   * @param {number} value - New value
   */
  const handleInputChange = useCallback((field, value) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  }, []);

  // ==================== ROI CALCULATION EFFECT ====================
  useEffect(() => {
    if (!currentIndustry) return;

    // Calculate savings based on industry benchmarks
    const inventoryReduction = formValues.currentInventoryValue * (currentIndustry.inventoryReduction || 0.3);
    const laborSavings = formValues.currentLaborCost * (currentIndustry.laborSavings || 0.25);
    const stockoutReductionSavings = (formValues.currentStockoutRate / 100) * formValues.annualRevenue * (currentIndustry.stockoutReduction || 0.9);
    const accuracySavings = ((100 - formValues.currentOrderAccuracy) / 100) * formValues.annualRevenue * 0.05 * (currentIndustry.accuracyImprovement || 0.8);

    const annualSavings = inventoryReduction + laborSavings + stockoutReductionSavings + accuracySavings;
    const implementationCost = currentIndustry.implementationCost || 150000;
    const paybackMonths = (implementationCost / (annualSavings / 12)).toFixed(1);
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;

    // Calculate improved metrics
    const improvedStockoutRate = formValues.currentStockoutRate * (1 - (currentIndustry.stockoutReduction || 0.9));
    const improvedOrderAccuracy = formValues.currentOrderAccuracy + (100 - formValues.currentOrderAccuracy) * (currentIndustry.accuracyImprovement || 0.8);

    setRoiResults({
      annualSavings,
      inventoryReduction,
      laborSavings,
      stockoutReductionSavings,
      accuracySavings,
      improvedStockoutRate: improvedStockoutRate.toFixed(1),
      improvedOrderAccuracy: improvedOrderAccuracy.toFixed(1),
      paybackMonths,
      roiPercentage,
      implementationCost,
    });
  }, [currentIndustry, formValues]);

  // ==================== INTERSECTION OBSERVER FOR ANIMATION ====================
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

    if (resultsRef.current) {
      observer.observe(resultsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE ROI RESULTS ====================
  useEffect(() => {
    if (!isVisible || !roiResults) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      annualSavings: roiResults.annualSavings,
      roiPercentage: roiResults.roiPercentage,
      paybackMonths: parseFloat(roiResults.paybackMonths),
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

        if (key === 'annualSavings') {
          newValues[key] = formatLargeNumber(currentValue);
        } else if (key === 'roiPercentage') {
          newValues[key] = `${Math.floor(currentValue)}%`;
        } else if (key === 'paybackMonths') {
          newValues[key] = currentValue.toFixed(1);
        }
      });

      setAnimatedValues(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, roiResults, formatLargeNumber]);

  // Return early if no industries
  if (!currentIndustry) return null;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="ROI Calculator"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="ROI calculator badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "ROI Calculator"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Calculate Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'ROI'}
            </span>{' '}
            {config?.title?.suffix || 'Potential'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See how much you could save with our intelligent inventory optimization platform. Adjust the sliders to match your business metrics."}
          </p>
        </div>

        {/* ==================== INDUSTRY SELECTOR TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeIndustry === index
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${industry.name} calculator`}
            >
              {getIcon(industry.icon, "w-4 h-4")}
              {industry.name}
            </button>
          ))}
        </div>

        {/* ==================== CALCULATOR GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Panel - Input Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              {getIcon("calculator", "w-6 h-6 text-blue-600")}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Your Business Metrics
              </h3>
            </div>

            <div className="space-y-6">
              {/* Annual Revenue Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formValues.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={formValues.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                  className="w-full mt-2"
                  aria-label="Annual revenue slider"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>$1M</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Current Inventory Value Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Inventory Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formValues.currentInventoryValue}
                    onChange={(e) => handleInputChange('currentInventoryValue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range"
                  min="500000"
                  max="20000000"
                  step="500000"
                  value={formValues.currentInventoryValue}
                  onChange={(e) => handleInputChange('currentInventoryValue', parseInt(e.target.value))}
                  className="w-full mt-2"
                  aria-label="Current inventory value slider"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>$500K</span>
                  <span>$20M</span>
                </div>
              </div>

              {/* Annual Labor Cost Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Labor Cost (Warehouse/Operations)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formValues.currentLaborCost}
                    onChange={(e) => handleInputChange('currentLaborCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="range"
                  min="250000"
                  max="5000000"
                  step="250000"
                  value={formValues.currentLaborCost}
                  onChange={(e) => handleInputChange('currentLaborCost', parseInt(e.target.value))}
                  className="w-full mt-2"
                  aria-label="Annual labor cost slider"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>$250K</span>
                  <span>$5M</span>
                </div>
              </div>

              {/* Two-column sliders for Stockout Rate and Order Accuracy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stockout Rate Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Stockout Rate (%)
                  </label>
                  <input
                    type="number"
                    value={formValues.currentStockoutRate}
                    onChange={(e) => handleInputChange('currentStockoutRate', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="0.5"
                    value={formValues.currentStockoutRate}
                    onChange={(e) => handleInputChange('currentStockoutRate', parseFloat(e.target.value))}
                    className="w-full mt-2"
                    aria-label="Stockout rate slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Order Accuracy Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Order Accuracy (%)
                  </label>
                  <input
                    type="number"
                    value={formValues.currentOrderAccuracy}
                    onChange={(e) => handleInputChange('currentOrderAccuracy', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="range"
                    min="80"
                    max="100"
                    step="0.5"
                    value={formValues.currentOrderAccuracy}
                    onChange={(e) => handleInputChange('currentOrderAccuracy', parseFloat(e.target.value))}
                    className="w-full mt-2"
                    aria-label="Order accuracy slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>80%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div
            ref={resultsRef}
            className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 md:p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              {getIcon("trending", "w-5 h-5")}
              Your Estimated ROI
            </h3>

            <div className="space-y-6">
              {/* Main Annual Savings Display */}
              <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {animatedValues.annualSavings || formatLargeNumber(roiResults?.annualSavings || 0)}
                </div>
                <div className="text-blue-200 text-sm">Projected Annual Savings</div>
              </div>

              {/* ROI and Payback Period */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold">
                    {animatedValues.roiPercentage || `${Math.floor(roiResults?.roiPercentage || 0)}%`}
                  </div>
                  <div className="text-xs text-blue-200 mt-1">ROI Percentage</div>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold">
                    {animatedValues.paybackMonths || roiResults?.paybackMonths || '0'} mo
                  </div>
                  <div className="text-xs text-blue-200 mt-1">Payback Period</div>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="border-t border-blue-400 pt-4">
                <h4 className="font-semibold mb-3 text-sm">Breakdown by Category</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Inventory Reduction</span>
                    <span className="font-semibold">{formatCurrency(roiResults?.inventoryReduction || 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Labor Efficiency</span>
                    <span className="font-semibold">{formatCurrency(roiResults?.laborSavings || 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Stockout Reduction</span>
                    <span className="font-semibold">{formatCurrency(roiResults?.stockoutReductionSavings || 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Improvement</span>
                    <span className="font-semibold">{formatCurrency(roiResults?.accuracySavings || 0)}</span>
                  </div>
                </div>
              </div>

              {/* Improved Metrics Preview */}
              <div className="border-t border-blue-400 pt-4">
                <h4 className="font-semibold mb-3 text-sm">Expected Improvements</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xs text-blue-200">Stockout Rate</div>
                    <div className="text-sm font-semibold">
                      {formValues.currentStockoutRate}% → {roiResults?.improvedStockoutRate || 0}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-blue-200">Order Accuracy</div>
                    <div className="text-sm font-semibold">
                      {formValues.currentOrderAccuracy}% → {roiResults?.improvedOrderAccuracy || 0}%
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={config?.ctaLink || "/demo"}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Custom ROI Analysis
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
                <p className="text-xs text-blue-200 text-center mt-3">
                  *Based on {currentIndustry.name} industry benchmarks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== INDUSTRY BENCHMARKS ==================== */}
        {config?.showBenchmarks && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              {getIcon("chart", "w-5 h-5 text-blue-600")}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {config?.benchmarksTitle || "Industry Benchmarks"}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {getIcon(industry.icon, "w-8 h-8")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">{industry.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Inventory Reduction</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{(industry.inventoryReduction * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Labor Savings</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{(industry.laborSavings * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Stockout Reduction</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{(industry.stockoutReduction * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Avg. Payback</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{industry.paybackMonths} months</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CLIENT SUCCESS STORIES ==================== */}
        {config?.showSuccessStories && config?.successStories?.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              {getIcon("star", "w-5 h-5 text-yellow-500")}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {config?.successStoriesTitle || "Real Results from Real Clients"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.successStories.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      {getIcon(story.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{story.industry}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Before</div>
                      <div className="font-semibold text-red-600 dark:text-red-400 text-sm">{story.before}</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-xs text-gray-500 dark:text-gray-400">After</div>
                      <div className="font-semibold text-green-600 dark:text-green-400 text-sm">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    {getIcon("dollar", "w-3 h-3")}
                    <span>{story.savings} annual savings</span>
                  </div>
                </div>
              ))}
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
                {config?.ctaText || "Ready to see your actual ROI?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Consultation"}
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
        
        /* Number Input Spinner Hide */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
};

export default ROICalculationsSection1;