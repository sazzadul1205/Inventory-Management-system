// frontend/PricingPlans/FeatureComparisonTableSection/FeatureComparisonTableSection1.jsx

/**
 * Feature Comparison Table Section Component
 * A comprehensive feature comparison table showcasing:
 * - Plan comparison across multiple tiers (Starter, Professional, Business, Enterprise)
 * - Category filtering for features (All, Core, Advanced, Support, Integrations)
 * - Feature tooltips on hover for detailed explanations
 * - Visual indicators for included (✓), not included (✗), and custom values
 * - Plan icons and pricing display
 * - Popular plan badge highlighting
 * - Show more/less features toggle
 * - Color-coded plan columns for visual distinction
 * - Legend for understanding icons
 * - Call-to-action for sales contact
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineChartSquareBar,
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
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { TbBrandGoogle } from 'react-icons/tb';

const FeatureComparisonTableSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

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
      'rocket': HiOutlineRocketLaunch,
      'handshake': FaRegHandshake,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
    };
    const IconComponent = icons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get plan column background color based on plan ID
   * @param {string} planId - ID of the plan
   * @returns {string} CSS class string for background
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
   * Get popular badge for a plan
   * @param {Object} plan - Plan object
   * @returns {JSX.Element|null} Popular badge component
   */
  const getPopularBadge = useCallback((plan) => {
    if (plan.popular) {
      return (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
          Most Popular
        </span>
      );
    }
    return null;
  }, []);

  /**
   * Get plan header border style
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

  // ==================== FILTERED FEATURES ====================
  const filteredFeatures = useMemo(() => {
    if (activeTab === 'all') {
      return allFeatures;
    }
    return allFeatures.filter(feature => feature.category === activeTab);
  }, [allFeatures, activeTab]);

  const visibleFeatures = showAllFeatures ? filteredFeatures : filteredFeatures.slice(0, 8);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Feature Comparison Table"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
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
            {config?.description || "Find the perfect plan for your business needs. Compare features across all our pricing tiers."}
          </p>
        </div>

        {/* ==================== CATEGORY TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-700 z-10">
                  Features
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={`px-6 py-5 text-center text-sm font-semibold transition-all duration-300 ${getPlanColor(plan.id)} ${getPlanBorder(plan.id)}`}
                    onMouseEnter={() => setHoveredPlan(plan.id)}
                    onMouseLeave={() => setHoveredPlan(null)}
                  >
                    <div className="flex justify-center mb-2 text-2xl text-blue-600 dark:text-blue-400">
                      {getIcon(plan.icon, "w-8 h-8")}
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">${plan.price}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per month</div>
                    {getPopularBadge(plan)}
                    {hoveredPlan === plan.id && plan.description && (
                      <div className="absolute mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-20 shadow-lg">
                        {plan.description}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {visibleFeatures.map((feature, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800 z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        {getIcon(feature.icon, "w-4 h-4")}
                      </span>
                      <span>{feature.name}</span>
                      {hoveredRow === idx && feature.tooltip && (
                        <div className="absolute left-full ml-2 z-20 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap shadow-lg">
                          {getIcon("info", "w-3 h-3 inline mr-1")}
                          {feature.tooltip}
                        </div>
                      )}
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {feature[plan.id] === true ? (
                        <div className="flex justify-center">
                          {getIcon("check", "w-5 h-5 text-green-500")}
                        </div>
                      ) : feature[plan.id] === false ? (
                        <div className="flex justify-center">
                          {getIcon("x", "w-5 h-5 text-red-400")}
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">{feature[plan.id]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ==================== SHOW MORE/LESS BUTTON ==================== */}
        {filteredFeatures.length > 8 && (
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

        {/* ==================== LEGEND ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500 dark:text-gray-400">
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
          <div className="flex items-center gap-2">
            {getIcon("info", "w-4 h-4 text-gray-400")}
            <span>Hover for details</span>
          </div>
        </div>

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("chart-square", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.ctaText || "Not sure which plan is right for you?"}
            </span>
            <Link
              href={config?.ctaLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Contact Sales"}
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
      </div>

      {/* ==================== STYLES ==================== */}
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