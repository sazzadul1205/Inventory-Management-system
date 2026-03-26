// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlineCalculator,
} from 'react-icons/hi';

const ROICalculationsSection1 = ({ config }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [formValues, setFormValues] = useState({
    annualRevenue: 10000000,
    currentInventoryValue: 5000000,
    currentLaborCost: 2000000,
    currentStockoutRate: 8,
    currentOrderAccuracy: 94
  });
  const [roiResults, setRoiResults] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({});
  const resultsRef = useRef(null);

  const industries = config?.industries || [];
  const currentIndustry = industries[activeIndustry];

  // Calculate ROI based on form inputs
  const calculateROI = () => {
    const inventoryReduction = formValues.currentInventoryValue * (currentIndustry?.inventoryReduction || 0.3);
    const laborSavings = formValues.currentLaborCost * (currentIndustry?.laborSavings || 0.25);
    const stockoutReduction = formValues.currentStockoutRate - (formValues.currentStockoutRate * (currentIndustry?.stockoutReduction || 0.9));
    const accuracyImprovement = (formValues.currentOrderAccuracy + (100 - formValues.currentOrderAccuracy) * (currentIndustry?.accuracyImprovement || 0.8));

    const annualSavings = inventoryReduction + laborSavings;
    const implementationCost = currentIndustry?.implementationCost || 150000;
    const paybackMonths = (implementationCost / (annualSavings / 12)).toFixed(1);
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;

    return {
      annualSavings,
      inventoryReduction,
      laborSavings,
      stockoutReduction: stockoutReduction.toFixed(1),
      accuracyImprovement: accuracyImprovement.toFixed(1),
      paybackMonths,
      roiPercentage
    };
  };

  useEffect(() => {
    const results = calculateROI();
    setRoiResults(results);
  }, [formValues, activeIndustry]);

  useEffect(() => {
    if (roiResults) {
      const targets = {
        annualSavings: roiResults.annualSavings,
        roiPercentage: roiResults.roiPercentage,
        paybackMonths: parseFloat(roiResults.paybackMonths)
      };

      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const increment = target / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setAnimatedValues(prev => ({
              ...prev,
              [key]: key === 'paybackMonths' ? target.toFixed(1) :
                key === 'roiPercentage' ? Math.floor(current) + '%' :
                  '$' + Math.floor(current / 1000) + 'K'
            }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({
              ...prev,
              [key]: key === 'paybackMonths' ? current.toFixed(1) :
                key === 'roiPercentage' ? Math.floor(current) + '%' :
                  '$' + Math.floor(current / 1000) + 'K'
            }));
          }
        }, 30);
      });
    }
  }, [roiResults]);

  const handleInputChange = (field, value) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="ROI Calculator"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeIndustry === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {industry.icon} {industry.name}
            </button>
          ))}
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiOutlineCalculator className="w-5 h-5 text-blue-600" />
              Your Business Metrics
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formValues.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Inventory Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formValues.currentInventoryValue}
                    onChange={(e) => handleInputChange('currentInventoryValue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Labor Cost (Warehouse/Operations)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formValues.currentLaborCost}
                    onChange={(e) => handleInputChange('currentLaborCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Stockout Rate (%)
                  </label>
                  <input
                    type="number"
                    value={formValues.currentStockoutRate}
                    onChange={(e) => handleInputChange('currentStockoutRate', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="0.5"
                    value={formValues.currentStockoutRate}
                    onChange={(e) => handleInputChange('currentStockoutRate', parseFloat(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Order Accuracy (%)
                  </label>
                  <input
                    type="number"
                    value={formValues.currentOrderAccuracy}
                    onChange={(e) => handleInputChange('currentOrderAccuracy', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="range"
                    min="80"
                    max="100"
                    step="0.5"
                    value={formValues.currentOrderAccuracy}
                    onChange={(e) => handleInputChange('currentOrderAccuracy', parseFloat(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white" ref={resultsRef}>
            <h3 className="text-xl font-bold mb-6">Your Estimated ROI</h3>

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {animatedValues.annualSavings || '$0K'}
                </div>
                <div className="text-blue-200">Annual Savings</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">{animatedValues.roiPercentage || '0%'}</div>
                  <div className="text-xs text-blue-200">ROI Percentage</div>
                </div>
                <div className="text-center bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">{animatedValues.paybackMonths || '0'} mo</div>
                  <div className="text-xs text-blue-200">Payback Period</div>
                </div>
              </div>

              <div className="border-t border-blue-400 pt-4">
                <h4 className="font-semibold mb-3">Breakdown by Category</h4>
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
                    <span className="font-semibold">{roiResults?.stockoutReduction}% → {currentIndustry?.stockoutTarget || 1}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Order Accuracy</span>
                    <span className="font-semibold">{formValues.currentOrderAccuracy}% → {roiResults?.accuracyImprovement}%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={config?.ctaLink || "/demo"}
                  className="block text-center px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Get Your Custom ROI Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Benchmarks */}
        {config?.showBenchmarks && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {config?.benchmarksTitle || "Industry Benchmarks"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{industry.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Inventory Reduction</span>
                      <span className="font-semibold text-green-600">{(industry.inventoryReduction * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Labor Savings</span>
                      <span className="font-semibold text-green-600">{(industry.laborSavings * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Payback</span>
                      <span className="font-semibold text-green-600">{industry.paybackMonths} months</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Success Stories */}
        {config?.showSuccessStories && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {config?.successStoriesTitle || "Real Results from Real Clients"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config?.successStories?.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{story.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                      <div className="text-sm text-gray-500">{story.industry}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <div className="text-gray-500">Before</div>
                      <div className="font-semibold text-red-600">{story.before}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">After</div>
                      <div className="font-semibold text-green-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{story.savings} annual savings</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineCalculator className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to see your actual ROI?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Consultation"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
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
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .dark input[type="range"] {
          background: #374151;
        }
        .dark input[type="range"]::-webkit-slider-thumb {
          background: #60a5fa;
        }
      `}</style>
    </section>
  );
};

export default ROICalculationsSection1;