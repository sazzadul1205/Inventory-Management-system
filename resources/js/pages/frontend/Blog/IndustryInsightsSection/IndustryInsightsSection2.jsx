// page/frontend/Blog/IndustryInsightsSection/IndustryInsightsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineDocumentText,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineUser,
    HiOutlineTag,
    HiOutlineChartBar,
    HiOutlineLightningBolt,
    HiOutlineTrendingUp,
    HiOutlineEye,
    HiArrowRight,
    HiOutlineBookOpen,
    HiOutlineNewspaper,
    HiOutlineAcademicCap,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineChatAlt,
    HiOutlineFire,
    HiOutlineSparkles,
    HiOutlineHeart,
    HiOutlineGlobe,
    HiOutlineDownload,
    HiOutlineMail,
    HiOutlineSearch
} from 'react-icons/hi';

const IndustryInsightsSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState(config?.tabs?.[0]?.id || 'latest');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedArticles, setSavedArticles] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        switch (iconName) {
            case 'document':
                return <HiOutlineDocumentText className={className} />;
            case 'calendar':
                return <HiOutlineCalendar className={className} />;
            case 'clock':
                return <HiOutlineClock className={className} />;
            case 'user':
                return <HiOutlineUser className={className} />;
            case 'tag':
                return <HiOutlineTag className={className} />;
            case 'chart':
                return <HiOutlineChartBar className={className} />;
            case 'bolt':
                return <HiOutlineLightningBolt className={className} />;
            case 'trending':
                return <HiOutlineTrendingUp className={className} />;
            case 'eye':
                return <HiOutlineEye className={className} />;
            case 'book':
                return <HiOutlineBookOpen className={className} />;
            case 'newspaper':
                return <HiOutlineNewspaper className={className} />;
            case 'academic':
                return <HiOutlineAcademicCap className={className} />;
            case 'share':
                return <HiOutlineShare className={className} />;
            case 'bookmark':
                return <HiOutlineBookmark className={className} />;
            case 'chat':
                return <HiOutlineChatAlt className={className} />;
            case 'fire':
                return <HiOutlineFire className={className} />;
            case 'sparkles':
                return <HiOutlineSparkles className={className} />;
            case 'heart':
                return <HiOutlineHeart className={className} />;
            case 'globe':
                return <HiOutlineGlobe className={className} />;
            case 'download':
                return <HiOutlineDownload className={className} />;
            case 'mail':
                return <HiOutlineMail className={className} />;
            case 'search':
                return <HiOutlineSearch className={className} />;
            default:
                return <HiOutlineDocumentText className={className} />;
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

    // Reading time helper
    const getReadingTime = (content) => {
        if (!content) return '5 min read';
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min read`;
    };

    // Handle save article
    const handleSaveArticle = (articleId) => {
        if (savedArticles.includes(articleId)) {
            setSavedArticles(savedArticles.filter(id => id !== articleId));
        } else {
            setSavedArticles([...savedArticles, articleId]);
        }
    };

    // Filter articles based on active tab and search
    const getFilteredArticles = () => {
        let filtered = config?.articles || [];

        if (activeTab === 'trending') {
            filtered = filtered.filter(article => article.isTrending);
        } else if (activeTab === 'popular') {
            filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
        } else if (activeTab === 'latest') {
            filtered = [...filtered].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        }

        if (searchQuery) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    };

    const filteredArticles = getFilteredArticles();

    return (
        <section
            className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Industry Insights Section"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section with Search */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
                        <HiOutlineSparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Industry Insights"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Explore"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Latest Insights"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Expert analysis, thought leadership, and industry trends to help you stay ahead in the rapidly evolving supply chain landscape."}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search articles, topics, or authors..."}
                            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            aria-label="Search articles"
                        />
                    </div>

                    {/* Popular Topics */}
                    {config?.showTopics && (
                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                            {config?.topics?.map((topic, idx) => (
                                <button
                                    key={idx}
                                    className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Tabs */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
                    <div className="flex gap-2">
                        {config?.tabs?.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                                aria-label={`Show ${tab.label} articles`}
                                aria-pressed={activeTab === tab.id}
                            >
                                {getIcon(tab.icon, "w-4 h-4")}
                                {tab.label}
                                {tab.count && (
                                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                        }`}>
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RSS Feed Link */}
                    {config?.showRss && (
                        <Link
                            href={config?.rssLink || "/blog/rss"}
                            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <HiOutlineDownload className="w-4 h-4" />
                            RSS Feed
                        </Link>
                    )}
                </div>

                {/* Featured Grid - 2 Column Layout with Hero Article */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Main Featured Article */}
                    {config?.featuredArticle && (
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={config.featuredArticle.image}
                                        alt={config.featuredArticle.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap items-center gap-3 text-white text-sm mb-2">
                                            <span className="px-2 py-1 bg-white/20 rounded-full text-xs">{config.featuredArticle.category}</span>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(config.featuredArticle.publishDate)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{getReadingTime(config.featuredArticle.content)}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                                            {config.featuredArticle.title}
                                        </h2>
                                        <p className="text-white/80 text-sm line-clamp-2 mb-3">
                                            {config.featuredArticle.excerpt}
                                        </p>
                                        <Link
                                            href={config.featuredArticle.link}
                                            className="inline-flex items-center text-white font-semibold text-sm hover:gap-2 transition-all duration-300 group/link"
                                        >
                                            Read full article
                                            <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Trending/Editor's Pick Column */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                <HiOutlineFire className="w-5 h-5 text-orange-500" />
                                Editor's Picks
                            </h3>
                            <Link href={config?.editorsPickLink || "/blog/editors-picks"} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                View all
                            </Link>
                        </div>

                        {config?.editorsPicks?.map((pick, idx) => (
                            <div key={idx} className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                                        <img
                                            src={pick.image}
                                            alt={pick.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                                            <span className="text-blue-600 dark:text-blue-400 font-medium">{pick.category}</span>
                                            <span>•</span>
                                            <span>{formatDate(pick.publishDate)}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            <Link href={pick.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                {pick.title}
                                            </Link>
                                        </h4>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <HiOutlineEye className="w-3 h-3" />
                                                {pick.views || '1.2k'} views
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiOutlineClock className="w-3 h-3" />
                                                {getReadingTime(pick.content)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Article Image with Overlay */}
                                <Link href={article.link} className="relative block overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                        {article.isTrending && (
                                            <span className="flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                                <HiOutlineFire className="w-3 h-3" />
                                                Trending
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleSaveArticle(article.id)}
                                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors group/save"
                                        aria-label={savedArticles.includes(article.id) ? "Remove from saved" : "Save article"}
                                    >
                                        <HiOutlineBookmark className={`w-4 h-4 ${savedArticles.includes(article.id) ? 'fill-blue-600 text-blue-600' : 'text-gray-600 dark:text-gray-400'} group-hover/save:text-white`} />
                                    </button>
                                </Link>

                                <div className="p-6">
                                    {/* Author and Date */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={article.author?.avatar}
                                            alt={article.author?.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {article.author?.name}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span>{formatDate(article.publishDate)}</span>
                                                <span>•</span>
                                                <span>{getReadingTime(article.content)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link
                                            href={article.link}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    {/* Stats and Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <HiOutlineEye className="w-4 h-4" />
                                                {article.views || '1.2k'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiOutlineChatAlt className="w-4 h-4" />
                                                {article.comments || '24'}
                                            </span>
                                        </div>
                                        <button
                                            className="flex items-center gap-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            aria-label="Share article"
                                        >
                                            <HiOutlineShare className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <HiOutlineBookOpen className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {config?.showLoadMore && filteredArticles.length > 0 && (
                    <div className="text-center mb-16">
                        <button
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                            aria-label="Load more articles"
                        >
                            Load More Articles
                            <HiArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Expert Contributors Section */}
                {config?.showContributors && (
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Meet Our Expert Contributors
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Industry leaders sharing their knowledge and insights
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {config?.contributors?.map((contributor, idx) => (
                                <div key={idx} className="text-center group">
                                    <div className="relative">
                                        <img
                                            src={contributor.avatar}
                                            alt={contributor.name}
                                            className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-600 dark:group-hover:border-blue-500 transition-all duration-300"
                                        />
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                                    </div>
                                    <p className="font-medium text-gray-900 dark:text-white mt-3 text-sm">{contributor.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{contributor.role}</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{contributor.articles} articles</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Newsletter Banner */}
                {config?.showNewsletter && (
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
                        <div className="max-w-2xl mx-auto">
                            <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold mb-4">{config?.newsletter?.title || "Never Miss an Insight"}</h3>
                            <p className="text-xl text-blue-100 mb-8">
                                {config?.newsletter?.description || "Get the latest industry insights, expert analysis, and exclusive content delivered to your inbox weekly."}
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    aria-label="Email address for newsletter subscription"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                            <p className="text-sm text-blue-100 mt-4">
                                {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. We respect your privacy."}
                            </p>
                        </div>
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

export default IndustryInsightsSection2;