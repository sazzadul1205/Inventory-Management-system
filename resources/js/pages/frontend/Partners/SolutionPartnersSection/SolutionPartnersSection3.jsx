// page/frontend/Partners/SolutionPartnersSection/SolutionPartnersSection3.jsx

/**
 * Solution Partners Section - Partners Hub with Modal
 *
 * Unique design elements:
 * - Tabbed interface (All Partners, Featured, Favorites)
 * - Featured partners carousel with auto-play and manual navigation
 * - Partner detail modal with full information
 * - Favorites tab with localStorage persistence
 * - Success stories section with customer testimonials
 * - Favorite functionality with heart icon and persistence
 * - Industry filter dropdown
 * - Solution area filter dropdown
 * - Region filter dropdown
 * - Search across partner names, descriptions, and tags
 * - Success metrics display with KPI values
 * - Certified badge indicator
 * - Partner tier badges (Premier, Advanced, Certified)
 * - Solution area badges with emoji-like icons
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
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineBriefcase,
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
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineHeart,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineDatabase,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const SolutionPartnersSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [favoritePartners, setFavoritePartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // ==================== REFS ====================
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);
  const featuredPartners = useMemo(() => config?.featuredPartners || [], [config?.featuredPartners]);
  const successStories = useMemo(() => config?.successStories || [], [config?.successStories]);

  const industries = useMemo(
    () =>
      config?.industries || [
        { id: 'all', label: 'All Industries', icon: 'globe' },
        { id: 'retail', label: 'Retail', icon: 'building' },
        { id: 'manufacturing', label: 'Manufacturing', icon: 'cog' },
        { id: 'healthcare', label: 'Healthcare', icon: 'shield' },
        { id: 'logistics', label: 'Logistics', icon: 'globe' },
        { id: 'automotive', label: 'Automotive', icon: 'bolt' },
        { id: 'consumer-goods', label: 'Consumer Goods', icon: 'gift' },
      ],
    [config?.industries]
  );

  const solutionAreas = useMemo(
    () =>
      config?.solutionAreas || [
        { id: 'all', label: 'All Solutions', icon: 'cog' },
        { id: 'inventory', label: 'Inventory Optimization', icon: 'database' },
        { id: 'warehouse', label: 'Warehouse Management', icon: 'building' },
        { id: 'transportation', label: 'Transportation Management', icon: 'globe' },
        { id: 'analytics', label: 'Supply Chain Analytics', icon: 'chart' },
        { id: 'procurement', label: 'Procurement Solutions', icon: 'credit' },
        { id: 'planning', label: 'Supply Chain Planning', icon: 'calendar' },
      ],
    [config?.solutionAreas]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'all', label: 'All Partners', icon: 'briefcase' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '100+', label: 'Solution Partners', icon: 'briefcase' },
        { value: '50+', label: 'Industries Served', icon: 'globe' },
        { value: '500+', label: 'Successful Deployments', icon: 'trophy' },
        { value: '95%', label: 'Customer Satisfaction', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteSolutionPartners');
    if (saved) setFavoritePartners(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteSolutionPartners', JSON.stringify(favoritePartners));
  }, [favoritePartners]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      briefcase: <HiOutlineBriefcase className={className} />,
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
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      heart: <HiOutlineHeart className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      database: <HiOutlineDatabase className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineBriefcase className={className} />;
  }, []);

  /**
   * Returns industry configuration with color, icon, and label
   */
  const getIndustryConfig = useCallback((industryId) => {
    const configs = {
      retail: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'building',
        label: 'Retail',
        gradient: 'from-blue-500 to-blue-600',
      },
      manufacturing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'cog',
        label: 'Manufacturing',
        gradient: 'from-purple-500 to-purple-600',
      },
      healthcare: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'shield',
        label: 'Healthcare',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      logistics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Logistics',
        gradient: 'from-orange-500 to-orange-600',
      },
      automotive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'bolt',
        label: 'Automotive',
        gradient: 'from-red-500 to-red-600',
      },
      'consumer-goods': {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'gift',
        label: 'Consumer Goods',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return (
      configs[industryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'briefcase',
        label: 'Industry Partner',
      }
    );
  }, []);

  /**
   * Returns solution area badge configuration
   */
  const getSolutionConfig = useCallback((solutionId) => {
    const configs = {
      inventory: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'database',
        label: 'Inventory Optimization',
        badge: 'Inventory',
        gradient: 'from-blue-500 to-blue-600',
      },
      warehouse: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'building',
        label: 'Warehouse Management',
        badge: 'Warehouse',
        gradient: 'from-purple-500 to-purple-600',
      },
      transportation: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Transportation Management',
        badge: 'Transportation',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      analytics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'chart',
        label: 'Supply Chain Analytics',
        badge: 'Analytics',
        gradient: 'from-orange-500 to-orange-600',
      },
      procurement: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'credit',
        label: 'Procurement Solutions',
        badge: 'Procurement',
        gradient: 'from-red-500 to-red-600',
      },
      planning: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'calendar',
        label: 'Supply Chain Planning',
        badge: 'Planning',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return (
      configs[solutionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'briefcase',
        label: solutionId,
        badge: solutionId,
      }
    );
  }, []);

  /**
   * Returns partner tier configuration
   */
  const getTierConfig = useCallback((tier) => {
    const configs = {
      premier: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'star',
        label: 'Premier',
        badge: 'Premier',
        gradient: 'from-yellow-500 to-amber-500',
      },
      advanced: {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'badge',
        label: 'Advanced',
        badge: 'Advanced',
        gradient: 'from-blue-500 to-blue-600',
      },
      certified: {
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'check',
        label: 'Certified',
        badge: 'Certified',
        gradient: 'from-emerald-500 to-emerald-600',
      },
    };
    return (
      configs[tier] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'briefcase',
        label: tier,
        badge: tier,
      }
    );
  }, []);

  /**
   * Get unique regions from partners for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regions = new Set();
    allPartners.forEach((partner) => {
      if (partner.region) {
        regions.add(partner.region);
      }
    });
    return Array.from(regions);
  }, [allPartners]);

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
   * Open partner modal
   */
  const openPartnerModal = useCallback((partner) => {
    setSelectedPartner(partner);
    setShowPartnerModal(true);
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredPartners.length || 1));
  }, [featuredPartners.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredPartners.length || 1)) % (featuredPartners.length || 1));
  }, [featuredPartners.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedIndustry('all');
    setSelectedSolution('all');
    setSelectedRegion('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredPartners.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredPartners.length, nextSlide]);

  // ==================== FILTERING LOGIC ====================

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

    if (selectedIndustry !== 'all') {
      partners = partners.filter((p) => p.industry === selectedIndustry);
    }

    if (selectedSolution !== 'all') {
      partners = partners.filter((p) => p.solutionAreas?.includes(selectedSolution));
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    // Tab-based filtering
    if (activeTab === 'featured') {
      partners = partners.filter((p) => p.isFeatured);
    } else if (activeTab === 'favorites') {
      partners = partners.filter((p) => favoritePartners.includes(p.id));
    }

    return partners;
  }, [allPartners, searchQuery, selectedIndustry, selectedSolution, selectedRegion, activeTab, favoritePartners]);

  const uniqueRegions = getUniqueRegions();
  const activeFiltersCount = [
    selectedIndustry !== 'all',
    selectedSolution !== 'all',
    selectedRegion !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Solution Partners Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-solution" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-solution)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('briefcase', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Solution Partners'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Expert'}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Solution Partners'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies.'}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-emerald-600 dark:text-emerald-400')}
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
              {getIcon(tab.icon, 'w-4 h-4')}
              {tab.label}
              {tab.id === 'favorites' && favoritePartners.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {favoritePartners.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED PARTNERS CAROUSEL ==================== */}
        {activeTab === 'all' && featuredPartners.length > 0 && (
          <div className="relative mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Featured Solution Partners
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredPartners.map((partner) => {
                  const industryConfig = getIndustryConfig(partner.industry);
                  const tierConfig = getTierConfig(partner.tier);
                  return (
                    <div
                      key={partner.id}
                      className="w-full shrink-0 cursor-pointer"
                      onClick={() => openPartnerModal(partner)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPartnerModal(partner)}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${industryConfig.color}`}
                            >
                              {industryConfig.label}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}
                            >
                              {tierConfig.badge}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            {partner.logo && (
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 w-auto object-contain"
                                loading="lazy"
                              />
                            )}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                              {partner.name}
                            </h2>
                          </div>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">
                            {partner.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {partner.solutionAreas?.slice(0, 3).map((area, idx) => (
                              <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                {getSolutionConfig(area).badge}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFavoritePartner(partner.id);
                              }}
                              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${favoritePartners.includes(partner.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
                                }`}
                              aria-label={favoritePartners.includes(partner.id) ? 'Remove from favorites' : 'Add to favorites'}
                            >
                              {getIcon('heart', 'w-4 h-4')}
                              {favoritePartners.includes(partner.id) ? 'Favorited' : 'Favorite'}
                            </button>
                            <Link
                              href={partner.link}
                              className="px-4 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredPartners.length > 1 && (
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
                </>
              )}

              {/* Carousel Dots */}
              {featuredPartners.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredPartners.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon('search', 'w-5 h-5 text-gray-400')}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partners by name, industry, or solution area..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search solution partners"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
              aria-label="Filter by industry"
            >
              <option value="all">All Industries</option>
              {industries
                .filter((i) => i.id !== 'all')
                .map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.label}
                  </option>
                ))}
            </select>
            <select
              value={selectedSolution}
              onChange={(e) => setSelectedSolution(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
              aria-label="Filter by solution area"
            >
              {solutionAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
            {uniqueRegions.length > 0 && (
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                aria-label="Filter by region"
              >
                <option value="all">All Regions</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                ? 'bg-emerald-600 text-white'
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

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Industries</option>
                  {industries
                    .filter((i) => i.id !== 'all')
                    .map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.label}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Solution Area
                </label>
                <select
                  value={selectedSolution}
                  onChange={(e) => setSelectedSolution(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                >
                  {solutionAreas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>
              {uniqueRegions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Region
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Regions</option>
                    {uniqueRegions.map((region) => (
                      <option key={region} value={region}>
                        {region}
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
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== INDUSTRY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedIndustry === industry.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${industry.label} partners`}
            >
              {getIcon(industry.icon, 'w-4 h-4')}
              {industry.label}
            </button>
          ))}
        </div>

        {/* ==================== SOLUTION AREA PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {solutionAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedSolution(area.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedSolution === area.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${area.label} solutions`}
            >
              {getIcon(area.icon, 'w-4 h-4')}
              {area.label}
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
            solution partners
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PARTNERS GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPartners.map((partner) => {
            const industryConfig = getIndustryConfig(partner.industry);
            const tierConfig = getTierConfig(partner.tier);
            const isExpanded = expandedPartner === partner.id;
            const isFavorite = favoritePartners.includes(partner.id);

            return (
              <div
                key={partner.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => openPartnerModal(partner)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPartnerModal(partner)}
              >
                <div className="p-5">
                  {/* Partner Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-xl bg-linear-to-r ${industryConfig.gradient} flex items-center justify-center`}
                        >
                          {getIcon(industryConfig.icon, 'w-5 h-5 text-white')}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                        <div className="flex items-center gap-1 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${industryConfig.color}`}>
                            {industryConfig.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoritePartner(partner.id);
                      }}
                      className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                      {tierConfig.badge}
                    </span>
                    {partner.location && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        {getIcon('location', 'w-3 h-3')}
                        {partner.location}
                      </span>
                    )}
                  </div>

                  {/* Solution Areas */}
                  {partner.solutionAreas && partner.solutionAreas.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {partner.solutionAreas.slice(0, 3).map((area, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                          >
                            {getSolutionConfig(area).badge}
                          </span>
                        ))}
                        {partner.solutionAreas.length > 3 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpanded(partner.id);
                            }}
                            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
                            aria-label={`Show ${partner.solutionAreas.length - 3} more solutions`}
                          >
                            +{partner.solutionAreas.length - 3}
                          </button>
                        )}
                      </div>
                      {isExpanded && partner.solutionAreas.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-1 animate-fadeIn">
                          {partner.solutionAreas.slice(3).map((area, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                            >
                              {getSolutionConfig(area).badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Success Metrics */}
                  {partner.successMetrics && partner.successMetrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-1 mb-3 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                      {partner.successMetrics.slice(0, 3).map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-gray-500 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      {partner.isCertified && (
                        <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          {getIcon('badge', 'w-4 h-4')}
                          <span>Certified</span>
                        </div>
                      )}
                      {partner.successStoriesCount && (
                        <span className="text-xs text-blue-600 dark:text-blue-400">
                          {partner.successStoriesCount} stories
                        </span>
                      )}
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline">
                      Learn More →
                    </span>
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
              {getIcon('briefcase', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No solution partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites'
                ? "You haven't favorited any partners yet."
                : 'Try adjusting your search or filter criteria'}
            </p>
            {activeTab === 'favorites' && (
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Browse All Partners
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline ml-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== SUCCESS STORIES SECTION ==================== */}
        {successStories.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('trophy', 'w-5 h-5 text-yellow-500')}
              Partner Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={story.logo}
                      alt={story.partner}
                      className="h-10 w-auto object-contain"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{story.partner}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{story.industry}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{story.quote}"</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        {story.result}
                      </span>
                      <Link
                        href={story.link}
                        className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:underline"
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
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Become a Solution Partner</h3>
              <p className="text-emerald-100 max-w-2xl">
                Join our network of solution partners delivering transformative supply chain solutions.
                Leverage our platform to drive customer success.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/become-solution-partner"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
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

        {/* ==================== PARTNER DETAIL MODAL ==================== */}
        {showPartnerModal && selectedPartner && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPartnerModal(false)}
            role="dialog"
            aria-label="Partner details"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedPartner.image}
                  alt={selectedPartner.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setShowPartnerModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  {getIcon('x', 'w-5 h-5')}
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {selectedPartner.logo && (
                    <img
                      src={selectedPartner.logo}
                      alt={selectedPartner.name}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPartner.name}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedPartner.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Industry</p>
                    <p className="text-gray-900 dark:text-white">
                      {getIndustryConfig(selectedPartner.industry).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Tier</p>
                    <p className="text-gray-900 dark:text-white">
                      {getTierConfig(selectedPartner.tier).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Region</p>
                    <p className="text-gray-900 dark:text-white">
                      {selectedPartner.region
                        ? uniqueRegions.find((r) => r === selectedPartner.region) || 'Global'
                        : 'Global'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Certified</p>
                    <p className="text-gray-900 dark:text-white">
                      {selectedPartner.isCertified ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
                {selectedPartner.solutionAreas && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Solution Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.solutionAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                        >
                          {getSolutionConfig(area).badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedPartner.successMetrics && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Success Metrics</p>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedPartner.successMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                        >
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={selectedPartner.link}
                    className="flex-1 bg-emerald-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    View Partner Page
                  </Link>
                  <button
                    onClick={() => handleFavoritePartner(selectedPartner.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${favoritePartners.includes(selectedPartner.id)
                      ? 'bg-red-100 text-red-500'
                      : 'bg-gray-100 text-gray-600'
                      }`}
                    aria-label="Toggle favorite"
                  >
                    {getIcon('heart', 'w-5 h-5')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon('x', 'w-6 h-6')}
              </button>
              <video ref={videoRef} className="w-full" controls autoPlay />
            </div>
          </div>
        )}
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

export default SolutionPartnersSection3;