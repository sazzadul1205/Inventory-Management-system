// page/frontend/Careers/BenefitsAndPerksSection/BenefitsAndPerksSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    AiOutlineShareAlt as HiOutlineShareAlt,
} from "react-icons/ai";
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineHeart,
    HiOutlineGlobe,
    HiOutlineCurrencyDollar,
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineOfficeBuilding,
    HiOutlineUsers,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightBulb,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineBriefcase,
    HiOutlineCreditCard,
    HiOutlineChartBar,
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineGift,
    HiOutlineWifi,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineBookOpen,
    HiOutlineUsers as HiOutlineUsersIcon,
    HiOutlineCheckCircle,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineExternalLink,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineFlag,
    HiOutlineArchive,
    HiOutlinePhotograph,
    HiOutlineDocument,
    HiOutlineLink,
    HiOutlineChartPie,
    HiOutlineAtSymbol,
    HiOutlinePrinter,
    HiOutlineDuplicate,
    HiOutlineQrcode,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlinePhone as HiOutlinePhoneIcon,
    HiOutlineBadgeCheck,
} from 'react-icons/hi';
import {
    HiArrowRight,
    HiOutlineTrophy,
    HiOutlineBookmark,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineCoffee as HiOutlineCoffee,
} from "react-icons/md";

