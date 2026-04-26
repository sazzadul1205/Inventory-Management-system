// page/frontend/Partners/TechnologyPartnersSection/TechnologyPartnersSection3.jsx

/**
 * Technology Partners Section - Partners Hub with Modal
 *
 * Unique design elements:
 * - Tabbed interface (All Partners, Featured, Favorites)
 * - Featured partners carousel with auto-play and manual navigation
 * - Partner detail modal with full information
 * - Favorites tab with localStorage persistence
 * - Integration guides section with resource links
 * - Favorite functionality with heart icon and persistence
 * - Category filter dropdown
 * - Integration type filter dropdown
 * - Search across partner names, descriptions, and tags
 * - Demo video modal player
 * - Documentation link with document icon
 * - Partner tier badges (Premier, Advanced, Certified)
 * - Integration type badges with color coding
 * - Expandable capabilities section with checkmark list
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
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineDatabase,
    HiOutlineServer,
    HiOutlineCode,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineGlobe,
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
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
    HiOutlineWifi,
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
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineClosedCaption } from 'react-icons/md';

const TechnologyPartnersSection3 = ({ config }) => {
    // ==================== STATE MANAGEMENT ====================
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedIntegration, setSelectedIntegration] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showFilters, setShowFilters] = useState(false);
    const [expandedPartner, setExpandedPartner] = useState(null);
    const [favoritePartners, setFavoritePartners] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    // ==================== REFS ====================
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // ==================== MEMOIZED DATA ====================
    const allPartners = useMemo(() => config?.partners || [], [config?.partners]);
    const featuredPartners = useMemo(() => config?.featuredPartners || [], [config?.featuredPartners]);
    const integrationGuides = useMemo(() => config?.integrationGuides || [], [config?.integrationGuides]);

    const categories = useMemo(
        () =>
            config?.categories || [
                { id: 'all', label: 'All Partners', icon: 'chip' },
                { id: 'cloud', label: 'Cloud Infrastructure', icon: 'cloud' },
                { id: 'ai-ml', label: 'AI & Machine Learning', icon: 'chip' },
                { id: 'analytics', label: 'Analytics & BI', icon: 'chart' },
                { id: 'integration', label: 'Integration Platforms', icon: 'code' },
                { id: 'security', label: 'Security & Compliance', icon: 'shield' },
                { id: 'iot', label: 'IoT & Sensors', icon: 'wifi' },
            ],
        [config?.categories]
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

    const tabs = useMemo(
        () =>
            config?.tabs || [
                { id: 'all', label: 'All Partners', icon: 'chip' },
                { id: 'featured', label: 'Featured', icon: 'star' },
                { id: 'favorites', label: 'Favorites', icon: 'heart' },
            ],
        [config?.tabs]
    );

    const stats = useMemo(
        () =>
            config?.stats || [
                { value: '50+', label: 'Technology Partners', icon: 'chip' },
                { value: '100+', label: 'Pre-built Integrations', icon: 'code' },
                { value: '1M+', label: 'API Calls Daily', icon: 'cloud' },
                { value: '99.9%', label: 'Uptime SLA', icon: 'shield' },
            ],
        [config?.stats]
    );

    // ==================== LOCAL STORAGE ====================
    useEffect(() => {
        const saved = localStorage.getItem('favoriteTechPartners');
        if (saved) setFavoritePartners(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteTechPartners', JSON.stringify(favoritePartners));
    }, [favoritePartners]);

    // ==================== HELPER FUNCTIONS ====================

    /**
     * Resolves icon component from string name
     * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
     */
    const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
        const icons = {
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
            code: <HiOutlineCode className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            bolt: <HiOutlineLightningBolt className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            users: <HiOutlineUsers className={className} />,
            globe: <HiOutlineGlobe className={className} />,
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
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            wifi: <HiOutlineWifi className={className} />,
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
            link: <HiOutlineExternalLink className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <MdOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <MdOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            trophy: <HiOutlineRocketLaunch className={className} />,
        };
        return icons[iconName] || <HiOutlineChip className={className} />;
    }, []);

    /**
     * Returns partner category badge configuration with color and label
     */
    const getCategoryConfig = useCallback((categoryId) => {
        const configs = {
            cloud: {
                color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                icon: 'cloud',
                label: 'Cloud Infrastructure',
                gradient: 'from-blue-500 to-blue-600',
            },
            'ai-ml': {
                color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                icon: 'chip',
                label: 'AI & Machine Learning',
                gradient: 'from-purple-500 to-purple-600',
            },
            analytics: {
                color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                icon: 'chart',
                label: 'Analytics & BI',
                gradient: 'from-emerald-500 to-emerald-600',
            },
            integration: {
                color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
                icon: 'code',
                label: 'Integration Platforms',
                gradient: 'from-orange-500 to-orange-600',
            },
            security: {
                color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                icon: 'shield',
                label: 'Security & Compliance',
                gradient: 'from-red-500 to-red-600',
            },
            iot: {
                color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
                icon: 'wifi',
                label: 'IoT & Sensors',
                gradient: 'from-indigo-500 to-indigo-600',
            },
        };
        return (
            configs[categoryId] || {
                color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
                icon: 'chip',
                label: 'Technology Partner',
            }
        );
    }, []);

    /**
     * Returns integration type badge configuration
     */
    const getIntegrationConfig = useCallback((integrationType) => {
        const configs = {
            api: {
                color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                label: 'REST API',
                icon: 'code',
                badge: 'REST API',
                gradient: 'from-blue-500 to-blue-600',
            },
            'pre-built': {
                color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                label: 'Pre-built Connector',
                icon: 'link',
                badge: 'Pre-built Connector',
                gradient: 'from-emerald-500 to-emerald-600',
            },
            sdk: {
                color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                label: 'SDK',
                icon: 'template',
                badge: 'SDK',
                gradient: 'from-purple-500 to-purple-600',
            },
            webhook: {
                color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
                label: 'Webhook',
                icon: 'refresh',
                badge: 'Webhook',
                gradient: 'from-orange-500 to-orange-600',
            },
        };
        return (
            configs[integrationType] || {
                color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
                label: integrationType,
                icon: 'code',
                badge: integrationType,
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
                icon: 'chip',
                label: tier,
                badge: tier,
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
        setSelectedCategory('all');
        setSelectedIntegration('all');
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

        if (selectedCategory !== 'all') {
            partners = partners.filter((p) => p.category === selectedCategory);
        }

        if (selectedIntegration !== 'all') {
            partners = partners.filter((p) => p.integrationType === selectedIntegration);
        }

        // Tab-based filtering
        if (activeTab === 'featured') {
            partners = partners.filter((p) => p.isFeatured);
        } else if (activeTab === 'favorites') {
            partners = partners.filter((p) => favoritePartners.includes(p.id));
        }

        return partners;
    }, [allPartners, searchQuery, selectedCategory, selectedIntegration, activeTab, favoritePartners]);

    const activeFiltersCount = [
        selectedCategory !== 'all',
        selectedIntegration !== 'all',
        searchQuery !== '',
    ].filter(Boolean).length;

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Technology Partners Hub"
        >
            {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-tech" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-tech)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ==================== HERO SECTION ==================== */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        {getIcon('chip', 'w-4 h-4')}
                        <span className="text-sm font-medium">{config?.badge || 'Technology Partners'}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || 'Connect with'}{' '}
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {config?.title?.highlight || 'Best-in-Class'}
                        </span>{' '}
                        {config?.title?.suffix || 'Technology'}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description ||
                            'Discover and integrate with leading technology partners to build a complete supply chain ecosystem. Access pre-built connectors, APIs, and SDKs.'}
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
                            Featured Technology Partners
                        </h2>
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredPartners.map((partner) => {
                                    const categoryConfig = getCategoryConfig(partner.category);
                                    const tierConfig = getTierConfig(partner.tier);
                                    const integrationConfig = getIntegrationConfig(partner.integrationType);
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
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}
                                                        >
                                                            {categoryConfig.label}
                                                        </span>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}
                                                        >
                                                            {tierConfig.badge}
                                                        </span>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${integrationConfig.color}`}
                                                        >
                                                            {integrationConfig.badge}
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
                                                            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
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
                            placeholder="Search partners by name, technology, or capability..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                            aria-label="Search technology partners"
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                        <select
                            value={selectedIntegration}
                            onChange={(e) => setSelectedIntegration(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            aria-label="Filter by integration type"
                        >
                            {integrationTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.label}
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
                                    Category
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Integration Type
                                </label>
                                <select
                                    value={selectedIntegration}
                                    onChange={(e) => setSelectedIntegration(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                >
                                    {integrationTypes.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Sort By
                                </label>
                                <select
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    aria-label="Sort partners"
                                >
                                    <option>Featured First</option>
                                    <option>Alphabetical</option>
                                    <option>Newest First</option>
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

                {/* ==================== CATEGORY PILLS ==================== */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            aria-label={`Show ${category.label}`}
                        >
                            {getIcon(category.icon, 'w-4 h-4')}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* ==================== INTEGRATION TYPE PILLS ==================== */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {integrationTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedIntegration(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedIntegration === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            aria-label={`Show ${type.label} integrations`}
                        >
                            {getIcon(type.icon, 'w-4 h-4')}
                            {type.label}
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
                        technology partners
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* ==================== PARTNERS GRID ==================== */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredPartners.map((partner) => {
                        const categoryConfig = getCategoryConfig(partner.category);
                        const integrationConfig = getIntegrationConfig(partner.integrationType);
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
                                                    className={`w-10 h-10 rounded-xl bg-linear-to-r ${categoryConfig.gradient} flex items-center justify-center`}
                                                >
                                                    {getIcon(categoryConfig.icon, 'w-5 h-5 text-white')}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                                                <div className="flex items-center gap-1 text-xs">
                                                    <span className={`px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                                        {categoryConfig.label}
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
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${integrationConfig.color}`}>
                                            {integrationConfig.badge}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                                            {tierConfig.badge}
                                        </span>
                                    </div>

                                    {/* Expandable Capabilities */}
                                    {partner.integrationCapabilities && partner.integrationCapabilities.length > 0 && (
                                        <div className="mb-3">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpanded(partner.id);
                                                }}
                                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium"
                                                aria-label={isExpanded ? 'Show less' : `View ${partner.integrationCapabilities.length} capabilities`}
                                            >
                                                {isExpanded
                                                    ? 'Show less'
                                                    : `View ${partner.integrationCapabilities.length} capabilities`}
                                                <HiOutlineChevronDown
                                                    className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {isExpanded && (
                                                <ul className="mt-2 space-y-1">
                                                    {partner.integrationCapabilities.slice(0, 4).map((cap, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs">
                                                            {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                                                            <span className="text-gray-600 dark:text-gray-400">{cap}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            {partner.docsLink && (
                                                <a
                                                    href={partner.docsLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                                    aria-label="View documentation"
                                                >
                                                    {getIcon('document', 'w-4 h-4')}
                                                </a>
                                            )}
                                            {partner.demoUrl && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentVideo(partner.demoUrl);
                                                        setShowVideoModal(true);
                                                    }}
                                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                                    aria-label="Watch demo video"
                                                >
                                                    {getIcon('play', 'w-4 h-4')}
                                                </button>
                                            )}
                                        </div>
                                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
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
                            {getIcon('chip', 'w-16 h-16')}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No technology partners found
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites'
                                ? "You haven't favorited any partners yet."
                                : 'Try adjusting your search or filter criteria'}
                        </p>
                        {activeTab === 'favorites' && (
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

                {/* ==================== INTEGRATION GUIDES SECTION ==================== */}
                {integrationGuides.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            {getIcon('document', 'w-5 h-5 text-blue-600')}
                            Integration Guides & Resources
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {integrationGuides.map((guide, idx) => (
                                <Link
                                    key={idx}
                                    href={guide.link}
                                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        {getIcon(guide.icon, 'w-5 h-5 text-blue-600')}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 dark:text-white">{guide.title}</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{guide.description}</p>
                                    </div>
                                    <HiArrowRight className="w-4 h-4 text-gray-400" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* ==================== BECOME A PARTNER CTA ==================== */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Become a Technology Partner</h3>
                            <p className="text-blue-100 max-w-2xl">
                                Join our ecosystem of leading technology partners. Integrate your solutions with
                                SupplyChainPro and reach a global audience.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/become-technology-partner"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
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
                                        <p className="text-sm font-medium text-gray-500">Category</p>
                                        <p className="text-gray-900 dark:text-white">
                                            {getCategoryConfig(selectedPartner.category).label}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Integration Type</p>
                                        <p className="text-gray-900 dark:text-white">
                                            {getIntegrationConfig(selectedPartner.integrationType).label}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Tier</p>
                                        <p className="text-gray-900 dark:text-white">
                                            {getTierConfig(selectedPartner.tier).label}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Certified</p>
                                        <p className="text-gray-900 dark:text-white">
                                            {selectedPartner.certified ? 'Yes' : 'No'}
                                        </p>
                                    </div>
                                </div>
                                {selectedPartner.integrationCapabilities && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-500 mb-2">Integration Capabilities</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.integrationCapabilities.map((cap, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                                                >
                                                    {cap}
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
                {showVideoModal && currentVideo && (
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
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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

export default TechnologyPartnersSection3;