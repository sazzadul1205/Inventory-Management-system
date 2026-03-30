// page/frontend/News/ProductLaunchesSection/ProductLaunchesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FaQuoteLeft as HiOutlineQuote } from "react-icons/fa";
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
    HiOutlineUsers as HiOutlineUsersAlt,
    HiOutlineChip as HiOutlineChipAlt
} from 'react-icons/hi';
import { HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';


const ProductLaunchesSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedLaunch, setExpandedLaunch] = useState(null);
    const [savedLaunches, setSavedLaunches] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            rocket: <HiOutlineRocket className={className} />,
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
            usergroup: <HiOutlineUsersAlt className={className} />,
            chipAlt: <HiOutlineChipAlt className={className} />
        };
        return icons[iconName] || <HiOutlineRocket className={className} />;
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    // Get status badge configuration
    const getStatusConfig = (status) => {
        const configs = {
            'live': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'rocket', label: 'Now Live' },
            'beta': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'chip', label: 'Beta' },
            'coming-soon': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'clock', label: 'Coming Soon' },
            'preview': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'eye', label: 'Preview' }
        };
        return configs[status] || configs.live;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'ai': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'AI & Machine Learning' },
            'automation': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cog', label: 'Automation' },
            'analytics': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'chart', label: 'Analytics' },
            'integration': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'cloud', label: 'Integration' },
            'mobile': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'download', label: 'Mobile' },
            'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
        };
        return configs[category] || configs.ai;
    };

    // Handle save launch
    const handleSaveLaunch = (launchId) => {
        if (savedLaunches.includes(launchId)) {
            setSavedLaunches(savedLaunches.filter(id => id !== launchId));
        } else {
            setSavedLaunches([...savedLaunches, launchId]);
        }
    };

    // Toggle expanded launch
    const toggleExpanded = (launchId) => {
        setExpandedLaunch(expandedLaunch === launchId ? null : launchId);
    };

    // Filter launches
    const getFilteredLaunches = () => {
        let launches = config?.launches || [];

        if (searchQuery) {
            launches = launches.filter(l =>
                l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            launches = launches.filter(l => l.category === selectedCategory);
        }

        if (selectedStatus !== 'all') {
            launches = launches.filter(l => l.status === selectedStatus);
        }

        return launches;
    };

    const filteredLaunches = getFilteredLaunches();
    const categories = config?.categories || [
        { id: 'all', label: 'All Products', icon: 'rocket' },
        { id: 'ai', label: 'AI & ML', icon: 'chip' },
        { id: 'automation', label: 'Automation', icon: 'cog' },
        { id: 'analytics', label: 'Analytics', icon: 'chart' },
        { id: 'integration', label: 'Integration', icon: 'cloud' },
        { id: 'mobile', label: 'Mobile', icon: 'download' }
    ];

    const statuses = config?.statuses || [
        { id: 'all', label: 'All Status' },
        { id: 'live', label: 'Now Live' },
        { id: 'beta', label: 'Beta' },
        { id: 'coming-soon', label: 'Coming Soon' },
        { id: 'preview', label: 'Preview' }
    ];

    // Featured launch
    const featuredLaunch = config?.featuredLaunch || filteredLaunches[0];

    // Stats cards
    const stats = config?.stats || [
        { value: "12", label: "New Products", icon: "rocket" },
        { value: "8", label: "AI Features", icon: "chip" },
        { value: "45+", label: "Improvements", icon: "cog" },
        { value: "100k+", label: "Users Impacted", icon: "users" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Product Launches Section"
            itemScope
            itemType="https://schema.org/Product"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-purple-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-purple-100 dark:border-gray-700">
                        <HiOutlineRocket className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                            {config?.badge || "What's New"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Latest"} <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Product Launches"}</span> {config?.title?.suffix || ""}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Discover our newest innovations, features, and capabilities designed to transform your supply chain operations."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-purple-600")}
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
                        placeholder={config?.searchPlaceholder || "Search products by name, category, or feature..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search products"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label={`Show ${category.label} products`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Status Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {statuses.map((status) => (
                        <button
                            key={status.id}
                            onClick={() => setSelectedStatus(status.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedStatus === status.id
                                ? 'bg-gray-800 dark:bg-gray-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {status.label}
                        </button>
                    ))}
                </div>

                {/* Featured Launch */}
                {featuredLaunch && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                                                Featured Launch
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{formatDate(featuredLaunch.date)}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredLaunch.category).color}`}>
                                                {getCategoryConfig(featuredLaunch.category).label}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusConfig(featuredLaunch.status).color}`}>
                                                {getStatusConfig(featuredLaunch.status).label}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredLaunch.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredLaunch.description}
                                        </p>

                                        {/* Key Features Preview */}
                                        {featuredLaunch.features && featuredLaunch.features.length > 0 && (
                                            <div className="mb-6">
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</p>
                                                <ul className="space-y-2">
                                                    {featuredLaunch.features.slice(0, 3).map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredLaunch.link}
                                                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Learn More
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveLaunch(featuredLaunch.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedLaunches.includes(featuredLaunch.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedLaunches.includes(featuredLaunch.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                            {featuredLaunch.demoUrl && (
                                                <a
                                                    href={featuredLaunch.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-600 hover:text-purple-600"
                                                >
                                                    <HiOutlinePlay className="w-4 h-4" />
                                                    Watch Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-purple-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredLaunch.image}
                                            alt={featuredLaunch.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Launches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredLaunches.map((launch) => {
                        const categoryConfig = getCategoryConfig(launch.category);
                        const statusConfig = getStatusConfig(launch.status);
                        const isExpanded = expandedLaunch === launch.id;
                        const isSaved = savedLaunches.includes(launch.id);

                        return (
                            <div
                                key={launch.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={launch.image}
                                        alt={launch.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusConfig.color}`}>
                                            {statusConfig.label}
                                        </span>
                                    </div>
                                    {launch.demoUrl && (
                                        <div className="absolute bottom-3 right-3">
                                            <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(launch.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{launch.views || '1.2k'} views</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link href={launch.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            {launch.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {launch.description}
                                    </p>

                                    {/* Expandable Features */}
                                    {launch.features && launch.features.length > 0 && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => toggleExpanded(launch.id)}
                                                className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : `View ${launch.features.length} features`}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <ul className="mt-3 space-y-2">
                                                    {launch.features.slice(0, 5).map((feature, idx) => (
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
                                    {launch.tags && launch.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {launch.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <button
                                            onClick={() => handleSaveLaunch(launch.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                        <Link
                                            href={launch.link}
                                            className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
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
                {filteredLaunches.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineRocket className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No products found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedStatus('all');
                            }}
                            className="mt-4 text-purple-600 dark:text-purple-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* View All Button */}
                {config?.showViewAll && filteredLaunches.length < (config?.launches?.length || 0) && (
                    <div className="text-center">
                        <Link
                            href={config?.viewAllLink || "/product-launches"}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-purple-600 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                        >
                            View All Products
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {config?.newsletter?.title || "Be the First to Know"}
                        </h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive product launch announcements, feature updates, and exclusive early access invitations."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for product updates"
                            />
                            <button
                                type="submit"
                                className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-purple-100 mt-4">
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

export default ProductLaunchesSection1;