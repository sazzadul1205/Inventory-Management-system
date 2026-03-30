// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo } from 'react';

// Icons
import {
  HiOutlineCurrencyDollar,
  HiArrowRight,
} from 'react-icons/hi';

const SuccessMetricsSection1 = ({ config }) => {
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = useMemo(() => config?.metrics || [], [config]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      metrics.forEach(metric => {
        const targetValue = parseFloat(metric.value);
        animated[metric.id] = targetValue;
      });
      setAnimatedMetrics(animated);
    }, 500);
    return () => clearTimeout(timer);
  }, [metrics]);

  const formatValue = (value, suffix) => {
    if (suffix === '%') return `${Math.floor(value)}${suffix}`;
    if (suffix === 'x') return `${value.toFixed(1)}${suffix}`;
    return `${value.toLocaleString()}${suffix}`;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Success Metrics Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

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

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{metric.icon}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trend === 'up' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  metric.trend === 'down' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                  {metric.trend === 'up' && '↑'}
                  {metric.trend === 'down' && '↓'}
                  {metric.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {animatedMetrics[metric.id] ? formatValue(animatedMetrics[metric.id], metric.suffix) : metric.value}
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial/Success Story */}
        {config?.testimonial && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="text-4xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{config.testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
                  <div className="text-sm text-gray-500">{config.testimonial.role}, {config.testimonial.company}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{config.testimonial.result}</div>
                <div className="text-sm text-gray-600">achieved in {config.testimonial.timeline}</div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Metrics Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['overview', 'operational', 'financial', 'customer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {tab === 'overview' && '📊 Overview'}
                {tab === 'operational' && '⚙️ Operational'}
                {tab === 'financial' && '💰 Financial'}
                {tab === 'customer' && '👥 Customer'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config?.detailedMetrics?.[activeTab]?.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{metric.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{metric.title}</h4>
                      <span className="text-lg font-bold text-green-600">{metric.value}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric.description}</p>
                    <div className="text-xs text-gray-500">Industry average: {metric.industryAvg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        {config?.showRoiCalculator && (
          <div className="mb-12 bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <HiOutlineCurrencyDollar className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Calculate Your ROI</h3>
                <p className="text-green-100 mb-4">
                  See how much you could save with our platform. Get a personalized estimate in minutes.
                </p>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Calculate Now
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{config?.avgSavings || "25-35%"}</div>
                  <div className="text-sm">Cost Reduction</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{config?.avgPayback || "3-6"}</div>
                  <div className="text-sm">Months Payback</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customer Success Stories */}
        {config?.showStories && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customer Success Stories</h3>
              <p className="text-gray-600 dark:text-gray-400">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.successStories?.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="p-6">
                    <div className="text-3xl mb-3">{story.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{story.company}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{story.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-green-600">{story.result}</div>
                      <Link href={story.link} className="text-sm text-green-600 hover:underline">Read story →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to achieve these results?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Success Story"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default SuccessMetricsSection1;