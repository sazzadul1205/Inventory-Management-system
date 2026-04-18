// frontend/Contact/SupportRequestsSection/SupportRequestsSection3.jsx

/**
 * Support Requests Section Component - Enterprise Support Hub with Ticket System
 * A comprehensive enterprise support center featuring:
 * - Multi-tab interface (FAQ, Knowledge Base, Ticket Submission)
 * - SLA information display with response time guarantees
 * - Detailed ticket submission form with categories, subcategories, and environment selection
 * - Steps to reproduce, expected vs actual behavior fields
 * - File attachments and system logs support
 * - Ticket status tracking system
 * - Category-based accordion FAQ browsing
 * - Search functionality with text highlighting
 * - Save/bookmark favorite questions with localStorage
 * - Helpful/Not helpful voting on answers
 * - Knowledge base articles grid
 * - Support channels with availability indicators
 * - Export FAQs to JSON and print-friendly view
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
  HiOutlineShieldCheck,
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

const SupportRequestsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketStatus, setTicketStatus] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketTrackingId, setTicketTrackingId] = useState('');
  const [showStatusCheck, setShowStatusCheck] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', accountId: '', subject: '', category: 'technical', subcategory: '', priority: 'normal', environment: 'production', message: '', attachments: [], systemLogs: '', browserInfo: '', stepsToReproduce: '', expectedBehavior: '', actualBehavior: '', });

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const slas = config?.slas || [];
  const stats = config?.stats || [];
  const subcategories = config?.subcategories || {};
  const supportChannels = config?.supportChannels || [];
  const popularQuestions = config?.popularQuestions || [];
  const ticketCategories = config?.ticketCategories || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const knowledgeBaseArticles = config?.knowledgeBaseArticles || [];
  const categories = useMemo(() => config?.categories || [], [config?.categories]); // config?.categories || [];

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

  const groupedFaqs = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [categories, filteredFaqs]);


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
      HiOutlineShieldCheck,
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
    const statuses = ['Received', 'In Review', 'Assigned', 'In Progress'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    setTicketNumber(newTicketNumber);
    setTicketStatus(randomStatus);
    setTicketTrackingId(`TRK-${Math.floor(Math.random() * 10000)}`);

    setTimeout(() => {
      setTicketSubmitted(true);
      setTimeout(() => {
        setShowTicketForm(false);
        setTicketSubmitted(false);
        setTicketForm({
          name: '', email: '', accountId: '', subject: '', category: 'technical',
          subcategory: '', priority: 'normal', environment: 'production',
          message: '', attachments: [], systemLogs: '', browserInfo: '',
          stepsToReproduce: '', expectedBehavior: '', actualBehavior: '',
        });
        setTicketNumber('');
        setTicketStatus('');
        setTicketTrackingId('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 5000);
    }, 1000);
  }, [ticketForm]);

  /**
   * Handle ticket status check
   */
  const handleCheckTicketStatus = useCallback((e) => {
    e.preventDefault();
    if (!ticketTrackingId) return;
    const statuses = ['Received', 'In Review', 'Assigned', 'In Progress', 'Resolved', 'Closed'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setTicketStatus(randomStatus);
  }, [ticketTrackingId]);

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
        <mark key={i} className="bg-teal-200 dark:bg-teal-800 text-gray-900 dark:text-white px-0.5 rounded">
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
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Support Requests Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-teal-50/30 to-transparent dark:from-teal-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-teal-300/5 dark:bg-teal-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-teal-100 dark:bg-teal-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-teal-200 dark:border-teal-800'}`}
            aria-label="Support badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-teal-700 dark:text-teal-300'}`}>
              {config?.badge?.text || "Enterprise Support Hub"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'World-Class'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-teal-600 to-cyan-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Support'}
            </span>{' '}
            {config?.title?.suffix || 'When You Need It Most'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Get the help you need with our multi-channel support system. Submit detailed tickets, browse our knowledge base, or track existing requests — all in one place."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-teal-600 dark:text-teal-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== SLA INFORMATION ==================== */}
        <div className="mb-12 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-teal-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineShieldCheck", "w-5 h-5 text-teal-600")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Service Level Agreements (SLA)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {slas.map((sla, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-1">{sla.plan}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{sla.responseTime}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{sla.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SUPPORT CHANNELS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-4 text-teal-600 dark:text-teal-400">
                {getIcon(channel.icon, "w-12 h-12")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{channel.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{channel.description}</p>
              <div className="text-xs text-teal-500 dark:text-teal-400 mb-4 flex items-center justify-center gap-1">
                {getIcon("HiOutlineClock", "w-3 h-3")}
                {channel.availability}
              </div>
              <Link
                href={channel.link}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {channel.buttonText}
                <HiOutlineArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => setActiveTab('knowledge-base')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === 'knowledge-base'
              ? 'bg-linear-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Knowledge Base
          </button>
          <button
            onClick={() => setShowTicketForm(true)}
            className="px-6 py-2.5 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Submit Ticket
          </button>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        {activeTab === 'faq' && (
          <>
            {/* Popular Questions */}
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

            {/* Search and Action Bar */}
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
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
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

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                          ? 'bg-linear-to-r from-teal-600 to-cyan-600 text-white shadow-md'
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
                            ? 'bg-linear-to-r from-teal-600 to-cyan-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
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
                      className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Category Accordion View */}
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
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-teal-600 dark:text-teal-400">
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
                                  <div className="text-teal-600 dark:text-teal-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-teal-600' : 'text-gray-400 hover:text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-teal-600' : ''}`)}
                                  </button>
                                  <div className="text-teal-500 dark:text-teal-400">
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
                                      className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
                    )}
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => setShowTicketForm(true)}
                  className="mt-4 px-6 py-2.5 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit a Support Ticket
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-teal-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-teal-600 dark:text-teal-400">
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
                            className="text-xs text-teal-600 dark:text-teal-400 mt-1 hover:underline"
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
          </>
        )}

        {/* ==================== KNOWLEDGE BASE SECTION ==================== */}
        {activeTab === 'knowledge-base' && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {knowledgeBaseArticles.map((article, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="text-teal-600 dark:text-teal-400 text-3xl">
                      {getIcon(article.icon, "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          {getIcon("HiOutlineClock", "w-3 h-3")}
                          {article.readTime} min read
                        </span>
                        <Link
                          href={article.link}
                          className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                        >
                          Read Article
                          {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SUPPORT HOURS ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineClock", "w-5 h-5 text-teal-600")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Support Hours & SLAs</h3>
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

        {/* ==================== TICKET STATUS CHECK ==================== */}
        <div className="mb-12">
          <button
            onClick={() => setShowStatusCheck(!showStatusCheck)}
            className="mx-auto block px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 items-center gap-2"
          >
            {getIcon("HiOutlineDocumentText", "w-5 h-5")}
            {showStatusCheck ? 'Hide Ticket Status' : 'Check Ticket Status'}
          </button>

          {showStatusCheck && (
            <div className="max-w-md mx-auto mt-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 animate-fadeIn">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("HiOutlineDocumentText", "w-5 h-5 text-teal-600")}
                Check Ticket Status
              </h3>
              <form onSubmit={handleCheckTicketStatus} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ticket Number</label>
                  <input
                    type="text"
                    value={ticketTrackingId}
                    onChange={(e) => setTicketTrackingId(e.target.value)}
                    placeholder="e.g., TKT-12345"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Check Status
                </button>
                {ticketStatus && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Status</div>
                    <div className="font-semibold text-teal-600 dark:text-teal-400 text-lg">{ticketStatus}</div>
                  </div>
                )}
              </form>
            </div>
          )}
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
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
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
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account ID</label>
                        <input
                          type="text"
                          value={ticketForm.accountId}
                          onChange={(e) => setTicketForm({ ...ticketForm, accountId: e.target.value })}
                          placeholder="If you have an account"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment</label>
                        <select
                          value={ticketForm.environment}
                          onChange={(e) => setTicketForm({ ...ticketForm, environment: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="production">Production</option>
                          <option value="staging">Staging</option>
                          <option value="development">Development</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                      <input
                        type="text"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Category</label>
                        <select
                          value={ticketForm.category}
                          onChange={(e) => {
                            setTicketForm({ ...ticketForm, category: e.target.value, subcategory: '' });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          {ticketCategories.map((cat, idx) => (
                            <option key={idx} value={cat.value}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subcategory</label>
                        <select
                          value={ticketForm.subcategory}
                          onChange={(e) => setTicketForm({ ...ticketForm, subcategory: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select subcategory</option>
                          {subcategories[ticketForm.category]?.map((sub, idx) => (
                            <option key={idx} value={sub.value}>{sub.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                        <select
                          value={ticketForm.priority}
                          onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        >
                          <option value="low">Low - General question</option>
                          <option value="normal">Normal - Minor issue</option>
                          <option value="high">High - Major issue</option>
                          <option value="critical">Critical - System down</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Browser/OS Info</label>
                        <input
                          type="text"
                          value={ticketForm.browserInfo}
                          onChange={(e) => setTicketForm({ ...ticketForm, browserInfo: e.target.value })}
                          placeholder="e.g., Chrome 120, Windows 11"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Steps to Reproduce</label>
                      <textarea
                        rows={3}
                        value={ticketForm.stepsToReproduce}
                        onChange={(e) => setTicketForm({ ...ticketForm, stepsToReproduce: e.target.value })}
                        placeholder="1. Navigate to...\n2. Click on...\n3. Observe error..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expected Behavior</label>
                        <textarea
                          rows={2}
                          value={ticketForm.expectedBehavior}
                          onChange={(e) => setTicketForm({ ...ticketForm, expectedBehavior: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Actual Behavior</label>
                        <textarea
                          rows={2}
                          value={ticketForm.actualBehavior}
                          onChange={(e) => setTicketForm({ ...ticketForm, actualBehavior: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
                      <textarea
                        rows={4}
                        value={ticketForm.message}
                        onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your issue in detail..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">System Logs/Error Messages</label>
                      <textarea
                        rows={3}
                        value={ticketForm.systemLogs}
                        onChange={(e) => setTicketForm({ ...ticketForm, systemLogs: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-mono text-xs resize-none"
                        placeholder="Paste any relevant error logs or console output here..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        multiple
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 dark:file:bg-teal-900/30 dark:file:text-teal-400"
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
                      <p className="text-xs text-gray-500 mt-1">Max file size: 10MB. Supported: PNG, JPG, PDF, DOC, TXT, LOG</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-2">
                      {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{ticketNumber}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-full mb-4 ml-2">
                      {getIcon("HiOutlineClock", "w-4 h-4 text-teal-600")}
                      <span className="text-sm text-teal-600 dark:text-teal-400">Status: {ticketStatus}</span>
                    </div>
                    <p className="text-sm text-gray-500">A support representative will respond within the SLA timeframe. You can track your ticket status using the tracking ID above.</p>
                    <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
                      {getIcon("HiOutlineShieldCheck", "w-3 h-3")}
                      Response SLA: {slas.find(s => s.plan === 'Professional')?.responseTime || '24 hours'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-teal-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need immediate assistance? Our support team is ready to help 24/7."}
            </span>
            <Link
              href={config?.contactLink || "/support/chat"}
              className="px-6 py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
                {config?.guaranteeText || "All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response."}
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

export default SupportRequestsSection3;