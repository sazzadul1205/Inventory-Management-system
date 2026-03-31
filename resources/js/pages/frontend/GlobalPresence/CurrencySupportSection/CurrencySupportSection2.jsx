// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

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
    HiOutlineRefresh
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
    HiArrowRight,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones, } from "react-icons/md";

const CurrencySupportSection2 = ({ config }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedCurrency, setExpandedCurrency] = useState(null);
    const [favoriteCurrencies, setFavoriteCurrencies] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('name'); // name, rate, popularity
    const [showConverter, setShowConverter] = useState(false);
    const [converterAmount, setConverterAmount] = useState(100);
    const [converterFrom, setConverterFrom] = useState('USD');
    const [converterTo, setConverterTo] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            dollar: <HiOutlineCurrencyDollar className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            clock: <HiOutlineClock className={className} />,
            users: <HiOutlineUsers className={className} />,
            star: <HiOutlineStar className={className} />,
            arrow: <HiArrowRight className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
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
            refresh: <HiOutlineRefresh className={className} />
        };
        return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
    };

    // Get currency configuration
    const getCurrencyConfig = (currencyCode) => {
        const configs = {
            'USD': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'dollar', label: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸', gradient: 'from-green-500 to-green-600' },
            'EUR': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'dollar', label: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺', gradient: 'from-blue-500 to-blue-600' },
            'GBP': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'dollar', label: 'British Pound', symbol: '£', code: 'GBP', flag: '🇬🇧', gradient: 'from-purple-500 to-purple-600' },
            'JPY': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'dollar', label: 'Japanese Yen', symbol: '¥', code: 'JPY', flag: '🇯🇵', gradient: 'from-red-500 to-red-600' },
            'CNY': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'dollar', label: 'Chinese Yuan', symbol: '¥', code: 'CNY', flag: '🇨🇳', gradient: 'from-orange-500 to-orange-600' },
            'CAD': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'dollar', label: 'Canadian Dollar', symbol: '$', code: 'CAD', flag: '🇨🇦', gradient: 'from-indigo-500 to-indigo-600' },
            'AUD': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'dollar', label: 'Australian Dollar', symbol: '$', code: 'AUD', flag: '🇦🇺', gradient: 'from-pink-500 to-pink-600' },
            'CHF': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'dollar', label: 'Swiss Franc', symbol: 'Fr', code: 'CHF', flag: '🇨🇭', gradient: 'from-yellow-500 to-yellow-600' },
            'SGD': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'dollar', label: 'Singapore Dollar', symbol: '$', code: 'SGD', flag: '🇸🇬', gradient: 'from-teal-500 to-teal-600' },
            'INR': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'dollar', label: 'Indian Rupee', symbol: '₹', code: 'INR', flag: '🇮🇳', gradient: 'from-amber-500 to-amber-600' },
            'BRL': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'dollar', label: 'Brazilian Real', symbol: 'R$', code: 'BRL', flag: '🇧🇷', gradient: 'from-emerald-500 to-emerald-600' }
        };
        return configs[currencyCode] || { color: 'bg-gray-100 text-gray-700', icon: 'dollar', label: currencyCode, symbol: '', code: currencyCode, flag: '🌐' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸', borderColor: 'border-blue-200 dark:border-blue-800' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺', borderColor: 'border-purple-200 dark:border-purple-800' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏', borderColor: 'border-green-200 dark:border-green-800' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎', borderColor: 'border-orange-200 dark:border-orange-800' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌', borderColor: 'border-red-200 dark:border-red-800' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍', borderColor: 'border-emerald-200 dark:border-emerald-800' }
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

    // Define currenciesList first
    const currenciesList = useMemo(() => config?.currencies || [
        { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', regions: ['north-america'], exchangeRate: 1.00, lastUpdated: '2024-03-15', isBase: true, popularity: 98, status: 'active' },
        { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', regions: ['europe'], exchangeRate: 0.92, lastUpdated: '2024-03-15', popularity: 95, status: 'active' },
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

    // Handle currency conversion
    const handleConvert = useCallback(() => {
        const fromCurrency = currenciesList.find(c => c.code === converterFrom);
        const toCurrency = currenciesList.find(c => c.code === converterTo);
        if (fromCurrency && toCurrency) {
            const rate = toCurrency.exchangeRate / fromCurrency.exchangeRate;
            setConvertedAmount(converterAmount * rate);
        }
    }, [converterAmount, converterFrom, converterTo, currenciesList]);

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

        if (selectedStatus !== 'all') {
            currencies = currencies.filter(c => c.status === selectedStatus);
        }

        if (sortBy === 'name') {
            currencies = [...currencies].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'rate') {
            currencies = [...currencies].sort((a, b) => a.exchangeRate - b.exchangeRate);
        } else if (sortBy === 'popularity') {
            currencies = [...currencies].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        }

        return currencies;
    }, [config?.currencies, searchQuery, selectedCurrency, selectedRegion, selectedStatus, sortBy]);

    const filteredCurrencies = getFilteredCurrencies();

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: currenciesList.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    const currencyStatuses = [
        { id: 'all', label: 'All Currencies' },
        { id: 'active', label: 'Active' },
        { id: 'beta', label: 'Beta' },
        { id: 'coming-soon', label: 'Coming Soon' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Currencies Supported", icon: "dollar", trend: "+8", trendUp: true },
        { value: "150+", label: "Countries", icon: "globe", trend: "+12", trendUp: true },
        { value: "24/7", label: "Real-time Rates", icon: "clock", trend: "Live", trendUp: true },
        { value: "99.9%", label: "Accuracy", icon: "star", trend: "99.9%", trendUp: true }
    ];

    // Top currencies by popularity
    const topCurrencies = [...currenciesList]
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 4);

    // Active filters count
    const activeFiltersCount = [selectedCurrency !== 'all', selectedRegion !== 'all', selectedStatus !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCurrency('all');
        setSelectedRegion('all');
        setSelectedStatus('all');
        setSortBy('name');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Currency Support Directory"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineCurrencyDollar className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                {config?.badge || "Currency Support"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Global"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Currency"}</span> {config?.title?.suffix || "Support"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                {stat.trend && (
                                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Currency Converter Banner */}
                <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                        onClick={() => setShowConverter(!showConverter)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <HiOutlineRefresh className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Currency Converter</h3>
                                <p className="text-sm text-gray-500">Convert between supported currencies</p>
                            </div>
                        </div>
                        <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showConverter ? 'rotate-180' : ''}`} />
                    </button>

                    {showConverter && (
                        <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                            <div className="grid md:grid-cols-3 gap-4 items-end">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                                    <input
                                        type="number"
                                        value={converterAmount}
                                        onChange={(e) => setConverterAmount(parseFloat(e.target.value) || 0)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">From</label>
                                    <select
                                        value={converterFrom}
                                        onChange={(e) => setConverterFrom(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        {currenciesList.map(currency => (
                                            <option key={currency.code} value={currency.code}>{currency.flag} {currency.code} - {currency.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">To</label>
                                    <select
                                        value={converterTo}
                                        onChange={(e) => setConverterTo(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        {currenciesList.map(currency => (
                                            <option key={currency.code} value={currency.code}>{currency.flag} {currency.code} - {currency.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    onClick={handleConvert}
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Convert
                                </button>
                                {convertedAmount !== null && (
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">{converterAmount} {converterFrom} =</p>
                                        <p className="text-2xl font-bold text-green-600">{convertedAmount.toFixed(2)} {converterTo}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Search and Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search by currency name, code, or region..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            aria-label="Search currencies"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="rate">Sort by Exchange Rate</option>
                            <option value="popularity">Sort by Popularity</option>
                        </select>

                        {/* Filter Toggle Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
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

                        {/* View Mode Toggle */}
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                <HiOutlineViewGrid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                <HiOutlineViewList className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* Currency Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
                                <select
                                    value={selectedCurrency}
                                    onChange={(e) => setSelectedCurrency(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Currencies</option>
                                    {currenciesList.map(currency => (
                                        <option key={currency.code} value={currency.code}>{currency.flag} {currency.code} - {currency.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Region Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {currencyStatuses.map(status => (
                                        <option key={status.id} value={status.id}>{status.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort Option */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="name">Currency Name</option>
                                    <option value="rate">Exchange Rate</option>
                                    <option value="popularity">Popularity</option>
                                </select>
                            </div>
                        </div>

                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm text-green-600 dark:text-green-400 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Region Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(region.icon, "w-4 h-4")}
                            {region.label}
                            {region.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedRegion === region.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {region.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Top Currencies Row */}
                {topCurrencies.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineTrendingUp className="w-5 h-5 text-green-500" />
                            Most Popular Currencies
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {topCurrencies.map((currency) => {
                                const currencyConfig = getCurrencyConfig(currency.code);
                                return (
                                    <Link
                                        key={currency.code}
                                        href={`/currency/${currency.code}`}
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                    >
                                        <div className={`w-10 h-10 rounded-full bg-linear-to-r ${currencyConfig.gradient} flex items-center justify-center text-xl`}>
                                            {currencyConfig.flag}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{currency.code}</h3>
                                                <span className="text-xs text-green-600">{currency.exchangeRate}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{currency.name}</p>
                                        </div>
                                        <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Exchange Rate Banner */}
                <div className="mb-8 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
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

                {/* Currencies Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredCurrencies.map((currency) => {
                        const currencyConfig = getCurrencyConfig(currency.code);
                        const isExpanded = expandedCurrency === currency.code;
                        const isFavorite = favoriteCurrencies.includes(currency.code);

                        return (
                            <div
                                key={currency.code}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Currency Flag Area */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <div className={`h-32 ${viewMode === 'list' ? 'h-full' : ''} bg-linear-to-br ${currencyConfig.gradient} flex items-center justify-center`}>
                                        <span className="text-5xl">{currencyConfig.flag}</span>
                                    </div>
                                    {currency.isBase && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                Base
                                            </span>
                                        </div>
                                    )}
                                    {currency.status === 'beta' && (
                                        <div className="absolute bottom-3 left-3">
                                            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                                Beta
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {currency.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{currency.symbol} {currency.code}</p>
                                        </div>
                                        <button
                                            onClick={() => handleFavoriteCurrency(currency.code)}
                                            className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                        >
                                            <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${currencyConfig.color}`}>
                                            {currencyConfig.label}
                                        </span>
                                        <span className="text-xs text-gray-500">Rate: {currency.exchangeRate}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {currency.regions?.map((region, idx) => {
                                            const regConfig = getRegionConfig(region);
                                            return (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <span>{regConfig.flag}</span>
                                                    {regConfig.label}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                            <div className="text-sm font-bold text-green-600">{currency.popularity || 85}%</div>
                                            <div className="text-xs text-gray-500">Popularity</div>
                                        </div>
                                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                            <div className="text-sm font-bold text-blue-600">{currency.exchangeRate}</div>
                                            <div className="text-xs text-gray-500">to USD</div>
                                        </div>
                                    </div>

                                    {/* Expandable Details */}
                                    {currency.supportedCountries && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedCurrency(isExpanded ? null : currency.code)}
                                                className="flex items-center gap-1 text-sm text-green-600 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : `View ${currency.supportedCountries.length} countries`}
                                                <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3 flex flex-wrap gap-1">
                                                    {currency.supportedCountries.map((country, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                            {country}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={`/currency/${currency.code}`}
                                            className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            View Details
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                        <span className="text-xs text-gray-500">Last updated: {currency.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredCurrencies.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineCurrencyDollar className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No currencies found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
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

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Currency Rate Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive daily exchange rate updates and multi-currency feature announcements."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email for currency updates"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per month."}
                        </p>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
        </section>
    );
};

export default CurrencySupportSection2;