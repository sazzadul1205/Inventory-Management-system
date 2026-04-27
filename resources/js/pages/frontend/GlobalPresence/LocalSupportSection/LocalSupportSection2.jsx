// page/frontend/GlobalPresence/LocalSupportSection/LocalSupportSection2.jsx

/**
 * Local Support Section - Local Support Directory Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators for support metrics
 * - Sort dropdown (Sort by Region, Sort by City, Sort by Response Time)
 * - Grid/List view toggle for contact browsing
 * - Multi-filter system (Region, Language, Service Type)
 * - Active filter indicators with count badge
 * - Language pills with flag emojis for quick filtering
 * - Response time badge with color coding
 * - Top rated contacts row (fastest response times)
 * - Support channels grid with availability indicators
 * - Service tags with emoji-like icons
 * - Response time display on cards
 * - Save/bookmark functionality
 * - Search across cities, countries, languages, and services
 * - Responsive grid and list layouts
 * - Animated gradient orbs in background
 * - 24/7 global support CTA banner
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineSupport,
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
  HiOutlineChat,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiOutlineCamera,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const LocalSupportSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('region');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedContacts, setSavedContacts] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedContact, setExpandedContact] = useState(null);
  const [selectedService, setSelectedService] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allContacts = useMemo(() => config?.supportContacts || [], [config?.supportContacts]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allContacts.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allContacts.length]
  );

  const languages = useMemo(
    () =>
      config?.languages || [
        { id: 'all', label: 'All Languages' },
        { id: 'english', label: 'English' },
        { id: 'spanish', label: 'Spanish' },
        { id: 'french', label: 'French' },
        { id: 'german', label: 'German' },
        { id: 'portuguese', label: 'Portuguese' },
        { id: 'mandarin', label: 'Mandarin' },
        { id: 'japanese', label: 'Japanese' },
        { id: 'arabic', label: 'Arabic' },
      ],
    [config?.languages]
  );

  const supportChannels = useMemo(
    () =>
      config?.supportChannels || [
        {
          name: '24/7 Phone Support',
          icon: 'phone',
          hours: 'Always available',
          number: '+1 (888) 555-0123',
          responseTime: '< 2 min',
          satisfaction: '98%',
        },
        {
          name: 'Live Chat',
          icon: 'chat',
          hours: '24/7',
          responseTime: '< 1 min',
          satisfaction: '96%',
          available: true,
        },
        {
          name: 'Email Support',
          icon: 'mail',
          hours: 'Response within 1 hour',
          responseTime: '< 1 hour',
          satisfaction: '95%',
        },
        {
          name: 'Video Consultation',
          icon: 'video',
          hours: 'By appointment',
          responseTime: 'Scheduled',
          satisfaction: '99%',
        },
      ],
    [config?.supportChannels]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '24/7', label: 'Global Support', icon: 'clock', trend: 'Always', trendUp: true },
        { value: '15+', label: 'Languages Supported', icon: 'globe', trend: '+3', trendUp: true },
        { value: '30min', label: 'Avg Response Time', icon: 'clock', trend: '-5min', trendUp: true },
        { value: '98%', label: 'Customer Satisfaction', icon: 'star', trend: '+2%', trendUp: true },
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      support: <HiOutlineSupport className={className} />,
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
      chat: <HiOutlineChat className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      video: <HiOutlineCamera className={className} />,
    };
    return icons[iconName] || <HiOutlineSupport className={className} />;
  }, []);

  /**
   * Returns region configuration with color, flag, and timezone
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        flag: '🇺🇸',
        timezone: 'EST/PST',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
        timezone: 'GMT/CET',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
        timezone: 'SGT/JST',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
        timezone: 'BRT',
        borderColor: 'border-orange-200 dark:border-orange-800',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
        timezone: 'GST',
        borderColor: 'border-red-200 dark:border-red-800',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
        timezone: 'SAST',
        borderColor: 'border-yellow-200 dark:border-yellow-800',
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
   * Returns language flag emoji
   */
  const getLanguageFlag = useCallback((language) => {
    const flags = {
      english: '🇺🇸',
      spanish: '🇪🇸',
      french: '🇫🇷',
      german: '🇩🇪',
      portuguese: '🇧🇷',
      mandarin: '🇨🇳',
      japanese: '🇯🇵',
      arabic: '🇦🇪',
    };
    return flags[language] || '🌐';
  }, []);

  /**
   * Returns service icon emoji
   */
  const getServiceIcon = useCallback((service) => {
    const icons = {
      'Technical Support': '💻',
      'Sales Support': '💰',
      'Implementation Services': '⚙️',
      'Training': '📚',
      'Partner Support': '🤝',
      'Customer Success': '⭐',
      'API Support': '🔌',
      'Developer Support': '👨‍💻',
      'Consulting': '📊',
    };
    return icons[service] || '🔧';
  }, []);

  /**
   * Get unique services from contacts for filter dropdown
   */
  const getUniqueServices = useCallback(() => {
    const services = new Set();
    allContacts.forEach((contact) => {
      if (contact.services) {
        contact.services.forEach((service) => services.add(service));
      }
    });
    return Array.from(services).sort();
  }, [allContacts]);

  /**
   * Toggle save/bookmark status for a contact
   */
  const handleSaveContact = useCallback((contactId) => {
    setSavedContacts((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId]
    );
  }, []);

  /**
   * Toggle expanded state for a contact
   */
  const toggleExpanded = useCallback((contactId) => {
    setExpandedContact((prev) => (prev === contactId ? null : contactId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedLanguage('all');
    setSelectedService('all');
    setSortBy('region');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredContacts = useMemo(() => {
    let contacts = [...allContacts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      contacts = contacts.filter(
        (c) =>
          c.city?.toLowerCase().includes(query) ||
          c.country?.toLowerCase().includes(query) ||
          c.languages?.some((lang) => lang.toLowerCase().includes(query)) ||
          c.services?.some((service) => service.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      contacts = contacts.filter((c) => c.region === selectedRegion);
    }

    if (selectedLanguage !== 'all') {
      contacts = contacts.filter((c) => c.languages?.includes(selectedLanguage));
    }

    if (selectedService !== 'all') {
      contacts = contacts.filter((c) => c.services?.includes(selectedService));
    }

    // Sorting
    if (sortBy === 'region') {
      contacts.sort((a, b) => (a.region || '').localeCompare(b.region || ''));
    } else if (sortBy === 'name') {
      contacts.sort((a, b) => a.city.localeCompare(b.city));
    } else if (sortBy === 'responseTime') {
      contacts.sort((a, b) => (a.responseTime || 60) - (b.responseTime || 60));
    }

    return contacts;
  }, [allContacts, searchQuery, selectedRegion, selectedLanguage, selectedService, sortBy]);

  // Top rated contacts (fastest response times)
  const topRatedContacts = useMemo(() => {
    return [...allContacts]
      .sort((a, b) => (a.responseTime || 60) - (b.responseTime || 60))
      .slice(0, 4);
  }, [allContacts]);

  // Update region count for display
  const regionsWithCount = useMemo(() => {
    return regions.map((region) => {
      if (region.id === 'all') {
        return { ...region, count: filteredContacts.length };
      }
      const count = allContacts.filter((c) => c.region === region.id).length;
      return { ...region, count };
    });
  }, [regions, allContacts, filteredContacts.length]);

  const uniqueServices = getUniqueServices();
  const activeFiltersCount = [
    selectedRegion !== 'all',
    selectedLanguage !== 'all',
    selectedService !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Local Support Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('support', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Local Support'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Global'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Support'}
              </span>{' '}
              {config?.title?.suffix || 'Local Expertise'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
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
                config?.searchPlaceholder || 'Search by city, country, language, or service...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search support contacts"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort contacts"
            >
              <option value="region">Sort by Region</option>
              <option value="name">Sort by City</option>
              <option value="responseTime">Sort by Response Time</option>
            </select>

            {/* Filter Toggle Button */}
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
              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  <option value="all">All Regions</option>
                  {regions
                    .filter((r) => r.id !== 'all')
                    .map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.label}
                      </option>
                    ))}
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by language"
                >
                  {languages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              {uniqueServices.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Type
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by service type"
                  >
                    <option value="all">All Services</option>
                    {uniqueServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Sort Option */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort contacts"
                >
                  <option value="region">By Region</option>
                  <option value="name">By City</option>
                  <option value="responseTime">By Response Time</option>
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

        {/* ==================== REGION PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {regionsWithCount.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${region.label} support`}
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

        {/* ==================== LANGUAGE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {languages
            .filter((l) => l.id !== 'all')
            .slice(0, 8)
            .map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(selectedLanguage === lang.id ? 'all' : lang.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedLanguage === lang.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                aria-label={`Filter by ${lang.label}`}
              >
                <span>{getLanguageFlag(lang.id)}</span>
                {lang.label}
              </button>
            ))}
        </div>

        {/* ==================== TOP RATED SUPPORT CONTACTS ROW ==================== */}
        {topRatedContacts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Fastest Response Times
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topRatedContacts.map((contact) => {
                const regionConfig = getRegionConfig(contact.region);
                return (
                  <Link
                    key={contact.id}
                    href={`/support/${contact.id}`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center text-xl`}
                    >
                      {regionConfig.flag}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {contact.city}
                        </h3>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">
                          {contact.responseTime || 30} min
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{contact.country}</p>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== SUPPORT CHANNELS ROW ==================== */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Support Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportChannels.map((channel, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                  {getIcon(channel.icon, 'w-6 h-6 text-blue-600')}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{channel.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{channel.hours}</p>
                {channel.responseTime && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Response: {channel.responseTime}
                  </p>
                )}
                {channel.number && (
                  <a
                    href={`tel:${channel.number}`}
                    className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    {channel.number}
                  </a>
                )}
                {channel.available && (
                  <span className="inline-block mt-2 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full">
                    Available Now
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredContacts.length}
            </span>{' '}
            support locations
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== SUPPORT CONTACTS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredContacts.map((contact) => {
            const regionConfig = getRegionConfig(contact.region);
            const isExpanded = expandedContact === contact.id;
            const isSaved = savedContacts.includes(contact.id);

            return (
              <div
                key={contact.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Location Flag Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-gray-50 dark:bg-gray-700 flex items-center justify-center`}
                  >
                    <div
                      className={`w-20 h-20 rounded-full ${regionConfig.color} flex items-center justify-center text-4xl`}
                    >
                      {regionConfig.flag}
                    </div>
                  </div>
                  {contact.responseTime && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {contact.responseTime} min
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {contact.city}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.country}</p>
                    </div>
                    <button
                      onClick={() => handleSaveContact(contact.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save contact'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className={`px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                      {regionConfig.label}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{regionConfig.timezone}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {contact.address}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon('phone', 'w-4 h-4')}
                      <span>{contact.phone}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  {contact.languages && contact.languages.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {contact.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <span>{getLanguageFlag(lang)}</span>
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Services Preview */}
                  {contact.services && contact.services.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {contact.services.slice(0, 3).map((service, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full flex items-center gap-1"
                          >
                            <span>{getServiceIcon(service)}</span>
                            {service}
                          </span>
                        ))}
                        {contact.services.length > 3 && (
                          <button
                            onClick={() => toggleExpanded(contact.id)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            aria-label={`Show ${contact.services.length - 3} more services`}
                          >
                            +{contact.services.length - 3} more
                          </button>
                        )}
                      </div>
                      {isExpanded && contact.services.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-1 animate-fadeIn">
                          {contact.services.slice(3).map((service, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Get Directions
                      {getIcon('external', 'w-4 h-4')}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Email support"
                    >
                      {getIcon('mail', 'w-4 h-4')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredContacts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('support', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No support contacts found
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

        {/* ==================== 24/7 GLOBAL SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 max-w-2xl">
                Our global support team is available 24/7 to help you with any questions or issues.
                Choose your preferred contact method.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+18885550123"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                {getIcon('phone', 'w-4 h-4')}
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                {getIcon('mail', 'w-4 h-4')}
                Email Support
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Support Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new support resources, office hours, and service enhancements.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for support updates"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
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

export default LocalSupportSection2;