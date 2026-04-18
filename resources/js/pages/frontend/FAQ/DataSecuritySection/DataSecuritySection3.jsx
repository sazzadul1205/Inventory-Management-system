// pages/frontend/FAQ/DataSecuritySection/DataSecuritySection3.jsx

/**
 * Data Security Section Component - Knowledge Base with Security Metrics
 * A comprehensive data security knowledge base featuring:
 * - Category-based accordion view for organized FAQ browsing
 * - Search functionality with text highlighting across questions, answers, and tags
 * - Popular questions quick-select buttons
 * - Multiple sorting options (Most Recent, Most Popular, Most Helpful)
 * - Save/Bookmark favorite questions with localStorage persistence
 * - Export FAQs to JSON file
 * - Print-friendly view for documentation
 * - Helpful/Not helpful voting on answers with localStorage persistence
 * - Security metrics dashboard with key performance indicators
 * - Security certifications grid with clickable report modal
 * - Compliance badges row with checkmark indicators
 * - Security report modal with downloadable PDF option
 * - Code snippet display for security configuration examples
 * - Statistics display (encryption standard, certifications, uptime, monitoring)
 * - Results count with clear search button
 * - Advanced filters panel (category and sorting options)
 * - Saved questions section for quick access
 * - Empty state with "Contact Security Team" CTA
 * - Security contact section with email, PGP key, and bug bounty info
 * - Contact form modal with concern type selection
 * - "Have more security questions" contact CTA with link
 * - Trust statement badge for reassurance
 * - Fully responsive and dark mode compatible with mark highlighting
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake, FaShieldAlt } from 'react-icons/fa';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineQuestionMarkCircle,
  HiOutlineExternalLink,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineLockClosed,
  HiOutlineClipboardCheck,
  HiOutlineKey,
  HiOutlineServer,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
} from 'react-icons/hi';

const DataSecuritySection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showSecurityReport, setShowSecurityReport] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', concernType: 'security', message: '' });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const certifications = config?.certifications || [];
  const securityMetrics = config?.securityMetrics || [];
  const complianceBadges = config?.complianceBadges || [];
  const popularQuestions = config?.popularQuestions || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);

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
      'check': HiOutlineCheck,
      'x': HiOutlineX,
      'question': HiOutlineQuestionMarkCircle,
      'external-link': HiOutlineExternalLink,
      'thumb-up': HiOutlineThumbUp,
      'thumb-down': HiOutlineThumbDown,
      'filter': HiOutlineFilter,
      'bookmark': HiOutlineBookmark,
      'printer': HiOutlinePrinter,
      'download': HiOutlineDownload,
      'lock': HiOutlineLockClosed,
      'clipboard': HiOutlineClipboardCheck,
      'key': HiOutlineKey,
      'server': HiOutlineServer,
      'document': HiOutlineDocumentText,
      'users': HiOutlineUserGroup,
      'clock': HiOutlineClock,
      'star': HiOutlineStar,
      'user-group': HiOutlineUsers,
      'mail': HiOutlineMail,
      'phone': HiOutlinePhone,
      'chart': HiOutlineChartBar,
      'trending': HiOutlineTrendingUp,
      'handshake': FaRegHandshake,
      'fa-shield': FaShieldAlt,
    };
    const IconComponent = icons[iconName] || HiOutlineShieldCheck;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {string} key - Unique key for the FAQ item
   */
  const toggleFaq = useCallback((key) => {
    setOpenFaq(prev => prev === key ? null : key);
  }, []);

  /**
   * Toggle category expansion
   * @param {string} categoryId - ID of the category to toggle
   */
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  /**
   * Handle helpful/unhelpful vote
   * @param {string|number} faqId - ID of the FAQ
   * @param {boolean} isHelpful - Whether the answer was helpful
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('securityFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedSecurityFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle contact form submission
   * @param {Event} e - Form submit event
   */
  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    // Simulate API call
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', concernType: 'security', message: '' });
      }, 2000);
    }, 500);
  }, [contactForm]);

  /**
   * Handle security report modal open
   * @param {Object} cert - Certification object
   */
  const openReportModal = useCallback((cert) => {
    setSelectedCert(cert);
    setShowSecurityReport(true);
  }, []);

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

  // ==================== FILTERED AND SORTED FAQS (MUST BE BEFORE HANDLEEXPORT) ====================
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

  // ==================== EXPORT HANDLER (AFTER FILTERED_FAQS) ====================
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
    linkElement.setAttribute('download', 'security-faq-export.json');
    linkElement.click();
  }, [filteredFaqs, categories]);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // ==================== GROUPED FAQS (AFTER FILTERED_FAQS) ====================
  // Group FAQs by category
  const groupedFaqs = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [categories, filteredFaqs]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('securityFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedSecurityFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
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

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Data Security Knowledge Base"
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
            aria-label="Data security badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Data Security"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Your Data is'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Secure'}
            </span>{' '}
            {config?.title?.suffix || 'with Us'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Learn about our security practices, compliance standards, and how we protect your sensitive information."}
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

        {/* ==================== SECURITY METRICS DASHBOARD ==================== */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Security Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-blue-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {getIcon(metric.icon, "w-10 h-10")}
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== CERTIFICATIONS GRID ==================== */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Security Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => openReportModal(cert)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-4 text-center border border-gray-100 dark:border-gray-700 cursor-pointer group"
              >
                <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                  {getIcon(cert.icon, "w-8 h-8")}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.description}</div>
                <div className="mt-2 opacity-0 group-hover:opacity-100 text-blue-600 dark:text-blue-400 text-xs transition-opacity duration-200 flex items-center justify-center gap-1">
                  View Report {getIcon("arrow-right", "w-3 h-3")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== COMPLIANCE BADGES ROW ==================== */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {complianceBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
                {getIcon("check", "w-4 h-4 text-green-600")}
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== POPULAR QUESTIONS SECTION ==================== */}
        {popularQuestions.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Popular Security Questions
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
              placeholder="Search security questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search security questions"
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
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Export FAQs"
              aria-label="Export FAQs"
            >
              {getIcon("download", "w-4 h-4")}
            </button>
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

        {/* ==================== CATEGORY ACCORDION VIEW ==================== */}
        <div className="space-y-6 mb-12">
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
                  aria-label={isExpanded ? `Collapse ${category.name} category` : `Expand ${category.name} category`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      {getIcon(category.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{categoryFaqs.length} questions</span>
                    {isExpanded ? (
                      getIcon("chevron-up", "w-5 h-5 text-gray-400")
                    ) : (
                      getIcon("chevron-down", "w-5 h-5 text-gray-400")
                    )}
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
                            aria-label={openFaq === faqKey ? "Collapse answer" : "Expand answer"}
                          >
                            <div className="flex items-start gap-3 pr-4">
                              <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                                {getIcon(faq.icon || "shield", "w-5 h-5")}
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
                                className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                aria-label={isSaved ? "Remove from saved" : "Save question"}
                              >
                                {getIcon("bookmark", `w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`)}
                              </button>
                              <div className="text-blue-500 dark:text-blue-400">
                                {openFaq === faqKey ? (
                                  getIcon("chevron-up", "w-5 h-5")
                                ) : (
                                  getIcon("chevron-down", "w-5 h-5")
                                )}
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
                                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                >
                                  Learn more
                                  {getIcon("external-link", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                </Link>
                              )}

                              {/* Security Code Snippet */}
                              {faq.codeSnippet && (
                                <div className="mt-3 bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                                  <pre className="text-green-400 text-xs font-mono">
                                    <code>{faq.codeSnippet}</code>
                                  </pre>
                                </div>
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
                Contact Security Team
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
                      {getIcon(faq.icon || "shield", "w-5 h-5")}
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

        {/* ==================== SECURITY REPORT MODAL ==================== */}
        {showSecurityReport && selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowSecurityReport(false)}
            role="dialog"
            aria-label="Security report modal"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <div className="flex items-center gap-2">
                  {getIcon(selectedCert.icon, "w-6 h-6 text-blue-600")}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCert.name} Report</h3>
                </div>
                <button
                  onClick={() => setShowSecurityReport(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("shield", "w-5 h-5 text-blue-600")}
                      <h4 className="font-bold text-gray-900 dark:text-white">{selectedCert.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last audit: {selectedCert.lastAudit || 'December 2023'}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{selectedCert.reportSummary || 'No material findings. All controls operating effectively.'}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("check", "w-5 h-5 text-green-600")}
                      <h4 className="font-bold text-gray-900 dark:text-white">Certification Details</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Valid through: {selectedCert.validThrough || 'December 2025'}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Certificate #: {selectedCert.certificateNumber || 'SOC-2-2023-0421'}</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <button className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      {getIcon("download", "w-4 h-4 inline mr-2")}
                      Download Full Report (PDF)
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">Available under NDA. Contact security team for access.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECURITY CONTACT SECTION ==================== */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex mb-3 text-blue-600 dark:text-blue-400">
                {getIcon("fa-shield", "w-10 h-10")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Security Concerns?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have discovered a security vulnerability or have security-related questions, please contact our security team.
              </p>
              <button
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {getIcon("shield", "w-4 h-4")}
                Contact Security Team
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="font-mono text-blue-600 dark:text-blue-400 text-base">security@inventory-platform.com</div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">PGP Key available upon request</div>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">24/7 Security Incident Response</div>
                <div className="mt-2 text-xs text-green-600 dark:text-green-400">Bug Bounty Program Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT FORM MODAL ==================== */}
        {showContactForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
            role="dialog"
            aria-label="Security contact form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Security Contact</h3>
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Concern Type</label>
                    <select
                      value={contactForm.concernType}
                      onChange={(e) => setContactForm({ ...contactForm, concernType: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="security">Security Vulnerability</option>
                      <option value="compliance">Compliance Question</option>
                      <option value="data">Data Privacy</option>
                      <option value="other">Other Security Concern</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your security concern..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Report
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-3 text-green-500">
                    {getIcon("check", "w-12 h-12")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Report Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Our security team will respond within 24 hours.</p>
                </div>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                For critical security issues, please call our emergency hotline.
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
              {config?.contactText || "Have more security questions? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Security Team"}
              {getIcon("arrow-right", "w-4 h-4")}
            </Link>
          </div>
        </div>

        {/* ==================== TRUST STATEMENT ==================== */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
            {getIcon("shield", "w-4 h-4 text-green-600")}
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {config?.trustText || "Your data is protected with bank-grade security. We never sell or share your information."}
            </span>
          </div>
        </div>
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

export default DataSecuritySection3;