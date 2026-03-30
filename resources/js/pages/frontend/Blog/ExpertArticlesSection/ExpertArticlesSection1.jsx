// page/frontend/Blog/ExpertArticlesSection/ExpertArticlesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineUser,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
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
    HiArrowRight,
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
    HiOutlineCloudUpload,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineArchive,
    HiOutlinePhotograph,
    HiOutlineDocument,
    HiOutlineLink,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineQuote,
    HiOutlineAtSymbol,
    HiOutlineBuildingOffice,
    HiOutlineNewspaper
} from 'react-icons/hi';

const ExpertArticlesSection1 = ({ config }) => {
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedArticles, setSavedArticles] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            user: <HiOutlineUser className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
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
            cloud: <HiOutlineCloudUpload className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            archive: <HiOutlineArchive className={className} />,
            photo: <HiOutlinePhotograph className={className} />,
            doc: <HiOutlineDocument className={className} />,
            link: <HiOutlineLink className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            quote: <HiOutlineQuote className={className} />,
            at: <HiOutlineAtSymbol className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />
        };
        return icons[iconName] || <HiOutlineUser className={className} />;
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
            'strategy': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chart', label: 'Strategy' },
            'technology': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Technology' },
            'operations': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'cog', label: 'Operations' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability' },
            'leadership': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Leadership' },
            'innovation': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'rocket', label: 'Innovation' }
        };
        return configs[category] || configs.strategy;
    };

    // Handle save article
    const handleSaveArticle = (articleId) => {
        setSavedArticles(prev =>
            prev.includes(articleId)
                ? prev.filter(id => id !== articleId)
                : [...prev, articleId]
        );
    };

    // Filter articles
    const getFilteredArticles = () => {
        let articles = config?.articles || [];

        if (searchQuery) {
            articles = articles.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            articles = articles.filter(a => a.category === selectedCategory);
        }

        if (selectedExpert) {
            articles = articles.filter(a => a.author?.id === selectedExpert);
        }

        return articles;
    };

    // Filtered articles
    const filteredArticles = getFilteredArticles();

    // Categories
    const categories = config?.categories || [
        { id: 'all', label: 'All Topics', icon: 'newspaper' },
        { id: 'strategy', label: 'Strategy', icon: 'chart' },
        { id: 'technology', label: 'Technology', icon: 'chip' },
        { id: 'operations', label: 'Operations', icon: 'cog' },
        { id: 'sustainability', label: 'Sustainability', icon: 'globe' },
        { id: 'leadership', label: 'Leadership', icon: 'users' },
        { id: 'innovation', label: 'Innovation', icon: 'rocket' }
    ];

    // Experts data
    const experts = config?.experts || [];

    // Featured article
    const featuredArticle = config?.featuredArticle || filteredArticles[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Expert Articles Section"
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
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Expert Insights"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Thought"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Leadership"}</span> {config?.title?.suffix || "Articles"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Expert perspectives, industry insights, and actionable advice from supply chain leaders and innovators."}
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
                        placeholder={config?.searchPlaceholder || "Search articles by title, topic, or expert..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search articles"
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
                            aria-label={`Show ${category.label} articles`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Featured Content */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Article
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{featuredArticle.readTime || '10 min read'}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredArticle.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredArticle.excerpt}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={featuredArticle.author?.avatar}
                                                    alt={featuredArticle.author?.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-900 dark:text-white">
                                                        {featuredArticle.author?.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        {featuredArticle.author?.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(featuredArticle.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{featuredArticle.views || '2.5k'} views</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredArticle.link}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Read Article
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveArticle(featuredArticle.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedArticles.includes(featuredArticle.id)
                                                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedArticles.includes(featuredArticle.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true"></div>
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Experts Row */}
                {config?.showExperts && experts.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Expert Contributors</h3>
                            <button
                                onClick={() => setSelectedExpert(null)}
                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                View all
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {experts.map((expert) => (
                                <button
                                    key={expert.id}
                                    onClick={() => setSelectedExpert(selectedExpert === expert.id ? null : expert.id)}
                                    className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ${selectedExpert === expert.id
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                        }`}
                                >
                                    <img
                                        src={expert.avatar}
                                        alt={expert.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <p className={`text-sm font-medium ${selectedExpert === expert.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                            {expert.name}
                                        </p>
                                        <p className={`text-xs ${selectedExpert === expert.id ? 'text-blue-100' : 'text-gray-500'}`}>
                                            {expert.title}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredArticles.map((article) => {
                        const categoryConfig = getCategoryConfig(article.category);
                        const isSaved = savedArticles.includes(article.id);

                        return (
                            <div
                                key={article.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Article Image */}
                                <Link href={article.link} className="block overflow-hidden relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-6">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(article.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{article.readTime || '8 min read'}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link href={article.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 mb-4">
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
                                                {article.author?.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    {article.tags && article.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {article.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleSaveArticle(article.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                                aria-label="Save article"
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                                aria-label="Share article"
                                            >
                                                <HiOutlineShare className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <Link
                                            href={article.link}
                                            className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedExpert(null);
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* View All Button */}
                {config?.showViewAll && filteredArticles.length < (config?.articles?.length || 0) && (
                    <div className="text-center">
                        <Link
                            href={config?.viewAllLink || "/expert-articles"}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All Articles
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {config?.newsletter?.title || "Get Expert Insights Delivered"}
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive the latest expert articles, industry insights, and thought leadership content."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for expert insights"
                            />
                            <button
                                type="submit"
                                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-blue-100 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
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

export default ExpertArticlesSection1;