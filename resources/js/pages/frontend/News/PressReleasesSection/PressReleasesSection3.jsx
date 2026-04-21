// frontend/Blog/PressReleasesSection/PressReleasesSection3.jsx

/**
 * Press Releases Section - Media Center Hub
 *
 * Unique design elements:
 * - Multi-tab interface (Press Releases, Media Gallery, Archive, Media Resources)
 * - Featured releases carousel with auto-play and manual navigation
 * - Archive grouped by year with expandable year sections
 * - Media gallery with image/video thumbnails and modal preview
 * - Brand assets grid with format indicators
 * - Circuit board background pattern
 * - Tab-based navigation for different content types
 * - Save/bookmark functionality with localStorage persistence
 * - Expandable content sections with executive quotes
 * - PDF download indicators on cards
 * - Year filter and category filter for releases
 * - Search functionality across all releases
 * - Responsive grid layout for all tabs
 * - Media modal for previewing images and videos
 *
 * All icons from react-icons (hi, hi2, ai, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
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
  HiOutlineCalendar as HiOutlineCalendarIcon,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper as HiOutlineNewspaperAlt,
  HiOutlineZoomIn,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineRefresh,
  HiOutlineClipboardCheck,
  HiOutlineBadgeCheck,
  HiOutlineTemplate,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi2';

const PressReleasesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [savedReleases, setSavedReleases] = useState([]);
  const [activeTab, setActiveTab] = useState('releases');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Releases', icon: 'newspaperAlt' },
        { id: 'product', label: 'Product Launches', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'users' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'funding', label: 'Funding', icon: 'credit' },
        { id: 'acquisition', label: 'Acquisitions', icon: 'rocket' },
      ],
    [config?.categories]
  );

  const brandAssets = useMemo(() => config?.brandAssets || [], [config?.brandAssets]);
  const mediaGallery = useMemo(() => config?.mediaGallery || [], [config?.mediaGallery]);
  const allReleases = useMemo(() => config?.pressReleases || [], [config?.pressReleases]);
  const featuredReleases = useMemo(() => config?.featuredReleases || [], [config?.featuredReleases]);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedPressReleases');
    if (saved) setSavedReleases(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedPressReleases', JSON.stringify(savedReleases));
  }, [savedReleases]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      newspaper: <HiOutlineNewspaper className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      clipboardCheck: <HiOutlineClipboardCheck className={className} />,
      badgeCheck: <HiOutlineBadgeCheck className={className} />,
      certificate: <FaCertificate className={className} />,
      template: <HiOutlineTemplate className={className} />,
      phone: <HiOutlinePhone className={className} />,
    };
    return icons[iconName] || <HiOutlineNewspaper className={className} />;
  }, []);

  /**
   * Formats date to various display formats
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(date);
    }
    if (format === 'month') {
      return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    }
    if (format === 'year') {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
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
        gradient: 'from-blue-500 to-blue-600',
      },
      partnership: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'Partnership',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      award: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'trophy',
        label: 'Award',
        gradient: 'from-amber-500 to-amber-600',
      },
      funding: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'credit',
        label: 'Funding',
        gradient: 'from-purple-500 to-purple-600',
      },
      acquisition: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'rocket',
        label: 'Acquisition',
        gradient: 'from-orange-500 to-orange-600',
      },
      executive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'briefcase',
        label: 'Executive',
        gradient: 'from-red-500 to-red-600',
      },
      financial: {
        color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
        icon: 'chart',
        label: 'Financial',
        gradient: 'from-teal-500 to-teal-600',
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
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredReleases.length || 1));
  }, [featuredReleases.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + (featuredReleases.length || 1)) % (featuredReleases.length || 1)
    );
  }, [featuredReleases.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredReleases.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredReleases.length, nextSlide]);

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
      releases = releases.filter(
        (r) => new Date(r.date).getFullYear().toString() === selectedYear
      );
    }

    return releases;
  }, [allReleases, searchQuery, selectedCategory, selectedYear]);

  // Group releases by year for archive view
  const releasesByYear = useMemo(() => {
    const groups = {};
    filteredReleases.forEach((release) => {
      const year = formatDate(release.date, 'year');
      if (!groups[year]) groups[year] = [];
      groups[year].push(release);
    });
    return groups;
  }, [filteredReleases, formatDate]);

  const availableYears = getAvailableYears();
  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedYear !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Press Center & Media Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-press" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-press)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('newspaperAlt', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Media Center'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Press'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Center'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Official news, press releases, and media resources from SupplyChainPro.'}
          </p>

          {/* ==================== QUICK NAVIGATION TABS ==================== */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'releases', label: 'Press Releases', icon: 'newspaperAlt' },
              { id: 'media', label: 'Media Gallery', icon: 'photo' },
              { id: 'archive', label: 'Archive', icon: 'archive' },
              { id: 'resources', label: 'Media Resources', icon: 'template' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Switch to ${tab.label} tab`}
              >
                {getIcon(tab.icon, 'w-4 h-4')}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== FEATURED RELEASES CAROUSEL ==================== */}
        {activeTab === 'releases' && featuredReleases.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredReleases.map((release) => {
                  const categoryConfig = getCategoryConfig(release.category);
                  return (
                    <div key={release.id} className="w-full shrink-0">
                      <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden">
                        <img
                          src={release.image}
                          alt={release.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                            >
                              {categoryConfig.label}
                            </span>
                            {release.isPressRelease && (
                              <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                            {release.title}
                          </h2>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">
                            {release.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('calendarIcon', 'w-4 h-4')}
                              <span>{formatDate(release.date, 'short')}</span>
                            </div>
                            <Link
                              href={release.link}
                              className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                              Read Full Release
                              <HiArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredReleases.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Carousel Dots */}
              {featuredReleases.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredReleases.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== PRESS RELEASES TAB ==================== */}
        {activeTab === 'releases' && (
          <>
            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search press releases..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search press releases"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by year"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
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
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredReleases.length}
                </span>{' '}
                press releases
              </p>
            </div>

            {/* Press Releases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredReleases.map((release) => {
                const categoryConfig = getCategoryConfig(release.category);
                const isExpanded = expandedRelease === release.id;
                const isSaved = savedReleases.includes(release.id);

                return (
                  <div
                    key={release.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <Link href={release.link} className="block overflow-hidden relative">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                        >
                          {categoryConfig.label}
                        </span>
                      </div>
                      {release.pdfUrl && (
                        <div className="absolute bottom-3 right-3">
                          <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                            {getIcon('download', 'w-4 h-4 text-white')}
                          </div>
                        </div>
                      )}
                    </Link>

                    <div className="p-5">
                      {/* Metadata */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {getIcon('calendarIcon', 'w-4 h-4')}
                        <span>{formatDate(release.date, 'short')}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        {getIcon('eye', 'w-4 h-4')}
                        <span>{release.views || '1.2k'} views</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        <Link
                          href={release.link}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {release.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {release.excerpt}
                      </p>

                      {/* Expandable Content */}
                      <button
                        onClick={() => toggleExpanded(release.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'Read more'}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                        {isExpanded ? (
                          <HiOutlineChevronUp className="w-4 h-4" />
                        ) : (
                          <HiOutlineChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isExpanded && release.quote && (
                        <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                          {getIcon('quote', 'w-4 h-4 text-blue-500 mb-1')}
                          <p className="text-xs italic text-gray-700 dark:text-gray-300">
                            "{release.quote.text}"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">— {release.quote.author}</p>
                        </div>
                      )}

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <img
                            src={release.author?.avatar}
                            alt={release.author?.name}
                            className="w-6 h-6 rounded-full object-cover"
                            loading="lazy"
                          />
                          <span className="text-xs text-gray-500">{release.author?.name}</span>
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
                          <Link
                            href={release.link}
                            className="text-blue-600 text-sm font-semibold hover:underline"
                          >
                            Read →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
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
          </>
        )}

        {/* ==================== MEDIA GALLERY TAB ==================== */}
        {activeTab === 'media' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mediaGallery.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedMedia(item);
                  setShowMediaModal(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedMedia(item) && setShowMediaModal(true)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        {getIcon('play', 'w-6 h-6 text-blue-600 ml-1')}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${item.type === 'video'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}
                    >
                      {item.type === 'video' ? 'Video' : 'Image'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      href={item.downloadUrl}
                      download
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getIcon('download', 'w-3 h-3')}
                      Download
                    </a>
                    <button
                      className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMedia(item);
                        setShowMediaModal(true);
                      }}
                    >
                      {getIcon('zoom', 'w-3 h-3')}
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== ARCHIVE TAB ==================== */}
        {activeTab === 'archive' && (
          <div className="space-y-12 mb-12">
            {Object.entries(releasesByYear)
              .sort((a, b) => b[0] - a[0])
              .map(([year, releases]) => (
                <div key={year}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{year}</h2>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                    <span className="text-sm text-gray-500">{releases.length} releases</span>
                  </div>
                  <div className="space-y-4">
                    {releases.map((release) => (
                      <div
                        key={release.id}
                        className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm text-gray-500">
                                {formatDate(release.date, 'short')}
                              </span>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${getCategoryConfig(release.category).color
                                  }`}
                              >
                                {getCategoryConfig(release.category).label}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              <Link
                                href={release.link}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {release.title}
                              </Link>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                              {release.excerpt}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {release.pdfUrl && (
                              <a
                                href={release.pdfUrl}
                                download
                                className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {getIcon('download', 'w-4 h-4')}
                                PDF
                              </a>
                            )}
                            <Link
                              href={release.link}
                              className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            >
                              Read
                              <HiArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* ==================== MEDIA RESOURCES TAB ==================== */}
        {activeTab === 'resources' && (
          <div>
            {/* Brand Assets */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                {getIcon('template', 'w-6 h-6 text-blue-600')}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Brand Assets</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brandAssets.map((asset, idx) => (
                  <a
                    key={idx}
                    href={asset.link}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 group"
                    aria-label={`Download ${asset.name}`}
                  >
                    {getIcon(asset.icon, 'w-5 h-5 text-blue-500')}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">
                        {asset.name}
                      </p>
                      <p className="text-xs text-gray-500">{asset.format}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Media Contact */}
            {config?.mediaContact && (
              <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white">
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
                      Email
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

            {/* Newsletter */}
            {config?.showNewsletter && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {config?.newsletter?.title || 'Subscribe to Press Alerts'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  {config?.newsletter?.description ||
                    'Get the latest press releases delivered to your inbox.'}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const email = formData.get('email');
                    if (email && email.includes('@')) {
                      // Handle subscription logic
                      e.target.reset();
                    }
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Email for press alerts"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* ==================== MEDIA MODAL ==================== */}
        {showMediaModal && selectedMedia && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowMediaModal(false)}
            role="dialog"
            aria-label="Media preview"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowMediaModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                {getIcon('x', 'w-6 h-6')}
              </button>
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  className="w-full"
                  controls
                  autoPlay
                  poster={selectedMedia.thumbnail}
                />
              ) : (
                <img
                  src={selectedMedia.url || selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              )}
              <div className="p-4 bg-gray-900">
                <h3 className="text-lg font-bold text-white">{selectedMedia.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={selectedMedia.downloadUrl}
                    download
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label="Download media"
                  >
                    {getIcon('download', 'w-4 h-4')}
                    Download
                  </a>
                  <button
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Share media"
                  >
                    {getIcon('shareAlt', 'w-4 h-4')}
                    Share
                  </button>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default PressReleasesSection3;