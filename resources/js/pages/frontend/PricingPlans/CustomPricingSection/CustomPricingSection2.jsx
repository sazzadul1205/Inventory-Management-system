// frontend/PricingPlans/CustomPricingSection/CustomPricingSection2.jsx

/**
 * Custom Pricing Calculator Section Component
 * A comprehensive interactive pricing calculator featuring:
 * - Interactive pricing calculator with real-time updates
 * - Tabbed navigation (Pricing Calculator, Custom Features, Compare Plans)
 * - Dynamic price estimation based on user inputs (users, SKUs, locations, revenue)
 * - Animated price counter for visual appeal
 * - Custom features showcase with enterprise-grade options
 * - Plan comparison table highlighting custom plan advantages
 * - Customer testimonials from custom plan clients
 * - Contact modal form for quote requests
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { useState, useEffect, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake } from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineCalculator,
  HiOutlineSwitchHorizontal,
  HiOutlineTemplate,
  HiOutlineUserGroup,
  HiOutlineDatabase,
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineCloudUpload,
  HiOutlineChartBar,
  HiOutlinePhone,
} from 'react-icons/hi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { TbChartInfographic } from 'react-icons/tb';

// third-party libraries
import Swal from 'sweetalert2';

const CustomPricingSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [activeTab, setActiveTab] = useState('calculator');
  const [calculatorValues, setCalculatorValues] = useState({
    users: 50,
    skus: 10000,
    locations: 5,
    annualRevenue: 10000000
  });
  const [showContactForm, setShowContactForm] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const features = config?.features || [];
  const testimonials = config?.testimonials || [];
  const comparisonData = config?.comparisonData || [];
  const enterpriseFeatures = config?.enterpriseFeatures || [];

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
      'star': HiOutlineStar,
      'calculator': HiOutlineCalculator,
      'switch': HiOutlineSwitchHorizontal,
      'template': HiOutlineTemplate,
      'users': HiOutlineUserGroup,
      'database': HiOutlineDatabase,
      'location': HiOutlineLocationMarker,
      'dollar': HiOutlineCurrencyDollar,
      'mail': HiOutlineMail,
      'user': HiOutlineUser,
      'building': HiOutlineOfficeBuilding,
      'document': HiOutlineDocumentText,
      'cog': HiOutlineCog,
      'shield': HiOutlineShieldCheck,
      'cloud': HiOutlineCloudUpload,
      'chart': HiOutlineChartBar,
      'phone': HiOutlinePhone,
      'sparkles': HiOutlineSparkles,
      'handshake': FaRegHandshake,
      'infographic': TbChartInfographic,
    };
    const IconComponent = icons[iconName] || HiOutlineCalculator;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Format currency for display
   * @param {number} value - Numeric value to format
   * @returns {string} Formatted currency string
   */
  const formatCurrency = useCallback((value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }, []);

  /**
   * Handle slider input change
   * @param {string} field - Field name to update
   * @param {string|number} value - New value
   */
  const handleSliderChange = useCallback((field, value) => {
    setCalculatorValues(prev => ({ ...prev, [field]: parseInt(value, 10) }));
  }, []);

  /**
   * Open contact modal
   */
  const openContactModal = useCallback(() => {
    setShowContactForm(true);
  }, []);

  /**
   * Close contact modal
   */
  const closeContactModal = useCallback(() => {
    setShowContactForm(false);
  }, []);

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    console.error('Quote request submitted with calculator values:', calculatorValues);

    setShowContactForm(false);

    Swal.fire({
      icon: 'success',
      title: 'Request Submitted',
      text: 'Our team will contact you within 24 hours.',
      confirmButtonColor: '#7c3aed', // purple-600 (matches your UI)
      confirmButtonText: 'OK',
    });

  }, [calculatorValues]);

  // ==================== PRICE CALCULATION EFFECT ====================
  useEffect(() => {
    // Calculate estimated price based on inputs
    const basePrice = 199;
    const userPrice = Math.max(0, calculatorValues.users - 10) * 5;
    const skuPrice = Math.max(0, calculatorValues.skus - 5000) * 0.5;
    const locationPrice = Math.max(0, calculatorValues.locations - 3) * 50;
    const revenueMultiplier = calculatorValues.annualRevenue / 10000000;

    let total = basePrice + userPrice + skuPrice + locationPrice;
    total = total * (0.8 + revenueMultiplier * 0.2);
    total = Math.min(total, 5000);
    total = Math.max(total, 199);

    setEstimatedPrice(Math.round(total));
  }, [calculatorValues]);

  // ==================== ANIMATED PRICE COUNTER EFFECT ====================
  useEffect(() => {
    let current = 0;
    const increment = estimatedPrice / 30;
    const interval = setInterval(() => {
      current += increment;
      if (current >= estimatedPrice) {
        setAnimatedPrice(estimatedPrice);
        clearInterval(interval);
      } else {
        setAnimatedPrice(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [estimatedPrice]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Custom Pricing Calculator"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-green-50/30 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-green-300/5 dark:bg-green-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {config?.title?.prefix || 'Pricing'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Calculator'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Get an instant estimate based on your business needs. Adjust the sliders to see your custom price."}
          </p>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'calculator'
              ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show pricing calculator"
          >
            {getIcon("calculator", "w-4 h-4")}
            Pricing Calculator
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'features'
              ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show custom features"
          >
            {getIcon("template", "w-4 h-4")}
            Custom Features
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'compare'
              ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Compare plans"
          >
            {getIcon("switch", "w-4 h-4")}
            Compare Plans
          </button>
        </div>

        {/* ==================== PRICING CALCULATOR TAB ==================== */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Calculator Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                {getIcon("calculator", "w-5 h-5 text-green-600")}
                Configure Your Plan
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
                    step="1"
                    value={calculatorValues.users}
                    onChange={(e) => handleSliderChange('users', e.target.value)}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                    aria-label="Number of users slider"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">1</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{calculatorValues.users}</span>
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
                    value={calculatorValues.skus}
                    onChange={(e) => handleSliderChange('skus', e.target.value)}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                    aria-label="Number of SKUs slider"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">1K</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{calculatorValues.skus.toLocaleString()}</span>
                    <span className="text-gray-500 dark:text-gray-400">100K+</span>
                  </div>
                </div>

                {/* Locations Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 items-center gap-2">
                    {getIcon("location", "w-4 h-4")}
                    Number of Locations
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={calculatorValues.locations}
                    onChange={(e) => handleSliderChange('locations', e.target.value)}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                    aria-label="Number of locations slider"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">1</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{calculatorValues.locations}</span>
                    <span className="text-gray-500 dark:text-gray-400">100+</span>
                  </div>
                </div>

                {/* Annual Revenue Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 items-center gap-2">
                    {getIcon("dollar", "w-4 h-4")}
                    Annual Revenue
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={calculatorValues.annualRevenue}
                    onChange={(e) => handleSliderChange('annualRevenue', e.target.value)}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
                    aria-label="Annual revenue slider"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">$1M</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">${(calculatorValues.annualRevenue / 1000000).toFixed(0)}M</span>
                    <span className="text-gray-500 dark:text-gray-400">$100M+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-sm text-green-200 mb-2">Estimated Monthly Price</div>
                <div className="text-5xl font-bold mb-2">{formatCurrency(animatedPrice)}</div>
                <div className="text-green-200 text-sm">+ applicable taxes</div>
              </div>
              <div className="border-t border-green-500 pt-6 mb-6">
                <p className="text-sm text-green-100 mb-4 text-center">
                  This is an estimate based on your inputs. Final pricing may vary based on specific requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">{calculatorValues.users}</div>
                    <div className="text-xs text-green-200">Users</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">{calculatorValues.skus.toLocaleString()}</div>
                    <div className="text-xs text-green-200">SKUs</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">{calculatorValues.locations}</div>
                    <div className="text-xs text-green-200">Locations</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">${(calculatorValues.annualRevenue / 1000000).toFixed(0)}M</div>
                    <div className="text-xs text-green-200">Revenue</div>
                  </div>
                </div>
              </div>
              <button
                onClick={openContactModal}
                className="w-full py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Get custom quote"
              >
                Get Custom Quote
              </button>
              <p className="text-xs text-green-200 text-center mt-3">
                Includes dedicated support, custom integrations, and SLA
              </p>
            </div>
          </div>
        )}

        {/* ==================== CUSTOM FEATURES TAB ==================== */}
        {activeTab === 'features' && (
          <div className="space-y-12 mb-12">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-green-600 dark:text-green-400">
                    {getIcon(feature.icon, "w-10 h-10")}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Enterprise Features */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Enterprise-Grade Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                    {getIcon("check", "w-5 h-5 text-green-500 shrink-0 mt-0.5")}
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{feature.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== COMPARE PLANS TAB ==================== */}
        {activeTab === 'compare' && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600 bg-green-50 dark:bg-green-900/20">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      {item.standard === '✓' ? getIcon("check", "w-4 h-4 text-green-500 mx-auto") : item.standard}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      {item.professional === '✓' ? getIcon("check", "w-4 h-4 text-green-500 mx-auto") : item.professional}
                    </td>
                    <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/10">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {item.custom === '✓' ? getIcon("check", "w-4 h-4 text-green-500 mx-auto") : item.custom}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              What Our Custom Plan Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-4 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{getIcon("star", "w-4 h-4 text-yellow-400 fill-yellow-400")}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-lg">
                      {getIcon(testimonial.icon || "user", "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.author}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">{testimonial.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-green-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              {getIcon("calculator", "w-6 h-6 text-green-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.ctaText || "Ready to get your personalized quote?"}
            </span>
            <button
              onClick={openContactModal}
              className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Request Custom Quote"}
              {getIcon("arrow-right", "w-4 h-4")}
            </button>
          </div>
        </div>
      </div>

      {/* ==================== CONTACT MODAL ==================== */}
      {showContactForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeContactModal}
          role="dialog"
          aria-label="Custom quote request form"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
              <div className="flex items-center gap-2">
                {getIcon("calculator", "w-6 h-6 text-green-600")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Custom Quote</h3>
              </div>
              <button
                onClick={closeContactModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estimated Users</label>
                <input
                  type="number"
                  value={calculatorValues.users}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements</label>
                <textarea
                  name="requirements"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your specific needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit Request
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Our team will respond within 24 hours with a custom quote.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ==================== STYLES ==================== */}
      <style>{`
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

export default CustomPricingSection2;