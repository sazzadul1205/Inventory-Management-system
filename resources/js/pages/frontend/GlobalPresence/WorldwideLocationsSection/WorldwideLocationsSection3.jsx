// page/frontend/GlobalPresence/WorldwideLocationsSection/WorldwideLocationsSection3.jsx

/**
 * Worldwide Locations Section - Global Presence Hub
 *
 * Unique design elements:
 * - Tabbed interface (Interactive Map, Regions, All Locations, Saved)
 * - Interactive world map with zoom controls and hover tooltips
 * - Region carousel with auto-play and manual navigation
 * - Location detail modal with full information
 * - Saved locations tab with localStorage persistence
 * - Map zoom in/out controls
 * - Region stats display (offices, employees, countries)
 * - Location marker hover effects with city name tooltip
 * - Interactive map with pulsating location dots
 * - Category filter dropdown
 * - Country filter dropdown
 * - Search across cities, countries, and addresses
 * - Save/bookmark functionality with localStorage persistence
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
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
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
  HiOutlinePhone,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineMap,
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
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const WorldwideLocationsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);


  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allLocations = useMemo(() => config?.locations || [], [config?.locations]);

  const regions = useMemo(
    () =>
      config?.regions || [
        {
          id: 'north-america',
          label: 'North America',
          icon: 'globe',
          stats: { offices: 12, employees: 850, countries: 3 },
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop',
        },
        {
          id: 'europe',
          label: 'Europe',
          icon: 'globe',
          stats: { offices: 18, employees: 1200, countries: 12 },
          image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop',
        },
        {
          id: 'asia-pacific',
          label: 'Asia Pacific',
          icon: 'globe',
          stats: { offices: 15, employees: 950, countries: 8 },
          image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop',
        },
        {
          id: 'latin-america',
          label: 'Latin America',
          icon: 'globe',
          stats: { offices: 8, employees: 450, countries: 6 },
          image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=500&fit=crop',
        },
        {
          id: 'middle-east',
          label: 'Middle East',
          icon: 'globe',
          stats: { offices: 5, employees: 280, countries: 4 },
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop',
        },
        {
          id: 'africa',
          label: 'Africa',
          icon: 'globe',
          stats: { offices: 4, employees: 200, countries: 3 },
          image: 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=800&h=500&fit=crop',
        },
      ],
    [config?.regions]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'map', label: 'Interactive Map', icon: 'map' },
        { id: 'regions', label: 'Regions', icon: 'globe' },
        { id: 'locations', label: 'All Locations', icon: 'location' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '25+', label: 'Countries', icon: 'globe' },
        { value: '50+', label: 'Office Locations', icon: 'building' },
        { value: '1000+', label: 'Global Employees', icon: 'users' },
        { value: '24/7', label: 'Global Support', icon: 'clock' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedWorldwideLocations');
    if (saved) setSavedLocations(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedWorldwideLocations', JSON.stringify(savedLocations));
  }, [savedLocations]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      location: <HiOutlineLocationMarker className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      users: <HiOutlineUsers className={className} />,
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
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
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
      phone: <HiOutlinePhone className={className} />,
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
    };
    return icons[iconName] || <HiOutlineLocationMarker className={className} />;
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
        gradient: 'from-blue-500 to-blue-600',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        gradient: 'from-purple-500 to-purple-600',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        gradient: 'from-orange-500 to-orange-600',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        gradient: 'from-red-500 to-red-600',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
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
   * Get unique countries from locations for filter dropdown
   */
  const getUniqueCountries = useCallback(() => {
    const countries = new Set();
    allLocations.forEach((location) => {
      if (location.country) {
        countries.add(location.country);
      }
    });
    return Array.from(countries).sort();
  }, [allLocations]);

  /**
   * Toggle save/bookmark status for a location
   */
  const handleSaveLocation = useCallback((locationId) => {
    setSavedLocations((prev) =>
      prev.includes(locationId) ? prev.filter((id) => id !== locationId) : [...prev, locationId]
    );
  }, []);

  /**
   * Open location modal
   */
  const openLocationModal = useCallback((location) => {
    setSelectedLocation(location);
    setShowLocationModal(true);
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (regions.length || 1));
  }, [regions.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (regions.length || 1)) % (regions.length || 1));
  }, [regions.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedCountry('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && regions.length > 1 && activeTab === 'regions') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, regions.length, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================

  const filteredLocations = useMemo(() => {
    let locations = [...allLocations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      locations = locations.filter(
        (l) =>
          l.city?.toLowerCase().includes(query) ||
          l.country?.toLowerCase().includes(query) ||
          l.address?.toLowerCase().includes(query) ||
          l.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      locations = locations.filter((l) => l.region === selectedRegion);
    }

    if (selectedCountry !== 'all') {
      locations = locations.filter((l) => l.country === selectedCountry);
    }

    return locations;
  }, [allLocations, searchQuery, selectedRegion, selectedCountry]);

  const uniqueCountries = getUniqueCountries();
  const activeFiltersCount = [
    selectedRegion !== 'all',
    selectedCountry !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Worldwide Locations Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-locations" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-locations)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('globe', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Global Presence'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Global Footprint'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'With offices across the globe, we\'re strategically positioned to serve our customers wherever they are. Find a location near you.'}
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
              {tab.id === 'saved' && savedLocations.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {savedLocations.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== INTERACTIVE MAP TAB ==================== */}
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
                </div>

                {/* Map SVG */}
                <svg
                  className="w-full h-full transition-transform duration-300"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="none"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                >
                  <defs>
                    <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="1200" height="600" fill="url(#map-gradient)" />
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

                  {/* Location markers */}
                  {filteredLocations.map((loc, idx) => (
                    <g
                      key={idx}
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => openLocationModal(loc)}
                      onMouseEnter={() => setHoveredLocation(loc.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLocationModal(loc)}
                    >
                      <circle
                        cx={loc.mapX}
                        cy={loc.mapY}
                        r={hoveredLocation === loc.id ? 12 : 8}
                        fill={hoveredLocation === loc.id ? "#F59E0B" : "#3B82F6"}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <circle cx={loc.mapX} cy={loc.mapY} r="16" fill="#3B82F6" opacity="0.3">
                        <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                      {hoveredLocation === loc.id && (
                        <>
                          <text
                            x={loc.mapX}
                            y={loc.mapY - 15}
                            textAnchor="middle"
                            fill="white"
                            fontSize="10"
                            fontWeight="bold"
                          >
                            {loc.city}
                          </text>
                          <circle cx={loc.mapX} cy={loc.mapY} r="20" fill="none" stroke="#F59E0B" strokeWidth="2" className="animate-ping-slow" />
                        </>
                      )}
                    </g>
                  ))}
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Office Locations</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Regional HQ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== REGIONS TAB - CAROUSEL ==================== */}
        {activeTab === 'regions' && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {regions.map((region) => {
                  const regionConfig = getRegionConfig(region.id);
                  return (
                    <div
                      key={region.id}
                      className="w-full shrink-0 cursor-pointer"
                      onClick={() => {
                        setSelectedRegion(region.id);
                        setActiveTab('locations');
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedRegion(region.id) && setActiveTab('locations')}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden">
                        <img
                          src={region.image}
                          alt={region.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}
                            >
                              {regionConfig.label}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                            {region.label}
                          </h2>
                          <div className="grid grid-cols-3 gap-4 max-w-md mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{region.stats.offices}</div>
                              <div className="text-xs text-white/70">Offices</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{region.stats.employees}</div>
                              <div className="text-xs text-white/70">Employees</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{region.stats.countries}</div>
                              <div className="text-xs text-white/70">Countries</div>
                            </div>
                          </div>
                          <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                            Explore Region
                            <HiArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {regions.length > 1 && (
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
                    {regions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
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

        {/* ==================== ALL LOCATIONS TAB ==================== */}
        {activeTab === 'locations' && (
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
                  placeholder="Search by city, country, or address..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search locations"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  <option value="all">All Regions</option>
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
                    </option>
                  ))}
                </select>
                {uniqueCountries.length > 0 && (
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by country"
                  >
                    <option value="all">All Countries</option>
                    {uniqueCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
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

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Region
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Country
                    </label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Countries</option>
                      {uniqueCountries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sort By
                    </label>
                    <select className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white">
                      <option>Region</option>
                      <option>City Name</option>
                      <option>Employees</option>
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

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredLocations.length}
                </span>{' '}
                office locations
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Locations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredLocations.map((location) => {
                const regionConfig = getRegionConfig(location.region);
                const isSaved = savedLocations.includes(location.id);

                return (
                  <div
                    key={location.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openLocationModal(location)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLocationModal(location)}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.city}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}
                        >
                          {regionConfig.label}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveLocation(location.id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group/btn"
                        aria-label={isSaved ? 'Remove from saved' : 'Save location'}
                      >
                        {getIcon('bookmark', `w-4 h-4 ${isSaved ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`)}
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        {getIcon('location', 'w-4 h-4 text-blue-600')}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {location.city}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">
                        {location.address}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {getIcon('phone', 'w-4 h-4')}
                        <span>{location.phone}</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{location.country}</span>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredLocations.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon('globe', 'w-16 h-16')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No locations found
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

        {/* ==================== SAVED TAB ==================== */}
        {activeTab === 'saved' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {savedLocations.length > 0 ? (
              allLocations
                .filter((l) => savedLocations.includes(l.id))
                .map((location) => {
                  const regionConfig = getRegionConfig(location.region);
                  return (
                    <div
                      key={location.id}
                      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                      onClick={() => openLocationModal(location)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLocationModal(location)}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={location.image}
                          alt={location.city}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}
                          >
                            {regionConfig.label}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                            {getIcon('bookmark', 'w-4 h-4 text-white')}
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {location.city}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                          {location.address}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {location.country}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveLocation(location.id);
                            }}
                            className="text-red-500 dark:text-red-400 text-xs font-semibold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="col-span-full text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                {getIcon('bookmark', 'w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4')}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No saved locations
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Click the bookmark icon on any location to save it here.
                </p>
                <button
                  onClick={() => setActiveTab('locations')}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Browse All Locations
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== LOCATION DETAIL MODAL ==================== */}
        {showLocationModal && selectedLocation && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowLocationModal(false)}
            role="dialog"
            aria-label="Location details"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.city}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  {getIcon('x', 'w-5 h-5')}
                </button>
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getRegionConfig(selectedLocation.region).color}`}
                  >
                    {getRegionConfig(selectedLocation.region).label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {getIcon('location', 'w-5 h-5 text-blue-600')}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedLocation.city}
                  </h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{selectedLocation.country}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedLocation.address}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('phone', 'w-4 h-4')}
                    <span>{selectedLocation.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('mail', 'w-4 h-4')}
                    <span>{selectedLocation.email}</span>
                  </div>
                  {selectedLocation.hours && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      {getIcon('clock', 'w-4 h-4')}
                      <span>{selectedLocation.hours}</span>
                    </div>
                  )}
                  {selectedLocation.employees && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      {getIcon('users', 'w-4 h-4')}
                      <span>{selectedLocation.employees} employees</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={selectedLocation.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </a>
                  <button
                    onClick={() => handleSaveLocation(selectedLocation.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${savedLocations.includes(selectedLocation.id)
                      ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                      }`}
                    aria-label="Toggle save"
                  >
                    {getIcon('bookmark', 'w-5 h-5')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== GLOBAL SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Global Support</h3>
              <p className="text-blue-100 max-w-2xl">
                No matter where you are, our global team is ready to assist you with dedicated
                support in your time zone.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Contact Support
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
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
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
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

export default WorldwideLocationsSection3;