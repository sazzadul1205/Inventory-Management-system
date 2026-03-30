// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineSave,
  HiOutlineMail
} from 'react-icons/hi';

const ROICalculationsSection3 = ({ config }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'retail',
    annualRevenue: 10000000,
    currentInventoryValue: 5000000,
    currentLaborCost: 2000000,
    currentStockoutRate: 8,
    currentOrderAccuracy: 94,
    inventoryHoldingCost: 25,
    laborCostPerHour: 25,
    expeditedShippingCost: 50000
  });
  const [roiResults, setRoiResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [savedReport, setSavedReport] = useState(null);
  const resultsRef = useRef(null);

  const industries = config?.industries || {
    retail: { name: "Retail", icon: "🏪", multiplier: 1.0 },
    manufacturing: { name: "Manufacturing", icon: "🏭", multiplier: 0.95 },
    logistics: { name: "Logistics", icon: "🚚", multiplier: 1.05 },
    healthcare: { name: "Healthcare", icon: "🏥", multiplier: 0.9 },
    ecommerce: { name: "E-commerce", icon: "🛍️", multiplier: 1.1 },
    food: { name: "Food & Beverage", icon: "🍽️", multiplier: 0.92 }
  };

  const calculateROI = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const industryMultiplier = industries[formData.industry]?.multiplier || 1.0;

      // Calculate savings components
      const inventoryReduction = formData.currentInventoryValue * 0.3 * industryMultiplier;
      const holdingCostSavings = inventoryReduction * (formData.inventoryHoldingCost / 100);

      const laborSavings = formData.currentLaborCost * 0.25 * industryMultiplier;

      const stockoutReduction = (formData.currentStockoutRate / 100) * formData.annualRevenue * 0.6 * industryMultiplier;

      const accuracyImprovement = ((100 - formData.currentOrderAccuracy) / 100) *
        (formData.currentLaborCost * 0.15) * industryMultiplier;

      const expeditedSavings = formData.expeditedShippingCost * 0.4 * industryMultiplier;

      const totalAnnualSavings = holdingCostSavings + laborSavings + stockoutReduction +
        accuracyImprovement + expeditedSavings;

      const implementationCost = formData.annualRevenue * 0.015;
      const paybackMonths = (implementationCost / (totalAnnualSavings / 12)).toFixed(1);
      const roiPercentage = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
      const threeYearROI = ((totalAnnualSavings * 3 - implementationCost) / implementationCost) * 100;
      const fiveYearROI = ((totalAnnualSavings * 5 - implementationCost) / implementationCost) * 100;

      setRoiResults({
        totalAnnualSavings,
        implementationCost,
        paybackMonths,
        roiPercentage,
        threeYearROI,
        fiveYearROI,
        breakdown: {
          inventory: holdingCostSavings,
          labor: laborSavings,
          stockout: stockoutReduction,
          accuracy: accuracyImprovement,
          expedited: expeditedSavings
        }
      });

      setIsCalculating(false);
    }, 800);
  };

  useEffect(() => {
    calculateROI();
  }, [formData.industry, formData.annualRevenue, formData.currentInventoryValue,
  formData.currentLaborCost, formData.currentStockoutRate, formData.currentOrderAccuracy]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveReport = () => {
    const report = {
      ...formData,
      roiResults,
      date: new Date().toISOString(),
      id: Date.now()
    };
    setSavedReport(report);
    localStorage.setItem('roiReport', JSON.stringify(report));
  };

  const handleEmailReport = () => {
    // In production, this would trigger an email API call
    alert('Report would be emailed to you. In production, this would send a detailed PDF.');
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(0)  }%`;
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Advanced ROI Calculator"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-3xl mx-auto">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${activeStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}
                >
                  {activeStep > step ? <HiOutlineCheckCircle className="w-5 h-5" /> : step}
                </div>
                <div className="text-xs mt-2 text-gray-500">
                  {step === 1 && 'Business Info'}
                  {step === 2 && 'Operations Metrics'}
                  {step === 3 && 'Your ROI Results'}
                </div>
              </div>
              {step < 3 && (
                <div className={`flex-1 h-0.5 mx-2 ${activeStep > step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Business Information */}
        {activeStep === 1 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Tell us about your business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {Object.entries(industries).map(([key, value]) => (
                    <option key={key} value={key}>{value.icon} {value.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Inventory Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.currentInventoryValue}
                    onChange={(e) => handleInputChange('currentInventoryValue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setActiveStep(2)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Operations Metrics */}
        {activeStep === 2 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Your Operations Metrics
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Labor Cost (Warehouse/Operations)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.currentLaborCost}
                    onChange={(e) => handleInputChange('currentLaborCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inventory Holding Cost (% of value)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={formData.inventoryHoldingCost}
                    onChange={(e) => handleInputChange('inventoryHoldingCost', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Expedited Shipping Cost
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={formData.expeditedShippingCost}
                      onChange={(e) => handleInputChange('expeditedShippingCost', parseInt(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveStep(1)}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Calculate ROI
              </button>
            </div>
          </div>
        )}

        {/* Step 3: ROI Results */}
        {activeStep === 3 && roiResults && (
          <div className="space-y-8" ref={resultsRef}>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold">{formatCurrency(roiResults.totalAnnualSavings)}</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-2xl font-bold">{formatPercentage(roiResults.roiPercentage)}</div>
                <div className="text-sm opacity-90">ROI Percentage</div>
              </div>
              <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-2xl font-bold">{roiResults.paybackMonths} months</div>
                <div className="text-sm opacity-90">Payback Period</div>
              </div>
              <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold">{formatPercentage(roiResults.threeYearROI)}</div>
                <div className="text-sm opacity-90">3-Year ROI</div>
              </div>
            </div>

            {/* Savings Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Savings Breakdown
              </h3>
              <div className="space-y-3">
                {Object.entries(roiResults.breakdown).map(([key, value]) => {
                  const labels = {
                    inventory: 'Inventory Holding Cost Reduction',
                    labor: 'Labor Efficiency Savings',
                    stockout: 'Stockout Reduction Savings',
                    accuracy: 'Order Accuracy Improvement',
                    expedited: 'Expedited Shipping Savings'
                  };
                  const percentage = (value / roiResults.totalAnnualSavings) * 100;
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{labels[key]}</span>
                        <span className="font-semibold text-blue-600">{formatCurrency(value)}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2 transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Investment Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Estimated Implementation Cost</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(roiResults.implementationCost)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">5-Year Projected ROI</div>
                  <div className="text-xl font-bold text-green-600">
                    {formatPercentage(roiResults.fiveYearROI)}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveStep(2)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Edit Metrics
                </button>
                <button
                  onClick={handleSaveReport}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                >
                  <HiOutlineSave className="w-4 h-4" />
                  Save Report
                </button>
                <button
                  onClick={handleEmailReport}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                >
                  <HiOutlineMail className="w-4 h-4" />
                  Email Report
                </button>
              </div>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Schedule Consultation
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-xs text-gray-400">
              {config?.disclaimer || "This is an estimate based on industry averages. Actual results may vary. Contact us for a personalized assessment."}
            </div>
          </div>
        )}

        {/* Loading State */}
        {activeStep === 3 && isCalculating && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
            <p className="mt-4 text-gray-600">Calculating your ROI...</p>
          </div>
        )}
      </div>

      {/* Required CSS */}
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
      `}</style>
    </section>
  );
};

export default ROICalculationsSection3;