// frontend/Contact/SalesInquiriesSection/SalesInquiriesSection2.jsx

/**
 * Sales Inquiries Section Component - Enterprise Sales Center with Quote Calculator
 * A comprehensive enterprise sales center featuring:
 * - Interactive pricing plan cards with feature comparison
 * - Custom quote calculator with real-time price updates
 * - Enterprise features showcase grid
 * - Expandable FAQ accordion with search and filtering
 * - Popular questions quick-select buttons
 * - Save/bookmark favorite questions with localStorage
 * - Helpful/Not helpful voting on answers
 * - Export FAQs to JSON and print-friendly view
 * - Contact sales form modal with timeline and company size
 * - Statistics display for trust signals
 * - Sales resources section (brochure, demo, case studies)
 * - Schedule demo and contact sales CTAs
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlineCog,
  HiOutlineSupport,
  HiOutlineChartPie,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineCreditCard,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice2, HiOutlineRocketLaunch, HiOutlineSparkles } from 'react-icons/hi2';

const SalesInquiriesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', company: '', companySize: '', timeline: 'asap', message: '', preferredContact: 'email', });
  const [calculatorValues, setCalculatorValues] = useState({ users: 10, skus: 5000, locations: 3, annualBilling: true, addons: { advancedAnalytics: false, customIntegrations: false, dedicatedSupport: false, } });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const plans = config?.plans || [];
  const popularQuestions = config?.popularQuestions || [];
  const enterpriseFeatures = config?.enterpriseFeatures || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);

  // ==================== FILTERED FAQS ====================
  const filteredFaqs = useMemo(() => {
    return faqs
      .filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
          faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'recent') return (b.updatedAt || '').localeCompare(a.updatedAt || '');
        if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
        if (sortBy === 'helpful') {
          const aHelpful = helpfulVotes[a.id] === true ? 1 : 0;
          const bHelpful = helpfulVotes[b.id] === true ? 1 : 0;
          return bHelpful - aHelpful;
        }
        return 0;
      });
  }, [faqs, activeCategory, searchQuery, sortBy, helpfulVotes]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineCheckCircle,
      HiOutlineArrowRight,
      HiOutlineX,
      HiOutlineDownload,
      HiOutlinePlay,
      HiOutlineBookOpen,
      HiOutlineCalendar,
      HiOutlineUsers,
      HiOutlineChartBar,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineChat,
      HiOutlineCurrencyDollar,
      HiOutlineOfficeBuilding,
      HiOutlineCog,
      HiOutlineSupport,
      HiOutlineBuildingOffice2,
      HiOutlineChartPie,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineShieldCheck,
      HiOutlineChip,
      HiOutlineAcademicCap,
      HiOutlineCode,
      HiOutlineRocketLaunch,
      HiOutlineCreditCard,
      HiOutlineSparkles,
    };
    const IconComponent = icons[iconName] || HiOutlineCurrencyDollar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Handle helpful/unhelpful vote
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('salesFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle save/unsave FAQ bookmark
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedSalesFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle contact form submission
   */
  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', phone: '', company: '', companySize: '', timeline: 'asap', message: '', preferredContact: 'email' });
      }, 2000);
    }, 500);
  }, [contactForm]);

  /**
   * Export FAQs to JSON file
   */
  const handleExport = useCallback(() => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: categories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'sales-faq-export.json');
    linkElement.click();
  }, [filteredFaqs, categories]);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Calculate custom quote price based on calculator values
   * @returns {number} Estimated monthly price
   */
  const calculateQuote = useCallback(() => {
    let basePrice = 99;
    if (calculatorValues.users > 20) basePrice += (calculatorValues.users - 20) * 3;
    if (calculatorValues.skus > 10000) basePrice += Math.floor((calculatorValues.skus - 10000) / 1000) * 10;
    if (calculatorValues.locations > 1) basePrice += (calculatorValues.locations - 1) * 50;
    if (calculatorValues.addons.advancedAnalytics) basePrice += 100;
    if (calculatorValues.addons.customIntegrations) basePrice += 200;
    if (calculatorValues.addons.dedicatedSupport) basePrice += 300;
    if (calculatorValues.annualBilling) basePrice = basePrice * 0.8;
    return Math.round(basePrice);
  }, [calculatorValues]);

  /**
   * Clear search and filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('recent');
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-cyan-200 dark:bg-cyan-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('salesFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedSalesFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  const estimatedPrice = calculateQuote();

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Sales Inquiries Help Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-cyan-50/30 to-transparent dark:from-cyan-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-cyan-300/5 dark:bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-cyan-100 dark:bg-cyan-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-cyan-200 dark:border-cyan-800'}`}
            aria-label="Sales badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-cyan-700 dark:text-cyan-300'}`}>
              {config?.badge?.text || "Enterprise Sales"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Get a'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-cyan-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Custom Quote'}
            </span>{' '}
            {config?.title?.suffix || 'Tailored to Your Needs'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Every business is unique. Our sales team will work with you to create a customized solution that fits your specific requirements, budget, and growth goals."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-cyan-600 dark:text-cyan-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== PRICING PLANS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Choose Your Plan
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your business. All plans include a 14-day free trial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105 md:scale-105 z-10' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="bg-linear-to-r from-cyan-600 to-blue-600 text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                    {getIcon(plan.icon, "w-12 h-12")}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                    {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                    {plan.price !== 'Custom' && (
                      <span className="text-sm text-gray-500 font-normal">/{plan.billing}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                      ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {plan.ctaText}
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-200 group"
            >
              View detailed pricing comparison
              <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ==================== QUOTE CALCULATOR CTA ==================== */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowQuoteCalculator(!showQuoteCalculator)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {getIcon("HiOutlineChartBar", "w-5 h-5")}
            {showQuoteCalculator ? 'Hide Quote Calculator' : 'Get a Custom Quote'}
          </button>
        </div>

        {/* ==================== QUOTE CALCULATOR ==================== */}
        {showQuoteCalculator && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineChartBar", "w-5 h-5 text-cyan-600")}
              Custom Quote Calculator
            </h3>
            <div className="space-y-4">
              {/* Users Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={calculatorValues.users}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, users: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="text-center text-sm text-cyan-600 dark:text-cyan-400 mt-1 font-semibold">
                  {calculatorValues.users} users
                </div>
              </div>

              {/* SKUs Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of SKUs
                </label>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={calculatorValues.skus}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, skus: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="text-center text-sm text-cyan-600 dark:text-cyan-400 mt-1 font-semibold">
                  {calculatorValues.skus.toLocaleString()} SKUs
                </div>
              </div>

              {/* Locations Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Locations
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={calculatorValues.locations}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, locations: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="text-center text-sm text-cyan-600 dark:text-cyan-400 mt-1 font-semibold">
                  {calculatorValues.locations} {calculatorValues.locations === 1 ? 'location' : 'locations'}
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Add-ons</label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.addons.advancedAnalytics}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      addons: { ...calculatorValues.addons, advancedAnalytics: e.target.checked }
                    })}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Advanced Analytics (+$100/mo)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.addons.customIntegrations}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      addons: { ...calculatorValues.addons, customIntegrations: e.target.checked }
                    })}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Custom Integrations (+$200/mo)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.addons.dedicatedSupport}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      addons: { ...calculatorValues.addons, dedicatedSupport: e.target.checked }
                    })}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Dedicated Account Manager (+$300/mo)</span>
                </label>
              </div>

              {/* Annual Billing Toggle */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.annualBilling}
                    onChange={(e) => setCalculatorValues({ ...calculatorValues, annualBilling: e.target.checked })}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Annual billing <span className="text-green-600 dark:text-green-400">(save 20%)</span></span>
                </label>
              </div>

              {/* Price Display */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">${estimatedPrice}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="mt-4 inline-block px-6 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request This Quote
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">*Final pricing may vary based on specific requirements</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ENTERPRISE FEATURES ==================== */}
        <div className="mb-12 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-cyan-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Features</h3>
            <p className="text-gray-600 dark:text-gray-400">Everything in Business, plus:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="text-cyan-600 dark:text-cyan-400 text-2xl">
                  {getIcon(feature.icon, "w-6 h-6")}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== POPULAR QUESTIONS ==================== */}
        {popularQuestions.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Popular Sales Questions
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {popularQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(question)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND ACTION BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search sales questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {getIcon("HiOutlineX", "w-5 h-5")}
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                ? 'bg-cyan-600 text-white border-cyan-600'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon("HiOutlineFilter", "w-4 h-4")}
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="helpful">Most Helpful</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Export FAQs"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Print FAQs"
            >
              {getIcon("HiOutlinePrinter", "w-4 h-4")}
            </button>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                      ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                        ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {getIcon(category.icon, "w-3 h-3")}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>
            {(activeCategory !== 'all' || sortBy !== 'recent') && (
              <div className="mt-4 text-right">
                <button
                  onClick={clearFilters}
                  className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== FAQ ACCORDION ==================== */}
        <div className="max-w-6xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => {
            const isSaved = savedFaqs.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                >
                  <div className="flex items-start gap-3 pr-4">
                    <div className="text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {getIcon(faq.icon, "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {highlightText(faq.question, searchQuery)}
                      </div>
                      {faq.tags && faq.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {faq.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }}
                      className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-cyan-600' : 'text-gray-400 hover:text-cyan-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      aria-label={isSaved ? "Remove from saved" : "Save question"}
                    >
                      {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-cyan-600' : ''}`)}
                    </button>
                    <div className="text-cyan-500 dark:text-cyan-400">
                      {openFaq === index ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                    </div>
                  </div>
                </div>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlightText(faq.answer, searchQuery)}
                    </p>
                    {faq.link && (
                      <Link
                        href={faq.link}
                        className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                      >
                        Learn more
                        {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                      </Link>
                    )}

                    {/* Helpful Section */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                        <button
                          onClick={() => handleHelpful(faq.id, true)}
                          className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === true
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                            }`}
                        >
                          {getIcon("HiOutlineThumbUp", "w-4 h-4")}
                          Yes
                        </button>
                        <button
                          onClick={() => handleHelpful(faq.id, false)}
                          className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === false
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                            }`}
                        >
                          {getIcon("HiOutlineThumbDown", "w-4 h-4")}
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineBookmark", "w-5 h-5 text-cyan-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-cyan-600 dark:text-cyan-400">
                      {getIcon(faq.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                      <button
                        onClick={() => {
                          setActiveCategory(faq.category);
                          setSearchQuery('');
                          setOpenFaq(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-cyan-600 dark:text-cyan-400 mt-1 hover:underline"
                      >
                        View in {categories.find(c => c.id === faq.category)?.name}
                      </button>
                    </div>
                    <button
                      onClick={() => handleSaveFaq(faq.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {getIcon("HiOutlineX", "w-4 h-4")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SALES RESOURCES SECTION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Sales Brochure Card */}
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-cyan-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400">
              {getIcon("HiOutlineDownload", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sales Brochure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download our comprehensive sales brochure with product overview and features
            </p>
            <Link
              href="/downloads/sales-brochure.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
              Download Brochure
            </Link>
          </div>

          {/* Product Demo Card */}
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-cyan-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400">
              {getIcon("HiOutlinePlay", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Product Demo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Watch a recorded product demo to see the platform in action
            </p>
            <Link
              href="/videos/demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlinePlay", "w-4 h-4")}
              Watch Demo
            </Link>
          </div>

          {/* Case Studies Card */}
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-cyan-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400">
              {getIcon("HiOutlineBookOpen", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See how businesses like yours succeed with our platform
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineBookOpen", "w-4 h-4")}
              Read Case Studies
            </Link>
          </div>
        </div>

        {/* ==================== CONTACT FORM MODAL ==================== */}
        {showContactForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
            role="dialog"
            aria-label="Sales contact form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Sales</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company *</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                      <select
                        value={contactForm.companySize}
                        onChange={(e) => setContactForm({ ...contactForm, companySize: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                      <select
                        value={contactForm.timeline}
                        onChange={(e) => setContactForm({ ...contactForm, timeline: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      >
                        <option value="asap">ASAP (within 2 weeks)</option>
                        <option value="next-month">Next month</option>
                        <option value="quarter">Next quarter</option>
                        <option value="planning">Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Contact</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={contactForm.preferredContact === 'email'}
                            onChange={(e) => setContactForm({ ...contactForm, preferredContact: e.target.value })}
                            className="w-4 h-4 text-cyan-600"
                          />
                          {getIcon("HiOutlineMail", "w-4 h-4 text-gray-500")}
                          <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={contactForm.preferredContact === 'phone'}
                            onChange={(e) => setContactForm({ ...contactForm, preferredContact: e.target.value })}
                            className="w-4 h-4 text-cyan-600"
                          />
                          {getIcon("HiOutlinePhone", "w-4 h-4 text-gray-500")}
                          <span className="text-sm text-gray-700 dark:text-gray-300">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="chat"
                            checked={contactForm.preferredContact === 'chat'}
                            onChange={(e) => setContactForm({ ...contactForm, preferredContact: e.target.value })}
                            className="w-4 h-4 text-cyan-600"
                          />
                          {getIcon("HiOutlineChat", "w-4 h-4 text-gray-500")}
                          <span className="text-sm text-gray-700 dark:text-gray-300">Chat</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your business needs and requirements..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Request Consultation
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="flex justify-center mb-3 text-green-500">
                      {getIcon("HiOutlineCheckCircle", "w-12 h-12")}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Request Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">A sales representative will contact you within 24 hours.</p>
                  </div>
                )}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">We'll never share your information with third parties.</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SCHEDULE DEMO CTA ==================== */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineCalendar", "w-6 h-6 text-cyan-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              Ready to see the platform in action?
            </span>
            <Link
              href={config?.demoLink || "/schedule-demo"}
              className="px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Schedule a Demo
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== CONTACT SALES CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineUsers", "w-6 h-6 text-cyan-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Have questions about pricing or need a custom quote? Our sales team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact-sales"}
              className="px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Sales"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== ENTERPRISE GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Enterprise plans include dedicated account manager and custom SLAs"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
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
          background: #0891b2;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #06b6d4;
        }
        .dark input[type="range"] {
          background: #374151;
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
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

export default SalesInquiriesSection2;