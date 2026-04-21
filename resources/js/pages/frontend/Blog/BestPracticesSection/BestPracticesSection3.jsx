// frontend/Blog/BestPracticesSection/BestPracticesSection3.jsx

/**
 * Best Practices Section - Comprehensive Knowledge Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Practices, Maturity Assessment, Webinars, Toolkits)
 * - Supply chain maturity assessment with scoring and recommendations
 * - Video webinar gallery with modal player
 * - Downloadable toolkit library with format indicators
 * - Interactive assessment questionnaire with Likert scale
 * - Personalized maturity level results with recommended next steps
 * - Category filters with count badges
 * - Author attribution with avatars
 * - Key metrics display for each practice
 * - Animated gradient background
 * - Newsletter subscription with stats
 * - Circuit board background pattern
 * - Save/bookmark functionality
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSparkles,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardList,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineCalculator,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
  HiOutlineBadgeCheck,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineExternalLink,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineBookOpen,
  HiOutlineTemplate,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineZoomIn,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineCreditCard,
} from 'react-icons/hi';

const BestPracticesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('practices');
  const [savedPractices, setSavedPractices] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== REFS ====================
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const webinars = useMemo(() => config?.webinars || [], [config?.webinars]);
  const toolkits = useMemo(() => config?.toolkits || [], [config?.toolkits]);
  const practices = useMemo(() => config?.practices || [], [config?.practices]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Practices', icon: 'sparkles', count: practices.length },
    { id: 'inventory', label: 'Inventory', icon: 'cube' },
    { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
    { id: 'transportation', label: 'Transportation', icon: 'truck' },
    { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
    { id: 'technology', label: 'Technology', icon: 'cog' }
  ], [config?.categories, practices.length]);

  const maturityQuestions = useMemo(() => config?.maturityAssessment?.questions || [], [config?.maturityAssessment]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('bestPracticesSaved');
    if (saved) setSavedPractices(JSON.parse(saved));
    const savedAssessment = localStorage.getItem('maturityAssessment');
    if (savedAssessment) setAssessmentAnswers(JSON.parse(savedAssessment));
  }, []);

  useEffect(() => {
    localStorage.setItem('bestPracticesSaved', JSON.stringify(savedPractices));
  }, [savedPractices]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      lightbulb: HiOutlineLightBulb,
      chart: HiOutlineChartBar,
      truck: HiOutlineTruck,
      cube: HiOutlineCube,
      shield: HiOutlineShieldCheck,
      clock: HiOutlineClock,
      users: HiOutlineUsers,
      globe: HiOutlineGlobe,
      trending: HiOutlineTrendingUp,
      check: HiOutlineCheckCircle,
      star: HiOutlineStar,
      eye: HiOutlineEye,
      calendar: HiOutlineCalendar,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      download: HiOutlineDownload,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      sparkles: HiOutlineSparkles,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      clipboard: HiOutlineClipboardList,
      scale: HiOutlineScale,
      dollar: HiOutlineCurrencyDollar,
      refresh: HiOutlineRefresh,
      cog: HiOutlineCog,
      calculator: HiOutlineCalculator,
      pie: HiOutlineChartPie,
      bar: HiOutlineChartSquareBar,
      clipboardCheck: HiOutlineClipboardCheck,
      badgeCheck: HiOutlineBadgeCheck,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      external: HiOutlineExternalLink,
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      microphone: HiOutlineMicrophone,
      newspaper: HiOutlineNewspaper,
      book: HiOutlineBookOpen,
      template: HiOutlineTemplate,
      code: HiOutlineCode,
      cloud: HiOutlineCloudUpload,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      zoom: HiOutlineZoomIn,
      desktop: HiOutlineDesktopComputer,
      mobile: HiOutlineDeviceMobile,
      wifi: HiOutlineWifi,
      credit: HiOutlineCreditCard,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineLightBulb className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management' },
      'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations' },
      'transportation': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'truck', label: 'Transportation' },
      'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment' },
      'sustainability': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Sustainability' },
      'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'lightbulb', label: 'Best Practice' };
  }, []);

  /**
   * Returns maturity level configuration
   */
  const getMaturityConfig = useCallback((level) => {
    const configs = {
      'initial': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Initial', description: 'Ad-hoc processes, limited visibility' },
      'developing': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Developing', description: 'Some processes defined, partial visibility' },
      'defined': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', label: 'Defined', description: 'Standardized processes, good visibility' },
      'managed': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Managed', description: 'Measured and controlled processes' },
      'optimizing': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Optimizing', description: 'Continuous improvement culture' }
    };
    return configs[level] || configs.initial;
  }, []);

  /**
   * Toggle save/bookmark status for a practice
   */
  const handleSavePractice = useCallback((practiceId) => {
    setSavedPractices(prev =>
      prev.includes(practiceId)
        ? prev.filter(id => id !== practiceId)
        : [...prev, practiceId]
    );
  }, []);

  /**
   * Handle assessment answer selection
   */
  const handleAssessmentAnswer = useCallback((questionId, value) => {
    setAssessmentAnswers(prev => ({ ...prev, [questionId]: value }));
  }, []);

  /**
   * Calculate maturity assessment result
   */
  const calculateMaturity = useCallback(() => {
    const totalScore = Object.values(assessmentAnswers).reduce((sum, val) => sum + val, 0);
    const maxScore = maturityQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let level = 'initial';
    if (percentage >= 80) level = 'optimizing';
    else if (percentage >= 60) level = 'managed';
    else if (percentage >= 40) level = 'defined';
    else if (percentage >= 20) level = 'developing';

    setAssessmentResult({ percentage, level, totalScore, maxScore });
  }, [assessmentAnswers, maturityQuestions]);

  /**
   * Reset maturity assessment
   */
  const resetAssessment = useCallback(() => {
    setAssessmentResult(null);
    setAssessmentAnswers({});
  }, []);

  /**
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
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
  const filteredPractices = useMemo(() => {
    let filtered = [...practices];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(practice =>
        practice.title?.toLowerCase().includes(query) ||
        practice.description?.toLowerCase().includes(query) ||
        practice.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(practice => practice.category === selectedCategory);
    }

    return filtered;
  }, [practices, searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';
  const assessmentCompleted = Object.keys(assessmentAnswers).length === maturityQuestions.length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Best Practices - Comprehensive Knowledge Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-3" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-3)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("badgeCheck", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Best Practices Hub"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Supply Chain"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Best Practices"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Comprehensive resources, expert insights, and proven frameworks to help you achieve supply chain excellence."}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Search best practices, webinars, or toolkits..."}
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search best practices"
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
        </div>

        {/* ==================== MAIN TABS ==================== */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-6">
            {[
              { id: 'practices', label: 'Best Practices', icon: 'lightbulb', count: filteredPractices.length },
              { id: 'assessment', label: 'Maturity Assessment', icon: 'clipboardCheck', count: null },
              { id: 'webinars', label: 'Webinars & Videos', icon: 'video', count: webinars.length },
              { id: 'toolkits', label: 'Toolkits & Templates', icon: 'template', count: toolkits.length }
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
                {tab.count !== null && tab.count > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== BEST PRACTICES TAB ==================== */}
        {activeTab === 'practices' && (
          <>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Show ${category.label} practices`}
                >
                  {getIcon(category.icon, "w-4 h-4")}
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-end mb-6">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="Grid view"
                >
                  {getIcon("grid", "w-4 h-4")}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="List view"
                >
                  {getIcon("list", "w-4 h-4")}
                </button>
              </div>
            </div>

            {/* Practices Grid/List View */}
            <div className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredPractices.map((practice) => {
                const categoryConfig = getCategoryConfig(practice.category);
                const isSaved = savedPractices.includes(practice.id);

                return (
                  <div
                    key={practice.id}
                    className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                      }`}
                  >
                    {/* Practice Image */}
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-64 md:shrink-0' : ''}`}>
                      <img
                        src={practice.image}
                        alt={practice.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-48 md:h-full' : 'h-48'
                          }`}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      {practice.videoUrl && (
                        <button
                          onClick={() => {
                            setCurrentVideo(practice.videoUrl);
                            setShowVideoModal(true);
                          }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Watch video"
                        >
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                          </div>
                        </button>
                      )}
                    </div>

                    <div className="p-6 flex-1">
                      {/* Metadata Row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          {getIcon("clock", "w-4 h-4")}
                          <span>{practice.readTime || '8 min read'}</span>
                        </div>
                        <button
                          onClick={() => handleSavePractice(practice.id)}
                          className="text-gray-400 hover:text-amber-500 transition-colors"
                          aria-label={isSaved ? "Remove from saved" : "Save practice"}
                        >
                          {getIcon("bookmark", `w-5 h-5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`)}
                        </button>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        <Link href={practice.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {practice.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {practice.description}
                      </p>

                      {/* Key Metrics */}
                      {practice.keyMetrics && (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {practice.keyMetrics.map((metric, idx) => (
                            <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                              <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <img
                            src={practice.author?.avatar}
                            alt={practice.author?.name}
                            className="w-6 h-6 rounded-full object-cover"
                            loading="lazy"
                          />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{practice.author?.name}</span>
                        </div>
                        <Link
                          href={practice.link}
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                        >
                          Read More
                          <HiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredPractices.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("lightbulb", "w-16 h-16")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
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

        {/* ==================== MATURITY ASSESSMENT TAB ==================== */}
        {activeTab === 'assessment' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {getIcon("clipboardCheck", "w-8 h-8 text-blue-600 dark:text-blue-400")}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Supply Chain Maturity Assessment
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Answer the following questions to assess your organization's supply chain maturity level and get personalized recommendations.
                </p>
              </div>

              {!assessmentResult ? (
                <>
                  <div className="space-y-6 mb-8">
                    {maturityQuestions.map((q, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                        <p className="font-medium text-gray-900 dark:text-white mb-3">{idx + 1}. {q.text}</p>
                        <div className="flex flex-wrap gap-3">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              onClick={() => handleAssessmentAnswer(idx, rating)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${assessmentAnswers[idx] === rating
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                              aria-label={`Rate as ${rating === 1 ? 'Very Low' : rating === 2 ? 'Low' : rating === 3 ? 'Moderate' : rating === 4 ? 'High' : 'Very High'}`}
                            >
                              {rating === 1 && 'Very Low'}
                              {rating === 2 && 'Low'}
                              {rating === 3 && 'Moderate'}
                              {rating === 4 && 'High'}
                              {rating === 5 && 'Very High'}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={calculateMaturity}
                      disabled={!assessmentCompleted}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${assessmentCompleted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                      aria-label="Calculate my maturity level"
                    >
                      Calculate My Maturity Level
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      {getIcon("badgeCheck", "w-12 h-12 text-white")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Your Maturity Level: {getMaturityConfig(assessmentResult.level).label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {getMaturityConfig(assessmentResult.level).description}
                    </p>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                    <div
                      className="bg-linear-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${assessmentResult.percentage}%` }}
                    />
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Score: {assessmentResult.totalScore} / {assessmentResult.maxScore} ({Math.round(assessmentResult.percentage)}%)
                  </p>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetAssessment}
                      className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Retake Assessment
                    </button>
                    <Link
                      href="/resources/maturity-report"
                      className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Download Full Report
                    </Link>
                  </div>

                  {/* Recommended Practices */}
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Next Steps</h4>
                    <ul className="text-left space-y-2">
                      {config?.maturityAssessment?.recommendations?.[assessmentResult.level]?.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          {getIcon("check", "w-4 h-4 text-emerald-500 mt-0.5 shrink-0")}
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== WEBINARS TAB ==================== */}
        {activeTab === 'webinars' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => {
                  setCurrentVideo(webinar.videoUrl);
                  setShowVideoModal(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(webinar.videoUrl) && setShowVideoModal(true)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                      {getIcon("clock", "w-3 h-3")}
                      {webinar.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(webinar.category).color}`}>
                      {webinar.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{webinar.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {webinar.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src={webinar.speaker?.avatar}
                      alt={webinar.speaker?.name}
                      className="w-6 h-6 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{webinar.speaker?.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== TOOLKITS TAB ==================== */}
        {activeTab === 'toolkits' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {toolkits.map((toolkit) => (
              <div
                key={toolkit.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shrink-0">
                    {getIcon(toolkit.icon, "w-6 h-6 text-blue-600")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{toolkit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{toolkit.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{toolkit.format} • {toolkit.pages} pages</span>
                      <Link
                        href={toolkit.downloadLink}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                      >
                        {getIcon("download", "w-4 h-4")}
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== NEWSLETTER SECTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("mail", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config?.newsletter?.title || "Get the latest best practices"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {config?.newsletter?.description || "Subscribe to receive weekly best practices, case studies, and expert insights."}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl placeholder-gray-500 border border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Email for best practices newsletter"
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
                  <p className="text-sm text-blue-100 mt-3 animate-fadeIn">
                    Thanks for subscribing! Check your inbox for confirmation.
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.practices || "50+"}</div>
                  <div className="text-sm text-blue-100">Best Practices</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.experts || "25+"}</div>
                  <div className="text-sm text-blue-100">Expert Contributors</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
              <video
                ref={videoRef}
                src={currentVideo}
                className="w-full"
                controls
                autoPlay
              />
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

export default BestPracticesSection3;