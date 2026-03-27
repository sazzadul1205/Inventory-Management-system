// frontend/PricingPlans/FeatureComparisonTableSection/FeatureComparisonTableSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineChartSquareBar,
  HiOutlineSwitchHorizontal,
  HiOutlinePrinter,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineThumbUp,
  HiOutlineThumbDown
} from 'react-icons/hi';

const FeatureComparisonTableSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState(['professional', 'business']);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [savedComparison, setSavedComparison] = useState(null);
  const [userVotes, setUserVotes] = useState({});
  const [isPrinting, setIsPrinting] = useState(false);
  const tableRef = useRef(null);

  const plans = config?.plans || [];
  const categories = config?.categories || [];
  const allFeatures = config?.features || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedComparison');
    if (saved) {
      setSavedComparison(JSON.parse(saved));
    }
    const votes = localStorage.getItem('featureVotes');
    if (votes) {
      setUserVotes(JSON.parse(votes));
    }
  }, []);

  const togglePlanSelection = (planId) => {
    if (selectedPlans.includes(planId)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter(p => p !== planId));
      }
    } else {
      if (selectedPlans.length < 4) {
        setSelectedPlans([...selectedPlans, planId]);
      }
    }
  };

  const handleSaveComparison = () => {
    const comparison = {
      plans: selectedPlans,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    localStorage.setItem('savedComparison', JSON.stringify(comparison));
    setSavedComparison(comparison);
    alert('Comparison saved! You can share this link with your team.');
  };

  const handleVote = (featureId, isHelpful) => {
    setUserVotes(prev => {
      const newVotes = { ...prev, [featureId]: isHelpful };
      localStorage.setItem('featureVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Feature Comparison',
        text: 'Check out our pricing plans and features',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
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

  const filteredFeatures = allFeatures.filter(feature => {
    if (activeTab === 'all') return true;
    return feature.category === activeTab;
  });

  const visibleFeatures = showAllFeatures ? filteredFeatures : filteredFeatures.slice(0, 12);
  const displayPlans = compareMode ? plans.filter(p => selectedPlans.includes(p.id)) : plans;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Feature Comparison Table"
      ref={tableRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>

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

        {/* Action Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'all'
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                compareMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              <HiOutlineSwitchHorizontal className="w-4 h-4" />
              {compareMode ? 'Exit Compare' : 'Compare Plans'}
            </button>
            <button
              onClick={handleSaveComparison}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition-all"
            >
              <HiOutlineBookmark className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition-all"
            >
              <HiOutlineShare className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition-all"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Compare Mode Plan Selector */}
        {compareMode && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6">
            <div className="text-center mb-3 text-sm text-gray-500">Select up to 4 plans to compare</div>
            <div className="flex flex-wrap justify-center gap-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => togglePlanSelection(plan.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedPlans.includes(plan.id)
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
        <div className={`overflow-x-auto mb-8 ${isPrinting ? 'print-table' : ''}`}>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-700 min-w-55">
                  Features
                </th>
                {displayPlans.map((plan) => (
                  <th key={plan.id} className={`px-6 py-5 text-center text-sm font-semibold ${getPlanColor(plan.id)} min-w-37.5`}>
                    <div className="text-2xl mb-1">{plan.icon}</div>
                    <div className="font-bold">{plan.name}</div>
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
              {visibleFeatures.map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                    <div className="flex items-start gap-2">
                      <span className="text-lg mt-0.5">{feature.icon}</span>
                      <div>
                        <div>{feature.name}</div>
                        {feature.description && (
                          <div className="text-xs text-gray-500 mt-0.5">{feature.description}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleVote(feature.id, true)}
                        className={`flex items-center gap-1 text-xs ${
                          userVotes[feature.id] === true ? 'text-green-600' : 'text-gray-400 hover:text-green-600'
                        }`}
                      >
                        <HiOutlineThumbUp className="w-3 h-3" />
                        Helpful
                      </button>
                      <button
                        onClick={() => handleVote(feature.id, false)}
                        className={`flex items-center gap-1 text-xs ${
                          userVotes[feature.id] === false ? 'text-red-600' : 'text-gray-400 hover:text-red-600'
                        }`}
                      >
                        <HiOutlineThumbDown className="w-3 h-3" />
                        Not Helpful
                      </button>
                    </div>
                  </td>
                  {displayPlans.map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {getFeatureValue(feature, plan.id)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More/Less Button */}
        {filteredFeatures.length > 12 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="inline-flex items-center gap-2 px-6 py-2 text-blue-600 font-semibold hover:underline"
            >
              {showAllFeatures ? 'Show Less Features' : `Show All ${filteredFeatures.length} Features`}
              <HiArrowRight className={`w-4 h-4 transition-transform ${showAllFeatures ? 'rotate-90' : ''}`} />
            </button>
          </div>
        )}

        {/* Legend & Recommendations */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 text-sm">
            <span className="font-semibold">💡 Tip:</span> Hover over features for details
          </div>
        </div>

        {/* Recommendation Banner */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Need help choosing?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team can help you find the perfect plan based on your business needs.
                </p>
              </div>
            </div>
            <Link
              href={config?.ctaLink || "/contact"}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
            >
              Get Personalized Recommendation
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineChartSquareBar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to get started with the perfect plan?"}
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

        {/* Saved Comparison Notification */}
        {savedComparison && (
          <div className="fixed bottom-4 right-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg shadow-lg text-sm">
            Comparison saved! Share with your team.
          </div>
        )}
      </div>

      <style>{`
        @media print {
          .print-table {
            background: white;
            color: black;
          }
          .print-table table {
            width: 100%;
            border-collapse: collapse;
          }
          .print-table th, .print-table td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          .print-table th {
            background-color: #f5f5f5;
          }
          .no-print {
            display: none !important;
          }
        }
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

export default FeatureComparisonTableSection3;