// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection1.jsx

/**
 * Currency Support Section I - Global Currency & Multi-Currency Hub
 *
 * Unique Design Elements:
 * - Stats Cards: Currencies supported, Countries, Real-time rates, Accuracy
 * - Featured Currency Spotlight with dynamic exchange rates
 * - Region Filter Chips for geographic targeting
 * - Expandable Currency Details with supported countries
 * - Save/Favourite Currency Functionality
 * - Real-time Exchange Rate Display
 * - Last Updated Timestamp
 * - Popular Exchange Rates Side Panel
 * - Multi-Currency Billing CTA Banner
 * - Newsletter Subscription for Rate Updates
 * - Animated Gradient Background Orbs (Green/Blue Theme)
 * - Responsive Grid Layout for Currency Cards
 * - Search across currency names, codes, and regions
 * - Interactive Currency Cards with hover effects
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
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiArrowRight,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from "react-icons/md";

const CurrencySupportSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedCurrencies, setSavedCurrencies] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedCurrency, setExpandedCurrency] = useState(null);

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

  // Featured currency (first marked as featured, otherwise first in list)
  const featuredCurrency = useMemo(() => {
    const featured = allCurrencies.find((c) => c.isFeatured);
    return featured || allCurrencies[0];
  }, [allCurrencies]);

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
    };
    return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
  }, []);

  /**
   * Returns currency configuration with color, icon, label, and flag
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
      'HKD': { color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', icon: 'currency-dollar', label: 'Hong Kong Dollar', symbol: '$', code: 'HKD', flag: '🇭🇰', gradient: 'from-cyan-500 to-cyan-600' },
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
      'north-america': { flag: '🇺🇸', label: 'North America' },
      'europe': { flag: '🇪🇺', label: 'Europe' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific' },
      'latin-america': { flag: '🌎', label: 'Latin America' },
      'middle-east': { flag: '🕌', label: 'Middle East' },
      'africa': { flag: '🌍', label: 'Africa' },
    };
    return configs[regionId] || { flag: '🌐', label: regionId || 'Global' };
  }, []);

  /**
   * Toggle save/bookmark status for a currency
   */
  const handleSaveCurrency = useCallback((currencyCode) => {
    setSavedCurrencies((prev) =>
      prev.includes(currencyCode)
        ? prev.filter((code) => code !== currencyCode)
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
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
  }, []);

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

    if (selectedRegion !== 'all') {
      currencies = currencies.filter((c) => c.regions?.includes(selectedRegion));
    }

    return currencies;
  }, [allCurrencies, searchQuery, selectedRegion]);

  // Regular currencies (excluding featured currency)
  const regularCurrencies = useMemo(() => {
    if (!featuredCurrency) return filteredCurrencies;
    return filteredCurrencies.filter((c) => c.code !== featuredCurrency.code);
  }, [filteredCurrencies, featuredCurrency]);

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

  // Calculate last updated date for exchange rates
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
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-emerald-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-emerald-100 dark:border-gray-700">
            {getIcon('currency-dollar', 'w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2')}
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {config?.badge || 'Currency Support'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Global'}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Currency'}
            </span>{' '}
            {config?.title?.suffix || 'Support'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations.'}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-emerald-600 dark:text-emerald-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
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
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search currencies"
          />
        </div>

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {regionsWithCount.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedRegion === region.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${region.label} currencies`}
            >
              {getIcon(region.icon, 'w-4 h-4')}
              {region.label}
              {region.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{region.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== EXCHANGE RATE BANNER ==================== */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {getIcon('trending', 'w-5 h-5 text-emerald-600 dark:text-emerald-400')}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Exchange rates updated: {lastUpdated}
              </span>
            </div>
            <Link
              href={config?.exchangeRatesLink || '/exchange-rates'}
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
            >
              View all rates →
            </Link>
          </div>
        </div>

        {/* ==================== FEATURED CURRENCY ==================== */}
        {featuredCurrency && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        Base Currency
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getCurrencyConfig(featuredCurrency.code).color}`}
                        >
                          {featuredCurrency.code}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{getCurrencyConfig(featuredCurrency.code).flag}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {featuredCurrency.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {featuredCurrency.symbol} {featuredCurrency.code}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredCurrency.description ||
                        `Our base currency for all transactions. All exchange rates are calculated relative to ${featuredCurrency.code}.`}
                    </p>

                    {/* Popular Exchange Rates */}
                    {featuredCurrency.popularRates && (
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {featuredCurrency.popularRates.map((rate, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                          >
                            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                              {rate.rate}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {rate.code}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredCurrency.link || `/currency/${featuredCurrency.code}`}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        View Exchange Rates
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleSaveCurrency(featuredCurrency.code)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedCurrencies.includes(featuredCurrency.code)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600'
                          }`}
                        aria-label={
                          savedCurrencies.includes(featuredCurrency.code)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedCurrencies.includes(featuredCurrency.code) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image / Rate Card */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-emerald-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        {getIcon('chart', 'w-4 h-4 text-emerald-600')}
                        Popular Exchange Rates
                      </h4>
                      <div className="space-y-3">
                        {featuredCurrency.popularRates?.map((rate, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                            <span className="text-gray-600 dark:text-gray-400">
                              1 {featuredCurrency.code}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {rate.rate} {rate.code}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CURRENCIES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularCurrencies.map((currency) => {
            const currencyConfig = getCurrencyConfig(currency.code);
            const isExpanded = expandedCurrency === currency.code;
            const isSaved = savedCurrencies.includes(currency.code);

            return (
              <div
                key={currency.code}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Currency Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${currencyConfig.color} flex items-center justify-center text-2xl`}
                      >
                        {currencyConfig.flag}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {currency.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {currency.symbol} {currency.code}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveCurrency(currency.code)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save currency'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Exchange Rate */}
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
                        <span className="text-xs text-gray-400">
                          +{currency.regions.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Exchange Rate Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Exchange Rate (to USD):
                      </span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">
                        {currency.exchangeRate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Last Updated:
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {currency.lastUpdated || lastUpdated.split(',')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Supported Countries */}
                  {currency.supportedCountries && currency.supportedCountries.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(currency.code)}
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : `View ${currency.supportedCountries.length} countries`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${currency.supportedCountries.length} countries`}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 animate-fadeIn">
                          <div className="flex flex-wrap gap-1">
                            {currency.supportedCountries.map((country, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {country}
                              </span>
                            ))}
                          </div>
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
                    {currency.isPopular && (
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularCurrencies.length === 0 && (
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
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('credit', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.billingTitle || 'Multi-Currency Billing'}
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            {config?.billingDescription ||
              'Accept payments and send invoices in your customers\' preferred currency. Reduce friction and improve conversion rates with local currency support.'}
          </p>
          <Link
            href={config?.billingLink || '/multi-currency-billing'}
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
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
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .dark .bg-grid-pattern {
                    background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                                      linear-gradient(to bottom, #374151 1px, transparent 1px);
                }
            `}</style>
    </section>
  );
};

export default CurrencySupportSection1;