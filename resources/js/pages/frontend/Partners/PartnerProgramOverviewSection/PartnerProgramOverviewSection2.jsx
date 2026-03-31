// page/frontend/Partners/PartnerProgramOverviewSection/PartnerProgramOverviewSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineFire
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';


const PartnerProgramOverviewSection2 = ({ config }) => {
    const [selectedProgram, setSelectedProgram] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedTier, setSelectedTier] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedPartner, setExpandedPartner] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('featured'); // featured, name, region

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            heart: <HiOutlineHeart className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />
        };
        return icons[iconName] || <HiOutlineUserGroup className={className} />;
    };

    // Get partner program configuration
    const getProgramConfig = (program) => {
        const configs = {
            'technology': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chip', label: 'Technology Partner', borderColor: 'border-blue-200 dark:border-blue-800' },
            'consulting': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Consulting Partner', borderColor: 'border-purple-200 dark:border-purple-800' },
            'reseller': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Reseller Partner', borderColor: 'border-green-200 dark:border-green-800' },
            'alliance': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Strategic Alliance', borderColor: 'border-orange-200 dark:border-orange-800' },
            'solution': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Solution Partner', borderColor: 'border-indigo-200 dark:border-indigo-800' }
        };
        return configs[program] || configs.technology;
    };

    // Get partner tier configuration
    const getTierConfig = (tier) => {
        const configs = {
            'platinum': { color: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white', icon: 'trophy', label: 'Platinum', badge: '🏆 Platinum' },
            'gold': { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'star', label: 'Gold', badge: '⭐ Gold' },
            'silver': { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300', icon: 'badge', label: 'Silver', badge: '🥈 Silver' },
            'registered': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'check', label: 'Registered', badge: '📝 Registered' }
        };
        return configs[tier] || configs.registered;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { label: 'North America', flag: '🇺🇸' },
            'europe': { label: 'Europe', flag: '🇪🇺' },
            'asia-pacific': { label: 'Asia Pacific', flag: '🌏' },
            'latin-america': { label: 'Latin America', flag: '🌎' },
            'middle-east': { label: 'Middle East', flag: '🕌' },
            'africa': { label: 'Africa', flag: '🌍' }
        };
        return configs[region] || { label: region, flag: '🌐' };
    };

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

        if (selectedProgram !== 'all') {
            partners = partners.filter(p => p.program === selectedProgram);
        }

        if (selectedRegion !== 'all') {
            partners = partners.filter(p => p.region === selectedRegion);
        }

        if (selectedTier !== 'all') {
            partners = partners.filter(p => p.tier === selectedTier);
        }

        if (sortBy === 'featured') {
            partners = [...partners].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        } else if (sortBy === 'name') {
            partners = [...partners].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'region') {
            partners = [...partners].sort((a, b) => (a.region || '').localeCompare(b.region || ''));
        }

        return partners;
    }, [config?.partners, searchQuery, selectedProgram, selectedRegion, selectedTier, sortBy]);

    const filteredPartners = getFilteredPartners();
    const programTypes = config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup', count: config?.partners?.length || 0 },
        { id: 'technology', label: 'Technology', icon: 'chip' },
        { id: 'consulting', label: 'Consulting', icon: 'briefcase' },
        { id: 'reseller', label: 'Reseller', icon: 'globe' },
        { id: 'alliance', label: 'Alliance', icon: 'users' },
        { id: 'solution', label: 'Solution', icon: 'cog' }
    ];

    const partnerTiers = [
        { id: 'all', label: 'All Tiers', icon: 'trophy' },
        { id: 'platinum', label: 'Platinum', icon: 'trophy' },
        { id: 'gold', label: 'Gold', icon: 'star' },
        { id: 'silver', label: 'Silver', icon: 'badge' },
        { id: 'registered', label: 'Registered', icon: 'check' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'north-america', label: 'North America', flag: '🇺🇸' },
        { id: 'europe', label: 'Europe', flag: '🇪🇺' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: '🌏' },
        { id: 'latin-america', label: 'Latin America', flag: '🌎' }
    ];

    // Stats cards
    const stats = config?.stats || [
        { value: "500+", label: "Global Partners", icon: "usergroup", trend: "+15%", trendUp: true },
        { value: "50+", label: "Countries", icon: "globe", trend: "+8", trendUp: true },
        { value: "$100M+", label: "Partner Revenue", icon: "credit", trend: "+25%", trendUp: true },
        { value: "95%", label: "Partner Satisfaction", icon: "star", trend: "+2%", trendUp: true }
    ];

    // Active filters count
    const activeFiltersCount = [selectedProgram !== 'all', selectedRegion !== 'all', selectedTier !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedProgram('all');
        setSelectedRegion('all');
        setSelectedTier('all');
        setSortBy('featured');
    };

    // Partner success stories
    const successStories = config?.successStories || [];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Partner Program Overview"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineUserGroup className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Partner Ecosystem"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Join Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Partner Program"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Join a global network of trusted partners delivering innovative supply chain solutions. Grow your business with comprehensive support, training, and resources."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
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
                            placeholder={config?.searchPlaceholder || "Search partners by name, expertise, or location..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search partners"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="featured">Featured First</option>
                            <option value="name">Alphabetical</option>
                            <option value="region">By Region</option>
                        </select>

                        {/* Filter Toggle Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
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
                            {/* Program Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Partner Type</label>
                                <select
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Types</option>
                                    {programTypes.filter(p => p.id !== 'all').map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Partner Tier Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Partner Tier</label>
                                <select
                                    value={selectedTier}
                                    onChange={(e) => setSelectedTier(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {partnerTiers.map(tier => (
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
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort Option */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="featured">Featured First</option>
                                    <option value="name">Alphabetical</option>
                                    <option value="region">By Region</option>
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

                {/* Program Type Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {programTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedProgram(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedProgram === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(type.icon, "w-4 h-4")}
                            {type.label}
                            {type.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedProgram === type.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {type.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Partner Tiers Row */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {partnerTiers.map((tier) => {
                        return (
                            <button
                                key={tier.id}
                                onClick={() => setSelectedTier(tier.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedTier === tier.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {getIcon(tier.icon, "w-4 h-4")}
                                {tier.label}
                            </button>
                        );
                    })}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPartners.length}</span> partners
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Partners Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredPartners.map((partner) => {
                        const programConfig = getProgramConfig(partner.program);
                        const tierConfig = getTierConfig(partner.tier);
                        const regionConfig = getRegionConfig(partner.region);
                        const isExpanded = expandedPartner === partner.id;

                        return (
                            <div
                                key={partner.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Partner Logo Area */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <div className={`h-32 ${viewMode === 'list' ? 'h-full' : ''} bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-6`}>
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-h-16 w-auto object-contain"
                                            />
                                        ) : (
                                            <div className={`px-4 py-2 rounded-full ${programConfig.color}`}>
                                                {partner.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    {partner.isFeatured && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                <HiOutlineStar className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}>
                                            {tierConfig.badge}
                                        </span>
                                    </div>
                                </div>

                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    {/* Program Type Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs px-2 py-1 rounded-full ${programConfig.color}`}>
                                            {programConfig.label}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <span>{regionConfig.flag}</span>
                                            <span>{regionConfig.label}</span>
                                        </div>
                                    </div>

                                    {/* Partner Name */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        <Link href={partner.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {partner.name}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {partner.description}
                                    </p>

                                    {/* Expertise Tags */}
                                    {partner.expertise && partner.expertise.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {partner.expertise.slice(0, 3).map((exp, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        {exp}
                                                    </span>
                                                ))}
                                                {partner.expertise.length > 3 && (
                                                    <button
                                                        onClick={() => setExpandedPartner(isExpanded ? null : partner.id)}
                                                        className="text-xs text-blue-600 hover:underline"
                                                    >
                                                        +{partner.expertise.length - 3} more
                                                    </button>
                                                )}
                                            </div>

                                            {isExpanded && partner.expertise.length > 3 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {partner.expertise.slice(3).map((exp, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                            {exp}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            {partner.certified && (
                                                <div className="flex items-center gap-1 text-xs text-green-600">
                                                    <HiOutlineBadgeCheck className="w-4 h-4" />
                                                    <span>Certified</span>
                                                </div>
                                            )}
                                            {partner.successStories && (
                                                <div className="flex items-center gap-1 text-xs text-blue-600">
                                                    <HiOutlineTrophy className="w-4 h-4" />
                                                    <span>{partner.successStories} stories</span>
                                                </div>
                                            )}
                                        </div>
                                        <Link
                                            href={partner.link}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Learn More
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPartners.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineUserGroup className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No partners found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Partner Success Stories */}
                {successStories.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlineTrophy className="w-6 h-6 text-yellow-500" />
                            Partner Success Stories
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {successStories.map((story, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src={story.logo} alt={story.partner} className="h-10 w-auto object-contain" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{story.partner}</h4>
                                            <p className="text-xs text-gray-500">{story.industry}</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{story.quote}"</p>
                                    </div>
                                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-green-600">{story.result}</span>
                                            <Link href={story.link} className="text-blue-600 text-sm font-semibold hover:underline">
                                                Read Story →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Become a Partner CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Ready to Join Our Partner Program?</h3>
                            <p className="text-blue-100 max-w-2xl">
                                Take the first step toward growing your business with SupplyChainPro. Apply today and start your journey as a trusted partner.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/become-partner"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Apply Now
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact-sales"
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                            >
                                Contact Sales
                                <HiOutlineMail className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Partner Program Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive partner program news, training opportunities, and exclusive resources."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for partner updates"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
      `}</style>
        </section>
    );
};

export default PartnerProgramOverviewSection2;