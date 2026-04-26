// page/frontend/Partners/PartnerDirectorySection/PartnerDirectorySection3.jsx

/**
 * Partner Directory Section - Partner Directory Hub with Modal
 *
 * Unique design elements:
 * - Tabbed interface (All Partners, Featured, Top Rated, Saved)
 * - Featured partners carousel with auto-play and manual navigation
 * - Partner detail modal with full information
 * - Favorites/Saved tab with localStorage persistence
 * - Rating display with star icons
 * - Partner tier badges (Premier, Advanced, Certified)
 * - Location display with region flags
 * - Expertise tags with expandable show more
 * - Save/bookmark functionality with localStorage persistence
 * - Category filter dropdown
 * - Region filter dropdown
 * - Industry filter dropdown
 * - Search across partner names, descriptions, and tags
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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const PartnerDirectorySection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [savedPartners, setSavedPartners] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);
  const featuredPartners = useMemo(() => config?.featuredPartners || [], [config?.featuredPartners]);

  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup' },
        { id: 'technology', label: 'Technology Partners', icon: 'chip' },
        { id: 'solution', label: 'Solution Partners', icon: 'briefcase' },
        { id: 'consulting', label: 'Consulting Partners', icon: 'users' },
        { id: 'reseller', label: 'Reseller Partners', icon: 'globe' },
        { id: 'integration', label: 'Integration Partners', icon: 'code' },
      ],
    [config?.programTypes]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'all', label: 'All Partners', icon: 'usergroup' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'top-rated', label: 'Top Rated', icon: 'trophy' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Partners', icon: 'usergroup' },
        { value: '50+', label: 'Countries', icon: 'globe' },
        { value: '1000+', label: 'Successful Projects', icon: 'trophy' },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedDirectoryPartners');
    if (saved) setSavedPartners(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedDirectoryPartners', JSON.stringify(savedPartners));
  }, [savedPartners]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
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
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
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
        gradient: 'from-blue-500 to-blue-600',
      },
      solution: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Solution Partner',
        gradient: 'from-purple-500 to-purple-600',
      },
      consulting: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'Consulting Partner',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      reseller: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Reseller Partner',
        gradient: 'from-orange-500 to-orange-600',
      },
      integration: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'code',
        label: 'Integration Partner',
        gradient: 'from-indigo-500 to-indigo-600',
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
    setSelectedProgram('all');
    setSelectedRegion('all');
    setSelectedIndustry('all');
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

    if (selectedProgram !== 'all') {
      partners = partners.filter((p) => p.program === selectedProgram);
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    if (selectedIndustry !== 'all') {
      partners = partners.filter((p) => p.industries?.includes(selectedIndustry));
    }

    // Tab-based filtering
    if (activeTab === 'featured') {
      partners = partners.filter((p) => p.isFeatured);
    } else if (activeTab === 'top-rated') {
      partners = [...partners].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 6);
    } else if (activeTab === 'saved') {
      partners = partners.filter((p) => savedPartners.includes(p.id));
    }

    return partners;
  }, [allPartners, searchQuery, selectedProgram, selectedRegion, selectedIndustry, activeTab, savedPartners]);

  const uniqueRegions = getUniqueRegions();
  const uniqueIndustries = getUniqueIndustries();
  const activeFiltersCount = [
    selectedProgram !== 'all',
    selectedRegion !== 'all',
    selectedIndustry !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Directory Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-directory" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-directory)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('usergroup', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Partner Directory'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Find the'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Right Partner'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.'}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
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
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, 'w-4 h-4')}
              {tab.label}
              {tab.id === 'saved' && savedPartners.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {savedPartners.length}
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
              Featured Partners
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredPartners.map((partner) => {
                  const programConfig = getProgramConfig(partner.program);
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
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${programConfig.color}`}
                            >
                              {programConfig.label}
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
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                              {getIcon('star', 'w-4 h-4 text-yellow-500')}
                              <span>
                                {partner.rating} ({partner.reviews} reviews)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {getIcon('location', 'w-4 h-4')}
                              <span>{partner.location}</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSavePartner(partner.id);
                              }}
                              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${savedPartners.includes(partner.id)
                                ? 'bg-yellow-500 text-white'
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
                                }`}
                              aria-label={savedPartners.includes(partner.id) ? 'Remove from saved' : 'Save partner'}
                            >
                              {getIcon('bookmark', 'w-4 h-4')}
                              {savedPartners.includes(partner.id) ? 'Saved' : 'Save'}
                            </button>
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
              placeholder="Search partners by name, expertise, or location..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search partners"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by region"
            >
              <option value="all">All Regions</option>
              {uniqueRegions.map((region) => (
                <option key={region} value={region}>
                  {getRegionConfig(region).label}
                </option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by industry"
            >
              <option value="all">All Industries</option>
              {uniqueIndustries.map((industry) => (
                <option key={industry} value={industry}>
                  {getIndustryConfig(industry).label}
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

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partner Type
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Regions</option>
                  {uniqueRegions.map((region) => (
                    <option key={region} value={region}>
                      {getRegionConfig(region).label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Industries</option>
                  {uniqueIndustries.map((industry) => (
                    <option key={industry} value={industry}>
                      {getIndustryConfig(industry).label}
                    </option>
                  ))}
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

        {/* ==================== PROGRAM TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {programTypes.map((program) => (
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

        {/* ==================== PARTNERS GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPartners.map((partner) => {
            const programConfig = getProgramConfig(partner.program);
            const regionConfig = getRegionConfig(partner.region);
            const tierConfig = getTierConfig(partner.tier);
            const isExpanded = expandedPartner === partner.id;
            const isSaved = savedPartners.includes(partner.id);

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
                          className={`w-10 h-10 rounded-xl bg-linear-to-r ${programConfig.gradient} flex items-center justify-center`}
                        >
                          {getIcon(programConfig.icon, 'w-5 h-5 text-white')}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                        <div className="flex items-center gap-1 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${programConfig.color}`}>
                            {programConfig.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSavePartner(partner.id);
                      }}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save partner'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {getIcon('star', 'w-4 h-4 text-yellow-500')}
                      <span className="font-semibold">{partner.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({partner.reviews} reviews)</span>
                    <span className="text-xs text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                      <span>{regionConfig.flag}</span>
                      <span className="text-xs text-gray-500">{regionConfig.label}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Expertise Tags */}
                  {partner.expertise && partner.expertise.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {partner.expertise.slice(0, 3).map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                        {partner.expertise.length > 3 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpanded(partner.id);
                            }}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            aria-label={`Show ${partner.expertise.length - 3} more expertise areas`}
                          >
                            +{partner.expertise.length - 3}
                          </button>
                        )}
                      </div>
                      {isExpanded && partner.expertise.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-1 animate-fadeIn">
                          {partner.expertise.slice(3).map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      )}
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
                      <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                        {tierConfig.badge}
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                      View Profile →
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
              {getIcon('usergroup', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'saved'
                ? "You haven't saved any partners yet."
                : 'Try adjusting your search or filter criteria'}
            </p>
            {activeTab === 'saved' && (
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Browse All Partners
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4"
              >
                Clear all filters
              </button>
            )}
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
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {getIcon('star', 'w-5 h-5 text-yellow-500')}
                    <span className="text-lg font-semibold">{selectedPartner.rating}</span>
                  </div>
                  <span className="text-gray-500">({selectedPartner.reviews} reviews)</span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1">
                    {getIcon('location', 'w-4 h-4')}
                    <span>{selectedPartner.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedPartner.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Partner Type</p>
                    <p className="text-gray-900 dark:text-white">
                      {getProgramConfig(selectedPartner.program).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Tier</p>
                    <p className="text-gray-900 dark:text-white">
                      {getTierConfig(selectedPartner.tier).label}
                    </p>
                  </div>
                </div>
                {selectedPartner.expertise && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedPartner.industries && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Industries Served</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.industries.map((ind, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${getIndustryConfig(ind).color}`}
                        >
                          {getIndustryConfig(ind).label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={selectedPartner.link}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Partner Page
                  </Link>
                  <button
                    onClick={() => handleSavePartner(selectedPartner.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${savedPartners.includes(selectedPartner.id)
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-gray-100 text-gray-600'
                      }`}
                    aria-label="Toggle save"
                  >
                    {getIcon('bookmark', 'w-5 h-5')}
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

export default PartnerDirectorySection3;