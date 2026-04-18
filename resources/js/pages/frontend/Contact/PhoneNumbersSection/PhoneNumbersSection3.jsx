// frontend/Contact/PhoneNumbersSection/PhoneNumbersSection3.jsx

/**
 * Phone Numbers Section Component - Multi-Tab Phone Support Center
 * A comprehensive phone support center featuring:
 * - Multi-tab interface (Phone Numbers, Schedule Callback, FAQs)
 * - Department quick links for filtering by support type
 * - Region and language-based filtering
 * - Interactive phone number cards with priority indicators
 * - Detailed modal view with alternate numbers and language support
 * - Emergency support banner with priority hotline
 * - Callback scheduling form with reason selection
 * - Support hours display with SLA information
 * - Expandable FAQ accordion with category grouping
 * - Save/bookmark favorite FAQs with localStorage persistence
 * - Helpful/Not helpful voting on FAQs
 * - Export phone numbers to JSON
 * - Print-friendly view for phone directory
 * - Language availability indicators on phone cards
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
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineFlag,
  HiOutlineMicrophone,
  HiOutlineCalendar,
  HiOutlineCog,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineCash,
} from 'react-icons/hi';
import { MdOutlineHeadphones, MdOutlineHandshake } from 'react-icons/md';

const PhoneNumbersSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [sortBy, setSortBy] = useState('priority');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [callbackName, setCallbackName] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('numbers');
  const [activeRegion, setActiveRegion] = useState('all');
  const [callbackNumber, setCallbackNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState('all');
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [callbackReason, setCallbackReason] = useState('general');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const regions = config?.regions || [];
  const languages = config?.languages || [];
  const departments = config?.departments || [];
  const supportHours = config?.supportHours || [];
  const callbackReasons = config?.callbackReasons || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const phoneNumbers = useMemo(() => config?.phoneNumbers || [], [config?.phoneNumbers]); // config?.phoneNumbers || [];
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]); // config?.faqCategories || [];

  // ==================== FILTERED DATA ====================
  const filteredNumbers = useMemo(() => {
    return phoneNumbers
      .filter(number => {
        const matchesRegion = activeRegion === 'all' || number.region === activeRegion;
        const matchesType = activeType === 'all' || number.type === activeType;
        const matchesLanguage = activeLanguage === 'all' || (number.languages && number.languages.includes(activeLanguage));
        const matchesSearch = searchQuery === '' ||
          number.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          number.phone.includes(searchQuery) ||
          number.regionName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesRegion && matchesType && matchesLanguage && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'department') return a.department.localeCompare(b.department);
        if (sortBy === 'region') return a.regionName.localeCompare(b.regionName);
        if (sortBy === 'priority') return (a.priority || 999) - (b.priority || 999);
        return 0;
      });
  }, [phoneNumbers, activeRegion, activeType, activeLanguage, searchQuery, sortBy]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesSearch;
    });
  }, [faqs, searchQuery]);

  const groupedFaqs = useMemo(() => {
    return faqCategories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [faqCategories, filteredFaqs]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlinePhone,
      HiOutlineMail,
      HiOutlineClock,
      HiOutlineArrowRight,
      HiOutlineQuestionMarkCircle,
      HiOutlineShieldCheck,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineFlag,
      HiOutlineMicrophone,
      HiOutlineCalendar,
      HiOutlineCog,
      HiOutlineShoppingBag,
      HiOutlineCreditCard,
      MdOutlineHandshake,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineCash,
      MdOutlineHeadphones,
    };
    const IconComponent = icons[iconName] || HiOutlinePhone;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get color classes for department type
   */
  const getTypeColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'sales': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'billing': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'partnership': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }, []);

  /**
   * Get bar color for department type
   */
  const getBarColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-blue-500';
      case 'sales': return 'bg-green-500';
      case 'billing': return 'bg-purple-500';
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
      'zh': 'Chinese', 'ja': 'Japanese', 'pt': 'Portuguese', 'ar': 'Arabic'
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
      localStorage.setItem('phoneFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedPhoneFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle callback request submission
   */
  const handleCallbackSubmit = useCallback((e) => {
    e.preventDefault();
    if (!callbackNumber || !callbackName) return;
    setTimeout(() => {
      setCallbackSubmitted(true);
      setTimeout(() => {
        setCallbackSubmitted(false);
        setCallbackNumber('');
        setCallbackName('');
        setCallbackReason('general');
      }, 3000);
    }, 500);
  }, [callbackNumber, callbackName]);

  /**
   * Export phone numbers to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredNumbers.map(number => ({
      department: number.department,
      type: number.type,
      region: number.regionName,
      phone: number.phone,
      hours: number.hours,
      email: number.email,
      languages: number.languages,
      priority: number.priority,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'phone-numbers-export.json');
    linkElement.click();
  }, [filteredNumbers]);

  /**
   * Print phone numbers
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search and filters
   */
  const clearFilters = useCallback(() => {
    setActiveRegion('all');
    setActiveType('all');
    setActiveLanguage('all');
    setSearchQuery('');
    setSortBy('priority');
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-amber-200 dark:bg-amber-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('phoneFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedPhoneFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery) {
      const expanded = {};
      faqCategories.forEach(category => {
        expanded[category.id] = true;
      });
      setExpandedCategories(expanded);
    }
  }, [searchQuery, faqCategories]);

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Phone Numbers Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
            aria-label="Phone numbers badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Voice Support"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Talk to'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Our Experts'}
            </span>{' '}
            {config?.title?.suffix || 'Global Phone Support Network'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Get instant answers from our global support team. With dedicated lines for every department and region, you're always just a call away from the help you need."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== EMERGENCY SUPPORT BANNER ==================== */}
        <div className="mb-12 bg-linear-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center animate-pulse">
                {getIcon("HiOutlinePhone", "w-6 h-6 text-red-600")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Emergency Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">24/7 Critical Issue Hotline</p>
              </div>
            </div>
            <div className="text-center">
              <a href={`tel:${config?.emergencyNumber?.replace(/[^0-9+]/g, '') || "+18887776666"}`} className="text-3xl font-bold text-red-600 dark:text-red-400 hover:underline">
                {config?.emergencyNumber || "+1 (888) 777-6666"}
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Response within 5 minutes for enterprise customers</p>
            </div>
          </div>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'numbers'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePhone", "w-4 h-4")}
            Phone Numbers
          </button>
          <button
            onClick={() => setActiveTab('callback')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'callback'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineCalendar", "w-4 h-4")}
            Schedule Callback
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== PHONE NUMBERS SECTION ==================== */}
        {activeTab === 'numbers' && (
          <>
            {/* Department Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {departments.map((dept) => (
                <button
                  key={dept.type}
                  onClick={() => setActiveType(dept.type === activeType ? 'all' : dept.type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeType === dept.type
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(dept.icon, "w-4 h-4")}
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveRegion('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRegion === 'all'
                  ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Regions
              </button>
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-1 ${activeRegion === region.id
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  <span>{region.icon}</span>
                  {region.name}
                </button>
              ))}
            </div>

            {/* Language Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveLanguage('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeLanguage === 'all'
                  ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Languages
              </button>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLanguage(lang.code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeLanguage === lang.code
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {lang.name}
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
                  placeholder="Search by department, region, or phone number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                >
                  <option value="priority">Sort by Priority</option>
                  <option value="department">Sort by Department</option>
                  <option value="region">Sort by Region</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Export Numbers"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Print Numbers"
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
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveType('all')}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeType === 'all'
                          ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        All
                      </button>
                      {departments.map((dept) => (
                        <button
                          key={dept.type}
                          onClick={() => setActiveType(dept.type)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeType === dept.type
                            ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          {dept.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Region</label>
                    <select
                      value={activeRegion}
                      onChange={(e) => setActiveRegion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Language</label>
                    <select
                      value={activeLanguage}
                      onChange={(e) => setActiveLanguage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option value="all">All Languages</option>
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {(activeRegion !== 'all' || activeType !== 'all' || activeLanguage !== 'all' || searchQuery !== '' || sortBy !== 'priority') && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={clearFilters}
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
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
                Found {filteredNumbers.length} number{filteredNumbers.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Phone Numbers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredNumbers.map((number, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedNumber(number);
                    setShowNumberModal(true);
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer group"
                >
                  <div className={`h-1 ${getBarColor(number.type)}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-amber-600 dark:text-amber-400 text-3xl">
                          {getIcon(number.icon, "w-8 h-8")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number.department}</h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            {getIcon("HiOutlineFlag", "w-3 h-3 text-gray-400")}
                            <span className="text-xs text-gray-500 dark:text-gray-400">{number.regionName}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(number.type)}`}>
                        {number.type === 'support' ? 'Support' : number.type === 'sales' ? 'Sales' : number.type === 'billing' ? 'Billing' : 'Partnership'}
                      </span>
                    </div>
                    <div className="mb-4">
                      <a
                        href={`tel:${number.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-2xl font-bold text-amber-600 dark:text-amber-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {number.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 mb-3">
                      {getIcon("HiOutlineClock", "w-4 h-4 text-gray-400 mt-0.5 shrink-0")}
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {number.hours}
                      </div>
                    </div>
                    {number.languages && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {number.languages.slice(0, 3).map((lang, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
                            {getLanguageName(lang)}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        {getIcon("MdOutlineHeadphones", "w-3 h-3")}
                        <span>Available now</span>
                      </div>
                      <div className="text-amber-600 dark:text-amber-400 text-sm font-semibold group-hover:underline">
                        View Details →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredNumbers.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlinePhone", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No phone numbers found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Number Modal */}
            {showNumberModal && selectedNumber && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                onClick={() => setShowNumberModal(false)}
                role="dialog"
                aria-label="Phone number details"
                aria-modal="true"
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full animate-fadeIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={`h-2 ${getBarColor(selectedNumber.type)} rounded-t-3xl`} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-amber-600 dark:text-amber-400 text-4xl">
                          {getIcon(selectedNumber.icon, "w-10 h-10")}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedNumber.department}</h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            {getIcon("HiOutlineFlag", "w-4 h-4 text-gray-400")}
                            <span className="text-sm text-gray-500 dark:text-gray-400">{selectedNumber.regionName}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowNumberModal(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {getIcon("HiOutlineX", "w-5 h-5")}
                      </button>
                    </div>
                    <div className="mb-4">
                      <a
                        href={`tel:${selectedNumber.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-3xl font-bold text-amber-600 dark:text-amber-400 hover:underline block text-center py-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        {selectedNumber.phone}
                      </a>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        {getIcon("HiOutlineClock", "w-5 h-5 text-gray-400 mt-0.5")}
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">Hours</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.hours}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        {getIcon("HiOutlineMail", "w-5 h-5 text-gray-400 mt-0.5")}
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">Email</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.email}</div>
                        </div>
                      </div>
                      {selectedNumber.languages && (
                        <div className="flex items-start gap-3">
                          {getIcon("HiOutlineMicrophone", "w-5 h-5 text-gray-400 mt-0.5")}
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">Languages</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {selectedNumber.languages.map((lang, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-full">
                                  {getLanguageName(lang)}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {selectedNumber.alternateNumber && (
                        <div className="flex items-start gap-3">
                          {getIcon("HiOutlinePhone", "w-5 h-5 text-gray-400 mt-0.5")}
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">Alternate Number</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{selectedNumber.alternateNumber}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={`tel:${selectedNumber.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        {getIcon("HiOutlinePhone", "w-4 h-4")}
                        Call Now
                      </a>
                      <button
                        onClick={() => {
                          setShowNumberModal(false);
                          setActiveTab('callback');
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        {getIcon("HiOutlineCalendar", "w-4 h-4")}
                        Schedule Callback
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== CALLBACK SECTION ==================== */}
        {activeTab === 'callback' && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    {getIcon("HiOutlineCalendar", "w-8 h-8 text-amber-600")}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule a Callback</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Leave your details and we'll call you back within 30 minutes during business hours
                </p>
              </div>
              {!callbackSubmitted ? (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={callbackNumber}
                      onChange={(e) => setCallbackNumber(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason for Callback</label>
                    <select
                      value={callbackReason}
                      onChange={(e) => setCallbackReason(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      {callbackReasons.map((reason, idx) => (
                        <option key={idx} value={reason.value}>{reason.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Time</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">ASAP</button>
                      <button type="button" className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Within 1 hour</button>
                      <button type="button" className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Specific time</button>
                      <button type="button" className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">End of day</button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Request Callback
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Callback Requested!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">We'll call you at {callbackNumber} within 30 minutes.</p>
                  <p className="text-sm text-gray-500">Reference ID: CB-{Math.floor(Math.random() * 10000)}</p>
                </div>
              )}
              <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                {getIcon("HiOutlineShieldCheck", "w-3 h-3")}
                Your information is secure and will only be used for this callback request
              </div>
            </div>

            {/* Support Hours Info */}
            <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                {getIcon("HiOutlineClock", "w-5 h-5 text-amber-600")}
                <h4 className="font-semibold text-gray-900 dark:text-white">Support Hours</h4>
              </div>
              <div className="space-y-2">
                {supportHours.map((hour, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{hour.days}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{hour.hours}</span>
                  </div>
                ))}
              </div>
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* FAQ Categories Accordion */}
            <div className="space-y-6 mb-12">
              {faqCategories.map((category) => {
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
                        <div className="text-amber-600 dark:text-amber-400 text-2xl">
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
                                  <div className="text-amber-600 dark:text-amber-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`)}
                                  </button>
                                  <div className="text-amber-500 dark:text-amber-400">
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
                                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
            {savedFaqs.length > 0 && searchQuery === '' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-amber-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-amber-600 dark:text-amber-400">
                          {getIcon(faq.icon, "w-5 h-5")}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                          <button
                            onClick={() => {
                              setSearchQuery(faq.question.substring(0, 30));
                              setOpenFaq(null);
                            }}
                            className="text-xs text-amber-600 dark:text-amber-400 mt-1 hover:underline"
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

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-amber-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need help finding the right number? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== SECURITY NOTE ==================== */}
        {config?.showSecurityNote && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineShieldCheck", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.securityText || "We never ask for passwords or sensitive information over the phone"}
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
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default PhoneNumbersSection3;