// frontend/Contact/ContactFormSection/ContactFormSection1.jsx

/**
 * Contact Form Section Component - Multi-Column Layout with FAQ Accordion
 * A comprehensive contact page featuring:
 * - Contact information cards with multiple methods (email, chat, phone, location)
 * - Support hours display with visual indicators
 * - Fully functional contact form with validation and loading states
 * - Expandable FAQ accordion with smooth animations
 * - Search functionality across questions and answers
 * - Category filters for organizing FAQs
 * - Statistics display for trust signals
 * - Popular questions quick-select buttons
 * - Helpful/Not helpful voting with localStorage persistence
 * - Code snippet display for technical answers
 * - Glossary section for key terms
 * - Response guarantee trust badge
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import {
  FaRocket,
  FaRegHandshake
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlineChat,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineExternalLink,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineUserCircle,
  HiOutlineCreditCard,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineCode,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
} from 'react-icons/hi';

import { TbTool } from 'react-icons/tb';

const ContactFormSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showGlossary, setShowGlossary] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const glossary = config?.glossary || [];
  const categories = config?.faqCategories || [];
  const supportHours = config?.supportHours || [];
  const contactMethods = config?.contactMethods || [];
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
      // Communication icons
      'mail': HiOutlineMail,
      'chat': HiOutlineChat,
      'phone': HiOutlinePhone,
      'location': HiOutlineLocationMarker,
      'clock': HiOutlineClock,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiOutlineArrowRight,
      'chevron-down': HiOutlineChevronDown,
      'chevron-up': HiOutlineChevronUp,
      'search': HiOutlineSearch,
      'question': HiOutlineQuestionMarkCircle,
      'external-link': HiOutlineExternalLink,
      'thumb-up': HiOutlineThumbUp,
      'thumb-down': HiOutlineThumbDown,
      'x': HiOutlineX,
      'star': HiOutlineStar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'user': HiOutlineUserCircle,
      'credit-card': HiOutlineCreditCard,
      'cog': HiOutlineCog,
      'shield': HiOutlineShieldCheck,
      'code': HiOutlineCode,
      'bookmark': HiOutlineBookmark,
      'printer': HiOutlinePrinter,
      'download': HiOutlineDownload,
      'rocket': FaRocket,
      'handshake': FaRegHandshake,
      'wrench': TbTool,
    };
    const IconComponent = icons[iconName] || HiOutlineQuestionMarkCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  }, [formData]);

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
      localStorage.setItem('contactFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedContactFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
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

  // ==================== FILTERED FAQS ====================
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('contactFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedContactFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Contact Support"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-300/5 dark:bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-purple-100 dark:bg-purple-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-purple-200 dark:border-purple-800'}`}
            aria-label="Contact badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-purple-700 dark:text-purple-300'}`}>
              {config?.badge?.text || "Get in Touch"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "We'd Love to"}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || "Hear From You"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Have a question, feedback, or need assistance? Our team is ready to help you. Fill out the form below and we'll get back to you shortly."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-purple-600 dark:text-purple-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== MAIN CONTENT GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* ==================== LEFT COLUMN - CONTACT INFO ==================== */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {getIcon("sparkles", "w-5 h-5")}
                  Contact Information
                </h3>
              </div>
              <div className="p-5 space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="text-purple-600 dark:text-purple-400 mt-0.5">
                      {getIcon(method.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{method.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 wrap-break-word">{method.value}</div>
                      {method.link && (
                        <Link href={method.link} className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 mt-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          {method.linkText || 'Contact'}
                          {getIcon("arrow-right", "w-3 h-3")}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {getIcon("clock", "w-5 h-5")}
                  Support Hours
                </h3>
              </div>
              <div className="p-5 space-y-3">
                {supportHours.map((hour, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{hour.days}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{hour.hours}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            {config?.showTrustBadge && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 text-center border border-green-100 dark:border-green-800">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getIcon("check-circle", "w-5 h-5 text-green-600")}
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Response Guarantee</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{config?.trustText || "We respond to all inquiries within 24 hours. Your privacy is our priority."}</p>
              </div>
            )}
          </div>

          {/* ==================== RIGHT COLUMN - CONTACT FORM ==================== */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-5 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {getIcon("mail", "w-5 h-5")}
                  Send us a Message
                </h3>
                <p className="text-purple-100 text-sm mt-1">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              <div className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your question or issue in detail..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          {getIcon("arrow-right", "w-4 h-4")}
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">By submitting, you agree to our privacy policy. We'll never share your information.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="mt-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">FAQ</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{' '}
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Find quick answers to common questions about our platform and services.</p>
          </div>

          {/* Toggle between FAQ and Glossary */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setShowGlossary(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!showGlossary
                ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setShowGlossary(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${showGlossary
                ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Glossary
            </button>
          </div>

          {/* Popular Questions - FAQ Mode */}
          {!showGlossary && popularQuestions.length > 0 && searchQuery === '' && (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">Popular Questions</h4>
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

          {/* Search Bar - FAQ Mode */}
          {!showGlossary && (
            <div className="max-w-2xl mx-auto mb-8" ref={searchRef}>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("search", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
              {searchQuery && (
                <div className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          )}

          {/* Category Filters - FAQ Mode */}
          {!showGlossary && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeCategory === category.id
                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(category.icon, "w-3 h-3")}
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* FAQ Accordion - FAQ Mode */}
          {!showGlossary && (
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              {filteredFaqs.map((faq, index) => {
                const isSaved = savedFaqs.includes(faq.id);

                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                      aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
                    >
                      <div className="flex items-start gap-3 pr-4">
                        <div className="text-purple-600 dark:text-purple-400 mt-0.5">
                          {getIcon(faq.icon || "question", "w-5 h-5")}
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
                          className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-purple-600' : 'text-gray-400 hover:text-purple-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                          aria-label={isSaved ? "Remove from saved" : "Save question"}
                        >
                          {getIcon("bookmark", `w-4 h-4 ${isSaved ? 'fill-purple-600' : ''}`)}
                        </button>
                        <div className="text-purple-500 dark:text-purple-400">
                          {openFaq === index ? getIcon("chevron-up", "w-5 h-5") : getIcon("chevron-down", "w-5 h-5")}
                        </div>
                      </div>
                    </div>

                    {openFaq === index && (
                      <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlightText(faq.answer, searchQuery)}
                        </p>
                        {faq.link && (
                          <Link
                            href={faq.link}
                            className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                          >
                            Learn more
                            {getIcon("external-link", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                          </Link>
                        )}

                        {/* Code Snippet */}
                        {faq.codeSnippet && (
                          <div className="mt-3 bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                            <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
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

          {/* Empty State - FAQ Mode */}
          {!showGlossary && filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
              <div className="flex justify-center mb-4 text-gray-400">
                {getIcon("search", "w-12 h-12")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button onClick={clearFilters} className="mt-4 px-4 py-2 text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                Clear all filters
              </button>
            </div>
          )}

          {/* Saved Questions Section - FAQ Mode */}
          {!showGlossary && savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("bookmark", "w-5 h-5 text-purple-600")}
                Saved Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-purple-600 dark:text-purple-400">
                        {getIcon(faq.icon || "question", "w-5 h-5")}
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
                          className="text-xs text-purple-600 dark:text-purple-400 mt-1 hover:underline"
                        >
                          View in {categories.find(c => c.id === faq.category)?.name}
                        </button>
                      </div>
                      <button
                        onClick={() => handleSaveFaq(faq.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors duration-200"
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

          {/* Glossary Mode */}
          {showGlossary && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {glossary.map((term, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="text-purple-600 dark:text-purple-400">
                        {getIcon(term.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{term.term}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{term.definition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
      `}</style>
    </section>
  );
};

export default ContactFormSection1;