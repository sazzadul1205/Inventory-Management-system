// page/frontend/GlobalPresence/LanguageSupportSection/LanguageSupportSection2.jsx

/**
 * Language Support Section - Multilingual Support Directory Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators for language metrics
 * - Sort dropdown (Sort by Name, Sort by Speakers, Sort by Response Time)
 * - Grid/List view toggle for language browsing
 * - Multi-filter system (Language, Region, Support Level)
 * - Active filter indicators with count badge
 * - Favorite functionality with heart icon and persistence
 * - Fastest response times row with horizontal cards
 * - Support level pills for quick filtering
 * - Language cards with gradient flag backgrounds
 * - Speaker count and response time metrics
 * - Support channels expansion with icons
 * - Region badges with flag icons
 * - Search across language names, native names, and regions
 * - Responsive grid and list layouts
 * - Animated gradient orbs in background
 * - Translation services CTA banner
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineGlobe,
  HiOutlineTranslate,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineFire,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineMap,
  HiOutlineVolumeUp,
  HiOutlineMicrophone,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const LanguageSupportSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedLanguage, setExpandedLanguage] = useState(null);
  const [favoriteLanguages, setFavoriteLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allLanguages = useMemo(() => config?.languages || [], [config?.languages]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allLanguages.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allLanguages.length]
  );

  const supportLevels = useMemo(
    () =>
      config?.supportLevels || [
        { id: 'all', label: 'All Levels' },
        { id: 'Full', label: 'Full Support' },
        { id: 'Limited', label: 'Limited Support' },
        { id: 'Self-Service', label: 'Self-Service' },
      ],
    [config?.supportLevels]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '15+', label: 'Languages Supported', icon: 'translate', trend: '+3', trendUp: true },
        { value: '24/7', label: 'Global Support', icon: 'clock', trend: 'Always', trendUp: true },
        { value: '35min', label: 'Avg Response Time', icon: 'clock', trend: '-5min', trendUp: true },
        { value: '98%', label: 'Customer Satisfaction', icon: 'star', trend: '+2%', trendUp: true },
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      globe: <HiOutlineGlobe className={className} />,
      translate: <HiOutlineTranslate className={className} />,
      users: <HiOutlineUsers className={className} />,
      star: <HiOutlineStar className={className} />,
      clock: <HiOutlineClock className={className} />,
      phone: <HiOutlinePhone className={className} />,
      mail: <HiOutlineMail className={className} />,
      chat: <HiOutlineChat className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      fire: <HiOutlineFire className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      map: <HiOutlineMap className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
    };
    return icons[iconName] || <HiOutlineTranslate className={className} />;
  }, []);

  /**
   * Returns language configuration with color and details
   */
  const getLanguageConfig = useCallback((languageId) => {
    const configs = {
      english: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'English',
        flag: '🇺🇸',
        code: 'en',
        nativeName: 'English',
        speakers: '1.5B+',
        gradient: 'from-blue-500 to-blue-600',
      },
      spanish: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Spanish',
        flag: '🇪🇸',
        code: 'es',
        nativeName: 'Español',
        speakers: '500M+',
        gradient: 'from-purple-500 to-purple-600',
      },
      french: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'French',
        flag: '🇫🇷',
        code: 'fr',
        nativeName: 'Français',
        speakers: '300M+',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      german: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'German',
        flag: '🇩🇪',
        code: 'de',
        nativeName: 'Deutsch',
        speakers: '200M+',
        gradient: 'from-orange-500 to-orange-600',
      },
      mandarin: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Mandarin',
        flag: '🇨🇳',
        code: 'zh',
        nativeName: '中文',
        speakers: '1.2B+',
        gradient: 'from-red-500 to-red-600',
      },
      japanese: {
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
        icon: 'globe',
        label: 'Japanese',
        flag: '🇯🇵',
        code: 'ja',
        nativeName: '日本語',
        speakers: '125M+',
        gradient: 'from-pink-500 to-pink-600',
      },
      arabic: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Arabic',
        flag: '🇦🇪',
        code: 'ar',
        nativeName: 'العربية',
        speakers: '400M+',
        gradient: 'from-yellow-500 to-amber-500',
      },
      portuguese: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'globe',
        label: 'Portuguese',
        flag: '🇧🇷',
        code: 'pt',
        nativeName: 'Português',
        speakers: '250M+',
        gradient: 'from-amber-500 to-amber-600',
      },
    };
    return (
      configs[languageId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'globe',
        label: languageId,
        flag: '🌐',
        nativeName: languageId,
      }
    );
  }, []);

  /**
   * Returns region configuration with flag
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'North America',
        flag: '🇺🇸',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Europe',
        flag: '🇪🇺',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Asia Pacific',
        flag: '🌏',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Latin America',
        flag: '🌎',
        borderColor: 'border-orange-200 dark:border-orange-800',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Middle East',
        flag: '🕌',
        borderColor: 'border-red-200 dark:border-red-800',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        label: 'Africa',
        flag: '🌍',
        borderColor: 'border-yellow-200 dark:border-yellow-800',
      },
    };
    return (
      configs[regionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: regionId,
        flag: '🌐',
      }
    );
  }, []);

  /**
   * Get unique regions from languages for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regionSet = new Set();
    allLanguages.forEach((language) => {
      if (language.regions) {
        language.regions.forEach((region) => regionSet.add(region));
      }
    });
    return Array.from(regionSet);
  }, [allLanguages]);

  /**
   * Get unique languages for filter dropdown
   */
  const getUniqueLanguages = useCallback(() => {
    return allLanguages.map((l) => ({ id: l.id, name: l.name }));
  }, [allLanguages]);

  /**
   * Toggle favorite status for a language
   */
  const handleFavoriteLanguage = useCallback((languageId) => {
    setFavoriteLanguages((prev) =>
      prev.includes(languageId) ? prev.filter((id) => id !== languageId) : [...prev, languageId]
    );
  }, []);

  /**
   * Toggle expanded state for a language
   */
  const toggleExpanded = useCallback((languageId) => {
    setExpandedLanguage((prev) => (prev === languageId ? null : languageId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedLanguage('all');
    setSelectedRegion('all');
    setSelectedSupportLevel('all');
    setSortBy('name');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredLanguages = useMemo(() => {
    let languages = [...allLanguages];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      languages = languages.filter(
        (l) =>
          l.name?.toLowerCase().includes(query) ||
          l.nativeName?.toLowerCase().includes(query) ||
          l.regions?.some((region) => region.toLowerCase().includes(query))
      );
    }

    if (selectedLanguage !== 'all') {
      languages = languages.filter((l) => l.id === selectedLanguage);
    }

    if (selectedRegion !== 'all') {
      languages = languages.filter((l) => l.regions?.includes(selectedRegion));
    }

    if (selectedSupportLevel !== 'all') {
      languages = languages.filter((l) => l.supportLevel === selectedSupportLevel);
    }

    // Sorting
    if (sortBy === 'name') {
      languages.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'speakers') {
      languages.sort((a, b) => {
        const aNum = parseInt(a.speakers) || 0;
        const bNum = parseInt(b.speakers) || 0;
        return bNum - aNum;
      });
    } else if (sortBy === 'responseTime') {
      languages.sort((a, b) => (a.responseTime || 60) - (b.responseTime || 60));
    }

    return languages;
  }, [allLanguages, searchQuery, selectedLanguage, selectedRegion, selectedSupportLevel, sortBy]);

  // Top languages by fastest response time
  const topLanguages = useMemo(() => {
    return [...allLanguages]
      .sort((a, b) => (a.responseTime || 60) - (b.responseTime || 60))
      .slice(0, 4);
  }, [allLanguages]);

  // Update region count for display
  const regionsWithCount = useMemo(() => {
    return regions.map((region) => {
      if (region.id === 'all') {
        return { ...region, count: filteredLanguages.length };
      }
      const count = allLanguages.filter((l) => l.regions?.includes(region.id)).length;
      return { ...region, count };
    });
  }, [regions, allLanguages, filteredLanguages.length]);

  const uniqueRegions = getUniqueRegions();
  const uniqueLanguages = getUniqueLanguages();
  const activeFiltersCount = [
    selectedLanguage !== 'all',
    selectedRegion !== 'all',
    selectedSupportLevel !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Language Support Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
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
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('translate', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Language Support'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Support in Your'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Language'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
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
                config?.searchPlaceholder || 'Search by language name, native name, or region...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search languages"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort languages"
            >
              <option value="name">Sort by Name</option>
              <option value="speakers">Sort by Speakers</option>
              <option value="responseTime">Sort by Response Time</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
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
              {/* Language Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by language"
                >
                  <option value="all">All Languages</option>
                  {uniqueLanguages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              {uniqueRegions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Region
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by region"
                  >
                    <option value="all">All Regions</option>
                    {uniqueRegions.map((region) => (
                      <option key={region} value={region}>
                        {getRegionConfig(region).label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Support Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Support Level
                </label>
                <select
                  value={selectedSupportLevel}
                  onChange={(e) => setSelectedSupportLevel(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by support level"
                >
                  {supportLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort languages"
                >
                  <option value="name">Language Name</option>
                  <option value="speakers">Number of Speakers</option>
                  <option value="responseTime">Response Time</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== REGION PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {regionsWithCount.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${region.label} support`}
            >
              {getIcon(region.icon, 'w-4 h-4')}
              {region.label}
              {region.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedRegion === region.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {region.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== TOP LANGUAGES ROW ==================== */}
        {topLanguages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Fastest Response Times
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topLanguages.map((language) => {
                const langConfig = getLanguageConfig(language.id);
                return (
                  <Link
                    key={language.id}
                    href={`/support/${language.code}`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-linear-to-r ${langConfig.gradient} flex items-center justify-center text-xl`}
                    >
                      {language.flag}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {language.name}
                        </h3>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">
                          {language.responseTime} min
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{language.nativeName}</p>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== SUPPORT LEVEL PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {supportLevels
            .filter((l) => l.id !== 'all')
            .map((level) => (
              <button
                key={level.id}
                onClick={() =>
                  setSelectedSupportLevel(selectedSupportLevel === level.id ? 'all' : level.id)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedSupportLevel === level.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Filter by ${level.label}`}
              >
                {level.label}
              </button>
            ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredLanguages.length}
            </span>{' '}
            languages
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== LANGUAGES GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredLanguages.map((language) => {
            const langConfig = getLanguageConfig(language.id);
            const isExpanded = expandedLanguage === language.id;
            const isFavorite = favoriteLanguages.includes(language.id);

            return (
              <div
                key={language.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Language Flag Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-br ${langConfig.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl">{language.flag}</span>
                  </div>
                  {language.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${langConfig.color}`}>
                      {langConfig.label}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {language.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{language.nativeName}</p>
                    </div>
                    <button
                      onClick={() => handleFavoriteLanguage(language.id)}
                      className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {langConfig.speakers} speakers
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">
                      {language.responseTime} min avg response
                    </span>
                  </div>

                  {/* Region Badges */}
                  {language.regions && language.regions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {language.regions.map((region, idx) => {
                        const regConfig = getRegionConfig(region);
                        return (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1"
                          >
                            <span>{regConfig.flag}</span>
                            {regConfig.label}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Support Metrics */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Support Team:</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {language.teamSize}+ specialists
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Support Level:</span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">
                        {language.supportLevel}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Support Channels */}
                  {language.supportChannels && language.supportChannels.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(language.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'View support channels'}
                      >
                        {isExpanded ? 'Show less' : 'View support channels'}
                        <HiOutlineChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2 animate-fadeIn">
                          {language.supportChannels.map((channel, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              {channel.icon === 'phone' && getIcon('phone', 'w-4 h-4 text-emerald-500')}
                              {channel.icon === 'chat' && getIcon('chat', 'w-4 h-4 text-blue-500')}
                              {channel.icon === 'mail' && getIcon('mail', 'w-4 h-4 text-purple-500')}
                              <span className="text-gray-600 dark:text-gray-400">{channel.name}</span>
                              <span className="text-xs text-gray-400 dark:text-gray-500">{channel.details}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={`/support/${language.code}`}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Get Support
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {language.docsLink && (
                      <a
                        href={language.docsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="View documentation"
                      >
                        {getIcon('document', 'w-4 h-4')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredLanguages.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('translate', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No languages found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== TRANSLATION SERVICES BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Translation Services?</h3>
              <p className="text-blue-100 max-w-2xl">
                We offer professional translation services for documentation, training materials,
                and support resources in all supported languages.
              </p>
            </div>
            <Link
              href="/translation-services"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Language Support Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new language support, translated resources, and localization news.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for language support updates"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LanguageSupportSection2;