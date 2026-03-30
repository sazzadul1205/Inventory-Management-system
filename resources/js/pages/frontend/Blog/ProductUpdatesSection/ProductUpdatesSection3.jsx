// page/frontend/Blog/ProductUpdatesSection/ProductUpdatesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
    HiOutlineSparkles,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
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
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineRefresh,
    HiOutlineStar,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineFilter,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineExternalLink,
    HiOutlineMail,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineShare,
    HiOutlineTrendingUp,
    HiOutlineChartPie,
    HiOutlineFire,
    HiOutlineBookmark,
    HiOutlineZoomIn,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineSearch
} from 'react-icons/hi';
import { MdOutlineBarChart } from "react-icons/md";

const ProductUpdatesSection3 = ({ config }) => {
    const [selectedRelease, setSelectedRelease] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'timeline'); // timeline, grid, compact
    const [expandedFeatures, setExpandedFeatures] = useState(new Set());
    const [likedUpdates, setLikedUpdates] = useState([]);
    const [bookmarkedUpdates, setBookmarkedUpdates] = useState([]);
    const [selectedYear, setSelectedYear] = useState('all');
    const timelineRef = useRef(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            rocket: <HiOutlineTrendingUp       className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            bolt: <HiOutlineLightningBolt className={className} />,
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
            document: <HiOutlineDocumentText className={className} />,
            code: <HiOutlineCode className={className} />,
            cog: <HiOutlineCog className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            star: <HiOutlineStar className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            filter: <HiOutlineFilter className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            share: <HiOutlineShare className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            bar: <MdOutlineBarChart className={className} />,
            fire: <HiOutlineFire className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />
        };
        return icons[iconName] || <HiOutlineSparkles className={className} />;
    };

    // Format date helper
    const formatDate = (dateString, format = 'full') => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (format === 'short') {
            return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
        }
        if (format === 'month') {
            return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
        }
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get status configuration
    const getStatusConfig = (status) => {
        const configs = {
            live: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'rocket', label: 'Now Live', badge: 'LIVE' },
            beta: { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'chip', label: 'Beta', badge: 'BETA' },
            'coming-soon': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'clock', label: 'Coming Soon', badge: 'SOON' },
            planned: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'flag', label: 'Planned', badge: 'PLANNED' }
        };
        return configs[status] || configs.live;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            new: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'New Feature' },
            improvement: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'trending', label: 'Improvement' },
            fix: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'cog', label: 'Bug Fix' },
            security: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
        };
        return configs[category] || configs.improvement;
    };

    // Handle like
    const handleLike = (updateId) => {
        setLikedUpdates(prev => prev.includes(updateId) ? prev.filter(id => id !== updateId) : [...prev, updateId]);
    };

    // Handle bookmark
    const handleBookmark = (updateId) => {
        setBookmarkedUpdates(prev => prev.includes(updateId) ? prev.filter(id => id !== updateId) : [...prev, updateId]);
    };

    // Toggle features expansion
    const toggleFeatures = (updateId) => {
        setExpandedFeatures(prev => {
            const newSet = new Set(prev);
            if (newSet.has(updateId)) {
                newSet.delete(updateId);
            } else {
                newSet.add(updateId);
            }
            return newSet;
        });
    };

    // Filter and sort updates
    const getFilteredUpdates = () => {
        let updates = config?.updates || [];

        // Search filter
        if (searchQuery) {
            updates = updates.filter(u =>
                u.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                u.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                u.features?.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
                u.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Category filter
        if (selectedCategory !== 'all') {
            updates = updates.filter(u => u.category === selectedCategory);
        }

        // Year filter
        if (selectedYear !== 'all') {
            updates = updates.filter(u => new Date(u.date).getFullYear().toString() === selectedYear);
        }

        // Sort by date descending
        return [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    const filteredUpdates = getFilteredUpdates();
    const categories = ['all', 'new', 'improvement', 'fix', 'security'];

    // Get available years for filter
    const availableYears = [...new Set(config?.updates?.map(u => new Date(u.date).getFullYear().toString()) || [])].sort().reverse();

    // Get featured releases (major versions)
    const featuredReleases = config?.featuredReleases || filteredUpdates.filter(u => u.isFeatured).slice(0, 3);

    // Group updates by month for compact view
    const groupedUpdates = filteredUpdates.reduce((groups, update) => {
        const monthKey = formatDate(update.date, 'month');
        if (!groups[monthKey]) groups[monthKey] = [];
        groups[monthKey].push(update);
        return groups;
    }, {});

    // Scroll to timeline section when release is selected
    useEffect(() => {
        if (selectedRelease && timelineRef.current) {
            const element = document.getElementById(`release-${selectedRelease}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [selectedRelease]);

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Product Updates Hub"
        >
            {/* Background Pattern - Circuit Board Style */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineSparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Release Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Product"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Updates"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Track our journey of continuous innovation. Discover new features, improvements, and what's coming next."}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search updates, features, or tags..."}
                            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            aria-label="Search updates"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                <HiOutlineX className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Featured Releases Carousel */}
                {config?.showFeatured && featuredReleases.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <HiOutlineFire className="w-6 h-6 text-orange-500" />
                                Featured Releases
                            </h2>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <HiOutlineChevronDown className="w-5 h-5 rotate-90" />
                                </button>
                                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <HiOutlineChevronDown className="w-5 h-5 -rotate-90" />
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredReleases.map((release, idx) => (
                                <div
                                    key={release.id}
                                    className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => setSelectedRelease(release.id)}
                                >
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">{release.version}</span>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{formatDate(release.date)}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{release.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{release.description}</p>
                                    <div className="flex items-center gap-2">
                                        {release.features?.slice(0, 2).map((feature, fIdx) => (
                                            <span key={fIdx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                {feature.substring(0, 20)}...
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const catConfig = getCategoryConfig(cat);
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize flex items-center gap-1 ${selectedCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {cat !== 'all' && getIcon(catConfig.icon, "w-4 h-4")}
                                    {cat === 'all' ? 'All Updates' : cat}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Year Filter */}
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Years</option>
                            {availableYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>

                        {/* View Mode Toggle */}
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('timeline')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Timeline view"
                            >
                                {getIcon('menu', "w-4 h-4")}
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                {getIcon('grid', "w-4 h-4")}
                            </button>
                            <button
                                onClick={() => setViewMode('compact')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'compact' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Compact view"
                            >
                                {getIcon('list', "w-4 h-4")}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredUpdates.length}</span> updates
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Timeline View */}
                {viewMode === 'timeline' && (
                    <div ref={timelineRef} className="relative mb-12">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block" aria-hidden="true" />

                        <div className="space-y-12">
                            {filteredUpdates.map((update, index) => {
                                const statusConfig = getStatusConfig(update.status);
                                const categoryConfig = getCategoryConfig(update.category);
                                const isExpanded = expandedFeatures.has(update.id);
                                const isLiked = likedUpdates.includes(update.id);
                                const isBookmarked = bookmarkedUpdates.includes(update.id);
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        id={`release-${update.id}`}
                                        key={update.id}
                                        className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>

                                        {/* Date Badge (Mobile) */}
                                        <div className="md:hidden flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                <HiOutlineCalendar className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {formatDate(update.date)}
                                            </span>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                                                <div className="p-6">
                                                    {/* Header */}
                                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className={`text-xs px-3 py-1 rounded-full ${categoryConfig.color} flex items-center gap-1`}>
                                                                {getIcon(categoryConfig.icon, "w-3 h-3")}
                                                                {categoryConfig.label}
                                                            </span>
                                                            <span className={`text-xs px-3 py-1 rounded-full ${statusConfig.color} flex items-center gap-1`}>
                                                                {getIcon(statusConfig.icon, "w-3 h-3")}
                                                                {statusConfig.label}
                                                            </span>
                                                            {update.version && (
                                                                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                                                    v{update.version}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <HiOutlineCalendar className="w-4 h-4" />
                                                            <span>{formatDate(update.date)}</span>
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                        {update.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                        {update.description}
                                                    </p>

                                                    {/* Features */}
                                                    {update.features && update.features.length > 0 && (
                                                        <div className="mb-4">
                                                            <button
                                                                onClick={() => toggleFeatures(update.id)}
                                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                            >
                                                                {isExpanded ? 'Show less' : `Show ${update.features.length} features`}
                                                                {isExpanded ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                                                            </button>

                                                            {isExpanded && (
                                                                <ul className="mt-3 space-y-2">
                                                                    {update.features.map((feature, idx) => (
                                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Tags */}
                                                    {update.tags && update.tags.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {update.tags.map((tag, idx) => (
                                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Actions */}
                                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                        <div className="flex items-center gap-4">
                                                            <button
                                                                onClick={() => handleLike(update.id)}
                                                                className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600'
                                                                    }`}
                                                            >
                                                                <HiOutlineThumbUp className="w-4 h-4" />
                                                                <span>{(update.likes || 0) + (isLiked ? 1 : 0)}</span>
                                                            </button>
                                                            <button
                                                                onClick={() => handleBookmark(update.id)}
                                                                className={`flex items-center gap-1 text-sm transition-colors ${isBookmarked ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400 hover:text-yellow-600'
                                                                    }`}
                                                            >
                                                                <HiOutlineBookmark className="w-4 h-4" />
                                                                <span>Save</span>
                                                            </button>
                                                            <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                                                                <HiOutlineShare className="w-4 h-4" />
                                                                <span>Share</span>
                                                            </button>
                                                        </div>

                                                        {update.link && (
                                                            <Link
                                                                href={update.link}
                                                                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                            >
                                                                Learn more
                                                                <HiArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Empty spacer */}
                                        <div className="hidden md:block md:w-1/2" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredUpdates.map((update) => {
                            const statusConfig = getStatusConfig(update.status);
                            const categoryConfig = getCategoryConfig(update.category);
                            const isLiked = likedUpdates.includes(update.id);

                            return (
                                <div
                                    key={update.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                                                {categoryConfig.label}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${statusConfig.color}`}>
                                                {statusConfig.label}
                                            </span>
                                        </div>

                                        {update.version && (
                                            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
                                                v{update.version}
                                            </div>
                                        )}

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {update.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                            {update.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                {formatDate(update.date, 'short')}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleLike(update.id)}
                                                    className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                                                        }`}
                                                >
                                                    <HiOutlineThumbUp className="w-3 h-3" />
                                                    <span>{(update.likes || 0) + (isLiked ? 1 : 0)}</span>
                                                </button>
                                                <Link href={update.link} className="text-blue-600 text-xs font-medium hover:underline">
                                                    Details →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Compact View (Changelog Style) */}
                {viewMode === 'compact' && (
                    <div className="space-y-8 mb-12">
                        {Object.entries(groupedUpdates).map(([month, updates]) => (
                            <div key={month}>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 sticky top-0 bg-white dark:bg-gray-900 py-2 z-10">
                                    {month}
                                </h3>
                                <div className="space-y-3">
                                    {updates.map((update) => {
                                        const categoryConfig = getCategoryConfig(update.category);
                                        const statusConfig = getStatusConfig(update.status);

                                        return (
                                            <div
                                                key={update.id}
                                                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <div className="w-24 text-xs text-gray-500 dark:text-gray-400 shrink-0">
                                                    {formatDate(update.date, 'short')}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig.color}`}>
                                                            {statusConfig.badge}
                                                        </span>
                                                        {update.version && (
                                                            <span className="text-xs font-mono text-gray-500">v{update.version}</span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {update.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                                                        {update.description}
                                                    </p>
                                                </div>
                                                <Link href={update.link} className="shrink-0 text-blue-600 text-sm hover:underline">
                                                    Read
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {filteredUpdates.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineSearch className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No updates found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedYear('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineBell className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.newsletter?.title || "Get release notes in your inbox"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.newsletter?.description || "Subscribe to receive weekly updates about new features, improvements, and product announcements."}
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Email for product updates"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.releases || "50+"}</div>
                                    <div className="text-sm text-blue-100">Releases This Year</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.features || "200+"}</div>
                                    <div className="text-sm text-blue-100">New Features</div>
                                </div>
                            </div>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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

export default ProductUpdatesSection3;

