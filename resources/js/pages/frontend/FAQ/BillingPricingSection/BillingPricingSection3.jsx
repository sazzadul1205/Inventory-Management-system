/**
 * Billing & Pricing Section Component - Help Center with Price Calculator
 * A comprehensive billing FAQ and pricing help center featuring:
 * - Expandable accordion FAQ items with smooth animations
 * - Search functionality with text highlighting across questions, answers, and tags
 * - Category filters for organizing FAQs (Pricing Plans, Billing, Payment Methods, Invoicing)
 * - Popular questions quick-select buttons
 * - Interactive price calculator with real-time updates
 * - Helpful/Not helpful voting on answers with localStorage persistence
 * - Save/Bookmark favorite questions with localStorage persistence
 * - Multiple sorting options (Most Recent, Most Popular, Most Helpful)
 * - Advanced filters panel (category and sorting)
 * - Print-friendly view for documentation
 * - Live chat and email support cards
 * - Contact form modal for unanswered billing questions
 * - Statistics display (satisfaction rate, response time, active customers)
 * - Results count with clear search button
 * - Saved questions section for quick access
 * - Empty state with "Ask a Billing Question" CTA
 * - Money-back guarantee badge for trust signals
 * - Fully responsive and dark mode compatible with mark highlighting
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake, FaRegMoneyBillAlt } from 'react-icons/fa';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineQuestionMarkCircle,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineChat,
  HiOutlineMailOpen,
  HiOutlinePrinter,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlineCalculator,
  HiOutlineClock,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineCreditCard,
  HiOutlineCash,
  HiOutlineReceiptTax,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineBadgeCheck,
  HiOutlineCheckCircle,
} from 'react-icons/hi';

const BillingPricingSection3 = ({ config }) => {
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
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', question: '' });
  const [calculatorValues, setCalculatorValues] = useState({ users: 10, skus: 5000, locations: 3, annualBilling: true });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'chevron-down': HiOutlineChevronDown,
      'chevron-up': HiOutlineChevronUp,
      'search': HiOutlineSearch,
      'shield': HiOutlineShieldCheck,
      'arrow-right': HiOutlineArrowRight,
      'x': HiOutlineX,
      'question': HiOutlineQuestionMarkCircle,
      'thumb-up': HiOutlineThumbUp,
      'thumb-down': HiOutlineThumbDown,
      'external-link': HiOutlineExternalLink,
      'chat': HiOutlineChat,
      'mail-open': HiOutlineMailOpen,
      'printer': HiOutlinePrinter,
      'filter': HiOutlineFilter,
      'bookmark': HiOutlineBookmark,
      'calculator': HiOutlineCalculator,
      'clock': HiOutlineClock,
      'star': HiOutlineStar,
      'users': HiOutlineUsers,
      'credit-card': HiOutlineCreditCard,
      'cash': HiOutlineCash,
      'receipt': HiOutlineReceiptTax,
      'dollar': HiOutlineCurrencyDollar,
      'calendar': HiOutlineCalendar,
      'badge-check': HiOutlineBadgeCheck,
      'check': HiOutlineCheckCircle,
      'handshake': FaRegHandshake,
      'money-bill': FaRegMoneyBillAlt,
    };
    const IconComponent = icons[iconName] || HiOutlineQuestionMarkCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {number} index - Index of the FAQ to toggle
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Handle helpful/unhelpful vote
   * @param {string|number} faqId - ID of the FAQ
   * @param {boolean} isHelpful - Whether the answer was helpful
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('billingFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle save/unsave FAQ
   * @param {string|number} faqId - ID of the FAQ to save or unsave
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedBillingFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle contact form submission
   * @param {Event} e - Form submit event
   */
  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.question) return;

    // Simulate API call
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', question: '' });
      }, 2000);
    }, 500);
  }, [contactForm]);

  /**
   * Calculate estimated monthly price based on calculator values
   * @returns {number} Estimated monthly price
   */
  const calculatePrice = useCallback(() => {
    let basePrice = 49;
    if (calculatorValues.users > 3) basePrice += (calculatorValues.users - 3) * 5;
    if (calculatorValues.skus > 500) basePrice += Math.floor((calculatorValues.skus - 500) / 100) * 0.5;
    if (calculatorValues.locations > 1) basePrice += (calculatorValues.locations - 1) * 50;
    if (calculatorValues.annualBilling) basePrice = basePrice * 0.8;
    return Math.round(basePrice);
  }, [calculatorValues]);

  /**
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    searchRef.current?.focus();
  }, []);

  /**
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('recent');
  }, []);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Highlight search matches in text
   * @param {string} text - Text to highlight
   * @param {string} query - Search query to highlight
   * @returns {JSX.Element|string} Text with highlighted matches
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('billingFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedBillingFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  // ==================== FILTERED AND SORTED FAQS ====================
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

  const estimatedPrice = calculatePrice();

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Billing & Pricing Help Center"
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
            aria-label="Billing FAQ badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Help Center"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Billing &'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Pricing'}
            </span>{' '}
            {config?.title?.suffix || 'Help Center'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Find answers to common questions about our pricing plans, billing policies, and payment options. Use our price calculator to estimate your monthly cost."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== PRICE CALCULATOR CTA ==================== */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPriceCalculator(!showPriceCalculator)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label={showPriceCalculator ? "Hide price calculator" : "Show price calculator"}
          >
            {getIcon("calculator", "w-5 h-5")}
            {showPriceCalculator ? 'Hide Price Calculator' : 'Calculate Your Price'}
          </button>
        </div>

        {/* ==================== PRICE CALCULATOR ==================== */}
        {showPriceCalculator && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("calculator", "w-5 h-5 text-blue-600")}
              Price Calculator
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
                  max="50"
                  value={calculatorValues.users}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, users: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  aria-label="Number of users slider"
                />
                <div className="text-center text-sm text-blue-600 dark:text-blue-400 mt-1 font-semibold">
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
                  max="50000"
                  step="100"
                  value={calculatorValues.skus}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, skus: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  aria-label="Number of SKUs slider"
                />
                <div className="text-center text-sm text-blue-600 dark:text-blue-400 mt-1 font-semibold">
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
                  max="20"
                  value={calculatorValues.locations}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, locations: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  aria-label="Number of locations slider"
                />
                <div className="text-center text-sm text-blue-600 dark:text-blue-400 mt-1 font-semibold">
                  {calculatorValues.locations} {calculatorValues.locations === 1 ? 'location' : 'locations'}
                </div>
              </div>

              {/* Annual Billing Toggle */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.annualBilling}
                    onChange={(e) => setCalculatorValues({ ...calculatorValues, annualBilling: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Annual billing <span className="text-green-600 dark:text-green-400">(save 20%)</span></span>
                </label>
              </div>

              {/* Price Display */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">${estimatedPrice}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">per month</div>
                <Link
                  href="/signup"
                  className="mt-4 inline-block px-6 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== POPULAR QUESTIONS SECTION ==================== */}
        {popularQuestions.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Popular Billing Questions
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {popularQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(question)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                  aria-label={`Search for: ${question}`}
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
              {getIcon("search", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search billing questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search billing questions"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("x", "w-5 h-5")}
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              aria-label="Toggle filters"
            >
              {getIcon("filter", "w-4 h-4")}
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
              aria-label="Sort by"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="helpful">Most Helpful</option>
            </select>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Print FAQs"
              aria-label="Print FAQs"
            >
              {getIcon("printer", "w-4 h-4")}
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
                      ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
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
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
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
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
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
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => {
            const isSaved = savedFaqs.includes(faq.id);

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Header - Not a button, just a div with click handler on wrapper */}
                <div
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                  aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                >
                  <div className="flex items-start gap-3 pr-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                      {getIcon(faq.icon || "credit-card", "w-5 h-5")}
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
                    {/* Save button - separate, not nested inside a button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }}
                      className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      aria-label={isSaved ? "Remove from saved" : "Save question"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`)}
                    </button>
                    <div className="text-blue-500 dark:text-blue-400">
                      {openFaq === index ? (
                        getIcon("chevron-up", "w-5 h-5")
                      ) : (
                        getIcon("chevron-down", "w-5 h-5")
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlightText(faq.answer, searchQuery)}
                    </p>
                    {faq.link && (
                      <Link
                        href={faq.link}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                      >
                        Learn more
                        {getIcon("external-link", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
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
                          aria-label="Mark as helpful"
                        >
                          {getIcon("thumb-up", "w-4 h-4")}
                          Yes
                        </button>
                        <button
                          onClick={() => handleHelpful(faq.id, false)}
                          className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === false
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                            }`}
                          aria-label="Mark as not helpful"
                        >
                          {getIcon("thumb-down", "w-4 h-4")}
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
              {getIcon("search", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Ask a Billing Question
              </button>
            </div>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("bookmark", "w-5 h-5 text-blue-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      {getIcon(faq.icon || "credit-card", "w-5 h-5")}
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
                        className="text-xs text-blue-600 dark:text-blue-400 mt-1 hover:underline"
                      >
                        View in {categories.find(c => c.id === faq.category)?.name}
                      </button>
                    </div>
                    <button
                      onClick={() => handleSaveFaq(faq.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Remove from saved"
                    >
                      {getIcon("x", "w-4 h-4")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CONTACT SUPPORT SECTION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Live Chat Card */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
              {getIcon("chat", "w-10 h-10")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Billing Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Chat with our billing team for immediate assistance
            </p>
            <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              {getIcon("chat", "w-4 h-4")}
              Start Chat
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Available Mon-Fri, 9am-6pm EST</p>
          </div>

          {/* Email Support Card */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
              {getIcon("mail-open", "w-10 h-10")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Send us your billing question and we'll respond within 24 hours
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {getIcon("mail-open", "w-4 h-4")}
              Send Email
            </button>
          </div>
        </div>

        {/* ==================== CONTACT FORM MODAL ==================== */}
        {showContactForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
            role="dialog"
            aria-label="Billing question form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Billing Question</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              {!contactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question *</label>
                    <textarea
                      rows={4}
                      value={contactForm.question}
                      onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please include any relevant details about your billing inquiry..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Question
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-3 text-green-500">
                    {getIcon("check", "w-12 h-12")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Question Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Our billing team will respond within 24 hours.</p>
                </div>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                We'll never share your email with third parties.
              </p>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("question", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Still have billing questions? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Billing Support"}
              {getIcon("arrow-right", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== MONEY BACK GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("shield", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "30-day money-back guarantee on all annual plans"}
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
        mark {
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
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
          background: #3b82f6;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
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

export default BillingPricingSection3;