// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection3.jsx

/**
 * Professional Plan Section Component - Comparison Focused
 * A comprehensive professional plan comparison showcase featuring:
 * - Side-by-side pricing cards (Starter vs Professional)
 * - Monthly/Yearly billing toggle with animated savings
 * - ROI metrics with animated counters on scroll
 * - Detailed feature comparison table
 * - Expandable modal for full feature comparison
 * - ROI calculator call-to-action
 * - Client success stories grid
 * - Trust badges from industry leaders
 * - Money-back guarantee with shield icon
 * - Contact sales call-to-action
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaRocket, FaBriefcase, FaBuilding, FaUserCircle, FaTrophy } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineXCircle,
} from 'react-icons/hi';

const ProfessionalPlanSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const plans = config?.plans || [];
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const starterPlan = plans.find(p => p.id === 'starter') || {};
  const roiMetrics = useMemo(() => config?.roiMetrics || [], [config]);
  const comparisonFeatures = config?.comparisonFeatures || [];
  const successStories = config?.successStories || [];
  const trustBadges = config?.trustBadges || [];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = (iconName, className = "w-8 h-8") => {
    const icons = {
      'rocket': FaRocket,
      'briefcase': FaBriefcase,
      'building': FaBuilding,
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'trophy': FaTrophy,
    };
    const IconComponent = icons[iconName] || FaBriefcase;
    return <IconComponent className={className} />;
  };

  /**
   * Get avatar icon for success stories
   * @param {string} avatarName - Name of the avatar icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getAvatarIcon = (avatarName, className = "w-8 h-8") => {
    const avatarIcons = {
      'techstart': FaUserCircle,
      'innovatelabs': FaUserCircle,
      'global': FaUserCircle,
    };
    const IconComponent = avatarIcons[avatarName] || FaUserCircle;
    return <IconComponent className={className} />;
  };

  /**
   * Get trust badge icon
   * @param {string} iconName - Name of the badge icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getTrustBadgeIcon = (iconName, className = "w-8 h-8") => {
    const badgeIcons = {
      'google': HiOutlineSparkles,
      'microsoft': HiOutlineStar,
      'amazon': HiOutlineTrendingUp,
    };
    const IconComponent = badgeIcons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  };

  /**
   * Get the current price for professional plan
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
      return monthlyTotal - professionalPlan?.priceYearly;
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

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE ROI METRICS ====================
  useEffect(() => {
    if (isVisible) {
      roiMetrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedValues(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, roiMetrics]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Professional Plan Comparison"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

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
              {config?.badge?.text || "Compare Plans"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Choose the'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Right Plan'}
            </span>{' '}
            {config?.title?.suffix || 'for Your Growth'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Compare features and pricing to find the perfect plan for your business needs."}
          </p>
        </div>

        {/* ==================== PRICING CARDS SIDE BY SIDE ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Starter Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8">
              <div className="text-purple-600 dark:text-purple-400 mb-3">
                {getIcon("rocket", "w-10 h-10")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">For small businesses just getting started</p>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${starterPlan?.priceMonthly}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Billed monthly</p>
              </div>
              <Link
                href={starterPlan?.ctaLink || "/signup"}
                className="block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Get Started
              </Link>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800/50">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Includes:</p>
              <ul className="space-y-2">
                {starterPlan?.features?.slice(0, 6).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <HiOutlineCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm">
                  <HiOutlineXCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500 dark:text-gray-500">AI Forecasting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <HiOutlineXCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500 dark:text-gray-500">API Access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Plan Card */}
          <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden transform md:scale-105 ring-2 ring-purple-500 transition-all duration-300">
            <div className="p-8 text-white">
              <div className="text-purple-200 mb-3">
                {getIcon("briefcase", "w-10 h-10")}
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-purple-100 text-sm mb-6">Perfect for growing businesses with advanced needs</p>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${getPrice()}</span>
                  <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                {getMonthlyEquivalent() && (
                  <p className="text-sm text-purple-200 mt-1">${getMonthlyEquivalent()}/month billed annually</p>
                )}
                {getSavingsAmount() && billingPeriod === 'yearly' && (
                  <p className="text-xs text-green-300 mt-1">Save ${getSavingsAmount()} annually</p>
                )}
              </div>
              <Link
                href={professionalPlan?.ctaLink || "/demo"}
                className="block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white text-purple-600 hover:shadow-lg transform hover:scale-105"
              >
                Start Free Trial
                <HiArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
              <p className="text-xs text-center mt-3 text-purple-200">Free 14-day trial. No credit card required.</p>
            </div>
            <div className="bg-white/10 p-8">
              <p className="text-sm font-semibold text-white mb-4">Everything in Starter, plus:</p>
              <ul className="grid grid-cols-2 gap-3">
                {professionalPlan?.features?.slice(0, 10).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <HiOutlineCheck className="w-4 h-4 text-green-300 shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== BILLING TOGGLE (FIXED) ==================== */}
        <div className="flex justify-center items-center gap-5 mb-12">

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
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${billingPeriod === 'yearly'
                ? 'bg-purple-600'
                : 'bg-gray-300 dark:bg-gray-600'
              }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-0'
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

        {/* ==================== ROI METRICS SECTION ==================== */}
        <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Plan ROI Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-purple-600 dark:text-purple-400 mb-3 flex justify-center">
                  {getIcon(metric.icon, "w-8 h-8")}
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {animatedValues[index] || metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== DETAILED FEATURE COMPARISON TABLE ==================== */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Detailed Feature Comparison
            </h3>
            <button
              onClick={() => setShowComparisonModal(true)}
              className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline transition-all"
              aria-label="View all features"
            >
              View All Features
            </button>
          </div>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20">Professional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {comparisonFeatures.slice(0, 12).map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.starter ? (
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-xs text-gray-400 dark:text-gray-500">{feature.starterValue || '—'}</span>
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

        {/* ==================== ROI CALCULATOR CTA ==================== */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-purple-600 dark:text-purple-400 mb-3">
                <HiOutlineCalculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Calculate Your ROI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                See exactly how much you could save with the Professional plan. Based on your business size and industry.
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
                <HiOutlineCalculator className="w-5 h-5" />
                Calculate Your Savings
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== CLIENT SUCCESS STORIES ==================== */}
        {successStories.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Professional Plan Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {getAvatarIcon(story.avatar, "w-10 h-10")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{story.industry}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{story.result}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{story.resultLabel}</div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        {trustBadges.length > 0 && (
          <div className="mb-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by 1,000+ businesses</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 dark:opacity-50">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">
                    {getTrustBadgeIcon(badge.icon, "w-8 h-8")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
                </div>
              ))}
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
              {config?.contactText || "Ready to upgrade? Our team is here to help you get started."}
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

      {/* ==================== COMPARISON MODAL ==================== */}
      {showComparisonModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setShowComparisonModal(false)}
          role="dialog"
          aria-label="Full feature comparison"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">All Features Comparison</h3>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors text-2xl"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                    <th className="text-center py-3 text-sm font-semibold text-purple-600 dark:text-purple-400">Professional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                      <td className="py-3 text-center">
                        {feature.starter ? (
                          <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-400 dark:text-gray-500">{feature.starterValue || '—'}</span>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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

export default ProfessionalPlanSection3;