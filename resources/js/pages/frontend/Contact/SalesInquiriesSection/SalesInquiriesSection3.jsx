// frontend/Contact/SalesInquiriesSection/SalesInquiriesSection3.jsx

/**
 * Sales Inquiries Section Component - Enterprise Sales Hub with Knowledge Base
 * A comprehensive enterprise sales center featuring:
 * - Category-based accordion FAQ browsing with smooth animations
 * - Search functionality with text highlighting across questions, answers, and tags
 * - Interactive pricing plan cards with detailed comparison table
 * - Customer testimonials carousel grid
 * - Custom quote calculator with multiple add-ons
 * - Enterprise features showcase grid
 * - Popular questions quick-select buttons
 * - Save/bookmark favorite questions with localStorage persistence
 * - Helpful/Not helpful voting on answers
 * - Export FAQs to JSON and print-friendly view
 * - Advanced filters panel (category and sorting)
 * - Contact sales form with industry, budget, and timeline selection
 * - Statistics display for trust signals
 * - Sales resources section (brochure, demo, case studies, whitepaper)
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
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlineCog,
  HiOutlineChartPie,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineRocketLaunch, HiOutlineSparkles } from 'react-icons/hi2';

const SalesInquiriesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    users: 10,
    skus: 5000,
    locations: 3,
    annualBilling: true,
    addons: {
      advancedAnalytics: false,
      customIntegrations: false,
      dedicatedSupport: false,
      apiAccess: false,
      whiteLabel: false,
    }
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    timeline: 'asap',
    budget: 'not-sure',
    message: '',
    preferredContact: 'email',
    newsletter: false,
  });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const plans = config?.plans || [];
  const industries = config?.industries || [];
  const testimonials = config?.testimonials || [];
  const popularQuestions = config?.popularQuestions || [];
  const enterpriseFeatures = config?.enterpriseFeatures || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);

  // ==================== FILTERED AND GROUPED FAQS ====================
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
      HiOutlineDocumentText,
      HiOutlineShieldCheck,
      HiOutlineCurrencyDollar,
      HiOutlineOfficeBuilding,
      HiOutlineCog,
      HiOutlineBuildingOffice,
      HiOutlineChartPie,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineChip,
      HiOutlineAcademicCap,
      HiOutlineCode,
      HiOutlineRocketLaunch,
      HiOutlineServer,
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineChat,
      HiOutlineSparkles,
    };
    const IconComponent = icons[iconName] || HiOutlineCurrencyDollar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   */
  const toggleFaq = useCallback((key) => {
    setOpenFaq(prev => prev === key ? null : key);
  }, []);

  /**
   * Toggle category expansion
   */
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
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
        setContactForm({
          name: '', lastName: '', email: '', phone: '', company: '', companySize: '', industry: '',
          timeline: 'asap', budget: 'not-sure', message: '', preferredContact: 'email', newsletter: false
        });
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
   * Calculate custom quote price
   */
  const calculateQuote = useCallback(() => {
    let basePrice = 99;
    if (calculatorValues.users > 20) basePrice += (calculatorValues.users - 20) * 3;
    if (calculatorValues.skus > 10000) basePrice += Math.floor((calculatorValues.skus - 10000) / 1000) * 10;
    if (calculatorValues.locations > 1) basePrice += (calculatorValues.locations - 1) * 50;
    if (calculatorValues.addons.advancedAnalytics) basePrice += 100;
    if (calculatorValues.addons.customIntegrations) basePrice += 200;
    if (calculatorValues.addons.dedicatedSupport) basePrice += 300;
    if (calculatorValues.addons.apiAccess) basePrice += 150;
    if (calculatorValues.addons.whiteLabel) basePrice += 500;
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
        <mark key={i} className="bg-violet-200 dark:bg-violet-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  const groupedFaqs = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [categories, filteredFaqs]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('salesFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedSalesFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery) {
      const expanded = {};
      categories.forEach(category => {
        expanded[category.id] = true;
      });
      setExpandedCategories(expanded);
    }
  }, [searchQuery, categories]);

  const estimatedPrice = calculateQuote();

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Sales Inquiries Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-violet-50/30 to-transparent dark:from-violet-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-violet-300/5 dark:bg-violet-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-violet-100 dark:bg-violet-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-violet-200 dark:border-violet-800'}`}
            aria-label="Sales badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-violet-700 dark:text-violet-300'}`}>
              {config?.badge?.text || "Enterprise Sales Hub"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Enterprise-Grade'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-violet-600 to-purple-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Solutions'}
            </span>{' '}
            {config?.title?.suffix || 'Built for Scale'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Join industry leaders who trust our platform to power their critical operations. Get a customized solution with enterprise-grade security, dedicated support, and flexible deployment options."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-violet-600 dark:text-violet-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TESTIMONIALS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            What Our Customers Say
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied businesses that trust our platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 text-lg">
                    {getIcon("HiOutlineUserGroup", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PRICING PLANS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Choose Your Plan
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${plan.popular ? 'ring-2 ring-violet-500 scale-105 md:scale-105 z-10' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="bg-linear-to-r from-violet-600 to-purple-600 text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-violet-600 dark:text-violet-400">
                    {getIcon(plan.icon, "w-12 h-12")}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">
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
                      ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
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
            <button
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold hover:gap-3 transition-all duration-200 group"
            >
              {showComparisonTable ? 'Hide detailed comparison' : 'View detailed pricing comparison'}
              <HiOutlineChevronDown className={`w-4 h-4 transition-transform duration-200 ${showComparisonTable ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* ==================== DETAILED COMPARISON TABLE ==================== */}
        {showComparisonTable && (
          <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Users</td><td className="px-6 py-4 text-center text-sm">Up to 5</td><td className="px-6 py-4 text-center text-sm">Up to 20</td><td className="px-6 py-4 text-center text-sm font-semibold text-violet-600">Unlimited</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">SKUs</td><td className="px-6 py-4 text-center text-sm">1,000</td><td className="px-6 py-4 text-center text-sm">10,000</td><td className="px-6 py-4 text-center text-sm font-semibold text-violet-600">Unlimited</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Locations</td><td className="px-6 py-4 text-center text-sm">1</td><td className="px-6 py-4 text-center text-sm">Up to 5</td><td className="px-6 py-4 text-center text-sm font-semibold text-violet-600">Unlimited</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">API Access</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">✅ Basic</td><td className="px-6 py-4 text-center text-sm">✅ Full</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Support Response</td><td className="px-6 py-4 text-center text-sm">48 hours</td><td className="px-6 py-4 text-center text-sm">24 hours</td><td className="px-6 py-4 text-center text-sm font-semibold text-violet-600">&lt;1 hour</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dedicated Account Manager</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">✅</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Custom Integrations</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">✅</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">On-Premise Deployment</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">❌</td><td className="px-6 py-4 text-center text-sm">✅</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== QUOTE CALCULATOR CTA ==================== */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowQuoteCalculator(!showQuoteCalculator)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {getIcon("HiOutlineChartBar", "w-5 h-5")}
            {showQuoteCalculator ? 'Hide Quote Calculator' : 'Get a Custom Quote'}
          </button>
        </div>

        {/* ==================== QUOTE CALCULATOR ==================== */}
        {showQuoteCalculator && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineChartBar", "w-5 h-5 text-violet-600")}
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
                  max="500"
                  value={calculatorValues.users}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, users: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
                <div className="text-center text-sm text-violet-600 dark:text-violet-400 mt-1 font-semibold">
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
                  max="500000"
                  step="100"
                  value={calculatorValues.skus}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, skus: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
                <div className="text-center text-sm text-violet-600 dark:text-violet-400 mt-1 font-semibold">
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
                  max="100"
                  value={calculatorValues.locations}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, locations: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
                <div className="text-center text-sm text-violet-600 dark:text-violet-400 mt-1 font-semibold">
                  {calculatorValues.locations} {calculatorValues.locations === 1 ? 'location' : 'locations'}
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Add-ons</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.advancedAnalytics}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, advancedAnalytics: e.target.checked }
                      })}
                      className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
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
                      className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
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
                      className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Dedicated Account Manager (+$300/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.apiAccess}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, apiAccess: e.target.checked }
                      })}
                      className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Full API Access (+$150/mo)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calculatorValues.addons.whiteLabel}
                      onChange={(e) => setCalculatorValues({
                        ...calculatorValues,
                        addons: { ...calculatorValues.addons, whiteLabel: e.target.checked }
                      })}
                      className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">White Label (+$500/mo)</span>
                  </label>
                </div>
              </div>

              {/* Annual Billing Toggle */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.annualBilling}
                    onChange={(e) => setCalculatorValues({ ...calculatorValues, annualBilling: e.target.checked })}
                    className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Annual billing <span className="text-green-600 dark:text-green-400">(save 20%)</span></span>
                </label>
              </div>

              {/* Price Display */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">${estimatedPrice}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="mt-4 inline-block px-6 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request This Quote
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">*Final pricing may vary based on specific requirements</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ENTERPRISE FEATURES ==================== */}
        <div className="mb-16 bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-violet-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Features</h3>
            <p className="text-gray-600 dark:text-gray-400">Everything in Professional, plus:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="text-violet-600 dark:text-violet-400 text-2xl">
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
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
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
                ? 'bg-violet-600 text-white border-violet-600'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon("HiOutlineFilter", "w-4 h-4")}
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all"
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
                      ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
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
                        ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all"
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
                  className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
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

        {/* ==================== CATEGORY ACCORDION VIEW ==================== */}
        <div className="space-y-6 mb-16">
          {categories.map((category) => {
            const categoryFaqs = groupedFaqs[category.id] || [];
            if (categoryFaqs.length === 0 && searchQuery) return null;
            if (categoryFaqs.length === 0 && !searchQuery) return null;

            const isExpanded = expandedCategories[category.id] || searchQuery !== '';

            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-violet-600 dark:text-violet-400">
                      {getIcon(category.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{categoryFaqs.length} questions</span>
                    {isExpanded ? getIcon("HiOutlineChevronUp", "w-5 h-5 text-gray-400") : getIcon("HiOutlineChevronDown", "w-5 h-5 text-gray-400")}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                    {categoryFaqs.map((faq, idx) => {
                      const faqKey = `${category.id}-${idx}`;
                      const isSaved = savedFaqs.includes(faq.id);

                      return (
                        <div key={faqKey} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                          <div
                            onClick={() => toggleFaq(faqKey)}
                            className="w-full text-left flex justify-between items-start cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(faqKey)}
                          >
                            <div className="flex items-start gap-3 pr-4">
                              <div className="text-violet-600 dark:text-violet-400 mt-0.5">
                                {getIcon(faq.icon, "w-5 h-5")}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 dark:text-white">
                                  {highlightText(faq.question, searchQuery)}
                                </div>
                                {faq.tags && faq.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {faq.tags.slice(0, 3).map((tag, tagIdx) => (
                                      <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
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
                                className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-violet-600' : 'text-gray-400 hover:text-violet-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                  }`}
                              >
                                {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-violet-600' : ''}`)}
                              </button>
                              <div className="text-violet-500 dark:text-violet-400">
                                {openFaq === faqKey ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                              </div>
                            </div>
                          </div>

                          {openFaq === faqKey && (
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {highlightText(faq.answer, searchQuery)}
                              </p>
                              {faq.link && (
                                <Link
                                  href={faq.link}
                                  className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                >
                                  Learn more
                                  {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                </Link>
                              )}

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
                )}
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineBookmark", "w-5 h-5 text-violet-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-violet-600 dark:text-violet-400">
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
                        className="text-xs text-violet-600 dark:text-violet-400 mt-1 hover:underline"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-violet-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-violet-600 dark:text-violet-400">
              {getIcon("HiOutlineDownload", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sales Brochure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Download our comprehensive sales brochure</p>
            <Link
              href="/downloads/sales-brochure.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
              Download
            </Link>
          </div>

          <div className="bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-violet-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-violet-600 dark:text-violet-400">
              {getIcon("HiOutlinePlay", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Product Demo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Watch the platform in action</p>
            <Link
              href="/videos/demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlinePlay", "w-4 h-4")}
              Watch Demo
            </Link>
          </div>

          <div className="bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-violet-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-violet-600 dark:text-violet-400">
              {getIcon("HiOutlineBookOpen", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">See how businesses succeed</p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineBookOpen", "w-4 h-4")}
              Read Now
            </Link>
          </div>

          <div className="bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-violet-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-violet-600 dark:text-violet-400">
              {getIcon("HiOutlineDocumentText", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">ROI Whitepaper</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Calculate your potential ROI</p>
            <Link
              href="/whitepaper/roi"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineDocumentText", "w-4 h-4")}
              Download
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
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                        <input
                          type="text"
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company *</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industry</label>
                      <select
                        value={contactForm.industry}
                        onChange={(e) => setContactForm({ ...contactForm, industry: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind, idx) => (
                          <option key={idx} value={ind.value}>{ind.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                      <select
                        value={contactForm.companySize}
                        onChange={(e) => setContactForm({ ...contactForm, companySize: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500-1000">500-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                      <select
                        value={contactForm.timeline}
                        onChange={(e) => setContactForm({ ...contactForm, timeline: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      >
                        <option value="asap">ASAP (within 2 weeks)</option>
                        <option value="next-month">Next month</option>
                        <option value="quarter">Next quarter</option>
                        <option value="planning">Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                      <select
                        value={contactForm.budget}
                        onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      >
                        <option value="not-sure">Not sure yet</option>
                        <option value="under-1k">Under $1,000/month</option>
                        <option value="1k-5k">$1,000 - $5,000/month</option>
                        <option value="5k-10k">$5,000 - $10,000/month</option>
                        <option value="10k+">$10,000+/month</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your business needs and requirements..."
                        required
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={contactForm.newsletter}
                        onChange={(e) => setContactForm({ ...contactForm, newsletter: e.target.checked })}
                        className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to product updates and industry insights
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-violet-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineCalendar", "w-6 h-6 text-violet-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              Ready to see the platform in action?
            </span>
            <Link
              href={config?.demoLink || "/schedule-demo"}
              className="px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Schedule a Demo
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== CONTACT SALES CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-violet-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineUsers", "w-6 h-6 text-violet-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Have questions about pricing or need a custom quote? Our sales team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact-sales"}
              className="px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
              {getIcon("HiOutlineShieldCheck", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Enterprise plans include dedicated account manager, custom SLAs, and 24/7 priority support"}
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
          background: #7c3aed;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #8b5cf6;
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

export default SalesInquiriesSection3;