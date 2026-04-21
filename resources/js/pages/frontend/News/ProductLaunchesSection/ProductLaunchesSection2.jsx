// frontend/Blog/ProductLaunchesSection/ProductLaunchesSection2.jsx

/**
 * Product Launches Section - Advanced Product Releases Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators
 * - Sort dropdown (Latest, Most Popular, Trending)
 * - Grid/List view toggle for content browsing
 * - Multi-filter system (Category, Status, Sort)
 * - Active filter indicators with count badge
 * - Like functionality with heart icon and counter
 * - Save/bookmark functionality
 * - Share button for social sharing
 * - Expandable features list with checkmarks
 * - Status pills with icons (Live, Beta, Coming Soon, Preview)
 * - Category pills with count badges
 * - Popular products sidebar section
 * - Featured launch gradient banner with star badge
 * - Search across titles, descriptions, and tags
 * - Responsive grid and list layouts
 * - Animated gradient orbs in background
 *
 * All icons from react-icons (hi, hi2, ai, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaQuoteLeft } from 'react-icons/fa';
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
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers as HiOutlineUsersAlt,
  HiOutlineChip as HiOutlineChipAlt,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineHeart,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineCode as HiOutlineCodeAlt,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from 'react-icons/hi';
import { HiOutlineFire, HiOutlineRocketLaunch } from 'react-icons/hi2';

const ProductLaunchesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedLaunches, setSavedLaunches] = useState([]);
  const [likedLaunches, setLikedLaunches] = useState([]);
  const [expandedLaunch, setExpandedLaunch] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allLaunches = useMemo(() => config?.launches || [], [config?.launches]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Products', icon: 'rocket', count: allLaunches.length },
        { id: 'ai', label: 'AI & ML', icon: 'chip' },
        { id: 'automation', label: 'Automation', icon: 'cog' },
        { id: 'analytics', label: 'Analytics', icon: 'chart' },
        { id: 'integration', label: 'Integration', icon: 'cloud' },
        { id: 'mobile', label: 'Mobile', icon: 'mobile' },
      ],
    [config?.categories, allLaunches.length]
  );

  const statuses = useMemo(
    () =>
      config?.statuses || [
        { id: 'all', label: 'All Status', icon: 'sparkles' },
        { id: 'live', label: 'Now Live', icon: 'rocket' },
        { id: 'beta', label: 'Beta', icon: 'chip' },
        { id: 'coming-soon', label: 'Coming Soon', icon: 'clock' },
        { id: 'preview', label: 'Preview', icon: 'eye' },
      ],
    [config?.statuses]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '12', label: 'New Products', icon: 'rocket', trend: '+3', trendUp: true },
        { value: '8', label: 'AI Features', icon: 'chip', trend: '+5', trendUp: true },
        { value: '45+', label: 'Improvements', icon: 'cog', trend: '+12', trendUp: true },
        { value: '100k+', label: 'Users Impacted', icon: 'users', trend: '+25k', trendUp: true },
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      rocket: <HiOutlineRocketLaunch className={className} />,
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
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      quote: <FaQuoteLeft className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      usergroup: <HiOutlineUsersAlt className={className} />,
      chipAlt: <HiOutlineChipAlt className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      heart: <HiOutlineHeart className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      codeAlt: <HiOutlineCodeAlt className={className} />,
      database: <HiOutlineDatabase className={className} />,
      server: <HiOutlineServer className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      fire: <HiOutlineFire className={className} />,
    };
    return icons[iconName] || <HiOutlineRocketLaunch className={className} />;
  }, []);

  /**
   * Formats date to relative or short display format
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    if (format === 'relative') {
      if (diffDays < 0) return 'Released';
      if (diffDays === 0) return 'Launched Today';
      if (diffDays === 1) return 'Tomorrow';
      if (diffDays < 7) return `In ${diffDays} days`;
      if (diffDays < 30) return `In ${Math.floor(diffDays / 7)} weeks`;
      return `In ${Math.floor(diffDays / 30)} months`;
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }, []);

  /**
   * Returns status badge configuration with color and label
   */
  const getStatusConfig = useCallback((status) => {
    const configs = {
      live: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'rocket',
        label: 'Now Live',
        badge: 'LIVE',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      beta: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'chip',
        label: 'Beta',
        badge: 'BETA',
        gradient: 'from-amber-500 to-orange-500',
      },
      'coming-soon': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'clock',
        label: 'Coming Soon',
        badge: 'SOON',
        gradient: 'from-blue-500 to-indigo-500',
      },
      preview: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'eye',
        label: 'Preview',
        badge: 'PREVIEW',
        gradient: 'from-purple-500 to-pink-500',
      },
    };
    return (
      configs[status] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'rocket',
        label: 'Launch',
        badge: 'LAUNCH',
      }
    );
  }, []);

  /**
   * Returns category badge configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      ai: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'chip',
        label: 'AI & ML',
      },
      automation: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'cog',
        label: 'Automation',
      },
      analytics: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'chart',
        label: 'Analytics',
      },
      integration: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'cloud',
        label: 'Integration',
      },
      mobile: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'mobile',
        label: 'Mobile',
      },
      security: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'shield',
        label: 'Security',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'rocket',
        label: 'Product',
      }
    );
  }, []);

  /**
   * Toggle save/bookmark status for a launch
   */
  const handleSaveLaunch = useCallback((launchId) => {
    setSavedLaunches((prev) =>
      prev.includes(launchId) ? prev.filter((id) => id !== launchId) : [...prev, launchId]
    );
  }, []);

  /**
   * Toggle like status for a launch
   */
  const handleLikeLaunch = useCallback((launchId) => {
    setLikedLaunches((prev) =>
      prev.includes(launchId) ? prev.filter((id) => id !== launchId) : [...prev, launchId]
    );
  }, []);

  /**
   * Toggle expanded state for a launch
   */
  const toggleExpanded = useCallback((launchId) => {
    setExpandedLaunch((prev) => (prev === launchId ? null : launchId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSortBy('latest');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredLaunches = useMemo(() => {
    let launches = [...allLaunches];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      launches = launches.filter(
        (l) =>
          l.title?.toLowerCase().includes(query) ||
          l.description?.toLowerCase().includes(query) ||
          l.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      launches = launches.filter((l) => l.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      launches = launches.filter((l) => l.status === selectedStatus);
    }

    if (sortBy === 'latest') {
      launches.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
      launches.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === 'trending') {
      launches.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
    }

    return launches;
  }, [allLaunches, searchQuery, selectedCategory, selectedStatus, sortBy]);

  // Get featured launch (first marked as featured, otherwise first in filtered list)
  const featuredLaunch = useMemo(() => {
    const featured = allLaunches.find((l) => l.isFeatured);
    return featured || filteredLaunches[0];
  }, [allLaunches, filteredLaunches]);

  // Popular launches (top 3 by views)
  const popularLaunches = useMemo(() => {
    return [...allLaunches].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 3);
  }, [allLaunches]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedStatus !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  // Update category count for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredLaunches.length };
      }
      const count = allLaunches.filter((l) => l.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allLaunches, filteredLaunches.length]);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Product Launches & Releases"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('rocket', 'w-4 h-4 text-purple-600 dark:text-purple-400')}
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                {config?.badge || 'New Releases'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Latest'}{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Product Releases'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Discover our newest innovations, features, and capabilities designed to transform your supply chain operations.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SEARCH AND FILTERS BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon('search', 'w-5 h-5 text-gray-400')}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                config?.searchPlaceholder || 'Search products by name, category, or feature...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search products"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
              aria-label="Sort products"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label="Toggle filters"
            >
              {getIcon('filter', 'w-4 h-4')}
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''
                  }`}
                aria-label="Grid view"
              >
                {getIcon('grid', 'w-5 h-5')}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''
                  }`}
                aria-label="List view"
              >
                {getIcon('list', 'w-5 h-5')}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {categories
                    .filter((c) => c.id !== 'all')
                    .map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Filter by status"
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Option */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Sort products"
                >
                  <option value="latest">Latest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== CATEGORY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categoriesWithCount.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label}`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
              {category.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== STATUS PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {statuses.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedStatus === status.id
                ? 'bg-gray-800 dark:bg-gray-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${status.label} products`}
            >
              {getIcon(status.icon, 'w-4 h-4')}
              {status.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED LAUNCH BANNER ==================== */}
        {featuredLaunch && (
          <div className="mb-16">
            <div className="relative bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <div className="relative p-8 md:p-10 text-white">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        Featured Launch
                      </span>
                      <div className="flex items-center gap-1 text-sm text-white/80">
                        {getIcon('clock', 'w-4 h-4')}
                        <span>{formatDate(featuredLaunch.date, 'relative')}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredLaunch.category).color}`}
                      >
                        {getCategoryConfig(featuredLaunch.category).label}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusConfig(featuredLaunch.status).color}`}
                      >
                        {getStatusConfig(featuredLaunch.status).label}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredLaunch.title}</h2>
                    <p className="text-white/90 mb-6 max-w-lg leading-relaxed">
                      {featuredLaunch.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredLaunch.link}
                        className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
                      >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      {featuredLaunch.demoUrl && (
                        <a
                          href={featuredLaunch.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                          aria-label="Watch demo"
                        >
                          {getIcon('play', 'w-4 h-4')}
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={featuredLaunch.image}
                      alt={featuredLaunch.title}
                      className="rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 rounded-full p-3 shadow-lg">
                      {getIcon('star', 'w-6 h-6 text-white')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredLaunches.length}
            </span>{' '}
            products
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PRODUCT LAUNCHES GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredLaunches.map((launch) => {
            const categoryConfig = getCategoryConfig(launch.category);
            const statusConfig = getStatusConfig(launch.status);
            const isExpanded = expandedLaunch === launch.id;
            const isSaved = savedLaunches.includes(launch.id);
            const isLiked = likedLaunches.includes(launch.id);

            return (
              <div
                key={launch.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Product Image */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''
                    }`}
                >
                  <img
                    src={launch.image}
                    alt={launch.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                    >
                      {categoryConfig.label}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${statusConfig.color}`}
                    >
                      {statusConfig.badge}
                    </span>
                  </div>
                  {launch.demoUrl && (
                    <div className="absolute bottom-3 right-3">
                      <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                        {getIcon('play', 'w-4 h-4 text-white')}
                      </div>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{formatDate(launch.date, 'relative')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('eye', 'w-4 h-4')}
                      <span>{launch.views || '1.2k'} views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={launch.link}
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {launch.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {launch.description}
                  </p>

                  {/* Expandable Features */}
                  {launch.features && launch.features.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(launch.id)}
                        className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : `View ${launch.features.length} features`}
                      >
                        {isExpanded ? 'Show less' : `View ${launch.features.length} features`}
                        <HiOutlineChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 animate-fadeIn">
                          {launch.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                          {launch.features.length > 4 && (
                            <li className="text-sm text-gray-500 pl-6">
                              + {launch.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {launch.tags && launch.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {launch.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleLikeLaunch(launch.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isLiked ? 'Unlike' : 'Like'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isLiked ? 'fill-current' : ''}`)}
                        <span>{launch.likes || 0}</span>
                      </button>
                      <button
                        onClick={() => handleSaveLaunch(launch.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save product'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                      <button
                        className="text-gray-400 hover:text-purple-600 transition-colors"
                        aria-label="Share product"
                      >
                        {getIcon('shareAlt', 'w-4 h-4')}
                      </button>
                    </div>

                    <Link
                      href={launch.link}
                      className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredLaunches.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('rocket', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== POPULAR PRODUCTS SECTION ==================== */}
        {popularLaunches.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('fire', 'w-5 h-5 text-orange-500')}
              Most Popular Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularLaunches.map((launch) => (
                <div
                  key={launch.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={launch.image}
                    alt={launch.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
                      {launch.title}
                    </h4>
                    <p className="text-xs text-gray-500">{launch.views} views</p>
                  </div>
                  <Link
                    href={launch.link}
                    className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline"
                  >
                    Learn
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-purple-600 dark:text-purple-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Be the First to Know'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive product launch announcements, feature updates, and exclusive early access invitations.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for product updates"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer ||
                'No spam, unsubscribe anytime. Get 1-2 emails per month.'}
            </p>
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
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default ProductLaunchesSection2;