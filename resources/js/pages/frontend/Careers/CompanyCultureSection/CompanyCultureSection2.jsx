// page/frontend/Careers/CompanyCultureSection/CompanyCultureSection2.jsx

/**
 * Company Culture Section II - Culture Hub with Timeline View
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Satisfaction, Countries, ERGs, Team Size)
 * - Sort Dropdown (Latest First, Most Popular, Trending)
 * - Grid/Timeline View Toggle for Story Browsing
 * - Multi-filter System (Category, Moment Type)
 * - Active Filter Indicators with Count Badge
 * - Featured Moments Row with Horizontal Cards
 * - Like Functionality with Heart Icon and Counter
 * - Save/Bookmark Functionality with Persistence
 * - Share Button with Social Icon
 * - View Count Display on Cards
 * - Timeline View with Monthly Grouping
 * - Moment Type Badges (Celebration, Milestone, Team Bonding, Learning, Wellness)
 * - Category Pills with Count Badges
 * - Moment Pills Quick Filters
 * - Author Avatar and Name Display
 * - Search across story titles, content, and tags
 * - Responsive Grid and Timeline Layouts
 * - Animated Gradient Orbs in Background
 * - Join Us CTA Banner
 * - Newsletter Subscription Integration
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineChartBar,
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
  HiOutlinePrinter,
  HiOutlineDuplicate,
  HiOutlineQrcode,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlinePhone,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineBeaker,
  HiOutlinePuzzle,
  HiOutlineCamera,
  HiOutlineMusicNote,
} from 'react-icons/hi';
import {
  HiArrowRight,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
  MdOutlineHandshake as HiOutlineHandshake,
  MdOutlineEmojiEmotions as HiOutlineEmojiHappy,
} from "react-icons/md";

const CompanyCultureSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('latest'); // latest, popular, trending
  const [searchQuery, setSearchQuery] = useState('');
  const [savedStories, setSavedStories] = useState([]);
  const [likedStories, setLikedStories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedStory, setExpandedStory] = useState(null);
  const [selectedMoment, setSelectedMoment] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allStories = useMemo(() => config?.stories || [], [config?.stories]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Stories', icon: 'heart', count: allStories.length },
        { id: 'values', label: 'Core Values', icon: 'heart' },
        { id: 'benefits', label: 'Benefits & Perks', icon: 'gift' },
        { id: 'events', label: 'Events & Activities', icon: 'calendar' },
        { id: 'testimonials', label: 'Employee Stories', icon: 'chat' },
        { id: 'diversity', label: 'Diversity & Inclusion', icon: 'users' },
      ],
    [config?.categories, allStories.length]
  );

  const moments = useMemo(
    () => [
      { id: 'all', label: 'All Moments', icon: 'sparkles' },
      { id: 'celebration', label: 'Celebrations', icon: 'trophy' },
      { id: 'milestone', label: 'Milestones', icon: 'rocket' },
      { id: 'team-bonding', label: 'Team Bonding', icon: 'handshake' },
      { id: 'learning', label: 'Learning', icon: 'academic' },
      { id: 'wellness', label: 'Wellness', icon: 'heart' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "98%", label: "Employee Satisfaction", icon: "star", trend: "+2%", trendUp: true },
        { value: "25+", label: "Countries", icon: "globe", trend: "+5", trendUp: true },
        { value: "15+", label: "Employee Resource Groups", icon: "users", trend: "+3", trendUp: true },
        { value: "1000+", label: "Team Members", icon: "usergroup", trend: "+200", trendUp: true }
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      heart: <HiOutlineHeart className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      usergroup: <HiOutlineUsers className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      archive: <HiOutlineArchive className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      doc: <HiOutlineDocument className={className} />,
      link: <HiOutlineLink className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      quote: <HiOutlineQuote className={className} />,
      at: <HiOutlineAtSymbol className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      duplicate: <HiOutlineDuplicate className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      phone: <HiOutlinePhone className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      coffee: <HiOutlineCoffee className={className} />,
      beaker: <HiOutlineBeaker className={className} />,
      puzzle: <HiOutlinePuzzle className={className} />,
      handshake: <HiOutlineHandshake className={className} />,
      camera: <HiOutlineCamera className={className} />,
      music: <HiOutlineMusicNote className={className} />,
      emoji: <HiOutlineEmojiHappy className={className} />
    };
    return icons[iconName] || <HiOutlineHeart className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      values: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'heart', label: 'Core Values', borderColor: 'border-blue-200 dark:border-blue-800' },
      benefits: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'gift', label: 'Benefits & Perks', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      events: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events & Activities', borderColor: 'border-purple-200 dark:border-purple-800' },
      testimonials: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chat', label: 'Employee Stories', borderColor: 'border-orange-200 dark:border-orange-800' },
      diversity: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Diversity & Inclusion', borderColor: 'border-pink-200 dark:border-pink-800' },
      innovation: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'lightbulb', label: 'Innovation', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[categoryId] || configs.values;
  }, []);

  /**
   * Returns moment configuration with color and badge
   */
  const getMomentConfig = useCallback((momentId) => {
    const configs = {
      celebration: { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', label: 'Celebration', badge: 'Celebration' },
      milestone: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Milestone', badge: 'Milestone' },
      'team-bonding': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Team Bonding', badge: 'Team Bonding' },
      learning: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Learning', badge: 'Learning' },
      wellness: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', label: 'Wellness', badge: 'Wellness' }
    };
    return configs[momentId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: momentId, badge: momentId };
  }, []);

  /**
   * Toggle save/bookmark status for a story
   */
  const handleSaveStory = useCallback((storyId) => {
    setSavedStories((prev) =>
      prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]
    );
  }, []);

  /**
   * Toggle like status for a story
   */
  const handleLikeStory = useCallback((storyId) => {
    setLikedStories((prev) =>
      prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]
    );
  }, []);

  /**
   * Toggle expanded state for a story
   */
  const toggleExpanded = useCallback((storyId) => {
    setExpandedStory((prev) => (prev === storyId ? null : storyId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMoment('all');
    setSortBy('latest');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredStories = useMemo(() => {
    let stories = [...allStories];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      stories = stories.filter(
        (s) =>
          s.title?.toLowerCase().includes(query) ||
          s.excerpt?.toLowerCase().includes(query) ||
          s.content?.toLowerCase().includes(query) ||
          s.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      stories = stories.filter((s) => s.category === selectedCategory);
    }

    if (selectedMoment !== 'all') {
      stories = stories.filter((s) => s.moment === selectedMoment);
    }

    // Sorting
    if (sortBy === 'latest') {
      stories.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
      stories.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === 'trending') {
      stories.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
    }

    return stories;
  }, [allStories, searchQuery, selectedCategory, selectedMoment, sortBy]);

  // Update category counts for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredStories.length };
      }
      const count = allStories.filter((s) => s.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allStories, filteredStories.length]);

  // Featured moments (top 3 by trending score)
  const featuredMoments = useMemo(() => {
    return [...allStories]
      .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
      .slice(0, 3);
  }, [allStories]);

  // Group stories by month for timeline view
  const storiesByMonth = useMemo(() => {
    return filteredStories.reduce((groups, story) => {
      const date = new Date(story.date);
      const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!groups[monthYear]) groups[monthYear] = [];
      groups[monthYear].push(story);
      return groups;
    }, {});
  }, [filteredStories]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMoment !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Company Culture Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('heart', 'w-4 h-4 text-pink-600 dark:text-pink-400')}
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                {config?.badge || 'Our Culture'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Life at'}{' '}
              <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'SupplyChainPro'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "We're building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
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
                config?.searchPlaceholder || 'Search stories, values, or experiences...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search culture stories"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
              aria-label="Sort stories"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
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
                onClick={() => setViewMode('timeline')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 shadow-md' : ''
                  }`}
                aria-label="Timeline view"
              >
                {getIcon('calendar', 'w-5 h-5')}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
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

              {/* Moment Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Moment Type
                </label>
                <select
                  value={selectedMoment}
                  onChange={(e) => setSelectedMoment(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
                  aria-label="Filter by moment type"
                >
                  {moments.map((moment) => (
                    <option key={moment.id} value={moment.id}>
                      {moment.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
                  aria-label="Sort stories"
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
                  className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
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
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
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

        {/* ==================== MOMENT PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {moments
            .filter((m) => m.id !== 'all')
            .map((moment) => (
              <button
                key={moment.id}
                onClick={() => setSelectedMoment(selectedMoment === moment.id ? 'all' : moment.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedMoment === moment.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${moment.label}`}
              >
                {getIcon(moment.icon, 'w-4 h-4')}
                {moment.label}
              </button>
            ))}
        </div>

        {/* ==================== FEATURED MOMENTS ROW ==================== */}
        {featuredMoments.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('fire', 'w-5 h-5 text-orange-500')}
              Featured Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredMoments.map((story) => {
                const categoryConfig = getCategoryConfig(story.category);
                const momentConfig = getMomentConfig(story.moment);
                return (
                  <div
                    key={story.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => toggleExpanded(story.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpanded(story.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${momentConfig.color}`}>
                          {momentConfig.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={story.author?.avatar}
                          alt={story.author?.name}
                          className="w-6 h-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {story.author?.name}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredStories.length}
            </span>{' '}
            stories
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== GRID VIEW ==================== */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredStories.map((story) => {
              const categoryConfig = getCategoryConfig(story.category);
              const momentConfig = getMomentConfig(story.moment);
              const isExpanded = expandedStory === story.id;
              const isSaved = savedStories.includes(story.id);
              const isLiked = likedStories.includes(story.id);

              return (
                <div
                  key={story.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${momentConfig.color}`}>
                        {momentConfig.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={story.author?.avatar}
                          alt={story.author?.name}
                          className="w-6 h-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {story.author?.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        {getIcon('calendar', 'w-3 h-3')}
                        <span>{story.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {story.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {story.excerpt}
                    </p>

                    <button
                      onClick={() => toggleExpanded(story.id)}
                      className="flex items-center gap-1 text-sm text-pink-600 dark:text-pink-400 font-medium mb-3"
                      aria-label={isExpanded ? 'Show less' : 'Read more'}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                      {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                    </button>

                    {isExpanded && story.content && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 animate-fadeIn">
                        {story.content}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleLikeStory(story.id)}
                          className={`flex items-center gap-1 text-sm transition-colors ${isLiked
                            ? 'text-red-500'
                            : 'text-gray-400 hover:text-red-500'
                            }`}
                          aria-label={isLiked ? 'Unlike' : 'Like'}
                        >
                          {getIcon('heart', `w-4 h-4 ${isLiked ? 'fill-current' : ''}`)}
                          <span>{story.likes || 0}</span>
                        </button>
                        <button
                          onClick={() => handleSaveStory(story.id)}
                          className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                            }`}
                          aria-label={isSaved ? 'Remove from saved' : 'Save story'}
                        >
                          {getIcon('bookmark', 'w-4 h-4')}
                        </button>
                        <button
                          className="text-gray-400 hover:text-pink-600 transition-colors"
                          aria-label="Share story"
                        >
                          {getIcon('share', 'w-4 h-4')}
                        </button>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        {getIcon('eye', 'w-3 h-3')}
                        <span>{story.views || '1.2k'}</span>
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />
            <div className="space-y-8">
              {Object.entries(storiesByMonth).map(([monthYear, stories]) => (
                <div key={monthYear}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 items-center justify-center">
                      {getIcon('calendar', 'w-4 h-4 text-pink-600')}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{monthYear}</h3>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="space-y-4">
                    {stories.map((story) => {
                      const categoryConfig = getCategoryConfig(story.category);
                      const momentConfig = getMomentConfig(story.moment);
                      const isExpanded = expandedStory === story.id;
                      const isLiked = likedStories.includes(story.id);

                      return (
                        <div key={story.id} className="relative pl-8 md:pl-0">
                          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-500" />
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                    {categoryConfig.label}
                                  </span>
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${momentConfig.color}`}>
                                    {momentConfig.badge}
                                  </span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {story.date}
                                  </span>
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                                  {story.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                  {story.excerpt}
                                </p>
                              </div>
                              <button
                                onClick={() => toggleExpanded(story.id)}
                                className="shrink-0 text-pink-600 dark:text-pink-400 text-sm font-semibold hover:underline"
                                aria-label={isExpanded ? 'Show less' : 'Read more'}
                              >
                                {isExpanded ? 'Show less' : 'Read more'}
                              </button>
                            </div>
                            {isExpanded && story.content && (
                              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 animate-fadeIn">
                                {story.content}
                              </p>
                            )}
                            <div className="flex items-center gap-4 mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                              <button
                                onClick={() => handleLikeStory(story.id)}
                                className={`flex items-center gap-1 text-xs transition-colors ${isLiked
                                  ? 'text-red-500'
                                  : 'text-gray-400 hover:text-red-500'
                                  }`}
                                aria-label={isLiked ? 'Unlike' : 'Like'}
                              >
                                {getIcon('heart', `w-3 h-3 ${isLiked ? 'fill-current' : ''}`)}
                                <span>{story.likes || 0}</span>
                              </button>
                              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                {getIcon('eye', 'w-3 h-3')}
                                <span>{story.views || '1.2k'}</span>
                              </div>
                            </div>
                          </div>
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
        {filteredStories.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('heart', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No stories found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-pink-600 dark:text-pink-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== JOIN US CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
              <p className="text-pink-100 dark:text-pink-200 max-w-2xl">
                Ready to be part of something special? Explore open positions and find your place at SupplyChainPro.
              </p>
            </div>
            <Link
              href={config?.ctaLink || '/careers'}
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300"
            >
              View Open Positions
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-pink-600 dark:text-pink-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Life at SupplyChainPro'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to get updates about company culture, events, and career opportunities.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for culture updates"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
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
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
    </section>
  );
};

export default CompanyCultureSection2;