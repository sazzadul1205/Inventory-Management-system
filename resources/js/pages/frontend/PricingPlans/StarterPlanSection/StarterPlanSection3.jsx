// frontend/PricingPlans/StarterPlanSection/StarterPlanSection3.jsx

/**
 * Starter Plan Section Component - Interactive Pricing Hub
 * A comprehensive pricing showcase featuring:
 * - Animated statistics counters on scroll
 * - Plan selector tabs for easy navigation
 * - Monthly/Yearly billing toggle with savings indicator
 * - Detailed plan card with feature list
 * - Feature comparison table with visual indicators
 * - Auto-playing testimonial carousel with controls
 * - FAQ section with question icons
 * - Money-back guarantee with shield icon
 * - Contact sales call-to-action
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaRocket, FaBriefcase, FaBuilding } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from 'react-icons/hi';

const StarterPlanSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounters, setAnimatedCounters] = useState({});
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const plans = config?.plans || [];
  const testimonials = config?.testimonials || [];
  const stats = useMemo(() => config?.stats || [], [config]);

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
      'chart': HiOutlineChartBar,
      'users': HiOutlineUserGroup,
      'sparkles': HiOutlineSparkles,
    };
    const IconComponent = icons[iconName] || FaRocket;
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
      'user1': HiOutlineUserGroup,
      'user2': HiOutlineUsers,
      'user3': HiOutlineSparkles,
    };
    const IconComponent = avatarIcons[avatarName] || HiOutlineUserGroup;
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
      return monthlyTotal - plan.priceYearly;
    }
    return null;
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

  /**
   * Toggle between monthly and yearly billing
   */
  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  // Get selected plan data
  const selectedPlanData = plans.find(p => p.id === selectedPlan) || plans[1];

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

  // ==================== ANIMATE STATISTICS COUNTERS ====================
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = stat.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedCounters(prev => ({ ...prev, [index]: stat.value }));
            clearInterval(interval);
          } else {
            setAnimatedCounters(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, stats]);

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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Starter Plan Pricing - Interactive Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

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

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {animatedCounters[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== PLAN SELECTOR TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedPlan === plan.id
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Select ${plan.name} plan`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* ==================== BILLING TOGGLE (CLEAN FIX) ==================== */}
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
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${billingPeriod === 'yearly'
                ? 'bg-blue-600'
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

            <span className="text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
              2 months free
            </span>
          </div>
        </div>

        {/* ==================== SELECTED PLAN CARD ==================== */}
        {selectedPlanData && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Pricing & CTA */}
              <div className={`p-8 lg:p-10 ${selectedPlanData.popular
                ? 'bg-linear-to-br from-blue-600 to-indigo-600 text-white'
                : 'bg-gray-50 dark:bg-gray-800'
                }`}>
                <div className="text-blue-100 dark:text-blue-300 mb-3">
                  {getIcon(selectedPlanData.icon, "w-12 h-12")}
                </div>
                <h3 className="text-3xl font-bold mb-2">{selectedPlanData.name}</h3>
                <p className={`text-sm mb-6 ${selectedPlanData.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {selectedPlanData.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${getPrice(selectedPlanData)}</span>
                    <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {getMonthlyEquivalent(selectedPlanData) && (
                    <div className={`text-sm mt-1 ${selectedPlanData.popular ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      ${getMonthlyEquivalent(selectedPlanData)}/month billed annually
                    </div>
                  )}
                  {getSavingsAmount(selectedPlanData) && billingPeriod === 'yearly' && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                        Save ${getSavingsAmount(selectedPlanData)} annually
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href={selectedPlanData.ctaLink || "/demo"}
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedPlanData.popular
                    ? 'bg-white text-blue-600 hover:shadow-lg transform hover:scale-105'
                    : 'bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                    }`}
                >
                  {selectedPlanData.ctaText || "Get Started"}
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </Link>

                {selectedPlanData.popular && (
                  <p className="text-xs text-center mt-3 text-blue-100">
                    Free 14-day trial. No credit card required.
                  </p>
                )}
              </div>

              {/* Right Column - Features */}
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-green-500" />
                  Everything in {selectedPlanData.name}:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPlanData.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== FEATURE COMPARISON TABLE ==================== */}
        <div className="mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Compare All Plans
          </h3>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {plan.name}
                    {plan.popular && (
                      <span className="block text-xs text-blue-600 dark:text-blue-400 mt-1">Most Popular</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {config?.comparisonFeatures?.map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {plan.features?.some(f => f.includes(feature.name) || feature.name.includes(plan.features?.[0])) ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : plan.limitedFeatures?.includes(feature.name) ? (
                        <span className="text-xs text-gray-400 dark:text-gray-500">Limited</span>
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ==================== CUSTOMER TESTIMONIALS CAROUSEL ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Trusted by 1,000+ Businesses
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
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                            {getAvatarIcon(testimonial.avatar, "w-6 h-6")}
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                          </div>
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
                        className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === idx ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
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
                    <HiOutlineLightBulb className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
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
            <HiOutlineUsers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {config?.contactText || "Have questions about our plans? Need a custom solution?"}
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

export default StarterPlanSection3;