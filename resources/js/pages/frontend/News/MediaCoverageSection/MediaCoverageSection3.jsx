// frontend/Blog/MediaCoverageSection/MediaCoverageSection3.jsx

/**
 * Media Coverage Section - Media Hub with Tabbed Interface
 *
 * Unique design elements:
 * - Tabbed interface (All Coverage, Featured, Trending, Recent)
 * - Featured coverage carousel with auto-play and manual navigation
 * - Publication logo display in card headers
 * - Category badges with color coding
 * - Like functionality with heart icon and counter
 * - Save/bookmark functionality with localStorage persistence
 * - Expandable quote sections with citation styling
 * - Tags display with hashtag formatting
 * - Publication filter dropdown
 * - Category filter dropdown
 * - Year filter dropdown
 * - Search across titles, excerpts, and tags
 * - Media mentions timeline section
 * - Stats cards for key metrics
 * - Press kit download banner
 * - Media contact section with email and phone
 * - Circuit board background pattern
 * - Responsive grid layout
 * - Animated pulse badge in header
 *
 * All icons from react-icons (hi, hi2, ai, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

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
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineChevronRight,
  HiOutlineHeart,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineChevronLeft,
} from 'react-icons/hi2';

const MediaCoverageSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [savedCoverage, setSavedCoverage] = useState([]);
  const [likedCoverage, setLikedCoverage] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedCoverage, setExpandedCoverage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPublication, setSelectedPublication] = useState('all');

  // ==================== REFS ====================
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allCoverage = useMemo(() => config?.mediaCoverage || [], [config?.mediaCoverage]);
  const featuredCoverage = useMemo(() => config?.featuredCoverage || [], [config?.featuredCoverage]);
  const mentionsTimeline = useMemo(() => config?.mentionsTimeline || [], [config?.mentionsTimeline]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Coverage', icon: 'newspaper' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'trending', label: 'Trending', icon: 'fire' },
        { id: 'recent', label: 'Recent', icon: 'clock' },
      ],
    [config?.categories]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '50+', label: 'Media Mentions', icon: 'newspaper' },
        { value: '25+', label: 'Publications', icon: 'globe' },
        { value: '2M+', label: 'Total Impressions', icon: 'eye' },
        { value: '4.8', label: 'Avg. Rating', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedMediaCoverage');
    if (saved) setSavedCoverage(JSON.parse(saved));
    const liked = localStorage.getItem('likedMediaCoverage');
    if (liked) setLikedCoverage(JSON.parse(liked));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedMediaCoverage', JSON.stringify(savedCoverage));
  }, [savedCoverage]);

  useEffect(() => {
    localStorage.setItem('likedMediaCoverage', JSON.stringify(likedCoverage));
  }, [likedCoverage]);

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
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
      phone: <HiOutlinePhone className={className} />,
    };
    return icons[iconName] || <HiOutlineNewspaper className={className} />;
  }, []);

  /**
   * Formats date to short display format
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
   * Returns publication configuration with color and label
   */
  const getPublicationConfig = useCallback((publicationName) => {
    const configs = {
      TechCrunch: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'chip',
        label: 'TechCrunch',
      },
      Forbes: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'star',
        label: 'Forbes',
      },
      Bloomberg: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'chart',
        label: 'Bloomberg',
      },
      'Wall Street Journal': {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: 'WSJ',
      },
      Gartner: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'academic',
        label: 'Gartner',
      },
      'Fast Company': {
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
        icon: 'rocket',
        label: 'Fast Company',
      },
    };
    return (
      configs[publicationName] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: publicationName,
      }
    );
  }, []);

  /**
   * Returns category configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      feature: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'star',
        label: 'Feature',
      },
      interview: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'microphone',
        label: 'Interview',
      },
      review: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'document',
        label: 'Review',
      },
      award: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'trophy',
        label: 'Award',
      },
      mention: {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'quote',
        label: 'Mention',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: 'Coverage',
      }
    );
  }, []);

  /**
   * Get unique years from coverage for filter dropdown
   */
  const getAvailableYears = useCallback(() => {
    const years = new Set();
    allCoverage.forEach((item) => {
      if (item.date) {
        years.add(new Date(item.date).getFullYear());
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [allCoverage]);

  /**
   * Get unique publications for filter dropdown
   */
  const getUniquePublications = useCallback(() => {
    const pubs = new Set();
    allCoverage.forEach((item) => {
      if (item.publication) {
        pubs.add(item.publication);
      }
    });
    return Array.from(pubs);
  }, [allCoverage]);

  /**
   * Toggle save/bookmark status for a coverage item
   */
  const handleSaveCoverage = useCallback((coverageId) => {
    setSavedCoverage((prev) =>
      prev.includes(coverageId) ? prev.filter((id) => id !== coverageId) : [...prev, coverageId]
    );
  }, []);

  /**
   * Toggle like status for a coverage item
   */
  const handleLikeCoverage = useCallback((coverageId) => {
    setLikedCoverage((prev) =>
      prev.includes(coverageId) ? prev.filter((id) => id !== coverageId) : [...prev, coverageId]
    );
  }, []);

  /**
   * Toggle expanded state for a coverage item
   */
  const toggleExpanded = useCallback((coverageId) => {
    setExpandedCoverage((prev) => (prev === coverageId ? null : coverageId));
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredCoverage.length || 1));
  }, [featuredCoverage.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredCoverage.length || 1)) % (featuredCoverage.length || 1));
  }, [featuredCoverage.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedPublication('all');
    setSelectedCategory('all');
    setSelectedYear('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredCoverage.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredCoverage.length, nextSlide]);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredCoverage = useMemo(() => {
    let coverage = [...allCoverage];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      coverage = coverage.filter(
        (c) =>
          c.title?.toLowerCase().includes(query) ||
          c.excerpt?.toLowerCase().includes(query) ||
          c.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Publication filter
    if (selectedPublication !== 'all') {
      coverage = coverage.filter((c) => c.publication === selectedPublication);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      coverage = coverage.filter((c) => c.category === selectedCategory);
    }

    // Year filter
    if (selectedYear !== 'all') {
      coverage = coverage.filter((c) => new Date(c.date).getFullYear().toString() === selectedYear);
    }

    // Tab-based filtering
    if (activeTab !== 'all') {
      if (activeTab === 'featured') {
        coverage = coverage.filter((c) => c.isFeatured);
      } else if (activeTab === 'trending') {
        coverage = [...coverage].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0)).slice(0, 6);
      } else if (activeTab === 'recent') {
        coverage = [...coverage].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
      }
    }

    return coverage;
  }, [allCoverage, searchQuery, selectedPublication, selectedCategory, selectedYear, activeTab]);

  // Trending coverage for trending tab (sorted by trendingScore)
  const trendingCoverage = useMemo(() => {
    return [...allCoverage].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0)).slice(0, 6);
  }, [allCoverage]);

  // Recent coverage for recent tab (sorted by date)
  const recentCoverage = useMemo(() => {
    return [...allCoverage].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  }, [allCoverage]);

  const availableYears = getAvailableYears();
  const uniquePublications = getUniquePublications();
  const activeFiltersCount = [
    selectedPublication !== 'all',
    selectedCategory !== 'all',
    selectedYear !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Media Coverage Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-media" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-media)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('globe', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Media Hub'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'In the'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Spotlight'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Discover how SupplyChainPro is making waves in leading publications worldwide. From feature articles to expert interviews, see our latest media coverage.'}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((tab) => (
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

        {/* ==================== FEATURED COVERAGE CAROUSEL ==================== */}
        {activeTab === 'all' && featuredCoverage.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredCoverage.map((coverage) => {
                  const pubConfig = getPublicationConfig(coverage.publication);
                  const categoryConfig = getCategoryConfig(coverage.category);
                  return (
                    <div key={coverage.id} className="w-full shrink-0">
                      <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden">
                        <img
                          src={coverage.image}
                          alt={coverage.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${pubConfig.color}`}>
                              {pubConfig.label}
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </div>
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 line-clamp-2">
                            {coverage.title}
                          </h2>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">
                            {coverage.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('calendar', 'w-4 h-4')}
                              <span>{formatDate(coverage.date, 'short')}</span>
                            </div>
                            <a
                              href={coverage.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                              Read Full Article
                              {getIcon('external', 'w-4 h-4')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredCoverage.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    {getIcon('chevron-left', 'w-6 h-6')}
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    {getIcon('chevron-right', 'w-6 h-6')}
                  </button>
                </>
              )}

              {/* Carousel Dots */}
              {featuredCoverage.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredCoverage.map((_, idx) => (
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

        {/* ==================== SEARCH AND FILTERS (All Tab Only) ==================== */}
        {activeTab === 'all' && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search media coverage by publication, topic, or keyword..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search media coverage"
                />
              </div>

              <div className="flex gap-2">
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
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Publication Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Publication
                    </label>
                    <select
                      value={selectedPublication}
                      onChange={(e) => setSelectedPublication(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      aria-label="Filter by publication"
                    >
                      <option value="all">All Publications</option>
                      {uniquePublications.map((pub) => (
                        <option key={pub} value={pub}>
                          {pub}
                        </option>
                      ))}
                    </select>
                  </div>

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
                      <option value="feature">Features</option>
                      <option value="interview">Interviews</option>
                      <option value="review">Reviews</option>
                      <option value="award">Awards</option>
                      <option value="mention">Mentions</option>
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

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredCoverage.length}
                </span>{' '}
                media mentions
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          </>
        )}

        {/* ==================== ALL COVERAGE GRID ==================== */}
        {activeTab === 'all' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCoverage.map((coverage) => {
              const pubConfig = getPublicationConfig(coverage.publication);
              const categoryConfig = getCategoryConfig(coverage.category);
              const isExpanded = expandedCoverage === coverage.id;
              const isSaved = savedCoverage.includes(coverage.id);
              const isLiked = likedCoverage.includes(coverage.id);

              return (
                <div
                  key={coverage.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  {/* Publication Header */}
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {coverage.publicationLogo ? (
                          <img
                            src={coverage.publicationLogo}
                            alt={coverage.publication}
                            className="h-8 w-auto object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${pubConfig.color}`}>
                            {pubConfig.label}
                          </div>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {getIcon('calendar', 'w-3 h-3')}
                        <span>{formatDate(coverage.date, 'short')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <a
                        href={coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {coverage.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {coverage.excerpt}
                    </p>

                    {/* Expandable Quote */}
                    {coverage.quote && (
                      <div className="mb-3">
                        <button
                          onClick={() => toggleExpanded(coverage.id)}
                          className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                          aria-label={isExpanded ? 'Show less' : 'Read quote'}
                        >
                          {isExpanded ? 'Show less' : 'Read quote'}
                          <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-3 border-blue-500 animate-fadeIn">
                            {getIcon('quote', 'w-3 h-3 text-blue-500 mb-1')}
                            <p className="text-xs italic text-gray-700 dark:text-gray-300">
                              "{coverage.quote}"
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tags */}
                    {coverage.tags && coverage.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {coverage.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleLikeCoverage(coverage.id)}
                          className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                          aria-label={isLiked ? 'Unlike' : 'Like'}
                        >
                          {getIcon('heart', `w-3 h-3 ${isLiked ? 'fill-current' : ''}`)}
                          <span>{coverage.likes || 0}</span>
                        </button>
                        <button
                          onClick={() => handleSaveCoverage(coverage.id)}
                          className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                            }`}
                          aria-label={isSaved ? 'Remove from saved' : 'Save article'}
                        >
                          {getIcon('bookmark', 'w-3 h-3')}
                        </button>
                        <button
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          aria-label="Share article"
                        >
                          {getIcon('shareAlt', 'w-3 h-3')}
                        </button>
                      </div>

                      <a
                        href={coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:gap-2 transition-all duration-300"
                      >
                        Read
                        {getIcon('external', 'w-3 h-3')}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== TRENDING TAB CONTENT ==================== */}
        {activeTab === 'trending' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {trendingCoverage.map((coverage) => (
              <div
                key={coverage.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      {getIcon('fire', 'w-6 h-6 text-orange-500')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${getPublicationConfig(coverage.publication).color}`}
                      >
                        {getPublicationConfig(coverage.publication).label}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(coverage.date, 'short')}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      <a
                        href={coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {coverage.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{coverage.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== RECENT TAB CONTENT ==================== */}
        {activeTab === 'recent' && (
          <div className="space-y-4 mb-12">
            {recentCoverage.map((coverage) => (
              <div
                key={coverage.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${getPublicationConfig(coverage.publication).color}`}
                      >
                        {getPublicationConfig(coverage.publication).label}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(coverage.date, 'short')}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      <a
                        href={coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {coverage.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{coverage.excerpt}</p>
                  </div>
                  <a
                    href={coverage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {activeTab === 'all' && filteredCoverage.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('newspaper', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No media coverage found
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

        {/* ==================== MEDIA MENTIONS TIMELINE ==================== */}
        {activeTab === 'all' && mentionsTimeline.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('clock', 'w-5 h-5 text-blue-600')}
              Media Mentions Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
              <div className="space-y-6">
                {mentionsTimeline.slice(0, 5).map((mention, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {getIcon('star', 'w-3 h-3 text-blue-600')}
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {mention.publication}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(mention.date, 'short')}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{mention.title}</p>
                      <a
                        href={mention.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2 hover:underline"
                      >
                        Read article
                        {getIcon('external', 'w-3 h-3')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== PRESS KIT BANNER ==================== */}
        {config?.showPressKit && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  {getIcon('download', 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Media Resources & Press Kit
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Download logos, brand assets, and media resources
                  </p>
                </div>
              </div>
              <Link
                href={config?.pressKitLink || '/press-kit'}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {getIcon('download', 'w-4 h-4')}
                Download Press Kit
              </Link>
            </div>
          </div>
        )}

        {/* ==================== MEDIA CONTACT SECTION ==================== */}
        {config?.showMediaContact && config?.mediaContact && (
          <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getIcon('mail', 'w-5 h-5')}
                  <span className="text-sm font-semibold uppercase tracking-wider">Media Contact</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{config.mediaContact.name}</h3>
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

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon('x', 'w-6 h-6')}
              </button>
              <video ref={videoRef} className="w-full" controls autoPlay />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
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

export default MediaCoverageSection3;