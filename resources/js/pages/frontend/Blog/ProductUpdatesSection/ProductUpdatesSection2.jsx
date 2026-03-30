// page/frontend/Blog/ProductUpdatesSection/ProductUpdatesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
} from 'react-icons/hi';

const ProductUpdatesSection2 = ({ config }) => {
    const [expandedRelease, setExpandedRelease] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('latest');
    const [likedUpdates, setLikedUpdates] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        switch (iconName) {
            case 'rocket': return <HiOutlineTrendingUp className={className} />;
            case 'sparkles': return <HiOutlineSparkles className={className} />;
            case 'chip': return <HiOutlineChip className={className} />;
            case 'cloud': return <HiOutlineCloudUpload className={className} />;
            case 'shield': return <HiOutlineShieldCheck className={className} />;
            case 'bolt': return <HiOutlineLightningBolt className={className} />;
            case 'chart': return <HiOutlineChartBar className={className} />;
            case 'users': return <HiOutlineUsers className={className} />;
            case 'globe': return <HiOutlineGlobe className={className} />;
            case 'calendar': return <HiOutlineCalendar className={className} />;
            case 'tag': return <HiOutlineTag className={className} />;
            case 'check': return <HiOutlineCheckCircle className={className} />;
            case 'clock': return <HiOutlineClock className={className} />;
            case 'eye': return <HiOutlineEye className={className} />;
            case 'bell': return <HiOutlineBell className={className} />;
            case 'download': return <HiOutlineDownload className={className} />;
            case 'play': return <HiOutlinePlay className={className} />;
            case 'document': return <HiOutlineDocumentText className={className} />;
            case 'code': return <HiOutlineCode className={className} />;
            case 'cog': return <HiOutlineCog className={className} />;
            case 'refresh': return <HiOutlineRefresh className={className} />;
            case 'star': return <HiOutlineStar className={className} />;
            case 'flag': return <HiOutlineFlag className={className} />;
            case 'gift': return <HiOutlineGift className={className} />;
            case 'filter': return <HiOutlineFilter className={className} />;
            case 'x': return <HiOutlineX className={className} />;
            case 'chevron-down': return <HiOutlineChevronDown className={className} />;
            case 'chevron-up': return <HiOutlineChevronUp className={className} />;
            case 'external': return <HiOutlineExternalLink className={className} />;
            case 'mail': return <HiOutlineMail className={className} />;
            case 'thumbs-up': return <HiOutlineThumbUp className={className} />;
            case 'chat': return <HiOutlineChat className={className} />;
            case 'share': return <HiOutlineShare className={className} />;
            default: return <HiOutlineSparkles className={className} />;
        }
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

    // Get status badge color and icon
    const getStatusConfig = (status) => {
        switch (status) {
            case 'live':
                return { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'rocket', label: 'Now Live' };
            case 'beta':
                return { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'chip', label: 'Beta' };
            case 'coming-soon':
                return { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'clock', label: 'Coming Soon' };
            case 'planned':
                return { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'flag', label: 'Planned' };
            default:
                return { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'check', label: 'Released' };
        }
    };

    // Get category badge color
    const getCategoryColor = (category) => {
        switch (category) {
            case 'new': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'improvement': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'fix': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
            case 'security': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
        }
    };

    // Handle like update
    const handleLike = (updateId) => {
        if (likedUpdates.includes(updateId)) {
            setLikedUpdates(likedUpdates.filter(id => id !== updateId));
        } else {
            setLikedUpdates([...likedUpdates, updateId]);
        }
    };

    // Filter and sort updates
    const getFilteredUpdates = () => {
        let updates = config?.updates || [];

        // Filter by category
        if (selectedCategory !== 'all') {
            updates = updates.filter(update => update.category === selectedCategory);
        }

        // Sort
        if (sortBy === 'latest') {
            updates = [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'popular') {
            updates = [...updates].sort((a, b) => (b.likes || 0) - (a.likes || 0));
        }

        return updates;
    };

    const filteredUpdates = getFilteredUpdates();
    const categories = ['all', 'new', 'improvement', 'fix', 'security'];

    // Group updates by month/year for changelog style
    const groupedUpdates = filteredUpdates.reduce((groups, update) => {
        const date = new Date(update.date);
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!groups[monthYear]) {
            groups[monthYear] = [];
        }
        groups[monthYear].push(update);
        return groups;
    }, {});

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Product Updates Section"
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
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Release Notes"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "What's"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "New"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Follow our journey of continuous improvement. Here's what we've been building to make your experience better."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{config?.stats?.totalReleases || 24}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Total Releases</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{config?.stats?.newFeatures || 12}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">New Features</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{config?.stats?.improvements || 45}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Improvements</div>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                                aria-label={`Show ${cat} updates`}
                            >
                                {cat === 'all' ? 'All Updates' : cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="latest">Latest First</option>
                            <option value="popular">Most Popular</option>
                        </select>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
                        >
                            <HiOutlineFilter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Release Notes - Changelog Style */}
                <div className="space-y-12 mb-12">
                    {Object.entries(groupedUpdates).map(([monthYear, updates]) => (
                        <div key={monthYear}>
                            {/* Month Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{monthYear}</h2>
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                                <span className="text-sm text-gray-500 dark:text-gray-400">{updates.length} updates</span>
                            </div>

                            {/* Updates Grid */}
                            <div className="grid gap-6">
                                {updates.map((update) => {
                                    const statusConfig = getStatusConfig(update.status);
                                    const isExpanded = expandedRelease === update.id;
                                    const isLiked = likedUpdates.includes(update.id);

                                    return (
                                        <div
                                            key={update.id}
                                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        >
                                            {/* Card Header */}
                                            <div className="p-6">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        {/* Category Badge */}
                                                        <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(update.category)} capitalize`}>
                                                            {update.category}
                                                        </span>

                                                        {/* Status Badge */}
                                                        <span className={`text-xs px-3 py-1 rounded-full ${statusConfig.color} flex items-center gap-1`}>
                                                            {getIcon(statusConfig.icon, "w-3 h-3")}
                                                            {statusConfig.label}
                                                        </span>

                                                        {/* Version Tag */}
                                                        {update.version && (
                                                            <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                                                v{update.version}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Date */}
                                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
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

                                                {/* Feature List - Expandable */}
                                                {update.features && update.features.length > 0 && (
                                                    <div className="mb-4">
                                                        <button
                                                            onClick={() => setExpandedRelease(isExpanded ? null : update.id)}
                                                            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                        >
                                                            {isExpanded ? 'Show less' : `Show ${update.features.length} features`}
                                                            {isExpanded ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                                                        </button>

                                                        {isExpanded && (
                                                            <ul className="mt-3 space-y-2">
                                                                {update.features.map((feature, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 shrink-0" />
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

                                                {/* Action Buttons */}
                                                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center gap-4">
                                                        {/* Like Button */}
                                                        <button
                                                            onClick={() => handleLike(update.id)}
                                                            className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                                                                }`}
                                                        >
                                                            <HiOutlineThumbUp className="w-4 h-4" />
                                                            <span>{update.likes || 0}</span>
                                                        </button>

                                                        {/* Comment Count */}
                                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                            <HiOutlineChat className="w-4 h-4" />
                                                            <span>{update.comments || 0}</span>
                                                        </div>

                                                        {/* Share Button */}
                                                        <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                            <HiOutlineShare className="w-4 h-4" />
                                                            <span>Share</span>
                                                        </button>
                                                    </div>

                                                    {/* Links */}
                                                    <div className="flex items-center gap-3">
                                                        {update.link && (
                                                            <Link
                                                                href={update.link}
                                                                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                            >
                                                                Learn more
                                                                <HiArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                        {update.demoLink && (
                                                            <Link
                                                                href={update.demoLink}
                                                                className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                            >
                                                                <HiOutlinePlay className="w-4 h-4" />
                                                                Watch demo
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                {config?.showViewAll && filteredUpdates.length < (config?.updates?.length || 0) && (
                    <div className="text-center mb-12">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All Releases
                            <HiArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
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
                                <p className="text-xs text-blue-100 mt-3">
                                    {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime."}
                                </p>
                            </div>

                            {/* Release Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.weekly || "2-3"}</div>
                                    <div className="text-sm text-blue-100">Updates per week</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold mb-1">{config?.newsletter?.stats?.subscribers || "5k+"}</div>
                                    <div className="text-sm text-blue-100">Active subscribers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Changelog RSS Link */}
                {config?.showRss && (
                    <div className="mt-8 text-center">
                        <Link
                            href={config?.rssLink || "/changelog.rss"}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <HiOutlineDownload className="w-4 h-4" />
                            Subscribe to RSS feed
                        </Link>
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
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
        }
      `}</style>
        </section>
    );
};

export default ProductUpdatesSection2;


