// page/frontend/Partners/IntegrationPartnersSection/IntegrationPartnersSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper as HiOutlineNewspaperAlt,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt,
    HiOutlineMicrophone as HiOutlineMicrophoneAlt,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const IntegrationPartnersSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedPartner, setExpandedPartner] = useState(null);
    const [favoritePartners, setFavoritePartners] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo] = useState(null);
    const [showCodeExample, setShowCodeExample] = useState(false);
    const [selectedCode, setSelectedCode] = useState(null);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoriteIntegrationPartners');
        if (saved) setFavoritePartners(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteIntegrationPartners', JSON.stringify(favoritePartners));
    }, [favoritePartners]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />,
            microphoneAlt: <HiOutlineMicrophoneAlt className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />
        };
        return icons[iconName] || <HiOutlineLink className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'erp': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'building', label: 'ERP Systems', gradient: 'from-blue-500 to-blue-600' },
            'ecommerce': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'E-commerce Platforms', gradient: 'from-purple-500 to-purple-600' },
            'crm': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'users', label: 'CRM Systems', gradient: 'from-green-500 to-green-600' },
            'wms': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'building', label: 'WMS Providers', gradient: 'from-orange-500 to-orange-600' },
            'tms': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'TMS Providers', gradient: 'from-red-500 to-red-600' },
            'payment': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'credit', label: 'Payment Gateways', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[category] || configs.erp;
    };

    // Get integration type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'api': { color: 'bg-blue-100 text-blue-700', label: 'REST API', badge: '🔌 API', icon: 'code', gradient: 'from-blue-500 to-blue-600' },
            'pre-built': { color: 'bg-green-100 text-green-700', label: 'Pre-built Connector', badge: '⚡ Pre-built', icon: 'link', gradient: 'from-green-500 to-green-600' },
            'sdk': { color: 'bg-purple-100 text-purple-700', label: 'SDK', badge: '📦 SDK', icon: 'template', gradient: 'from-purple-500 to-purple-600' },
            'webhook': { color: 'bg-orange-100 text-orange-700', label: 'Webhook', badge: '🪝 Webhook', icon: 'refresh', gradient: 'from-orange-500 to-orange-600' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', label: type, badge: type, icon: 'code' };
    };

    // Get certification level configuration
    const getCertificationConfig = (level) => {
        const configs = {
            'certified': { color: 'bg-green-100 text-green-700', badge: '✓ Certified', icon: 'badge', gradient: 'from-green-500 to-green-600' },
            'advanced': { color: 'bg-blue-100 text-blue-700', badge: '⭐ Advanced', icon: 'star', gradient: 'from-blue-500 to-blue-600' },
            'premier': { color: 'bg-yellow-100 text-yellow-700', badge: '🏆 Premier', icon: 'trophy', gradient: 'from-yellow-500 to-amber-500' }
        };
        return configs[level] || { color: 'bg-gray-100 text-gray-700', badge: 'Registered', icon: 'check' };
    };

    // Handle favorite partner
    const handleFavoritePartner = (partnerId) => {
        setFavoritePartners(prev =>
            prev.includes(partnerId)
                ? prev.filter(id => id !== partnerId)
                : [...prev, partnerId]
        );
    };

    // Open partner modal
    const openPartnerModal = (partner) => {
        setSelectedPartner(partner);
        setShowPartnerModal(true);
    };

    // Open code example modal
    const openCodeExample = (code) => {
        setSelectedCode(code);
        setShowCodeExample(true);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredPartners?.length || 1));
    }, [config?.featuredPartners?.length]);

    const prevSlide = useCallback (() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredPartners?.length || 1)) % (config?.featuredPartners?.length || 1));
    },[config?.featuredPartners?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredPartners?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredPartners?.length, nextSlide]);

    // Filter partners
    const getFilteredPartners = useCallback(() => {
        let partners = config?.partners || [];

        if (searchQuery) {
            partners = partners.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            partners = partners.filter(p => p.category === selectedCategory);
        }

        if (selectedType !== 'all') {
            partners = partners.filter(p => p.integrationType === selectedType);
        }

        if (activeTab === 'featured') {
            partners = partners.filter(p => p.isFeatured);
        } else if (activeTab === 'favorites') {
            partners = partners.filter(p => favoritePartners.includes(p.id));
        } else if (activeTab === 'api') {
            partners = partners.filter(p => p.integrationType === 'api');
        }

        return partners;
    }, [config?.partners, searchQuery, selectedCategory, selectedType, activeTab, favoritePartners]);

    const filteredPartners = getFilteredPartners();
    const categories = config?.categories || [
        { id: 'all', label: 'All Integrations', icon: 'link' },
        { id: 'erp', label: 'ERP Systems', icon: 'building' },
        { id: 'ecommerce', label: 'E-commerce', icon: 'globe' },
        { id: 'crm', label: 'CRM Systems', icon: 'users' },
        { id: 'wms', label: 'WMS', icon: 'building' },
        { id: 'tms', label: 'TMS', icon: 'globe' }
    ];

    const integrationTypes = [
        { id: 'all', label: 'All Types', icon: 'code' },
        { id: 'api', label: 'REST API', icon: 'code' },
        { id: 'pre-built', label: 'Pre-built Connector', icon: 'link' },
        { id: 'sdk', label: 'SDK', icon: 'template' },
        { id: 'webhook', label: 'Webhook', icon: 'refresh' }
    ];

    const tabs = [
        { id: 'all', label: 'All Integrations', icon: 'link' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' },
        { id: 'api', label: 'API Partners', icon: 'code' }
    ];

    const featuredPartners = config?.featuredPartners || [];

    // Stats cards
    const stats = config?.stats || [
        { value: "150+", label: "Pre-built Integrations", icon: "link" },
        { value: "50+", label: "Technology Partners", icon: "chip" },
        { value: "10k+", label: "API Calls Daily", icon: "code" },
        { value: "99.9%", label: "Uptime", icon: "shield" }
    ];

    // API documentation resources
    const apiResources = config?.apiResources || [];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedType !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedType('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Integration Partners Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-integration" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-integration)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineLink className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Integration Partners"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Connect Your"} <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Ecosystem"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Seamlessly connect SupplyChainPro with your existing business applications. Our integration partners provide pre-built connectors and APIs for rapid deployment."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-purple-600")}
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'favorites' && favoritePartners.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoritePartners.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Featured Partners Carousel */}
                {activeTab === 'all' && featuredPartners.length > 0 && (
                    <div className="relative mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Integration Partners</h2>
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredPartners.map((partner) => {
                                    const categoryConfig = getCategoryConfig(partner.category);
                                    const typeConfig = getTypeConfig(partner.integrationType);
                                    const certConfig = getCertificationConfig(partner.certification);
                                    return (
                                        <div key={partner.id} className="w-full shrink-0 cursor-pointer" onClick={() => openPartnerModal(partner)}>
                                            <div className="relative h-96 rounded-3xl overflow-hidden">
                                                <img
                                                    src={partner.image}
                                                    alt={partner.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeConfig.color}`}>
                                                            {typeConfig.badge}
                                                        </span>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${certConfig.color}`}>
                                                            {certConfig.badge}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        {partner.logo && (
                                                            <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
                                                        )}
                                                        <h2 className="text-3xl md:text-4xl font-bold">{partner.name}</h2>
                                                    </div>
                                                    <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{partner.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {partner.features?.slice(0, 3).map((feature, idx) => (
                                                            <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); handleFavoritePartner(partner.id); }}
                                                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${favoritePartners.includes(partner.id)
                                                                ? 'bg-red-500 text-white'
                                                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
                                                                }`}
                                                        >
                                                            <HiOutlineHeart className="w-4 h-4 inline mr-2" />
                                                            {favoritePartners.includes(partner.id) ? 'Favorited' : 'Favorite'}
                                                        </button>
                                                        <Link
                                                            href={partner.link}
                                                            className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
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

                            {featuredPartners.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {featuredPartners.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search integrations by name, category, or technology..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Search integration partners"
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="all">All Categories</option>
                            {categories.filter(c => c.id !== 'all').map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            {integrationTypes.map(type => (
                                <option key={type.id} value={type.id}>{type.label}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                ? 'bg-purple-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            <HiOutlineFilter className="w-4 h-4" />
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
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Integration Type</label>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    {integrationTypes.map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Featured First</option>
                                    <option>Alphabetical</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </div>
                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={clearAllFilters} className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Integration Type Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {integrationTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedType === type.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(type.icon, "w-4 h-4")}
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPartners.length}</span> integration partners
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredPartners.map((partner) => {
                        const categoryConfig = getCategoryConfig(partner.category);
                        const typeConfig = getTypeConfig(partner.integrationType);
                        const certConfig = getCertificationConfig(partner.certification);
                        const isExpanded = expandedPartner === partner.id;
                        const isFavorite = favoritePartners.includes(partner.id);

                        return (
                            <div
                                key={partner.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => openPartnerModal(partner)}
                            >
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
                                            ) : (
                                                <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${categoryConfig.gradient} flex items-center justify-center`}>
                                                    {getIcon(categoryConfig.icon, "w-5 h-5 text-white")}
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
                                            onClick={(e) => { e.stopPropagation(); handleFavoritePartner(partner.id); }}
                                            className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                        >
                                            <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{partner.description}</p>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${typeConfig.color}`}>
                                            {typeConfig.badge}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${certConfig.color}`}>
                                            {certConfig.badge}
                                        </span>
                                    </div>

                                    {partner.features && partner.features.length > 0 && (
                                        <div className="mb-3">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setExpandedPartner(isExpanded ? null : partner.id); }}
                                                className="flex items-center gap-1 text-xs text-purple-600 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : `View ${partner.features.length} features`}
                                                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isExpanded && (
                                                <ul className="mt-2 space-y-1">
                                                    {partner.features.slice(0, 4).map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs">
                                                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            {partner.docsLink && (
                                                <a
                                                    href={partner.docsLink}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-gray-400 hover:text-purple-600 transition-colors"
                                                >
                                                    <HiOutlineDocumentText className="w-4 h-4" />
                                                </a>
                                            )}
                                            {partner.codeExample && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); openCodeExample(partner.codeExample); }}
                                                    className="text-gray-400 hover:text-purple-600 transition-colors"
                                                >
                                                    <HiOutlineCode className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                        <span className="text-purple-600 text-xs font-semibold hover:underline">Learn More →</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPartners.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineLink className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No integration partners found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites' ? "You haven't favorited any partners yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'favorites' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-purple-600 hover:underline">
                                Browse All Partners
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-purple-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* API Resources Section */}
                {apiResources.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlineCode className="w-5 h-5 text-purple-600" />
                            API Resources & Documentation
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {apiResources.map((resource, idx) => (
                                <Link
                                    key={idx}
                                    href={resource.link}
                                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                        {getIcon(resource.icon, "w-5 h-5 text-purple-600")}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 dark:text-white">{resource.title}</h4>
                                        <p className="text-xs text-gray-500">{resource.description}</p>
                                    </div>
                                    <HiArrowRight className="w-4 h-4 text-gray-400" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Become an Integration Partner CTA */}
                <div className="mt-12 bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Become an Integration Partner</h3>
                            <p className="text-purple-100 max-w-2xl">
                                Join our ecosystem of integration partners. Build pre-built connectors and reach thousands of SupplyChainPro customers.
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
                                <HiOutlineExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Partner Detail Modal */}
                {showPartnerModal && selectedPartner && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPartnerModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 overflow-hidden">
                                <img src={selectedPartner.image} alt={selectedPartner.name} className="w-full h-full object-cover" />
                                <button onClick={() => setShowPartnerModal(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    {selectedPartner.logo && <img src={selectedPartner.logo} alt={selectedPartner.name} className="h-12 w-auto" />}
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedPartner.name}</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedPartner.description}</p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Category</p>
                                        <p className="text-gray-900 dark:text-white">{getCategoryConfig(selectedPartner.category).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Integration Type</p>
                                        <p className="text-gray-900 dark:text-white">{getTypeConfig(selectedPartner.integrationType).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Certification</p>
                                        <p className="text-gray-900 dark:text-white">{getCertificationConfig(selectedPartner.certification).badge}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">API Version</p>
                                        <p className="text-gray-900 dark:text-white">{selectedPartner.apiVersion || 'v2.0'}</p>
                                    </div>
                                </div>
                                {selectedPartner.features && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-500 mb-2">Integration Features</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.features.map((feature, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{feature}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <Link href={selectedPartner.link} className="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                        View Integration
                                    </Link>
                                    <button
                                        onClick={() => handleFavoritePartner(selectedPartner.id)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${favoritePartners.includes(selectedPartner.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Code Example Modal */}
                {showCodeExample && selectedCode && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCodeExample(false)}>
                        <div className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                                <h3 className="text-lg font-semibold text-white">API Code Example</h3>
                                <button onClick={() => setShowCodeExample(false)} className="text-gray-400 hover:text-white">
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-4">
                                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm">
                                    <code>{selectedCode}</code>
                                </pre>
                                <button
                                    onClick={() => navigator.clipboard.writeText(selectedCode)}
                                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    Copy Code
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </section>
    );
};

export default IntegrationPartnersSection3;