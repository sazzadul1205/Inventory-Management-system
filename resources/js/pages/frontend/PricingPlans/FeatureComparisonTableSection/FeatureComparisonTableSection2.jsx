// frontend/PricingPlans/FeatureComparisonTableSection/FeatureComparisonTableSection2.jsx

// React
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineChevronRight,
  HiOutlineChartSquareBar,
  HiOutlineSwitchHorizontal,
} from 'react-icons/hi';

const FeatureComparisonTableSection2 = ({ config }) => {
  const [activePlan, setActivePlan] = useState('professional');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState(['professional', 'business']);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const plans = config?.plans || [];
  const featuresByCategory = config?.featuresByCategory || [];

  const togglePlanSelection = (planId) => {
    if (selectedPlans.includes(planId)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter(p => p !== planId));
      }
    } else {
      if (selectedPlans.length < 3) {
        setSelectedPlans([...selectedPlans, planId]);
      }
    }
  };

  const getFeatureValue = (feature, planId) => {
    const value = feature[planId];
    if (value === true) return <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />;
    return <span className="text-sm text-gray-500">{value}</span>;
  };

  const getPlanColor = (planId) => {
    const colors = {
      starter: 'bg-gray-50 dark:bg-gray-800',
      professional: 'bg-blue-50 dark:bg-blue-900/20',
      business: 'bg-purple-50 dark:bg-purple-900/20',
      enterprise: 'bg-green-50 dark:bg-green-900/20'
    };
    return colors[planId] || '';
  };

  const selectedPlanData = plans.find(p => p.id === activePlan);
  const displayPlans = compareMode ? plans.filter(p => selectedPlans.includes(p.id)) : [selectedPlanData];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Interactive Feature Comparison"
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

        {/* Plan Selector & Compare Mode Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => {
                  setActivePlan(plan.id);
                  setCompareMode(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!compareMode && activePlan === plan.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {plan.icon} {plan.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setCompareMode(!compareMode);
              if (!compareMode) {
                setSelectedPlans(['professional', 'business']);
              }
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${compareMode
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
          >
            <HiOutlineSwitchHorizontal className="w-4 h-4" />
            {compareMode ? 'Exit Compare Mode' : 'Compare Plans'}
          </button>
        </div>

        {/* Compare Mode Plan Selector */}
        {compareMode && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-8">
            <div className="text-center mb-3 text-sm text-gray-500">Select up to 3 plans to compare</div>
            <div className="flex flex-wrap justify-center gap-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => togglePlanSelection(plan.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedPlans.includes(plan.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  {plan.icon} {plan.name}
                  {selectedPlans.includes(plan.id) && <HiOutlineCheck className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-700 min-w-50">
                  Features
                </th>
                {displayPlans.map((plan) => (
                  <th key={plan.id} className={`px-6 py-5 text-center text-sm font-semibold ${getPlanColor(plan.id)} min-w-37.5`}>
                    <div className="text-2xl mb-1">{plan.icon}</div>
                    <div>{plan.name}</div>
                    <div className="text-lg font-bold mt-1">
                      {plan.price === 'Custom' ? 'Custom' : `$${plan.price}/mo`}
                    </div>
                    {plan.popular && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {featuresByCategory.map((category, catIdx) => {
                const isExpanded = expandedCategory === catIdx;
                const features = isExpanded ? category.features : category.features.slice(0, 4);

                return (
                  <React.Fragment key={catIdx}>
                    {/* Category Header */}
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td colSpan={displayPlans.length + 1} className="px-6 py-3">
                        <button
                          onClick={() => setExpandedCategory(isExpanded ? null : catIdx)}
                          className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"
                        >
                          <span className="text-xl">{category.icon}</span>
                          {category.name}
                          <HiOutlineChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </td>
                    </tr>

                    {/* Features */}
                    {features.map((feature, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        onMouseEnter={() => setHoveredFeature(`${catIdx}-${idx}`)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{feature.icon}</span>
                            <span>{feature.name}</span>
                            {hoveredFeature === `${catIdx}-${idx}` && feature.tooltip && (
                              <div className="absolute left-full ml-2 z-10 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                {feature.tooltip}
                              </div>
                            )}
                          </div>
                        </td>
                        {displayPlans.map((plan) => (
                          <td key={plan.id} className="px-6 py-4 text-center">
                            {getFeatureValue(feature, plan.id)}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Show More/Less Button for Category */}
                    {category.features.length > 4 && (
                      <tr>
                        <td colSpan={displayPlans.length + 1} className="px-6 py-2 text-center">
                          <button
                            onClick={() => setExpandedCategory(isExpanded ? null : catIdx)}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {isExpanded ? 'Show Less' : `Show ${category.features.length - 4} More Features`}
                          </button>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Recommendation Banner */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Not sure which plan is right for you?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based on your business size and needs, our team can recommend the perfect plan.
                </p>
              </div>
            </div>
            <Link
              href={config?.ctaLink || "/contact"}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
            >
              Get Recommendation
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

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
              {config?.ctaText || "Ready to get started?"}
            </span>
            <Link
              href={config?.trialLink || "/free-trial"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Start Free Trial"}
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

export default FeatureComparisonTableSection2;