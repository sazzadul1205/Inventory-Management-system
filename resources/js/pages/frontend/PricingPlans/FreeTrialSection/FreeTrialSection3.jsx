/**
 * Free Trial Interactive Demo Section Component
 * A comprehensive free trial section with tabbed interface featuring:
 * - Tab navigation (Start Free Trial, Live Demo, Compare Plans)
 * - Plan selection cards with feature lists
 * - Email signup form with validation
 * - Success state with trial countdown timer
 * - Interactive product demo with step-by-step walkthrough
 * - Plan comparison table with feature checkmarks
 * - FAQ section for common questions
 * - Trust badges for social proof
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineDatabase,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineSupport,
  HiOutlineChartSquareBar,
  HiOutlineDesktopComputer,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineCloud,
  HiOutlineCode
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineHandshake } from "react-icons/md";

// third-party libraries
import Swal from 'sweetalert2';

const FreeTrialSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [demoStep, setDemoStep] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  // ==================== REFS ====================
  const timerRef = useRef(null);
  const demoIntervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const plans = config?.plans || [];
  const benefits = config?.benefits || [];
  const demoSteps = config?.demoSteps || [];

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
      'sparkles': HiOutlineSparkles,
      'play': HiOutlinePlay,
      'clock': HiOutlineClock,
      'chart': HiOutlineChartBar,
      'user': HiOutlineUser,
      'mail': HiOutlineMail,
      'building': HiOutlineOfficeBuilding,
      'shield': HiOutlineShieldCheck,
      'database': HiOutlineDatabase,
      'users': HiOutlineUsers,
      'cog': HiOutlineCog,
      'credit-card': HiOutlineCreditCard,
      'support': HiOutlineSupport,
      'chart-square': HiOutlineChartSquareBar,
      'desktop': HiOutlineDesktopComputer,
      'bulb': HiOutlineLightBulb,
      'rocket': HiOutlineRocketLaunch,
      'handshake': MdOutlineHandshake,
      'star': HiOutlineStar,
      'trending': HiOutlineTrendingUp,
      'globe': HiOutlineGlobeAlt,
      'calendar': HiOutlineCalendar,
      'document': HiOutlineDocumentText,
      'cloud': HiOutlineCloud,
      'code': HiOutlineCode
    };
    const IconComponent = icons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle form submission for free trial signup
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: 'Email Required',
        text: 'Please enter your email to start the free trial.',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Email',
        text: 'Enter a valid email address.',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace later)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      setCountdown(14);

      Swal.fire({
        icon: 'success',
        title: 'Free Trial Started!',
        text: `Your 14-day trial is now active.`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: `Please try again. ${error}`,
        confirmButtonColor: '#ef4444',
      });

    } finally {
      setIsSubmitting(false);
    }

  }, [email]);

  /**
   * Start interactive demo walkthrough
   */
  const startDemo = useCallback(() => {
    setShowDemo(true);
    setDemoStep(0);
    demoIntervalRef.current = setInterval(() => {
      setDemoStep(prev => {
        if (prev >= demoSteps.length - 1) {
          if (demoIntervalRef.current) clearInterval(demoIntervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  }, [demoSteps.length]);

  /**
   * Navigate to specific demo step
   * @param {number} step - Step index to navigate to
   */
  const goToDemoStep = useCallback((step) => {
    setDemoStep(step);
    if (demoIntervalRef.current) {
      clearInterval(demoIntervalRef.current);
      demoIntervalRef.current = null;
    }
  }, []);

  /**
   * Exit demo mode
   */
  const exitDemo = useCallback(() => {
    setShowDemo(false);
    if (demoIntervalRef.current) {
      clearInterval(demoIntervalRef.current);
      demoIntervalRef.current = null;
    }
  }, []);

  /**
   * Next demo step
   */
  const nextDemoStep = useCallback(() => {
    if (demoStep < demoSteps.length - 1) {
      setDemoStep(demoStep + 1);
    }
  }, [demoStep, demoSteps.length]);

  // ==================== COUNTDOWN TIMER EFFECT ====================
  useEffect(() => {
    if (countdown > 0) {
      timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
  }, [countdown]);

  // ==================== CLEANUP ON UNMOUNT ====================
  useEffect(() => {
    return () => {
      if (demoIntervalRef.current) clearInterval(demoIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const selectedPlanData = plans.find(p => p.id === selectedPlan) || plans[0];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Free Trial"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Free trial badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Free Trial"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Start Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Free Trial'}
            </span>{' '}
            {config?.title?.suffix || 'Today'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Experience the full power of our platform with a 14-day free trial. No credit card required, cancel anytime."}
          </p>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('signup')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${activeTab === 'signup'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
              }`}
            aria-label="Start free trial tab"
          >
            {getIcon("sparkles", "w-5 h-5")}
            Start Free Trial
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${activeTab === 'demo'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
              }`}
            aria-label="Live demo tab"
          >
            {getIcon("play", "w-5 h-5")}
            Live Demo
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${activeTab === 'compare'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
              }`}
            aria-label="Compare plans tab"
          >
            {getIcon("chart-square", "w-5 h-5")}
            Compare Plans
          </button>
        </div>

        {/* ==================== SIGNUP TAB ==================== */}
        {activeTab === 'signup' && (
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - Benefits */}
                  <div className="p-8 lg:p-10 bg-linear-to-br from-blue-600 to-indigo-600 text-white">
                    <div className="mb-4">
                      {getIcon("rocket", "w-12 h-12 text-blue-200")}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Start Your 14-Day Free Trial</h3>
                    <p className="text-blue-100 mb-6">
                      Experience the full power of our platform. No commitment, cancel anytime.
                    </p>
                    <div className="space-y-3 mb-8">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {getIcon("check", "w-5 h-5 text-green-300")}
                          <span className="text-sm text-white/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-blue-200 flex items-center gap-2">
                      {getIcon("users", "w-4 h-4")}
                      <span>Join 1,000+ businesses already using our platform</span>
                    </div>
                  </div>

                  {/* Right Column - Signup Form */}
                  <div className="p-8 lg:p-10">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Choose your plan
                    </h4>
                    <div className="flex gap-2 mb-6">
                      {plans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-200 ${selectedPlan === plan.id
                            ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                          aria-label={`Select ${plan.name} plan`}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>

                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {selectedPlanData.name} plan includes:
                      </div>
                      <ul className="space-y-1">
                        {selectedPlanData.features?.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            {getIcon("check", "w-3 h-3 text-green-500 mt-0.5")}
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                          aria-label="Work email"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? 'Starting...' : 'Start Free Trial'}
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
                        {getIcon("credit-card", "w-3 h-3")}
                        No credit card required. Cancel anytime.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              // Success State
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 text-center border border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  {getIcon("check", "w-10 h-10 text-green-600")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Your free trial is ready!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Check your inbox at <strong className="text-blue-600 dark:text-blue-400">{email}</strong> for setup instructions.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-6 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center justify-center gap-4">
                    {getIcon("clock", "w-8 h-8 text-blue-600")}
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{countdown} days</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">remaining in your trial</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Go to Dashboard
                  {getIcon("arrow-right", "w-4 h-4")}
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ==================== DEMO TAB ==================== */}
        {activeTab === 'demo' && (
          <div className="max-w-5xl mx-auto">
            {!showDemo ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 text-center border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  {getIcon("desktop", "w-16 h-16 text-blue-600")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  See the platform in action
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Watch a guided tour of our platform and see how businesses like yours are transforming their operations.
                </p>
                <button
                  onClick={startDemo}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
                  aria-label="Start interactive demo"
                >
                  {getIcon("play", "w-6 h-6")}
                  Start Interactive Demo
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-1">
                  {getIcon("clock", "w-3 h-3")}
                  Takes about 2 minutes • No signup required
                </p>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 animate-fadeIn">
                {/* Demo Header */}
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm ml-2 text-white/80">Interactive Demo</span>
                    </div>
                    <button
                      onClick={exitDemo}
                      className="text-white/80 hover:text-white transition-colors"
                      aria-label="Exit demo"
                    >
                      Exit Demo
                    </button>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1">
                      <div className="mb-4 text-blue-600 dark:text-blue-400">
                        {getIcon(demoSteps[demoStep]?.icon, "w-12 h-12")}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {demoSteps[demoStep]?.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {demoSteps[demoStep]?.description}
                      </p>
                      <div className="space-y-3">
                        {demoSteps[demoStep]?.highlights?.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            {getIcon("check", "w-5 h-5 text-green-500 mt-0.5")}
                            <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-64 h-64 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <div className="text-8xl">
                        {demoSteps[demoStep]?.visualIcon && getIcon(demoSteps[demoStep]?.visualIcon, "w-16 h-16 text-gray-400")}
                      </div>
                    </div>
                  </div>

                  {/* Demo Navigation */}
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex gap-1">
                      {demoSteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToDemoStep(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${demoStep === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                          aria-label={`Go to demo step ${idx + 1}`}
                        />
                      ))}
                    </div>
                    {demoStep < demoSteps.length - 1 ? (
                      <button
                        onClick={nextDemoStep}
                        className="px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Next
                      </button>
                    ) : (
                      <Link
                        href="/signup"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Start Free Trial
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== COMPARE TAB ==================== */}
        {activeTab === 'compare' && (
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.comparisonFeatures?.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{feature.name}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features?.some(f => f.toLowerCase().includes(feature.name.toLowerCase())) ? (
                          getIcon("check", "w-5 h-5 text-green-500 mx-auto")
                        ) : (
                          getIcon("x", "w-5 h-5 text-red-400 mx-auto")
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        {config?.faqs && config.faqs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    {getIcon("bulb", "w-5 h-5 text-blue-500 shrink-0 mt-0.5")}
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        {config?.trustBadges && config.trustBadges.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap justify-center gap-8 opacity-60">
              {config.trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="mb-1 text-gray-500 dark:text-gray-400">
                    {getIcon(badge.icon, "w-6 h-6")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
                </div>
              ))}
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
          animation: fadeIn 0.3s ease-out forwards;
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

export default FreeTrialSection3;