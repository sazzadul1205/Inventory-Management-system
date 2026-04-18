// frontend/Contact/ContactFormSection/ContactFormSection2.jsx

/**
 * Contact Form Section Component - Modern Split Layout with Feature Highlights
 * A comprehensive contact page featuring:
 * - Split layout with contact form and feature highlights
 * - Multi-step form with smooth transitions
 * - Rich contact information cards with interactive elements
 * - Feature highlights grid showcasing key benefits
 * - Emergency support banner for critical issues
 * - Comprehensive form with validation and loading states
 * - Statistics display for social proof
 * - Trust badges and security indicators
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import { FaUsers, FaWhatsapp, FaRegBuilding, FaRegHandshake } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlinePaperAirplane,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineVideoCamera,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { HiOutlineExclamationTriangle, HiOutlineTrophy } from 'react-icons/hi2';

import { TbHeadset } from 'react-icons/tb';

const ContactFormSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', companySize: '', inquiryType: 'general', message: '', preferredContact: 'email', newsletter: false, });

  // ==================== REFS ====================
  const formRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const features = config?.features || [];
  const companySizes = config?.companySizes || [];
  const inquiryTypes = config?.inquiryTypes || [];
  const contactMethods = config?.contactMethods || [];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      // Communication icons
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineClock,
      HiOutlineCheckCircle,
      HiOutlineArrowRight,
      HiOutlineUser,
      HiOutlineDocumentText,
      HiOutlinePaperAirplane,
      HiOutlineGlobeAlt,
      HiOutlineLightBulb,
      HiOutlineTrophy,
      HiOutlineVideoCamera,
      HiOutlineShieldCheck,
      HiOutlineChartBar,
      HiOutlineCalendar,
      HiOutlineLocationMarker,
      HiOutlineExclamationTriangle,
      HiOutlineSparkles,
      // Font Awesome
      FaUsers,
      FaWhatsapp,
      FaRegBuilding,
      FaRegHandshake,
      // Icons
      FiMessageCircle,
      TbHeadset,
    };
    const IconComponent = icons[iconName] || HiOutlineMail;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Validate current step
   * @returns {boolean} - Whether validation passed
   */
  const validateStep = useCallback(() => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
      if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    }

    if (currentStep === 2) {
      if (!formData.message.trim()) newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [currentStep, formData]);

  /**
   * Handle next step navigation
   */
  const handleNextStep = useCallback(() => {
    if (validateStep()) {
      setCurrentStep(2);
      window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
    }
  }, [validateStep]);

  /**
   * Handle previous step navigation
   */
  const handlePrevStep = useCallback(() => {
    setCurrentStep(1);
    window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
  }, []);

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        inquiryType: 'general',
        message: '',
        preferredContact: 'email',
        newsletter: false,
      });
      setCurrentStep(1);
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  }, [validateStep]);

  // Clear submission message after timeout
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Contact Support"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true" />

      {/* Animated dots pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-teal-400 rounded-full opacity-60 animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-40 animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
            aria-label="Contact badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
              {config?.badge?.text || "Let's Talk"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Start a'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Conversation'}
            </span>{' '}
            {config?.title?.suffix || 'With Us'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Whether you're ready to start your journey or just exploring options, our team is here to answer your questions and guide you every step of the way."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-emerald-600 dark:text-emerald-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== MAIN CONTENT GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* ==================== LEFT COLUMN - FEATURE HIGHLIGHTS ==================== */}
          <div className="space-y-6">
            {/* Hero Contact Card */}
            <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                {getIcon("HiOutlineSparkles", "w-8 h-8")}
                <h3 className="text-xl font-bold">We're Here to Help</h3>
              </div>
              <p className="text-emerald-100 mb-6">Whether you need technical support, have sales questions, or want to explore partnership opportunities — we're just a message away.</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                  {getIcon("HiOutlineClock", "w-3 h-3")}
                  <span>Avg response: &lt; 2hrs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                  {getIcon("FaUsers", "w-3 h-3")}
                  <span>24/7 support team</span>
                </div>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("TbHeadset", "w-5 h-5 text-emerald-600")}
                Ways to Connect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactMethods.map((method, index) => (
                  <Link
                    key={index}
                    href={method.link || '#'}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 group"
                  >
                    <div className="text-emerald-600 dark:text-emerald-400">
                      {getIcon(method.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{method.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{method.value}</div>
                    </div>
                    {getIcon("HiOutlineArrowRight", "w-3 h-3 text-gray-400 group-hover:text-emerald-600 transition-colors")}
                  </Link>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-center mb-2 text-emerald-600 dark:text-emerald-400">
                    {getIcon(feature.icon, "w-6 h-6")}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            {config?.showTrustBadge && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800">
                <div className="flex items-center gap-3">
                  {getIcon("HiOutlineShieldCheck", "w-6 h-6 text-emerald-600")}
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">100% Secure & Confidential</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{config?.trustText || "All information is encrypted and secure. We respect your privacy."}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== RIGHT COLUMN - CONTACT FORM ==================== */}
          <div ref={formRef}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  {getIcon("HiOutlinePaperAirplane", "w-5 h-5")}
                  <h3 className="text-xl font-bold">Send us a Message</h3>
                </div>
                <p className="text-emerald-100 text-sm">Fill out the form and we'll respond within 24 hours</p>
              </div>

              <div className="p-6 md:p-8">
                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${currentStep >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    1
                  </div>
                  <div className={`w-12 h-0.5 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-emerald-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${currentStep >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    2
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-emerald-600")}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Thanks for reaching out. Our team will get back to you shortly.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                      <span className="text-xs text-gray-600 dark:text-gray-400">Reference #: INV-{Math.floor(Math.random() * 10000)}</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              {getIcon("HiOutlineUser", "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4")}
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full pl-9 pr-4 py-2.5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                                placeholder="John"
                              />
                            </div>
                            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={`w-full px-4 py-2.5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                              placeholder="Doe"
                            />
                            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                              placeholder="+1 (555) 000-0000"
                            />
                            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                            <div className="relative">
                              {getIcon("FaRegBuilding", "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4")}
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                placeholder="Acme Inc."
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                            <select
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            >
                              <option value="">Select size</option>
                              {companySizes.map((size, idx) => (
                                <option key={idx} value={size.value}>{size.label}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inquiry Type</label>
                            <select
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            >
                              {inquiryTypes.map((type, idx) => (
                                <option key={idx} value={type.value}>{type.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Contact Method</label>
                          <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact === 'email'}
                                onChange={handleChange}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact === 'phone'}
                                onChange={handleChange}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Phone</span>
                            </label>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                        >
                          Continue
                          {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                        </button>
                      </div>
                    )}

                    {/* Step 2: Message */}
                    {currentStep === 2 && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Your Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            rows={8}
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none`}
                            placeholder="Please describe your question, feedback, or inquiry in detail. The more information you provide, the better we can assist you..."
                          />
                          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                          />
                          <label className="text-sm text-gray-600 dark:text-gray-400">
                            Subscribe to our newsletter for product updates and tips
                          </label>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="flex-1 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {loading ? (
                              <>
                                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
                      {getIcon("HiOutlineShieldCheck", "w-3 h-3")}
                      By submitting, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== EMERGENCY CONTACT BANNER ==================== */}
        {config?.showEmergencyContact && (
          <div className="mt-8 bg-linear-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("HiOutlineExclamationTriangle", "w-5 h-5 text-red-600")}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">24/7 Emergency Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
                </div>
              </div>
              <Link
                href="/emergency"
                className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-md"
              >
                {getIcon("HiOutlinePhone", "w-4 h-4")}
                Emergency Hotline
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
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default ContactFormSection2;