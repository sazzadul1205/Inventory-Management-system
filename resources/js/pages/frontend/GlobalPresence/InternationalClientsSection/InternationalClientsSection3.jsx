// page/frontend/GlobalPresence/InternationalClientsSection/InternationalClientsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter,
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineChartBar as HiOutlineChartBarIcon,
    HiOutlineTrendingUp as HiOutlineTrendingUpIcon,
    HiOutlineUserCircle,
    HiOutlineMap as HiOutlineMapIcon,
    HiOutlineRefresh
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineHeadphones as HiOutlineHeadphones,
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const InternationalClientsSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const [showClientModal, setShowClientModal] = useState(false);
    const [favoriteClients, setFavoriteClients] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [mapPanOffset, setMapPanOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const carouselRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoriteInternationalClients');
        if (saved) setFavoriteClients(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteInternationalClients', JSON.stringify(favoriteClients));
    }, [favoriteClients]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            globe: <HiOutlineGlobe className={className} />,
            users: <HiOutlineUsers className={className} />,
            office: <HiOutlineOfficeBuilding className={className} />,
            star: <HiOutlineStar className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            chartBar: <HiOutlineChartBarIcon className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            trendingUp: <HiOutlineTrendingUpIcon className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
            mapIcon: <HiOutlineMapIcon className={className} />,
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
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            quote: <HiOutlineQuote className={className} />,
            userCircle: <HiOutlineUserCircle className={className} />
        };
        return icons[iconName] || <HiOutlineGlobe className={className} />;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'North America', flag: '🇺🇸', gradient: 'from-blue-500 to-blue-600', coordinates: { lat: 40, lng: -100 } },
            'europe': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Europe', flag: '🇪🇺', gradient: 'from-purple-500 to-purple-600', coordinates: { lat: 50, lng: 10 } },
            'asia-pacific': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Asia Pacific', flag: '🌏', gradient: 'from-green-500 to-green-600', coordinates: { lat: 20, lng: 100 } },
            'latin-america': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Latin America', flag: '🌎', gradient: 'from-orange-500 to-orange-600', coordinates: { lat: -15, lng: -60 } },
            'middle-east': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Middle East', flag: '🕌', gradient: 'from-red-500 to-red-600', coordinates: { lat: 25, lng: 45 } },
            'africa': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Africa', flag: '🌍', gradient: 'from-emerald-500 to-emerald-600', coordinates: { lat: 0, lng: 20 } }
        };
        return configs[region] || configs['north-america'];
    };

    // Get industry configuration
    const getIndustryConfig = (industry) => {
        const configs = {
            'retail': { color: 'bg-blue-100 text-blue-700', label: 'Retail', icon: 'building', gradient: 'from-blue-500 to-blue-600' },
            'manufacturing': { color: 'bg-purple-100 text-purple-700', label: 'Manufacturing', icon: 'cog', gradient: 'from-purple-500 to-purple-600' },
            'healthcare': { color: 'bg-green-100 text-green-700', label: 'Healthcare', icon: 'shield', gradient: 'from-green-500 to-green-600' },
            'logistics': { color: 'bg-orange-100 text-orange-700', label: 'Logistics', icon: 'globe', gradient: 'from-orange-500 to-orange-600' },
            'automotive': { color: 'bg-red-100 text-red-700', label: 'Automotive', icon: 'bolt', gradient: 'from-red-500 to-red-600' },
            'consumer-goods': { color: 'bg-indigo-100 text-indigo-700', label: 'Consumer Goods', icon: 'gift', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[industry] || { color: 'bg-gray-100 text-gray-700', label: industry, icon: 'briefcase' };
    };

    // Get client segment configuration
    const getSegmentConfig = (segment) => {
        const configs = {
            'enterprise': { color: 'bg-yellow-100 text-yellow-800', label: 'Enterprise', badge: '🏢 Enterprise', icon: 'building', gradient: 'from-yellow-500 to-amber-500' },
            'mid-market': { color: 'bg-blue-100 text-blue-800', label: 'Mid-Market', badge: '📊 Mid-Market', icon: 'chart', gradient: 'from-blue-500 to-blue-600' },
            'startup': { color: 'bg-green-100 text-green-800', label: 'Startup', badge: '🚀 Startup', icon: 'rocket', gradient: 'from-green-500 to-green-600' }
        };
        return configs[segment] || configs.enterprise;
    };

    // Handle favorite client
    const handleFavoriteClient = (clientId) => {
        setFavoriteClients(prev =>
            prev.includes(clientId)
                ? prev.filter(id => id !== clientId)
                : [...prev, clientId]
        );
    };

    // Open client modal
    const openClientModal = (client) => {
        setSelectedClient(client);
        setShowClientModal(true);
    };

    // Carousel navigation for success stories
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.successStories?.length || 1));
    }, [config?.successStories?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.successStories?.length || 1)) % (config?.successStories?.length || 1));
    }, [config?.successStories?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.successStories?.length > 1 && activeTab === 'stories') {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.successStories?.length, activeTab, nextSlide]);

    // Map dragging handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - mapPanOffset.x, y: e.clientY - mapPanOffset.y });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setMapPanOffset({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Filter clients
    const getFilteredClients = useCallback(() => {
        let clients = config?.clients || [];

        if (searchQuery) {
            clients = clients.filter(c =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedRegion !== 'all') {
            clients = clients.filter(c => c.region === selectedRegion);
        }

        if (selectedIndustry !== 'all') {
            clients = clients.filter(c => c.industry === selectedIndustry);
        }

        if (activeTab === 'favorites') {
            clients = clients.filter(c => favoriteClients.includes(c.id));
        } else if (activeTab === 'featured') {
            clients = clients.filter(c => c.isFeatured);
        }

        return clients;
    }, [config?.clients, searchQuery, selectedRegion, selectedIndustry, activeTab, favoriteClients]);

    const filteredClients = getFilteredClients();
    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: config?.clients?.length || 0 },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    const industries = config?.industries || [
        { id: 'all', label: 'All Industries' },
        { id: 'retail', label: 'Retail' },
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'logistics', label: 'Logistics' },
        { id: 'automotive', label: 'Automotive' },
        { id: 'consumer-goods', label: 'Consumer Goods' }
    ];

    const tabs = [
        { id: 'all', label: 'All Clients', icon: 'users' },
        { id: 'map', label: 'Global Map', icon: 'map' },
        { id: 'stories', label: 'Success Stories', icon: 'quote' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ];

    const successStories = config?.successStories || [];

    // Stats
    const stats = config?.stats || [
        { value: "500+", label: "Global Clients", icon: "users" },
        { value: "45+", label: "Countries", icon: "globe" },
        { value: "6", label: "Continents", icon: "globe" },
        { value: "98%", label: "Client Retention", icon: "star" }
    ];

    // Get color for region
    const getRegionColor = (region) => {
        const colors = {
            'north-america': '#3B82F6',
            'europe': '#8B5CF6',
            'asia-pacific': '#10B981',
            'latin-america': '#F97316',
            'middle-east': '#EF4444',
            'africa': '#10B981'
        };
        return colors[region] || '#6B7280';
    };

    // Active filters count
    const activeFiltersCount = [selectedRegion !== 'all', selectedIndustry !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedRegion('all');
        setSelectedIndustry('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="International Clients Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-clients" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-clients)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineUsers className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Global Clients"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Trusted by"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "500+ Companies"}</span> {config?.title?.suffix || "Worldwide"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-blue-600")}
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
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'favorites' && favoriteClients.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteClients.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Global Map Tab */}
                {activeTab === 'map' && (
                    <div className="mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                {/* Zoom Controls */}
                                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                    <button
                                        onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineZoomIn className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineZoomIn className="w-4 h-4 rotate-180" />
                                    </button>
                                    <button
                                        onClick={() => { setZoomLevel(1); setMapPanOffset({ x: 0, y: 0 }); }}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineRefresh className="w-4 h-4" />
                                    </button>
                                </div>

                                <svg
                                    className="w-full h-full transition-transform duration-300 cursor-grab active:cursor-grabbing"
                                    viewBox="0 0 1200 600"
                                    preserveAspectRatio="none"
                                    style={{ transform: `scale(${zoomLevel}) translate(${mapPanOffset.x / zoomLevel}px, ${mapPanOffset.y / zoomLevel}px)` }}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                >
                                    <rect width="1200" height="600" fill="url(#map-gradient-clients)" className="opacity-30" />
                                    <defs>
                                        <linearGradient id="map-gradient-clients" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>

                                    {/* Continent outlines */}
                                    <path d="M200,150 L280,120 L350,140 L380,180 L350,220 L280,240 L200,220 L170,180 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M500,180 L600,150 L700,160 L750,200 L720,240 L620,250 L520,230 L480,200 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M900,200 L1000,180 L1080,200 L1100,240 L1050,270 L950,260 L880,240 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M300,350 L400,330 L480,340 L520,380 L480,420 L380,430 L280,410 L260,380 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M700,400 L780,380 L850,400 L880,440 L820,470 L730,460 L680,430 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />

                                    {/* Client location markers */}
                                    {filteredClients.map((client, idx) => {
                                        const isHovered = hoveredMarker === client.id;
                                        const isFavorited = favoriteClients.includes(client.id);
                                        return (
                                            <g
                                                key={idx}
                                                className="cursor-pointer transition-all duration-300"
                                                onMouseEnter={() => setHoveredMarker(client.id)}
                                                onMouseLeave={() => setHoveredMarker(null)}
                                                onClick={() => openClientModal(client)}
                                            >
                                                <circle
                                                    cx={client.mapX || (500 + idx * 30)}
                                                    cy={client.mapY || (250 + idx * 20)}
                                                    r={isHovered ? 12 : 8}
                                                    fill={getRegionColor(client.region)}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="transition-all duration-300"
                                                />
                                                {isHovered && (
                                                    <>
                                                        <circle cx={client.mapX || (500 + idx * 30)} cy={client.mapY || (250 + idx * 20)} r="20" fill={getRegionColor(client.region)} fillOpacity="0.2" />
                                                        <text x={client.mapX || (500 + idx * 30)} y={(client.mapY || (250 + idx * 20)) - 15} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                                            {client.name}
                                                        </text>
                                                    </>
                                                )}
                                                {isFavorited && (
                                                    <circle cx={(client.mapX || (500 + idx * 30)) + 10} cy={(client.mapY || (250 + idx * 20)) - 10} r="5" fill="#F59E0B" stroke="white" strokeWidth="1.5" />
                                                )}
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* Map Legend */}
                                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                                            <span className="text-xs text-gray-600">Client Locations</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-orange-500" />
                                            <span className="text-xs text-gray-600">Favorites</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success Stories Tab - Carousel */}
                {activeTab === 'stories' && successStories.length > 0 && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {successStories.map((story, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                                <div className="md:w-1/3">
                                                    {story.logo && (
                                                        <img src={story.logo} alt={story.company} className="h-20 w-auto object-contain mx-auto" />
                                                    )}
                                                    <div className="mt-4 text-center">
                                                        <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                                                            ))}
                                                        </div>
                                                        <span className="text-sm text-gray-500">{story.industry}</span>
                                                    </div>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <HiOutlineQuote className="w-8 h-8 text-blue-500 mb-4" />
                                                    <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">"{story.quote}"</p>
                                                    <div className="flex items-center gap-3">
                                                        {story.authorAvatar ? (
                                                            <img src={story.authorAvatar} alt={story.author} className="w-12 h-12 rounded-full object-cover" />
                                                        ) : (
                                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                                <HiOutlineUserCircle className="w-6 h-6 text-blue-600" />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="font-semibold text-gray-900 dark:text-white">{story.author}</p>
                                                            <p className="text-sm text-gray-500">{story.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div className="grid grid-cols-3 gap-4">
                                                    {story.metrics?.map((metric, mIdx) => (
                                                        <div key={mIdx} className="text-center">
                                                            <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                                                            <div className="text-xs text-gray-500">{metric.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {successStories.length > 1 && (
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
                                        {successStories.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-blue-600' : 'bg-gray-400'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* All Clients / Favorites Tab */}
                {(activeTab === 'all' || activeTab === 'favorites') && (
                    <>
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
                                    placeholder="Search clients by name, industry, or country..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search clients"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {industries.map(ind => (
                                        <option key={ind.id} value={ind.id}>{ind.label}</option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                        ? 'bg-blue-600 text-white'
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

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredClients.length}</span> clients
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredClients.map((client) => {
                                const regionConfig = getRegionConfig(client.region);
                                const industryConfig = getIndustryConfig(client.industry);
                                const segmentConfig = getSegmentConfig(client.segment);
                                const isFavorite = favoriteClients.includes(client.id);

                                return (
                                    <div
                                        key={client.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openClientModal(client)}
                                    >
                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    {client.logo ? (
                                                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />
                                                    ) : (
                                                        <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${regionConfig.gradient} flex items-center justify-center`}>
                                                            <span className="text-lg">{regionConfig.flag}</span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 dark:text-white">{client.name}</h3>
                                                        <div className="flex items-center gap-1 text-xs">
                                                            <span className={`px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                                                {regionConfig.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoriteClient(client.id); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{client.description}</p>

                                            <div className="flex flex-wrap gap-1 mb-3">
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${industryConfig.color}`}>
                                                    {industryConfig.label}
                                                </span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${segmentConfig.color}`}>
                                                    {segmentConfig.badge}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{client.city}, {client.country}</span>
                                            </div>

                                            {client.metrics && (
                                                <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    {client.metrics.slice(0, 3).map((metric, idx) => (
                                                        <div key={idx} className="text-center">
                                                            <div className="text-sm font-bold text-green-600">{metric.value}</div>
                                                            <div className="text-xs text-gray-500">{metric.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-1">
                                                    {client.testimonial && (
                                                        <HiOutlineQuote className="w-4 h-4 text-blue-500" />
                                                    )}
                                                </div>
                                                <span className="text-blue-600 text-xs font-semibold hover:underline">View Details →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* No Results */}
                {(activeTab === 'all' || activeTab === 'favorites') && filteredClients.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineUsers className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No clients found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites' ? "You haven't added any favorite clients yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'favorites' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 hover:underline">
                                Browse All Clients
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Client Detail Modal */}
                {showClientModal && selectedClient && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowClientModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className={`p-6 bg-linear-to-r ${getRegionConfig(selectedClient.region).gradient} text-white`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {selectedClient.logo ? (
                                            <img src={selectedClient.logo} alt={selectedClient.name} className="h-12 w-auto object-contain brightness-0 invert" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                                                {getRegionConfig(selectedClient.region).flag}
                                            </div>
                                        )}
                                        <div>
                                            <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                                            <p className="text-sm text-white/80">{selectedClient.city}, {selectedClient.country}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowClientModal(false)} className="text-white/80 hover:text-white">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Industry</p>
                                        <p className="text-gray-900 dark:text-white">{getIndustryConfig(selectedClient.industry).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Region</p>
                                        <p className="text-gray-900 dark:text-white">{getRegionConfig(selectedClient.region).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Segment</p>
                                        <p className="text-gray-900 dark:text-white">{getSegmentConfig(selectedClient.segment).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Location</p>
                                        <p className="text-gray-900 dark:text-white">{selectedClient.city}, {selectedClient.country}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedClient.description}</p>
                                {selectedClient.metrics && (
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {selectedClient.metrics.map((metric, idx) => (
                                            <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                <div className="text-lg font-bold text-green-600">{metric.value}</div>
                                                <div className="text-xs text-gray-500">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {selectedClient.testimonial && (
                                    <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <HiOutlineQuote className="w-5 h-5 text-blue-500 mb-2" />
                                        <p className="text-sm italic text-gray-700 dark:text-gray-300">"{selectedClient.testimonial.text}"</p>
                                        <p className="text-xs text-gray-500 mt-2">— {selectedClient.testimonial.author}, {selectedClient.testimonial.title}</p>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <Link href={selectedClient.link} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        View Case Study
                                    </Link>
                                    <button
                                        onClick={() => handleFavoriteClient(selectedClient.id)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${favoriteClients.includes(selectedClient.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Become a Client CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Join Our Global Client Community</h3>
                            <p className="text-blue-100 max-w-2xl">
                                See how SupplyChainPro can transform your supply chain operations. Join hundreds of leading companies worldwide.
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
        .cursor-grab {
          cursor: grab;
        }
        .cursor-grabbing {
          cursor: grabbing;
        }
      `}</style>
        </section>
    );
};

export default InternationalClientsSection3;