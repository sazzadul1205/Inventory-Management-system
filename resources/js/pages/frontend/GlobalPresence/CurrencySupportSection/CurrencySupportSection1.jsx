// page/frontend/GlobalPresence/CurrencySupportSection/CurrencySupportSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
    HiOutlineCreditCard as HiOutlineCreditCardIcon
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
    HiArrowRight,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones, } from "react-icons/md";

const CurrencySupportSection1 = ({ config }) => {
    const [selectedCurrency] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCurrency, setExpandedCurrency] = useState(null);
    const [savedCurrencies, setSavedCurrencies] = useState([]);

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
            creditCard: <HiOutlineCreditCardIcon className={className} />
        };
        return icons[iconName] || <HiOutlineCurrencyDollar className={className} />;
    };

    // Get currency configuration
    const getCurrencyConfig = (currencyCode) => {
        const configs = {
            'USD': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'dollar', label: 'US Dollar', symbol: '$', code: 'USD', flag: '🇺🇸' },
            'EUR': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'dollar', label: 'Euro', symbol: '€', code: 'EUR', flag: '🇪🇺' },
            'GBP': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'dollar', label: 'British Pound', symbol: '£', code: 'GBP', flag: '🇬🇧' },
            'JPY': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'dollar', label: 'Japanese Yen', symbol: '¥', code: 'JPY', flag: '🇯🇵' },
            'CNY': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'dollar', label: 'Chinese Yuan', symbol: '¥', code: 'CNY', flag: '🇨🇳' },
            'CAD': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'dollar', label: 'Canadian Dollar', symbol: '$', code: 'CAD', flag: '🇨🇦' },
            'AUD': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'dollar', label: 'Australian Dollar', symbol: '$', code: 'AUD', flag: '🇦🇺' },
            'CHF': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'dollar', label: 'Swiss Franc', symbol: 'Fr', code: 'CHF', flag: '🇨🇭' },
            'SGD': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'dollar', label: 'Singapore Dollar', symbol: '$', code: 'SGD', flag: '🇸🇬' },
            'HKD': { color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', icon: 'dollar', label: 'Hong Kong Dollar', symbol: '$', code: 'HKD', flag: '🇭🇰' },
            'INR': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'dollar', label: 'Indian Rupee', symbol: '₹', code: 'INR', flag: '🇮🇳' },
            'BRL': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'dollar', label: 'Brazilian Real', symbol: 'R$', code: 'BRL', flag: '🇧🇷' }
        };
        return configs[currencyCode] || { color: 'bg-gray-100 text-gray-700', icon: 'dollar', label: currencyCode, symbol: '', code: currencyCode, flag: '🌐' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍' }
        };
        return configs[region] || { color: 'bg-gray-100 text-gray-700', label: region, flag: '🌐' };
    };

    // Handle save currency
    const handleSaveCurrency = (currencyId) => {
        if (savedCurrencies.includes(currencyId)) {
            setSavedCurrencies(savedCurrencies.filter(id => id !== currencyId));
        } else {
            setSavedCurrencies([...savedCurrencies, currencyId]);
        }
    };

    // Filter currencies
    const getFilteredCurrencies = () => {
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

        return currencies;
    };

    const filteredCurrencies = getFilteredCurrencies();
    const currenciesList = config?.currencies || [
        { code: 'USD', name: 'US Dollar', symbol: '$', regions: ['north-america'], exchangeRate: 1.00, lastUpdated: '2024-03-15', isBase: true },
        { code: 'EUR', name: 'Euro', symbol: '€', regions: ['europe'], exchangeRate: 0.92, lastUpdated: '2024-03-15' },
        { code: 'GBP', name: 'British Pound', symbol: '£', regions: ['europe'], exchangeRate: 0.79, lastUpdated: '2024-03-15' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥', regions: ['asia-pacific'], exchangeRate: 149.50, lastUpdated: '2024-03-15' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', regions: ['asia-pacific'], exchangeRate: 7.20, lastUpdated: '2024-03-15' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: '$', regions: ['north-america'], exchangeRate: 1.35, lastUpdated: '2024-03-15' },
        { code: 'AUD', name: 'Australian Dollar', symbol: '$', regions: ['asia-pacific'], exchangeRate: 1.52, lastUpdated: '2024-03-15' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', regions: ['europe'], exchangeRate: 0.88, lastUpdated: '2024-03-15' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: '$', regions: ['asia-pacific'], exchangeRate: 1.34, lastUpdated: '2024-03-15' },
        { code: 'HKD', name: 'Hong Kong Dollar', symbol: '$', regions: ['asia-pacific'], exchangeRate: 7.82, lastUpdated: '2024-03-15' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹', regions: ['asia-pacific'], exchangeRate: 83.10, lastUpdated: '2024-03-15' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', regions: ['latin-america'], exchangeRate: 5.00, lastUpdated: '2024-03-15' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: currenciesList.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Currencies Supported", icon: "dollar" },
        { value: "150+", label: "Countries", icon: "globe" },
        { value: "24/7", label: "Real-time Rates", icon: "clock" },
        { value: "99.9%", label: "Accuracy", icon: "star" }
    ];

    // Featured currency
    const featuredCurrency = config?.featuredCurrency || currenciesList[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Currency Support"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
                        <HiOutlineCurrencyDollar className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            {config?.badge || "Currency Support"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Global"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Currency"}</span> {config?.title?.suffix || "Support"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-green-600")}
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={config?.searchPlaceholder || "Search by currency name, code, or region..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search currencies"
                    />
                </div>

                {/* Region Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedRegion === region.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(region.icon, "w-4 h-4")}
                            {region.label}
                            {region.count !== undefined && (
                                <span className="ml-1 text-xs opacity-80">{region.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Exchange Rate Banner */}
                <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <HiOutlineTrendingUp className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Exchange rates updated: {new Date().toLocaleDateString()}</span>
                        </div>
                        <Link href="/exchange-rates" className="text-sm text-green-600 hover:underline">View all rates →</Link>
                    </div>
                </div>

                {/* Featured Currency */}
                {featuredCurrency && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                                Base Currency
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCurrencyConfig(featuredCurrency.code).color}`}>
                                                    {featuredCurrency.code}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-5xl">{getCurrencyConfig(featuredCurrency.code).flag}</span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                    {featuredCurrency.name}
                                                </h3>
                                                <p className="text-gray-500">{featuredCurrency.symbol} {featuredCurrency.code}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            Our base currency for all transactions. All exchange rates are calculated relative to {featuredCurrency.code}.
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                                                <div className="text-xl font-bold text-green-600">1.00</div>
                                                <div className="text-xs text-gray-500">{featuredCurrency.code}</div>
                                            </div>
                                            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                                                <div className="text-xl font-bold text-blue-600">0.92</div>
                                                <div className="text-xs text-gray-500">EUR</div>
                                            </div>
                                            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                                                <div className="text-xl font-bold text-purple-600">149.50</div>
                                                <div className="text-xs text-gray-500">JPY</div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={`/currency/${featuredCurrency.code}`}
                                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                View Exchange Rates
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveCurrency(featuredCurrency.code)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedCurrencies.includes(featuredCurrency.code)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedCurrencies.includes(featuredCurrency.code) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-green-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Popular Exchange Rates</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">1 {featuredCurrency.code}</span>
                                                    <span className="font-medium">0.92 EUR</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">1 {featuredCurrency.code}</span>
                                                    <span className="font-medium">0.79 GBP</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">1 {featuredCurrency.code}</span>
                                                    <span className="font-medium">149.50 JPY</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">1 {featuredCurrency.code}</span>
                                                    <span className="font-medium">7.20 CNY</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Currencies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredCurrencies.map((currency) => {
                        const currencyConfig = getCurrencyConfig(currency.code);
                        const isExpanded = expandedCurrency === currency.code;
                        const isSaved = savedCurrencies.includes(currency.code);

                        return (
                            <div
                                key={currency.code}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-xl ${currencyConfig.color} flex items-center justify-center text-2xl`}>
                                                {currencyConfig.flag}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {currency.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">{currency.symbol} {currency.code}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSaveCurrency(currency.code)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
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

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Exchange Rate (to USD):</span>
                                            <span className="font-medium text-green-600">{currency.exchangeRate}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Last Updated:</span>
                                            <span className="text-gray-600">{currency.lastUpdated}</span>
                                        </div>
                                    </div>

                                    {/* Expandable Details */}
                                    {currency.supportedCountries && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedCurrency(isExpanded ? null : currency.code)}
                                                className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : `View ${currency.supportedCountries.length} countries`}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {currency.supportedCountries.map((country, idx) => (
                                                            <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                                {country}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={`/currency/${currency.code}`}
                                            className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            View Details
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
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
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedRegion('all');
                            }}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Multi-Currency Billing Banner */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineCreditCard className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.billingTitle || "Multi-Currency Billing"}
                    </h3>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        {config?.billingDescription || "Accept payments and send invoices in your customers' preferred currency. Reduce friction and improve conversion rates with local currency support."}
                    </p>
                    <Link
                        href="/multi-currency-billing"
                        className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
        </section>
    );
};

export default CurrencySupportSection1;