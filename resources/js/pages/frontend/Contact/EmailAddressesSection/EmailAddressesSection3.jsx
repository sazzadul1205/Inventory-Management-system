// frontend/Contact/EmailAddressesSection/EmailAddressesSection3.jsx

/**
 * Email Addresses Section Component - Multi-Tab Email Support Hub
 * A comprehensive email support center featuring:
 * - Multi-tab interface (Email Addresses, Compose Email, FAQs)
 * - Department-based email cards with type, region, and language filtering
 * - Language support indicators on email cards
 * - Direct email links and compose email tab with full form
 * - Compose email form with priority, environment, and account ID fields
 * - File attachments support with multiple file uploads
 * - Auto-response process explanation section
 * - Expandable FAQ accordion with category grouping
 * - Save/bookmark favorite FAQs with localStorage persistence
 * - Helpful/Not helpful voting on FAQs
 * - Export email addresses to JSON
 * - Print-friendly view for email directory
 * - Email security section with encryption and compliance details
 * - Response guarantee badge for SLA information
 * - Fully responsive grid layout with hover effects
 * - Dark mode compatible design
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
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineNewspaper,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const EmailAddressesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [sortBy, setSortBy] = useState('department');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeTab, setActiveTab] = useState('addresses');
  const [emailReference, setEmailReference] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [emailForm, setEmailForm] = useState({ name: '', email: '', subject: '', message: '', department: '', priority: 'normal', attachments: [], accountId: '', environment: 'production', subscribeUpdates: false, });

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const regions = config?.regions || [];
  const emailTypes = config?.emailTypes || [];
  const autoResponses = config?.autoResponses || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);
  const emailAddresses = useMemo(() => config?.emailAddresses || [], [config?.emailAddresses]);


  // ==================== FILTERED DATA ====================
  const filteredEmails = useMemo(() => {
    return emailAddresses
      .filter(email => {
        const matchesType = activeType === 'all' || email.type === activeType;
        const matchesRegion = activeRegion === 'all' || email.region === activeRegion;
        const matchesSearch = searchQuery === '' ||
          email.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (email.languages && email.languages.some(l => l.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesType && matchesRegion && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'department') return a.department.localeCompare(b.department);
        if (sortBy === 'type') return a.type.localeCompare(b.type);
        if (sortBy === 'region') return (a.region || 'ZZ').localeCompare(b.region || 'ZZ');
        return 0;
      });
  }, [emailAddresses, activeType, activeRegion, searchQuery, sortBy]);

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
      HiOutlineMail,
      HiOutlineClock,
      HiOutlineGlobeAlt,
      HiOutlineArrowRight,
      HiOutlineQuestionMarkCircle,
      HiOutlineShieldCheck,
      HiOutlineDocumentText,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlinePaperAirplane,
      HiOutlineCheckCircle,
      HiOutlineUsers,
      HiOutlineSparkles,
      HiOutlineCog,
      HiOutlineShoppingBag,
      HiOutlineCreditCard,
      MdOutlineHandshake,
      HiOutlineNewspaper,
    };
    const IconComponent = icons[iconName] || HiOutlineMail;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get color classes for department type
   */
  const getTypeColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'sales': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'billing': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'security': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'partnership': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }, []);

  /**
   * Get bar color for department type
   */
  const getBarColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-emerald-500';
      case 'sales': return 'bg-green-500';
      case 'billing': return 'bg-purple-500';
      case 'security': return 'bg-red-500';
      case 'partnership': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  }, []);

  /**
   * Get language display name
   */
  const getLanguageName = useCallback((code) => {
    const langMap = {
      'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
      'zh': 'Chinese', 'ja': 'Japanese', 'pt': 'Portuguese', 'it': 'Italian'
    };
    return langMap[code] || code;
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
      localStorage.setItem('emailFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedEmailFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle file attachment upload
   */
  const handleFileUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    setEmailForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  }, []);

  /**
   * Remove attachment from list
   */
  const removeAttachment = useCallback((index) => {
    setEmailForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  }, []);

  /**
   * Handle email form submission
   */
  const handleEmailSubmit = useCallback((e) => {
    e.preventDefault();
    if (!emailForm.name || !emailForm.email || !emailForm.subject || !emailForm.message) return;
    const ref = `REF-${Math.floor(Math.random() * 100000)}`;
    setEmailReference(ref);
    setTimeout(() => {
      setEmailSubmitted(true);
      setTimeout(() => {
        setEmailSubmitted(false);
        setEmailForm({
          name: '', email: '', subject: '', message: '', department: '', priority: 'normal',
          attachments: [], accountId: '', environment: 'production', subscribeUpdates: false,
        });
        setEmailReference('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 4000);
    }, 1000);
  }, [emailForm]);

  /**
   * Export email addresses to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredEmails.map(email => ({
      department: email.department,
      type: email.type,
      region: email.region || 'Global',
      email: email.email,
      description: email.description,
      responseTime: email.responseTime,
      languages: email.languages,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'email-addresses-export.json');
    linkElement.click();
  }, [filteredEmails]);

  /**
   * Print email addresses
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search and filters
   */
  const clearFilters = useCallback(() => {
    setActiveType('all');
    setActiveRegion('all');
    setSearchQuery('');
    setSortBy('department');
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-emerald-200 dark:bg-emerald-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('emailFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedEmailFaqs');
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
      aria-label="Email Addresses Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
            aria-label="Email addresses badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
              {config?.badge?.text || "Email Support Hub"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Send Us'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'a Message'}
            </span>{' '}
            {config?.title?.suffix || "We're Here to Help"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Connect with our global support team via email. Choose the right department, include relevant details, and expect a prompt response. Your questions matter to us."}
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
              <div className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'addresses'
              ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineMail", "w-4 h-4")}
            Email Addresses
          </button>
          <button
            onClick={() => setActiveTab('compose')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'compose'
              ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePaperAirplane", "w-4 h-4")}
            Compose Email
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== EMAIL ADDRESSES SECTION ==================== */}
        {activeTab === 'addresses' && (
          <>
            {/* Type Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeType === 'all'
                  ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Departments
              </button>
              {emailTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeType === type.value
                    ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(type.icon, "w-4 h-4")}
                  {type.label}
                </button>
              ))}
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveRegion('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeRegion === 'all'
                  ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Regions
              </button>
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 inline-flex items-center gap-1 ${activeRegion === region.id
                    ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  <span>{region.icon}</span>
                  {region.name}
                </button>
              ))}
            </div>

            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search by department, email, region, or language..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="department">Sort by Department</option>
                  <option value="type">Sort by Type</option>
                  <option value="region">Sort by Region</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Export Emails"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Print Emails"
                >
                  {getIcon("HiOutlinePrinter", "w-4 h-4")}
                </button>
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Department</label>
                    <select
                      value={activeType}
                      onChange={(e) => setActiveType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="all">All Departments</option>
                      {emailTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Region</label>
                    <select
                      value={activeRegion}
                      onChange={(e) => setActiveRegion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="department">Department</option>
                      <option value="type">Type</option>
                      <option value="region">Region</option>
                    </select>
                  </div>
                </div>
                {(activeType !== 'all' || activeRegion !== 'all' || searchQuery !== '' || sortBy !== 'department') && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={clearFilters}
                      className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
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
                Found {filteredEmails.length} email address{filteredEmails.length !== 1 ? 'es' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Email Addresses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredEmails.map((email, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer group"
                >
                  <div className={`h-1 ${getBarColor(email.type)}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400 text-3xl">
                          {getIcon(email.icon, "w-8 h-8")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{email.department}</h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            {getIcon("HiOutlineGlobeAlt", "w-3 h-3 text-gray-400")}
                            <span className="text-xs text-gray-500 dark:text-gray-400">{email.region || 'Global'}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(email.type)}`}>
                        {email.type === 'support' ? 'Support' : email.type === 'sales' ? 'Sales' : email.type === 'billing' ? 'Billing' : email.type === 'security' ? 'Security' : 'Partnership'}
                      </span>
                    </div>
                    <div className="mb-4">
                      <a
                        href={`mailto:${email.email}`}
                        className="text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:underline break-all transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {email.email}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {email.description}
                    </p>
                    <div className="flex items-start gap-2 mb-3">
                      {getIcon("HiOutlineClock", "w-4 h-4 text-gray-400 mt-0.5 shrink-0")}
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {email.responseTime || 'Response within 24 hours'}
                      </div>
                    </div>
                    {email.languages && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {email.languages.map((lang, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                            {getLanguageName(lang)}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${email.email}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getIcon("HiOutlineMail", "w-4 h-4")}
                        Send Email
                      </a>
                      <button
                        onClick={() => {
                          setEmailForm(prev => ({ ...prev, department: email.department, subject: `Inquiry for ${email.department}` }));
                          setActiveTab('compose');
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        {getIcon("HiOutlinePaperAirplane", "w-4 h-4")}
                        Compose
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredEmails.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineMail", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No email addresses found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}

        {/* ==================== COMPOSE EMAIL SECTION ==================== */}
        {activeTab === 'compose' && (
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                    {getIcon("HiOutlinePaperAirplane", "w-8 h-8 text-emerald-600")}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Compose Email</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Send a message to our support team. We'll respond within 24 hours.
                </p>
              </div>
              {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email *</label>
                      <input
                        type="email"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                      <select
                        value={emailForm.department}
                        onChange={(e) => setEmailForm({ ...emailForm, department: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select Department</option>
                        {emailAddresses.map((email, idx) => (
                          <option key={idx} value={email.department}>{email.department}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                      <select
                        value={emailForm.priority}
                        onChange={(e) => setEmailForm({ ...emailForm, priority: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="low">Low - General question</option>
                        <option value="normal">Normal - Standard inquiry</option>
                        <option value="high">High - Urgent issue</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account ID (Optional)</label>
                      <input
                        type="text"
                        value={emailForm.accountId}
                        onChange={(e) => setEmailForm({ ...emailForm, accountId: e.target.value })}
                        placeholder="If you have an account"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment</label>
                      <select
                        value={emailForm.environment}
                        onChange={(e) => setEmailForm({ ...emailForm, environment: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                    <textarea
                      rows={6}
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your question or issue in detail. Include steps to reproduce, error messages, and any relevant information..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      multiple
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 dark:file:bg-emerald-900/30 dark:file:text-emerald-400"
                    />
                    {emailForm.attachments.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {emailForm.attachments.map((file, idx) => (
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
                    <p className="text-xs text-gray-500 mt-1">Max file size: 10MB per file. Supported: PNG, JPG, PDF, DOC, TXT, LOG</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={emailForm.subscribeUpdates}
                      onChange={(e) => setEmailForm({ ...emailForm, subscribeUpdates: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 mt-0.5"
                    />
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Subscribe to product updates, feature announcements, and best practices
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Email
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Sent Successfully!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Your message has been sent to our support team.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                    {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">Reference: {emailReference}</span>
                  </div>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours. You'll receive a confirmation email shortly.</p>
                  <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2">
                    {getIcon("HiOutlineSparkles", "w-3 h-3")}
                    <span>Enterprise customers receive priority response within 4 hours</span>
                  </div>
                </div>
              )}
            </div>

            {/* Auto-Response Info */}
            <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800">
              <div className="flex items-center gap-2 mb-2">
                {getIcon("HiOutlineSparkles", "w-5 h-5 text-emerald-600")}
                <h4 className="font-semibold text-gray-900 dark:text-white">What happens after you send?</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {autoResponses.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-500 mt-0.5 shrink-0")}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        {activeTab === 'faq' && (
          <div className="max-w-6xl mx-auto">
            {/* FAQ Search */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === 'all'
                  ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === category.id
                    ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* FAQ Category Accordion */}
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
                        <div className="text-emerald-600 dark:text-emerald-400 text-2xl">
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
                                  <div className="text-emerald-600 dark:text-emerald-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-emerald-600' : 'text-gray-400 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-emerald-600' : ''}`)}
                                  </button>
                                  <div className="text-emerald-500 dark:text-emerald-400">
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
                                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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

            {/* FAQ Empty State */}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search to find what you're looking for.</p>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-emerald-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400">
                          {getIcon(faq.icon, "w-5 h-5")}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                          <button
                            onClick={() => {
                              setSearchQuery(faq.question.substring(0, 30));
                              setOpenFaq(null);
                            }}
                            className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 hover:underline"
                          >
                            View Answer
                          </button>
                        </div>
                        <button
                          onClick={() => handleSaveFaq(faq.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                        >
                          {getIcon("HiOutlineX", "w-4 h-4")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== EMAIL SECURITY NOTE ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 text-center border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineShieldCheck", "w-6 h-6 text-green-600")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Security & Privacy</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We take your security seriously. All email communications are encrypted and we never ask for passwords or sensitive information via email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineDocumentText", "w-4 h-4 text-emerald-600")}
              <span className="text-gray-600 dark:text-gray-400">PGP Encryption Available</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineMail", "w-4 h-4 text-emerald-600")}
              <span className="text-gray-600 dark:text-gray-400">SPF/DKIM/DMARC Protected</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-gray-600 dark:text-gray-400">GDPR & CCPA Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineUsers", "w-4 h-4 text-emerald-600")}
              <span className="text-gray-600 dark:text-gray-400">Data Never Shared</span>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-emerald-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-emerald-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need help finding the right email address? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== RESPONSE GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineShieldCheck", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours."}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default EmailAddressesSection3;