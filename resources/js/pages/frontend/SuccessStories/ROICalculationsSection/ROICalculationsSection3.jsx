// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection3.jsx

/**
 * Advanced ROI Calculator Component
 * A comprehensive multi-step ROI calculator featuring:
 * - 3-step wizard for business information, operations metrics, and results
 * - Dynamic ROI calculation based on industry multipliers
 * - Detailed savings breakdown with visual progress bars
 * - Save/email report functionality
 * - Animated loading state during calculation
 * - Investment summary and long-term projections
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineSave,
  HiOutlineMail,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const ROICalculationsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'retail',
    laborCostPerHour: 25,
    currentStockoutRate: 8,
    annualRevenue: 10000000,
    currentOrderAccuracy: 94,
    inventoryHoldingCost: 25,
    currentLaborCost: 2000000,
    expeditedShippingCost: 50000,
    currentInventoryValue: 5000000,
  });
  const [emailSent, setEmailSent] = useState(false);
  const [roiResults, setRoiResults] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  
  // ==================== REFS ====================
  const resultsRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const industries = useMemo(() => config?.industries || {}, [config]);

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
      'arrow-left': HiArrowLeft,
      'save': HiOutlineSave,
      'mail': HiOutlineMail,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
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
   * Format percentage for display
   * @param {number} value - Numeric value
   * @returns {string} Formatted percentage string
   */
  const formatPercentage = useCallback((value) => {
    return `${value.toFixed(0)}%`;
  }, []);

  /**
   * Handle input change for form fields
   * @param {string} field - Field name to update
   * @param {any} value - New value
   */
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  /**
   * Handle save report to localStorage
   */
  const handleSaveReport = useCallback(() => {
    const report = {
      ...formData,
      roiResults,
      date: new Date().toISOString(),
      id: Date.now(),
    };
    localStorage.setItem('roiReport', JSON.stringify(report));
    alert('Report saved successfully! You can access it later.');
  }, [formData, roiResults]);

  /**
   * Handle email report
   */
  const handleEmailReport = useCallback(() => {
    setShowEmailModal(true);
  }, []);

  /**
   * Send email with report
   */
  const sendEmailReport = useCallback(() => {
    if (!emailAddress) return;

    // Simulate API call
    setTimeout(() => {
      setEmailSent(true);
      setTimeout(() => {
        setShowEmailModal(false);
        setEmailSent(false);
        setEmailAddress('');
      }, 2000);
    }, 1000);
  }, [emailAddress]);

  /**
   * Reset to step 2 for editing
   */
  const handleEditMetrics = useCallback(() => {
    setActiveStep(2);
  }, []);

  // ==================== ROI CALCULATION EFFECT ====================
  useEffect(() => {
    if (activeStep !== 3) return;

    setIsCalculating(true);

    const timer = setTimeout(() => {
      const currentIndustry = industries[formData.industry];
      const industryMultiplier = currentIndustry?.multiplier || 1.0;

      // Calculate savings components based on industry benchmarks
      const inventoryReduction = formData.currentInventoryValue * (currentIndustry?.inventoryReduction || 0.3) * industryMultiplier;
      const holdingCostSavings = inventoryReduction * (formData.inventoryHoldingCost / 100);

      const laborSavings = formData.currentLaborCost * (currentIndustry?.laborSavings || 0.25) * industryMultiplier;

      const stockoutReduction = (formData.currentStockoutRate / 100) * formData.annualRevenue * (currentIndustry?.stockoutReduction || 0.6) * industryMultiplier;

      const accuracyImprovement = ((100 - formData.currentOrderAccuracy) / 100) *
        (formData.currentLaborCost * 0.15) * industryMultiplier;

      const expeditedSavings = formData.expeditedShippingCost * (currentIndustry?.expeditedReduction || 0.4) * industryMultiplier;

      const totalAnnualSavings = holdingCostSavings + laborSavings + stockoutReduction +
        accuracyImprovement + expeditedSavings;

      const implementationCost = formData.annualRevenue * (currentIndustry?.implementationPercent || 0.015);
      const paybackMonths = (implementationCost / (totalAnnualSavings / 12)).toFixed(1);
      const roiPercentage = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
      const threeYearROI = ((totalAnnualSavings * 3 - implementationCost) / implementationCost) * 100;
      const fiveYearROI = ((totalAnnualSavings * 5 - implementationCost) / implementationCost) * 100;

      setRoiResults({
        totalAnnualSavings,
        implementationCost,
        paybackMonths: parseFloat(paybackMonths),
        roiPercentage,
        threeYearROI,
        fiveYearROI,
        breakdown: {
          inventory: holdingCostSavings,
          labor: laborSavings,
          stockout: stockoutReduction,
          accuracy: accuracyImprovement,
          expedited: expeditedSavings,
        },
      });

      setIsCalculating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeStep, formData, industries]);

  // ==================== SCROLL TO RESULTS ====================
  useEffect(() => {
    if (activeStep === 3 && roiResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeStep, roiResults]);

  const steps = [
    { number: 1, label: 'Business Info', icon: 'building' },
    { number: 2, label: 'Operations Metrics', icon: 'chart' },
    { number: 3, label: 'Your ROI Results', icon: 'trending' },
  ];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Advanced ROI Calculator"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

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
            {config?.title?.suffix || 'in 3 Simple Steps'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Enter your business metrics to get a personalized ROI estimate based on industry benchmarks."}
          </p>
        </div>

        {/* ==================== PROGRESS STEPS ==================== */}
        <div className="flex justify-between items-center mb-12 max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${activeStep >= step.number
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {activeStep > step.number ? (
                    getIcon("check-circle", "w-5 h-5")
                  ) : (
                    step.number
                  )}
                </div>
                <div className="text-xs mt-2 text-gray-500 dark:text-gray-400 font-medium">
                  {step.label}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${activeStep > step.number ? 'bg-linear-to-r from-blue-600 to-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
              )}
            </div>
          ))}
        </div>

        {/* ==================== STEP 1: BUSINESS INFORMATION ==================== */}
        {activeStep === 1 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("building", "w-5 h-5 text-blue-600")}
              Tell us about your business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(industries).map(([key, value]) => (
                    <option key={key} value={key}>
                      {getIcon(value.icon, "w-4 h-4 inline mr-2")} {value.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formData.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Current Inventory Value */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Inventory Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formData.currentInventoryValue}
                    onChange={(e) => handleInputChange('currentInventoryValue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setActiveStep(2)}
                className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Continue
                {getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 2: OPERATIONS METRICS ==================== */}
        {activeStep === 2 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("chart", "w-5 h-5 text-blue-600")}
              Your Operations Metrics
            </h3>
            <div className="space-y-6">
              {/* Annual Labor Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Labor Cost (Warehouse/Operations)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    value={formData.currentLaborCost}
                    onChange={(e) => handleInputChange('currentLaborCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Stockout Rate & Order Accuracy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Stockout Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.currentStockoutRate}
                    onChange={(e) => handleInputChange('currentStockoutRate', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Order Accuracy (%)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.currentOrderAccuracy}
                    onChange={(e) => handleInputChange('currentOrderAccuracy', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Inventory Holding Cost & Expedited Shipping */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inventory Holding Cost (% of value)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="1"
                      value={formData.inventoryHoldingCost}
                      onChange={(e) => handleInputChange('inventoryHoldingCost', parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Expedited Shipping Cost
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                    <input
                      type="number"
                      value={formData.expeditedShippingCost}
                      onChange={(e) => handleInputChange('expeditedShippingCost', parseInt(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveStep(1)}
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
              >
                {getIcon("arrow-left", "w-4 h-4")}
                Back
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Calculate ROI
                {getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 3: ROI RESULTS ==================== */}
        {activeStep === 3 && (
          <div ref={resultsRef} className="space-y-8">
            {/* Loading State */}
            {isCalculating && (
              <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
                <p className="mt-4 text-gray-600 dark:text-gray-400">Calculating your ROI...</p>
              </div>
            )}

            {/* Results Display */}
            {!isCalculating && roiResults && (
              <div className="animate-fadeIn">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg">
                    <div className="flex justify-center mb-2">
                      {getIcon("dollar", "w-8 h-8")}
                    </div>
                    <div className="text-2xl font-bold">{formatCurrency(roiResults.totalAnnualSavings)}</div>
                    <div className="text-sm opacity-90">Annual Savings</div>
                  </div>
                  <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
                    <div className="flex justify-center mb-2">
                      {getIcon("trending", "w-8 h-8")}
                    </div>
                    <div className="text-2xl font-bold">{formatPercentage(roiResults.roiPercentage)}</div>
                    <div className="text-sm opacity-90">ROI Percentage</div>
                  </div>
                  <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl p-5 text-white shadow-lg">
                    <div className="flex justify-center mb-2">
                      {getIcon("clock", "w-8 h-8")}
                    </div>
                    <div className="text-2xl font-bold">{roiResults.paybackMonths} months</div>
                    <div className="text-sm opacity-90">Payback Period</div>
                  </div>
                  <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-2xl p-5 text-white shadow-lg">
                    <div className="flex justify-center mb-2">
                      {getIcon("chart", "w-8 h-8")}
                    </div>
                    <div className="text-2xl font-bold">{formatPercentage(roiResults.threeYearROI)}</div>
                    <div className="text-sm opacity-90">3-Year ROI</div>
                  </div>
                </div>

                {/* Savings Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    {getIcon("chart", "w-5 h-5 text-blue-600")}
                    Savings Breakdown
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(roiResults.breakdown).map(([key, value]) => {
                      const labels = {
                        inventory: 'Inventory Holding Cost Reduction',
                        labor: 'Labor Efficiency Savings',
                        stockout: 'Stockout Reduction Savings',
                        accuracy: 'Order Accuracy Improvement',
                        expedited: 'Expedited Shipping Savings',
                      };
                      const percentage = (value / roiResults.totalAnnualSavings) * 100;
                      return (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">{labels[key]}</span>
                            <span className="font-semibold text-blue-600 dark:text-blue-400">{formatCurrency(value)}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-full h-2 transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Investment Summary */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    {getIcon("dollar", "w-5 h-5 text-blue-600")}
                    Investment Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Estimated Implementation Cost</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {formatCurrency(roiResults.implementationCost)}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                      <div className="text-sm text-gray-500 dark:text-gray-400">5-Year Projected ROI</div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">
                        {formatPercentage(roiResults.fiveYearROI)}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Savings</div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {formatCurrency(roiResults.totalAnnualSavings / 12)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleEditMetrics}
                      className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
                    >
                      {getIcon("arrow-left", "w-4 h-4")}
                      Edit Metrics
                    </button>
                    <button
                      onClick={handleSaveReport}
                      className="px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
                    >
                      {getIcon("save", "w-4 h-4")}
                      Save Report
                    </button>
                    <button
                      onClick={handleEmailReport}
                      className="px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
                    >
                      {getIcon("mail", "w-4 h-4")}
                      Email Report
                    </button>
                  </div>
                  <Link
                    href={config?.ctaLink || "/demo"}
                    className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Schedule Consultation
                    {getIcon("arrow-right", "w-4 h-4")}
                  </Link>
                </div>

                {/* Disclaimer */}
                <div className="text-center text-xs text-gray-400 dark:text-gray-500">
                  {config?.disclaimer || "This is an estimate based on industry averages. Actual results may vary. Contact us for a personalized assessment."}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ==================== EMAIL MODAL ==================== */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Email Your Report</h3>
            {!emailSent ? (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Enter your email address to receive a detailed PDF of your ROI analysis.</p>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendEmailReport}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Report
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-green-500 text-5xl mb-3">✓</div>
                <p className="text-gray-900 dark:text-white font-semibold">Report Sent!</p>
                <p className="text-gray-500 text-sm mt-1">Check your inbox for the PDF report.</p>
              </div>
            )}
          </div>
        </div>
      )}

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
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
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

export default ROICalculationsSection3;