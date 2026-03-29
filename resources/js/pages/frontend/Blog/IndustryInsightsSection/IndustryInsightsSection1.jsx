// page/frontend/Blog/IndustryInsightsSection/IndustryInsightsSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
    HiOutlineChatAlt
} from 'react-icons/hi';

const IndustryInsightsSection1 = ({ config }) => {
    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        switch (iconName) {
            case 'document':
                return <HiOutlineDocumentText className={className} aria-hidden="true" />;
            case 'calendar':
                return <HiOutlineCalendar className={className} aria-hidden="true" />;
            case 'clock':
                return <HiOutlineClock className={className} aria-hidden="true" />;
            case 'user':
                return <HiOutlineUser className={className} aria-hidden="true" />;
            case 'tag':
                return <HiOutlineTag className={className} aria-hidden="true" />;
            case 'chart':
                return <HiOutlineChartBar className={className} aria-hidden="true" />;
            case 'bolt':
                return <HiOutlineLightningBolt className={className} aria-hidden="true" />;
            case 'trending':
                return <HiOutlineTrendingUp className={className} aria-hidden="true" />;
            case 'eye':
                return <HiOutlineEye className={className} aria-hidden="true" />;
            case 'book':
                return <HiOutlineBookOpen className={className} aria-hidden="true" />;
            case 'newspaper':
                return <HiOutlineNewspaper className={className} aria-hidden="true" />;
            case 'academic':
                return <HiOutlineAcademicCap className={className} aria-hidden="true" />;
            case 'share':
                return <HiOutlineShare className={className} aria-hidden="true" />;
            case 'bookmark':
                return <HiOutlineBookmark className={className} aria-hidden="true" />;
            case 'chat':
                return <HiOutlineChatAlt className={className} aria-hidden="true" />;
            default:
                return <HiOutlineDocumentText className={className} aria-hidden="true" />;
        }
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Reading time helper
    const getReadingTime = (content) => {
        if (!content) return '5 min read';
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min read`;
    };

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Industry Insights Section"
            itemScope
            itemType="https://schema.org/Blog"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-50 dark:bg-gray-800'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-100 dark:border-gray-700'}`}
                        aria-label="Section badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                        {config?.badge?.icon && (
                            <span className="mr-2">{getIcon(config.badge.icon, "w-4 h-4")}</span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
                            {config?.badge?.text || "Industry Insights"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        itemProp="name"
                    >
                        {config?.title?.prefix}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || "Industry Insights"}
                        </span>{' '}
                        {config?.title?.suffix}
                    </h2>

                    {/* Section Description */}
                    <p
                        className="text-xl text-gray-600 dark:text-gray-400"
                        itemProp="description"
                    >
                        {config?.description || "Stay ahead of the curve with our latest industry insights, expert analysis, and thought leadership content."}
                    </p>
                </div>

                {/* Category Filters */}
                {config?.showCategories && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!config?.activeCategory ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label="Show all articles"
                        >
                            All
                        </button>
                        {config?.categories?.map((category) => (
                            <button
                                key={category.id}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${config?.activeCategory === category.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                aria-label={`Show ${category.label} articles`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Featured Article */}
                {config?.featuredArticle && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Featured Image */}
                                <div className="relative h-80 lg:h-full">
                                    <img
                                        src={config.featuredArticle.image}
                                        alt={config.featuredArticle.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>

                                {/* Featured Content */}
                                <div className="p-8 lg:p-10">
                                    {/* Category and Metadata */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            {config.featuredArticle.category}
                                        </span>
                                        <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(config.featuredArticle.publishDate)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{getReadingTime(config.featuredArticle.content)}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        <Link
                                            href={config.featuredArticle.link}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {config.featuredArticle.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {config.featuredArticle.excerpt}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <img
                                            src={config.featuredArticle.author?.avatar}
                                            alt={config.featuredArticle.author?.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">
                                                {config.featuredArticle.author?.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {config.featuredArticle.author?.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Read More Link */}
                                    <Link
                                        href={config.featuredArticle.link}
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all duration-300 group"
                                    >
                                        Read full article
                                        <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Articles Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    itemProp="blogPosts"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                >
                    {config?.articles?.map((article) => (
                        <article
                            key={article.id}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            itemProp="blogPost"
                            itemScope
                            itemType="https://schema.org/BlogPosting"
                        >
                            {/* Article Image */}
                            <Link href={article.link} className="block overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    itemProp="image"
                                />
                            </Link>

                            <div className="p-6">
                                {/* Category Badge */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    {article.isTrending && (
                                        <span className="flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                                            <HiOutlineTrendingUp className="w-3 h-3" />
                                            Trending
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2"
                                    itemProp="headline"
                                >
                                    <Link
                                        href={article.link}
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {article.title}
                                    </Link>
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
                                    itemProp="description"
                                >
                                    {article.excerpt}
                                </p>

                                {/* Metadata */}
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <HiOutlineCalendar className="w-4 h-4" />
                                        <span>{formatDate(article.publishDate)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineClock className="w-4 h-4" />
                                        <span>{getReadingTime(article.content)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineEye className="w-4 h-4" />
                                        <span>{article.readTime || '1.2k'} views</span>
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <img
                                        src={article.author?.avatar}
                                        alt={article.author?.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            {article.author?.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {article.author?.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={article.link}
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm mt-4 group/link"
                                >
                                    <span>Read more</span>
                                    <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Articles CTA */}
                {config?.showViewAll && (
                    <div className="text-center mt-12">
                        <Link
                            href={config?.viewAllLink || "/blog"}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            {config?.viewAllText || "View All Articles"}
                            <HiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-20 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
                        <h3 className="text-3xl font-bold mb-4">{config?.newsletter?.title || "Stay in the Loop"}</h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Get the latest industry insights delivered straight to your inbox."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-xl text-gray-900 dark:text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email address for newsletter subscription"
                            />
                            <button
                                type="submit"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-blue-100 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime."}
                        </p>
                    </div>
                )}
            </div>

            {/* Required CSS for animations */}
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

export default IndustryInsightsSection1;