// frontend/Contact/SupportRequestsSection/SupportRequestsSection2.jsx

/**
 * Support Requests Section Component - Advanced Help Center with Ticket System
 * A comprehensive support request center featuring:
 * - Multi-channel support options with availability indicators
 * - Full support ticket submission form with file attachments and logs
 * - Expandable FAQ accordion with search, filtering, and sorting
 * - Popular questions quick-select buttons
 * - Save/bookmark favorite questions with localStorage persistence
 * - Helpful/Not helpful voting on answers
 * - Export FAQs to JSON and print-friendly view
 * - Support hours display with enterprise emergency information
 * - Response guarantee badge
 * - Fully responsive and dark mode compatible with mark highlighting
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
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePaperAirplane,
  HiOutlineX,
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineGlobeAlt,
  HiOutlineChat,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCog,
  HiOutlineUserCircle,
  HiOutlineCreditCard,
} from 'react-icons/hi';
import { HiOutlineWrench } from 'react-icons/hi2';

const SupportRequestsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [ticketNumber, setTicketNumber] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', subject: '', category: 'technical', priority: 'normal', message: '', attachments: [], systemLogs: '', });

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const supportChannels = config?.supportChannels || [];
  const popularQuestions = config?.popularQuestions || [];
  const ticketCategories = config?.ticketCategories || [];
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
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineCheckCircle,
      HiOutlineArrowRight,
      HiOutlineQuestionMarkCircle,
      HiOutlineClock,
      HiOutlineDocumentText,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlinePaperAirplane,
      HiOutlineX,
      HiOutlineUserGroup,
      HiOutlineChatAlt2,
      HiOutlineGlobeAlt,
      HiOutlineChat,
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineCog,
      HiOutlineUserCircle,
      HiOutlineCreditCard,
      HiOutlineWrench,
    };
    const IconComponent = icons[iconName] || HiOutlineQuestionMarkCircle;
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
      localStorage.setItem('supportFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedSupportFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle file attachment upload
   */
  const handleFileUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    setTicketForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  }, []);

  /**
   * Remove attachment from list
   */
  const removeAttachment = useCallback((index) => {
    setTicketForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  }, []);

  /**
   * Handle ticket submission
   */
  const handleTicketSubmit = useCallback((e) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.subject || !ticketForm.message) return;

    const newTicketNumber = `TKT-${Math.floor(Math.random() * 100000)}`;
    setTicketNumber(newTicketNumber);

    setTimeout(() => {
      setTicketSubmitted(true);
      setTimeout(() => {
        setShowTicketForm(false);
        setTicketSubmitted(false);
        setTicketForm({
          name: '', email: '', subject: '', category: 'technical', priority: 'normal',
          message: '', attachments: [], systemLogs: '',
        });
        setTicketNumber('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 3000);
    }, 1000);
  }, [ticketForm]);

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
    linkElement.setAttribute('download', 'support-faq-export.json');
    linkElement.click();
  }, [filteredFaqs, categories]);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

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
        <mark key={i} className="bg-orange-200 dark:bg-orange-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);


  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('supportFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedSupportFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Support Requests Help Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-orange-50/30 to-transparent dark:from-orange-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-orange-300/5 dark:bg-orange-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-orange-100 dark:bg-orange-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-orange-200 dark:border-orange-800'}`}
            aria-label="Support badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-orange-700 dark:text-orange-300'}`}>
              {config?.badge?.text || "Priority Support"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Get the'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-orange-600 to-amber-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Help You Need'}
            </span>{' '}
            {config?.title?.suffix || 'Fast'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our expert support team is ready to assist you with any technical issues, questions, or concerns. Submit a ticket, browse our knowledge base, or connect with us directly."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-orange-600 dark:text-orange-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== SUPPORT CHANNELS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-4 text-orange-600 dark:text-orange-400">
                {getIcon(channel.icon, "w-12 h-12")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{channel.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{channel.description}</p>
              <div className="text-xs text-orange-500 dark:text-orange-400 mb-4 flex items-center justify-center gap-1">
                {getIcon("HiOutlineClock", "w-3 h-3")}
                {channel.availability}
              </div>
              <Link
                href={channel.link}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {channel.buttonText}
                <HiOutlineArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* ==================== SUBMIT TICKET BUTTON ==================== */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowTicketForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {getIcon("HiOutlinePaperAirplane", "w-5 h-5")}
            Submit a Support Ticket
          </button>
        </div>

        {/* ==================== POPULAR QUESTIONS ==================== */}
        {popularQuestions.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Popular Support Questions
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
              placeholder="Search support questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
                ? 'bg-orange-600 text-white border-orange-600'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon("HiOutlineFilter", "w-4 h-4")}
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 transition-all"
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
                      ? 'bg-linear-to-r from-orange-600 to-amber-600 text-white shadow-md'
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
                        ? 'bg-linear-to-r from-orange-600 to-amber-600 text-white shadow-md'
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 transition-all"
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
                  className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
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
                    <div className="text-orange-600 dark:text-orange-400 mt-0.5">
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
                      className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-orange-600' : 'text-gray-400 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      aria-label={isSaved ? "Remove from saved" : "Save question"}
                    >
                      {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-orange-600' : ''}`)}
                    </button>
                    <div className="text-orange-500 dark:text-orange-400">
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
                        className="inline-flex items-center gap-1 text-orange-600 dark:text-orange-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
              onClick={() => setShowTicketForm(true)}
              className="mt-4 px-6 py-2.5 bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Submit a Support Ticket
            </button>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineBookmark", "w-5 h-5 text-orange-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-orange-600 dark:text-orange-400">
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
                        className="text-xs text-orange-600 dark:text-orange-400 mt-1 hover:underline"
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

        {/* ==================== SUPPORT HOURS ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineClock", "w-5 h-5 text-orange-600")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Support Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
              <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 8:00 PM EST</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Saturday</span>
              <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Sunday</span>
              <span className="font-semibold text-gray-900 dark:text-white">Closed</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Emergency Support (Enterprise)</span>
              <span className="font-semibold text-green-600 dark:text-green-400">24/7 Available</span>
            </div>
          </div>
        </div>

        {/* ==================== TICKET FORM MODAL ==================== */}
        {showTicketForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowTicketForm(false)}
            role="dialog"
            aria-label="Support ticket form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Submit Support Ticket</h3>
                <button
                  onClick={() => setShowTicketForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {!ticketSubmitted ? (
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                      <input
                        type="text"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Category</label>
                        <select
                          value={ticketForm.category}
                          onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >
                          {ticketCategories.map((cat, idx) => (
                            <option key={idx} value={cat.value}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                        <select
                          value={ticketForm.priority}
                          onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >
                          <option value="low">Low - General question</option>
                          <option value="normal">Normal - Minor issue</option>
                          <option value="high">High - Major issue</option>
                          <option value="critical">Critical - System down</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
                      <textarea
                        rows={5}
                        value={ticketForm.message}
                        onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your issue in detail. Include steps to reproduce, expected vs actual behavior, and any relevant information..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">System Logs (Optional)</label>
                      <textarea
                        rows={3}
                        value={ticketForm.systemLogs}
                        onChange={(e) => setTicketForm({ ...ticketForm, systemLogs: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-mono text-xs resize-none"
                        placeholder="Paste any relevant error logs or console output here..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        multiple
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-orange-900/30 dark:file:text-orange-400"
                      />
                      {ticketForm.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {ticketForm.attachments.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                              <span>{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeAttachment(idx)}
                                className="text-red-500 hover:text-red-700"
                              >
                                {getIcon("HiOutlineX", "w-3 h-3")}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Max file size: 10MB. Supported: PNG, JPG, PDF, DOC, TXT</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Submit Ticket
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ticket Submitted Successfully!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Your support ticket has been created.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{ticketNumber}</span>
                    </div>
                    <p className="text-sm text-gray-500">A support representative will respond within 30 minutes.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-orange-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-orange-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need immediate assistance? Our support team is ready to help."}
            </span>
            <Link
              href={config?.contactLink || "/support/chat"}
              className="px-6 py-3 bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Support"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== RESPONSE GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "All support tickets receive a response within 30 minutes during business hours. Enterprise customers get priority 24/7 support with <15min response."}
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

export default SupportRequestsSection2;