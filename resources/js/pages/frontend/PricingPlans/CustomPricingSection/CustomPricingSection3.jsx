// frontend/PricingPlans/CustomPricingSection/CustomPricingSection3.jsx

/**
 * Custom Pricing Consultation Section Component
 * A comprehensive multi-step consultation form featuring:
 * - 4-step progressive form for custom pricing requests
 * - Company information collection (name, industry, size)
 * - Requirements gathering (users, SKUs, locations via sliders)
 * - Preferences selection (integrations, features, timeline, budget)
 * - Contact information collection
 * - Real-time price estimation based on selections
 * - Progress indicator with step navigation
 * - Success state with next steps
 * - Trust badges for social proof
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useRef, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineLocationMarker,
  HiOutlineCog,
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDocumentText,
  HiOutlineChartBar,
} from 'react-icons/hi';
import { HiOutlineSparkles } from 'react-icons/hi2';

// Third-Party Imports
import Swal from 'sweetalert2';

const CustomPricingSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    name: '',
    email: '',
    phone: '',
    users: 50,
    skus: 10000,
    locations: 5,
    integrations: [],
    features: [],
    timeline: 'immediate',
    budget: '50k-100k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const industries = config?.industries || [];
  const companySizes = config?.companySizes || [];
  const integrationOptions = config?.integrationOptions || [];
  const featureOptions = config?.featureOptions || [];
  const timelineOptions = config?.timelineOptions || [];
  const budgetOptions = config?.budgetOptions || [];

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
      'user': HiOutlineUser,
      'building': HiOutlineOfficeBuilding,
      'users': HiOutlineUsers,
      'database': HiOutlineDatabase,
      'location': HiOutlineLocationMarker,
      'cog': HiOutlineCog,
      'calendar': HiOutlineCalendar,
      'dollar': HiOutlineCurrencyDollar,
      'mail': HiOutlineMail,
      'phone': HiOutlinePhone,
      'document': HiOutlineDocumentText,
      'chart': HiOutlineChartBar,
      'sparkles': HiOutlineSparkles,
      'handshake': FaRegHandshake,
    };
    const IconComponent = icons[iconName] || HiOutlineCheck;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle single input field change
   * @param {string} field - Field name to update
   * @param {any} value - New value
   */
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  /**
   * Handle multi-select field changes (integrations, features)
   * @param {string} field - Field name to update
   * @param {string} value - Value to toggle
   */
  const handleMultiSelect = useCallback((field, value) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  }, []);

  /**
   * Calculate estimated monthly price based on form selections
   * @returns {number} Estimated monthly price
   */
  const calculateEstimatedPrice = useCallback(() => {
    const basePrice = 199;
    const userPrice = Math.max(0, formData.users - 10) * 5;
    const skuPrice = Math.max(0, formData.skus - 5000) * 0.5;
    const locationPrice = Math.max(0, formData.locations - 3) * 50;
    const integrationPrice = formData.integrations.length * 100;
    const featurePrice = formData.features.length * 50;

    let total = basePrice + userPrice + skuPrice + locationPrice + integrationPrice + featurePrice;

    // Apply company size multiplier
    const sizeMultipliers = {
      '1-50': 0.8,
      '51-200': 1.0,
      '201-500': 1.2,
      '501-1000': 1.5,
      '1000+': 2.0
    };
    total = total * (sizeMultipliers[formData.companySize] || 1);

    return Math.round(total);
  }, [formData]);

  /**
   * Navigate to next step
   */
  const nextStep = useCallback(() => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
    }
  }, [step]);

  /**
   * Navigate to previous step
   */
  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
    }
  }, [step]);

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with real fetch/axios later)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.error('Form submitted:', formData);

      setSubmitted(true);

      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Your request has been received successfully.',
        timer: 2000,
        showConfirmButton: false,
        background: '#1f2937',
        color: '#fff',
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#ef4444',
      });

    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const estimatedPrice = calculateEstimatedPrice();

  // ==================== STEP VALIDATION ====================
  const isStep1Valid = formData.companyName && formData.industry && formData.companySize;
  const isStep4Valid = formData.name && formData.email;

  return (
    <section
      ref={formRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Custom Pricing Consultation"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-green-50/30 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-green-300/5 dark:bg-green-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-green-100 dark:bg-green-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-green-200 dark:border-green-800'}`}
            aria-label="Custom pricing badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-green-700 dark:text-green-300'}`}>
              {config?.badge?.text || "Custom Pricing"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Get Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Custom Quote'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Fill out the form below and our team will prepare a personalized pricing plan tailored to your business needs."}
          </p>
        </div>

        {/* ==================== PROGRESS STEPS ==================== */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step >= s
                    ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {step > s ? getIcon("check", "w-5 h-5") : s}
                </div>
                <div className="text-xs mt-2 text-gray-500 dark:text-gray-400 hidden sm:block">
                  {s === 1 && 'Company Info'}
                  {s === 2 && 'Requirements'}
                  {s === 3 && 'Preferences'}
                  {s === 4 && 'Contact'}
                </div>
              </div>
              {s < 4 && (
                <div className={`flex-1 h-0.5 mx-2 rounded-full transition-all duration-300 ${step > s ? 'bg-linear-to-r from-green-600 to-emerald-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
              )}
            </div>
          ))}
        </div>

        {/* ==================== STEP 1: COMPANY INFORMATION ==================== */}
        {step === 1 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("building", "w-6 h-6 text-green-600")}
              Tell us about your company
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind.id} value={ind.id}>
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Size *
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size} employees</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={nextStep}
                disabled={!isStep1Valid}
                className="px-8 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center gap-2"
              >
                Continue
                {getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 2: REQUIREMENTS ==================== */}
        {step === 2 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("chart", "w-6 h-6 text-green-600")}
              Tell us about your requirements
            </h3>
            <div className="space-y-6">
              {/* Users Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 items-center gap-2">
                  {getIcon("users", "w-4 h-4")}
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={formData.users}
                  onChange={(e) => handleInputChange('users', parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                  aria-label="Number of users slider"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500 dark:text-gray-400">1</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">{formData.users}</span>
                  <span className="text-gray-500 dark:text-gray-400">500+</span>
                </div>
              </div>

              {/* SKUs Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 items-center gap-2">
                  {getIcon("database", "w-4 h-4")}
                  Number of SKUs
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={formData.skus}
                  onChange={(e) => handleInputChange('skus', parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                  aria-label="Number of SKUs slider"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500 dark:text-gray-400">1K</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">{formData.skus.toLocaleString()}</span>
                  <span className="text-gray-500 dark:text-gray-400">100K+</span>
                </div>
              </div>

              {/* Locations Slider */}
              <div>
                <label className="  block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 items-center gap-2">
                  {getIcon("location", "w-4 h-4")}
                  Number of Locations
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                  aria-label="Number of locations slider"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500 dark:text-gray-400">1</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">{formData.locations}</span>
                  <span className="text-gray-500 dark:text-gray-400">100+</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Continue
                {getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 3: PREFERENCES ==================== */}
        {step === 3 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("cog", "w-6 h-6 text-green-600")}
              Customize your plan
            </h3>
            <div className="space-y-6">
              {/* Integrations */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Required Integrations
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {integrationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMultiSelect('integrations', option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${formData.integrations.includes(option)
                        ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Additional Features
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {featureOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMultiSelect('features', option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${formData.features.includes(option)
                        ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Implementation Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Continue
                {getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 4: CONTACT & QUOTE ==================== */}
        {step === 4 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("user", "w-6 h-6 text-green-600")}
              Your Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={1}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Anything else we should know?"
                />
              </div>
            </div>

            {/* Estimated Price Preview */}
            <div className="mt-8 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Estimated Monthly Price</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    ${estimatedPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">+ applicable taxes. Final pricing may vary.</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Includes</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formData.users} users, {formData.skus.toLocaleString()} SKUs, {formData.locations} locations
                  </div>
                  {formData.integrations.length > 0 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">{formData.integrations.length} integrations selected</div>
                  )}
                  {formData.features.length > 0 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">{formData.features.length} additional features</div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep4Valid || isSubmitting}
                className="px-8 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                {!isSubmitting && getIcon("arrow-right", "w-4 h-4")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== SUCCESS STATE ==================== */}
        {submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 text-center border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              {getIcon("check", "w-10 h-10 text-green-600")}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Thank You for Your Interest!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our team will review your requirements and contact you within 24 hours with a custom quote.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 mb-6 border border-green-100 dark:border-green-800">
              <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">What happens next?</div>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {getIcon("check", "w-4 h-4 text-green-500")}
                  <span>Our team reviews your requirements</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {getIcon("check", "w-4 h-4 text-green-500")}
                  <span>We prepare a personalized quote</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {getIcon("check", "w-4 h-4 text-green-500")}
                  <span>Schedule a consultation call</span>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all group"
            >
              Return to Home
              {getIcon("arrow-right", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
            </Link>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by 500+ enterprise clients</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {config?.trustBadges?.map((badge, index) => (
              <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  {getIcon(badge.icon, "w-6 h-6")}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
              </div>
            ))}
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
          animation: fadeIn 0.3s ease-out forwards;
        }
        input[type="range"] {
          -webkit-appearance: none;
          background: #e5e7eb;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .dark input[type="range"] {
          background: #374151;
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

export default CustomPricingSection3;