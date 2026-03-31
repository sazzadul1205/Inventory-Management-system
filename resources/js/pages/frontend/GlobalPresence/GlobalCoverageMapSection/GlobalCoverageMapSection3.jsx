// page/frontend/GlobalPresence/GlobalCoverageMapSection/GlobalCoverageMapSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";

import {
    HiOutlineGlobe,
    HiOutlineLocationMarker,
    HiOutlineOfficeBuilding,
    HiOutlineUsers,
    HiOutlineClock,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineCalendar,
    HiOutlineEye,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
    HiOutlineTrendingUp,
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
    HiOutlineRefresh
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const GlobalCoverageMapSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('map');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const carouselRef = useRef(null);
    const mapRef = useRef(null);

    // Load saved data from localStorage
    const [favoriteCountries, setFavoriteCountries] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('favoriteCountries');
        if (saved) setFavoriteCountries(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteCountries', JSON.stringify(favoriteCountries));
    }, [favoriteCountries]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            globe: <HiOutlineGlobe className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            office: <HiOutlineOfficeBuilding className={className} />,
            users: <HiOutlineUsers className={className} />,
            clock: <HiOutlineClock className={className} />,
            phone: <HiOutlinePhone className={className} />,
            mail: <HiOutlineMail className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            usergroup: <HiOutlineUserGroup className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            chartBar: <HiOutlineChartBarIcon className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            trendingUp: <HiOutlineTrendingUpIcon className={className} />,
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
            printer: <HiOutlinePrinter className={className} />
        };
        return icons[iconName] || <HiOutlineGlobe className={className} />;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'North America', flag: '🇺🇸', gradient: 'from-blue-500 to-blue-600', bgGradient: 'from-blue-500/20 to-blue-600/20' },
            'europe': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Europe', flag: '🇪🇺', gradient: 'from-purple-500 to-purple-600', bgGradient: 'from-purple-500/20 to-purple-600/20' },
            'asia-pacific': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Asia Pacific', flag: '🌏', gradient: 'from-green-500 to-green-600', bgGradient: 'from-green-500/20 to-green-600/20' },
            'latin-america': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Latin America', flag: '🌎', gradient: 'from-orange-500 to-orange-600', bgGradient: 'from-orange-500/20 to-orange-600/20' },
            'middle-east': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Middle East', flag: '🕌', gradient: 'from-red-500 to-red-600', bgGradient: 'from-red-500/20 to-red-600/20' },
            'africa': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Africa', flag: '🌍', gradient: 'from-emerald-500 to-emerald-600', bgGradient: 'from-emerald-500/20 to-emerald-600/20' }
        };
        return configs[region] || configs['north-america'];
    };

    // Country data
    const countryCoverage = useMemo(() => (config?.countryCoverage || [
        { name: "United States", code: "US", region: "north-america", offices: 8, employees: 650, customers: 1200, growth: "+15%", marketShare: "32%", mapX: 750, mapY: 250 },
        { name: "Canada", code: "CA", region: "north-america", offices: 3, employees: 180, customers: 450, growth: "+12%", marketShare: "8%", mapX: 720, mapY: 220 },
        { name: "Mexico", code: "MX", region: "north-america", offices: 2, employees: 120, customers: 280, growth: "+20%", marketShare: "5%", mapX: 680, mapY: 320 },
        { name: "United Kingdom", code: "GB", region: "europe", offices: 4, employees: 250, customers: 580, growth: "+10%", marketShare: "15%", mapX: 520, mapY: 210 },
        { name: "Germany", code: "DE", region: "europe", offices: 3, employees: 200, customers: 520, growth: "+8%", marketShare: "14%", mapX: 490, mapY: 190 },
        { name: "France", code: "FR", region: "europe", offices: 2, employees: 140, customers: 380, growth: "+14%", marketShare: "10%", mapX: 510, mapY: 200 },
        { name: "China", code: "CN", region: "asia-pacific", offices: 4, employees: 320, customers: 680, growth: "+25%", marketShare: "18%", mapX: 980, mapY: 310 },
        { name: "Japan", code: "JP", region: "asia-pacific", offices: 3, employees: 210, customers: 520, growth: "+9%", marketShare: "14%", mapX: 1020, mapY: 330 },
        { name: "Singapore", code: "SG", region: "asia-pacific", offices: 2, employees: 150, customers: 380, growth: "+18%", marketShare: "10%", mapX: 940, mapY: 380 },
        { name: "India", code: "IN", region: "asia-pacific", offices: 3, employees: 280, customers: 620, growth: "+32%", marketShare: "16%", mapX: 860, mapY: 340 },
        { name: "Brazil", code: "BR", region: "latin-america", offices: 3, employees: 220, customers: 480, growth: "+21%", marketShare: "35%", mapX: 320, mapY: 440 },
        { name: "UAE", code: "AE", region: "middle-east", offices: 2, employees: 120, customers: 280, growth: "+28%", marketShare: "25%", mapX: 470, mapY: 340 },
        { name: "South Africa", code: "ZA", region: "africa", offices: 2, employees: 110, customers: 250, growth: "+19%", marketShare: "30%", mapX: 580, mapY: 510 }
    ]
    ), [config?.countryCoverage]);

    // Regions data
    const regions = config?.regions || [
        { id: 'all', label: 'Global', icon: 'globe', count: countryCoverage.length, color: '#3B82F6' },
        { id: 'north-america', label: 'North America', icon: 'globe', count: 3, color: '#3B82F6' },
        { id: 'europe', label: 'Europe', icon: 'globe', count: 4, color: '#8B5CF6' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe', count: 5, color: '#10B981' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe', count: 1, color: '#F97316' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe', count: 1, color: '#EF4444' },
        { id: 'africa', label: 'Africa', icon: 'globe', count: 1, color: '#10B981' }
    ];

    // Tabs
    const tabs = [
        { id: 'map', label: 'Interactive Map', icon: 'map' },
        { id: 'stats', label: 'Global Statistics', icon: 'chartBar' },
        { id: 'growth', label: 'Growth Markets', icon: 'trendingUp' },
        { id: 'favorites', label: 'Saved Countries', icon: 'heart' }
    ];

    // Filter countries
    const getFilteredCountries = useCallback(() => {
        let countries = [...countryCoverage];

        if (searchQuery) {
            countries = countries.filter(c =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.code.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedRegion !== 'all') {
            countries = countries.filter(c => c.region === selectedRegion);
        }

        if (activeTab === 'favorites') {
            countries = countries.filter(c => favoriteCountries.includes(c.code));
        } else if (activeTab === 'growth') {
            countries = [...countries].sort((a, b) => parseInt(b.growth) - parseInt(a.growth)).slice(0, 6);
        }

        return countries;
    }, [countryCoverage, searchQuery, selectedRegion, activeTab, favoriteCountries]);

    const filteredCountries = getFilteredCountries();

    // Calculate global stats
    const globalStats = {
        totalCountries: countryCoverage.length,
        totalOffices: countryCoverage.reduce((sum, c) => sum + c.offices, 0),
        totalEmployees: countryCoverage.reduce((sum, c) => sum + c.employees, 0),
        totalCustomers: countryCoverage.reduce((sum, c) => sum + c.customers, 0),
        averageGrowth: (countryCoverage.reduce((sum, c) => sum + parseInt(c.growth), 0) / countryCoverage.length).toFixed(1)
    };

    // Region stats
    const regionStats = regions.filter(r => r.id !== 'all').map(region => ({
        ...region,
        countries: countryCoverage.filter(c => c.region === region.id).length,
        offices: countryCoverage.filter(c => c.region === region.id).reduce((sum, c) => sum + c.offices, 0),
        employees: countryCoverage.filter(c => c.region === region.id).reduce((sum, c) => sum + c.employees, 0)
    }));

    // Carousel navigation for stats
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (regionStats.length || 1));
    }, [regionStats.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (regionStats.length || 1)) % (regionStats.length || 1));
    }, [regionStats.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && regionStats.length > 1 && activeTab === 'stats') {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, regionStats.length, activeTab, nextSlide]);

    // Handle map dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPanOffset({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle favorite country
    const handleFavoriteCountry = (countryCode) => {
        setFavoriteCountries(prev =>
            prev.includes(countryCode)
                ? prev.filter(c => c !== countryCode)
                : [...prev, countryCode]
        );
    };

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
    const activeFiltersCount = [selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedRegion('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Global Coverage Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-global" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-global)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineGlobe className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Global Coverage"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Global Footprint"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them."}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-bold text-blue-600">{globalStats.totalCountries}+</div>
                            <div className="text-xs text-gray-500">Countries</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-bold text-green-600">{globalStats.totalOffices}</div>
                            <div className="text-xs text-gray-500">Offices</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-bold text-purple-600">{globalStats.totalEmployees.toLocaleString()}+</div>
                            <div className="text-xs text-gray-500">Employees</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-bold text-orange-600">{globalStats.averageGrowth}%</div>
                            <div className="text-xs text-gray-500">Avg. Growth</div>
                        </div>
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
                            {tab.id === 'favorites' && favoriteCountries.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteCountries.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Interactive Map Tab */}
                {activeTab === 'map' && (
                    <div className="mb-12">
                        {/* Search and Filters */}
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by country name or code..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search countries"
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

                        {/* Interactive Map */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div
                                className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                                ref={mapRef}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                {/* Zoom Controls */}
                                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                    <button
                                        onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2.5))}
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
                                        onClick={() => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); }}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineRefresh className="w-4 h-4" />
                                    </button>
                                </div>

                                <svg
                                    className="w-full h-full transition-transform duration-300"
                                    viewBox="0 0 1200 600"
                                    preserveAspectRatio="none"
                                    style={{ transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)` }}
                                >
                                    <rect width="1200" height="600" fill="url(#map-gradient)" className="opacity-30" />
                                    <defs>
                                        <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

                                    {/* Country markers */}
                                    {filteredCountries.map((country, idx) => {
                                        const isHovered = hoveredCountry === country.code;
                                        const isFavorited = favoriteCountries.includes(country.code);
                                        return (
                                            <g
                                                key={idx}
                                                className="cursor-pointer transition-all duration-300"
                                                onMouseEnter={() => setHoveredCountry(country.code)}
                                                onMouseLeave={() => setHoveredCountry(null)}
                                                onClick={() => setSelectedCountry(country)}
                                            >
                                                <circle
                                                    cx={country.mapX}
                                                    cy={country.mapY}
                                                    r={isHovered ? 14 : 10}
                                                    fill={getRegionColor(country.region)}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="transition-all duration-300"
                                                />
                                                {isHovered && (
                                                    <>
                                                        <circle cx={country.mapX} cy={country.mapY} r="24" fill={getRegionColor(country.region)} fillOpacity="0.3" />
                                                        <text x={country.mapX} y={country.mapY - 18} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                                            {country.name}
                                                        </text>
                                                    </>
                                                )}
                                                {isFavorited && (
                                                    <circle cx={country.mapX + 12} cy={country.mapY - 12} r="6" fill="#F59E0B" stroke="white" strokeWidth="1.5" />
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
                                            <span className="text-xs text-gray-600">North America</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                                            <span className="text-xs text-gray-600">Europe</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                            <span className="text-xs text-gray-600">Asia Pacific</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-orange-500" />
                                            <span className="text-xs text-gray-600">Latin America</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredCountries.length}</span> countries
                            </p>
                        </div>
                    </div>
                )}

                {/* Global Statistics Tab - Carousel */}
                {activeTab === 'stats' && (
                    <div className="mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {regionStats.map((region) => {
                                    const regionConfig = getRegionConfig(region.id);
                                    return (
                                        <div key={region.id} className="w-full shrink-0">
                                            <div className={`bg-linear-to-br ${regionConfig.bgGradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-700`}>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className={`w-12 h-12 rounded-full ${regionConfig.color} flex items-center justify-center text-2xl`}>
                                                        {regionConfig.flag}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{region.label}</h2>
                                                        <p className="text-sm text-gray-500">{region.countries} countries</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4 mb-6">
                                                    <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                                        <div className="text-2xl font-bold text-blue-600">{region.offices}</div>
                                                        <div className="text-xs text-gray-500">Offices</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                                        <div className="text-2xl font-bold text-green-600">{region.employees.toLocaleString()}</div>
                                                        <div className="text-xs text-gray-500">Employees</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                                        <div className="text-2xl font-bold text-purple-600">{region.countries}</div>
                                                        <div className="text-xs text-gray-500">Countries</div>
                                                    </div>
                                                </div>
                                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${(region.offices / globalStats.totalOffices) * 100}%` }} />
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2 text-center">{Math.round((region.offices / globalStats.totalOffices) * 100)}% of global offices</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {regionStats.length > 1 && (
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
                                        {regionStats.map((_, idx) => (
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

                {/* Growth Markets Tab */}
                {activeTab === 'growth' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredCountries.map((country) => {
                            const regionConfig = getRegionConfig(country.region);
                            const isFavorited = favoriteCountries.includes(country.code);
                            return (
                                <div
                                    key={country.code}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => setSelectedCountry(country)}
                                >
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center text-lg font-bold`}>
                                                    {country.code}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white">{country.name}</h3>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                                        {regionConfig.label}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleFavoriteCountry(country.code); }}
                                                className={`transition-colors ${isFavorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            >
                                                <HiOutlineHeart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <HiOutlineTrendingUpIcon className="w-5 h-5 text-green-500" />
                                            <span className="text-2xl font-bold text-green-600">{country.growth}</span>
                                            <span className="text-sm text-gray-500">YoY Growth</span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-blue-600">{country.offices}</div>
                                                <div className="text-xs text-gray-500">Offices</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-green-600">{country.employees}</div>
                                                <div className="text-xs text-gray-500">Employees</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-purple-600">{country.customers}+</div>
                                                <div className="text-xs text-gray-500">Customers</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <span className="text-xs text-gray-500">Market Share: {country.marketShare}</span>
                                            <span className="text-blue-600 text-xs font-semibold hover:underline">View Details →</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Favorites Tab */}
                {activeTab === 'favorites' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => {
                                const regionConfig = getRegionConfig(country.region);
                                return (
                                    <div
                                        key={country.code}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => setSelectedCountry(country)}
                                    >
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center text-lg font-bold`}>
                                                        {country.code}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 dark:text-white">{country.name}</h3>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                                            {regionConfig.label}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoriteCountry(country.code); }}
                                                    className="text-red-500"
                                                >
                                                    <HiOutlineHeart className="w-5 h-5 fill-current" />
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 mb-4">
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-lg font-bold text-blue-600">{country.offices}</div>
                                                    <div className="text-xs text-gray-500">Offices</div>
                                                </div>
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-lg font-bold text-green-600">{country.employees}</div>
                                                    <div className="text-xs text-gray-500">Employees</div>
                                                </div>
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-lg font-bold text-purple-600">{country.customers}+</div>
                                                    <div className="text-xs text-gray-500">Customers</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <span className="text-xs text-green-600 font-semibold">Growth: {country.growth}</span>
                                                <span className="text-blue-600 text-xs font-semibold hover:underline">View Details →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <HiOutlineHeart className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No favorite countries</h3>
                                <p className="text-gray-500 dark:text-gray-400">Click the heart icon on any country to save it here.</p>
                                <button onClick={() => setActiveTab('map')} className="mt-4 text-blue-600 hover:underline">
                                    Browse Countries
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* No Results */}
                {activeTab !== 'favorites' && filteredCountries.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineGlobe className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No countries found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Country Detail Modal */}
                {selectedCountry && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedCountry(null)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className={`p-6 bg-linear-to-r ${getRegionConfig(selectedCountry.region).gradient} text-white`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-4xl font-bold">{selectedCountry.code}</div>
                                        <h2 className="text-2xl font-bold">{selectedCountry.name}</h2>
                                    </div>
                                    <button onClick={() => setSelectedCountry(null)} className="text-white/80 hover:text-white">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                        <div className="text-2xl font-bold text-blue-600">{selectedCountry.offices}</div>
                                        <div className="text-xs text-gray-500">Office Locations</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                        <div className="text-2xl font-bold text-green-600">{selectedCountry.employees}</div>
                                        <div className="text-xs text-gray-500">Employees</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                        <div className="text-2xl font-bold text-purple-600">{selectedCountry.customers}+</div>
                                        <div className="text-xs text-gray-500">Customers</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                        <div className="text-2xl font-bold text-orange-600">{selectedCountry.growth}</div>
                                        <div className="text-xs text-gray-500">YoY Growth</div>
                                    </div>
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <button
                                        onClick={() => handleFavoriteCountry(selectedCountry.code)}
                                        className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${favoriteCountries.includes(selectedCountry.code) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className={`w-5 h-5 inline mr-2 ${favoriteCountries.includes(selectedCountry.code) ? 'fill-current' : ''}`} />
                                        {favoriteCountries.includes(selectedCountry.code) ? 'Remove from Favorites' : 'Add to Favorites'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Global Support Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Global Support, Local Expertise</h3>
                            <p className="text-blue-100 max-w-2xl">
                                No matter where you are, our local teams are ready to provide personalized support in your language and time zone.
                            </p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            Find Your Local Office
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

export default GlobalCoverageMapSection3;