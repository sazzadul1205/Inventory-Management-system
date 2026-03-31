// page/frontend/Partners/SolutionPartnersSection/SolutionPartnersSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineBriefcase,
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
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
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
    HiOutlineFire
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';


const SolutionPartnersSection2 = ({ config }) => {
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const [selectedSolution, setSelectedSolution] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedTier, setSelectedTier] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedPartner, setExpandedPartner] = useState(null);
    const [favoritePartners, setFavoritePartners] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('featured'); // featured, name, industry

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            briefcase: <HiOutlineBriefcase className={className} />,
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
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
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
            fire: <HiOutlineFire className={className} />
        };
        return icons[iconName] || <HiOutlineBriefcase className={className} />;
    };

    // Get industry configuration
    const getIndustryConfig = (industry) => {
        const configs = {
            'retail': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'building', label: 'Retail', borderColor: 'border-blue-200 dark:border-blue-800' },
            'manufacturing': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cog', label: 'Manufacturing', borderColor: 'border-purple-200 dark:border-purple-800' },
            'healthcare': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'shield', label: 'Healthcare', borderColor: 'border-green-200 dark:border-green-800' },
            'logistics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Logistics', borderColor: 'border-orange-200 dark:border-orange-800' },
            'automotive': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'bolt', label: 'Automotive', borderColor: 'border-red-200 dark:border-red-800' },
            'consumer-goods': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Consumer Goods', borderColor: 'border-indigo-200 dark:border-indigo-800' }
        };
        return configs[industry] || configs.retail;
    };

    // Get solution configuration
    const getSolutionConfig = (solution) => {
        const configs = {
            'inventory': { color: 'bg-blue-100 text-blue-700', icon: 'database', label: 'Inventory Optimization', badge: '📦 Inventory' },
            'warehouse': { color: 'bg-purple-100 text-purple-700', icon: 'building', label: 'Warehouse Management', badge: '🏭 Warehouse' },
            'transportation': { color: 'bg-green-100 text-green-700', icon: 'globe', label: 'Transportation Management', badge: '🚚 Transportation' },
            'analytics': { color: 'bg-orange-100 text-orange-700', icon: 'chart', label: 'Supply Chain Analytics', badge: '📊 Analytics' },
            'procurement': { color: 'bg-red-100 text-red-700', icon: 'credit', label: 'Procurement Solutions', badge: '🛒 Procurement' },
            'planning': { color: 'bg-indigo-100 text-indigo-700', icon: 'calendar', label: 'Supply Chain Planning', badge: '📅 Planning' }
        };
        return configs[solution] || { color: 'bg-gray-100 text-gray-700', label: solution, badge: solution };
    };

    // Get partner tier configuration
    const getTierConfig = (tier) => {
        const configs = {
            'premier': { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'star', label: 'Premier', badge: '🏆 Premier' },
            'advanced': { color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', icon: 'badge', label: 'Advanced', badge: '⭐ Advanced' },
            'certified': { color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', icon: 'check', label: 'Certified', badge: '✓ Certified' }
        };
        return configs[tier] || configs.certified;
    };

    // Handle favorite partner
    const handleFavoritePartner = (partnerId) => {
        setFavoritePartners(prev =>
            prev.includes(partnerId)
                ? prev.filter(id => id !== partnerId)
                : [...prev, partnerId]
        );
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

        if (selectedIndustry !== 'all') {
            partners = partners.filter(p => p.industry === selectedIndustry);
        }

        if (selectedSolution !== 'all') {
            partners = partners.filter(p => p.solutionAreas?.includes(selectedSolution));
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
        } else if (sortBy === 'industry') {
            partners = [...partners].sort((a, b) => (a.industry || '').localeCompare(b.industry || ''));
        }

        return partners;
    }, [config?.partners, searchQuery, selectedIndustry, selectedSolution, selectedRegion, selectedTier, sortBy]);

    const filteredPartners = getFilteredPartners();
    const industries = config?.industries || [
        { id: 'all', label: 'All Industries', icon: 'globe', count: config?.partners?.length || 0 },
        { id: 'retail', label: 'Retail', icon: 'building' },
        { id: 'manufacturing', label: 'Manufacturing', icon: 'cog' },
        { id: 'healthcare', label: 'Healthcare', icon: 'shield' },
        { id: 'logistics', label: 'Logistics', icon: 'globe' },
        { id: 'automotive', label: 'Automotive', icon: 'bolt' }
    ];

    const solutionAreas = [
        { id: 'all', label: 'All Solutions', icon: 'cog' },
        { id: 'inventory', label: 'Inventory Optimization', icon: 'database' },
        { id: 'warehouse', label: 'Warehouse Management', icon: 'building' },
        { id: 'transportation', label: 'Transportation Management', icon: 'globe' },
        { id: 'analytics', label: 'Supply Chain Analytics', icon: 'chart' },
        { id: 'procurement', label: 'Procurement Solutions', icon: 'credit' },
        { id: 'planning', label: 'Supply Chain Planning', icon: 'calendar' }
    ];

    const partnerTiers = [
        { id: 'all', label: 'All Tiers', icon: 'trophy' },
        { id: 'premier', label: 'Premier', icon: 'star' },
        { id: 'advanced', label: 'Advanced', icon: 'badge' },
        { id: 'certified', label: 'Certified', icon: 'check' }
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
        { value: "100+", label: "Solution Partners", icon: "briefcase", trend: "+15", trendUp: true },
        { value: "50+", label: "Industries Served", icon: "globe", trend: "+8", trendUp: true },
        { value: "500+", label: "Successful Deployments", icon: "trophy", trend: "+120", trendUp: true },
        { value: "95%", label: "Customer Satisfaction", icon: "star", trend: "+2%", trendUp: true }
    ];

    // Featured partners
    const featuredPartners = config?.featuredPartners || [];

    // Active filters count
    const activeFiltersCount = [selectedIndustry !== 'all', selectedSolution !== 'all', selectedRegion !== 'all', selectedTier !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedIndustry('all');
        setSelectedSolution('all');
        setSelectedRegion('all');
        setSelectedTier('all');
        setSortBy('featured');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Solution Partners Directory"
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
                            <HiOutlineBriefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                {config?.badge || "Solution Partners"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Expert"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Solution Partners"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies."}
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
                            placeholder={config?.searchPlaceholder || "Search partners by name, industry, or solution area..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            aria-label="Search solution partners"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="featured">Featured First</option>
                            <option value="name">Alphabetical</option>
                            <option value="industry">By Industry</option>
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
                            {/* Industry Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</label>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="all">All Industries</option>
                                    {industries.filter(i => i.id !== 'all').map(ind => (
                                        <option key={ind.id} value={ind.id}>{ind.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Solution Area Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Solution Area</label>
                                <select
                                    value={selectedSolution}
                                    onChange={(e) => setSelectedSolution(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {solutionAreas.map(area => (
                                        <option key={area.id} value={area.id}>{area.label}</option>
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

                            {/* Partner Tier Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Partner Tier</label>
                                <select
                                    value={selectedTier}
                                    onChange={(e) => setSelectedTier(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {partnerTiers.map(tier => (
                                        <option key={tier.id} value={tier.id}>{tier.label}</option>
                                    ))}
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

                {/* Industry Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => setSelectedIndustry(industry.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedIndustry === industry.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(industry.icon, "w-4 h-4")}
                            {industry.label}
                            {industry.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedIndustry === industry.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {industry.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Solution Area Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {solutionAreas.map((area) => (
                        <button
                            key={area.id}
                            onClick={() => setSelectedSolution(area.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedSolution === area.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(area.icon, "w-4 h-4")}
                            {area.label}
                        </button>
                    ))}
                </div>

                {/* Featured Partners Row */}
                {featuredPartners.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineStar className="w-5 h-5 text-yellow-500" />
                            Featured Solution Partners
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {featuredPartners.map((partner) => {
                                const industryConfig = getIndustryConfig(partner.industry);
                                const tierConfig = getTierConfig(partner.tier);
                                return (
                                    <Link
                                        key={partner.id}
                                        href={partner.link}
                                        className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                    >
                                        {partner.logo ? (
                                            <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
                                        ) : (
                                            <div className={`w-12 h-12 rounded-xl ${industryConfig.color} flex items-center justify-center`}>
                                                {getIcon(industryConfig.icon, "w-6 h-6")}
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">{partner.name}</h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${tierConfig.color}`}>
                                                    {tierConfig.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 line-clamp-1">{partner.description}</p>
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
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPartners.length}</span> solution partners
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Partners Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredPartners.map((partner) => {
                        const industryConfig = getIndustryConfig(partner.industry);
                        const tierConfig = getTierConfig(partner.tier);
                        const isExpanded = expandedPartner === partner.id;
                        const isFavorite = favoritePartners.includes(partner.id);

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
                                            <div className={`px-4 py-2 rounded-full ${industryConfig.color}`}>
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
                                    {/* Industry Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs px-2 py-1 rounded-full ${industryConfig.color}`}>
                                            {industryConfig.label}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            {partner.location && (
                                                <>
                                                    <HiOutlineLocationMarker className="w-3 h-3" />
                                                    <span>{partner.location}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Partner Name */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        <Link href={partner.link} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                            {partner.name}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {partner.description}
                                    </p>

                                    {/* Solution Areas */}
                                    {partner.solutionAreas && partner.solutionAreas.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {partner.solutionAreas.slice(0, 3).map((area, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        {getSolutionConfig(area).badge}
                                                    </span>
                                                ))}
                                                {partner.solutionAreas.length > 3 && (
                                                    <button
                                                        onClick={() => setExpandedPartner(isExpanded ? null : partner.id)}
                                                        className="text-xs text-green-600 hover:underline"
                                                    >
                                                        +{partner.solutionAreas.length - 3} more
                                                    </button>
                                                )}
                                            </div>

                                            {isExpanded && partner.solutionAreas.length > 3 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {partner.solutionAreas.slice(3).map((area, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                            {getSolutionConfig(area).badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Success Metrics */}
                                    {partner.successMetrics && (
                                        <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                            {partner.successMetrics.map((metric, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-sm font-bold text-green-600 dark:text-green-400">{metric.value}</div>
                                                    <div className="text-xs text-gray-500">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleFavoritePartner(partner.id)}
                                                className={`flex items-center gap-1 text-sm transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                    }`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                                                <span>Favorite</span>
                                            </button>
                                            {partner.certified && (
                                                <div className="flex items-center gap-1 text-xs text-green-600">
                                                    <HiOutlineBadgeCheck className="w-4 h-4" />
                                                    <span>Certified</span>
                                                </div>
                                            )}
                                        </div>
                                        <Link
                                            href={partner.link}
                                            className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
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
                        <HiOutlineBriefcase className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No solution partners found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Become a Solution Partner CTA */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Become a Solution Partner</h3>
                            <p className="text-green-100 max-w-2xl">
                                Join our network of solution partners delivering transformative supply chain solutions. Leverage our platform to drive customer success.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/become-solution-partner"
                                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
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

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Solution Partner Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates on new solution partners, success stories, and industry insights."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email for solution partner updates"
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
      `}</style>
        </section>
    );
};

export default SolutionPartnersSection2;