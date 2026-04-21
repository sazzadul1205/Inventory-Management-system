// frontend/Blog/ExpertArticlesSection/ExpertArticlesSection3.jsx

/**
 * Expert Articles Section - Comprehensive Knowledge Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Masterclasses, Research Papers, Expert Articles, Live Events, Expert Directory)
 * - Featured masterclass hero banner with certificate badge
 * - Research papers with expandable abstracts and download links
 * - Masterclass cards with level badges, duration, and lesson counts
 * - Upcoming events calendar with speaker attribution
 * - Expert directory grid with profile cards
 * - Search and multi-filter (category, expert)
 * - Save/bookmark functionality for articles
 * - Citation counts for research papers
 * - Rating and review metrics for masterclasses
 * - Video thumbnail overlays
 * - Newsletter subscription integration
 * - Animated gradient backgrounds
 * 
 * All icons from react-icons (hi, fa, hi2 - Heroicons + FontAwesome)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, FontAwesome, and Heroicons 2 for variety
import { FaQuoteLeft, FaCertificate } from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlineNewspaper,
  HiOutlineQuestionMarkCircle,
  HiOutlinePencil,
  HiOutlineBookOpen,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlineTemplate,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineZoomIn,
  HiOutlineDownload,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const ExpertArticlesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [expandedPaper, setExpandedPaper] = useState(null);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('masterclasses');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const searchInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Topics', icon: 'newspaper' },
    { id: 'strategy', label: 'Strategy', icon: 'chart' },
    { id: 'technology', label: 'Technology', icon: 'chip' },
    { id: 'operations', label: 'Operations', icon: 'cog' },
    { id: 'sustainability', label: 'Sustainability', icon: 'globe' },
    { id: 'leadership', label: 'Leadership', icon: 'users' },
    { id: 'innovation', label: 'Innovation', icon: 'rocket' }
  ], [config?.categories]);

  const experts = useMemo(() => config?.experts || [], [config?.experts]);
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const masterclasses = useMemo(() => config?.masterclasses || [], [config?.masterclasses]);
  const upcomingEvents = useMemo(() => config?.upcomingEvents || [], [config?.upcomingEvents]);
  const researchPapers = useMemo(() => config?.researchPapers || [], [config?.researchPapers]);
  const featuredMasterclass = useMemo(() => config?.featuredMasterclass || null, [config?.featuredMasterclass]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, and FontAwesome
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      user: HiOutlineUser,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineRocketLaunch,
      trophy: HiOutlineStar,
      users: HiOutlineUserGroup,
      globe: HiOutlineGlobe,
      chart: HiOutlineChartBar,
      lightbulb: HiOutlineLightBulb,
      check: HiOutlineCheckCircle,
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      microphone: HiOutlineMicrophone,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      star: HiOutlineStar,
      trending: HiOutlineTrendingUp,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      briefcase: HiOutlineBriefcase,
      location: HiOutlineLocationMarker,
      usergroup: HiOutlineUsers,
      chip: HiOutlineChip,
      cloud: HiOutlineCloudUpload,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      archive: HiOutlineArchive,
      photo: HiOutlinePhotograph,
      doc: HiOutlineDocument,
      link: HiOutlineLink,
      credit: HiOutlineCreditCard,
      pie: HiOutlineChartPie,
      quote: FaQuoteLeft,
      at: HiOutlineAtSymbol,
      building: HiOutlineOfficeBuilding,
      newspaper: HiOutlineNewspaper,
      question: HiOutlineQuestionMarkCircle,
      pencil: HiOutlinePencil,
      book: HiOutlineBookOpen,
      badge: HiOutlineBadgeCheck,
      certificate: FaCertificate,
      clipboard: HiOutlineClipboardList,
      template: HiOutlineTemplate,
      code: HiOutlineCode,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      desktop: HiOutlineDesktopComputer,
      mobile: HiOutlineDeviceMobile,
      wifi: HiOutlineWifi,
      zoom: HiOutlineZoomIn,
      download: HiOutlineDownload,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineAcademicCap className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to short display format
   */
  const formatDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'strategy': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chart', label: 'Strategy' },
      'technology': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Technology' },
      'operations': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'cog', label: 'Operations' },
      'sustainability': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Sustainability' },
      'leadership': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Leadership' },
      'innovation': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'rocket', label: 'Innovation' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'document', label: 'Article' };
  }, []);

  /**
   * Toggle save/bookmark status for an article
   */
  const handleSaveArticle = useCallback((articleId) => {
    setSavedArticles(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedExpert(null);
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      e.target.reset();
    }
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title?.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (selectedExpert) {
      filtered = filtered.filter(article => article.author?.id === selectedExpert);
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedExpert]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedExpert !== null;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Expert Knowledge Hub - Masterclasses, Research & Expert Content"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("academic", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Expert Knowledge Hub"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Learn from"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "World-Class Experts"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Access masterclasses, research papers, and exclusive content from leading supply chain experts and practitioners."}
          </p>
        </div>

        {/* ==================== MAIN TABS ==================== */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-6">
            {[
              { id: 'masterclasses', label: 'Masterclasses', icon: 'certificate', count: masterclasses.length },
              { id: 'research', label: 'Research Papers', icon: 'document', count: researchPapers.length },
              { id: 'articles', label: 'Expert Articles', icon: 'book', count: filteredArticles.length },
              { id: 'events', label: 'Live Events', icon: 'calendar', count: upcomingEvents.length },
              { id: 'experts', label: 'Expert Directory', icon: 'users', count: experts.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 whitespace-nowrap ${activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                  : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                aria-label={`Switch to ${tab.label} tab`}
              >
                {getIcon(tab.icon, "w-5 h-5")}
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== MASTERCLASSES TAB ==================== */}
        {activeTab === 'masterclasses' && (
          <div>
            {/* Featured Masterclass Hero */}
            {featuredMasterclass && (
              <div className="mb-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 p-8 text-white">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {getIcon("badge", "w-5 h-5")}
                      <span className="text-sm font-semibold uppercase">Featured Masterclass</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredMasterclass.title}</h2>
                    <p className="text-blue-100 mb-6 leading-relaxed">{featuredMasterclass.description}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={featuredMasterclass.instructor.avatar}
                        alt={featuredMasterclass.instructor.name}
                        className="w-12 h-12 rounded-full border-2 border-white"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold">{featuredMasterclass.instructor.name}</p>
                        <p className="text-sm text-blue-100">{featuredMasterclass.instructor.title}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredMasterclass.link}
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                      >
                        Enroll Now
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                        {getIcon("play", "w-4 h-4")}
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={featuredMasterclass.image}
                      alt={featuredMasterclass.title}
                      className="rounded-2xl shadow-xl w-full object-cover h-64"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 rounded-full p-3 shadow-lg">
                      <FaCertificate className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Masterclasses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {masterclasses.map((masterclass) => (
                <div
                  key={masterclass.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={masterclass.image}
                      alt={masterclass.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                        {masterclass.level}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                          {getIcon("clock", "w-3 h-3")}
                          {masterclass.duration}
                        </span>
                        <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                          {getIcon("video", "w-3 h-3")}
                          {masterclass.lessons} lessons
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src={masterclass.instructor.avatar}
                        alt={masterclass.instructor.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{masterclass.instructor.name}</p>
                        <p className="text-xs text-gray-500">{masterclass.instructor.title}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {masterclass.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {masterclass.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-1">
                        {getIcon("star", "w-4 h-4 text-amber-400 fill-current")}
                        <span className="text-sm font-semibold">{masterclass.rating}</span>
                        <span className="text-xs text-gray-500">({masterclass.reviews})</span>
                      </div>
                      <Link
                        href={masterclass.link}
                        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== RESEARCH PAPERS TAB ==================== */}
        {activeTab === 'research' && (
          <div className="space-y-4 mb-12">
            {researchPapers.map((paper) => {
              const isExpanded = expandedPaper === paper.id;
              return (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(paper.category).color}`}>
                          {paper.category}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(paper.date)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{paper.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{paper.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          {getIcon("user", "w-4 h-4")}
                          {paper.authors.join(', ')}
                        </span>
                        <span className="flex items-center gap-1">
                          {getIcon("eye", "w-4 h-4")}
                          {paper.citations} citations
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={paper.downloadUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                        aria-label="Download PDF"
                      >
                        {getIcon("download", "w-4 h-4")}
                        Download PDF
                      </a>
                      <button
                        onClick={() => setExpandedPaper(isExpanded ? null : paper.id)}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                        aria-label={isExpanded ? "Hide abstract" : "Show abstract"}
                      >
                        {isExpanded ? 'Show Less' : 'Abstract'}
                      </button>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl animate-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== EXPERT ARTICLES TAB ==================== */}
        {activeTab === 'articles' && (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon("search", "w-5 h-5 text-gray-400")}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  ref={searchInputRef}
                  aria-label="Search articles"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Clear search"
                  >
                    {getIcon("close", "w-5 h-5")}
                  </button>
                )}
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
              <select
                value={selectedExpert || ''}
                onChange={(e) => setSelectedExpert(e.target.value || null)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Filter by expert"
              >
                <option value="">All Experts</option>
                {experts.map(expert => (
                  <option key={expert.id} value={expert.id}>{expert.name}</option>
                ))}
              </select>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredArticles.map((article) => {
                const categoryConfig = getCategoryConfig(article.category);
                const isSaved = savedArticles.includes(article.id);

                return (
                  <div
                    key={article.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <Link href={article.link} className="block overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      {/* Metadata Row */}
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          {getIcon("calendar", "w-4 h-4")}
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {getIcon("clock", "w-4 h-4")}
                          <span>{article.readTime || '8 min read'}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        <Link href={article.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {article.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <img
                            src={article.author?.avatar}
                            alt={article.author?.name}
                            className="w-6 h-6 rounded-full object-cover"
                            loading="lazy"
                          />
                          <span className="text-xs text-gray-500">{article.author?.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleSaveArticle(article.id)}
                            className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                            aria-label={isSaved ? "Remove from saved" : "Save article"}
                          >
                            {getIcon("bookmark", "w-4 h-4")}
                          </button>
                          <Link href={article.link} className="text-blue-600 text-sm font-semibold hover:underline">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("academic", "w-16 h-16")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* ==================== LIVE EVENTS TAB ==================== */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {getIcon("clock", "w-4 h-4")}
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {getIcon("location", "w-4 h-4")}
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{event.description}</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={event.speaker.avatar}
                        alt={event.speaker.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{event.speaker.name}</span>
                      <span className="text-xs text-gray-500">{event.speaker.title}</span>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={event.link}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                      >
                        Register Now
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EXPERT DIRECTORY TAB ==================== */}
        {activeTab === 'experts' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 dark:border-blue-900"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{expert.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{expert.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{expert.bio}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{expert.articles} articles</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{expert.yearsExperience}+ years</span>
                </div>
                <Link
                  href={`/experts/${expert.id}`}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                >
                  View Profile
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* ==================== NEWSLETTER SECTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center max-w-2xl mx-auto">
              {getIcon("bell", "w-12 h-12 mx-auto mb-4")}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {config?.newsletter?.title || "Get Expert Insights"}
              </h3>
              <p className="text-blue-100 mb-6">
                {config?.newsletter?.description || "Subscribe to receive exclusive masterclasses, research papers, and expert articles."}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Email for expert insights newsletter"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
              {emailSubmitted && (
                <p className="text-sm text-blue-100 mt-4 animate-fadeIn">
                  Thanks for subscribing! Check your inbox for confirmation.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertArticlesSection3;