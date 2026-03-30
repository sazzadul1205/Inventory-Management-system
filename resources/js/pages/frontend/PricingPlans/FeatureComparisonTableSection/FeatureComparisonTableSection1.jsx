// frontend/PricingPlans/FeatureComparisonTableSection/FeatureComparisonTableSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineChartSquareBar,
} from 'react-icons/hi';

const FeatureComparisonTableSection1 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  const plans = config?.plans || [];
  const categories = config?.categories || [];
  const allFeatures = config?.features || [];

  const visibleFeatures = showAllFeatures ? allFeatures : allFeatures.slice(0, 8);

  const getPlanColor = (planId) => {
    const colors = {
      starter: 'bg-gray-50 dark:bg-gray-800',
      professional: 'bg-blue-50 dark:bg-blue-900/20',
      business: 'bg-purple-50 dark:bg-purple-900/20',
      enterprise: 'bg-green-50 dark:bg-green-900/20'
    };
    return colors[planId] || '';
  };

  const getPopularBadge = (plan) => {
    if (plan.popular) {
      return (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
          Most Popular
        </span>
      );
    }
    return null;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Feature Comparison Table"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
          >
            All Features
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-700">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} className={`px-6 py-5 text-center text-sm font-semibold ${getPlanColor(plan.id)}`}>
                    <div className="text-xl mb-1">{plan.icon}</div>
                    <div>{plan.name}</div>
                    <div className="text-lg font-bold mt-1">${plan.price}/mo</div>
                    {getPopularBadge(plan)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {visibleFeatures.map((feature, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{feature.icon}</span>
                      <span>{feature.name}</span>
                      {hoveredRow === idx && feature.tooltip && (
                        <div className="absolute left-full ml-2 z-10 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                          {feature.tooltip}
                        </div>
                      )}
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {feature[plan.id] === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : feature[plan.id] === false ? (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-500">{feature[plan.id]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More/Less Button */}
        {allFeatures.length > 8 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="inline-flex items-center gap-2 px-6 py-2 text-blue-600 font-semibold hover:underline"
            >
              {showAllFeatures ? 'Show Less Features' : 'Show All Features'}
              <HiArrowRight className={`w-4 h-4 transition-transform ${showAllFeatures ? 'rotate-90' : ''}`} />
            </button>
          </div>
        )}

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <HiOutlineCheck className="w-4 h-4 text-green-500" />
            <span>Included</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineX className="w-4 h-4 text-red-400" />
            <span>Not included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center text-xs">●</span>
            <span>Limited or custom</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineChartSquareBar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Not sure which plan is right for you?"}
            </span>
            <Link
              href={config?.ctaLink || "/contact"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Contact Sales"}
              <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Footnote */}
        {config?.footnote && (
          <div className="text-center mt-8 text-xs text-gray-400">
            {config.footnote}
          </div>
        )}
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .sticky {
          position: sticky;
        }
      `}</style>
    </section>
  );
};

export default FeatureComparisonTableSection1;