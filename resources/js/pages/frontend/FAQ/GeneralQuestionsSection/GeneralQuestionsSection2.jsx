// frontend/FAQ/GeneralQuestionsSection/GeneralQuestionsSection2.jsx

/**
 * General Questions Section Component with Advanced Features
 * A comprehensive FAQ section featuring:
 * - Expandable accordion FAQ items with smooth animations
 * - Search functionality with text highlighting
 * - Category filters for organizing FAQs (General, Account, Billing, Features, Enterprise)
 * - Popular questions quick-select buttons
 * - Helpful/Not helpful voting on answers with localStorage persistence
 * - Live chat and email support cards
 * - Contact form modal for unanswered questions
 * - Statistics display (response time, satisfaction rate, active users, enterprise clients)
 * - Results count with clear search button
 * - Empty state with "Ask a Question" CTA
 * - Fully responsive and dark mode compatible with mark highlighting
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import { FaRegHandshake } from 'react-icons/fa';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRight,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineChat,
  HiOutlineMailOpen,
  HiOutlineClock,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineUserCircle,
  HiOutlineCreditCard,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineX,
} from 'react-icons/hi';

const GeneralQuestionsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', question: '' });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
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
      'question': HiOutlineQuestionMarkCircle,
      'arrow-right': HiOutlineArrowRight,
      'thumb-up': HiOutlineThumbUp,
      'thumb-down': HiOutlineThumbDown,
      'external-link': HiOutlineExternalLink,
      'chat': HiOutlineChat,
      'mail-open': HiOutlineMailOpen,
      'clock': HiOutlineClock,
      'star': HiOutlineStar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'user': HiOutlineUserCircle,
      'credit-card': HiOutlineCreditCard,
      'cog': HiOutlineCog,
      'shield': HiOutlineShieldCheck,
      'x': HiOutlineX,
      'handshake': FaRegHandshake,
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
      localStorage.setItem('faqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
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

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('faqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
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

  // Get category name helper
  const getCategoryName = useCallback((categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || categoryId;
  }, [categories]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="General Questions FAQ"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="FAQ badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "FAQ"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Frequently Asked'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Questions'}
            </span>{' '}
            {config?.title?.suffix || 'Got Questions? We Have Answers'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Find answers to common questions about our platform, features, and services."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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

        {/* ==================== POPULAR QUESTIONS SECTION ==================== */}
        {popularQuestions.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Popular Questions
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

        {/* ==================== SEARCH BAR ==================== */}
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
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search FAQ questions"
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

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all questions"
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeCategory === category.id
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Filter by ${category.name}`}
            >
              {getIcon(category.icon, "w-3 h-3")}
              {category.name}
            </button>
          ))}
        </div>

        {/* ==================== FAQ ACCORDION ==================== */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                    {getIcon(faq.icon || "question", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {highlightText(faq.question, searchQuery)}
                    </div>
                    {faq.category && (
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                        {getCategoryName(faq.category)}
                      </span>
                    )}
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
                <div className="text-blue-500 dark:text-blue-400">
                  {openFaq === index ? (
                    getIcon("chevron-up", "w-5 h-5")
                  ) : (
                    getIcon("chevron-down", "w-5 h-5")
                  )}
                </div>
              </button>
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
          ))}
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
                Ask a Question
              </button>
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Chat Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Chat with our support team for immediate assistance
            </p>
            <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              {getIcon("chat", "w-4 h-4")}
              Start Chat
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Available 24/7 for enterprise plans</p>
          </div>

          {/* Email Support Card */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
              {getIcon("mail-open", "w-10 h-10")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Send us your question and we'll respond within 24 hours
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
            aria-label="Ask a question form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ask a Question</h3>
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
                  <p className="text-gray-600 dark:text-gray-400">Our team will respond within 24 hours.</p>
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
              {config?.contactText || "Still have questions? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              {getIcon("arrow-right", "w-4 h-4")}
            </Link>
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default GeneralQuestionsSection2;