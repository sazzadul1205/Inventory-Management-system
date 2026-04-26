// page/frontend/Partners/PartnerDirectorySection/PartnerDirectorySection2.jsx

/**
 * Partner Directory Section - Partner Directory Hub with Advanced Filters
 *
 * Unique design elements:
 * - Stats cards with trend indicators for partner metrics
 * - Sort dropdown (Featured First, Top Rated, Alphabetical)
 * - Grid/List view toggle for partner browsing
 * - Multi-filter system (Partner Type, Partner Tier, Region, Industry)
 * - Active filter indicators with count badge
 * - Partner tier badges (Premier, Advanced, Certified)
 * - Rating display with star icons
 * - Top Rated partners row with horizontal cards
 * - Favorite/Save functionality
 * - Partner logo display area
 * - Expertise tags with expandable show more
 * - Location display with region flags
 * - Contact partner button
 * - Search across partner names, descriptions, and tags
 * - Responsive grid and list layouts
 * - Animated gradient orbs in background
 * - Become a partner CTA banner
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
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
  HiOutlinePhone,
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
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineRocketLaunch } from 'react-icons/hi2';

const PartnerDirectorySection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
  const [savedPartners, setSavedPartners] = useState([]);
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);

  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup', count: allPartners.length },
        { id: 'technology', label: 'Technology Partners', icon: 'chip' },
        { id: 'solution', label: 'Solution Partners', icon: 'briefcase' },
        { id: 'consulting', label: 'Consulting Partners', icon: 'users' },
        { id: 'reseller', label: 'Reseller Partners', icon: 'globe' },
        { id: 'integration', label: 'Integration Partners', icon: 'code' },
      ],
    [config?.programTypes, allPartners.length]
  );

  const partnerTiers = useMemo(
    () =>
      config?.partnerTiers || [
        { id: 'all', label: 'All Tiers', icon: 'trophy' },
        { id: 'premier', label: 'Premier', icon: 'star' },
        { id: 'advanced', label: 'Advanced', icon: 'badge' },
        { id: 'certified', label: 'Certified', icon: 'check' },
      ],
    [config?.partnerTiers]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Partners', icon: 'usergroup', trend: '+15%', trendUp: true },
        { value: '50+', label: 'Countries', icon: 'globe', trend: '+8', trendUp: true },
        { value: '1000+', label: 'Successful Projects', icon: 'trophy', trend: '+200', trendUp: true },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star', trend: '+2%', trendUp: true },
      ],
    [config?.stats]
  );

  // Top rated partners (top 4 by rating)
  const topRatedPartners = useMemo(() => {
    return [...allPartners].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 4);
  }, [allPartners]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      usergroup: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
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
      quote: <HiOutlineQuote className={className} />,
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
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns program badge configuration with color and label
   */
  const getProgramConfig = useCallback((programId) => {
    const configs = {
      technology: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'chip',
        label: 'Technology Partner',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
      solution: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Solution Partner',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      consulting: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'Consulting Partner',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      reseller: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Reseller Partner',
        borderColor: 'border-orange-200 dark:border-orange-800',
      },
      integration: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'code',
        label: 'Integration Partner',
        borderColor: 'border-indigo-200 dark:border-indigo-800',
      },
    };
    return (
      configs[programId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'usergroup',
        label: 'Partner',
      }
    );
  }, []);

  /**
   * Returns region configuration with flag emoji
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America' },
      europe: { flag: '🇪🇺', label: 'Europe' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific' },
      'latin-america': { flag: '🌎', label: 'Latin America' },
      'middle-east': { flag: '🕌', label: 'Middle East' },
      africa: { flag: '🌍', label: 'Africa' },
    };
    return configs[regionId] || { flag: '🌐', label: regionId || 'Global' };
  }, []);

  /**
   * Returns tier badge configuration
   */
  const getTierConfig = useCallback((tierId) => {
    const configs = {
      premier: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'star',
        label: 'Premier',
        badge: 'Premier',
      },
      advanced: {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'badge',
        label: 'Advanced',
        badge: 'Advanced',
      },
      certified: {
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'check',
        label: 'Certified',
        badge: 'Certified',
      },
    };
    return (
      configs[tierId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: 'Registered',
        badge: 'Registered',
      }
    );
  }, []);

  /**
   * Returns industry badge configuration
   */
  const getIndustryConfig = useCallback((industryId) => {
    const configs = {
      retail: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Retail',
      },
      manufacturing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Manufacturing',
      },
      healthcare: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Healthcare',
      },
      logistics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Logistics',
      },
      automotive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Automotive',
      },
      'consumer-goods': {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        label: 'Consumer Goods',
      },
    };
    return (
      configs[industryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: industryId,
      }
    );
  }, []);

  /**
   * Get unique regions from partners for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regionSet = new Set();
    allPartners.forEach((partner) => {
      if (partner.region) {
        regionSet.add(partner.region);
      }
    });
    return Array.from(regionSet);
  }, [allPartners]);

  /**
   * Get unique industries from partners for filter dropdown
   */
  const getUniqueIndustries = useCallback(() => {
    const industrySet = new Set();
    allPartners.forEach((partner) => {
      if (partner.industries) {
        partner.industries.forEach((industry) => industrySet.add(industry));
      }
    });
    return Array.from(industrySet);
  }, [allPartners]);

  /**
   * Toggle save/bookmark status for a partner
   */
  const handleSavePartner = useCallback((partnerId) => {
    setSavedPartners((prev) =>
      prev.includes(partnerId) ? prev.filter((id) => id !== partnerId) : [...prev, partnerId]
    );
  }, []);

  /**
   * Toggle expanded state for a partner
   */
  const toggleExpanded = useCallback((partnerId) => {
    setExpandedPartner((prev) => (prev === partnerId ? null : partnerId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedRegion('all');
    setSelectedIndustry('all');
    setSelectedTier('all');
    setSortBy('featured');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================

  const filteredPartners = useMemo(() => {
    let partners = [...allPartners];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      partners = partners.filter(
        (p) =>
          p.name?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedProgram !== 'all') {
      partners = partners.filter((p) => p.program === selectedProgram);
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    if (selectedIndustry !== 'all') {
      partners = partners.filter((p) => p.industries?.includes(selectedIndustry));
    }

    if (selectedTier !== 'all') {
      partners = partners.filter((p) => p.tier === selectedTier);
    }

    // Sorting
    if (sortBy === 'featured') {
      partners.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'rating') {
      partners.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'name') {
      partners.sort((a, b) => a.name.localeCompare(b.name));
    }

    return partners;
  }, [allPartners, searchQuery, selectedProgram, selectedRegion, selectedIndustry, selectedTier, sortBy]);

  // Update program count for display
  const programTypesWithCount = useMemo(() => {
    return programTypes.map((prog) => {
      if (prog.id === 'all') {
        return { ...prog, count: filteredPartners.length };
      }
      const count = allPartners.filter((p) => p.program === prog.id).length;
      return { ...prog, count };
    });
  }, [programTypes, allPartners, filteredPartners.length]);

  const uniqueRegions = getUniqueRegions();
  const uniqueIndustries = getUniqueIndustries();
  const activeFiltersCount = [
    selectedProgram !== 'all',
    selectedRegion !== 'all',
    selectedIndustry !== 'all',
    selectedTier !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Partner Directory"
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
              {getIcon('usergroup', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Partner Directory'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Find the'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Right Partner'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.'}
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
                config?.searchPlaceholder || 'Search partners by name, expertise, or location...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search partners"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort partners"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Top Rated</option>
              <option value="name">Alphabetical</option>
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
              {/* Program Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partner Type
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
              {uniqueRegions.length > 0 && (
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
              )}

              {/* Industry Filter */}
              {uniqueIndustries.length > 0 && (
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
              )}
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

        {/* ==================== PROGRAM TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {programTypesWithCount.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedProgram === program.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${program.label}`}
            >
              {getIcon(program.icon, 'w-4 h-4')}
              {program.label}
              {program.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedProgram === program.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {program.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== TOP RATED PARTNERS ROW ==================== */}
        {topRatedPartners.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Top Rated Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topRatedPartners.map((partner) => {
                const programConfig = getProgramConfig(partner.program);
                const tierConfig = getTierConfig(partner.tier);
                return (
                  <Link
                    key={partner.id}
                    href={partner.link}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(programConfig.icon, 'w-5 h-5')}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                          {tierConfig.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {getIcon('star', 'w-3 h-3 text-yellow-500')}
                          <span className="text-xs font-medium">{partner.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({partner.reviews} reviews)</span>
                      </div>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

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
            const regionConfig = getRegionConfig(partner.region);
            const tierConfig = getTierConfig(partner.tier);
            const isExpanded = expandedPartner === partner.id;
            const isSaved = savedPartners.includes(partner.id);

            return (
              <div
                key={partner.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Partner Logo Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
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
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}>
                      {tierConfig.badge}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Partner Name and Program */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        <Link
                          href={partner.link}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {partner.name}
                        </Link>
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                        {programConfig.label}
                      </span>
                    </div>
                    <button
                      onClick={() => handleSavePartner(partner.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save partner'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Rating */}
                  {partner.rating && (
                    <div className="flex items-center gap-2 mt-2 mb-3">
                      <div className="flex items-center gap-1">
                        {getIcon('star', 'w-4 h-4 text-yellow-500')}
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {partner.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">({partner.reviews} reviews)</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Expertise Tags */}
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
                            onClick={() => toggleExpanded(partner.id)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            aria-label={`Show ${partner.expertise.length - 3} more expertise areas`}
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

                  {/* Location and Industries */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      {getIcon('location', 'w-4 h-4')}
                      <span>{partner.location}</span>
                      <span className="text-xs">{regionConfig.flag}</span>
                    </div>
                    {partner.industries && partner.industries.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {partner.industries.slice(0, 2).map((industry, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-0.5 rounded-full ${getIndustryConfig(industry).color}`}
                          >
                            {getIndustryConfig(industry).label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={partner.contactEmail ? `mailto:${partner.contactEmail}` : partner.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                      aria-label="Contact partner"
                    >
                      Contact Partner
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href={partner.link}
                      className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                    >
                      View Profile →
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
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BECOME A PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Become a Partner</h3>
              <p className="text-blue-100 max-w-2xl">
                Join our global partner ecosystem and get listed in the partner directory. Reach
                thousands of potential customers.
              </p>
            </div>
            <Link
              href="/become-partner"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Apply Now
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Partner Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new partners, success stories, and partner program news.'}
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
                aria-label="Email for partner updates"
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default PartnerDirectorySection2;