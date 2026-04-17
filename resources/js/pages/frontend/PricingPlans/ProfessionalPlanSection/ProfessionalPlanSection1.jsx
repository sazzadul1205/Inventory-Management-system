// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection1.jsx

/**
 * Professional Plan Section Component
 * A comprehensive professional plan pricing showcase featuring:
 * - Professional plan spotlight with gradient background
 * - Monthly/Yearly billing toggle with savings calculation
 * - Add-ons section with interactive selection
 * - Feature comparison table with starter plan
 * - ROI calculator preview section
 * - API & integrations showcase
 * - Customer testimonial with star ratings
 * - Money-back guarantee with shield icon
 * - Contact sales call-to-action
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons - All from react-icons library
import { FaBriefcase, FaRocket, FaBuilding, FaUserCircle } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLockClosed,
} from 'react-icons/hi';

const ProfessionalPlanSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // ==================== MEMOIZED DATA ====================
  const plans = config?.plans || [];
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const addons = config?.addons || [];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = (iconName, className = "w-8 h-8") => {
    const icons = {
      'briefcase': FaBriefcase,
      'rocket': FaRocket,
      'building': FaBuilding,
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'chip': HiOutlineChip,
      'database': HiOutlineDatabase,
      'cloud': HiOutlineCloud,
      'lock': HiOutlineLockClosed,
    };
    const IconComponent = icons[iconName] || FaBriefcase;
    return <IconComponent className={className} />;
  };

  /**
   * Get avatar icon for testimonial
   * @param {string} avatarName - Name of the avatar icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getAvatarIcon = (avatarName, className = "w-6 h-6") => {
    const avatarIcons = {
      'sarah': FaUserCircle,
      'michael': FaUserCircle,
      'emily': FaUserCircle,
    };
    const IconComponent = avatarIcons[avatarName] || FaUserCircle;
    return <IconComponent className={className} />;
  };

  /**
   * Get add-on icon by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getAddonIcon = (iconName, className = "w-6 h-6") => {
    const addonIcons = {
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'cloud': HiOutlineCloud,
    };
    const IconComponent = addonIcons[iconName] || HiOutlineChip;
    return <IconComponent className={className} />;
  };

  /**
   * Get the current price based on billing period
   * @returns {number} Current price
   */
  const getPrice = () => {
    if (billingPeriod === 'monthly') {
      return professionalPlan?.priceMonthly;
    }
    return professionalPlan?.priceYearly;
  };

  /**
   * Get monthly equivalent for yearly billing
   * @returns {string|null} Monthly equivalent price or null
   */
  const getMonthlyEquivalent = () => {
    if (billingPeriod === 'yearly') {
      return (professionalPlan?.priceYearly / 12).toFixed(0);
    }
    return null;
  };

  /**
   * Calculate savings amount for yearly billing
   * @returns {number|null} Savings amount or null
   */
  const getSavingsAmount = () => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      return savingsAmount;
    }
    return null;
  };

  /**
   * Calculate savings percentage for yearly billing
   * @returns {string|null} Savings percentage or null
   */
  const getSavingsPercent = () => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      return ((savingsAmount / monthlyTotal) * 100).toFixed(0);
    }
    return null;
  };

  /**
   * Toggle between monthly and yearly billing
   */
  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  /**
   * Toggle add-on selection
   * @param {number} index - Index of the add-on
   */
  const toggleAddon = (index) => {
    setSelectedAddon(selectedAddon === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Professional Plan Pricing"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/30 to-transparent dark:from-purple-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-purple-100 dark:bg-purple-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-purple-200 dark:border-purple-800'}`}
            aria-label="Pricing badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-purple-700 dark:text-purple-300'}`}>
              {config?.badge?.text || "Professional Plan"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Grow Your Business with'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Professional'}
            </span>{' '}
            {config?.title?.suffix || 'Plan'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Everything you need to scale your operations with advanced features and priority support."}
          </p>
        </div>

        {/* ==================== BILLING TOGGLE (REFINED) ==================== */}
        <div className="flex justify-center items-center gap-6 mb-12">

          {/* Monthly */}
          <span
            className={`text-sm font-semibold transition ${billingPeriod === 'monthly'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-400'
              }`}
          >
            Monthly
          </span>

          {/* Toggle */}
          <button
            onClick={toggleBilling}
            role="switch"
            aria-checked={billingPeriod === 'yearly'}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${billingPeriod === 'yearly'
              ? 'bg-purple-600'
              : 'bg-gray-300 dark:bg-gray-600'
              }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${billingPeriod === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                }`}
            />
          </button>

          {/* Yearly + badge */}
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold transition ${billingPeriod === 'yearly'
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400'
                }`}
            >
              Yearly
            </span>

            <span className="text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full whitespace-nowrap">
              Save {getSavingsPercent()}%
            </span>
          </div>

        </div>

        {/* ==================== PROFESSIONAL PLAN CARD ==================== */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden ring-2 ring-purple-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-bl-full opacity-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-5" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Pricing & CTA */}
              <div className="p-8 lg:p-10 bg-linear-to-br from-purple-600 to-indigo-600 text-white">
                <div className="text-purple-200 mb-3">
                  {getIcon(professionalPlan?.icon || "briefcase", "w-12 h-12")}
                </div>
                <h3 className="text-3xl font-bold mb-2">Professional Plan</h3>
                <p className="text-purple-100 text-sm mb-6">
                  {professionalPlan?.description || "Perfect for growing businesses with advanced needs"}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${getPrice()}</span>
                    <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {getMonthlyEquivalent() && (
                    <div className="text-sm text-purple-200 mt-1">
                      ${getMonthlyEquivalent()}/month billed annually
                    </div>
                  )}
                  {getSavingsAmount() && billingPeriod === 'yearly' && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-xs font-semibold text-green-200">
                        Save ${getSavingsAmount()} annually
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href={professionalPlan?.ctaLink || "/demo"}
                  className="block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white text-purple-600 hover:shadow-lg transform hover:scale-105"
                >
                  Start Free Trial
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </Link>

                <p className="text-xs text-center mt-3 text-purple-200">
                  Free 14-day trial. No credit card required.
                </p>
              </div>

              {/* Right Column - Features */}
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineSparkles className="w-5 h-5 text-purple-500" />
                  Everything in Professional:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {professionalPlan?.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== ADD-ONS SECTION ==================== */}
        {config?.showAddons && addons.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Popular Add-ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer ${selectedAddon === index ? 'ring-2 ring-purple-500' : ''
                    }`}
                  onClick={() => toggleAddon(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleAddon(index)}
                  aria-label={`${addon.name} add-on`}
                >
                  <div className="text-purple-600 dark:text-purple-400 mb-3">
                    {getAddonIcon(addon.icon, "w-8 h-8")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{addon.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">${addon.price}/mo</span>
                    <button
                      className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline"
                      aria-label={selectedAddon === index ? "Remove from plan" : "Add to plan"}
                    >
                      {selectedAddon === index ? 'Added ✓' : 'Add to plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FEATURE COMPARISON TABLE ==================== */}
        {config?.showComparison && (
          <div className="mb-12 overflow-x-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Compare with Starter Plan
            </h3>
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.comparisonFeatures?.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.starter ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-purple-50 dark:bg-purple-900/10">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== ROI CALCULATOR PREVIEW ==================== */}
        {config?.showROICalculator && (
          <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-purple-600 dark:text-purple-400 mb-3">
                  {getIcon("chart", "w-8 h-8")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Calculate Your ROI
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Professional plan clients typically achieve 3x ROI within 6 months.
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25-35%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                      <HiOutlineClock className="w-5 h-5" />
                      3-6 mo
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                      <HiOutlineTrendingUp className="w-5 h-5" />
                      2.5x
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Average ROI</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
                >
                  Calculate Your Savings
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== API & INTEGRATION SECTION ==================== */}
        {config?.showAPI && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-purple-600 dark:text-purple-400 mb-3">
                  <HiOutlineCode className="w-8 h-8 mx-auto md:mx-0" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Powerful API & Integrations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connect with 50+ apps and platforms. Build custom workflows with our RESTful API.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {config?.integrations?.slice(0, 6).map((integration, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.apiLink || "/developers"}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <HiOutlineCode className="w-5 h-5" />
                  View API Documentation
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TESTIMONIAL ==================== */}
        {config?.testimonial && (
          <div className="mb-12 bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6 max-w-3xl mx-auto">
              "{config.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                {getAvatarIcon(config.testimonial.avatar, "w-6 h-6")}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{config.testimonial.role}, {config.testimonial.company}</div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== MONEY BACK GUARANTEE ==================== */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
            <HiOutlineShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {config?.guaranteeText || "30-day money-back guarantee. No questions asked."}
            </span>
          </div>
        </div>

        {/* ==================== CONTACT SALES ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {config?.contactText || "Need help choosing the right plan? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Sales
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
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
          animation: fadeIn 0.5s ease-out forwards;
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

export default ProfessionalPlanSection1;