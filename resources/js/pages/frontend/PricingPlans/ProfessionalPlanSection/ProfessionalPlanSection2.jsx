// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection2.jsx

/**
 * Professional Plan Section Component - Feature Focused
 * A comprehensive professional plan showcase featuring:
 * - Professional plan pricing card with gradient background
 * - Monthly/Yearly billing toggle with animated savings counter
 * - Feature tabs with detailed explanations and statistics
 * - Full feature list grid
 * - ROI calculator preview with key metrics
 * - Auto-playing testimonial carousel with controls
 * - Integration partners showcase
 * - Money-back guarantee with shield icon
 * - Contact sales call-to-action
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaBriefcase, FaRocket, FaBuilding, FaUserCircle } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePresentationChartLine,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLockClosed,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineDocumentText,
} from 'react-icons/hi';

const ProfessionalPlanSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ==================== MEMOIZED DATA ====================
  const plans = useMemo(() => config?.plans || [], [config?.plans]);
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const features = config?.features || [];
  const testimonials = config?.testimonials || [];

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
      'sparkles': HiOutlineSparkles,
      'code': HiOutlineCode,
      'mail': HiOutlineMail,
      'chat': HiOutlineChat,
      'document': HiOutlineDocumentText,
    };
    const IconComponent = icons[iconName] || FaBriefcase;
    return <IconComponent className={className} />;
  };

  /**
   * Get avatar icon for testimonials
   * @param {string} avatarName - Name of the avatar icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getAvatarIcon = (avatarName, className = "w-6 h-6") => {
    const avatarIcons = {
      'sarah': FaUserCircle,
      'michael': FaUserCircle,
      'emily': FaUserCircle,
      'david': FaUserCircle,
      'lisa': FaUserCircle,
    };
    const IconComponent = avatarIcons[avatarName] || FaUserCircle;
    return <IconComponent className={className} />;
  };

  /**
   * Get integration icon by name
   * @param {string} iconName - Name of the integration icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIntegrationIcon = (iconName, className = "w-6 h-6") => {
    const integrationIcons = {
      'slack': HiOutlineChat,
      'salesforce': HiOutlineDatabase,
      'hubspot': HiOutlineChartBar,
      'zapier': HiOutlineSparkles,
      'mailchimp': HiOutlineMail,
      'shopify': HiOutlineCloud,
    };
    const IconComponent = integrationIcons[iconName] || HiOutlineChip;
    return <IconComponent className={className} />;
  };

  /**
   * Get feature icon by name
   * @param {string} iconName - Name of the feature icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getFeatureIcon = (iconName, className = "w-5 h-5") => {
    const featureIcons = {
      'analytics': HiOutlineChartBar,
      'security': HiOutlineShieldCheck,
      'support': HiOutlineChat,
      'integrations': HiOutlineSparkles,
      'api': HiOutlineCode,
    };
    const IconComponent = featureIcons[iconName] || HiOutlineChartBar;
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
      return monthlyTotal - professionalPlan?.priceYearly;
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
   * Navigate to next testimonial
   */
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  /**
   * Navigate to previous testimonial
   */
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  // ==================== AUTO-PLAY TESTIMONIAL CAROUSEL ====================
  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  // ==================== ANIMATE SAVINGS PERCENTAGE ====================
  useEffect(() => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      const target = Number(((savingsAmount / monthlyTotal) * 100).toFixed(0));
      let current = 0;
      const increment = target / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setAnimatedSavings(target);
          clearInterval(interval);
        } else {
          setAnimatedSavings(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [billingPeriod, professionalPlan]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Professional Plan Features"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
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
            {config?.title?.prefix || 'Supercharge Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Business Growth'}
            </span>{' '}
            {config?.title?.suffix || 'with Professional Plan'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Everything you need to scale your operations with advanced features and priority support."}
          </p>
        </div>

        {/* ==================== PRICING CARD ==================== */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Pricing */}
              <div className="p-8 lg:p-10 text-white">
                <div className="text-purple-200 mb-3">
                  {getIcon("briefcase", "w-12 h-12")}
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

              {/* Right Column - Savings */}
              <div className="p-8 lg:p-10 bg-black/10 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-purple-200 mb-2 flex justify-center">
                    {getIcon("trending", "w-8 h-8")}
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    {billingPeriod === 'yearly' ? `Save ${animatedSavings}%` : 'Save with Annual'}
                  </div>
                  <p className="text-purple-100 text-sm">
                    {billingPeriod === 'yearly'
                      ? `Get 2 months free when you pay annually`
                      : 'Switch to annual billing and save 2 months'}
                  </p>
                  {getSavingsAmount() && billingPeriod === 'yearly' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-green-500/30 rounded-full">
                      <span className="text-sm font-semibold">Save ${getSavingsAmount()}/year</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== BILLING TOGGLE (FINAL FIX) ==================== */}
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

          {/* Yearly + Badge */}
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
              2 months free
            </span>
          </div>

        </div>

        {/* ==================== FEATURE TABS ==================== */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureTab(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFeatureTab === index
                  ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show ${feature.name} details`}
              >
                {getFeatureIcon(feature.icon, "w-4 h-4")}
                {feature.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-purple-600 dark:text-purple-400 mb-3">
                  {getIcon(features[activeFeatureTab]?.icon || "chart", "w-10 h-10")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {features[activeFeatureTab]?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {features[activeFeatureTab]?.description}
                </p>
                <ul className="space-y-2">
                  {features[activeFeatureTab]?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="text-purple-600 dark:text-purple-400 mb-3 flex justify-center">
                  {getIcon(features[activeFeatureTab]?.statIcon || "trending", "w-10 h-10")}
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {features[activeFeatureTab]?.statValue}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{features[activeFeatureTab]?.statLabel}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FULL FEATURE LIST ==================== */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Everything Included in Professional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalPlan?.features?.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ROI CALCULATOR SECTION ==================== */}
        <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-purple-600 dark:text-purple-400 mb-3">
                <HiOutlinePresentationChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                See Your ROI with Professional
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Based on data from 500+ Professional plan clients:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25-35%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-1">
                    <HiOutlineClock className="w-5 h-5" />
                    3-6 mo
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Payback Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-1">
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
                <HiOutlinePresentationChartLine className="w-5 h-5" />
                Calculate Your ROI
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== TESTIMONIALS CAROUSEL ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              What Our Professional Plan Clients Say
            </h3>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                            {getAvatarIcon(testimonial.avatar, "w-6 h-6")}
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                          </div>
                        </div>
                        <div className="mt-4 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{testimonial.result}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <HiOutlineChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentTestimonial(idx);
                          setIsPlaying(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === idx ? 'w-6 bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                      <HiOutlinePause className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <HiOutlinePlay className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Next testimonial"
                  >
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== INTEGRATION PARTNERS ==================== */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Integrates with Your Favorite Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-70 dark:opacity-50">
            {config?.integrations?.map((integration, index) => (
              <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  {getIntegrationIcon(integration.icon, "w-8 h-8")}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

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
              {config?.contactText || "Need a custom quote or have questions about the Professional plan?"}
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

export default ProfessionalPlanSection2;