// page/frontend/Partners/PartnerResourcesSection/PartnerResourcesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineDocumentText,
    HiOutlineVideoCamera,
    HiOutlineAcademicCap,
    HiOutlineTemplate,
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
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate as HiOutlineTemplateIcon,
    HiOutlineBadgeCheck,
    HiOutlinePhone,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineHeart,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineTrendingUp,
    HiOutlineFire
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const PartnerResourcesSection2 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedTopic, setSelectedTopic] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [savedResources, setSavedResources] = useState([]);
    const [likedResources, setLikedResources] = useState([]);
    const [expandedResource, setExpandedResource] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('popular'); // popular, latest, trending

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            document: <HiOutlineDocumentText className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            template: <HiOutlineTemplate className={className} />,
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
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            templateIcon: <HiOutlineTemplateIcon className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            heart: <HiOutlineHeart className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />
        };
        return icons[iconName] || <HiOutlineDocumentText className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'training': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'academic', label: 'Training & Certification', borderColor: 'border-blue-200 dark:border-blue-800' },
            'marketing': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chart', label: 'Marketing & Sales', borderColor: 'border-purple-200 dark:border-purple-800' },
            'technical': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'code', label: 'Technical Resources', borderColor: 'border-green-200 dark:border-green-800' },
            'sales': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'briefcase', label: 'Sales Enablement', borderColor: 'border-orange-200 dark:border-orange-800' },
            'collateral': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'document', label: 'Sales Collateral', borderColor: 'border-red-200 dark:border-red-800' },
            'events': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'calendar', label: 'Events & Webinars', borderColor: 'border-indigo-200 dark:border-indigo-800' }
        };
        return configs[category] || configs.training;
    };

    // Get resource type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'guide': { color: 'bg-blue-100 text-blue-700', icon: 'document', label: 'Guide', badge: '📘 Guide' },
            'video': { color: 'bg-purple-100 text-purple-700', icon: 'play', label: 'Video', badge: '🎥 Video' },
            'template': { color: 'bg-green-100 text-green-700', icon: 'template', label: 'Template', badge: '📄 Template' },
            'webinar': { color: 'bg-orange-100 text-orange-700', icon: 'video', label: 'Webinar', badge: '🎬 Webinar' },
            'case-study': { color: 'bg-red-100 text-red-700', icon: 'newspaper', label: 'Case Study', badge: '📊 Case Study' },
            'whitepaper': { color: 'bg-indigo-100 text-indigo-700', icon: 'document', label: 'Whitepaper', badge: '📑 Whitepaper' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', icon: 'document', label: type, badge: type };
    };

    // Get topic configuration
    const getTopicConfig = (topic) => {
        const configs = {
            'ai': { color: 'bg-purple-100 text-purple-700', label: 'AI & Machine Learning' },
            'inventory': { color: 'bg-blue-100 text-blue-700', label: 'Inventory Optimization' },
            'warehouse': { color: 'bg-green-100 text-green-700', label: 'Warehouse Management' },
            'transportation': { color: 'bg-orange-100 text-orange-700', label: 'Transportation' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700', label: 'Sustainability' },
            'analytics': { color: 'bg-indigo-100 text-indigo-700', label: 'Analytics' }
        };
        return configs[topic] || { color: 'bg-gray-100 text-gray-700', label: topic };
    };

    // Handle save resource
    const handleSaveResource = (resourceId) => {
        setSavedResources(prev =>
            prev.includes(resourceId)
                ? prev.filter(id => id !== resourceId)
                : [...prev, resourceId]
        );
    };

    // Handle like resource
    const handleLikeResource = (resourceId) => {
        setLikedResources(prev =>
            prev.includes(resourceId)
                ? prev.filter(id => id !== resourceId)
                : [...prev, resourceId]
        );
    };

    // Toggle expanded resource
    const toggleExpanded = (resourceId) => {
        setExpandedResource(expandedResource === resourceId ? null : resourceId);
    };

    // Filter resources
    const getFilteredResources = useCallback(() => {
        let resources = config?.resources || [];

        if (searchQuery) {
            resources = resources.filter(r =>
                r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            resources = resources.filter(r => r.category === selectedCategory);
        }

        if (selectedType !== 'all') {
            resources = resources.filter(r => r.type === selectedType);
        }

        if (selectedTopic !== 'all') {
            resources = resources.filter(r => r.topics?.includes(selectedTopic));
        }

        if (sortBy === 'popular') {
            resources = [...resources].sort((a, b) => (b.views || 0) - (a.views || 0));
        } else if (sortBy === 'latest') {
            resources = [...resources].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'trending') {
            resources = [...resources].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
        }

        return resources;
    }, [config?.resources, searchQuery, selectedCategory, selectedType, selectedTopic, sortBy]);

    const filteredResources = getFilteredResources();
    const categories = config?.categories || [
        { id: 'all', label: 'All Resources', icon: 'document', count: config?.resources?.length || 0 },
        { id: 'training', label: 'Training & Certification', icon: 'academic' },
        { id: 'marketing', label: 'Marketing & Sales', icon: 'chart' },
        { id: 'technical', label: 'Technical Resources', icon: 'code' },
        { id: 'sales', label: 'Sales Enablement', icon: 'briefcase' },
        { id: 'collateral', label: 'Sales Collateral', icon: 'document' }
    ];

    const resourceTypes = [
        { id: 'all', label: 'All Types', icon: 'document' },
        { id: 'guide', label: 'Guides', icon: 'document' },
        { id: 'video', label: 'Videos', icon: 'play' },
        { id: 'template', label: 'Templates', icon: 'template' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'case-study', label: 'Case Studies', icon: 'newspaper' },
        { id: 'whitepaper', label: 'Whitepapers', icon: 'document' }
    ];

    const topics = config?.topics || [
        { id: 'all', label: 'All Topics' },
        { id: 'ai', label: 'AI & Machine Learning' },
        { id: 'inventory', label: 'Inventory Optimization' },
        { id: 'warehouse', label: 'Warehouse Management' },
        { id: 'transportation', label: 'Transportation' },
        { id: 'sustainability', label: 'Sustainability' },
        { id: 'analytics', label: 'Analytics' }
    ];

    // Stats cards
    const stats = config?.stats || [
        { value: "100+", label: "Training Modules", icon: "academic", trend: "+12", trendUp: true },
        { value: "50+", label: "Sales Tools", icon: "briefcase", trend: "+8", trendUp: true },
        { value: "25+", label: "Case Studies", icon: "newspaper", trend: "+5", trendUp: true },
        { value: "1000+", label: "Active Partners", icon: "users", trend: "+150", trendUp: true }
    ];

    // Popular resources
    const popularResources = [...(config?.resources || [])]
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 4);

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedType !== 'all', selectedTopic !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedType('all');
        setSelectedTopic('all');
        setSortBy('popular');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Partner Resources Library"
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
                            <HiOutlineDocumentText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Partner Resources"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Tools &"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span> {config?.title?.suffix || "for Partners"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed."}
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
                            placeholder={config?.searchPlaceholder || "Search resources by title, category, or topic..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search resources"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="latest">Latest First</option>
                            <option value="trending">Trending</option>
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
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Resource Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resource Type</label>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {resourceTypes.map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Topic Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topic</label>
                                <select
                                    value={selectedTopic}
                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {topics.map(topic => (
                                        <option key={topic.id} value={topic.id}>{topic.label}</option>
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
                                    <option value="popular">Most Popular</option>
                                    <option value="latest">Latest First</option>
                                    <option value="trending">Trending</option>
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

                {/* Category Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
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

                {/* Resource Type Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {resourceTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedType === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(type.icon, "w-4 h-4")}
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Popular Resources Row */}
                {popularResources.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineFire className="w-5 h-5 text-orange-500" />
                            Most Popular Resources
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {popularResources.map((resource) => {
                                const categoryConfig = getCategoryConfig(resource.category);
                                const typeConfig = getTypeConfig(resource.type);
                                return (
                                    <Link
                                        key={resource.id}
                                        href={resource.link}
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                    >
                                        <div className={`w-10 h-10 rounded-lg ${categoryConfig.color} flex items-center justify-center`}>
                                            {getIcon(typeConfig.icon, "w-5 h-5")}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">{resource.title}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${typeConfig.color}`}>
                                                    {typeConfig.badge}
                                                </span>
                                                <span className="text-xs text-gray-500">{resource.views} views</span>
                                            </div>
                                        </div>
                                        <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredResources.length}</span> resources
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Resources Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredResources.map((resource) => {
                        const categoryConfig = getCategoryConfig(resource.category);
                        const typeConfig = getTypeConfig(resource.type);
                        const isExpanded = expandedResource === resource.id;
                        const isSaved = savedResources.includes(resource.id);
                        const isLiked = likedResources.includes(resource.id);

                        return (
                            <div
                                key={resource.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Resource Thumbnail */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-40 md:h-full' : 'h-40'
                                            }`}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeConfig.color}`}>
                                            {typeConfig.badge}
                                        </span>
                                    </div>
                                    {resource.downloadable && (
                                        <div className="absolute bottom-3 right-3">
                                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                                Download
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{resource.readTime || '5 min read'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{resource.views || '1.2k'} views</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <a href={resource.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {resource.title}
                                        </a>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {resource.description}
                                    </p>

                                    {/* Topics Tags */}
                                    {resource.topics && resource.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {resource.topics.slice(0, 3).map((topic, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    {getTopicConfig(topic).label}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Expandable Content */}
                                    {resource.content && (
                                        <div className="mb-3">
                                            <button
                                                onClick={() => toggleExpanded(resource.id)}
                                                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : 'Preview content'}
                                                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isExpanded && (
                                                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{resource.content}</p>
                                            )}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleLikeResource(resource.id)}
                                                className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                    }`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                                <span>{resource.likes || 0}</span>
                                            </button>
                                            <button
                                                onClick={() => handleSaveResource(resource.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <a
                                            href={resource.link}
                                            download={resource.downloadable}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            {resource.downloadable ? 'Download' : 'Access'}
                                            {resource.downloadable ? <HiOutlineDownload className="w-4 h-4" /> : <HiArrowRight className="w-4 h-4" />}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredResources.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No resources found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Partner Portal CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Access Partner Portal</h3>
                            <p className="text-blue-100 max-w-2xl">
                                Get exclusive access to all partner resources, training materials, and sales tools. Login to your partner account to unlock premium content.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/partner-portal"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Login to Portal
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/become-partner"
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                            >
                                Become a Partner
                                <HiOutlineExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Get Resource Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive notifications about new resources, training opportunities, and partner updates."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for resource updates"
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

export default PartnerResourcesSection2;