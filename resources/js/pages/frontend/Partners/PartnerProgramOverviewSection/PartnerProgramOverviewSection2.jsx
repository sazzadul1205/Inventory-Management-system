// frontend/Partners/PartnerProgramOverviewSection/PartnerProgramOverviewSection2.jsx

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons (hi), Heroicons 2 (hi2), FontAwesome (fa)
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
import {
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
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
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineHeart,
  HiOutlineTrendingUp,
  HiOutlineFire,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';

const PartnerProgramOverviewSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries (hi, hi2, fa)
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      // Heroicons (hi)
      usergroup: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
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
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      heart: <HiOutlineHeart className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      // FontAwesome (fa)
      quote: <FaQuoteLeft className={className} />,
      certificate: <FaCertificate className={className} />,
      // Heroicons 2 (hi2)
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns program configuration (color, icon, label, border color)
   */
  const getProgramConfig = useCallback((programType) => {
    const configs = {
      technology: {
        color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
        icon: 'chip',
        label: 'Technology Partner',
        borderColor: 'border-sky-200 dark:border-sky-800',
      },
      consulting: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Consulting Partner',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      reseller: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Reseller Partner',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      alliance: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'users',
        label: 'Strategic Alliance',
        borderColor: 'border-amber-200 dark:border-amber-800',
      },
      solution: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'cog',
        label: 'Solution Partner',
        borderColor: 'border-indigo-200 dark:border-indigo-800',
      },
    };
    return configs[programType] || configs.technology;
  }, []);

  /**
   * Returns partner tier configuration (color, icon, label, badge)
   */
  const getTierConfig = useCallback((tier) => {
    const configs = {
      platinum: {
        color: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white',
        icon: 'trophy',
        label: 'Platinum',
        badge: 'Platinum',
      },
      gold: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'star',
        label: 'Gold',
        badge: 'Gold',
      },
      silver: {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        icon: 'badge',
        label: 'Silver',
        badge: 'Silver',
      },
      registered: {
        color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
        icon: 'check',
        label: 'Registered',
        badge: 'Registered',
      },
    };
    return configs[tier] || configs.registered;
  }, []);

  /**
   * Returns region configuration with display label
   */
  const getRegionLabel = useCallback((regionId) => {
    const configs = {
      'north-america': 'North America',
      europe: 'Europe',
      'asia-pacific': 'Asia Pacific',
      'latin-america': 'Latin America',
    };
    return configs[regionId] || regionId;
  }, []);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);
  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup', count: allPartners.length },
        { id: 'technology', label: 'Technology', icon: 'chip' },
        { id: 'consulting', label: 'Consulting', icon: 'briefcase' },
        { id: 'reseller', label: 'Reseller', icon: 'globe' },
        { id: 'alliance', label: 'Alliance', icon: 'users' },
        { id: 'solution', label: 'Solution', icon: 'cog' },
      ],
    [config?.programTypes, allPartners.length]
  );
  const partnerTiers = useMemo(
    () => [
      { id: 'all', label: 'All Tiers', icon: 'trophy' },
      { id: 'platinum', label: 'Platinum', icon: 'trophy' },
      { id: 'gold', label: 'Gold', icon: 'star' },
      { id: 'silver', label: 'Silver', icon: 'badge' },
      { id: 'registered', label: 'Registered', icon: 'check' },
    ],
    []
  );
  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', flag: 'globe' },
        { id: 'north-america', label: 'North America', flag: 'globe' },
        { id: 'europe', label: 'Europe', flag: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: 'globe' },
        { id: 'latin-america', label: 'Latin America', flag: 'globe' },
      ],
    [config?.regions]
  );
  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Partners', icon: 'usergroup', trend: '+15%', trendUp: true },
        { value: '50+', label: 'Countries', icon: 'globe', trend: '+8', trendUp: true },
        { value: '$100M+', label: 'Partner Revenue', icon: 'credit', trend: '+25%', trendUp: true },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star', trend: '+2%', trendUp: true },
      ],
    [config?.stats]
  );
  const successStories = useMemo(() => config?.successStories || [], [config?.successStories]);

  // ==================== FILTERING LOGIC ====================
  const filteredPartners = useMemo(() => {
    let partners = [...allPartners];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      partners = partners.filter(
        (p) =>
          p.name?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.expertise?.some((exp) => exp.toLowerCase().includes(query))
      );
    }

    if (selectedProgram !== 'all') {
      partners = partners.filter((p) => p.program === selectedProgram);
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    if (selectedTier !== 'all') {
      partners = partners.filter((p) => p.tier === selectedTier);
    }

    // Sorting logic
    if (sortBy === 'featured') {
      partners.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'name') {
      partners.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'region') {
      partners.sort((a, b) => (a.region || '').localeCompare(b.region || ''));
    }

    return partners;
  }, [allPartners, searchQuery, selectedProgram, selectedRegion, selectedTier, sortBy]);

  // Count active filters for badge display
  const activeFiltersCount = [
    selectedProgram !== 'all',
    selectedRegion !== 'all',
    selectedTier !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  /**
   * Clears all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedRegion('all');
    setSelectedTier('all');
    setSortBy('featured');
  }, []);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Partner Program Overview - Advanced Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-sky-200 dark:bg-sky-900/20 rounded-full blur-3xl animate-blob"
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
            <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('usergroup', 'w-4 h-4 text-sky-600 dark:text-sky-400')}
              <span className="text-sm font-medium text-sky-700 dark:text-sky-300">
                {config?.badge || 'Partner Ecosystem'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Join Our'}{' '}
              <span className="bg-linear-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Partner Program'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Join a global network of trusted partners delivering innovative supply chain solutions. Grow your business with comprehensive support, training, and resources.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
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
                config?.searchPlaceholder || 'Search partners by name, expertise, or location...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search partners"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
              aria-label="Sort partners"
            >
              <option value="featured">Featured First</option>
              <option value="name">Alphabetical</option>
              <option value="region">By Region</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25'
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
              {/* Program Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partner Type
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Filter by partner type"
                >
                  <option value="all">All Types</option>
                  {programTypes
                    .filter((p) => p.id !== 'all')
                    .map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))}
                </select>
              </div>

              {/* Partner Tier Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partner Tier
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Filter by tier"
                >
                  {partnerTiers.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Sort partners"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Alphabetical</option>
                  <option value="region">By Region</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== PROGRAM TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {programTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedProgram(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedProgram === type.id
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${type.label}`}
            >
              {getIcon(type.icon, 'w-4 h-4')}
              {type.label}
              {type.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedProgram === type.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {type.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== PARTNER TIERS PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {partnerTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedTier === tier.id
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${tier.label} partners`}
            >
              {getIcon(tier.icon, 'w-4 h-4')}
              {tier.label}
            </button>
          ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredPartners.length}
            </span>{' '}
            partners
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PARTNERS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredPartners.map((partner) => {
            const programConfig = getProgramConfig(partner.program);
            const tierConfig = getTierConfig(partner.tier);
            const regionLabel = getRegionLabel(partner.region);
            const isExpanded = expandedPartner === partner.id;

            return (
              <div
                key={partner.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Partner Logo Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-6`}
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`px-4 py-2 rounded-full ${programConfig.color}`}>
                        {partner.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  {partner.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${tierConfig.color} shadow-sm`}
                    >
                      {tierConfig.badge}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Program Type Badge and Region */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${programConfig.color}`}>
                      {programConfig.label}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      {getIcon('globe', 'w-3 h-3')}
                      <span>{regionLabel}</span>
                    </div>
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      href={partner.link}
                      className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {partner.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Expertise Tags with Expandable */}
                  {partner.expertise && partner.expertise.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {partner.expertise.slice(0, 3).map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                        {partner.expertise.length > 3 && (
                          <button
                            onClick={() => setExpandedPartner(isExpanded ? null : partner.id)}
                            className="text-xs text-sky-600 hover:underline"
                            aria-label={isExpanded ? 'Show less' : `Show ${partner.expertise.length - 3} more`}
                          >
                            +{partner.expertise.length - 3} more
                          </button>
                        )}
                      </div>

                      {isExpanded && partner.expertise.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-2 animate-fadeIn">
                          {partner.expertise.slice(3).map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      {partner.certified && (
                        <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          {getIcon('badge', 'w-4 h-4')}
                          <span>Certified</span>
                        </div>
                      )}
                      {partner.successStories && (
                        <div className="flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400">
                          {getIcon('trophy', 'w-4 h-4')}
                          <span>{partner.successStories} stories</span>
                        </div>
                      )}
                    </div>
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('usergroup', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-sky-600 dark:text-sky-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== PARTNER SUCCESS STORIES ==================== */}
        {successStories.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('trophy', 'w-6 h-6 text-amber-500')}
              Partner Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {story.logo && (
                      <img
                        src={story.logo}
                        alt={story.partner}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{story.partner}</h4>
                      <p className="text-xs text-gray-500">{story.industry}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{story.quote}"</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">
                        {story.result}
                      </span>
                      <Link
                        href={story.link}
                        className="text-sky-600 text-sm font-semibold hover:underline"
                      >
                        Read Story →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== BECOME A PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-sky-600 to-purple-600 dark:from-sky-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Join Our Partner Program?</h3>
              <p className="text-sky-100 max-w-2xl">
                Take the first step toward growing your business with SupplyChainPro. Apply today and
                start your journey as a trusted partner.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/become-partner"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300"
              >
                Apply Now
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-sales"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Contact Sales
                {getIcon('mail', 'w-4 h-4')}
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-sky-600 dark:text-sky-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Partner Ecosystem Insights'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Receive the latest partner news, technical training schedules, and co-marketing opportunities.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for partner updates"
                required
              />
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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

export default PartnerProgramOverviewSection2;