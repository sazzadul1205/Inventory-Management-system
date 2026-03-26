// frontend/SuccessStories/ROICalculationsSection/ROICalculationsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlineCalculator,
  HiOutlinePieChart,
  HiOutlineChartLine
} from 'react-icons/hi';

const ROICalculationsSection2 = ({ config }) => {
  const [selectedScenario, setSelectedScenario] = useState('retail');
  const [investmentAmount, setInvestmentAmount] = useState(150000);
  const [timeHorizon, setTimeHorizon] = useState(3);
  const [roiData, setRoiData] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({});
  const chartRef = useRef(null);

  const scenarios = config?.scenarios || {
    retail: {
      name: "Retail",
      icon: "🏪",
      savingsRate: 0.35,
      paybackPeriod: 4,
      threeYearROI: 280,
      fiveYearROI: 450,
      description: "Inventory optimization and stockout reduction"
    },
    manufacturing: {
      name: "Manufacturing",
      icon: "🏭",
      savingsRate: 0.30,
      paybackPeriod: 6,
      threeYearROI: 240,
      fiveYearROI: 380,
      description: "Predictive maintenance and demand forecasting"
    },
    logistics: {
      name: "Logistics",
      icon: "🚚",
      savingsRate: 0.32,
      paybackPeriod: 5,
      threeYearROI: 260,
      fiveYearROI: 420,
      description: "Warehouse optimization and labor efficiency"
    },
    healthcare: {
      name: "Healthcare",
      icon: "🏥",
      savingsRate: 0.28,
      paybackPeriod: 5,
      threeYearROI: 220,
      fiveYearROI: 350,
      description: "Inventory accuracy and cold chain compliance"
    }
  };

  const calculateROI = () => {
    const scenario = scenarios[selectedScenario];
    const annualSavings = investmentAmount * scenario.savingsRate;
    const totalSavings3Year = annualSavings * timeHorizon;
    const netROI3Year = ((totalSavings3Year - investmentAmount) / investmentAmount) * 100;
    const paybackMonths = (investmentAmount / (annualSavings / 12)).toFixed(1);

    // Generate year-by-year data
    const yearlyData = [];
    for (let i = 1; i <= timeHorizon; i++) {
      yearlyData.push({
        year: i,
        savings: annualSavings * i,
        cumulativeROI: ((annualSavings * i - investmentAmount) / investmentAmount) * 100
      });
    }

    return {
      annualSavings,
      totalSavings3Year,
      netROI3Year,
      paybackMonths,
      yearlyData,
      monthlySavings: annualSavings / 12
    };
  };

  useEffect(() => {
    const data = calculateROI();
    setRoiData(data);
  }, [selectedScenario, investmentAmount, timeHorizon]);

  useEffect(() => {
    if (roiData) {
      const targets = {
        annualSavings: roiData.annualSavings,
        monthlySavings: roiData.monthlySavings,
        netROI: roiData.netROI3Year,
        payback: parseFloat(roiData.paybackMonths)
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
              [key]: key === 'netROI' ? Math.floor(current) + '%' :
                key === 'payback' ? current.toFixed(1) + ' mo' :
                  '$' + Math.floor(current / 1000) + 'K'
            }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({
              ...prev,
              [key]: key === 'netROI' ? Math.floor(current) + '%' :
                key === 'payback' ? current.toFixed(1) + ' mo' :
                  '$' + Math.floor(current / 1000) + 'K'
            }));
          }
        }, 30);
      });
    }
  }, [roiData]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const maxBarHeight = 200;
  const maxSavings = roiData?.yearlyData?.[roiData.yearlyData.length - 1]?.savings || 0;

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="ROI Projection Dashboard"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>

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

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Scenario Selector */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Industry Scenario</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(scenarios).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedScenario(key)}
                    className={`p-3 rounded-xl text-center transition-all ${selectedScenario === key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                  >
                    <div className="text-2xl mb-1">{scenarios[key].icon}</div>
                    <div className="text-sm font-medium">{scenarios[key].name}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">{scenarios[selectedScenario]?.description}</p>
            </div>

            {/* Investment Slider */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Initial Investment
              </label>
              <div className="relative mb-2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseInt(e.target.value) || 0)}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$50K</span>
                <span>$500K</span>
              </div>
            </div>

            {/* Time Horizon Slider */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Horizon: {timeHorizon} Years
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 Year</span>
                <span>5 Years</span>
              </div>
            </div>

            {/* Key Metrics */}
            {roiData && (
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-blue-200">Annual Savings</div>
                    <div className="text-2xl font-bold">{animatedValues.annualSavings || '$0K'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">Monthly Savings</div>
                    <div className="text-lg font-semibold">{animatedValues.monthlySavings || '$0K'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">Payback Period</div>
                    <div className="text-lg font-semibold">{animatedValues.payback || '0 mo'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">{timeHorizon}-Year ROI</div>
                    <div className="text-2xl font-bold">{animatedValues.netROI || '0%'}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Charts Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* ROI Summary Cards */}
            {roiData && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(roiData.totalSavings3Year)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Savings ({timeHorizon} Years)
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {roiData.netROI3Year.toFixed(0)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    ROI ({timeHorizon} Years)
                  </div>
                </div>
              </div>
            )}

            {/* Savings Projection Chart */}
            {roiData && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineChartLine className="w-5 h-5 text-blue-600" />
                  Cumulative Savings Projection
                </h3>
                <div className="relative h-64">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
                    {roiData.yearlyData.map((data, idx) => {
                      const height = (data.savings / maxSavings) * maxBarHeight;
                      return (
                        <div key={idx} className="flex flex-col items-center flex-1">
                          <div className="relative group">
                            <div
                              className="w-12 bg-blue-600 rounded-t-lg transition-all duration-700 hover:bg-blue-700"
                              style={{ height: `${height}px` }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {formatCurrency(data.savings)}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Year {data.year}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-500">
                  Cumulative savings over {timeHorizon} years
                </div>
              </div>
            )}

            {/* ROI Comparison Chart */}
            {roiData && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlinePieChart className="w-5 h-5 text-blue-600" />
                  ROI by Year
                </h3>
                <div className="space-y-3">
                  {roiData.yearlyData.map((data, idx) => {
                    const roiPercent = data.cumulativeROI;
                    const barColor = roiPercent >= 100 ? 'bg-green-500' : roiPercent >= 0 ? 'bg-blue-500' : 'bg-red-500';
                    const barWidth = Math.min(Math.abs(roiPercent) / 500 * 100, 100);

                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Year {data.year}</span>
                          <span className={`font-semibold ${roiPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {roiPercent >= 0 ? '+' : ''}{roiPercent.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`${barColor} rounded-full h-2 transition-all duration-1000`}
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

        {/* ROI Comparison Table */}
        {config?.showComparison && roiData && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {config?.comparisonTitle || "ROI Comparison by Investment Level"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Investment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Annual Savings</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Payback Period</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">3-Year ROI</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">5-Year ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {config?.investmentLevels?.map((level, idx) => {
                    const annualSavings = level.value * scenarios[selectedScenario]?.savingsRate;
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
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">
                          +{roi3Year.toFixed(0)}%
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">
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

        {/* Testimonial */}
        {config?.showTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
            <div className="text-4xl text-blue-400 mb-4">"</div>
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 max-w-3xl mx-auto">
              {config?.testimonial?.quote || "We achieved full ROI in just 4 months and have saved over $2.5M annually. The platform paid for itself within the first quarter."}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">
                {config?.testimonial?.author || "Sarah Johnson"}
              </div>
              <div className="text-sm text-gray-500">
                {config?.testimonial?.role || "Supply Chain Director, RetailCo"}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineCalculator className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to see your personalized ROI projection?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Custom Analysis"}
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

export default ROICalculationsSection2;