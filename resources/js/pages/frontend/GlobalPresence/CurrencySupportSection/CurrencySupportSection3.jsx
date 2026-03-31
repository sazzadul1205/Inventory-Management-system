// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineCurrencyDollar,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineTrendingUp,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineStar,
    HiOutlineLocationMarker,
    HiOutlineCalendar,
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
    HiOutlineFire,
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
    HiOutlineVolumeUp,
    HiOutlineMicrophone,
    HiOutlineCreditCard as HiOutlineCreditCardIcon,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineRefresh,
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera,
    HiOutlineZoomIn,
    HiOutlineQrcode,
    HiOutlinePrinter,
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineChartBar as HiOutlineChartBarIcon,
    HiOutlineTrendingUp as HiOutlineTrendingUpIcon,
    HiOutlineUserCircle,
    HiOutlineChartSquareBar
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
    HiArrowRight,
} from 'react-icons/hi2';
import {
    MdOutlineHeadphones as HiOutlineHeadphones,
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const CurrencySupportSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCurrency, setSelectedCurrency] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCurrencyData, setSelectedCurrencyData] = useState(null);
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const [favoriteCurrencies, setFavoriteCurrencies] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [selectedChartCurrency, setSelectedChartCurrency] = useState('USD');
    const [historicalRates, setHistoricalRates] = useState([]);
    const carouselRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoriteCurrencies');
        if (saved) setFavoriteCurrencies(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteCurrencies', JSON.stringify(favoriteCurrencies));
    }, [favoriteCurrencies]);

    // Generate historical rates data
    useEffect(() => {
        const generateHistoricalRates = () => {
            const rates = [];
            const baseRate = currenciesList.find(c => c.code === selectedChartCurrency)?.exchangeRate || 1;
            for (let i = 30; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                const variation = 1 + (Math.random() - 0.5) * 0.05;
                rates.push({
                    date: date.toISOString().split('T')[0],
                    rate: baseRate * variation
                });
            }
            setHistoricalRates(rates);
        };
        generateHistoricalRates();
    }, [currenciesList, selectedChartCurrency]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            dollar: <HiOutlineCurrencyDollar className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            chartBar: <HiOutlineChartBarIcon className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            trendingUp: <HiOutlineTrendingUpIcon className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            clock: <HiOutlineClock className={className} />,
            users: <HiOutlineUsers className={className} />,
            star: <HiOutlineStar className={className} />,
            arrow: <HiArrowRight className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
            trophy: <HiOutlineTrophy className={className} />,
            usergroup: <HiOutlineUserGroup className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            fire: <HiOutlineFire className={className} />,
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
            headphones: <HiOutlineHeadphones className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            creditCard: <HiOutlineCreditCardIcon className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            userCircle: <HiOutlineUserCircle className={className} />,
            chartSquare: <HiOutlineChartSquareBar className={className} />
        };
        return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
    };

    // Get currency configuration
    const getCurrencyConfig = (currencyCode) => {
        const configs = {
            'USD': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'dollar', label: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸', gradient: 'from-green-500 to-green-600', coordinates: { x: 750, y: 250 } },
            'EUR': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'dollar', label: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺', gradient: 'from-blue-500 to-blue-600', coordinates: { x: 520, y: 210 } },
            'GBP': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'dollar', label: 'British Pound', symbol: '£', code: 'GBP', flag: '🇬🇧', gradient: 'from-purple-500 to-purple-600', coordinates: { x: 550, y: 215 } },
            'JPY': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'dollar', label: 'Japanese Yen', symbol: '¥', code: 'JPY', flag: '🇯🇵', gradient: 'from-red-500 to-red-600', coordinates: { x: 1020, y: 330 } },
            'CNY': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'dollar', label: 'Chinese Yuan', symbol: '¥', code: 'CNY', flag: '🇨🇳', gradient: 'from-orange-500 to-orange-600', coordinates: { x: 980, y: 310 } },
            'CAD': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'dollar', label: 'Canadian Dollar', symbol: '$', code: 'CAD', flag: '🇨🇦', gradient: 'from-indigo-500 to-indigo-600', coordinates: { x: 760, y: 220 } },
            'AUD': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'dollar', label: 'Australian Dollar', symbol: '$', code: 'AUD', flag: '🇦🇺', gradient: 'from-pink-500 to-pink-600', coordinates: { x: 1080, y: 470 } },
            'CHF': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'dollar', label: 'Swiss Franc', symbol: 'Fr', code: 'CHF', flag: '🇨🇭', gradient: 'from-yellow-500 to-yellow-600', coordinates: { x: 490, y: 195 } },
            'SGD': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'dollar', label: 'Singapore Dollar', symbol: '$', code: 'SGD', flag: '🇸🇬', gradient: 'from-teal-500 to-teal-600', coordinates: { x: 940, y: 380 } },
            'INR': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'dollar', label: 'Indian Rupee', symbol: '₹', code: 'INR', flag: '🇮🇳', gradient: 'from-amber-500 to-amber-600', coordinates: { x: 860, y: 340 } },
            'BRL': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'dollar', label: 'Brazilian Real', symbol: 'R$', code: 'BRL', flag: '🇧🇷', gradient: 'from-emerald-500 to-emerald-600', coordinates: { x: 320, y: 440 } }
        };
        return configs[currencyCode] || { color: 'bg-gray-100 text-gray-700', icon: 'dollar', label: currencyCode, symbol: '', code: currencyCode, flag: '🌐' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸', gradient: 'from-blue-500 to-blue-600' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺', gradient: 'from-purple-500 to-purple-600' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏', gradient: 'from-green-500 to-green-600' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎', gradient: 'from-orange-500 to-orange-600' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌', gradient: 'from-red-500 to-red-600' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍', gradient: 'from-emerald-500 to-emerald-600' }
        };
        return configs[region] || { color: 'bg-gray-100 text-gray-700', label: region, flag: '🌐' };
    };

    // Handle favorite currency
    const handleFavoriteCurrency = (currencyCode) => {
        setFavoriteCurrencies(prev =>
            prev.includes(currencyCode)
                ? prev.filter(c => c !== currencyCode)
                : [...prev, currencyCode]
        );
    };

    // Open currency modal
    const openCurrencyModal = (currency) => {
        setSelectedCurrencyData(currency);
        setShowCurrencyModal(true);
    };

    // Carousel navigation for features
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.currencyFeatures?.length || 1));
    }, [config?.currencyFeatures?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.currencyFeatures?.length || 1)) % (config?.currencyFeatures?.length || 1));
    }, [config?.currencyFeatures?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.currencyFeatures?.length > 1 && activeTab === 'features') {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.currencyFeatures?.length, activeTab, nextSlide]);

    // Filter currencies
    const getFilteredCurrencies = useCallback(() => {
        let currencies = config?.currencies || [];

        if (searchQuery) {
            currencies = currencies.filter(c =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.regions?.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCurrency !== 'all') {
            currencies = currencies.filter(c => c.code === selectedCurrency);
        }

        if (selectedRegion !== 'all') {
            currencies = currencies.filter(c => c.regions?.includes(selectedRegion));
        }

        if (activeTab === 'favorites') {
            currencies = currencies.filter(c => favoriteCurrencies.includes(c.code));
        } else if (activeTab === 'featured') {
            currencies = currencies.filter(c => c.isFeatured);
        }

        return currencies;
    }, [config?.currencies, searchQuery, selectedCurrency, selectedRegion, activeTab, favoriteCurrencies]);

    const filteredCurrencies = getFilteredCurrencies();


    const currenciesList = useMemo(() => config?.currencies || [
        { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', regions: ['north-america'], exchangeRate: 1.00, lastUpdated: '2024-03-15', isBase: true, popularity: 98, status: 'active', isFeatured: true },
        { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', regions: ['europe'], exchangeRate: 0.92, lastUpdated: '2024-03-15', popularity: 95, status: 'active', isFeatured: true },
        { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', regions: ['europe'], exchangeRate: 0.79, lastUpdated: '2024-03-15', popularity: 92, status: 'active' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', regions: ['asia-pacific'], exchangeRate: 149.50, lastUpdated: '2024-03-15', popularity: 88, status: 'active' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', regions: ['asia-pacific'], exchangeRate: 7.20, lastUpdated: '2024-03-15', popularity: 85, status: 'active' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: '$', flag: '🇨🇦', regions: ['north-america'], exchangeRate: 1.35, lastUpdated: '2024-03-15', popularity: 82, status: 'active' },
        { code: 'AUD', name: 'Australian Dollar', symbol: '$', flag: '🇦🇺', regions: ['asia-pacific'], exchangeRate: 1.52, lastUpdated: '2024-03-15', popularity: 80, status: 'active' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭', regions: ['europe'], exchangeRate: 0.88, lastUpdated: '2024-03-15', popularity: 78, status: 'active' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: '$', flag: '🇸🇬', regions: ['asia-pacific'], exchangeRate: 1.34, lastUpdated: '2024-03-15', popularity: 75, status: 'active' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', regions: ['asia-pacific'], exchangeRate: 83.10, lastUpdated: '2024-03-15', popularity: 88, status: 'active' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷', regions: ['latin-america'], exchangeRate: 5.00, lastUpdated: '2024-03-15', popularity: 72, status: 'active' }
    ], [config?.currencies]);

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: currenciesList.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    const tabs = [
        { id: 'all', label: 'All Currencies', icon: 'dollar' },
        { id: 'map', label: 'Currency Map', icon: 'map' },
        { id: 'chart', label: 'Exchange Rates', icon: 'chart' },
        { id: 'features', label: 'Features', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ];

    const currencyFeatures = config?.currencyFeatures || [
        { title: "Real-time Exchange Rates", description: "Live rates updated every minute", icon: "refresh", gradient: "from-blue-500 to-blue-600" },
        { title: "Multi-currency Billing", description: "Invoice in your customer's currency", icon: "credit", gradient: "from-green-500 to-green-600" },
        { title: "Automatic Conversion", description: "Seamless currency conversion", icon: "refresh", gradient: "from-purple-500 to-purple-600" },
        { title: "Historical Rate Charts", description: "Track rate trends over time", icon: "chart", gradient: "from-orange-500 to-orange-600" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Currencies Supported", icon: "dollar" },
        { value: "150+", label: "Countries", icon: "globe" },
        { value: "24/7", label: "Real-time Rates", icon: "clock" },
        { value: "99.9%", label: "Accuracy", icon: "star" }
    ];

    // Get min and max rates for chart
    const minRate = Math.min(...historicalRates.map(r => r.rate));
    const maxRate = Math.max(...historicalRates.map(r => r.rate));
    const range = maxRate - minRate;

    // Active filters count
    const activeFiltersCount = [selectedCurrency !== 'all', selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCurrency('all');
        setSelectedRegion('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Currency Support Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-currency" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-currency)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineCurrencyDollar className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Currency Support"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Global"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Currency"}</span> {config?.title?.suffix || "Support"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-green-600")}
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
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'favorites' && favoriteCurrencies.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteCurrencies.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Currency Map Tab */}
                {activeTab === 'map' && (
                    <div className="mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="relative aspect-video bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
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
                                </div>

                                <svg
                                    className="w-full h-full transition-transform duration-300"
                                    viewBox="0 0 1200 600"
                                    preserveAspectRatio="none"
                                    style={{ transform: `scale(${zoomLevel})` }}
                                >
                                    <rect width="1200" height="600" fill="url(#map-gradient-currency)" className="opacity-30" />
                                    <defs>
                                        <linearGradient id="map-gradient-currency" x1="0%" y1="0%" x2="100%" y2="100%">
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

                                    {/* Currency markers */}
                                    {filteredCurrencies.map((currency) => {
                                        const currencyConfig = getCurrencyConfig(currency.code);
                                        const isHovered = hoveredMarker === currency.code;
                                        const isFavorited = favoriteCurrencies.includes(currency.code);
                                        return (
                                            <g
                                                key={currency.code}
                                                className="cursor-pointer transition-all duration-300"
                                                onMouseEnter={() => setHoveredMarker(currency.code)}
                                                onMouseLeave={() => setHoveredMarker(null)}
                                                onClick={() => openCurrencyModal(currency)}
                                            >
                                                <circle
                                                    cx={currencyConfig.coordinates?.x || 500}
                                                    cy={currencyConfig.coordinates?.y || 250}
                                                    r={isHovered ? 14 : 10}
                                                    fill={currencyConfig.color.split(' ')[0].replace('bg-', '') === 'green' ? '#10B981' :
                                                        currencyConfig.color.split(' ')[0].replace('bg-', '') === 'blue' ? '#3B82F6' : '#8B5CF6'}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="transition-all duration-300"
                                                />
                                                {isHovered && (
                                                    <>
                                                        <circle cx={currencyConfig.coordinates?.x || 500} cy={currencyConfig.coordinates?.y || 250} r="22" fill={currencyConfig.color.split(' ')[0].replace('bg-', '') === 'green' ? '#10B981' : '#3B82F6'} fillOpacity="0.2" />
                                                        <text x={currencyConfig.coordinates?.x || 500} y={(currencyConfig.coordinates?.y || 250) - 18} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                                            {currency.code}
                                                        </text>
                                                    </>
                                                )}
                                                {isFavorited && (
                                                    <circle cx={(currencyConfig.coordinates?.x || 500) + 12} cy={(currencyConfig.coordinates?.y || 250) - 12} r="6" fill="#F59E0B" stroke="white" strokeWidth="1.5" />
                                                )}
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* Map Legend */}
                                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                            <span className="text-xs text-gray-600">Major Currencies</span>
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

                {/* Exchange Rates Chart Tab */}
                {activeTab === 'chart' && (
                    <div className="mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Exchange Rate Trends</h2>
                                <select
                                    value={selectedChartCurrency}
                                    onChange={(e) => setSelectedChartCurrency(e.target.value)}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {currenciesList.map(currency => (
                                        <option key={currency.code} value={currency.code}>{currency.flag} {currency.code} - {currency.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative h-80">
                                <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                                    {/* Grid lines */}
                                    {[...Array(5)].map((_, i) => {
                                        const y = 40 + i * 80;
                                        return (
                                            <g key={i}>
                                                <line x1="40" y1={y} x2="760" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
                                                <text x="30" y={y + 4} fill="#9CA3AF" fontSize="10">
                                                    {(maxRate - (i / 4) * range).toFixed(2)}
                                                </text>
                                            </g>
                                        );
                                    })}

                                    {/* Rate line */}
                                    <polyline
                                        points={historicalRates.map((rate, i) => {
                                            const x = 40 + (i / (historicalRates.length - 1)) * 720;
                                            const y = 40 + (1 - (rate.rate - minRate) / range) * 320;
                                            return `${x},${y}`;
                                        }).join(' ')}
                                        fill="none"
                                        stroke="#10B981"
                                        strokeWidth="2"
                                    />

                                    {/* Area fill under line */}
                                    <polygon
                                        points={`40,360 ${historicalRates.map((rate, i) => {
                                            const x = 40 + (i / (historicalRates.length - 1)) * 720;
                                            const y = 40 + (1 - (rate.rate - minRate) / range) * 320;
                                            return `${x},${y}`;
                                        }).join(' ')} 760,360 40,360`}
                                        fill="url(#gradient-area)"
                                        fillOpacity="0.3"
                                    />

                                    <defs>
                                        <linearGradient id="gradient-area" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* X-axis labels */}
                                    {[0, 5, 10, 15, 20, 25, 30].map(i => {
                                        if (i <= historicalRates.length - 1) {
                                            return (
                                                <text key={i} x={40 + (i / 30) * 720} y="380" fill="#9CA3AF" fontSize="10" textAnchor="middle">
                                                    {historicalRates[i]?.date?.slice(5)}
                                                </text>
                                            );
                                        }
                                        return null;
                                    })}
                                </svg>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">Last 30 days - Rate to USD</p>
                        </div>
                    </div>
                )}

                {/* Currency Features Tab - Carousel */}
                {activeTab === 'features' && currencyFeatures.length > 0 && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {currencyFeatures.map((feature, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className={`bg-linear-to-br ${feature.gradient} rounded-3xl p-12 text-white text-center`}>
                                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                {getIcon(feature.icon, "w-10 h-10 text-white")}
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                                            <p className="text-white/90 text-xl max-w-2xl mx-auto">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {currencyFeatures.length > 1 && (
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
                                        {currencyFeatures.map((_, idx) => (
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

                {/* All Currencies / Favorites Tab */}
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
                                    placeholder="Search by currency name, code, or region..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                    aria-label="Search currencies"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedCurrency}
                                    onChange={(e) => setSelectedCurrency(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Currencies</option>
                                    {currenciesList.map(currency => (
                                        <option key={currency.code} value={currency.code}>{currency.flag} {currency.code}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                        ? 'bg-green-600 text-white'
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

                        {/* Exchange Rate Banner */}
                        <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <HiOutlineClock className="w-4 h-4 inline mr-1" />
                                Exchange rates updated: {new Date().toLocaleDateString()} • Rates are indicative and updated every hour
                            </p>
                        </div>

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredCurrencies.length}</span> currencies
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Currencies Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredCurrencies.map((currency) => {
                                const currencyConfig = getCurrencyConfig(currency.code);
                                const isFavorite = favoriteCurrencies.includes(currency.code);
                                return (
                                    <div
                                        key={currency.code}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openCurrencyModal(currency)}
                                    >
                                        <div className={`p-5 bg-linear-to-r ${currencyConfig.gradient} text-white`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-4xl">{currencyConfig.flag}</span>
                                                    <div>
                                                        <h3 className="font-bold text-lg">{currency.name}</h3>
                                                        <p className="text-sm text-white/80">{currency.symbol} {currency.code}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoriteCurrency(currency.code); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-white/70 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <HiOutlineTrendingUp className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-600">Rate to USD: {currency.exchangeRate}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {currency.regions?.map((region, idx) => {
                                                    const regConfig = getRegionConfig(region);
                                                    return (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                                                            <span>{regConfig.flag}</span>
                                                            {regConfig.label}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 mb-3">
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-sm font-bold text-green-600">{currency.popularity}%</div>
                                                    <div className="text-xs text-gray-500">Popularity</div>
                                                </div>
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-sm font-bold text-blue-600">{currency.status === 'active' ? 'Active' : 'Beta'}</div>
                                                    <div className="text-xs text-gray-500">Status</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <span className="text-xs text-gray-500">Updated: {currency.lastUpdated}</span>
                                                <span className="text-green-600 text-xs font-semibold hover:underline">View Details →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* No Results */}
                {(activeTab === 'all' || activeTab === 'favorites') && filteredCurrencies.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineCurrencyDollar className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No currencies found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites' ? "You haven't added any favorite currencies yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'favorites' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-green-600 hover:underline">
                                Browse All Currencies
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-green-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Currency Detail Modal */}
                {showCurrencyModal && selectedCurrencyData && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCurrencyModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className={`p-6 bg-linear-to-r ${getCurrencyConfig(selectedCurrencyData.code).gradient} text-white`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">{selectedCurrencyData.flag}</span>
                                        <div>
                                            <h2 className="text-2xl font-bold">{selectedCurrencyData.name}</h2>
                                            <p className="text-sm text-white/80">{selectedCurrencyData.symbol} {selectedCurrencyData.code}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowCurrencyModal(false)} className="text-white/80 hover:text-white">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-green-600">{selectedCurrencyData.exchangeRate}</div>
                                        <div className="text-xs text-gray-500">to USD</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-blue-600">{selectedCurrencyData.popularity}%</div>
                                        <div className="text-xs text-gray-500">Popularity</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-purple-600">{selectedCurrencyData.status === 'active' ? 'Active' : 'Beta'}</div>
                                        <div className="text-xs text-gray-500">Status</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-amber-600">{selectedCurrencyData.lastUpdated}</div>
                                        <div className="text-xs text-gray-500">Last Updated</div>
                                    </div>
                                </div>
                                {selectedCurrencyData.regions && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Regions Served</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCurrencyData.regions.map((region, idx) => {
                                                const regConfig = getRegionConfig(region);
                                                return (
                                                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                                                        <span>{regConfig.flag}</span>
                                                        {regConfig.label}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/currency/${selectedCurrencyData.code}`}
                                        className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleFavoriteCurrency(selectedCurrencyData.code)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${favoriteCurrencies.includes(selectedCurrencyData.code) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Multi-Currency Billing Banner */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Multi-Currency Billing</h3>
                            <p className="text-green-100 max-w-2xl">
                                Accept payments and send invoices in your customers' preferred currency. Reduce friction and improve conversion rates with local currency support.
                            </p>
                        </div>
                        <Link
                            href="/multi-currency-billing"
                            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
                        >
                            Learn More
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
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

export default CurrencySupportSection3;