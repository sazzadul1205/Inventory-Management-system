// frontend/PricingPlans/FreeTrialSection/FreeTrialSection2.jsx

/**
 * Free Trial Multi-Step Section Component
 * A comprehensive 3-step free trial signup flow featuring:
 * - Interactive plan selection cards
 * - Multi-step form with progress indicator
 * - Industry selection dropdown
 * - Form validation and submission
 * - Success state with next steps
 * - Feature highlights grid
 * - Video testimonials carousel with auto-play
 * - FAQ section for common questions
 * - Trust badges for social proof
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineDatabase,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineSupport,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

// third-party libraries
import Swal from 'sweetalert2';



const FreeTrialSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: 'professional',
    industry: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==================== REFS ====================
  const intervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const industries = config?.industries || [];
  const plans = config?.plans || [];
  const features = config?.features || [];
  const videoTestimonials = config?.videoTestimonials || [];

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
      'arrow-right': HiArrowRight,
      'play': HiOutlinePlay,
      'pause': HiOutlinePause,
      'chevron-left': HiOutlineChevronLeft,
      'chevron-right': HiOutlineChevronRight,
      'user': HiOutlineUser,
      'mail': HiOutlineMail,
      'building': HiOutlineOfficeBuilding,
      'phone': HiOutlinePhone,
      'sparkles': HiOutlineSparkles,
      'chart': HiOutlineChartBar,
      'database': HiOutlineDatabase,
      'users': HiOutlineUsers,
      'cog': HiOutlineCog,
      'shield': HiOutlineShieldCheck,
      'clock': HiOutlineClock,
      'credit-card': HiOutlineCreditCard,
      'support': HiOutlineSupport,
      'rocket': HiOutlineRocketLaunch,
      'handshake': FaRegHandshake,
    };
    const IconComponent = icons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle input field change
   * @param {string} field - Field name to update
   * @param {any} value - New value
   */
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  /**
   * Handle form submission for free trial signup
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { name, email, company } = formData;

    // Validation with feedback
    if (!name || !email || !company) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all required fields.',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    // Optional: better email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API (replace later)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.error('Free trial signup:', formData);

      setSubmitted(true);

      // Success UI
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your free trial request has been submitted.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: '#1f2937',
        color: '#fff',
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#ef4444',
      });

    } finally {
      setIsSubmitting(false);
    }

  }, [formData]);

  /**
   * Navigate to next video testimonial
   */
  const nextVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
    setIsPlaying(false);
  }, [videoTestimonials.length]);

  /**
   * Navigate to previous video testimonial
   */
  const prevVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setIsPlaying(false);
  }, [videoTestimonials.length]);

  /**
   * Toggle auto-play for video carousel
   */
  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  /**
   * Proceed to next step
   */
  const nextStep = useCallback(() => {
    if (step < 3) setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  /**
   * Go back to previous step
   */
  const prevStep = useCallback(() => {
    if (step > 1) setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  /**
   * Select a plan and proceed to next step
   * @param {string} planId - ID of selected plan
   */
  const selectPlan = useCallback((planId) => {
    setFormData(prev => ({ ...prev, plan: planId }));
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ==================== AUTO-PLAY VIDEO CAROUSEL EFFECT ====================
  useEffect(() => {
    if (isPlaying && videoTestimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, videoTestimonials.length]);

  const selectedPlanData = plans.find(p => p.id === formData.plan) || plans[0];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
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

        {/* ==================== PROGRESS STEPS ==================== */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className={`flex items-center ${step >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step >= 1 ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              1
            </div>
            <span className="ml-2 text-sm hidden sm:inline">Select Plan</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-linear-to-r from-blue-600 to-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
          {/* Step 2 */}
          <div className={`flex items-center ${step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step >= 2 ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              2
            </div>
            <span className="ml-2 text-sm hidden sm:inline">Your Info</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-linear-to-r from-blue-600 to-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
          {/* Step 3 */}
          <div className={`flex items-center ${step >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step >= 3 ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              3
            </div>
            <span className="ml-2 text-sm hidden sm:inline">Get Started</span>
          </div>
        </div>

        {/* ==================== STEP 1: PLAN SELECTION ==================== */}
        {!submitted && step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => selectPlan(plan.id)}
                className={`cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border ${formData.plan === plan.id ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-100 dark:border-gray-700'
                  }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && selectPlan(plan.id)}
              >
                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {getIcon(plan.icon, "w-10 h-10")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">{plan.description}</p>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features?.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      {getIcon("check", "w-4 h-4 text-green-500 shrink-0 mt-0.5")}
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-2 rounded-lg font-semibold transition-all duration-300 ${formData.plan === plan.id
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  Select {plan.name}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ==================== STEP 2: YOUR INFORMATION ==================== */}
        {!submitted && step === 2 && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("user", "w-6 h-6 text-blue-600")}
              Tell us about yourself
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  aria-label="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                  aria-label="Work email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Acme Inc."
                  aria-label="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  aria-label="Industry"
                >
                  <option value="">Select industry</option>
                  {industries.map(ind => (
                    <option key={ind.id} value={ind.id}>{ind.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                  aria-label="Phone number"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.name || !formData.email || !formData.company}
                  className="flex-1 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ==================== STEP 3: CONFIRMATION ==================== */}
        {!submitted && step === 3 && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                {getIcon("rocket", "w-12 h-12 text-blue-600")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Start your free trial
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You're almost there! Review your information and start your 14-day trial.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Selected Plan:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedPlanData?.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Name:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 dark:text-gray-400">Company:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.company}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevStep}
                className="flex-1 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Starting...' : 'Start Free Trial'}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
              {getIcon("credit-card", "w-3 h-3")}
              No credit card required. Cancel anytime.
            </p>
          </div>
        )}

        {/* ==================== SUCCESS STATE ==================== */}
        {submitted && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 text-center mb-12 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              {getIcon("check", "w-10 h-10 text-green-600")}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Your free trial is ready!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check your inbox at <strong className="text-blue-600 dark:text-blue-400">{formData.email}</strong> for setup instructions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-6 border border-blue-100 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                📧 We've sent you an email with login credentials and a getting started guide.
              </p>
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

        {/* ==================== FEATURE HIGHLIGHTS ==================== */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What you'll get during your trial
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {getIcon(feature.icon, "w-10 h-10")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== VIDEO TESTIMONIALS ==================== */}
        {videoTestimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              See how others transformed their business
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <img
                    src={videoTestimonials[currentVideo]?.thumbnail}
                    alt={videoTestimonials[currentVideo]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                      {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                    <div className="text-white font-semibold">{videoTestimonials[currentVideo]?.title}</div>
                    <div className="text-white/70 text-sm">{videoTestimonials[currentVideo]?.author}</div>
                  </div>
                </div>
              </div>
              {videoTestimonials.length > 1 && (
                <div className="flex justify-center gap-3 mt-5">
                  <button
                    onClick={prevVideo}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Previous video"
                  >
                    {getIcon("chevron-left", "w-5 h-5 text-gray-600 dark:text-gray-400")}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? getIcon("pause", "w-4 h-4 text-gray-600") : getIcon("play", "w-4 h-4 text-gray-600 ml-0.5")}
                  </button>
                  <button
                    onClick={nextVideo}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Next video"
                  >
                    {getIcon("chevron-right", "w-5 h-5 text-gray-600 dark:text-gray-400")}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        {config?.faqs && config.faqs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    {getIcon("support", "w-5 h-5 text-blue-500 shrink-0 mt-0.5")}
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
          <div className="text-center">
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

export default FreeTrialSection2;