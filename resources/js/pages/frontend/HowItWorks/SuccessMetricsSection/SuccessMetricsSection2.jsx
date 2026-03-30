// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiArrowRight,
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlineRefresh
} from 'react-icons/hi';

const SuccessMetricsSection2 = ({ config }) => {
  const [selectedMetric, setSelectedMetric] = useState('inventory');
  const [timeRange, setTimeRange] = useState('6months');
  const [animatedValues, setAnimatedValues] = useState({});

  const metrics = config?.metrics || [];
  const chartData = config?.chartData || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      metrics.forEach(metric => {
        animated[metric.id] = parseFloat(metric.current);
      });
      setAnimatedValues(animated);
    }, 300);
    return () => clearTimeout(timer);
  }, [metrics]);

  const getChartData = () => {
    return chartData[selectedMetric] || chartData.default || [];
  };

  const formatValue = (value) => {
    if (typeof value === 'number') {
      if (value > 1000000) return `${(value / 1000000).toFixed(1)}M`;
      if (value > 1000) return `${(value / 1000).toFixed(0)}K`;
      return value;
    }
    return value;
  };

  const maxValue = Math.max(...(getChartData().map(d => d.value) || [0]));

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Success Metrics Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
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

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg shadow p-1">
            {['3months', '6months', '1year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-sm rounded-md transition-all ${timeRange === range
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {range === '3months' ? '3 Months' : range === '6months' ? '6 Months' : '1 Year'}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${selectedMetric === metric.id ? 'ring-2 ring-green-500' : ''
                }`}
              onClick={() => setSelectedMetric(metric.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-xl">{metric.icon}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                  {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {animatedValues[metric.id] ?
                  (metric.suffix === '%' ? `${Math.floor(animatedValues[metric.id])}%` :
                    metric.suffix === 'x' ? `${animatedValues[metric.id].toFixed(1)}x` :
                      formatValue(animatedValues[metric.id])) : metric.current}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              <div className="text-xs text-gray-500 mt-2">vs {metric.previous}</div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {metrics.find(m => m.id === selectedMetric)?.label || 'Performance Trend'}
              </h3>
              <p className="text-sm text-gray-500">Last {timeRange === '3months' ? '90' : timeRange === '6months' ? '180' : '365'} days</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <HiOutlineRefresh className="w-5 h-5" />
            </button>
          </div>

          {/* Chart Visualization */}
          <div className="relative h-64 mb-4">
            <div className="absolute inset-0 flex items-end gap-2">
              {getChartData().map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-linear-to-t from-green-500 to-emerald-500 rounded-t-lg transition-all duration-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer"
                    style={{
                      height: `${(item.value / maxValue) * 200}px`,
                      transition: 'height 0.5s ease-out'
                    }}
                  >
                    <div className="opacity-0 hover:opacity-100 absolute -mt-8 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {item.value}{item.suffix || ''}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded" />
              <span className="text-xs text-gray-600">Current Period</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded" />
              <span className="text-xs text-gray-600">Previous Period</span>
            </div>
          </div>
        </div>

        {/* Benchmark Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineChartBar className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-gray-900 dark:text-white">Industry Benchmark</h3>
            </div>
            <div className="space-y-4">
              {config?.benchmarks?.map((benchmark, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">{benchmark.metric}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {benchmark.yourScore} vs {benchmark.industryAvg}
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-green-500 rounded-full"
                      style={{ width: `${(benchmark.yourScore / benchmark.industryAvg) * 100}%` }}
                     />
                    <div
                      className="absolute h-full bg-gray-400 rounded-full opacity-50"
                      style={{ width: `${(benchmark.industryAvg / benchmark.industryAvg) * 100}%` }}
                     />
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-green-600">Your Score</span>
                    <span className="text-gray-500">Industry Average</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Projection */}
          <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineCurrencyDollar className="w-5 h-5" />
              <h3 className="font-bold">ROI Projection</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">${config?.roiProjection?.year1 || "125K"}</div>
                <div className="text-sm text-green-200">Year 1 Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">${config?.roiProjection?.year3 || "450K"}</div>
                <div className="text-sm text-green-200">Year 3 Savings</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Payback Period</span>
                <span className="font-semibold">{config?.roiProjection?.payback || "4.2"} months</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${(4.2 / 12) * 100}%` }}
                 />
              </div>
            </div>
            <Link
              href={config?.roiLink || "/roi-calculator"}
              className="block text-center py-2 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Calculate Your ROI →
            </Link>
          </div>
        </div>

        {/* Success Timeline */}
        {config?.showTimeline && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <HiOutlineCalendar className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-gray-900 dark:text-white">Success Timeline</h3>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500 to-emerald-500" />
              {config?.timeline?.map((item, index) => (
                <div key={index} className="relative flex gap-4 mb-6 last:mb-0">
                  <div className="shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-green-600">{index + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600">{item.month}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    <div className="text-sm font-semibold text-green-600 mt-1">{item.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Success Grid */}
        {config?.showCustomers && (
          <div className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Trusted by Industry Leaders</h3>
              <p className="text-gray-600 dark:text-gray-400">Join 10,000+ businesses achieving remarkable results</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {config?.customerLogos?.map((customer, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-md transition-all">
                  <div className="text-3xl mb-2">{customer.logo}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{customer.name}</div>
                  <div className="text-xs text-green-600">{customer.result}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download Report CTA */}
        {config?.showDownload && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <HiOutlineDownload className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Want the full picture?</span>
            </div>
            <Link
              href={config?.reportLink || "/reports/success-metrics"}
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
            >
              Download Complete Success Metrics Report
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to see these results for your business?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Your Free Assessment"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
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
          animation: fadeIn 0.3s ease-out;
        }
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