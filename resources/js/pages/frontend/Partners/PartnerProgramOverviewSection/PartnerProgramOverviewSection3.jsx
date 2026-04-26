// frontend/Partners/PartnerProgramOverviewSection/PartnerProgramOverviewSection3.jsx

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// React Icons - Heroicons (hi), Heroicons 2 (hi2), FontAwesome (fa), Material Design (md)
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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineClipboardCheck,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineCloud,
} from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const PartnerProgramOverviewSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [favoritePartners, setFavoritePartners] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  // ==================== REFS ====================
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoritePartners');
    if (saved) setFavoritePartners(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePartners', JSON.stringify(favoritePartners));
  }, [favoritePartners]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries (hi, hi2, fa, md)
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
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      clipboardCheck: <HiOutlineClipboardCheck className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      // FontAwesome (fa)
      quote: <FaQuoteLeft className={className} />,
      certificate: <FaCertificate className={className} />,
      // Heroicons 2 (hi2)
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      cloudAlt: <HiOutlineCloud className={className} />,
      // Material Design (md)
      fullscreen: <MdOutlineFullscreen className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns program configuration (color, icon, label, gradient)
   */
  const getProgramConfig = useCallback((programType) => {
    const configs = {
      technology: {
        color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
        icon: 'chip',
        label: 'Technology Partner',
        gradient: 'from-sky-500 to-sky-600',
      },
      consulting: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Consulting Partner',
        gradient: 'from-purple-500 to-purple-600',
      },
      reseller: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Reseller Partner',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      alliance: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'users',
        label: 'Strategic Alliance',
        gradient: 'from-amber-500 to-amber-600',
      },
      solution: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'cog',
        label: 'Solution Partner',
        gradient: 'from-indigo-500 to-indigo-600',
      },
    };
    return configs[programType] || configs.technology;
  }, []);

  /**
   * Returns partner tier configuration (color, icon, label, badge, gradient)
   */
  const getTierConfig = useCallback((tier) => {
    const configs = {
      platinum: {
        color: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white',
        icon: 'trophy',
        label: 'Platinum',
        badge: 'Platinum',
        gradient: 'from-gray-700 to-gray-800',
      },
      gold: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'star',
        label: 'Gold',
        badge: 'Gold',
        gradient: 'from-yellow-500 to-amber-500',
      },
      silver: {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        icon: 'badge',
        label: 'Silver',
        badge: 'Silver',
        gradient: 'from-gray-400 to-gray-500',
      },
      registered: {
        color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
        icon: 'check',
        label: 'Registered',
        badge: 'Registered',
        gradient: 'from-sky-500 to-sky-600',
      },
    };
    return configs[tier] || configs.registered;
  }, []);

  /**
   * Returns region configuration with display label and flag emoji
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { label: 'North America', flag: 'globe', color: 'bg-sky-100 text-sky-700' },
      europe: { label: 'Europe', flag: 'globe', color: 'bg-purple-100 text-purple-700' },
      'asia-pacific': { label: 'Asia Pacific', flag: 'globe', color: 'bg-emerald-100 text-emerald-700' },
      'latin-america': { label: 'Latin America', flag: 'globe', color: 'bg-amber-100 text-amber-700' },
    };
    return configs[regionId] || { label: regionId, flag: 'globe', color: 'bg-gray-100 text-gray-700' };
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
   * Open partner detail modal
   */
  const openPartnerModal = useCallback((partner) => {
    setSelectedPartner(partner);
    setShowPartnerModal(true);
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuredPartnersCount = config?.featuredPartners?.length || 0;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredPartnersCount || 1));
  }, [featuredPartnersCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredPartnersCount || 1)) % (featuredPartnersCount || 1));
  }, [featuredPartnersCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredPartnersCount > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredPartnersCount, nextSlide]);

  // ==================== FILTERING LOGIC ====================
  const filteredPartners = useCallback(() => {
    let partners = config?.partners || [];

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

    // Tab-based filtering for partners sub-tab
    if (activeTab === 'featured') {
      partners = partners.filter((p) => p.isFeatured);
    } else if (activeTab === 'favorites') {
      partners = partners.filter((p) => favoritePartners.includes(p.id));
    }

    return partners;
  }, [config?.partners, searchQuery, selectedProgram, selectedRegion, activeTab, favoritePartners]);

  const partnersList = filteredPartners();
  const featuredPartners = config?.featuredPartners || [];

  // Tab definitions for main navigation
  const mainTabs = [
    { id: 'overview', label: 'Program Overview', icon: 'library' },
    { id: 'benefits', label: 'Benefits', icon: 'gift' },
    { id: 'partners', label: 'Find a Partner', icon: 'usergroup' },
    { id: 'resources', label: 'Resources', icon: 'document' },
  ];

  // Sub-tabs for partners section
  const partnerSubTabs = [
    { id: 'all', label: 'All Partners', icon: 'usergroup' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'favorites', label: 'Favorites', icon: 'heart' },
  ];

  // Count active filters for badge display
  const activeFiltersCount = [
    selectedProgram !== 'all',
    selectedRegion !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  /**
   * Clears all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedRegion('all');
  }, []);

  // Memoized data from config
  const programBenefits = config?.programBenefits || [];
  const partnerTiers = config?.partnerTiers || [];
  const stats = config?.stats || [];
  const successMetrics = config?.successMetrics || [];
  const partnerResources = config?.partnerResources || [];
  const partnerEvents = config?.partnerEvents || [];
  const programTypes = config?.programTypes || [];
  const regions = config?.regions || [];

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Program Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-partner" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-partner)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('usergroup', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Partner Program'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Grow with'}{' '}
            <span className="bg-linear-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'SupplyChainPro'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Join our global partner ecosystem and accelerate your business growth. We provide the tools, resources, and support you need to succeed.'}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/become-partner"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Become a Partner
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/partner-directory"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-sky-600 transition-all duration-300"
            >
              Find a Partner
              {getIcon('search', 'w-4 h-4')}
            </Link>
          </div>
        </div>

        {/* ==================== MAIN TABS ==================== */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-wrap gap-6">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === tab.id
                  ? 'text-sky-600 dark:text-sky-400 border-sky-600'
                  : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700'
                  }`}
                aria-label={`Switch to ${tab.label} tab`}
              >
                {getIcon(tab.icon, 'w-5 h-5')}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Featured Partners Carousel */}
            {featuredPartners.length > 0 && (
              <div className="relative mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
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
                      const regionConfig = getRegionConfig(partner.region);
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
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
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
                              <h2 className="text-3xl md:text-4xl font-bold mb-2 line-clamp-2">
                                {partner.name}
                              </h2>
                              <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">
                                {partner.description}
                              </p>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm">
                                  {getIcon(regionConfig.flag, 'w-4 h-4')}
                                  <span>{regionConfig.label}</span>
                                </div>
                                {partner.expertise && (
                                  <div className="flex gap-2">
                                    {partner.expertise.slice(0, 2).map((exp, idx) => (
                                      <span
                                        key={idx}
                                        className="text-xs bg-white/20 px-2 py-1 rounded-full"
                                      >
                                        {exp}
                                      </span>
                                    ))}
                                  </div>
                                )}
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

            {/* Program Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Partner Program Tiers */}
            {partnerTiers.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Partner Program Tiers
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {partnerTiers.map((tier) => {
                    const tierConfig = getTierConfig(tier.id);
                    return (
                      <div
                        key={tier.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
                      >
                        <div
                          className={`w-16 h-16 rounded-full bg-linear-to-r ${tierConfig.gradient} mx-auto mb-4 flex items-center justify-center`}
                        >
                          {getIcon(tierConfig.icon, 'w-8 h-8 text-white')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {tierConfig.label}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                        <ul className="text-left space-y-2">
                          {tier.benefits?.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Become Partner CTA */}
            <div className="bg-linear-to-r from-sky-600 to-purple-600 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Grow with Us?</h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                Join our partner program today and unlock new opportunities for your business.
              </p>
              <Link
                href="/become-partner"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300"
              >
                Apply Now
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}

        {/* ==================== BENEFITS TAB ==================== */}
        {activeTab === 'benefits' && (
          <>
            {/* Program Benefits Grid */}
            {programBenefits.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {programBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-r ${benefit.gradient} mb-4 flex items-center justify-center`}
                    >
                      {getIcon(benefit.icon, 'w-6 h-6 text-white')}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Partner Success Metrics */}
            {successMetrics.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Partner Success Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {successMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== FIND A PARTNER TAB ==================== */}
        {activeTab === 'partners' && (
          <>
            {/* Partner Sub-tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {partnerSubTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  aria-label={`Show ${tab.label} partners`}
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

            {/* Search and Filters */}
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
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search partners"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Filter by program type"
                >
                  <option value="all">All Program Types</option>
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
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                    ? 'bg-sky-600 text-white'
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

            {/* Expanded Filters Panel */}
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
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sort By
                    </label>
                    <select className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
                      <option>Featured First</option>
                      <option>Alphabetical</option>
                      <option>By Region</option>
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

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {partnersList.length}
                </span>{' '}
                partners
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {partnersList.map((partner) => {
                const programConfig = getProgramConfig(partner.program);
                const tierConfig = getTierConfig(partner.tier);
                const regionConfig = getRegionConfig(partner.region);
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
                              className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}
                            >
                              {getIcon(programConfig.icon, 'w-5 h-5')}
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
                            handleFavoritePartner(partner.id);
                          }}
                          className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                        </button>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {partner.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        {getIcon(regionConfig.flag, 'w-4 h-4')}
                        <span>{regionConfig.label}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className={`px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                          {tierConfig.badge}
                        </span>
                      </div>

                      {partner.expertise && partner.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {partner.expertise.slice(0, 2).map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                            >
                              {exp}
                            </span>
                          ))}
                          {partner.expertise.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{partner.expertise.length - 2}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          {partner.certified && (
                            <div className="flex items-center gap-1 text-xs text-emerald-600">
                              {getIcon('badge', 'w-4 h-4')}
                              <span>Certified</span>
                            </div>
                          )}
                          {partner.successStories && (
                            <span className="text-xs text-sky-600">
                              {partner.successStories} stories
                            </span>
                          )}
                        </div>
                        <span className="text-sky-600 text-sm font-semibold hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {partnersList.length === 0 && (
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
          </>
        )}

        {/* ==================== RESOURCES TAB ==================== */}
        {activeTab === 'resources' && (
          <>
            {/* Partner Resources Grid */}
            {partnerResources.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {partnerResources.map((resource, idx) => (
                  <Link
                    key={idx}
                    href={resource.link}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/30 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(resource.icon, 'w-6 h-6 text-sky-600')}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500">{resource.description}</p>
                  </Link>
                ))}
              </div>
            )}

            {/* Upcoming Partner Events */}
            {partnerEvents.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Upcoming Partner Events
                </h2>
                <div className="space-y-4">
                  {partnerEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-sky-600">{event.date}</span>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                              {event.type}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-500">{event.description}</p>
                        </div>
                        <Link
                          href={event.link}
                          className="text-sky-600 text-sm font-semibold hover:underline"
                        >
                          Register →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partner Portal CTA */}
            <div className="bg-linear-to-r from-sky-600 to-purple-600 rounded-3xl p-8 text-white text-center">
              {getIcon('cloudAlt', 'w-12 h-12 mx-auto mb-4')}
              <h3 className="text-2xl font-bold mb-4">Access Partner Portal</h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                Get exclusive access to training, marketing materials, and sales tools.
              </p>
              <Link
                href="/partner-portal"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300"
              >
                Login to Portal
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}

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
                    <p className="text-sm font-medium text-gray-500">Program Type</p>
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
                  <div>
                    <p className="text-sm font-medium text-gray-500">Region</p>
                    <p className="text-gray-900 dark:text-white">
                      {getRegionConfig(selectedPartner.region).label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Certified</p>
                    <p className="text-gray-900 dark:text-white">
                      {selectedPartner.certified ? 'Yes' : 'No'}
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
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={selectedPartner.link}
                    className="flex-1 bg-sky-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                  >
                    View Partner Page
                  </Link>
                  <button
                    onClick={() => handleFavoritePartner(selectedPartner.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${favoritePartners.includes(selectedPartner.id)
                      ? 'bg-red-100 text-red-500'
                      : 'bg-gray-100 text-gray-600'
                      }`}
                    aria-label={
                      favoritePartners.includes(selectedPartner.id)
                        ? 'Remove from favorites'
                        : 'Add to favorites'
                    }
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

export default PartnerProgramOverviewSection3;