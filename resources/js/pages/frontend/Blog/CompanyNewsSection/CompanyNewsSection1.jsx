// page/frontend/Blog/CompanyNewsSection/CompanyNewsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineNewspaper,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineDownload,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineRocket,
    HiOutlineTrophy,
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineUsers,
    HiOutlineChip,
    HiOutlineCloudUpload
} from 'react-icons/hi';

const CompanyNewsSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedNews, setExpandedNews] = useState(null);
    const [savedNews, setSavedNews] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            newspaper: <HiOutlineNewspaper className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            download: <HiOutlineDownload className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            usergroup: <HiOutlineUsers className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />
        };
        return icons[iconName] || <HiOutlineNewspaper className={className} />;
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

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'megaphone', label: 'Announcement' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update' },
            'partnership': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'handshake', label: 'Partnership' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award & Recognition' },
            'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event' },
            'press': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'newspaper', label: 'Press Release' },
            'community': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Community' }
        };
        return configs[category] || configs.announcement;
    };

    // Handle save news
    const handleSaveNews = (newsId) => {
        if (savedNews.includes(newsId)) {
            setSavedNews(savedNews.filter(id => id !== newsId));
        } else {
            setSavedNews([...savedNews, newsId]);
        }
    };

    // Toggle expanded news
    const toggleExpanded = (newsId) => {
        setExpandedNews(expandedNews === newsId ? null : newsId);
    };

    // Filter news
    const getFilteredNews = () => {
        let news = config?.news || [];

        if (searchQuery) {
            news = news.filter(n =>
                n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                n.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                n.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            news = news.filter(n => n.category === selectedCategory);
        }

        return news;
    };

    const filteredNews = getFilteredNews();
    const categories = config?.categories || [
        { id: 'all', label: 'All News', icon: 'newspaper' },
        { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
        { id: 'product', label: 'Product Updates', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'event', label: 'Events', icon: 'calendar' }
    ];

    // Featured news (first item or specific featured)
    const featuredNews = config?.featuredNews || filteredNews[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Company News Section"
            itemScope
            itemType="https://schema.org/NewsArticle"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineNewspaper className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Latest News"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Company"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "News"}</span> {config?.title?.suffix || "& Announcements"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Stay updated with the latest company announcements, product releases, partnerships, and industry recognition."}
                    </p>
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
                        placeholder={config?.searchPlaceholder || "Search news by title, category, or keyword..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search news"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label={`Show ${category.label} news`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured News */}
                {featuredNews && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Featured Content */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Story
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(featuredNews.date)}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredNews.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredNews.excerpt}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={featuredNews.author?.avatar}
                                                    alt={featuredNews.author?.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {featuredNews.author?.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{featuredNews.views || '2.5k'} views</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredNews.link}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Read Full Story
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveNews(featuredNews.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedNews.includes(featuredNews.id)
                                                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedNews.includes(featuredNews.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true"></div>
                                        <img
                                            src={featuredNews.image}
                                            alt={featuredNews.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                        {featuredNews.videoUrl && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                                    <HiOutlinePlay className="w-8 h-8 text-blue-600 ml-1" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredNews.map((news) => {
                        const categoryConfig = getCategoryConfig(news.category);
                        const isExpanded = expandedNews === news.id;
                        const isSaved = savedNews.includes(news.id);

                        return (
                            <div
                                key={news.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* News Image */}
                                <Link href={news.link} className="block overflow-hidden relative">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                    {news.videoUrl && (
                                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                                            <HiOutlinePlay className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </Link>

                                <div className="p-6">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(news.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{news.views || '1.2k'} views</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link href={news.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {news.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {news.excerpt}
                                    </p>

                                    {/* Expandable Content */}
                                    {news.content && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => toggleExpanded(news.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'Read more'}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                                    {news.content}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {news.tags && news.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {news.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={news.author?.avatar}
                                                alt={news.author?.name}
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {news.author?.name}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleSaveNews(news.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                                aria-label="Save news"
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                                aria-label="Share news"
                                            >
                                                <HiOutlineShare className="w-4 h-4" />
                                            </button>
                                            <Link
                                                href={news.link}
                                                className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredNews.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineNewspaper className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No news found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* View All Button */}
                {config?.showViewAll && filteredNews.length < (config?.news?.length || 0) && (
                    <div className="text-center">
                        <Link
                            href={config?.viewAllLink || "/news"}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All News
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Press Mentions Section */}
                {config?.showPressMentions && config?.pressMentions && (
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">In the Press</h3>
                            <p className="text-gray-600 dark:text-gray-400">Featured in leading publications</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {config.pressMentions.map((mention, idx) => (
                                <a
                                    key={idx}
                                    href={mention.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    {mention.logo ? (
                                        <img src={mention.logo} alt={mention.name} className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                                    ) : (
                                        <span className="font-semibold text-lg">{mention.name}</span>
                                    )}
                                    <HiOutlineExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {config?.newsletter?.title || "Subscribe to Our Newsletter"}
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Get the latest company news, product updates, and industry insights delivered straight to your inbox."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for newsletter subscription"
                            />
                            <button
                                type="submit"
                                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-blue-100 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. We respect your privacy."}
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

export default CompanyNewsSection1;