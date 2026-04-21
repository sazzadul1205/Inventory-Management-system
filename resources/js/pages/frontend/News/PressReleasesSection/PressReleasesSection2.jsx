// frontend/Blog/PressReleasesSection/PressReleasesSection2.jsx

/**
 * Press Releases Section - Advanced Media Hub
 *
 * Unique design elements:
 * - Stats cards for key media metrics
 * - Expandable filters panel with category, year, region
 * - Active filter indicators with count badge
 * - Grid/List view toggle for content browsing
 * - Expandable content sections with executive quotes
 * - Embargo badge with pulse animation for sensitive releases
 * - Region/location badges for geographic targeting
 * - Save/bookmark functionality with persistence
 * - PDF download buttons on thumbnails
 * - Media kit resources grid with format indicators
 * - Quick resource links in press kit section
 * - Results count display with filter context
 * - Category pills with count badges
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
import { FaQuoteLeft } from 'react-icons/fa';
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
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';

const PressReleasesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedReleases, setSavedReleases] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Releases', icon: 'newspaper', count: config?.pressReleases?.length || 0 },
        { id: 'product', label: 'Product Launches', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'users' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'funding', label: 'Funding', icon: 'credit' },
        { id: 'acquisition', label: 'Acquisitions', icon: 'rocket' },
      ],
    [config?.categories, config?.pressReleases?.length]
  );

  const allReleases = useMemo(() => config?.pressReleases || [], [config?.pressReleases]);

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '50+', label: 'Press Releases', icon: 'newspaper' },
        { value: '25+', label: 'Media Mentions', icon: 'globe' },
        { value: '100+', label: 'Media Contacts', icon: 'users' },
        { value: '15+', label: 'Awards Won', icon: 'trophy' },
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
      newspaper: <HiOutlineNewspaper className={className} />,
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
      trophy: <HiOutlineTrophy className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
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
      phone: <HiOutlinePhone className={className} />,
    };
    return icons[iconName] || <HiOutlineNewspaper className={className} />;
  }, []);

  /**
   * Formats date to short or full display format
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }, []);

  /**
   * Returns category badge configuration with color, icon, and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      product: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'chip',
        label: 'Product Launch',
      },
      partnership: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'Partnership',
      },
      award: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'trophy',
        label: 'Award & Recognition',
      },
      funding: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'credit',
        label: 'Funding & Investment',
      },
      acquisition: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'rocket',
        label: 'Acquisition',
      },
      executive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'briefcase',
        label: 'Executive Appointment',
      },
      financial: {
        color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
        icon: 'chart',
        label: 'Financial Results',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: 'Press Release',
      }
    );
  }, []);

  /**
   * Get unique years from press releases for filter dropdown
   */
  const getAvailableYears = useCallback(() => {
    const years = new Set();
    allReleases.forEach((release) => {
      if (release.date) {
        years.add(new Date(release.date).getFullYear());
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [allReleases]);

  /**
   * Get unique regions from press releases for filter dropdown
   */
  const getAvailableRegions = useCallback(() => {
    const regions = new Set();
    allReleases.forEach((release) => {
      if (release.region) {
        regions.add(release.region);
      }
    });
    return Array.from(regions);
  }, [allReleases]);

  /**
   * Toggle save/bookmark status for a press release
   */
  const handleSaveRelease = useCallback((releaseId) => {
    setSavedReleases((prev) =>
      prev.includes(releaseId) ? prev.filter((id) => id !== releaseId) : [...prev, releaseId]
    );
  }, []);

  /**
   * Toggle expanded state for a press release
   */
  const toggleExpanded = useCallback((releaseId) => {
    setExpandedRelease((prev) => (prev === releaseId ? null : releaseId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
    setSelectedRegion('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredReleases = useMemo(() => {
    let releases = [...allReleases];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      releases = releases.filter(
        (r) =>
          r.title?.toLowerCase().includes(query) ||
          r.excerpt?.toLowerCase().includes(query) ||
          r.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      releases = releases.filter((r) => r.category === selectedCategory);
    }

    if (selectedYear !== 'all') {
      releases = releases.filter((r) => new Date(r.date).getFullYear().toString() === selectedYear);
    }

    if (selectedRegion !== 'all') {
      releases = releases.filter((r) => r.region === selectedRegion);
    }

    return releases;
  }, [allReleases, searchQuery, selectedCategory, selectedYear, selectedRegion]);

  const availableYears = getAvailableYears();
  const availableRegions = getAvailableRegions();

  // Count active filters for badge display
  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedYear !== 'all',
    selectedRegion !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Press Releases & News - Advanced Media Hub"
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
              {getIcon('newspaper', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Newsroom'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Press'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Releases'}
              </span>{' '}
              {config?.title?.suffix || '& Announcements'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Official statements, company news, and media resources from SupplyChainPro.'}
            </p>
          </div>

          {/* Stats Cards */}
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
                config?.searchPlaceholder || 'Search press releases, topics, or keywords...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search press releases"
            />
          </div>

          <div className="flex gap-2">
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
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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

              {/* Region Filter */}
              {availableRegions.length > 0 && (
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
                    {availableRegions.map((region) => (
                      <option key={region} value={region}>
                        {region}
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
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== CATEGORY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
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

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredReleases.length}
            </span>{' '}
            press releases
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PRESS RELEASES GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredReleases.map((release) => {
            const categoryConfig = getCategoryConfig(release.category);
            const isExpanded = expandedRelease === release.id;
            const isSaved = savedReleases.includes(release.id);

            return (
              <div
                key={release.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Release Image */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-80 md:shrink-0' : ''
                    }`}
                >
                  <img
                    src={release.image}
                    alt={release.title}
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
                  {release.isEmbargoed && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse shadow-md">
                        Embargoed
                      </span>
                    </div>
                  )}
                  {release.pdfUrl && (
                    <div className="absolute bottom-3 right-3">
                      <a
                        href={release.pdfUrl}
                        download
                        className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Download PDF"
                      >
                        {getIcon('download', 'w-4 h-4 text-white')}
                      </a>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{formatDate(release.date, 'short')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('eye', 'w-4 h-4')}
                      <span>{release.views || '1.2k'} views</span>
                    </div>
                    {release.region && (
                      <div className="flex items-center gap-1">
                        {getIcon('location', 'w-4 h-4')}
                        <span>{release.region}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={release.link}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {release.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {release.excerpt}
                  </p>

                  {/* Expandable Content */}
                  {release.content && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(release.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'Read more'}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                        {isExpanded ? (
                          <HiOutlineChevronUp className="w-4 h-4" />
                        ) : (
                          <HiOutlineChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 animate-fadeIn">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {release.content}
                          </p>
                          {release.quote && (
                            <div className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                              {getIcon('quote', 'w-4 h-4 text-blue-500 mb-2')}
                              <p className="text-sm italic text-gray-700 dark:text-gray-300">
                                "{release.quote.text}"
                              </p>
                              <p className="text-xs text-gray-500 mt-2">
                                — {release.quote.author}, {release.quote.title}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {release.tags && release.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {release.tags.slice(0, 3).map((tag, idx) => (
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
                    <div className="flex items-center gap-2">
                      <img
                        src={release.author?.avatar}
                        alt={release.author?.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {release.author?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleSaveRelease(release.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save release'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                      <button
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Share release"
                      >
                        {getIcon('shareAlt', 'w-4 h-4')}
                      </button>
                      <Link
                        href={release.link}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                      >
                        Read More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredReleases.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('newspaper', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No press releases found
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

        {/* ==================== PRESS KIT & MEDIA RESOURCES ==================== */}
        {config?.showPressKit && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  {getIcon('download', 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Press Kit & Media Resources
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Download logos, brand assets, executive headshots, and media resources
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href={config?.pressKitLink || '/press-kit'}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  {getIcon('download', 'w-4 h-4')}
                  Download Press Kit
                </Link>
                <Link
                  href="/media-inquiries"
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                >
                  {getIcon('mail', 'w-4 h-4')}
                  Media Inquiries
                </Link>
              </div>
            </div>

            {/* Quick Resources Grid */}
            {config?.pressKitResources && config.pressKitResources.length > 0 && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {config.pressKitResources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.link}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    aria-label={`Download ${resource.name}`}
                  >
                    {getIcon(resource.icon, 'w-5 h-5 text-blue-500')}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {resource.name}
                      </p>
                      <p className="text-xs text-gray-500">{resource.format}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== MEDIA CONTACT BANNER ==================== */}
        {config?.showMediaContact && config?.mediaContact && (
          <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getIcon('mail', 'w-5 h-5')}
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Media Contact
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{config.mediaContact.name}</h3>
                <p className="text-blue-100">{config.mediaContact.title}</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`mailto:${config.mediaContact.email}`}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Email media contact"
                >
                  {getIcon('mail', 'w-4 h-4')}
                  {config.mediaContact.email}
                </a>
                <a
                  href={`tel:${config.mediaContact.phone}`}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Call media contact"
                >
                  {getIcon('phone', 'w-4 h-4')}
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Subscribe to Press Release Alerts'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Get the latest press releases and company announcements delivered straight to your inbox.'}
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
                className="flex-1 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for press release alerts"
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

export default PressReleasesSection2;