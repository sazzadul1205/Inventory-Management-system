// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection3.jsx

/**
 * Currency Support Section III - Full Currency Hub with Map, Chart & Analytics
 *
 * Unique Design Elements:
 * - Interactive World Currency Map with Zoom & Hover Markers
 * - Historical Exchange Rate Trend Chart with Area Fill
 * - Feature Carousel with Auto-play for Key Capabilities
 * - Multi-tab UI: Currencies, Map, Exchange Rates, Features, Favorites
 * - Favorites Tab with LocalStorage Persistence
 * - Currency Detail Modal with Complete Information
 * - Real-time Stats Display (Currencies, Countries, Uptime, Accuracy)
 * - Region & Currency Search Filters
 * - Exchange Rate Banner with Last Updated Time
 * - Favorite Currency Heart Icon with Persistence
 * - Popularity & Status Indicators
 * - Responsive Layout & Dark Mode Support
 * - Animated Pulse Badge & Gradient Orbs
 * - Circuit Board Background Pattern
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineCurrencyDollar,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
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
  HiOutlineRefresh,
  HiOutlineLibrary,
  HiOutlineNewspaper,
  HiOutlineVideoCamera,
  HiOutlineZoomIn,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiArrowRight,
} from 'react-icons/hi2';
import {
  MdOutlineHeadphones as HiOutlineHeadphones,
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const CurrencySupportSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [historicalRates, setHistoricalRates] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState('all');
  const [favoriteCurrencies, setFavoriteCurrencies] = useState([]);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [selectedCurrencyData, setSelectedCurrencyData] = useState(null);
  const [selectedChartCurrency, setSelectedChartCurrency] = useState('USD');

  // ==================== REFERENCE MANAGEMENT ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allCurrencies = useMemo(() => config?.currencies || [], [config?.currencies]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allCurrencies.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allCurrencies.length]
  );

  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All Currencies', icon: 'currency-dollar' },
      { id: 'map', label: 'Currency Map', icon: 'map' },
      { id: 'chart', label: 'Exchange Rates', icon: 'chart' },
      { id: 'features', label: 'Features', icon: 'star' },
      { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "50+", label: "Currencies Supported", icon: "currency-dollar" },
        { value: "150+", label: "Countries", icon: "globe" },
        { value: "24/7", label: "Real-time Rates", icon: "clock" },
        { value: "99.9%", label: "Accuracy", icon: "star" }
      ],
    [config?.stats]
  );

  const currencyFeatures = useMemo(
    () =>
      config?.currencyFeatures || [
        { title: "Real-time Exchange Rates", description: "Live rates updated every minute", icon: "refresh", gradient: "from-blue-500 to-blue-600" },
        { title: "Multi-currency Billing", description: "Invoice in your customer's currency", icon: "credit", gradient: "from-emerald-500 to-emerald-600" },
        { title: "Automatic Conversion", description: "Seamless currency conversion", icon: "refresh", gradient: "from-purple-500 to-purple-600" },
        { title: "Historical Rate Charts", description: "Track rate trends over time", icon: "chart", gradient: "from-orange-500 to-orange-600" }
      ],
    [config?.currencyFeatures]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteCurrencies');
    if (saved) setFavoriteCurrencies(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCurrencies', JSON.stringify(favoriteCurrencies));
  }, [favoriteCurrencies]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'currency-dollar': <HiOutlineCurrencyDollar className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      users: <HiOutlineUsers className={className} />,
      star: <HiOutlineStar className={className} />,
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
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
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
      refresh: <HiOutlineRefresh className={className} />,
      library: <HiOutlineLibrary className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      userCircle: <HiOutlineUserCircle className={className} />
    };
    return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
  }, []);

  /**
   * Returns currency configuration with color, gradient, label, flag, and map coordinates
   */
  const getCurrencyConfig = useCallback((currencyCode) => {
    const configs = {
      'USD': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'currency-dollar', label: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸', gradient: 'from-emerald-500 to-emerald-600', coordinates: { x: 750, y: 250 } },
      'EUR': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'currency-dollar', label: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺', gradient: 'from-blue-500 to-blue-600', coordinates: { x: 520, y: 210 } },
      'GBP': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'currency-dollar', label: 'British Pound', symbol: '£', code: 'GBP', flag: '🇬🇧', gradient: 'from-purple-500 to-purple-600', coordinates: { x: 550, y: 215 } },
      'JPY': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'currency-dollar', label: 'Japanese Yen', symbol: '¥', code: 'JPY', flag: '🇯🇵', gradient: 'from-red-500 to-red-600', coordinates: { x: 1020, y: 330 } },
      'CNY': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'currency-dollar', label: 'Chinese Yuan', symbol: '¥', code: 'CNY', flag: '🇨🇳', gradient: 'from-orange-500 to-orange-600', coordinates: { x: 980, y: 310 } },
      'CAD': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'currency-dollar', label: 'Canadian Dollar', symbol: '$', code: 'CAD', flag: '🇨🇦', gradient: 'from-indigo-500 to-indigo-600', coordinates: { x: 760, y: 220 } },
      'AUD': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'currency-dollar', label: 'Australian Dollar', symbol: '$', code: 'AUD', flag: '🇦🇺', gradient: 'from-pink-500 to-pink-600', coordinates: { x: 1080, y: 470 } },
      'CHF': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'currency-dollar', label: 'Swiss Franc', symbol: 'Fr', code: 'CHF', flag: '🇨🇭', gradient: 'from-amber-500 to-amber-600', coordinates: { x: 490, y: 195 } },
      'SGD': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'currency-dollar', label: 'Singapore Dollar', symbol: '$', code: 'SGD', flag: '🇸🇬', gradient: 'from-teal-500 to-teal-600', coordinates: { x: 940, y: 380 } },
      'INR': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'currency-dollar', label: 'Indian Rupee', symbol: '₹', code: 'INR', flag: '🇮🇳', gradient: 'from-yellow-500 to-yellow-600', coordinates: { x: 860, y: 340 } },
      'BRL': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'currency-dollar', label: 'Brazilian Real', symbol: 'R$', code: 'BRL', flag: '🇧🇷', gradient: 'from-green-500 to-green-600', coordinates: { x: 320, y: 440 } }
    };
    return configs[currencyCode] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', icon: 'currency-dollar', label: currencyCode, symbol: '', code: currencyCode, flag: '🌐', gradient: 'from-gray-500 to-gray-600', coordinates: { x: 400, y: 300 } };
  }, []);

  /**
   * Returns region configuration with flag and label
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America', gradient: 'from-blue-500 to-blue-600' },
      'europe': { flag: '🇪🇺', label: 'Europe', gradient: 'from-purple-500 to-purple-600' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific', gradient: 'from-emerald-500 to-emerald-600' },
      'latin-america': { flag: '🌎', label: 'Latin America', gradient: 'from-orange-500 to-orange-600' },
      'middle-east': { flag: '🕌', label: 'Middle East', gradient: 'from-red-500 to-red-600' },
      'africa': { flag: '🌍', label: 'Africa', gradient: 'from-amber-500 to-amber-600' },
    };
    return configs[regionId] || { flag: '🌐', label: regionId || 'Global' };
  }, []);

  /**
   * Toggle favorite status for a currency
   */
  const handleFavoriteCurrency = useCallback((currencyCode) => {
    setFavoriteCurrencies((prev) =>
      prev.includes(currencyCode)
        ? prev.filter((c) => c !== currencyCode)
        : [...prev, currencyCode]
    );
  }, []);

  /**
   * Open currency modal
   */
  const openCurrencyModal = useCallback((currency) => {
    setSelectedCurrencyData(currency);
    setShowCurrencyModal(true);
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuresCount = currencyFeatures.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuresCount);
  }, [featuresCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuresCount) % featuresCount);
  }, [featuresCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && featuresCount > 1 && activeTab === 'features') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuresCount, activeTab, nextSlide]);

  // ==================== HISTORICAL RATES GENERATION ====================
  useEffect(() => {
    const generateHistoricalRates = () => {
      const rates = [];
      const baseCurrency = allCurrencies.find(c => c.code === selectedChartCurrency);
      const baseRate = baseCurrency?.exchangeRate || 1;

      for (let i = 30; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        // Generate realistic rate variation
        const variation = 1 + (Math.sin(i / 3) * 0.03) + ((Math.random() - 0.5) * 0.02);
        rates.push({
          date: date.toISOString().split('T')[0],
          rate: baseRate * variation
        });
      }
      setHistoricalRates(rates);
    };
    generateHistoricalRates();
  }, [allCurrencies, selectedChartCurrency]);

  // ==================== FILTERING LOGIC ====================
  const filteredCurrencies = useMemo(() => {
    let currencies = [...allCurrencies];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      currencies = currencies.filter(
        (c) =>
          c.name?.toLowerCase().includes(query) ||
          c.code?.toLowerCase().includes(query) ||
          c.regions?.some((region) => region.toLowerCase().includes(query))
      );
    }

    if (selectedCurrency !== 'all') {
      currencies = currencies.filter((c) => c.code === selectedCurrency);
    }

    if (selectedRegion !== 'all') {
      currencies = currencies.filter((c) => c.regions?.includes(selectedRegion));
    }

    if (activeTab === 'favorites') {
      currencies = currencies.filter((c) => favoriteCurrencies.includes(c.code));
    } else if (activeTab === 'featured') {
      currencies = currencies.filter((c) => c.isFeatured);
    }

    return currencies;
  }, [allCurrencies, searchQuery, selectedCurrency, selectedRegion, activeTab, favoriteCurrencies]);

  const activeFiltersCount = [selectedCurrency !== 'all', selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

  // Calculate min and max rates for chart scaling
  const minRate = historicalRates.length > 0 ? Math.min(...historicalRates.map(r => r.rate)) : 0;
  const maxRate = historicalRates.length > 0 ? Math.max(...historicalRates.map(r => r.rate)) : 0;
  const range = maxRate - minRate;

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCurrency('all');
    setSelectedRegion('all');
    setActiveTab('all');
  }, []);

  const lastUpdated = useMemo(() => new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }), []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Currency Support Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-currency" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-currency)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineCurrencyDollar className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Currency Support"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Global"} <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Currency"}</span> {config?.title?.suffix || "Support"}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-emerald-600 dark:text-emerald-400")}
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
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
              {tab.id === 'favorites' && favoriteCurrencies.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteCurrencies.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== CURRENCY MAP TAB ==================== */}
        {activeTab === 'map' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="relative aspect-video bg-linear-to-br from-emerald-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom in"
                  >
                    <HiOutlineZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom out"
                  >
                    <HiOutlineZoomIn className="w-4 h-4 rotate-180" />
                  </button>
                </div>

                <svg
                  className="w-full h-full transition-transform duration-300 cursor-grab"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <rect width="1200" height="600" fill="url(#map-gradient-currency)" className="opacity-30" />
                  <defs>
                    <linearGradient id="map-gradient-currency" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Continent outlines */}
                  <path d="M200,150 L280,120 L350,140 L380,180 L350,220 L280,240 L200,220 L170,180 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.5" />
                  <path d="M500,180 L600,150 L700,160 L750,200 L720,240 L620,250 L520,230 L480,200 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.5" />
                  <path d="M900,200 L1000,180 L1080,200 L1100,240 L1050,270 L950,260 L880,240 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.5" />
                  <path d="M300,350 L400,330 L480,340 L520,380 L480,420 L380,430 L280,410 L260,380 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.5" />
                  <path d="M700,400 L780,380 L850,400 L880,440 L820,470 L730,460 L680,430 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.5" />

                  {/* Currency markers based on filtered list */}
                  {filteredCurrencies.map((currency) => {
                    const currencyConfig = getCurrencyConfig(currency.code);
                    const isHovered = hoveredMarker === currency.code;
                    const isFavorited = favoriteCurrencies.includes(currency.code);
                    let markerColor = "#10B981";
                    if (currencyConfig.color.includes('blue')) markerColor = "#3B82F6";
                    if (currencyConfig.color.includes('purple')) markerColor = "#8B5CF6";
                    if (currencyConfig.color.includes('red')) markerColor = "#EF4444";
                    if (currencyConfig.color.includes('orange')) markerColor = "#F97316";
                    if (currencyConfig.color.includes('indigo')) markerColor = "#6366F1";
                    if (currencyConfig.color.includes('pink')) markerColor = "#EC4899";
                    if (currencyConfig.color.includes('amber')) markerColor = "#F59E0B";
                    if (currencyConfig.color.includes('teal')) markerColor = "#14B8A6";
                    if (currencyConfig.color.includes('yellow')) markerColor = "#EAB308";
                    if (currencyConfig.color.includes('green')) markerColor = "#22C55E";

                    return (
                      <g
                        key={currency.code}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredMarker(currency.code)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        onClick={() => openCurrencyModal(currency)}
                      >
                        <circle
                          cx={currencyConfig.coordinates?.x || 500}
                          cy={currencyConfig.coordinates?.y || 250}
                          r={isHovered ? 14 : 10}
                          fill={markerColor}
                          stroke="white"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        {isHovered && (
                          <>
                            <circle cx={currencyConfig.coordinates?.x || 500} cy={currencyConfig.coordinates?.y || 250} r="22" fill={markerColor} fillOpacity="0.2" />
                            <text x={currencyConfig.coordinates?.x || 500} y={(currencyConfig.coordinates?.y || 250) - 18} textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" className="text-gray-900 dark:text-white">
                              {currency.code}
                            </text>
                          </>
                        )}
                        {isFavorited && (
                          <circle cx={(currencyConfig.coordinates?.x || 500) + 12} cy={(currencyConfig.coordinates?.y || 250) - 12} r="6" fill="#F59E0B" stroke="white" strokeWidth="1.5" />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Major Currencies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Favorites</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EXCHANGE RATES CHART TAB ==================== */}
        {activeTab === 'chart' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {getIcon('chart', 'w-5 h-5 text-emerald-600')}
                  Exchange Rate Trends
                </h2>
                <select
                  value={selectedChartCurrency}
                  onChange={(e) => setSelectedChartCurrency(e.target.value)}
                  className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Select currency for chart"
                >
                  {allCurrencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {getCurrencyConfig(currency.code).flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative h-80">
                {historicalRates.length > 0 && (
                  <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[...Array(5)].map((_, i) => {
                      const y = 40 + i * 80;
                      const rateValue = maxRate - (i / 4) * range;
                      return (
                        <g key={i}>
                          <line x1="40" y1={y} x2="760" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
                          <text x="30" y={y + 4} fill="#9CA3AF" fontSize="10" textAnchor="end">
                            {rateValue.toFixed(2)}
                          </text>
                        </g>
                      );
                    })}

                    {/* Rate line */}
                    <polyline
                      points={historicalRates.map((rate, i) => {
                        const x = 40 + (i / (historicalRates.length - 1)) * 720;
                        const y = 40 + (1 - (rate.rate - minRate) / range) * 320;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    />

                    {/* Area fill under line */}
                    <polygon
                      points={`40,360 ${historicalRates.map((rate, i) => {
                        const x = 40 + (i / (historicalRates.length - 1)) * 720;
                        const y = 40 + (1 - (rate.rate - minRate) / range) * 320;
                        return `${x},${y}`;
                      }).join(' ')} 760,360 40,360`}
                      fill="url(#gradient-area)"
                      fillOpacity="0.3"
                    />

                    <defs>
                      <linearGradient id="gradient-area" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* X-axis labels */}
                    {[0, 5, 10, 15, 20, 25, 30].map(i => {
                      if (i <= historicalRates.length - 1) {
                        return (
                          <text key={i} x={40 + (i / 30) * 720} y="380" fill="#9CA3AF" fontSize="10" textAnchor="middle">
                            {historicalRates[i]?.date?.slice(5)}
                          </text>
                        );
                      }
                      return null;
                    })}
                  </svg>
                )}
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Last 30 days - Rate to USD
              </p>
            </div>
          </div>
        )}

        {/* ==================== CURRENCY FEATURES TAB - CAROUSEL ==================== */}
        {activeTab === 'features' && currencyFeatures.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {currencyFeatures.map((feature, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className={`bg-linear-to-br ${feature.gradient} rounded-3xl p-12 text-white text-center`}>
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {getIcon(feature.icon, "w-10 h-10 text-white")}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                      <p className="text-white/90 text-xl max-w-2xl mx-auto">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {currencyFeatures.length > 1 && (
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {currencyFeatures.map((_, idx) => (
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

        {/* ==================== ALL CURRENCIES / FAVORITES TAB ==================== */}
        {(activeTab === 'all' || activeTab === 'favorites') && (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by currency name, code, or region..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search currencies"
                />
              </div>

              <div className="flex gap-2">
                {/* Currency Filter */}
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by specific currency"
                >
                  <option value="all">All Currencies</option>
                  {allCurrencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {getCurrencyConfig(currency.code).flag} {currency.code}
                    </option>
                  ))}
                </select>
                {/* Region Filter */}
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map(region => (
                    <option key={region.id} value={region.id}>{region.label}</option>
                  ))}
                </select>
                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  aria-label="Toggle filters"
                >
                  <HiOutlineFilter className="w-4 h-4" />
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Currency
                    </label>
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Currencies</option>
                      {allCurrencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                          {getCurrencyConfig(currency.code).flag} {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Region
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    >
                      {regions.map(region => (
                        <option key={region.id} value={region.id}>{region.label}</option>
                      ))}
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

            {/* Exchange Rate Banner */}
            <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getIcon('clock', 'w-4 h-4 inline mr-1')}
                Exchange rates updated: {lastUpdated} • Rates are indicative and updated every hour
              </p>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredCurrencies.length}</span> currencies
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Currencies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredCurrencies.map((currency) => {
                const currencyConfig = getCurrencyConfig(currency.code);
                const isFavorite = favoriteCurrencies.includes(currency.code);

                return (
                  <div
                    key={currency.code}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openCurrencyModal(currency)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openCurrencyModal(currency)}
                  >
                    <div className={`p-5 bg-linear-to-r ${currencyConfig.gradient} text-white`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{currencyConfig.flag}</span>
                          <div>
                            <h3 className="font-bold text-lg">{currency.name}</h3>
                            <p className="text-sm text-white/80">{currency.symbol} {currency.code}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleFavoriteCurrency(currency.code); }}
                          className={`transition-colors ${isFavorite ? 'text-amber-400' : 'text-white/70 hover:text-amber-400'}`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        {getIcon('trending', 'w-4 h-4 text-emerald-500 dark:text-emerald-400')}
                        <span className="text-sm text-gray-600 dark:text-gray-400">Rate to USD: {currency.exchangeRate}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {currency.regions?.map((region, idx) => {
                          const regConfig = getRegionConfig(region);
                          return (
                            <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1">
                              <span>{regConfig.flag}</span>
                              {regConfig.label}
                            </span>
                          );
                        })}
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{currency.popularity}%</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Popularity</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{currency.status === 'active' ? 'Active' : 'Beta'}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Updated: {currency.lastUpdated}</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline">View Details →</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {(activeTab === 'all' || activeTab === 'favorites') && filteredCurrencies.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('currency-dollar', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No currencies found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites' ? "You haven't added any favorite currencies yet." : "Try adjusting your search or filter criteria"}
            </p>
            {activeTab === 'favorites' && (
              <button onClick={() => setActiveTab('all')} className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Browse All Currencies
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button onClick={clearAllFilters} className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline ml-4">
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== CURRENCY DETAIL MODAL ==================== */}
        {showCurrencyModal && selectedCurrencyData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowCurrencyModal(false)}
            role="dialog"
            aria-label="Currency details"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-6 bg-linear-to-r ${getCurrencyConfig(selectedCurrencyData.code).gradient} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{getCurrencyConfig(selectedCurrencyData.code).flag}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCurrencyData.name}</h2>
                      <p className="text-sm text-white/80">{selectedCurrencyData.symbol} {selectedCurrencyData.code}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCurrencyModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{selectedCurrencyData.exchangeRate}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">to USD</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{selectedCurrencyData.popularity}%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Popularity</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{selectedCurrencyData.status === 'active' ? 'Active' : 'Beta'}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="text-xl font-bold text-amber-600 dark:text-amber-400">{selectedCurrencyData.lastUpdated}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Last Updated</div>
                  </div>
                </div>
                {selectedCurrencyData.regions && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Regions Served</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCurrencyData.regions.map((region, idx) => {
                        const regConfig = getRegionConfig(region);
                        return (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1">
                            <span>{regConfig.flag}</span>
                            {regConfig.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={`/currency/${selectedCurrencyData.code}`}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleFavoriteCurrency(selectedCurrencyData.code)}
                    className={`px-4 py-2 rounded-lg transition-colors ${favoriteCurrencies.includes(selectedCurrencyData.code) ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                    aria-label="Toggle favorite"
                  >
                    <HiOutlineHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== MULTI-CURRENCY BILLING BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Multi-Currency Billing</h3>
              <p className="text-emerald-100 dark:text-emerald-200 max-w-2xl">
                Accept payments and send invoices in your customers' preferred currency. Reduce friction and improve conversion rates with local currency support.
              </p>
            </div>
            <Link
              href={config?.billingLink || "/multi-currency-billing"}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              Learn More
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
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
            `}</style>
    </section>
  );
};

export default CurrencySupportSection3;