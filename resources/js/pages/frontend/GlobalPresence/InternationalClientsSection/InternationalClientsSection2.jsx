// page/frontend/GlobalPresence/InternationalClientsSection/InternationalClientsSection2.jsx

/**
 * International Clients Section - Global Client Directory Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators for client metrics
 * - Sort dropdown (Featured First, Alphabetical, By Industry, By Region)
 * - Grid/List view toggle for client browsing
 * - Multi-filter system (Region, Industry, Client Segment)
 * - Active filter indicators with count badge
 * - Favorite functionality with heart icon and counter
 * - Client segment badges (Enterprise, Mid-Market, Startup)
 * - Client logo display area
 * - Testimonial expansion with quote styling
 * - Success metrics grid with KPI values
 * - Region pills with count badges
 * - Industry pills for quick filtering
 * - Search across client names, descriptions, and tags
 * - Responsive grid and list layouts
 * - Animated gradient orbs in background
 * - Become a client CTA banner
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
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
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineGift,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiOutlineCog,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const InternationalClientsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedClient, setExpandedClient] = useState(null);
  const [favoriteClients, setFavoriteClients] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allClients = useMemo(() => config?.clients || [], [config?.clients]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allClients.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allClients.length]
  );

  const industries = useMemo(
    () =>
      config?.industries || [
        { id: 'all', label: 'All Industries' },
        { id: 'retail', label: 'Retail' },
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'logistics', label: 'Logistics' },
        { id: 'automotive', label: 'Automotive' },
        { id: 'consumer-goods', label: 'Consumer Goods' },
      ],
    [config?.industries]
  );

  const clientSegments = useMemo(
    () =>
      config?.clientSegments || [
        { id: 'all', label: 'All Segments' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'mid-market', label: 'Mid-Market' },
        { id: 'startup', label: 'Startup' },
      ],
    [config?.clientSegments]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Clients', icon: 'users', trend: '+15%', trendUp: true },
        { value: '45+', label: 'Countries', icon: 'globe', trend: '+8', trendUp: true },
        { value: '6', label: 'Continents', icon: 'globe', trend: 'All', trendUp: true },
        { value: '98%', label: 'Client Retention', icon: 'star', trend: '+2%', trendUp: true },
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
      headphones: <HiOutlineHeadphones className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      gift: <HiOutlineGift className={className} />,
      cog: <HiOutlineCog className={className} />,
    };
    return icons[iconName] || <HiOutlineGlobe className={className} />;
  }, []);

  /**
   * Returns region configuration with color and flag
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        flag: '🇺🇸',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
        borderColor: 'border-orange-200 dark:border-orange-800',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
        borderColor: 'border-red-200 dark:border-red-800',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
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
      },
      'mid-market': {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Mid-Market',
        badge: 'Mid-Market',
        icon: 'chart',
      },
      startup: {
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Startup',
        badge: 'Startup',
        icon: 'rocket',
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
   * Toggle expanded state for a client
   */
  const toggleExpanded = useCallback((clientId) => {
    setExpandedClient((prev) => (prev === clientId ? null : clientId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedIndustry('all');
    setSelectedSegment('all');
    setSortBy('featured');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

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

    if (selectedSegment !== 'all') {
      clients = clients.filter((c) => c.segment === selectedSegment);
    }

    // Sorting
    if (sortBy === 'featured') {
      clients.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'name') {
      clients.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'industry') {
      clients.sort((a, b) => (a.industry || '').localeCompare(b.industry || ''));
    } else if (sortBy === 'region') {
      clients.sort((a, b) => (a.region || '').localeCompare(b.region || ''));
    }

    return clients;
  }, [allClients, searchQuery, selectedRegion, selectedIndustry, selectedSegment, sortBy]);

  // Update region count for display
  const regionsWithCount = useMemo(() => {
    return regions.map((region) => {
      if (region.id === 'all') {
        return { ...region, count: filteredClients.length };
      }
      const count = allClients.filter((c) => c.region === region.id).length;
      return { ...region, count };
    });
  }, [regions, allClients, filteredClients.length]);

  const uniqueRegions = getUniqueRegions();
  const uniqueIndustries = getUniqueIndustries();
  const activeFiltersCount = [
    selectedRegion !== 'all',
    selectedIndustry !== 'all',
    selectedSegment !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="International Clients Directory"
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
              {getIcon('globe', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Global Clients'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Trusted by'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || '500+ Companies'}
              </span>{' '}
              {config?.title?.suffix || 'Worldwide'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations.'}
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
                config?.searchPlaceholder || 'Search clients by name, industry, or country...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search clients"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort clients"
            >
              <option value="featured">Featured First</option>
              <option value="name">Alphabetical</option>
              <option value="industry">By Industry</option>
              <option value="region">By Region</option>
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
                  {uniqueRegions.map((region) => (
                    <option key={region} value={region}>
                      {getRegionConfig(region).label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by industry"
                >
                  <option value="all">All Industries</option>
                  {uniqueIndustries.map((industry) => (
                    <option key={industry} value={industry}>
                      {getIndustryConfig(industry).label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Client Segment Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Client Segment
                </label>
                <select
                  value={selectedSegment}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by segment"
                >
                  {clientSegments.map((seg) => (
                    <option key={seg.id} value={seg.id}>
                      {seg.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort clients"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Alphabetical</option>
                  <option value="industry">By Industry</option>
                  <option value="region">By Region</option>
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
              aria-label={`Show ${region.label} clients`}
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

        {/* ==================== INDUSTRY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {industries
            .filter((i) => i.id !== 'all')
            .slice(0, 6)
            .map((industry) => (
              <button
                key={industry.id}
                onClick={() =>
                  setSelectedIndustry(selectedIndustry === industry.id ? 'all' : industry.id)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === industry.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Filter by ${industry.label}`}
              >
                {industry.label}
              </button>
            ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
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

        {/* ==================== CLIENTS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredClients.map((client) => {
            const regionConfig = getRegionConfig(client.region);
            const industryConfig = getIndustryConfig(client.industry);
            const segmentConfig = getSegmentConfig(client.segment);
            const isExpanded = expandedClient === client.id;
            const isFavorite = favoriteClients.includes(client.id);

            return (
              <div
                key={client.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Client Logo Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-6`}
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-16 w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`px-4 py-2 rounded-full ${regionConfig.color}`}>
                        {client.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  {client.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${segmentConfig.color}`}>
                      {segmentConfig.badge}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Region and Industry Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${regionConfig.color}`}>
                      {regionConfig.label}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${industryConfig.color}`}>
                      {industryConfig.label}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      href={client.link}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {client.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {client.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {getIcon('location', 'w-4 h-4')}
                    <span>
                      {client.city}, {client.country}
                    </span>
                  </div>

                  {/* Success Metrics */}
                  {client.metrics && client.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                      {client.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable Testimonial */}
                  {client.testimonial && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(client.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'Read testimonial'}
                      >
                        {isExpanded ? 'Show less' : 'Read testimonial'}
                        <HiOutlineChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 animate-fadeIn">
                          {getIcon('quote', 'w-4 h-4 text-blue-500 mb-1')}
                          <p className="text-sm italic text-gray-700 dark:text-gray-300">
                            "{client.testimonial.text}"
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            — {client.testimonial.author}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {client.tags && client.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {client.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleFavoriteClient(client.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${isFavorite
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isFavorite ? 'fill-current' : ''}`)}
                        <span>Favorite</span>
                      </button>
                    </div>
                    <Link
                      href={client.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      View Case Study
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('globe', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No clients found
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

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Client Success Stories'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive case studies, success stories, and client insights delivered to your inbox.'}
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
                aria-label="Email for client stories"
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

export default InternationalClientsSection2;