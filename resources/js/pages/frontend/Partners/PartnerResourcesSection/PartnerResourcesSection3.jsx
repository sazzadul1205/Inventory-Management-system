// page/frontend/Partners/PartnerResourcesSection/PartnerResourcesSection3.jsx

/**
 * Partner Resources Section - Resource Hub with Modal
 *
 * Unique design elements:
 * - Tabbed interface (All Resources, Featured, Popular, Recent, Saved, Liked)
 * - Featured resources carousel with auto-play and manual navigation
 * - Resource detail modal with full information
 * - Favorites/Saved tab with localStorage persistence
 * - Liked tab with heart icon persistence
 * - Like functionality with heart icon and counter
 * - Save/bookmark functionality with localStorage persistence
 * - Category filter dropdown
 * - Resource type filter dropdown
 * - Search across titles, descriptions, and tags
 * - Resource preview expansion with content snippet
 * - Downloadable resource indicator badge
 * - Video thumbnail with play overlay
 * - Circuit board background pattern
 * - Stats cards for key metrics
 * - Responsive grid layout
 * - Animated pulse badge in header
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineAcademicCap,
  HiOutlineTemplate,
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
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const PartnerResourcesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [savedResources, setSavedResources] = useState([]);
  const [likedResources, setLikedResources] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [expandedResource, setExpandedResource] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showResourceModal, setShowResourceModal] = useState(false);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allResources = useMemo(() => config?.resources || [], [config?.resources]);
  const featuredResources = useMemo(() => config?.featuredResources || [], [config?.featuredResources]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Resources', icon: 'document' },
        { id: 'training', label: 'Training & Certification', icon: 'academic' },
        { id: 'marketing', label: 'Marketing & Sales', icon: 'chart' },
        { id: 'technical', label: 'Technical Resources', icon: 'code' },
        { id: 'sales', label: 'Sales Enablement', icon: 'briefcase' },
        { id: 'collateral', label: 'Sales Collateral', icon: 'document' },
        { id: 'events', label: 'Events & Webinars', icon: 'calendar' },
      ],
    [config?.categories]
  );

  const resourceTypes = useMemo(
    () =>
      config?.resourceTypes || [
        { id: 'all', label: 'All Types', icon: 'document' },
        { id: 'guide', label: 'Guides', icon: 'document' },
        { id: 'video', label: 'Videos', icon: 'play' },
        { id: 'template', label: 'Templates', icon: 'template' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'case-study', label: 'Case Studies', icon: 'newspaper' },
        { id: 'whitepaper', label: 'Whitepapers', icon: 'document' },
      ],
    [config?.resourceTypes]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'all', label: 'All Resources', icon: 'library' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'popular', label: 'Popular', icon: 'fire' },
        { id: 'recent', label: 'Recent', icon: 'clock' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' },
        { id: 'liked', label: 'Liked', icon: 'heart' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '100+', label: 'Training Modules', icon: 'academic' },
        { value: '50+', label: 'Sales Tools', icon: 'briefcase' },
        { value: '25+', label: 'Case Studies', icon: 'newspaper' },
        { value: '1000+', label: 'Active Partners', icon: 'users' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedPartnerResources');
    if (saved) setSavedResources(JSON.parse(saved));
    const liked = localStorage.getItem('likedPartnerResources');
    if (liked) setLikedResources(JSON.parse(liked));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedPartnerResources', JSON.stringify(savedResources));
  }, [savedResources]);

  useEffect(() => {
    localStorage.setItem('likedPartnerResources', JSON.stringify(likedResources));
  }, [likedResources]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      template: <HiOutlineTemplate className={className} />,
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
      quote: <HiOutlineQuote className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  }, []);

  /**
   * Returns category badge configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      training: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'academic',
        label: 'Training & Certification',
        gradient: 'from-blue-500 to-blue-600',
      },
      marketing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'chart',
        label: 'Marketing & Sales',
        gradient: 'from-purple-500 to-purple-600',
      },
      technical: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'code',
        label: 'Technical Resources',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      sales: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'briefcase',
        label: 'Sales Enablement',
        gradient: 'from-orange-500 to-orange-600',
      },
      collateral: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'document',
        label: 'Sales Collateral',
        gradient: 'from-red-500 to-red-600',
      },
      events: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'calendar',
        label: 'Events & Webinars',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'document',
        label: 'Resource',
      }
    );
  }, []);

  /**
   * Returns resource type badge configuration
   */
  const getTypeConfig = useCallback((typeId) => {
    const configs = {
      guide: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'document',
        label: 'Guide',
        badge: 'Guide',
        gradient: 'from-blue-500 to-blue-600',
      },
      video: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'play',
        label: 'Video',
        badge: 'Video',
        gradient: 'from-purple-500 to-purple-600',
      },
      template: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'template',
        label: 'Template',
        badge: 'Template',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      webinar: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'video',
        label: 'Webinar',
        badge: 'Webinar',
        gradient: 'from-orange-500 to-orange-600',
      },
      'case-study': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'newspaper',
        label: 'Case Study',
        badge: 'Case Study',
        gradient: 'from-red-500 to-red-600',
      },
      whitepaper: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'document',
        label: 'Whitepaper',
        badge: 'Whitepaper',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return (
      configs[typeId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'document',
        label: typeId,
        badge: typeId,
      }
    );
  }, []);

  /**
   * Toggle save/bookmark status for a resource
   */
  const handleSaveResource = useCallback((resourceId) => {
    setSavedResources((prev) =>
      prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]
    );
  }, []);

  /**
   * Toggle like status for a resource
   */
  const handleLikeResource = useCallback((resourceId) => {
    setLikedResources((prev) =>
      prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]
    );
  }, []);

  /**
   * Toggle expanded state for a resource
   */
  const toggleExpanded = useCallback((resourceId) => {
    setExpandedResource((prev) => (prev === resourceId ? null : resourceId));
  }, []);

  /**
   * Open resource modal
   */
  const openResourceModal = useCallback((resource) => {
    setSelectedResource(resource);
    setShowResourceModal(true);
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredResources.length || 1));
  }, [featuredResources.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredResources.length || 1)) % (featuredResources.length || 1));
  }, [featuredResources.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredResources.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredResources.length, nextSlide]);

  // ==================== FILTERING LOGIC ====================

  const filteredResources = useMemo(() => {
    let resources = [...allResources];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      resources = resources.filter(
        (r) =>
          r.title?.toLowerCase().includes(query) ||
          r.description?.toLowerCase().includes(query) ||
          r.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      resources = resources.filter((r) => r.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      resources = resources.filter((r) => r.type === selectedType);
    }

    // Tab-based filtering
    if (activeTab === 'featured') {
      resources = resources.filter((r) => r.isFeatured);
    } else if (activeTab === 'saved') {
      resources = resources.filter((r) => savedResources.includes(r.id));
    } else if (activeTab === 'liked') {
      resources = resources.filter((r) => likedResources.includes(r.id));
    } else if (activeTab === 'popular') {
      resources = [...resources].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);
    } else if (activeTab === 'recent') {
      resources = [...resources].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
    }

    return resources;
  }, [allResources, searchQuery, selectedCategory, selectedType, activeTab, savedResources, likedResources]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedType !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Resources Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-resources" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-resources)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('library', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Partner Resources'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Tools &'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Resources'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed.'}
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
          {tabs.map((tab) => (
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
              {(tab.id === 'saved' && savedResources.length > 0) && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {savedResources.length}
                </span>
              )}
              {(tab.id === 'liked' && likedResources.length > 0) && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {likedResources.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED RESOURCES CAROUSEL ==================== */}
        {activeTab === 'all' && featuredResources.length > 0 && (
          <div className="relative mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Featured Resources
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredResources.map((resource) => {
                  const categoryConfig = getCategoryConfig(resource.category);
                  const typeConfig = getTypeConfig(resource.type);
                  return (
                    <div
                      key={resource.id}
                      className="w-full shrink-0 cursor-pointer"
                      onClick={() => openResourceModal(resource)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openResourceModal(resource)}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.title}
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
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${typeConfig.color}`}
                            >
                              {typeConfig.badge}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 line-clamp-2">
                            {resource.title}
                          </h2>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">
                            {resource.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('clock', 'w-4 h-4')}
                              <span>{resource.readTime || '10 min read'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('eye', 'w-4 h-4')}
                              <span>{resource.views || '1.2k'} views</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLikeResource(resource.id);
                              }}
                              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${likedResources.includes(resource.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
                                }`}
                              aria-label={likedResources.includes(resource.id) ? 'Unlike' : 'Like'}
                            >
                              {getIcon('heart', 'w-4 h-4')}
                              {likedResources.includes(resource.id) ? 'Liked' : 'Like'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredResources.length > 1 && (
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
              {featuredResources.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredResources.map((_, idx) => (
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
              placeholder="Search resources by title, category, or topic..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search resources"
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by resource type"
            >
              {resourceTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                  Resource Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                >
                  {resourceTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort resources"
                >
                  <option>Most Popular</option>
                  <option>Latest First</option>
                  <option>Alphabetical</option>
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
            </button>
          ))}
        </div>

        {/* ==================== RESOURCE TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {resourceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedType === type.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${type.label} resources`}
            >
              {getIcon(type.icon, 'w-4 h-4')}
              {type.label}
            </button>
          ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredResources.length}
            </span>{' '}
            resources
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== RESOURCES GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => {
            const categoryConfig = getCategoryConfig(resource.category);
            const typeConfig = getTypeConfig(resource.type);
            const isExpanded = expandedResource === resource.id;
            const isSaved = savedResources.includes(resource.id);
            const isLiked = likedResources.includes(resource.id);

            return (
              <div
                key={resource.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => openResourceModal(resource)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openResourceModal(resource)}
              >
                {/* Resource Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeConfig.color}`}>
                      {typeConfig.badge}
                    </span>
                  </div>
                  {resource.downloadable && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Download
                      </span>
                    </div>
                  )}
                  {resource.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        {getIcon('play', 'w-6 h-6 text-blue-600 ml-1')}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {getIcon('clock', 'w-4 h-4')}
                    <span>{resource.readTime || '5 min read'}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    {getIcon('eye', 'w-4 h-4')}
                    <span>{resource.views || '1.2k'} views</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Expandable Content */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(resource.id);
                    }}
                    className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium mb-3 hover:gap-2 transition-all duration-300"
                    aria-label={isExpanded ? 'Show less' : 'Preview content'}
                  >
                    {isExpanded ? 'Show less' : 'Preview content'}
                    <HiOutlineChevronDown
                      className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && resource.content && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3 animate-fadeIn">
                      {resource.content}
                    </p>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLikeResource(resource.id);
                        }}
                        className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isLiked ? 'Unlike' : 'Like'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isLiked ? 'fill-current' : ''}`)}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveResource(resource.id);
                        }}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save resource'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      download={resource.downloadable}
                      className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline flex items-center gap-1"
                      aria-label={resource.downloadable ? 'Download' : 'Access'}
                    >
                      {resource.downloadable ? 'Download' : 'Access'}
                      {resource.downloadable ? getIcon('download', 'w-3 h-3') : <HiArrowRight className="w-3 h-3" />}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('document', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'saved'
                ? "You haven't saved any resources yet."
                : activeTab === 'liked'
                  ? "You haven't liked any resources yet."
                  : 'Try adjusting your search or filter criteria'}
            </p>
            {(activeTab === 'saved' || activeTab === 'liked') && (
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Browse All Resources
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== PARTNER PORTAL CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Access Partner Portal</h3>
              <p className="text-blue-100 max-w-2xl">
                Get exclusive access to all partner resources, training materials, and sales tools.
                Login to your partner account to unlock premium content.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/partner-portal"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Login to Portal
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/become-partner"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Become a Partner
                {getIcon('external', 'w-4 h-4')}
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== RESOURCE DETAIL MODAL ==================== */}
        {showResourceModal && selectedResource && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowResourceModal(false)}
            role="dialog"
            aria-label="Resource details"
            aria-modal="true"
          >
            <div
              className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedResource.image}
                  alt={selectedResource.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setShowResourceModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  {getIcon('x', 'w-5 h-5')}
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(selectedResource.category).color}`}
                  >
                    {getCategoryConfig(selectedResource.category).label}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeConfig(selectedResource.type).color}`}
                  >
                    {getTypeConfig(selectedResource.type).badge}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedResource.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedResource.description}</p>
                {selectedResource.content && (
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{selectedResource.content}</p>
                  </div>
                )}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => handleLikeResource(selectedResource.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${likedResources.includes(selectedResource.id)
                      ? 'text-red-500'
                      : 'text-gray-500 hover:text-red-500'
                      }`}
                    aria-label="Toggle like"
                  >
                    {getIcon('heart', 'w-5 h-5')}
                    {likedResources.includes(selectedResource.id) ? 'Liked' : 'Like'}
                  </button>
                  <button
                    onClick={() => handleSaveResource(selectedResource.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${savedResources.includes(selectedResource.id)
                      ? 'text-amber-500'
                      : 'text-gray-500 hover:text-amber-500'
                      }`}
                    aria-label="Toggle save"
                  >
                    {getIcon('bookmark', 'w-5 h-5')}
                    {savedResources.includes(selectedResource.id) ? 'Saved' : 'Save'}
                  </button>
                  <a
                    href={selectedResource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={selectedResource.downloadable}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                    aria-label={selectedResource.downloadable ? 'Download resource' : 'Access resource'}
                  >
                    {selectedResource.downloadable ? 'Download Resource' : 'Access Resource'}
                    {selectedResource.downloadable ? getIcon('download', 'w-4 h-4') : getIcon('external', 'w-4 h-4')}
                  </a>
                </div>
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnerResourcesSection3;