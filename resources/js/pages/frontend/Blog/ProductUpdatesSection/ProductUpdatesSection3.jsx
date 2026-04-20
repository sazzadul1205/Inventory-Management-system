// frontend/Blog/ProductUpdatesSection/ProductUpdatesSection3.jsx

/**
 * Product Updates Section - Multi-View Release Notes Hub
 * 
 * Unique design elements:
 * - Three view modes: Timeline, Grid, and Compact (changelog style)
 * - Featured releases carousel with visual prominence
 * - Year filter for historical navigation
 * - Search across titles, descriptions, features, and tags
 * - Like and bookmark functionality for user engagement
 * - Expandable feature lists per release
 * - Status badges (Live/Beta/Coming Soon)
 * - Category badges (New/Improvement/Fix/Security)
 * - Version tags for semantic versioning
 * - Circuit board background pattern
 * - Sticky month headers in compact view
 * - Scroll-to-release on featured click
 * 
 * All icons from react-icons (hi, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// React Icons - Heroicons and Material Design for variety
import {
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineCalendar,
  HiOutlineTag,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineBell,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineShare,
  HiOutlineTrendingUp,
  HiOutlineChartPie,
  HiOutlineFire,
  HiOutlineBookmark,
  HiOutlineZoomIn,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineSearch,
} from 'react-icons/hi';
import { MdOutlineBarChart } from 'react-icons/md';

const ProductUpdatesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [likedUpdates, setLikedUpdates] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [bookmarkedUpdates, setBookmarkedUpdates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFeatures, setExpandedFeatures] = useState(new Set());
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'timeline');

  // ==================== REFS ====================
  const timelineRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const updates = useMemo(() => config?.updates || [], [config?.updates]);
  const featuredReleases = useMemo(() => config?.featuredReleases || updates.filter(u => u.isFeatured).slice(0, 3), [config?.featuredReleases, updates]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Material Design icons
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      sparkles: <HiOutlineSparkles className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      bell: <HiOutlineBell className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      star: <HiOutlineStar className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      filter: <HiOutlineFilter className={className} />,
      close: <HiOutlineX className={className} />,
      chevronDown: <HiOutlineChevronDown className={className} />,
      chevronUp: <HiOutlineChevronUp className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      thumbsUp: <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      share: <HiOutlineShare className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      bar: <MdOutlineBarChart className={className} />,
      fire: <HiOutlineFire className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      search: <HiOutlineSearch className={className} />,
    };
    return icons[iconName] || <HiOutlineSparkles className={className} />;
  }, []);

  /**
   * Formats date to various display formats
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
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
   * Returns status badge configuration (color, icon, label, badge text)
   */
  const getStatusConfig = useCallback((status) => {
    const configs = {
      live: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'trending', label: 'Now Live', badge: 'LIVE' },
      beta: { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'chip', label: 'Beta', badge: 'BETA' },
      'coming-soon': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'clock', label: 'Coming Soon', badge: 'SOON' },
      planned: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'flag', label: 'Planned', badge: 'PLANNED' }
    };
    return configs[status] || configs.live;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((category) => {
    const configs = {
      new: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'New Feature' },
      improvement: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'trending', label: 'Improvement' },
      fix: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'cog', label: 'Bug Fix' },
      security: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
    };
    return configs[category] || configs.improvement;
  }, []);

  /**
   * Toggle like status for an update
   */
  const handleLike = useCallback((updateId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedUpdates(prev =>
      prev.includes(updateId)
        ? prev.filter(id => id !== updateId)
        : [...prev, updateId]
    );
  }, []);

  /**
   * Toggle bookmark status for an update
   */
  const handleBookmark = useCallback((updateId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedUpdates(prev =>
      prev.includes(updateId)
        ? prev.filter(id => id !== updateId)
        : [...prev, updateId]
    );
  }, []);

  /**
   * Toggle feature list expansion
   */
  const toggleFeatures = useCallback((updateId) => {
    setExpandedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(updateId)) {
        newSet.delete(updateId);
      } else {
        newSet.add(updateId);
      }
      return newSet;
    });
  }, []);

  /**
   * Handles newsletter subscription
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

  /**
   * Clears all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredUpdates = useMemo(() => {
    let filtered = [...updates];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(update =>
        update.title?.toLowerCase().includes(query) ||
        update.description?.toLowerCase().includes(query) ||
        update.features?.some(f => f.toLowerCase().includes(query)) ||
        update.tags?.some(t => t.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(update => update.category === selectedCategory);
    }

    // Apply year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter(update =>
        new Date(update.date).getFullYear().toString() === selectedYear
      );
    }

    // Sort by date descending (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return filtered;
  }, [updates, searchQuery, selectedCategory, selectedYear]);

  // ==================== UNIQUE VALUES FOR FILTERS ====================
  const availableYears = useMemo(() => {
    const years = new Set(updates.map(u => new Date(u.date).getFullYear().toString()));
    return Array.from(years).sort().reverse();
  }, [updates]);

  // ==================== GROUP UPDATES BY MONTH FOR COMPACT VIEW ====================
  const groupedUpdates = useMemo(() => {
    const groups = {};
    filteredUpdates.forEach(update => {
      const monthKey = formatDate(update.date, 'month');
      if (!groups[monthKey]) groups[monthKey] = [];
      groups[monthKey].push(update);
    });
    return groups;
  }, [filteredUpdates, formatDate]);

  // ==================== CATEGORIES ====================
  const categories = ['all', 'new', 'improvement', 'fix', 'security'];

  // ==================== SCROLL TO RELEASE ====================
  useEffect(() => {
    if (selectedRelease && timelineRef.current) {
      const element = document.getElementById(`release-${selectedRelease}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setSelectedRelease(null);
      }
    }
  }, [selectedRelease]);

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedYear !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Product Updates - Multi-View Release Notes Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD STYLE ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("sparkles", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Release Hub"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Product"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Updates"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Track our journey of continuous innovation. Discover new features, improvements, and what's coming next."}
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
              placeholder={config?.searchPlaceholder || "Search updates, features, or tags..."}
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search updates"
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

        {/* ==================== FEATURED RELEASES CAROUSEL ==================== */}
        {config?.showFeatured && featuredReleases.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                {getIcon("fire", "w-6 h-6 text-orange-500")}
                Featured Releases
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredReleases.map((release, idx) => {
                const statusConfig = getStatusConfig(release.status);
                const categoryConfig = getCategoryConfig(release.category);
                return (
                  <div
                    key={release.id}
                    className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => setSelectedRelease(release.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedRelease(release.id)}
                  >
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">{release.version}</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{formatDate(release.date)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{release.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{release.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {release.features?.slice(0, 2).map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          {feature.length > 20 ? `${feature.substring(0, 20)}...` : feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== FILTER BAR ==================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const catConfig = getCategoryConfig(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize flex items-center gap-1 ${selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Show ${cat} updates`}
                >
                  {cat !== 'all' && getIcon(catConfig.icon, "w-4 h-4")}
                  {cat === 'all' ? 'All Updates' : cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by year"
            >
              <option value="all">All Years</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Timeline view"
                title="Timeline view"
              >
                {getIcon("menu", "w-4 h-4")}
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
                title="Grid view"
              >
                {getIcon("grid", "w-4 h-4")}
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'compact' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Compact view"
                title="Compact changelog view"
              >
                {getIcon("list", "w-4 h-4")}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredUpdates.length}</span> updates
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== TIMELINE VIEW ==================== */}
        {viewMode === 'timeline' && (
          <div ref={timelineRef} className="relative mb-12">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block" aria-hidden="true" />

            <div className="space-y-12">
              {filteredUpdates.map((update, index) => {
                const statusConfig = getStatusConfig(update.status);
                const categoryConfig = getCategoryConfig(update.category);
                const isExpanded = expandedFeatures.has(update.id);
                const isLiked = likedUpdates.includes(update.id);
                const isBookmarked = bookmarkedUpdates.includes(update.id);
                const isEven = index % 2 === 0;

                return (
                  <div
                    id={`release-${update.id}`}
                    key={update.id}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>

                    {/* Date Badge (Mobile) */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon("calendar", "w-4 h-4 text-blue-600")}
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {formatDate(update.date)}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6">
                          {/* Header Row */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex flex-wrap gap-2">
                              <span className={`text-xs px-3 py-1 rounded-full ${categoryConfig.color} flex items-center gap-1`}>
                                {getIcon(categoryConfig.icon, "w-3 h-3")}
                                {categoryConfig.label}
                              </span>
                              <span className={`text-xs px-3 py-1 rounded-full ${statusConfig.color} flex items-center gap-1`}>
                                {getIcon(statusConfig.icon, "w-3 h-3")}
                                {statusConfig.label}
                              </span>
                              {update.version && (
                                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                  v{update.version}
                                </span>
                              )}
                            </div>

                            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              {getIcon("calendar", "w-4 h-4")}
                              <span>{formatDate(update.date)}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {update.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {update.description}
                          </p>

                          {/* Expandable Features */}
                          {update.features && update.features.length > 0 && (
                            <div className="mb-4">
                              <button
                                onClick={() => toggleFeatures(update.id)}
                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                aria-label={isExpanded ? "Show fewer features" : `Show ${update.features.length} features`}
                              >
                                {isExpanded ? 'Show fewer features' : `Show ${update.features.length} features`}
                                {isExpanded ? getIcon("chevronUp", "w-4 h-4") : getIcon("chevronDown", "w-4 h-4")}
                              </button>

                              {isExpanded && (
                                <ul className="mt-3 space-y-2">
                                  {update.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      {getIcon("check", "w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0")}
                                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}

                          {/* Tags */}
                          {update.tags && update.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {update.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={(e) => handleLike(update.id, e)}
                                className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                                  }`}
                                aria-label={isLiked ? "Unlike this update" : "Like this update"}
                              >
                                {getIcon("thumbsUp", "w-4 h-4")}
                                <span>{(update.likes || 0) + (isLiked ? 1 : 0)}</span>
                              </button>
                              <button
                                onClick={(e) => handleBookmark(update.id, e)}
                                className={`flex items-center gap-1 text-sm transition-colors ${isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400'
                                  }`}
                                aria-label={isBookmarked ? "Remove from saved" : "Save this update"}
                              >
                                {getIcon("bookmark", "w-4 h-4")}
                                <span>Save</span>
                              </button>
                              <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {getIcon("share", "w-4 h-4")}
                                <span>Share</span>
                              </button>
                            </div>

                            {update.link && (
                              <Link
                                href={update.link}
                                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                              >
                                Learn more
                                <HiArrowRight className="w-4 h-4" />
                              </Link>
                            )}
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
        )}

        {/* ==================== GRID VIEW ==================== */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredUpdates.map((update) => {
              const statusConfig = getStatusConfig(update.status);
              const categoryConfig = getCategoryConfig(update.category);
              const isLiked = likedUpdates.includes(update.id);

              return (
                <div
                  key={update.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>

                    {update.version && (
                      <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
                        v{update.version}
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {update.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {update.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(update.date, 'short')}
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => handleLike(update.id, e)}
                          className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                            }`}
                        >
                          {getIcon("thumbsUp", "w-3 h-3")}
                          <span>{(update.likes || 0) + (isLiked ? 1 : 0)}</span>
                        </button>
                        <Link href={update.link} className="text-blue-600 text-xs font-medium hover:underline">
                          Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== COMPACT VIEW (CHANGELOG STYLE) ==================== */}
        {viewMode === 'compact' && (
          <div className="space-y-8 mb-12">
            {Object.entries(groupedUpdates).map(([month, monthUpdates]) => (
              <div key={month}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 sticky top-0 bg-white dark:bg-gray-900 py-2 z-10">
                  {month}
                </h3>
                <div className="space-y-3">
                  {monthUpdates.map((update) => {
                    const categoryConfig = getCategoryConfig(update.category);
                    const statusConfig = getStatusConfig(update.status);

                    return (
                      <div
                        key={update.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="w-24 text-xs text-gray-500 dark:text-gray-400 shrink-0">
                          {formatDate(update.date, 'short')}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig.color}`}>
                              {statusConfig.badge}
                            </span>
                            {update.version && (
                              <span className="text-xs font-mono text-gray-500">v{update.version}</span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {update.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                            {update.description}
                          </p>
                        </div>
                        <Link href={update.link} className="shrink-0 text-blue-600 text-sm hover:underline">
                          Read
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {filteredUpdates.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("search", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No updates found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("bell", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config?.newsletter?.title || "Get release notes in your inbox"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {config?.newsletter?.description || "Subscribe to receive weekly updates about new features, improvements, and product announcements."}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Email for product updates"
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

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.releases || "50+"}</div>
                  <div className="text-sm text-blue-100">Releases This Year</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.features || "200+"}</div>
                  <div className="text-sm text-blue-100">New Features</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
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

export default ProductUpdatesSection3;