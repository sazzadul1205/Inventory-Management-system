// frontend/PricingPlans/FeatureComparisonTableSection/FeatureComparisonTableSection3.jsx

/**
 * Feature Comparison Table Section Component with Advanced Features
 * A comprehensive feature comparison table with advanced functionality featuring:
 * - Category filtering for features
 * - Compare mode allowing up to 4 plans side-by-side
 * - Save/Share/Print functionality for comparisons
 * - User voting (helpful/not helpful) on features
 * - Local storage persistence for saved comparisons and votes
 * - Feature descriptions and tooltips
 * - Visual indicators for included (✓), not included (✗), and custom values
 * - Plan icons and pricing display with popular badge
 * - Color-coded plan columns
 * - Show more/less features toggle
 * - Recommendation banner for personalized guidance
 * - Print styles for PDF export
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake, FaMicrosoft } from 'react-icons/fa';
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
  HiOutlineThumbDown,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineCloudUpload,
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineSupport,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { TbBrandGoogle } from 'react-icons/tb';

const FeatureComparisonTableSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [userVotes, setUserVotes] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [isPrinting, setIsPrinting] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState(['professional', 'business']);

  // ==================== REFS ====================
  const tableRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const plans = config?.plans || [];
  const categories = config?.categories || [];
  const allFeatures = useMemo(() => config?.features || [], [config?.features]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'check': HiOutlineCheck,
      'x': HiOutlineX,
      'arrow-right': HiArrowRight,
      'chart-square': HiOutlineChartSquareBar,
      'switch': HiOutlineSwitchHorizontal,
      'printer': HiOutlinePrinter,
      'share': HiOutlineShare,
      'bookmark': HiOutlineBookmark,
      'thumb-up': HiOutlineThumbUp,
      'thumb-down': HiOutlineThumbDown,
      'sparkles': HiOutlineSparkles,
      'cog': HiOutlineCog,
      'shield': HiOutlineShieldCheck,
      'cloud': HiOutlineCloudUpload,
      'users': HiOutlineUsers,
      'database': HiOutlineDatabase,
      'chart': HiOutlineChartBar,
      'mail': HiOutlineMail,
      'phone': HiOutlinePhone,
      'clock': HiOutlineClock,
      'credit-card': HiOutlineCreditCard,
      'support': HiOutlineSupport,
      'info': HiOutlineInformationCircle,
      'bulb': HiOutlineLightBulb,
      'rocket': HiOutlineRocketLaunch,
      'handshake': FaRegHandshake,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
    };
    const IconComponent = icons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle plan selection for compare mode
   * @param {string} planId - ID of the plan to toggle
   */
  const togglePlanSelection = useCallback((planId) => {
    if (selectedPlans.includes(planId)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(prev => prev.filter(p => p !== planId));
      }
    } else {
      if (selectedPlans.length < 4) {
        setSelectedPlans(prev => [...prev, planId]);
      }
    }
  }, [selectedPlans]);

  /**
   * Get feature value display component
   * @param {Object} feature - Feature object
   * @param {string} planId - ID of the plan
   * @returns {JSX.Element} Display component for feature value
   */
  const getFeatureValue = useCallback((feature, planId) => {
    const value = feature[planId];
    if (value === true) {
      return <div className="flex justify-center">{getIcon("check", "w-5 h-5 text-green-500")}</div>;
    }
    if (value === false) {
      return <div className="flex justify-center">{getIcon("x", "w-5 h-5 text-red-400")}</div>;
    }
    return <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>;
  }, [getIcon]);

  /**
   * Get plan column background color
   * @param {string} planId - ID of the plan
   * @returns {string} CSS class for background
   */
  const getPlanColor = useCallback((planId) => {
    const colors = {
      starter: 'bg-gray-50 dark:bg-gray-800',
      professional: 'bg-blue-50 dark:bg-blue-900/20',
      business: 'bg-purple-50 dark:bg-purple-900/20',
      enterprise: 'bg-green-50 dark:bg-green-900/20'
    };
    return colors[planId] || '';
  }, []);

  /**
   * Get plan border style for header
   * @param {string} planId - ID of the plan
   * @returns {string} CSS class for border
   */
  const getPlanBorder = useCallback((planId) => {
    const borders = {
      starter: '',
      professional: 'border-t-4 border-t-blue-500',
      business: 'border-t-4 border-t-purple-500',
      enterprise: 'border-t-4 border-t-green-500'
    };
    return borders[planId] || '';
  }, []);

  /**
   * Save current comparison to localStorage
   */
  const handleSaveComparison = useCallback(() => {
    const comparison = {
      plans: selectedPlans,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    localStorage.setItem('savedComparison', JSON.stringify(comparison));
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  }, [selectedPlans]);

  /**
   * Handle user vote on feature helpfulness
   * @param {string} featureId - ID of the feature
   * @param {boolean} isHelpful - Whether the feature is helpful
   */
  const handleVote = useCallback((featureId, isHelpful) => {
    setUserVotes(prev => {
      const newVotes = { ...prev, [featureId]: isHelpful };
      localStorage.setItem('featureVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle print functionality
   */
  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  }, []);

  /**
   * Handle share functionality using Web Share API or clipboard
   */
  const handleShare = useCallback(() => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Feature Comparison',
        text: 'Check out our pricing plans and features',
        url: shareUrl
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  }, []);

  /**
   * Toggle compare mode
   */
  const toggleCompareMode = useCallback(() => {
    setCompareMode(prev => !prev);
    if (!compareMode) {
      setSelectedPlans(['professional', 'business']);
    }
  }, [compareMode]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const votes = localStorage.getItem('featureVotes');
    if (votes) {
      setUserVotes(JSON.parse(votes));
    }
  }, []);

  // ==================== FILTERED FEATURES ====================
  const filteredFeatures = useMemo(() => {
    if (activeTab === 'all') return allFeatures;
    return allFeatures.filter(feature => feature.category === activeTab);
  }, [allFeatures, activeTab]);

  const visibleFeatures = showAllFeatures ? filteredFeatures : filteredFeatures.slice(0, 12);
  const displayPlans = compareMode ? plans.filter(p => selectedPlans.includes(p.id)) : plans;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Feature Comparison Table"
      ref={tableRef}
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Feature comparison badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Compare Plans"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Compare'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Plans & Features'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Compare features across all our pricing tiers to find the perfect fit for your business."}
          </p>
        </div>

        {/* ==================== ACTION BAR ==================== */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === 'all'
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Show all features"
            >
              All Features
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeTab === category.id
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${category.name}`}
              >
                {getIcon(category.icon, "w-3 h-3")}
                {category.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleCompareMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${compareMode
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={compareMode ? "Exit compare mode" : "Compare plans"}
            >
              {getIcon("switch", "w-4 h-4")}
              {compareMode ? 'Exit Compare' : 'Compare Plans'}
            </button>
            <button
              onClick={handleSaveComparison}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Save comparison"
            >
              {getIcon("bookmark", "w-4 h-4")}
              Save
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Share comparison"
            >
              {getIcon("share", "w-4 h-4")}
              Share
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Print comparison"
            >
              {getIcon("printer", "w-4 h-4")}
              Print
            </button>
          </div>
        </div>

        {/* ==================== COMPARE MODE PLAN SELECTOR ==================== */}
        {compareMode && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-3 text-sm text-gray-500 dark:text-gray-400">Select up to 4 plans to compare</div>
            <div className="flex flex-wrap justify-center gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => togglePlanSelection(plan.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedPlans.includes(plan.id)
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  aria-label={`${selectedPlans.includes(plan.id) ? 'Remove' : 'Add'} ${plan.name} plan`}
                >
                  {getIcon(plan.icon, "w-4 h-4")}
                  {plan.name}
                  {selectedPlans.includes(plan.id) && getIcon("check", "w-4 h-4")}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FEATURE COMPARISON TABLE ==================== */}
        <div className={`overflow-x-auto mb-8 ${isPrinting ? 'print-table' : ''}`}>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-700 z-10 min-w-55">
                  Features
                </th>
                {displayPlans.map((plan) => (
                  <th
                    key={plan.id}
                    className={`px-6 py-5 text-center text-sm font-semibold ${getPlanColor(plan.id)} ${getPlanBorder(plan.id)} min-w-37.5`}
                  >
                    <div className="flex justify-center mb-2 text-2xl text-blue-600 dark:text-blue-400">
                      {getIcon(plan.icon, "w-8 h-8")}
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                      {plan.price === 'Custom' ? 'Custom' : `$${plan.price}/mo`}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per month</div>
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
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800 z-10">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 dark:text-gray-400 mt-0.5">
                        {getIcon(feature.icon, "w-4 h-4")}
                      </span>
                      <div>
                        <div>{feature.name}</div>
                        {feature.description && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{feature.description}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleVote(feature.id, true)}
                        className={`flex items-center gap-1 text-xs transition-colors ${userVotes[feature.id] === true ? 'text-green-600' : 'text-gray-400 hover:text-green-600'
                          }`}
                        aria-label="Mark as helpful"
                      >
                        {getIcon("thumb-up", "w-3 h-3")}
                        Helpful
                      </button>
                      <button
                        onClick={() => handleVote(feature.id, false)}
                        className={`flex items-center gap-1 text-xs transition-colors ${userVotes[feature.id] === false ? 'text-red-600' : 'text-gray-400 hover:text-red-600'
                          }`}
                        aria-label="Mark as not helpful"
                      >
                        {getIcon("thumb-down", "w-3 h-3")}
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

        {/* ==================== SHOW MORE/LESS BUTTON ==================== */}
        {filteredFeatures.length > 12 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="inline-flex items-center gap-2 px-6 py-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300 group"
              aria-label={showAllFeatures ? "Show fewer features" : "Show all features"}
            >
              {showAllFeatures ? 'Show Less Features' : `Show All ${filteredFeatures.length} Features`}
              {getIcon("arrow-right", `w-4 h-4 transition-transform duration-300 ${showAllFeatures ? 'rotate-90' : 'group-hover:translate-x-1'}`)}
            </button>
          </div>
        )}

        {/* ==================== LEGEND & TIP ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              {getIcon("check", "w-4 h-4 text-green-500")}
              <span>Included</span>
            </div>
            <div className="flex items-center gap-2">
              {getIcon("x", "w-4 h-4 text-red-400")}
              <span>Not included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center text-gray-400">●</span>
              <span>Limited or custom</span>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 text-sm">
            <span className="font-semibold flex items-center gap-1">
              {getIcon("bulb", "w-4 h-4")}
              Tip: Hover over features for details
            </span>
          </div>
        </div>

        {/* ==================== RECOMMENDATION BANNER ==================== */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 mb-12 border border-blue-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-blue-600 dark:text-blue-400">
                {getIcon("bulb", "w-8 h-8")}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Need help choosing?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team can help you find the perfect plan based on your business needs.
                </p>
              </div>
            </div>
            <Link
              href={config?.ctaLink || "/contact"}
              className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Get Personalized Recommendation
              {getIcon("arrow-right", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("chart-square", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.ctaText || "Ready to get started with the perfect plan?"}
            </span>
            <Link
              href={config?.trialLink || "/free-trial"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Start Free Trial"}
              {getIcon("arrow-right", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== FOOTNOTE ==================== */}
        {config?.footnote && (
          <div className="text-center mt-8 text-xs text-gray-400 dark:text-gray-500">
            {config.footnote}
          </div>
        )}

        {/* ==================== SAVED COMPARISON NOTIFICATION ==================== */}
        {showSaveNotification && (
          <div className="fixed bottom-4 right-4 z-50 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg shadow-lg text-sm animate-fadeIn">
            Comparison saved! Share with your team.
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
          animation: fadeIn 0.3s ease-out forwards;
        }
        @media print {
          .no-print {
            display: none !important;
          }
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
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .sticky {
          position: sticky;
          left: 0;
        }
      `}</style>
    </section>
  );
};

export default FeatureComparisonTableSection3;