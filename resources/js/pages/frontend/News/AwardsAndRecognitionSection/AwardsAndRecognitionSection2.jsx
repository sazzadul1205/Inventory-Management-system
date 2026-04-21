// frontend/Blog/AwardsAndRecognitionSection/AwardsAndRecognitionSection2.jsx

/**
 * Awards & Recognition Section - Awards Showcase Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators
 * - Award of the Year hero banner with trophy icon
 * - Sort dropdown (Latest First, Most Viewed, Trending)
 * - Grid/List view toggle for content browsing
 * - Multi-filter system (Category, Year, Presenter)
 * - Active filter indicators with count badge
 * - Like functionality with heart icon and counter
 * - Save/bookmark functionality
 * - Share button for social sharing
 * - Expandable quote sections with citation styling
 * - Year pills for quick year filtering
 * - Presenter badge for awarding organizations
 * - Category pills with count badges
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
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
import {
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
  HiArrowRight,
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
  HiOutlineBadgeCheck,
  HiOutlineHeart,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi2';

const AwardsAndRecognitionSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedAwards, setSavedAwards] = useState([]);
  const [likedAwards, setLikedAwards] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedYear, setSelectedYear] = useState('all');
  const [expandedAward, setExpandedAward] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPresenter, setSelectedPresenter] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');


  // ==================== MEMOIZED DATA ====================
  const allAwards = useMemo(() => config?.awards || [], [config?.awards]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Awards', icon: 'trophy', count: allAwards.length },
        { id: 'product', label: 'Product Awards', icon: 'chip' },
        { id: 'company', label: 'Company Recognition', icon: 'building' },
        { id: 'innovation', label: 'Innovation', icon: 'lightbulb' },
        { id: 'leadership', label: 'Leadership', icon: 'briefcase' },
        { id: 'sustainability', label: 'Sustainability', icon: 'globe' },
      ],
    [config?.categories, allAwards.length]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '25+', label: 'Industry Awards', icon: 'trophy', trend: '+5', trendUp: true },
        { value: '10+', label: 'Product Awards', icon: 'chip', trend: '+3', trendUp: true },
        { value: '8', label: 'Innovation Awards', icon: 'lightbulb', trend: '+2', trendUp: true },
        { value: '5', label: 'Leadership Awards', icon: 'briefcase', trend: '+1', trendUp: true },
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
      trophy: <HiOutlineTrophy className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      download: <HiOutlineDownload className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
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
      quote: <FaQuoteLeft className={className} />,
      at: <HiOutlineAtSymbol className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      shareAlt: <AiOutlineShareAlt className={className} />,
      duplicate: <HiOutlineDuplicate className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      phone: <HiOutlinePhone className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <FaCertificate className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
    };
    return icons[iconName] || <HiOutlineTrophy className={className} />;
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
      if (diffDays < 0) return 'Awarded';
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      return `${Math.floor(diffDays / 365)} years ago`;
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }, []);

  /**
   * Returns award category badge configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      product: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'chip',
        label: 'Product Award',
      },
      company: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'building',
        label: 'Company Recognition',
      },
      innovation: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'lightbulb',
        label: 'Innovation Award',
      },
      leadership: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'briefcase',
        label: 'Leadership Award',
      },
      sustainability: {
        color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
        icon: 'globe',
        label: 'Sustainability Award',
      },
      customer: {
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
        icon: 'users',
        label: 'Customer Excellence',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'trophy',
        label: 'Award',
      }
    );
  }, []);

  /**
   * Get unique years from awards for filter dropdown
   */
  const getAvailableYears = useCallback(() => {
    const years = new Set();
    allAwards.forEach((award) => {
      if (award.date) {
        years.add(new Date(award.date).getFullYear());
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [allAwards]);

  /**
   * Get unique presenters from awards for filter dropdown
   */
  const getUniquePresenters = useCallback(() => {
    const presenters = new Set();
    allAwards.forEach((award) => {
      if (award.presenter) {
        presenters.add(award.presenter);
      }
    });
    return Array.from(presenters);
  }, [allAwards]);

  /**
   * Toggle save/bookmark status for an award
   */
  const handleSaveAward = useCallback((awardId) => {
    setSavedAwards((prev) =>
      prev.includes(awardId) ? prev.filter((id) => id !== awardId) : [...prev, awardId]
    );
  }, []);

  /**
   * Toggle like status for an award
   */
  const handleLikeAward = useCallback((awardId) => {
    setLikedAwards((prev) =>
      prev.includes(awardId) ? prev.filter((id) => id !== awardId) : [...prev, awardId]
    );
  }, []);

  /**
   * Toggle expanded state for an award
   */
  const toggleExpanded = useCallback((awardId) => {
    setExpandedAward((prev) => (prev === awardId ? null : awardId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
    setSelectedPresenter('all');
    setSortBy('latest');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredAwards = useMemo(() => {
    let awards = [...allAwards];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      awards = awards.filter(
        (a) =>
          a.title?.toLowerCase().includes(query) ||
          a.description?.toLowerCase().includes(query) ||
          a.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      awards = awards.filter((a) => a.category === selectedCategory);
    }

    if (selectedYear !== 'all') {
      awards = awards.filter((a) => new Date(a.date).getFullYear().toString() === selectedYear);
    }

    if (selectedPresenter !== 'all') {
      awards = awards.filter((a) => a.presenter === selectedPresenter);
    }

    if (sortBy === 'latest') {
      awards.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
      awards.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === 'trending') {
      awards.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
    }

    return awards;
  }, [allAwards, searchQuery, selectedCategory, selectedYear, selectedPresenter, sortBy]);

  // Get award of the year (first marked as featured, otherwise first in filtered list)
  const awardOfTheYear = useMemo(() => {
    const featured = allAwards.find((a) => a.isFeatured);
    return featured || filteredAwards[0];
  }, [allAwards, filteredAwards]);

  // Regular awards (excluding award of the year)
  const regularAwards = useMemo(() => {
    if (!awardOfTheYear) return filteredAwards;
    return filteredAwards.filter((a) => a.id !== awardOfTheYear.id);
  }, [filteredAwards, awardOfTheYear]);

  const availableYears = getAvailableYears();
  const uniquePresenters = getUniquePresenters();
  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedYear !== 'all',
    selectedPresenter !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  // Update category count for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredAwards.length };
      }
      const count = allAwards.filter((a) => a.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allAwards, filteredAwards.length]);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Awards & Recognition Showcase"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('trophy', 'w-4 h-4 text-yellow-600 dark:text-yellow-400')}
              <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                {config?.badge || 'Awards & Recognition'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Celebrating'}{' '}
              <span className="bg-linear-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Excellence'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "We're honored to be recognized by leading industry organizations for our innovation, excellence, and commitment to customer success."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
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

        {/* ==================== AWARD OF THE YEAR BANNER ==================== */}
        {awardOfTheYear && (
          <div className="mb-16">
            <div className="relative bg-linear-to-r from-yellow-600 to-amber-600 dark:from-yellow-500 dark:to-amber-500 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              <div className="relative p-8 md:p-10 text-white">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        🏆 Award of the Year
                      </span>
                      <div className="flex items-center gap-1 text-sm text-white/80">
                        {getIcon('calendar', 'w-4 h-4')}
                        <span>{formatDate(awardOfTheYear.date, 'short')}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(awardOfTheYear.category).color}`}
                      >
                        {getCategoryConfig(awardOfTheYear.category).label}
                      </span>
                      {awardOfTheYear.presenter && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                          {awardOfTheYear.presenter}
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 line-clamp-2">
                      {awardOfTheYear.title}
                    </h2>
                    <p className="text-white/90 mb-6 max-w-lg leading-relaxed">
                      {awardOfTheYear.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={awardOfTheYear.link}
                        className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300"
                      >
                        View Award Details
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleSaveAward(awardOfTheYear.id)}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        aria-label="Save award"
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={awardOfTheYear.image}
                      alt={awardOfTheYear.title}
                      className="rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-full p-4 shadow-lg animate-pulse">
                      {getIcon('trophy', 'w-8 h-8 text-white')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
                config?.searchPlaceholder || 'Search awards by name, category, or organization...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search awards"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"
              aria-label="Sort awards"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Viewed</option>
              <option value="trending">Trending</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"
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

              {/* Year Filter */}
              {availableYears.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"
                    aria-label="Filter by year"
                  >
                    <option value="all">All Years</option>
                    {availableYears.map((year) => (
                      <option key={year} value={year.toString()}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Presenter Filter */}
              {uniquePresenters.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Presenter
                  </label>
                  <select
                    value={selectedPresenter}
                    onChange={(e) => setSelectedPresenter(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"
                    aria-label="Filter by presenter"
                  >
                    <option value="all">All Presenters</option>
                    {uniquePresenters.map((presenter) => (
                      <option key={presenter} value={presenter}>
                        {presenter}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-yellow-600 dark:text-yellow-400 hover:underline"
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
                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
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

        {/* ==================== YEAR PILLS ==================== */}
        {availableYears.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Year:</span>
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${selectedYear === 'all'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
            >
              All
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year.toString())}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${selectedYear === year.toString()
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {regularAwards.length}
            </span>{' '}
            awards
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== AWARDS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {regularAwards.map((award) => {
            const categoryConfig = getCategoryConfig(award.category);
            const isExpanded = expandedAward === award.id;
            const isSaved = savedAwards.includes(award.id);
            const isLiked = likedAwards.includes(award.id);

            return (
              <div
                key={award.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Award Image */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''
                    }`}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                    >
                      {categoryConfig.label}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/90 flex items-center justify-center shadow-lg">
                      {getIcon('trophy', 'w-5 h-5 text-white')}
                    </div>
                  </div>
                  {award.presenter && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full shadow-md">
                        {award.presenter}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{formatDate(award.date, 'relative')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('eye', 'w-4 h-4')}
                      <span>{award.views || '1.2k'} views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={award.link}
                      className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      {award.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {award.description}
                  </p>

                  {/* Expandable Quote */}
                  {award.quote && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(award.id)}
                        className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'Read quote'}
                      >
                        {isExpanded ? 'Show less' : 'Read quote'}
                        <HiOutlineChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500 animate-fadeIn">
                          {getIcon('quote', 'w-4 h-4 text-yellow-500 mb-1')}
                          <p className="text-sm italic text-gray-700 dark:text-gray-300">
                            "{award.quote.text}"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">— {award.quote.author}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {award.tags && award.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {award.tags.slice(0, 3).map((tag, idx) => (
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
                        onClick={() => handleLikeAward(award.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isLiked ? 'Unlike' : 'Like'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isLiked ? 'fill-current' : ''}`)}
                        <span>{award.likes || 0}</span>
                      </button>
                      <button
                        onClick={() => handleSaveAward(award.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save award'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                      <button
                        className="text-gray-400 hover:text-yellow-600 transition-colors"
                        aria-label="Share award"
                      >
                        {getIcon('shareAlt', 'w-4 h-4')}
                      </button>
                    </div>

                    <Link
                      href={award.link}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      View Award
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularAwards.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('trophy', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No awards found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-yellow-600 dark:text-yellow-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Get Award Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive notifications about our latest awards and industry recognition.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for award updates"
                required
              />
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AwardsAndRecognitionSection2;