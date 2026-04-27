// page/frontend/GlobalPresence/InternationalClientsSection/InternationalClientsSection3.jsx

/**
 * International Clients Section - Global Client Showcase Hub
 *
 * Unique design elements:
 * - Tabbed interface (All Clients, Global Map, Success Stories, Favorites)
 * - Interactive world map with zoom, pan, and client location markers
 * - Success stories carousel with auto-play and manual navigation
 * - Client detail modal with full information
 * - Favorites tab with localStorage persistence
 * - Favorite functionality with heart icon and persistence
 * - Region filter dropdown
 * - Industry filter dropdown
 * - Search across client names, descriptions, and tags
 * - Client segment badges (Enterprise, Mid-Market, Startup)
 * - Success metrics display with KPI values
 * - Testimonial quotes with author attribution
 * - Map drag and pan interactions
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
  HiOutlineGlobe,
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineLocationMarker,
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
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineFire,
  HiOutlineAcademicCap,
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
  HiOutlineChat,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineRefresh,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineHeadphones, MdOutlineClosedCaption } from 'react-icons/md';

const InternationalClientsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [favoriteClients, setFavoriteClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showClientModal, setShowClientModal] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [mapPanOffset, setMapPanOffset] = useState({ x: 0, y: 0 });

  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allClients = useMemo(() => config?.clients || [], [config?.clients]);
  const successStories = useMemo(() => config?.successStories || [], [config?.successStories]);

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'all', label: 'All Clients', icon: 'users' },
        { id: 'map', label: 'Global Map', icon: 'map' },
        { id: 'stories', label: 'Success Stories', icon: 'quote' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Clients', icon: 'users' },
        { value: '45+', label: 'Countries', icon: 'globe' },
        { value: '6', label: 'Continents', icon: 'globe' },
        { value: '98%', label: 'Client Retention', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteInternationalClients');
    if (saved) setFavoriteClients(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteInternationalClients', JSON.stringify(favoriteClients));
  }, [favoriteClients]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      globe: <HiOutlineGlobe className={className} />,
      users: <HiOutlineUsers className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      star: <HiOutlineStar className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
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
      usergroup: <HiOutlineUserGroup className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
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
      chat: <HiOutlineChat className={className} />,
      headphones: <MdOutlineHeadphones className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      quote: <HiOutlineQuote className={className} />,
      userCircle: <HiOutlineUserCircle className={className} />,
    };
    return icons[iconName] || <HiOutlineGlobe className={className} />;
  }, []);

  /**
   * Returns region configuration with color and label
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        flag: '🇺🇸',
        gradient: 'from-blue-500 to-blue-600',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
        gradient: 'from-purple-500 to-purple-600',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
        gradient: 'from-orange-500 to-orange-600',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
        gradient: 'from-red-500 to-red-600',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
        gradient: 'from-yellow-500 to-amber-500',
      },
    };
    return (
      configs[regionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'globe',
        label: regionId,
      }
    );
  }, []);

  /**
   * Returns industry badge configuration with color and label
   */
  const getIndustryConfig = useCallback((industryId) => {
    const configs = {
      retail: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Retail',
        icon: 'building',
        gradient: 'from-blue-500 to-blue-600',
      },
      manufacturing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Manufacturing',
        icon: 'cog',
        gradient: 'from-purple-500 to-purple-600',
      },
      healthcare: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Healthcare',
        icon: 'shield',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      logistics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Logistics',
        icon: 'globe',
        gradient: 'from-orange-500 to-orange-600',
      },
      automotive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Automotive',
        icon: 'bolt',
        gradient: 'from-red-500 to-red-600',
      },
      'consumer-goods': {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        label: 'Consumer Goods',
        icon: 'gift',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return (
      configs[industryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: industryId,
        icon: 'briefcase',
      }
    );
  }, []);

  /**
   * Returns client segment configuration
   */
  const getSegmentConfig = useCallback((segmentId) => {
    const configs = {
      enterprise: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        label: 'Enterprise',
        badge: 'Enterprise',
        icon: 'building',
        gradient: 'from-yellow-500 to-amber-500',
      },
      'mid-market': {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Mid-Market',
        badge: 'Mid-Market',
        icon: 'chart',
        gradient: 'from-blue-500 to-blue-600',
      },
      startup: {
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Startup',
        badge: 'Startup',
        icon: 'rocket',
        gradient: 'from-emerald-500 to-emerald-600',
      },
    };
    return (
      configs[segmentId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: segmentId,
        badge: segmentId,
      }
    );
  }, []);

  /**
   * Get region color for map markers
   */
  const getRegionColor = useCallback((regionId) => {
    const colors = {
      'north-america': '#3B82F6',
      europe: '#8B5CF6',
      'asia-pacific': '#10B981',
      'latin-america': '#F97316',
      'middle-east': '#EF4444',
      africa: '#10B981',
    };
    return colors[regionId] || '#6B7280';
  }, []);

  /**
   * Get unique regions from clients for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regionSet = new Set();
    allClients.forEach((client) => {
      if (client.region) {
        regionSet.add(client.region);
      }
    });
    return Array.from(regionSet);
  }, [allClients]);

  /**
   * Get unique industries from clients for filter dropdown
   */
  const getUniqueIndustries = useCallback(() => {
    const industrySet = new Set();
    allClients.forEach((client) => {
      if (client.industry) {
        industrySet.add(client.industry);
      }
    });
    return Array.from(industrySet);
  }, [allClients]);

  /**
   * Toggle favorite status for a client
   */
  const handleFavoriteClient = useCallback((clientId) => {
    setFavoriteClients((prev) =>
      prev.includes(clientId) ? prev.filter((id) => id !== clientId) : [...prev, clientId]
    );
  }, []);

  /**
   * Open client modal
   */
  const openClientModal = useCallback((client) => {
    setSelectedClient(client);
    setShowClientModal(true);
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (successStories.length || 1));
  }, [successStories.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (successStories.length || 1)) % (successStories.length || 1));
  }, [successStories.length]);

  /**
   * Map drag handlers
   */
  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX - mapPanOffset.x, y: e.clientY - mapPanOffset.y });
    },
    [mapPanOffset]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setMapPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resetMapView = useCallback(() => {
    setZoomLevel(1);
    setMapPanOffset({ x: 0, y: 0 });
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedIndustry('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && successStories.length > 1 && activeTab === 'stories') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, successStories.length, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================

  const filteredClients = useMemo(() => {
    let clients = [...allClients];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      clients = clients.filter(
        (c) =>
          c.name?.toLowerCase().includes(query) ||
          c.description?.toLowerCase().includes(query) ||
          c.country?.toLowerCase().includes(query) ||
          c.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      clients = clients.filter((c) => c.region === selectedRegion);
    }

    if (selectedIndustry !== 'all') {
      clients = clients.filter((c) => c.industry === selectedIndustry);
    }

    if (activeTab === 'favorites') {
      clients = clients.filter((c) => favoriteClients.includes(c.id));
    }

    return clients;
  }, [allClients, searchQuery, selectedRegion, selectedIndustry, activeTab, favoriteClients]);

  const uniqueRegions = getUniqueRegions();
  const uniqueIndustries = getUniqueIndustries();
  const activeFiltersCount = [
    selectedRegion !== 'all',
    selectedIndustry !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="International Clients Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-clients" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-clients)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('users', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Global Clients'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Trusted by'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || '500+ Companies'}
            </span>{' '}
            {config?.title?.suffix || 'Worldwide'}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations.'}
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
              {tab.id === 'favorites' && favoriteClients.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {favoriteClients.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== GLOBAL MAP TAB ==================== */}
        {activeTab === 'map' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom in"
                  >
                    {getIcon('zoom', 'w-4 h-4')}
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom out"
                  >
                    {getIcon('zoom', 'w-4 h-4')}
                  </button>
                  <button
                    onClick={resetMapView}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Reset view"
                  >
                    {getIcon('refresh', 'w-4 h-4')}
                  </button>
                </div>

                <svg
                  className="w-full h-full transition-transform duration-300 cursor-grab active:cursor-grabbing"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="none"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${mapPanOffset.x / zoomLevel}px, ${mapPanOffset.y / zoomLevel}px)`,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <defs>
                    <linearGradient id="map-gradient-clients" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect width="1200" height="600" fill="url(#map-gradient-clients)" />
                  {/* Simplified continent outlines */}
                  <path
                    d="M200,180 L280,140 L370,150 L400,190 L370,240 L280,260 L200,240 L160,200 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M520,200 L620,160 L720,170 L760,210 L720,260 L620,270 L520,240 L490,220 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M920,220 L1020,190 L1100,210 L1120,250 L1070,290 L970,280 L900,250 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M300,380 L420,350 L500,360 L530,400 L490,440 L380,460 L280,430 L250,400 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M720,420 L800,390 L870,410 L900,450 L840,490 L750,480 L690,450 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />

                  {/* Client location markers */}
                  {filteredClients.map((client, idx) => {
                    const isHovered = hoveredMarker === client.id;
                    const isFavorited = favoriteClients.includes(client.id);
                    const markerX = client.mapX || 400 + (idx % 5) * 80;
                    const markerY = client.mapY || 250 + Math.floor(idx / 5) * 50;
                    return (
                      <g
                        key={idx}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredMarker(client.id)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        onClick={() => openClientModal(client)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openClientModal(client)}
                      >
                        <circle
                          cx={markerX}
                          cy={markerY}
                          r={isHovered ? 12 : 8}
                          fill={getRegionColor(client.region)}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <circle cx={markerX} cy={markerY} r="16" fill={getRegionColor(client.region)} opacity="0.2">
                          <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        {isHovered && (
                          <text
                            x={markerX}
                            y={markerY - 15}
                            textAnchor="middle"
                            fill="#1F2937"
                            fontSize="10"
                            fontWeight="bold"
                            className="dark:fill-white"
                          >
                            {client.name}
                          </text>
                        )}
                        {isFavorited && (
                          <circle cx={markerX + 10} cy={markerY - 10} r="5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Client Locations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Favorites</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUCCESS STORIES TAB - CAROUSEL ==================== */}
        {activeTab === 'stories' && successStories.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {successStories.map((story, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3">
                          {story.logo && (
                            <img
                              src={story.logo}
                              alt={story.company}
                              className="h-20 w-auto object-contain mx-auto"
                              loading="lazy"
                            />
                          )}
                          <div className="mt-4 text-center">
                            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{story.industry}</span>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          {getIcon('quote', 'w-8 h-8 text-blue-500 mb-4')}
                          <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                            "{story.quote}"
                          </p>
                          <div className="flex items-center gap-3">
                            {story.authorAvatar ? (
                              <img
                                src={story.authorAvatar}
                                alt={story.author}
                                className="w-12 h-12 rounded-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {getIcon('userCircle', 'w-6 h-6 text-blue-600')}
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {story.author}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{story.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-4">
                          {story.metrics?.map((metric, mIdx) => (
                            <div key={mIdx} className="text-center">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {successStories.length > 1 && (
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {successStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== ALL CLIENTS / FAVORITES TAB ==================== */}
        {(activeTab === 'all' || activeTab === 'favorites') && (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clients by name, industry, or country..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search clients"
                />
              </div>

              <div className="flex gap-2">
                {uniqueRegions.length > 0 && (
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by region"
                  >
                    <option value="all">All Regions</option>
                    {uniqueRegions.map((region) => (
                      <option key={region} value={region}>
                        {getRegionConfig(region).label}
                      </option>
                    ))}
                  </select>
                )}
                {uniqueIndustries.length > 0 && (
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by industry"
                  >
                    <option value="all">All Industries</option>
                    {uniqueIndustries.map((industry) => (
                      <option key={industry} value={industry}>
                        {getIndustryConfig(industry).label}
                      </option>
                    ))}
                  </select>
                )}
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
                  {filteredClients.length}
                </span>{' '}
                clients
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Clients Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredClients.map((client) => {
                const regionConfig = getRegionConfig(client.region);
                const industryConfig = getIndustryConfig(client.industry);
                const segmentConfig = getSegmentConfig(client.segment);
                const isFavorite = favoriteClients.includes(client.id);

                return (
                  <div
                    key={client.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openClientModal(client)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openClientModal(client)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {client.logo ? (
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="h-10 w-auto object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <div
                              className={`w-10 h-10 rounded-xl bg-linear-to-r ${regionConfig.gradient} flex items-center justify-center`}
                            >
                              <span className="text-lg">{regionConfig.flag}</span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{client.name}</h3>
                            <div className="flex items-center gap-1 text-xs">
                              <span className={`px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                {regionConfig.label}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavoriteClient(client.id);
                          }}
                          className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                        </button>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {client.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${industryConfig.color}`}>
                          {industryConfig.label}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${segmentConfig.color}`}>
                          {segmentConfig.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {getIcon('location', 'w-4 h-4')}
                        <span>
                          {client.city}, {client.country}
                        </span>
                      </div>

                      {client.metrics && client.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          {client.metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-1">
                          {client.testimonial && (
                            <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                              {getIcon('quote', 'w-3 h-3')}
                              <span>Testimonial</span>
                            </div>
                          )}
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {(activeTab === 'all' || activeTab === 'favorites') && filteredClients.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('users', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No clients found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites'
                ? "You haven't added any favorite clients yet."
                : 'Try adjusting your search or filter criteria'}
            </p>
            {activeTab === 'favorites' && (
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Browse All Clients
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

        {/* ==================== CLIENT DETAIL MODAL ==================== */}
        {showClientModal && selectedClient && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowClientModal(false)}
            role="dialog"
            aria-label="Client details"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`p-6 bg-linear-to-r ${getRegionConfig(selectedClient.region).gradient} text-white`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {selectedClient.logo ? (
                      <img
                        src={selectedClient.logo}
                        alt={selectedClient.name}
                        className="h-12 w-auto object-contain brightness-0 invert"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                        {getRegionConfig(selectedClient.region).flag}
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                      <p className="text-sm text-white/80">
                        {selectedClient.city}, {selectedClient.country}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowClientModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    {getIcon('x', 'w-6 h-6')}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Industry</p>
                    <p className="text-gray-900 dark:text-white">
                      {getIndustryConfig(selectedClient.industry).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Region</p>
                    <p className="text-gray-900 dark:text-white">
                      {getRegionConfig(selectedClient.region).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Segment</p>
                    <p className="text-gray-900 dark:text-white">
                      {getSegmentConfig(selectedClient.segment).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">
                      {selectedClient.city}, {selectedClient.country}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedClient.description}</p>
                {selectedClient.metrics && selectedClient.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {selectedClient.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                      >
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {selectedClient.testimonial && (
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    {getIcon('quote', 'w-5 h-5 text-blue-500 mb-2')}
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "{selectedClient.testimonial.text}"
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      — {selectedClient.testimonial.author}, {selectedClient.testimonial.title}
                    </p>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={selectedClient.link}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Case Study
                  </Link>
                  <button
                    onClick={() => handleFavoriteClient(selectedClient.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${favoriteClients.includes(selectedClient.id)
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-500'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                      }`}
                    aria-label="Toggle favorite"
                  >
                    {getIcon('heart', 'w-5 h-5')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== BECOME A CLIENT CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Global Client Community</h3>
              <p className="text-blue-100 max-w-2xl">
                See how SupplyChainPro can transform your supply chain operations. Join hundreds of
                leading companies worldwide.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Schedule a Demo
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .cursor-grab { cursor: grab; }
        .cursor-grabbing { cursor: grabbing; }
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

export default InternationalClientsSection3;