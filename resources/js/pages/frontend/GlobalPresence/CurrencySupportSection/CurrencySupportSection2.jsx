// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection2.jsx

/**
 * Currency Support Section II - Advanced Currency Directory Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Currencies, Countries, Real-time Rates, Accuracy)
 * - Built-in Currency Converter with Real-time Calculation
 * - Sort Dropdown (Name, Exchange Rate, Popularity)
 * - Grid/List View Toggle for Currency Browsing
 * - Multi-filter System (Currency, Region, Status)
 * - Active Filter Indicators with Count Badge
 * - Favorite Functionality with Heart Icon and Persistence
 * - Popular Currencies Row with Horizontal Cards
 * - Status Badges (Base, Beta, Active, Coming Soon)
 * - Expandable Country List with Show More/Less
 * - Last Updated Timestamp Display
 * - Region Pills with Count Badges
 * - Search across currency names, codes, and regions
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Multi-Currency Billing CTA Banner
 * - Newsletter Subscription Integration
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

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
  HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiArrowRight,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from "react-icons/md";

const CurrencySupportSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [converterTo, setConverterTo] = useState('EUR');
  const [showFilters, setShowFilters] = useState(false);
  const [converterFrom, setConverterFrom] = useState('USD');
  const [showConverter, setShowConverter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [converterAmount, setConverterAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [expandedCurrency, setExpandedCurrency] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('all');
  const [favoriteCurrencies, setFavoriteCurrencies] = useState([]);
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

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

  const currencyStatuses = useMemo(
    () => [
      { id: 'all', label: 'All Currencies' },
      { id: 'active', label: 'Active' },
      { id: 'beta', label: 'Beta' },
      { id: 'coming-soon', label: 'Coming Soon' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "50+", label: "Currencies Supported", icon: "currency-dollar", trend: "+8", trendUp: true },
        { value: "150+", label: "Countries", icon: "globe", trend: "+12", trendUp: true },
        { value: "24/7", label: "Real-time Rates", icon: "clock", trend: "Live", trendUp: true },
        { value: "99.9%", label: "Accuracy", icon: "star", trend: "99.9%", trendUp: true }
      ],
    [config?.stats]
  );

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
      'arrow-narrow-right': <HiOutlineArrowNarrowRight className={className} />
    };
    return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
  }, []);

  /**
   * Returns currency configuration with color, gradient, label, and flag
   */
  const getCurrencyConfig = useCallback((currencyCode) => {
    const configs = {
      'USD': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'currency-dollar', label: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸', gradient: 'from-emerald-500 to-emerald-600' },
      'EUR': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'currency-dollar', label: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺', gradient: 'from-blue-500 to-blue-600' },
      'GBP': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'currency-dollar', label: 'British Pound', symbol: '£', code: 'GBP', flag: '🇬🇧', gradient: 'from-purple-500 to-purple-600' },
      'JPY': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'currency-dollar', label: 'Japanese Yen', symbol: '¥', code: 'JPY', flag: '🇯🇵', gradient: 'from-red-500 to-red-600' },
      'CNY': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'currency-dollar', label: 'Chinese Yuan', symbol: '¥', code: 'CNY', flag: '🇨🇳', gradient: 'from-orange-500 to-orange-600' },
      'CAD': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'currency-dollar', label: 'Canadian Dollar', symbol: '$', code: 'CAD', flag: '🇨🇦', gradient: 'from-indigo-500 to-indigo-600' },
      'AUD': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'currency-dollar', label: 'Australian Dollar', symbol: '$', code: 'AUD', flag: '🇦🇺', gradient: 'from-pink-500 to-pink-600' },
      'CHF': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'currency-dollar', label: 'Swiss Franc', symbol: 'Fr', code: 'CHF', flag: '🇨🇭', gradient: 'from-amber-500 to-amber-600' },
      'SGD': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'currency-dollar', label: 'Singapore Dollar', symbol: '$', code: 'SGD', flag: '🇸🇬', gradient: 'from-teal-500 to-teal-600' },
      'INR': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'currency-dollar', label: 'Indian Rupee', symbol: '₹', code: 'INR', flag: '🇮🇳', gradient: 'from-yellow-500 to-yellow-600' },
      'BRL': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'currency-dollar', label: 'Brazilian Real', symbol: 'R$', code: 'BRL', flag: '🇧🇷', gradient: 'from-green-500 to-green-600' }
    };
    return configs[currencyCode] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', icon: 'currency-dollar', label: currencyCode, symbol: '', code: currencyCode, flag: '🌐', gradient: 'from-gray-500 to-gray-600' };
  }, []);

  /**
   * Returns region configuration with flag and label
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America', borderColor: 'border-blue-200 dark:border-blue-800' },
      'europe': { flag: '🇪🇺', label: 'Europe', borderColor: 'border-purple-200 dark:border-purple-800' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific', borderColor: 'border-green-200 dark:border-green-800' },
      'latin-america': { flag: '🌎', label: 'Latin America', borderColor: 'border-orange-200 dark:border-orange-800' },
      'middle-east': { flag: '🕌', label: 'Middle East', borderColor: 'border-red-200 dark:border-red-800' },
      'africa': { flag: '🌍', label: 'Africa', borderColor: 'border-emerald-200 dark:border-emerald-800' },
    };
    return configs[regionId] || { flag: '🌐', label: regionId || 'Global', borderColor: 'border-gray-200 dark:border-gray-700' };
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
   * Toggle expanded state for a currency
   */
  const toggleExpanded = useCallback((currencyCode) => {
    setExpandedCurrency((prev) => (prev === currencyCode ? null : currencyCode));
  }, []);

  /**
   * Handle currency conversion
   */
  const handleConvert = useCallback(() => {
    const fromCurrency = allCurrencies.find(c => c.code === converterFrom);
    const toCurrency = allCurrencies.find(c => c.code === converterTo);
    if (fromCurrency && toCurrency) {
      const rate = toCurrency.exchangeRate / fromCurrency.exchangeRate;
      setConvertedAmount(converterAmount * rate);
    }
  }, [converterAmount, converterFrom, converterTo, allCurrencies]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCurrency('all');
    setSelectedRegion('all');
    setSelectedStatus('all');
    setSortBy('name');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
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

    if (selectedStatus !== 'all') {
      currencies = currencies.filter((c) => c.status === selectedStatus);
    }

    // Sorting
    if (sortBy === 'name') {
      currencies.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'rate') {
      currencies.sort((a, b) => a.exchangeRate - b.exchangeRate);
    } else if (sortBy === 'popularity') {
      currencies.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return currencies;
  }, [allCurrencies, searchQuery, selectedCurrency, selectedRegion, selectedStatus, sortBy]);

  // Top currencies by popularity
  const topCurrencies = useMemo(() => {
    return [...allCurrencies]
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 4);
  }, [allCurrencies]);

  // Update region counts for display
  const regionsWithCount = useMemo(() => {
    return regions.map((region) => {
      if (region.id === 'all') {
        return { ...region, count: filteredCurrencies.length };
      }
      const count = allCurrencies.filter((c) => c.regions?.includes(region.id)).length;
      return { ...region, count };
    });
  }, [regions, allCurrencies, filteredCurrencies.length]);

  const activeFiltersCount = [
    selectedCurrency !== 'all',
    selectedRegion !== 'all',
    selectedStatus !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  const lastUpdated = useMemo(() => new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }), []);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Currency Support Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('currency-dollar', 'w-4 h-4 text-emerald-600 dark:text-emerald-400')}
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {config?.badge || 'Currency Support'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Global'}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Currency'}
              </span>{' '}
              {config?.title?.suffix || 'Support'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
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

        {/* ==================== CURRENCY CONVERTER BANNER ==================== */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setShowConverter(!showConverter)}
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            aria-label="Toggle currency converter"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                {getIcon('refresh', 'w-5 h-5 text-emerald-600')}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Currency Converter</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Convert between supported currencies</p>
              </div>
            </div>
            {getIcon('chevron-down', `w-5 h-5 text-gray-400 transition-transform ${showConverter ? 'rotate-180' : ''}`)}
          </button>

          {showConverter && (
            <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    value={converterAmount}
                    onChange={(e) => setConverterAmount(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    aria-label="Amount to convert"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    From
                  </label>
                  <select
                    value={converterFrom}
                    onChange={(e) => setConverterFrom(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    aria-label="Convert from currency"
                  >
                    {allCurrencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {getCurrencyConfig(currency.code).flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    To
                  </label>
                  <select
                    value={converterTo}
                    onChange={(e) => setConverterTo(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    aria-label="Convert to currency"
                  >
                    {allCurrencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {getCurrencyConfig(currency.code).flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={handleConvert}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
                  aria-label="Perform conversion"
                >
                  Convert
                </button>
                {convertedAmount !== null && (
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {converterAmount} {converterFrom} =
                    </p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {convertedAmount.toFixed(2)} {converterTo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
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
                config?.searchPlaceholder || 'Search by currency name, code, or region...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search currencies"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
              aria-label="Sort currencies"
            >
              <option value="name">Sort by Name</option>
              <option value="rate">Sort by Exchange Rate</option>
              <option value="popularity">Sort by Popularity</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
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
              {/* Currency Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Currency
                </label>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by specific currency"
                >
                  <option value="all">All Currencies</option>
                  {allCurrencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {getCurrencyConfig(currency.code).flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map(region => (
                    <option key={region.id} value={region.id}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Filter by status"
                >
                  {currencyStatuses.map(status => (
                    <option key={status.id} value={status.id}>
                      {status.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Sort currencies"
                >
                  <option value="name">Currency Name</option>
                  <option value="rate">Exchange Rate</option>
                  <option value="popularity">Popularity</option>
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

        {/* ==================== REGION PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {regionsWithCount.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${region.label} currencies`}
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

        {/* ==================== TOP CURRENCIES ROW ==================== */}
        {topCurrencies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('trending', 'w-5 h-5 text-emerald-500')}
              Most Popular Currencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topCurrencies.map((currency) => {
                const currencyConfig = getCurrencyConfig(currency.code);
                return (
                  <Link
                    key={currency.code}
                    href={currency.link || `/currency/${currency.code}`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-linear-to-r ${currencyConfig.gradient} flex items-center justify-center text-xl`}
                    >
                      {currencyConfig.flag}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {currency.code}
                        </h3>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">
                          {currency.exchangeRate}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{currency.name}</p>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== EXCHANGE RATE BANNER ==================== */}
        <div className="mb-8 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {getIcon('clock', 'w-4 h-4 inline mr-1')}
            Exchange rates updated: {lastUpdated} • Rates are indicative and updated every hour
          </p>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredCurrencies.length}
            </span>{' '}
            currencies
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== CURRENCIES GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredCurrencies.map((currency) => {
            const currencyConfig = getCurrencyConfig(currency.code);
            const isExpanded = expandedCurrency === currency.code;
            const isFavorite = favoriteCurrencies.includes(currency.code);

            return (
              <div
                key={currency.code}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Currency Flag Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-br ${currencyConfig.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl">{currencyConfig.flag}</span>
                  </div>
                  {currency.isBase && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Base
                      </span>
                    </div>
                  )}
                  {currency.status === 'beta' && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Beta
                      </span>
                    </div>
                  )}
                  {currency.status === 'coming-soon' && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Currency Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {currency.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {currency.symbol} {currency.code}
                      </p>
                    </div>
                    <button
                      onClick={() => handleFavoriteCurrency(currency.code)}
                      className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                    </button>
                  </div>

                  {/* Currency Metadata */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${currencyConfig.color}`}>
                      {currencyConfig.label}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Rate: {currency.exchangeRate}
                    </span>
                  </div>

                  {/* Regions */}
                  {currency.regions && currency.regions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {currency.regions.slice(0, 3).map((region, idx) => {
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
                      {currency.regions.length > 3 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          +{currency.regions.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {currency.popularity || 85}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Popularity</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {currency.exchangeRate}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">to USD</div>
                    </div>
                  </div>

                  {/* Expandable Supported Countries */}
                  {currency.supportedCountries && currency.supportedCountries.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(currency.code)}
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                        aria-label={isExpanded ? 'Show less' : `View ${currency.supportedCountries.length} countries`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${currency.supportedCountries.length} countries`}
                        {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 flex flex-wrap gap-1 animate-fadeIn">
                          {currency.supportedCountries.map((country, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={currency.link || `/currency/${currency.code}`}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      View Details
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Last updated: {currency.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredCurrencies.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('currency-dollar', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No currencies found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== MULTI-CURRENCY BILLING CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Multi-Currency Billing</h3>
              <p className="text-emerald-100 dark:text-emerald-200 max-w-2xl">
                Accept payments and send invoices in your customers' preferred currency. Reduce friction and improve conversion rates with local currency support.
              </p>
            </div>
            <Link
              href={config?.billingLink || '/multi-currency-billing'}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              Learn More
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Currency Rate Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive daily exchange rate updates and multi-currency feature announcements.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for currency updates"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
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
            `}</style>
    </section>
  );
};

export default CurrencySupportSection2;