const BenefitsAndPerksSection2 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTier, setSelectedTier] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedBenefit, setExpandedBenefit] = useState(null);
    const [favoriteBenefits, setFavoriteBenefits] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('popular'); // popular, newest, alphabetical

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            heart: <HiOutlineHeart className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            office: <HiOutlineOfficeBuilding className={className} />,
            users: <HiOutlineUsers className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            phone: <HiOutlinePhone className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            gift: <HiOutlineGift className={className} />,
            coffee: <HiOutlineCoffee className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            usergroup: <HiOutlineUsersIcon className={className} />,
            arrow: <HiArrowRight className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            flag: <HiOutlineFlag className={className} />,
            archive: <HiOutlineArchive className={className} />,
            photo: <HiOutlinePhotograph className={className} />,
            doc: <HiOutlineDocument className={className} />,
            link: <HiOutlineLink className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            quote: <HiOutlineQuote className={className} />,
            at: <HiOutlineAtSymbol className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            shareAlt: <HiOutlineShareAlt className={className} />,
            duplicate: <HiOutlineDuplicate className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            phoneIcon: <HiOutlinePhoneIcon className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />
        };
        return icons[iconName] || <HiOutlineHeart className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'health': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'heart', label: 'Health & Wellness', borderColor: 'border-green-200 dark:border-green-800' },
            'financial': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'dollar', label: 'Financial Benefits', borderColor: 'border-blue-200 dark:border-blue-800' },
            'work-life': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'clock', label: 'Work-Life Balance', borderColor: 'border-purple-200 dark:border-purple-800' },
            'development': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'academic', label: 'Learning & Development', borderColor: 'border-orange-200 dark:border-orange-800' },
            'family': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Family Support', borderColor: 'border-pink-200 dark:border-pink-800' },
            'perks': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Daily Perks', borderColor: 'border-indigo-200 dark:border-indigo-800' }
        };
        return configs[category] || configs.health;
    };

    // Get tier configuration
    const getTierConfig = (tier) => {
        const configs = {
            'core': { color: 'bg-blue-100 text-blue-700', label: 'Core Benefit', badge: '⭐ Core', icon: 'star' },
            'premium': { color: 'bg-purple-100 text-purple-700', label: 'Premium', badge: '🏆 Premium', icon: 'trophy' },
            'optional': { color: 'bg-green-100 text-green-700', label: 'Optional', badge: '✨ Optional', icon: 'sparkles' }
        };
        return configs[tier] || { color: 'bg-gray-100 text-gray-700', label: tier, badge: tier, icon: 'check' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'global': { flag: '🌐', label: 'Global' },
            'north-america': { flag: '🇺🇸', label: 'North America' },
            'europe': { flag: '🇪🇺', label: 'Europe' },
            'asia-pacific': { flag: '🌏', label: 'Asia Pacific' }
        };
        return configs[region] || { flag: '🌐', label: region };
    };

    // Handle favorite benefit
    const handleFavoriteBenefit = (benefitId) => {
        setFavoriteBenefits(prev =>
            prev.includes(benefitId)
                ? prev.filter(id => id !== benefitId)
                : [...prev, benefitId]
        );
    };

    // Toggle expanded benefit
    const toggleExpanded = (benefitId) => {
        setExpandedBenefit(expandedBenefit === benefitId ? null : benefitId);
    };

    // Filter benefits
    const getFilteredBenefits = useCallback(() => {
        let benefits = config?.benefits || [];

        if (searchQuery) {
            benefits = benefits.filter(b =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            benefits = benefits.filter(b => b.category === selectedCategory);
        }

        if (selectedTier !== 'all') {
            benefits = benefits.filter(b => b.tier === selectedTier);
        }

        if (selectedRegion !== 'all') {
            benefits = benefits.filter(b => b.regions?.includes(selectedRegion));
        }

        if (sortBy === 'popular') {
            benefits = [...benefits].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        } else if (sortBy === 'newest') {
            benefits = [...benefits].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'alphabetical') {
            benefits = [...benefits].sort((a, b) => a.title.localeCompare(b.title));
        }

        return benefits;
    }, [config?.benefits, searchQuery, selectedCategory, selectedTier, selectedRegion, sortBy]);

    const filteredBenefits = getFilteredBenefits();
    const categories = config?.categories || [
        { id: 'all', label: 'All Benefits', icon: 'gift', count: config?.benefits?.length || 0 },
        { id: 'health', label: 'Health & Wellness', icon: 'heart' },
        { id: 'financial', label: 'Financial', icon: 'dollar' },
        { id: 'work-life', label: 'Work-Life Balance', icon: 'clock' },
        { id: 'development', label: 'Learning & Development', icon: 'academic' },
        { id: 'family', label: 'Family Support', icon: 'users' },
        { id: 'perks', label: 'Daily Perks', icon: 'gift' }
    ];

    const tiers = [
        { id: 'all', label: 'All Tiers' },
        { id: 'core', label: 'Core Benefits', icon: 'star' },
        { id: 'premium', label: 'Premium Benefits', icon: 'trophy' },
        { id: 'optional', label: 'Optional Benefits', icon: 'sparkles' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'global', label: 'Global', flag: '🌐' },
        { id: 'north-america', label: 'North America', flag: '🇺🇸' },
        { id: 'europe', label: 'Europe', flag: '🇪🇺' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: '🌏' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "100%", label: "Employee Coverage", icon: "users", trend: "+5%", trendUp: true },
        { value: "$5,000", label: "Learning Stipend", icon: "academic", trend: "+$1,000", trendUp: true },
        { value: "16", label: "Weeks Parental Leave", icon: "heart", trend: "+4", trendUp: true },
        { value: "25+", label: "Countries", icon: "globe", trend: "+5", trendUp: true }
    ];

    // Top benefits by popularity
    const topBenefits = [...(config?.benefits || [])]
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 4);

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedTier !== 'all', selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedTier('all');
        setSelectedRegion('all');
        setSortBy('popular');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Benefits & Perks Directory"
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
                            <HiOutlineGift className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                {config?.badge || "Benefits & Perks"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Benefits That"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Empower You"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we've designed benefits that support your well-being and growth."}
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
                            placeholder={config?.searchPlaceholder || "Search benefits by name, category, or type..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            aria-label="Search benefits"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="newest">Newest First</option>
                            <option value="alphabetical">Alphabetical</option>
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
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Tier Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefit Tier</label>
                                <select
                                    value={selectedTier}
                                    onChange={(e) => setSelectedTier(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {tiers.map(tier => (
                                        <option key={tier.id} value={tier.id}>{tier.label}</option>
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
                                        <option key={region.id} value={region.id}>{region.flag} {region.label}</option>
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
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest First</option>
                                    <option value="alphabetical">Alphabetical</option>
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

                {/* Category Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                            {category.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {category.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tier Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {tiers.filter(t => t.id !== 'all').map((tier) => {
                        const tierConfig = getTierConfig(tier.id);
                        return (
                            <button
                                key={tier.id}
                                onClick={() => setSelectedTier(selectedTier === tier.id ? 'all' : tier.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedTier === tier.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {getIcon(tierConfig.icon, "w-4 h-4")}
                                {tier.label}
                            </button>
                        );
                    })}
                </div>

                {/* Top Benefits Row */}
                {topBenefits.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineFire className="w-5 h-5 text-orange-500" />
                            Most Popular Benefits
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {topBenefits.map((benefit) => {
                                const categoryConfig = getCategoryConfig(benefit.category);
                                const tierConfig = getTierConfig(benefit.tier);
                                return (
                                    <Link
                                        key={benefit.id}
                                        href={benefit.link}
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                    >
                                        <div className={`w-10 h-10 rounded-lg ${categoryConfig.color} flex items-center justify-center`}>
                                            {getIcon(categoryConfig.icon, "w-5 h-5")}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">{benefit.title}</h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                                                    {tierConfig.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500">{benefit.popularity}% employee participation</p>
                                        </div>
                                        <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredBenefits.length}</span> benefits
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Benefits Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredBenefits.map((benefit) => {
                        const categoryConfig = getCategoryConfig(benefit.category);
                        const tierConfig = getTierConfig(benefit.tier);
                        const regionConfig = getRegionConfig(benefit.region);
                        const isExpanded = expandedBenefit === benefit.id;
                        const isFavorite = favoriteBenefits.includes(benefit.id);

                        return (
                            <div
                                key={benefit.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Benefit Icon Area */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <div className={`h-32 ${viewMode === 'list' ? 'h-full' : ''} bg-linear-to-br ${categoryConfig.borderColor?.replace('border', 'from') || 'from-green-500 to-blue-500'} flex items-center justify-center`}>
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                                            {getIcon(categoryConfig.icon, "w-8 h-8 text-white")}
                                        </div>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}>
                                            {tierConfig.badge}
                                        </span>
                                    </div>
                                    {benefit.isNew && (
                                        <div className="absolute bottom-3 left-3">
                                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full animate-pulse">
                                                New
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                {benefit.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                                    {categoryConfig.label}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <span>{regionConfig.flag}</span>
                                                    <span>{regionConfig.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleFavoriteBenefit(benefit.id)}
                                            className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                        >
                                            <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {benefit.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                            <HiOutlineTrendingUp className="w-4 h-4" />
                                            <span>{benefit.popularity || 85}% participation</span>
                                        </div>
                                    </div>

                                    {/* Key Details Preview */}
                                    {benefit.details && benefit.details.length > 0 && (
                                        <div className="mb-3">
                                            <button
                                                onClick={() => toggleExpanded(benefit.id)}
                                                className="flex items-center gap-1 text-sm text-green-600 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : `View ${benefit.details.length} details`}
                                                <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isExpanded && (
                                                <ul className="mt-2 space-y-1">
                                                    {benefit.details.slice(0, 4).map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs">
                                                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {benefit.tags && benefit.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {benefit.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={benefit.link}
                                            className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Learn More
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <HiOutlineCalendar className="w-3 h-3" />
                                            <span>Updated {benefit.updatedDate || 'Mar 2024'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredBenefits.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineGift className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No benefits found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Benefits Summary Banner */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Total Rewards Package</h3>
                            <p className="text-green-100 max-w-2xl">
                                Our comprehensive benefits package is designed to support you at every stage of your life and career. We're committed to your well-being, growth, and success.
                            </p>
                        </div>
                        <Link
                            href="/benefits-guide"
                            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
                        >
                            View Full Benefits Guide
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Benefits Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates about new benefits, wellness programs, and employee perks."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email for benefits updates"
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

export default BenefitsAndPerksSection2;