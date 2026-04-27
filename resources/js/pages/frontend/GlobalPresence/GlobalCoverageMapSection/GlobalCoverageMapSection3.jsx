// page/frontend/GlobalPresence/GlobalCoverageMapSection/GlobalCoverageMapSection3.jsx

/**
 * Global Coverage Map Section - Interactive Coverage Hub
 *
 * Unique design elements:
 * - Tabbed interface (Interactive Map, Global Statistics, Growth Markets, Saved Countries)
 * - Interactive world map with zoom, pan, and drag controls
 * - Region stats carousel with auto-play and manual navigation
 * - Country detail modal with full information
 * - Favorites/Saved tab with localStorage persistence
 * - Favorite functionality with heart icon and persistence
 * - Growth markets highlighting with trend indicators
 * - Market share display for countries
 * - Region filter dropdown
 * - Search across country names and codes
 * - Pan and drag map interaction
 * - Zoom in/out controls with reset button
 * - Circuit board background pattern
 * - Global stats summary cards
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
  HiOutlineGlobe,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
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
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
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
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const GlobalCoverageMapSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favoriteCountries, setFavoriteCountries] = useState([]);

  // ==================== REFS ====================
  const mapRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const countryCoverage = useMemo(
    () =>
      config?.countryCoverage || [
        { name: 'United States', code: 'US', region: 'north-america', offices: 8, employees: 650, customers: 1200, growth: '+15%', marketShare: '32%', mapX: 320, mapY: 260 },
        { name: 'Canada', code: 'CA', region: 'north-america', offices: 3, employees: 180, customers: 450, growth: '+12%', marketShare: '8%', mapX: 290, mapY: 240 },
        { name: 'Mexico', code: 'MX', region: 'north-america', offices: 2, employees: 120, customers: 280, growth: '+20%', marketShare: '5%', mapX: 340, mapY: 310 },
        { name: 'United Kingdom', code: 'GB', region: 'europe', offices: 4, employees: 250, customers: 580, growth: '+10%', marketShare: '15%', mapX: 520, mapY: 290 },
        { name: 'Germany', code: 'DE', region: 'europe', offices: 3, employees: 200, customers: 520, growth: '+8%', marketShare: '14%', mapX: 540, mapY: 285 },
        { name: 'France', code: 'FR', region: 'europe', offices: 2, employees: 140, customers: 380, growth: '+14%', marketShare: '10%', mapX: 530, mapY: 300 },
        { name: 'China', code: 'CN', region: 'asia-pacific', offices: 4, employees: 320, customers: 680, growth: '+25%', marketShare: '18%', mapX: 800, mapY: 290 },
        { name: 'Japan', code: 'JP', region: 'asia-pacific', offices: 3, employees: 210, customers: 520, growth: '+9%', marketShare: '14%', mapX: 880, mapY: 290 },
        { name: 'Singapore', code: 'SG', region: 'asia-pacific', offices: 2, employees: 150, customers: 380, growth: '+18%', marketShare: '10%', mapX: 850, mapY: 340 },
        { name: 'India', code: 'IN', region: 'asia-pacific', offices: 3, employees: 280, customers: 620, growth: '+32%', marketShare: '16%', mapX: 760, mapY: 340 },
        { name: 'Brazil', code: 'BR', region: 'latin-america', offices: 3, employees: 220, customers: 480, growth: '+21%', marketShare: '35%', mapX: 370, mapY: 430 },
        { name: 'UAE', code: 'AE', region: 'middle-east', offices: 2, employees: 120, customers: 280, growth: '+28%', marketShare: '25%', mapX: 650, mapY: 300 },
        { name: 'South Africa', code: 'ZA', region: 'africa', offices: 2, employees: 110, customers: 250, growth: '+19%', marketShare: '30%', mapX: 580, mapY: 450 },
      ],
    [config?.countryCoverage]
  );

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'Global', icon: 'globe', count: countryCoverage.length, color: '#3B82F6' },
        { id: 'north-america', label: 'North America', icon: 'globe', count: 3, color: '#3B82F6' },
        { id: 'europe', label: 'Europe', icon: 'globe', count: 4, color: '#8B5CF6' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe', count: 5, color: '#10B981' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe', count: 1, color: '#F97316' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe', count: 1, color: '#EF4444' },
        { id: 'africa', label: 'Africa', icon: 'globe', count: 1, color: '#10B981' },
      ],
    [config?.regions, countryCoverage.length]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'map', label: 'Interactive Map', icon: 'map' },
        { id: 'stats', label: 'Global Statistics', icon: 'chartBar' },
        { id: 'growth', label: 'Growth Markets', icon: 'trendingUp' },
        { id: 'favorites', label: 'Saved Countries', icon: 'heart' },
      ],
    [config?.tabs]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteCountries');
    if (saved) setFavoriteCountries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCountries', JSON.stringify(favoriteCountries));
  }, [favoriteCountries]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      globe: <HiOutlineGlobe className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      users: <HiOutlineUsers className={className} />,
      clock: <HiOutlineClock className={className} />,
      phone: <HiOutlinePhone className={className} />,
      mail: <HiOutlineMail className={className} />,
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
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
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
        bgGradient: 'from-blue-500/20 to-blue-600/20',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
        gradient: 'from-purple-500 to-purple-600',
        bgGradient: 'from-purple-500/20 to-purple-600/20',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
        gradient: 'from-emerald-500 to-emerald-600',
        bgGradient: 'from-emerald-500/20 to-emerald-600/20',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
        gradient: 'from-orange-500 to-orange-600',
        bgGradient: 'from-orange-500/20 to-orange-600/20',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
        gradient: 'from-red-500 to-red-600',
        bgGradient: 'from-red-500/20 to-red-600/20',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
        gradient: 'from-yellow-500 to-amber-500',
        bgGradient: 'from-yellow-500/20 to-amber-500/20',
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
   * Calculate global statistics
   */
  const globalStats = useMemo(() => {
    const totalCountries = countryCoverage.length;
    const totalOffices = countryCoverage.reduce((sum, c) => sum + c.offices, 0);
    const totalEmployees = countryCoverage.reduce((sum, c) => sum + c.employees, 0);
    const totalCustomers = countryCoverage.reduce((sum, c) => sum + c.customers, 0);
    const averageGrowth = (
      countryCoverage.reduce((sum, c) => sum + parseInt(c.growth), 0) / countryCoverage.length
    ).toFixed(1);
    return { totalCountries, totalOffices, totalEmployees, totalCustomers, averageGrowth };
  }, [countryCoverage]);

  /**
   * Region statistics for carousel
   */
  const regionStats = useMemo(() => {
    return regions
      .filter((r) => r.id !== 'all')
      .map((region) => ({
        ...region,
        countries: countryCoverage.filter((c) => c.region === region.id).length,
        offices: countryCoverage
          .filter((c) => c.region === region.id)
          .reduce((sum, c) => sum + c.offices, 0),
        employees: countryCoverage
          .filter((c) => c.region === region.id)
          .reduce((sum, c) => sum + c.employees, 0),
      }));
  }, [regions, countryCoverage]);

  /**
   * Filter countries based on search and region
   */
  const filteredCountries = useMemo(() => {
    let countries = [...countryCoverage];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      countries = countries.filter(
        (c) => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query)
      );
    }

    if (selectedRegion !== 'all') {
      countries = countries.filter((c) => c.region === selectedRegion);
    }

    if (activeTab === 'favorites') {
      countries = countries.filter((c) => favoriteCountries.includes(c.code));
    } else if (activeTab === 'growth') {
      countries = [...countries]
        .sort((a, b) => parseInt(b.growth) - parseInt(a.growth))
        .slice(0, 6);
    }

    return countries;
  }, [countryCoverage, searchQuery, selectedRegion, activeTab, favoriteCountries]);

  /**
   * Toggle favorite country
   */
  const handleFavoriteCountry = useCallback((countryCode) => {
    setFavoriteCountries((prev) =>
      prev.includes(countryCode) ? prev.filter((c) => c !== countryCode) : [...prev, countryCode]
    );
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (regionStats.length || 1));
  }, [regionStats.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (regionStats.length || 1)) % (regionStats.length || 1));
  }, [regionStats.length]);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && regionStats.length > 1 && activeTab === 'stats') {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, regionStats.length, activeTab, nextSlide]);

  // ==================== MAP DRAG HANDLERS ====================
  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    },
    [panOffset]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setPanOffset({
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
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const activeFiltersCount = [selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Global Coverage Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-global" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-global)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('globe', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Global Coverage'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Global Footprint'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them.'}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {globalStats.totalCountries}+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Countries</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {globalStats.totalOffices}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {globalStats.totalEmployees.toLocaleString()}+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {globalStats.averageGrowth}%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Avg. Growth</div>
            </div>
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
              {tab.id === 'favorites' && favoriteCountries.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {favoriteCountries.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== INTERACTIVE MAP TAB ==================== */}
        {activeTab === 'map' && (
          <div className="mb-12">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by country name or code..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search countries"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
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

            {/* Interactive Map */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
              <div
                className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                ref={mapRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2.5))}
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
                  className="w-full h-full transition-transform duration-300"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="none"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  }}
                >
                  <defs>
                    <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect width="1200" height="600" fill="url(#map-gradient)" />
                  {/* Continent outlines */}
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

                  {/* Country markers */}
                  {filteredCountries.map((country, idx) => {
                    const isHovered = hoveredCountry === country.code;
                    const isFavorited = favoriteCountries.includes(country.code);
                    return (
                      <g
                        key={idx}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredCountry(country.code)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        onClick={() => setSelectedCountry(country)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCountry(country)}
                      >
                        <circle
                          cx={country.mapX}
                          cy={country.mapY}
                          r={isHovered ? 14 : 10}
                          fill={getRegionColor(country.region)}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={country.mapX}
                          cy={country.mapY}
                          r="20"
                          fill={getRegionColor(country.region)}
                          opacity="0.2"
                        >
                          <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        {isHovered && (
                          <text
                            x={country.mapX}
                            y={country.mapY - 18}
                            textAnchor="middle"
                            fill="#1F2937"
                            fontSize="10"
                            fontWeight="bold"
                            className="dark:fill-white"
                          >
                            {country.name}
                          </text>
                        )}
                        {isFavorited && (
                          <circle cx={country.mapX + 12} cy={country.mapY - 12} r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
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
                      <span className="text-xs text-gray-600 dark:text-gray-400">North America</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Europe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Asia Pacific</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Latin America</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredCountries.length}
                </span>{' '}
                countries
              </p>
            </div>
          </div>
        )}

        {/* ==================== GLOBAL STATISTICS TAB - CAROUSEL ==================== */}
        {activeTab === 'stats' && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {regionStats.map((region) => {
                  const regionConfig = getRegionConfig(region.id);
                  return (
                    <div key={region.id} className="w-full shrink-0">
                      <div
                        className={`bg-linear-to-br ${regionConfig.bgGradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-700`}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className={`w-12 h-12 rounded-full ${regionConfig.color} flex items-center justify-center text-2xl`}
                          >
                            {regionConfig.flag}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {region.label}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {region.countries} countries
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {region.offices}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
                          </div>
                          <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                              {region.employees.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                          </div>
                          <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              {region.countries}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Countries</div>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${(region.offices / globalStats.totalOffices) * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                          {Math.round((region.offices / globalStats.totalOffices) * 100)}% of global offices
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {regionStats.length > 1 && (
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
                    {regionStats.map((_, idx) => (
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

        {/* ==================== GROWTH MARKETS TAB ==================== */}
        {activeTab === 'growth' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCountries.map((country) => {
              const regionConfig = getRegionConfig(country.region);
              const isFavorited = favoriteCountries.includes(country.code);
              return (
                <div
                  key={country.code}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setSelectedCountry(country)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCountry(country)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center text-lg font-bold`}
                        >
                          {country.code}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{country.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                            {regionConfig.label}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteCountry(country.code);
                        }}
                        className={`transition-colors ${isFavorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-5 h-5 ${isFavorited ? 'fill-current' : ''}`)}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      {getIcon('trending', 'w-5 h-5 text-emerald-500')}
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {country.growth}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">YoY Growth</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {country.offices}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {country.employees}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                          {country.customers}+
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Customers</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Market Share: {country.marketShare}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== FAVORITES TAB ==================== */}
        {activeTab === 'favorites' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const regionConfig = getRegionConfig(country.region);
                return (
                  <div
                    key={country.code}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => setSelectedCountry(country)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCountry(country)}
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center text-lg font-bold`}
                          >
                            {country.code}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{country.name}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                              {regionConfig.label}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavoriteCountry(country.code);
                          }}
                          className="text-red-500"
                          aria-label="Remove from favorites"
                        >
                          {getIcon('heart', 'w-5 h-5 fill-current')}
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {country.offices}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            {country.employees}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {country.customers}+
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Customers</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                          Growth: {country.growth}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                {getIcon('heart', 'w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4')}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No favorite countries
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Click the heart icon on any country to save it here.
                </p>
                <button
                  onClick={() => setActiveTab('map')}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Browse Countries
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {activeTab !== 'favorites' && filteredCountries.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('globe', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No countries found
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

        {/* ==================== COUNTRY DETAIL MODAL ==================== */}
        {selectedCountry && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedCountry(null)}
            role="dialog"
            aria-label="Country details"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`p-6 bg-linear-to-r ${getRegionConfig(selectedCountry.region).gradient} text-white`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold">{selectedCountry.code}</div>
                    <h2 className="text-2xl font-bold">{selectedCountry.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    {getIcon('x', 'w-6 h-6')}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {selectedCountry.offices}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Office Locations</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {selectedCountry.employees}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {selectedCountry.customers}+
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Customers</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {selectedCountry.growth}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">YoY Growth</div>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => handleFavoriteCountry(selectedCountry.code)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${favoriteCountries.includes(selectedCountry.code)
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-500'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                      }`}
                    aria-label="Toggle favorite"
                  >
                    {getIcon('heart', 'w-5 h-5 inline mr-2')}
                    {favoriteCountries.includes(selectedCountry.code)
                      ? 'Remove from Favorites'
                      : 'Add to Favorites'}
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
              <h3 className="text-2xl font-bold mb-2">Global Support, Local Expertise</h3>
              <p className="text-blue-100 max-w-2xl">
                No matter where you are, our local teams are ready to provide personalized support in
                your language and time zone.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Find Your Local Office
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalCoverageMapSection3;