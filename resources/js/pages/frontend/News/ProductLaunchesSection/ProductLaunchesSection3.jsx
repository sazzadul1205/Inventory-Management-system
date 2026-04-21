// frontend/Blog/ProductLaunchesSection/ProductLaunchesSection3.jsx

/**
 * Product Launches Section - Launch Hub with Comparison
 *
 * Unique design elements:
 * - Tabbed interface (All Products, Now Live, Beta, Coming Soon, Saved)
 * - Featured launches carousel with auto-play and manual navigation
 * - Product comparison feature (select up to 3 products to compare)
 * - Comparison modal with feature comparison table
 * - Video demo modal player
 * - Like functionality with heart icon and counter
 * - Save/bookmark functionality with localStorage persistence
 * - Expandable features list with checkmarks
 * - Status badges with color coding (LIVE, BETA, SOON, PREVIEW)
 * - Category filter dropdown
 * - Status filter dropdown
 * - Search across titles, descriptions, and tags
 * - Circuit board background pattern
 * - Stats cards for key metrics
 * - Responsive grid layout
 * - Animated pulse badge in header
 * - Fixed comparison banner at bottom when products selected
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBadgeCheck,
  HiOutlineLibrary,
  HiOutlineWifi,
  HiOutlineRefresh as HiOutlineRefreshAlt,
  HiOutlineClipboardCheck,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const ProductLaunchesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [savedLaunches, setSavedLaunches] = useState([]);
  const [likedLaunches, setLikedLaunches] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [expandedLaunch, setExpandedLaunch] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState([]);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allLaunches = useMemo(() => config?.launches || [], [config?.launches]);
  const featuredLaunches = useMemo(() => config?.featuredLaunches || [], [config?.featuredLaunches]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Products', icon: 'rocket' },
        { id: 'ai', label: 'AI & ML', icon: 'chip' },
        { id: 'automation', label: 'Automation', icon: 'cog' },
        { id: 'analytics', label: 'Analytics', icon: 'chart' },
        { id: 'integration', label: 'Integration', icon: 'cloud' },
        { id: 'mobile', label: 'Mobile', icon: 'mobile' },
      ],
    [config?.categories]
  );

  const statuses = useMemo(
    () =>
      config?.statuses || [
        { id: 'all', label: 'All', icon: 'sparkles' },
        { id: 'live', label: 'Live', icon: 'rocket' },
        { id: 'beta', label: 'Beta', icon: 'chip' },
        { id: 'coming-soon', label: 'Coming Soon', icon: 'clock' },
      ],
    [config?.statuses]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'all', label: 'All Products', icon: 'rocket' },
        { id: 'live', label: 'Now Live', icon: 'rocket' },
        { id: 'beta', label: 'Beta', icon: 'chip' },
        { id: 'upcoming', label: 'Coming Soon', icon: 'clock' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '12', label: 'New Products', icon: 'rocket' },
        { value: '8', label: 'AI Features', icon: 'chip' },
        { value: '45+', label: 'Improvements', icon: 'cog' },
        { value: '100k+', label: 'Users Impacted', icon: 'users' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedProductLaunches');
    if (saved) setSavedLaunches(JSON.parse(saved));
    const liked = localStorage.getItem('likedProductLaunches');
    if (liked) setLikedLaunches(JSON.parse(liked));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedProductLaunches', JSON.stringify(savedLaunches));
  }, [savedLaunches]);

  useEffect(() => {
    localStorage.setItem('likedProductLaunches', JSON.stringify(likedLaunches));
  }, [likedLaunches]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
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
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <FaCertificate className={className} />,
      library: <HiOutlineLibrary className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      refreshAlt: <HiOutlineRefreshAlt className={className} />,
      clipboardCheck: <HiOutlineClipboardCheck className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
    };
    return icons[iconName] || <HiOutlineRocketLaunch className={className} />;
  }, []);

  /**
   * Formats date to short or relative display format
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
        gradient: 'from-purple-500 to-purple-600',
      },
      automation: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'cog',
        label: 'Automation',
        gradient: 'from-blue-500 to-blue-600',
      },
      analytics: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'chart',
        label: 'Analytics',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      integration: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'cloud',
        label: 'Integration',
        gradient: 'from-orange-500 to-orange-600',
      },
      mobile: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'mobile',
        label: 'Mobile',
        gradient: 'from-indigo-500 to-indigo-600',
      },
      security: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'shield',
        label: 'Security',
        gradient: 'from-red-500 to-red-600',
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
   * Toggle comparison selection for a launch
   */
  const toggleComparison = useCallback((launch) => {
    if (selectedForComparison.includes(launch.id)) {
      setSelectedForComparison(selectedForComparison.filter((id) => id !== launch.id));
    } else if (selectedForComparison.length < 3) {
      setSelectedForComparison([...selectedForComparison, launch.id]);
    }
  }, [selectedForComparison]);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredLaunches.length || 1));
  }, [featuredLaunches.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredLaunches.length || 1)) % (featuredLaunches.length || 1));
  }, [featuredLaunches.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredLaunches.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredLaunches.length, nextSlide]);

  // ==================== FILTERING LOGIC ====================

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

    // Tab-based filtering
    if (activeTab === 'live') {
      launches = launches.filter((l) => l.status === 'live');
    } else if (activeTab === 'beta') {
      launches = launches.filter((l) => l.status === 'beta');
    } else if (activeTab === 'upcoming') {
      launches = launches.filter((l) => l.status === 'coming-soon');
    } else if (activeTab === 'saved') {
      launches = launches.filter((l) => savedLaunches.includes(l.id));
    }

    // Sort by date descending (newest first)
    launches.sort((a, b) => new Date(b.date) - new Date(a.date));

    return launches;
  }, [allLaunches, searchQuery, selectedCategory, selectedStatus, activeTab, savedLaunches]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedStatus !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Product Launches Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-launches" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-launches)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('rocket', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Launch Hub'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Product'}{' '}
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Launches'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Discover our newest innovations, features, and capabilities designed to transform your supply chain operations.'}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-purple-600 dark:text-purple-400')}
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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, 'w-4 h-4')}
              {tab.label}
              {tab.id === 'saved' && savedLaunches.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {savedLaunches.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED LAUNCHES CAROUSEL ==================== */}
        {activeTab === 'all' && featuredLaunches.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredLaunches.map((launch) => {
                  const categoryConfig = getCategoryConfig(launch.category);
                  const statusConfig = getStatusConfig(launch.status);
                  return (
                    <div key={launch.id} className="w-full shrink-0">
                      <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden">
                        <img
                          src={launch.image}
                          alt={launch.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                            >
                              {categoryConfig.label}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig.color}`}
                            >
                              {statusConfig.badge}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 line-clamp-2">
                            {launch.title}
                          </h2>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">
                            {launch.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('calendar', 'w-4 h-4')}
                              <span>{formatDate(launch.date, 'short')}</span>
                            </div>
                            <Link
                              href={launch.link}
                              className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
                            >
                              Learn More
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
              {featuredLaunches.length > 1 && (
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
              {featuredLaunches.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredLaunches.map((_, idx) => (
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

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon('search', 'w-5 h-5 text-gray-400')}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, category, or feature..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search products"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
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
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
              aria-label="Filter by status"
            >
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                ? 'bg-purple-600 text-white'
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

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Sort products"
                >
                  <option>Latest First</option>
                  <option>Most Popular</option>
                  <option>Alphabetical</option>
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
          {categories.map((category) => (
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
            </button>
          ))}
        </div>

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

        {/* ==================== PRODUCTS GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredLaunches.map((launch) => {
            const categoryConfig = getCategoryConfig(launch.category);
            const statusConfig = getStatusConfig(launch.status);
            const isExpanded = expandedLaunch === launch.id;
            const isSaved = savedLaunches.includes(launch.id);
            const isLiked = likedLaunches.includes(launch.id);
            const isSelectedForCompare = selectedForComparison.includes(launch.id);

            return (
              <div
                key={launch.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${isSelectedForCompare ? 'ring-2 ring-purple-500' : ''
                  }`}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={launch.image}
                    alt={launch.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <button
                      onClick={() => {
                        setCurrentVideo(launch.demoUrl);
                        setShowVideoModal(true);
                      }}
                      className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                      aria-label="Watch demo"
                    >
                      {getIcon('play', 'w-4 h-4 text-white')}
                    </button>
                  )}
                </div>

                <div className="p-5">
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {getIcon('calendar', 'w-4 h-4')}
                    <span>{formatDate(launch.date, 'relative')}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    {getIcon('eye', 'w-4 h-4')}
                    <span>{launch.views || '1.2k'} views</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={launch.link}
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {launch.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {launch.description}
                  </p>

                  {/* Features Preview */}
                  {launch.features && launch.features.length > 0 && (
                    <div className="mb-3">
                      <button
                        onClick={() => toggleExpanded(launch.id)}
                        className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : `View ${launch.features.length} features`}
                      >
                        {isExpanded ? 'Show less' : `View ${launch.features.length} features`}
                        <HiOutlineChevronDown
                          className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <ul className="mt-2 space-y-1 animate-fadeIn">
                          {launch.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLikeLaunch(launch.id)}
                        className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isLiked ? 'Unlike' : 'Like'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isLiked ? 'fill-current' : ''}`)}
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
                        onClick={() => toggleComparison(launch)}
                        className={`text-xs transition-colors ${isSelectedForCompare
                          ? 'text-purple-600 font-semibold'
                          : 'text-gray-400 hover:text-purple-600'
                          }`}
                        aria-label="Compare"
                      >
                        Compare
                      </button>
                    </div>
                    <Link
                      href={launch.link}
                      className="text-purple-600 text-xs font-semibold hover:underline"
                    >
                      Learn More →
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
              {activeTab === 'saved'
                ? "You haven't saved any products yet."
                : 'Try adjusting your search or filter criteria'}
            </p>
            {activeTab === 'saved' && (
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                Browse All Products
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline ml-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== COMPARISON BANNER ==================== */}
        {selectedForComparison.length > 0 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-4 animate-fadeIn">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedForComparison.length} product
              {selectedForComparison.length !== 1 ? 's' : ''} selected for comparison
            </span>
            <button
              onClick={() => setShowComparisonModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
            >
              Compare Now
            </button>
            <button
              onClick={() => setSelectedForComparison([])}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear selection"
            >
              {getIcon('x', 'w-5 h-5')}
            </button>
          </div>
        )}

        {/* ==================== COMPARISON MODAL ==================== */}
        {showComparisonModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowComparisonModal(false)}
            role="dialog"
            aria-label="Product comparison"
            aria-modal="true"
          >
            <div
              className="relative max-w-5xl w-full max-h-[85vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Product Comparison
                </h2>
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  {getIcon('x', 'w-6 h-6')}
                </button>
              </div>
              <div className="overflow-auto p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 font-semibold text-gray-700 dark:text-gray-300">
                        Feature
                      </th>
                      {selectedForComparison.map((id) => {
                        const launch = allLaunches.find((l) => l.id === id);
                        return (
                          <th key={id} className="text-left py-3 px-4">
                            <div className="flex items-center gap-2">
                              <img
                                src={launch?.image}
                                alt={launch?.title}
                                className="w-8 h-8 rounded object-cover"
                                loading="lazy"
                              />
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {launch?.title}
                              </span>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Status Row */}
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-600 dark:text-gray-400">Status</td>
                      {selectedForComparison.map((id) => {
                        const launch = allLaunches.find((l) => l.id === id);
                        const statusConfig = getStatusConfig(launch?.status);
                        return (
                          <td key={id} className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${statusConfig.color}`}>
                              {statusConfig.label}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                    {/* Release Date Row */}
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-600 dark:text-gray-400">Release Date</td>
                      {selectedForComparison.map((id) => {
                        const launch = allLaunches.find((l) => l.id === id);
                        return (
                          <td key={id} className="py-3 px-4">
                            {formatDate(launch?.date, 'short')}
                          </td>
                        );
                      })}
                    </tr>
                    {/* Features Row */}
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-600 dark:text-gray-400">Key Features</td>
                      {selectedForComparison.map((id) => {
                        const launch = allLaunches.find((l) => l.id === id);
                        return (
                          <td key={id} className="py-3 px-4">
                            <ul className="space-y-1">
                              {launch?.features?.slice(0, 4).map((f, idx) => (
                                <li key={idx} className="text-sm flex items-start gap-1">
                                  {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                                  <span className="text-gray-600 dark:text-gray-400">{f}</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
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
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl p-8 text-white text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto mb-4')}
            <h3 className="text-2xl font-bold mb-2">
              {config?.newsletter?.title || 'Be the First to Know'}
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
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
                className="flex-1 px-6 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for product updates"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .max-h-85vh {
          max-height: 85vh;
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

export default ProductLaunchesSection3;