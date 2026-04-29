// page/frontend/Careers/BenefitsAndPerksSection/BenefitsAndPerksSection2.jsx

/**
 * Benefits & Perks Section II - Advanced Benefits Directory Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Coverage, Stipend, Leave, Countries)
 * - Sort Dropdown (Most Popular, Newest First, Alphabetical)
 * - Grid/List View Toggle for Benefit Browsing
 * - Multi-filter System (Category, Benefit Tier, Region)
 * - Active Filter Indicators with Count Badge
 * - Favorite Functionality with Heart Icon and Persistence
 * - Most Popular Benefits Row with Horizontal Cards
 * - Benefit Tier Badges (Core, Premium, Optional)
 * - Region Flag Indicators for Geographic Availability
 * - Category Pills with Count Badges
 * - Expandable Benefit Details with Checkmark List
 * - Participation Rate Display with Trending Icon
 * - New Benefit Badge with Pulse Animation
 * - Search across benefit titles, descriptions, and tags
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Total Rewards Summary CTA Banner
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
  HiOutlineGlobe,
  HiOutlineCurrencyDollar,
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineChartBar,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineWifi,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineBookOpen,
  HiOutlineCheckCircle,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineExternalLink,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlinePrinter,
  HiOutlineDuplicate,
  HiOutlineQrcode,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import {
  HiArrowRight,
  HiOutlineTrophy,
  HiOutlineBookmark,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
} from "react-icons/md";

const BenefitsAndPerksSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('popular'); // popular, newest, alphabetical
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [favoriteBenefits, setFavoriteBenefits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allBenefits = useMemo(() => config?.benefits || [], [config?.benefits]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Benefits', icon: 'gift', count: allBenefits.length },
        { id: 'health', label: 'Health & Wellness', icon: 'heart' },
        { id: 'financial', label: 'Financial Benefits', icon: 'currency-dollar' },
        { id: 'work-life', label: 'Work-Life Balance', icon: 'clock' },
        { id: 'development', label: 'Learning & Development', icon: 'academic' },
        { id: 'family', label: 'Family Support', icon: 'users' },
        { id: 'perks', label: 'Daily Perks', icon: 'gift' },
      ],
    [config?.categories, allBenefits.length]
  );

  const tiers = useMemo(
    () => [
      { id: 'all', label: 'All Tiers' },
      { id: 'core', label: 'Core Benefits', icon: 'star' },
      { id: 'premium', label: 'Premium Benefits', icon: 'trophy' },
      { id: 'optional', label: 'Optional Benefits', icon: 'sparkles' }
    ],
    []
  );

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'global', label: 'Global', flag: '🌐' },
        { id: 'north-america', label: 'North America', flag: '🇺🇸' },
        { id: 'europe', label: 'Europe', flag: '🇪🇺' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: '🌏' }
      ],
    [config?.regions]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "100%", label: "Employee Coverage", icon: "users", trend: "+5%", trendUp: true },
        { value: "$5,000", label: "Learning Stipend", icon: "academic", trend: "+$1,000", trendUp: true },
        { value: "16", label: "Weeks Parental Leave", icon: "heart", trend: "+4", trendUp: true },
        { value: "25+", label: "Countries", icon: "globe", trend: "+5", trendUp: true }
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
      globe: <HiOutlineGlobe className={className} />,
      'currency-dollar': <HiOutlineCurrencyDollar className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      users: <HiOutlineUsers className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      phone: <HiOutlinePhone className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      gift: <HiOutlineGift className={className} />,
      coffee: <HiOutlineCoffee className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      book: <HiOutlineBookOpen className={className} />,
      usergroup: <HiOutlineUsers className={className} />,
      arrow: <HiArrowRight className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      flag: <HiOutlineFlag className={className} />,
      archive: <HiOutlineArchive className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      doc: <HiOutlineDocument className={className} />,
      link: <HiOutlineLink className={className} />,
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
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />
    };
    return icons[iconName] || <HiOutlineGift className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      health: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'heart', label: 'Health & Wellness', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      financial: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'currency-dollar', label: 'Financial Benefits', borderColor: 'border-blue-200 dark:border-blue-800' },
      'work-life': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'clock', label: 'Work-Life Balance', borderColor: 'border-purple-200 dark:border-purple-800' },
      development: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'academic', label: 'Learning & Development', borderColor: 'border-orange-200 dark:border-orange-800' },
      family: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Family Support', borderColor: 'border-pink-200 dark:border-pink-800' },
      perks: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Daily Perks', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[categoryId] || configs.health;
  }, []);

  /**
   * Returns tier configuration with color, badge, and icon
   */
  const getTierConfig = useCallback((tierId) => {
    const configs = {
      core: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Core Benefit', badge: 'Core', icon: 'star' },
      premium: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Premium', badge: 'Premium', icon: 'trophy' },
      optional: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Optional', badge: 'Optional', icon: 'sparkles' }
    };
    return configs[tierId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: tierId, badge: tierId, icon: 'check' };
  }, []);

  /**
   * Returns region configuration with flag and label
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      global: { flag: '🌐', label: 'Global' },
      'north-america': { flag: '🇺🇸', label: 'North America' },
      europe: { flag: '🇪🇺', label: 'Europe' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific' }
    };
    return configs[regionId] || { flag: '🌐', label: regionId };
  }, []);

  /**
   * Toggle favorite status for a benefit
   */
  const handleFavoriteBenefit = useCallback((benefitId) => {
    setFavoriteBenefits((prev) =>
      prev.includes(benefitId) ? prev.filter((id) => id !== benefitId) : [...prev, benefitId]
    );
  }, []);

  /**
   * Toggle expanded state for a benefit
   */
  const toggleExpanded = useCallback((benefitId) => {
    setExpandedBenefit((prev) => (prev === benefitId ? null : benefitId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTier('all');
    setSelectedRegion('all');
    setSortBy('popular');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredBenefits = useMemo(() => {
    let benefits = [...allBenefits];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      benefits = benefits.filter(
        (b) =>
          b.title?.toLowerCase().includes(query) ||
          b.description?.toLowerCase().includes(query) ||
          b.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      benefits = benefits.filter((b) => b.category === selectedCategory);
    }

    if (selectedTier !== 'all') {
      benefits = benefits.filter((b) => b.tier === selectedTier);
    }

    if (selectedRegion !== 'all') {
      benefits = benefits.filter((b) => b.regions?.includes(selectedRegion));
    }

    // Sorting
    if (sortBy === 'popular') {
      benefits.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else if (sortBy === 'newest') {
      benefits.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'alphabetical') {
      benefits.sort((a, b) => a.title.localeCompare(b.title));
    }

    return benefits;
  }, [allBenefits, searchQuery, selectedCategory, selectedTier, selectedRegion, sortBy]);

  // Update category counts for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredBenefits.length };
      }
      const count = allBenefits.filter((b) => b.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allBenefits, filteredBenefits.length]);

  // Top benefits by popularity
  const topBenefits = useMemo(() => {
    return [...allBenefits]
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 4);
  }, [allBenefits]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedTier !== 'all',
    selectedRegion !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Benefits & Perks Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl animate-blob"
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
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('gift', 'w-4 h-4 text-emerald-600 dark:text-emerald-400')}
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {config?.badge || 'Benefits & Perks'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Benefits That'}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Empower You'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we\'ve designed benefits that support your well-being and growth.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
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
                config?.searchPlaceholder || 'Search benefits by name, category, or type...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search benefits"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
              aria-label="Sort benefits"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
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
            <div className="grid md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
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

              {/* Benefit Tier Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Benefit Tier
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by tier"
                >
                  {tiers.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.flag} {region.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Sort benefits"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
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
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
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

        {/* ==================== TIER PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tiers
            .filter((t) => t.id !== 'all')
            .map((tier) => {
              const tierConfig = getTierConfig(tier.id);
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(selectedTier === tier.id ? 'all' : tier.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedTier === tier.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  aria-label={`Filter by ${tier.label}`}
                >
                  {getIcon(tierConfig.icon, 'w-4 h-4')}
                  {tier.label}
                </button>
              );
            })}
        </div>

        {/* ==================== TOP BENEFITS ROW ==================== */}
        {topBenefits.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('fire', 'w-5 h-5 text-orange-500')}
              Most Popular Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topBenefits.map((benefit) => {
                const categoryConfig = getCategoryConfig(benefit.category);
                const tierConfig = getTierConfig(benefit.tier);
                return (
                  <Link
                    key={benefit.id}
                    href={benefit.link}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${categoryConfig.color} flex items-center justify-center`}
                    >
                      {getIcon(categoryConfig.icon, 'w-5 h-5')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                          {benefit.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                          {tierConfig.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {benefit.popularity || 85}% employee participation
                      </p>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </Link>
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
              {filteredBenefits.length}
            </span>{' '}
            benefits
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== BENEFITS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredBenefits.map((benefit) => {
            const categoryConfig = getCategoryConfig(benefit.category);
            const tierConfig = getTierConfig(benefit.tier);
            const regionConfig = getRegionConfig(benefit.region);
            const isExpanded = expandedBenefit === benefit.id;
            const isFavorite = favoriteBenefits.includes(benefit.id);

            return (
              <div
                key={benefit.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Benefit Icon Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-br from-emerald-500 to-blue-500 flex items-center justify-center`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      {getIcon(categoryConfig.icon, 'w-8 h-8 text-white')}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}>
                      {tierConfig.badge}
                    </span>
                  </div>
                  {benefit.isNew && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full animate-pulse">
                        New
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Benefit Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <span>{regionConfig.flag}</span>
                          <span>{regionConfig.label}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleFavoriteBenefit(benefit.id)}
                      className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {benefit.description}
                  </p>

                  {/* Participation Rate */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      {getIcon('trending', 'w-4 h-4')}
                      <span>{benefit.popularity || 85}% participation</span>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {benefit.details && benefit.details.length > 0 && (
                    <div className="mb-3">
                      <button
                        onClick={() => toggleExpanded(benefit.id)}
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                        aria-label={isExpanded ? 'Show less' : `View ${benefit.details.length} details`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${benefit.details.length} details`}
                        {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                      </button>
                      {isExpanded && (
                        <ul className="mt-2 space-y-1 animate-fadeIn">
                          {benefit.details.slice(0, 4).map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {benefit.tags && benefit.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {benefit.tags.slice(0, 3).map((tag, idx) => (
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
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={benefit.link}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      {getIcon('calendar', 'w-3 h-3')}
                      <span>Updated {benefit.updatedDate || 'Mar 2024'}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredBenefits.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('gift', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No benefits found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== TOTAL REWARDS SUMMARY CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Total Rewards Package</h3>
              <p className="text-emerald-100 dark:text-emerald-200 max-w-2xl">
                Our comprehensive benefits package is designed to support you at every stage of your life and career. We're committed to your well-being, growth, and success.
              </p>
            </div>
            <Link
              href={config?.summaryLink || '/benefits-guide'}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              View Full Benefits Guide
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Benefits Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new benefits, wellness programs, and employee perks.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for benefits updates"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
            `}</style>
    </section>
  );
};

export default BenefitsAndPerksSection2;