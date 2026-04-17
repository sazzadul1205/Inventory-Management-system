// frontend/PricingPlans/StarterPlanSection/StarterPlanSection2.jsx

/**
 * Starter Plan Section Component - Interactive Pricing
 * A comprehensive pricing showcase featuring:
 * - Interactive pricing cards with hover effects
 * - Monthly/Yearly billing toggle with savings animation
 * - Feature comparison with visual indicators
 * - ROI calculator preview section
 * - FAQ accordion with question icons
 * - Money-back guarantee with shield icon
 * - Trust badges from industry leaders
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaRocket, FaBriefcase, FaBuilding, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineQuestionMarkCircle,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const StarterPlanSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [animatedSavings, setAnimatedSavings] = useState({});
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // ==================== MEMOIZED DATA ====================
  const plans = useMemo(() => config?.plans || [], [config?.plans]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = (iconName, className = "w-10 h-10") => {
    const icons = {
      'rocket': FaRocket,
      'briefcase': FaBriefcase,
      'building': FaBuilding,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || FaRocket;
    return <IconComponent className={className} />;
  };

  /**
   * Get the current price based on billing period
   * @param {Object} plan - Plan object
   * @returns {number} Current price
   */
  const getPrice = (plan) => {
    if (billingPeriod === 'monthly') {
      return plan.priceMonthly;
    }
    return plan.priceYearly;
  };

  /**
   * Get monthly equivalent for yearly billing
   * @param {Object} plan - Plan object
   * @returns {string|null} Monthly equivalent price or null
   */
  const getMonthlyEquivalent = (plan) => {
    if (billingPeriod === 'yearly') {
      return (plan.priceYearly / 12).toFixed(0);
    }
    return null;
  };

  /**
   * Calculate savings amount for yearly billing
   * @param {Object} plan - Plan object
   * @returns {number|null} Savings amount or null
   */
  const getSavingsAmount = (plan) => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = plan.priceMonthly * 12;
      const savingsAmount = monthlyTotal - plan.priceYearly;
      return savingsAmount;
    }
    return null;
  };

  /**
   * Toggle between monthly and yearly billing
   */
  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  // ==================== ANIMATE SAVINGS PERCENTAGES ====================
  useEffect(() => {
    plans.forEach((plan, index) => {
      if (plan.savingsPercentage) {
        let current = 0;
        const target = plan.savingsPercentage;
        const increment = target / 30;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setAnimatedSavings(prev => ({ ...prev, [index]: target }));
            clearInterval(interval);
          } else {
            setAnimatedSavings(prev => ({ ...prev, [index]: Math.floor(current) }));
          }
        }, 30);

        return () => clearInterval(interval);
      }
    });
  }, [plans]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Starter Plan Pricing - Interactive"
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
            aria-label="Pricing badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Simple Pricing"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Choose the'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Perfect Plan'}
            </span>{' '}
            {config?.title?.suffix || 'for Your Business'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Start small and scale as you grow. No hidden fees, cancel anytime."}
          </p>
        </div>

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
            className={`relative w-14 h-7 flex items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
      ${billingPeriod === 'yearly'
                ? 'bg-blue-600'
                : 'bg-gray-300 dark:bg-gray-600'
              }`}
          >
            <span
              className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
        ${billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}
            />
          </button>

          {/* Yearly */}
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold transition ${billingPeriod === 'yearly'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-400'
                }`}
            >
              Yearly
            </span>

            {/* Badge */}
            <span className="text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2.5 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* ==================== PRICING CARDS WITH INTERACTIVE HOVER ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const price = getPrice(plan);
            const monthlyEquivalent = getMonthlyEquivalent(plan);
            const savingsAmount = getSavingsAmount(plan);
            const savingsPercent = animatedSavings[index] || plan.savingsPercentage;

            return (
              <div
                key={plan.id || index}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${isPopular ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                  }`}
                aria-label={`${plan.name} plan`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-1">
                    <HiOutlineSparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Icon - React Icon */}
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    {getIcon(plan.icon, "w-12 h-12")}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Plan Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    {monthlyEquivalent && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        ${monthlyEquivalent}/month billed annually
                      </div>
                    )}
                    {savingsAmount && billingPeriod === 'yearly' && (
                      <div className="mt-2 inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                          Save ${savingsAmount} annually
                        </span>
                      </div>
                    )}
                    {savingsPercent && billingPeriod === 'yearly' && (
                      <div className="mt-1 text-xs text-green-600 dark:text-green-400">
                        {savingsPercent}% savings vs monthly
                      </div>
                    )}
                  </div>

                  {/* Call to Action Button */}
                  <Link
                    href={plan.ctaLink || "/demo"}
                    className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isPopular
                      ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {plan.ctaText || "Get Started"}
                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                  </Link>

                  {/* Features List */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500" />
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm group">
                          <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 transition-transform group-hover:scale-110" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== FEATURE COMPARISON WITH VISUAL BARS ==================== */}
        {config?.showComparison && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Compare Features
            </h3>
            <div className="space-y-6">
              {config?.comparisonFeatures?.map((feature, idx) => (
                <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {feature.name}
                      </span>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      {plans.map((plan, planIdx) => (
                        <div key={plan.id || planIdx} className="text-center">
                          {plan.features?.includes(feature.name) ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full">
                              <HiOutlineCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full">
                              <HiOutlineX className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== ROI CALCULATOR PREVIEW ==================== */}
        {config?.showROICalculator && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  <HiOutlineChartBar className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  See Your Potential Savings
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Businesses like yours typically achieve 3x ROI within the first year.
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25-35%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <HiOutlineClock className="w-5 h-5" />
                      3-6 mo
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Calculate Your ROI
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        <div className="mb-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by 1,000+ businesses</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 dark:opacity-50">
            {config?.trustBadges?.map((badge, index) => (
              <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  {getIcon(badge.icon, "w-8 h-8")}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        {config?.showFaq && config?.faqs?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <HiOutlineQuestionMarkCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MONEY BACK GUARANTEE BANNER ==================== */}
        {config?.showGuarantee !== false && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config?.guaranteeText || "30-day money-back guarantee. No risk, no questions asked."}
              </span>
            </div>
          </div>
        )}

        {/* ==================== CONTACT SALES SECTION ==================== */}
        {config?.showContactSales !== false && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineUsers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {config?.contactText || "Need a custom solution for your business?"}
              </span>
              <Link
                href={config?.contactLink || "/contact"}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Sales
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
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

export default StarterPlanSection2;