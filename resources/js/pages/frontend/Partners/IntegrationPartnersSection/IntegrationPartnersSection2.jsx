// page/frontend/Partners/IntegrationPartnersSection/IntegrationPartnersSection2.jsx

/**
 * Integration Partners Section - Integration Directory Hub
 *
 * Unique design elements:
 * - Stats cards with trend indicators for integration metrics
 * - Sort dropdown (Featured First, Alphabetical, By Category)
 * - Grid/List view toggle for partner browsing
 * - Multi-filter system (Category, Integration Type, Certification Level)
 * - Active filter indicators with count badge
 * - Favorite functionality with heart icon and persistence
 * - Featured partners row with horizontal cards
 * - Certification level badges (Premier, Advanced, Certified)
 * - Integration type badges with emoji-like icons
 * - Category pills with count badges
 * - Documentation link with document icon
 * - Integration features expansion with checkmark list
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
  HiOutlineLink,
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
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
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
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';

const IntegrationPartnersSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [favoritePartners, setFavoritePartners] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertification, setSelectedCertification] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');


  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Integrations', icon: 'link', count: allPartners.length },
        { id: 'erp', label: 'ERP Systems', icon: 'building' },
        { id: 'ecommerce', label: 'E-commerce Platforms', icon: 'globe' },
        { id: 'crm', label: 'CRM Systems', icon: 'users' },
        { id: 'wms', label: 'WMS Providers', icon: 'building' },
        { id: 'tms', label: 'TMS Providers', icon: 'globe' },
        { id: 'payment', label: 'Payment Gateways', icon: 'credit' },
      ],
    [config?.categories, allPartners.length]
  );

  const integrationTypes = useMemo(
    () =>
      config?.integrationTypes || [
        { id: 'all', label: 'All Types', icon: 'code' },
        { id: 'api', label: 'REST API', icon: 'code' },
        { id: 'pre-built', label: 'Pre-built Connector', icon: 'link' },
        { id: 'sdk', label: 'SDK', icon: 'template' },
        { id: 'webhook', label: 'Webhook', icon: 'refresh' },
      ],
    [config?.integrationTypes]
  );

  const certificationLevels = useMemo(
    () =>
      config?.certificationLevels || [
        { id: 'all', label: 'All Levels' },
        { id: 'premier', label: 'Premier' },
        { id: 'advanced', label: 'Advanced' },
        { id: 'certified', label: 'Certified' },
      ],
    [config?.certificationLevels]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '150+', label: 'Pre-built Integrations', icon: 'link', trend: '+25', trendUp: true },
        { value: '50+', label: 'Technology Partners', icon: 'chip', trend: '+8', trendUp: true },
        { value: '10k+', label: 'API Calls Daily', icon: 'code', trend: '+30%', trendUp: true },
        { value: '99.9%', label: 'Uptime', icon: 'shield', trend: '99.9%', trendUp: true },
      ],
    [config?.stats]
  );

  const featuredPartners = useMemo(() => config?.featuredPartners || [], [config?.featuredPartners]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      link: <HiOutlineLink className={className} />,
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
      database: <HiOutlineDatabase className={className} />,
      server: <HiOutlineServer className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      heart: <HiOutlineHeart className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineLink className={className} />;
  }, []);

  /**
   * Returns category badge configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      erp: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'building',
        label: 'ERP Systems',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
      ecommerce: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'E-commerce Platforms',
        borderColor: 'border-purple-200 dark:border-purple-800',
      },
      crm: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'CRM Systems',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
      },
      wms: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'building',
        label: 'WMS Providers',
        borderColor: 'border-orange-200 dark:border-orange-800',
      },
      tms: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'TMS Providers',
        borderColor: 'border-red-200 dark:border-red-800',
      },
      payment: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'credit',
        label: 'Payment Gateways',
        borderColor: 'border-indigo-200 dark:border-indigo-800',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'link',
        label: 'Integration',
      }
    );
  }, []);

  /**
   * Returns integration type badge configuration
   */
  const getTypeConfig = useCallback((typeId) => {
    const configs = {
      api: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'REST API',
        badge: 'REST API',
        icon: 'code',
      },
      'pre-built': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Pre-built Connector',
        badge: 'Pre-built Connector',
        icon: 'link',
      },
      sdk: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'SDK',
        badge: 'SDK',
        icon: 'template',
      },
      webhook: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Webhook',
        badge: 'Webhook',
        icon: 'refresh',
      },
    };
    return (
      configs[typeId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: typeId,
        badge: typeId,
        icon: 'code',
      }
    );
  }, []);

  /**
   * Returns certification level configuration
   */
  const getCertificationConfig = useCallback((level) => {
    const configs = {
      premier: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        badge: 'Premier',
        icon: 'star',
      },
      advanced: {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        badge: 'Advanced',
        icon: 'badge',
      },
      certified: {
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
        badge: 'Certified',
        icon: 'check',
      },
    };
    return (
      configs[level] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        badge: level || 'Registered',
        icon: 'check',
      }
    );
  }, []);

  /**
   * Toggle favorite status for a partner
   */
  const handleFavoritePartner = useCallback((partnerId) => {
    setFavoritePartners((prev) =>
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
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedCertification('all');
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

    if (selectedCategory !== 'all') {
      partners = partners.filter((p) => p.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      partners = partners.filter((p) => p.integrationType === selectedType);
    }

    if (selectedCertification !== 'all') {
      partners = partners.filter((p) => p.certification === selectedCertification);
    }

    // Sorting
    if (sortBy === 'featured') {
      partners.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'name') {
      partners.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      partners.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
    }

    return partners;
  }, [allPartners, searchQuery, selectedCategory, selectedType, selectedCertification, sortBy]);

  // Update category count for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredPartners.length };
      }
      const count = allPartners.filter((p) => p.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allPartners, filteredPartners.length]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedType !== 'all',
    selectedCertification !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Integration Partners Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob"
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
            <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('link', 'w-4 h-4 text-purple-600 dark:text-purple-400')}
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                {config?.badge || 'Integration Partners'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Connect Your'}{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Ecosystem'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Seamlessly connect SupplyChainPro with your existing business applications. Our integration partners provide pre-built connectors and APIs for rapid deployment.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
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
                config?.searchPlaceholder || 'Search integrations by name, category, or technology...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search integration partners"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
              aria-label="Sort partners"
            >
              <option value="featured">Featured First</option>
              <option value="name">Alphabetical</option>
              <option value="category">By Category</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
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
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {categories
                    .filter((c) => c.id !== 'all')
                    .map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                </select>
              </div>

              {/* Integration Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Integration Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Filter by integration type"
                >
                  {integrationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Certification Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Certification Level
                </label>
                <select
                  value={selectedCertification}
                  onChange={(e) => setSelectedCertification(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Filter by certification level"
                >
                  {certificationLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                  aria-label="Sort partners"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Alphabetical</option>
                  <option value="category">By Category</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== CATEGORY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categoriesWithCount.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label}`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
              {category.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== INTEGRATION TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {integrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedType === type.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${type.label} integrations`}
            >
              {getIcon(type.icon, 'w-4 h-4')}
              {type.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED PARTNERS ROW ==================== */}
        {featuredPartners.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Featured Integration Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPartners.map((partner) => {
                const categoryConfig = getCategoryConfig(partner.category);
                const certConfig = getCertificationConfig(partner.certification);
                return (
                  <Link
                    key={partner.id}
                    href={partner.link}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-xl ${categoryConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(categoryConfig.icon, 'w-6 h-6')}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${certConfig.color}`}>
                          {certConfig.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                        {partner.description}
                      </p>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
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
            integration partners
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PARTNERS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}
        >
          {filteredPartners.map((partner) => {
            const categoryConfig = getCategoryConfig(partner.category);
            const typeConfig = getTypeConfig(partner.integrationType);
            const certConfig = getCertificationConfig(partner.certification);
            const isExpanded = expandedPartner === partner.id;
            const isFavorite = favoritePartners.includes(partner.id);

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
                      <div className={`px-4 py-2 rounded-full ${categoryConfig.color}`}>
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
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${certConfig.color}`}>
                      {certConfig.badge}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Category and Type Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${typeConfig.color}`}>
                      {typeConfig.badge}
                    </span>
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      href={partner.link}
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {partner.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Integration Features */}
                  {partner.features && partner.features.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(partner.id)}
                        className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={
                          isExpanded
                            ? 'Show less'
                            : `View ${partner.features.length} features`
                        }
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${partner.features.length} features`}
                        <HiOutlineChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 animate-fadeIn">
                          {partner.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {partner.tags && partner.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.tags.slice(0, 3).map((tag, idx) => (
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
                        onClick={() => handleFavoritePartner(partner.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${isFavorite
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isFavorite ? 'fill-current' : ''}`)}
                        <span>Favorite</span>
                      </button>
                      {partner.docsLink && (
                        <a
                          href={partner.docsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors"
                          aria-label="View documentation"
                        >
                          {getIcon('document', 'w-4 h-4')}
                        </a>
                      )}
                    </div>
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
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
              {getIcon('link', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No integration partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BECOME AN INTEGRATION PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Become an Integration Partner</h3>
              <p className="text-purple-100 max-w-2xl">
                Join our ecosystem of integration partners. Build pre-built connectors and reach
                thousands of SupplyChainPro customers.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/become-integration-partner"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                Apply Now
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partner-program"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Learn More
                {getIcon('external', 'w-4 h-4')}
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-purple-600 dark:text-purple-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Integration Partner Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates on new integrations, API changes, and developer resources.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for integration updates"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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

export default IntegrationPartnersSection2;