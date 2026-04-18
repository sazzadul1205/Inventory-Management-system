// frontend/Contact/PartnerInquiriesSection/PartnerInquiriesSection3.jsx

/**
 * Partner Inquiries Section Component - Partner Knowledge Base with Success Stories
 * A comprehensive partner program center featuring:
 * - Partner levels with commission rates and feature comparison
 * - Partner success stories showcase with quotes and results
 * - Upcoming partner events calendar
 * - Multi-tab interface (FAQ, Partner Resources)
 * - Category-based accordion FAQ browsing
 * - Full partner application form with detailed fields
 * - Partner resources grid with resource counts
 * - Popular questions quick-select buttons
 * - Save/bookmark favorite questions with localStorage
 * - Helpful/Not helpful voting on answers
 * - Export FAQs to JSON and print-friendly view
 * - Advanced filters panel (category and sorting)
 * - Apply now and partner portal CTAs
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
  HiOutlineDownload,
  HiOutlineGlobeAlt,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineUserAdd,
  HiOutlineBadgeCheck,
  HiOutlineStar,
  HiOutlineChip,
  HiOutlineOfficeBuilding,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineGift,
  HiOutlineClipboardList,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice2, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHandshake } from 'react-icons/md';

const PartnerInquiriesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showPartnerPortal, setShowPartnerPortal] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationForm, setApplicationForm] = useState({ companyName: '', website: '', contactName: '', email: '', phone: '', country: '', partnerType: 'implementation', targetLevel: 'registered', companySize: '', yearsInBusiness: '', currentCustomers: '', annualRevenue: '', referralPartners: '', reasonForApplying: '', expertise: '', referralSource: '', agreeTerms: false, subscribeUpdates: false, });

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const countries = config?.countries || [];
  const companySizes = config?.companySizes || [];
  const partnerLevels = config?.partnerLevels || [];
  const partnerEvents = config?.partnerEvents || [];
  const successStories = config?.successStories || [];
  const popularQuestions = config?.popularQuestions || [];
  const partnerResources = config?.partnerResources || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
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
      HiOutlineDownload,
      HiOutlineGlobeAlt,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineX,
      HiOutlineDocumentText,
      HiOutlineCalendar,
      HiOutlineSparkles,
      HiOutlineUserGroup,
      HiOutlineChartBar,
      HiOutlineTrophy,
      HiOutlineUserAdd,
      HiOutlineBadgeCheck,
      HiOutlineStar,
      HiOutlineBuildingOffice2,
      HiOutlineChip,
      HiOutlineOfficeBuilding,
      HiOutlineAcademicCap,
      HiOutlineCode,
      HiOutlineGift,
      HiOutlineClipboardList,
      HiOutlineInformationCircle,
      MdOutlineHandshake,
    };
    const IconComponent = icons[iconName] || HiOutlineInformationCircle;
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
      localStorage.setItem('partnerFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedPartnerFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle partner application submission
   */
  const handleApplicationSubmit = useCallback((e) => {
    e.preventDefault();
    if (!applicationForm.companyName || !applicationForm.contactName || !applicationForm.email || !applicationForm.agreeTerms) return;

    const newApplicationId = `PART-${Math.floor(Math.random() * 100000)}`;
    setApplicationId(newApplicationId);

    setTimeout(() => {
      setApplicationSubmitted(true);
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationSubmitted(false);
        setApplicationForm({
          companyName: '', website: '', contactName: '', email: '', phone: '',
          country: '', partnerType: 'implementation', targetLevel: 'registered',
          companySize: '', yearsInBusiness: '', currentCustomers: '', annualRevenue: '',
          referralPartners: '', reasonForApplying: '', expertise: '', referralSource: '',
          agreeTerms: false, subscribeUpdates: false,
        });
        setApplicationId('');
      }, 5000);
    }, 1000);
  }, [applicationForm]);

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
    linkElement.setAttribute('download', 'partner-faq-export.json');
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
        <mark key={i} className="bg-indigo-200 dark:bg-indigo-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('partnerFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedPartnerFaqs');
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
      aria-label="Partner Inquiries Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-indigo-100 dark:bg-indigo-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-indigo-200 dark:border-indigo-800'}`}
            aria-label="Partner badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-indigo-700 dark:text-indigo-300'}`}>
              {config?.badge?.text || "Partner Ecosystem"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Accelerate Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Growth'}
            </span>{' '}
            {config?.title?.suffix || 'as a Partner'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Join our global partner network and unlock new revenue streams, access exclusive resources, and collaborate with industry leaders. Together, we'll build something extraordinary."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-indigo-600 dark:text-indigo-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== PARTNER LEVELS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Partner Levels
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Progress through our partner tiers to unlock greater benefits and higher commissions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerLevels.map((level, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${level.featured ? 'ring-2 ring-indigo-500 scale-105 md:scale-105 z-10' : ''
                  }`}
              >
                {level.featured && (
                  <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                    {getIcon(level.icon, "w-12 h-12")}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{level.name}</h4>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {level.commission}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{level.description}</p>
                  <ul className="space-y-2 mb-6 text-left">
                    {level.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={level.ctaLink}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${level.featured
                      ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {level.ctaText}
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SUCCESS STORIES ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Partner Success Stories
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            See how our partners are growing and succeeding with our program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600 dark:text-indigo-400 text-4xl">
                    {getIcon(story.icon, "w-10 h-10")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                    <div className="text-xs text-gray-500">{story.partnerType}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">"{story.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{story.result}</div>
                  <Link href={story.link} className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                    Read Story
                    <HiOutlineArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PARTNER EVENTS ==================== */}
        <div className="mb-16 bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-indigo-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Partner Events</h3>
            <p className="text-gray-600 dark:text-gray-400">Join us for training, networking, and exclusive partner events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerEvents.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">
                  {getIcon(event.icon, "w-8 h-8")}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-2">
                  {getIcon("HiOutlineCalendar", "w-3 h-3")}
                  {event.date}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{event.description}</p>
                <Link href={event.link} className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Register Now
                  <HiOutlineArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => setShowPartnerPortal(!showPartnerPortal)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${showPartnerPortal
              ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Partner Resources
          </button>
          <button
            onClick={() => setShowApplicationForm(true)}
            className="px-6 py-2.5 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </button>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        {activeTab === 'faq' && (
          <>
            {/* Popular Questions */}
            {popularQuestions.length > 0 && searchQuery === '' && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
                  Popular Partner Questions
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
                  placeholder="Search partner questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
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
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
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
                          ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
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
                            ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
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
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
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
                        <div className="text-indigo-600 dark:text-indigo-400">
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
                                  <div className="text-indigo-600 dark:text-indigo-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-indigo-600' : ''}`)}
                                  </button>
                                  <div className="text-indigo-500 dark:text-indigo-400">
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
                                      className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
                  onClick={() => setShowApplicationForm(true)}
                  className="mt-4 px-6 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Apply to Become a Partner
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-indigo-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-indigo-600 dark:text-indigo-400">
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
                            className="text-xs text-indigo-600 dark:text-indigo-400 mt-1 hover:underline"
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

        {/* ==================== PARTNER RESOURCES SECTION ==================== */}
        {showPartnerPortal && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerResources.map((resource, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-3">
                    {getIcon(resource.icon, "w-10 h-10")}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.items} resources</span>
                    <Link href={resource.link} className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:gap-2 transition-all duration-200">
                      Browse
                      <HiOutlineArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/partner-portal"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-200 group"
              >
                Access Partner Portal
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* ==================== PARTNER RESOURCES SECTION (PERMANENT) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-indigo-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-indigo-600 dark:text-indigo-400">
              {getIcon("HiOutlineDownload", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Program Guide</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download our comprehensive partner program guide
            </p>
            <Link
              href="/downloads/partner-guide.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
              Download Guide
            </Link>
          </div>

          <div className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-indigo-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-indigo-600 dark:text-indigo-400">
              {getIcon("HiOutlineGlobeAlt", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Portal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Access resources, training, and support materials
            </p>
            <Link
              href="/partner-portal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineGlobeAlt", "w-4 h-4")}
              Access Portal
            </Link>
          </div>

          <div className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-indigo-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-indigo-600 dark:text-indigo-400">
              {getIcon("HiOutlineTrophy", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See how partners are succeeding with our program
            </p>
            <Link
              href="/partner-success-stories"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineTrophy", "w-4 h-4")}
              Read Stories
            </Link>
          </div>
        </div>

        {/* ==================== APPLICATION FORM MODAL ==================== */}
        {showApplicationForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowApplicationForm(false)}
            role="dialog"
            aria-label="Partner application form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partner Application</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Join our growing network of partners</p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {!applicationSubmitted ? (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name *</label>
                        <input
                          type="text"
                          value={applicationForm.companyName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, companyName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                        <input
                          type="url"
                          value={applicationForm.website}
                          onChange={(e) => setApplicationForm({ ...applicationForm, website: e.target.value })}
                          placeholder="https://example.com"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact Name *</label>
                        <input
                          type="text"
                          value={applicationForm.contactName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, contactName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                        <input
                          type="email"
                          value={applicationForm.email}
                          onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                        <input
                          type="tel"
                          value={applicationForm.phone}
                          onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                        <select
                          value={applicationForm.country}
                          onChange={(e) => setApplicationForm({ ...applicationForm, country: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select country</option>
                          {countries.map((country, idx) => (
                            <option key={idx} value={country.value}>{country.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Partner Type *</label>
                        <select
                          value={applicationForm.partnerType}
                          onChange={(e) => setApplicationForm({ ...applicationForm, partnerType: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="implementation">Implementation Partner</option>
                          <option value="technology">Technology Partner</option>
                          <option value="reseller">Reseller Partner</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Partner Level</label>
                        <select
                          value={applicationForm.targetLevel}
                          onChange={(e) => setApplicationForm({ ...applicationForm, targetLevel: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="registered">Registered</option>
                          <option value="certified">Certified</option>
                          <option value="premier">Premier</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                        <select
                          value={applicationForm.companySize}
                          onChange={(e) => setApplicationForm({ ...applicationForm, companySize: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size, idx) => (
                            <option key={idx} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Years in Business</label>
                        <select
                          value={applicationForm.yearsInBusiness}
                          onChange={(e) => setApplicationForm({ ...applicationForm, yearsInBusiness: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select</option>
                          <option value="<1">Less than 1 year</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Customers</label>
                        <input
                          type="text"
                          value={applicationForm.currentCustomers}
                          onChange={(e) => setApplicationForm({ ...applicationForm, currentCustomers: e.target.value })}
                          placeholder="e.g., 100+ businesses"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Revenue</label>
                        <select
                          value={applicationForm.annualRevenue}
                          onChange={(e) => setApplicationForm({ ...applicationForm, annualRevenue: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select range</option>
                          <option value="<1M">Less than $1M</option>
                          <option value="1M-5M">$1M - $5M</option>
                          <option value="5M-10M">$5M - $10M</option>
                          <option value="10M-50M">$10M - $50M</option>
                          <option value="50M+">$50M+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Why do you want to become a partner? *</label>
                      <textarea
                        rows={3}
                        value={applicationForm.reasonForApplying}
                        onChange={(e) => setApplicationForm({ ...applicationForm, reasonForApplying: e.target.value })}
                        placeholder="Tell us about your business, expertise, and why you're interested in partnering with us..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Relevant Expertise</label>
                      <textarea
                        rows={2}
                        value={applicationForm.expertise}
                        onChange={(e) => setApplicationForm({ ...applicationForm, expertise: e.target.value })}
                        placeholder="Describe your relevant experience, technical capabilities, and areas of expertise..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                      <select
                        value={applicationForm.referralSource}
                        onChange={(e) => setApplicationForm({ ...applicationForm, referralSource: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select source</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="event">Event/Conference</option>
                        <option value="referral">Partner Referral</option>
                        <option value="email">Email Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={applicationForm.agreeTerms}
                          onChange={(e) => setApplicationForm({ ...applicationForm, agreeTerms: e.target.checked })}
                          className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 mt-0.5"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          I agree to the <Link href="/partner-terms" className="text-indigo-600 hover:underline">Partner Terms and Conditions</Link> and confirm that the information provided is accurate. *
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={applicationForm.subscribeUpdates}
                          onChange={(e) => setApplicationForm({ ...applicationForm, subscribeUpdates: e.target.checked })}
                          className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 mt-0.5"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          Subscribe to partner updates, training opportunities, and event invitations
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Submit Application
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Thank you for your interest in becoming a partner.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">Application ID: {applicationId}</span>
                    </div>
                    <p className="text-sm text-gray-500">Our partner team will review your application and contact you within 5-7 business days.</p>
                    <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
                      {getIcon("HiOutlineSparkles", "w-3 h-3")}
                      You'll receive a confirmation email shortly with next steps.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== PARTNER CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-indigo-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
              <MdOutlineHandshake className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to become a partner? Join our growing network of partners today."}
            </span>
            <Link
              href={config?.contactLink || "/partner/apply"}
              className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Apply Now"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== PARTNER GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Join our partner network and receive dedicated support, training, and competitive commission rates"}
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

export default PartnerInquiriesSection3;