// frontend/Blog/CompanyNewsSection/CompanyNewsSection2.jsx

/**
 * Company News Section - Newsroom & Press Releases Hub
 * 
 * Unique design elements:
 * - Dual view mode (Grid and Timeline)
 * - Year filter for chronological navigation
 * - Hero stats cards displaying key metrics
 * - Press release badges for official announcements
 * - Media contact section with email and phone
 * - Press kit download button
 * - Timeline view with alternating layout
 * - Expandable content sections
 * - Category filters with icons
 * - Search functionality across titles and content
 * - Save/bookmark functionality
 * - Author attribution with avatars
 * - Tag cloud for content categorization
 * - Animated gradient backgrounds
 * - Responsive grid and timeline layouts
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
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
} from 'react-icons/hi';

const CompanyNewsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [savedNews, setSavedNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNews, setExpandedNews] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const news = useMemo(() => config?.news || [], [config?.news]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All News', icon: 'newspaper' },
    { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
    { id: 'product', label: 'Product Updates', icon: 'chip' },
    { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
    { id: 'award', label: 'Awards', icon: 'trophy' },
    { id: 'event', label: 'Events', icon: 'calendar' }
  ], [config?.categories]);

  const heroStats = useMemo(() => config?.heroStats || [
    { value: '150+', label: 'News Articles' },
    { value: '50+', label: 'Press Releases' },
    { value: '30+', label: 'Awards Received' },
    { value: '100+', label: 'Media Mentions' }
  ], [config?.heroStats]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      newspaper: HiOutlineNewspaper,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      download: HiOutlineDownload,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineTrendingUp,
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
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineNewspaper className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to various display formats
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    if (format === 'month') {
      return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'Announcement' },
      'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update' },
      'partnership': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'handshake', label: 'Partnership' },
      'award': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'trophy', label: 'Award' },
      'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event' },
      'press': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'newspaper', label: 'Press Release' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: 'News' };
  }, []);

  /**
   * Get unique years from news data for filter dropdown
   */
  const getAvailableYears = useCallback(() => {
    const years = new Set();
    news.forEach(item => {
      if (item.date) {
        years.add(new Date(item.date).getFullYear());
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [news]);

  /**
   * Toggle save/bookmark status for a news item
   */
  const handleSaveNews = useCallback((newsId) => {
    setSavedNews(prev =>
      prev.includes(newsId)
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  }, []);

  /**
   * Toggle expanded state for a news item
   */
  const toggleExpanded = useCallback((newsId) => {
    setExpandedNews(prev => prev === newsId ? null : newsId);
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredNews = useMemo(() => {
    let filtered = [...news];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(query) ||
        item.excerpt?.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(item =>
        new Date(item.date).getFullYear().toString() === selectedYear
      );
    }

    return filtered;
  }, [news, searchQuery, selectedCategory, selectedYear]);

  // Group news by month for timeline view
  const groupedNews = useMemo(() => {
    const groups = {};
    filteredNews.forEach(item => {
      const monthYear = formatDate(item.date, 'month');
      if (!groups[monthYear]) groups[monthYear] = [];
      groups[monthYear].push(item);
    });
    return groups;
  }, [filteredNews, formatDate]);

  const availableYears = getAvailableYears();
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedYear !== 'all';

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Company News - Newsroom & Press Releases Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("newspaper", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Newsroom"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Latest"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "News"}
            </span>{' '}
            {config?.title?.suffix || "& Press Releases"}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Stay informed about our latest announcements, product innovations, partnerships, and company milestones."}
          </p>

          {/* Hero Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Search news, press releases, or topics..."}
              className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search news"
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

          <div className="flex gap-3">
            {/* Year Filter Dropdown */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by year"
            >
              <option value="all">All Years</option>
              {availableYears.map(year => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                {getIcon("grid", "w-5 h-5")}
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Timeline view"
              >
                {getIcon("menu", "w-5 h-5")}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label} news`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== GRID VIEW ==================== */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredNews.map((item) => {
              const categoryConfig = getCategoryConfig(item.category);
              const isSaved = savedNews.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  {/* News Image */}
                  <Link href={item.link} className="block overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                    </div>
                    {item.isPressRelease && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
                          Press Release
                        </span>
                      </div>
                    )}
                  </Link>

                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatDate(item.date, 'short')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {item.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.author?.avatar}
                          alt={item.author?.name}
                          className="w-6 h-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.author?.name}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleSaveNews(item.id)}
                          className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                          aria-label={isSaved ? "Remove from saved" : "Save news"}
                        >
                          {getIcon("bookmark", "w-4 h-4")}
                        </button>
                        <Link
                          href={item.link}
                          className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== TIMELINE VIEW ==================== */}
        {viewMode === 'timeline' && (
          <div className="relative mb-12">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600 hidden md:block" aria-hidden="true" />

            <div className="space-y-12">
              {Object.entries(groupedNews).map(([monthYear, newsItems]) => (
                <div key={monthYear}>
                  {/* Month Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white px-4">{monthYear}</h3>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  </div>

                  <div className="space-y-8">
                    {newsItems.map((item, index) => {
                      const categoryConfig = getCategoryConfig(item.category);
                      const isExpanded = expandedNews === item.id;
                      const isEven = index % 2 === 0;

                      return (
                        <div
                          key={item.id}
                          className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                          {/* Timeline Dot */}
                          <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:block" aria-hidden="true" />

                          {/* Date Badge (Mobile) */}
                          <div className="md:hidden flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              {getIcon("calendar", "w-4 h-4 text-blue-600")}
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              {formatDate(item.date, 'short')}
                            </span>
                          </div>

                          {/* Content Card */}
                          <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                              {/* Category and Date */}
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                                  {categoryConfig.label}
                                </span>
                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  {getIcon("calendar", "w-4 h-4")}
                                  <span>{formatDate(item.date, 'short')}</span>
                                </div>
                              </div>

                              {/* Title */}
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                  {item.title}
                                </Link>
                              </h3>

                              {/* Excerpt */}
                              <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {item.excerpt}
                              </p>

                              {/* Expandable Content */}
                              {item.content && (
                                <div className="mb-3">
                                  <button
                                    onClick={() => toggleExpanded(item.id)}
                                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                    aria-label={isExpanded ? "Show less" : "Read full story"}
                                  >
                                    {isExpanded ? 'Show less' : 'Read full story'}
                                    {isExpanded ? getIcon("chevronUp", "w-4 h-4") : getIcon("chevronDown", "w-4 h-4")}
                                  </button>

                                  {isExpanded && (
                                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 animate-fadeIn">
                                      {item.content}
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* Footer */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-2">
                                  <img
                                    src={item.author?.avatar}
                                    alt={item.author?.name}
                                    className="w-6 h-6 rounded-full object-cover"
                                    loading="lazy"
                                  />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.author?.name}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => handleSaveNews(item.id)}
                                    className={`transition-colors ${savedNews.includes(item.id) ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                                    aria-label={savedNews.includes(item.id) ? "Remove from saved" : "Save news"}
                                  >
                                    {getIcon("bookmark", "w-4 h-4")}
                                  </button>
                                  <Link
                                    href={item.link}
                                    className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                                  >
                                    Read More →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Empty spacer for alignment */}
                          <div className="hidden md:block md:w-1/2" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("newspaper", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No news found</h3>
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

        {/* ==================== PRESS KIT SECTION ==================== */}
        {config?.showPressKit && (
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  {getIcon("download", "w-6 h-6 text-blue-600 dark:text-blue-400")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Press Kit & Media Resources</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Download logos, brand assets, and media resources</p>
                </div>
              </div>
              <Link
                href={config?.pressKitLink || "/press-kit"}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {getIcon("download", "w-4 h-4")}
                Download Press Kit
              </Link>
            </div>
          </div>
        )}

        {/* ==================== MEDIA CONTACT SECTION ==================== */}
        {config?.showMediaContact && (
          <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getIcon("mail", "w-5 h-5")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Media Contact</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{config?.mediaContact?.name || "Sarah Johnson"}</h3>
                <p className="text-blue-100">{config?.mediaContact?.title || "Head of Communications"}</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`mailto:${config?.mediaContact?.email || "media@supplychainpro.com"}`}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Email media contact"
                >
                  {getIcon("mail", "w-4 h-4")}
                  Email
                </a>
                <a
                  href={config?.mediaContact?.phone ? `tel:${config.mediaContact.phone.replace(/[^0-9+]/g, '')}` : "tel:+1234567890"}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Call media contact"
                >
                  {getIcon("microphone", "w-4 h-4")}
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
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

export default CompanyNewsSection2;