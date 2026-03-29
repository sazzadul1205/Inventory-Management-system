// page/frontend/Blog/IndustryInsightsSection/IndustryInsightsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback } from 'react';

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
    HiOutlineSearch,
    HiOutlineFilter,
    HiOutlineX,
    HiOutlinePlay,
    HiOutlineVolumeUp,
    HiOutlineMicrophone,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineChip,
    HiOutlineCloudUpload
} from 'react-icons/hi';

const IndustryInsightsSection3 = ({ config }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [displayCount, setDisplayCount] = useState(config?.initialDisplayCount || 9);
    const [isLoading, setIsLoading] = useState(false);
    const [savedArticles, setSavedArticles] = useState([]);
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid'); // grid, list, compact
    const loadMoreRef = useRef(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        switch (iconName) {
            case 'document': return <HiOutlineDocumentText className={className} />;
            case 'calendar': return <HiOutlineCalendar className={className} />;
            case 'clock': return <HiOutlineClock className={className} />;
            case 'user': return <HiOutlineUser className={className} />;
            case 'tag': return <HiOutlineTag className={className} />;
            case 'chart': return <HiOutlineChartBar className={className} />;
            case 'bolt': return <HiOutlineLightningBolt className={className} />;
            case 'trending': return <HiOutlineTrendingUp className={className} />;
            case 'eye': return <HiOutlineEye className={className} />;
            case 'book': return <HiOutlineBookOpen className={className} />;
            case 'newspaper': return <HiOutlineNewspaper className={className} />;
            case 'academic': return <HiOutlineAcademicCap className={className} />;
            case 'share': return <HiOutlineShare className={className} />;
            case 'bookmark': return <HiOutlineBookmark className={className} />;
            case 'chat': return <HiOutlineChatAlt className={className} />;
            case 'fire': return <HiOutlineFire className={className} />;
            case 'sparkles': return <HiOutlineSparkles className={className} />;
            case 'heart': return <HiOutlineHeart className={className} />;
            case 'globe': return <HiOutlineGlobe className={className} />;
            case 'download': return <HiOutlineDownload className={className} />;
            case 'mail': return <HiOutlineMail className={className} />;
            case 'search': return <HiOutlineSearch className={className} />;
            case 'filter': return <HiOutlineFilter className={className} />;
            case 'x': return <HiOutlineX className={className} />;
            case 'play': return <HiOutlinePlay className={className} />;
            case 'volume': return <HiOutlineVolumeUp className={className} />;
            case 'microphone': return <HiOutlineMicrophone className={className} />;
            case 'pie': return <HiOutlineChartPie className={className} />;
            case 'template': return <HiOutlineTemplate className={className} />;
            case 'chip': return <HiOutlineChip className={className} />;
            case 'cloud': return <HiOutlineCloudUpload className={className} />;
            default: return <HiOutlineDocumentText className={className} />;
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

    // Filter articles based on all criteria
    const getFilteredArticles = useCallback(() => {
        let filtered = config?.articles || [];

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(article => article.category === selectedCategory);
        }

        // Filter by author
        if (selectedAuthor) {
            filtered = filtered.filter(article => article.author?.name === selectedAuthor);
        }

        // Filter by date range
        if (selectedDateRange) {
            const now = new Date();
            filtered = filtered.filter(article => {
                const publishDate = new Date(article.publishDate);
                const diffDays = Math.ceil((now - publishDate) / (1000 * 60 * 60 * 24));

                switch (selectedDateRange) {
                    case 'week': return diffDays <= 7;
                    case 'month': return diffDays <= 30;
                    case 'quarter': return diffDays <= 90;
                    case 'year': return diffDays <= 365;
                    default: return true;
                }
            });
        }

        // Sort by active filter
        switch (activeFilter) {
            case 'trending':
                filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
                break;
            case 'popular':
                filtered = [...filtered].sort((a, b) => (b.comments || 0) - (a.comments || 0));
                break;
            case 'latest':
            default:
                filtered = [...filtered].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                break;
        }

        return filtered;
    }, [config?.articles, searchQuery, selectedCategory, selectedAuthor, selectedDateRange, activeFilter]);

    // Get unique categories for filter
    const getUniqueCategories = () => {
        if (!config?.articles) return [];
        const categories = new Set(config.articles.map(article => article.category).filter(Boolean));
        return Array.from(categories);
    };

    // Get unique authors for filter
    const getUniqueAuthors = () => {
        if (!config?.articles) return [];
        const authors = new Set(config.articles.map(article => article.author?.name).filter(Boolean));
        return Array.from(authors);
    };

    // Infinite scroll handler
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading && displayCount < getFilteredArticles().length) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setDisplayCount(prev => Math.min(prev + (config?.loadMoreCount || 6), getFilteredArticles().length));
                        setIsLoading(false);
                    }, 1000);
                }
            },
            { threshold: 0.1 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [displayCount, isLoading, getFilteredArticles]);

    // Reset display count when filters change
    useEffect(() => {
        setDisplayCount(config?.initialDisplayCount || 9);
    }, [searchQuery, selectedCategory, selectedAuthor, selectedDateRange, activeFilter]);

    const filteredArticles = getFilteredArticles();
    const displayArticles = filteredArticles.slice(0, displayCount);
    const uniqueCategories = getUniqueCategories();
    const uniqueAuthors = getUniqueAuthors();

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory(null);
        setSelectedAuthor(null);
        setSelectedDateRange(null);
        setActiveFilter('latest');
    };

    // Get active filters count
    const activeFiltersCount = [selectedCategory, selectedAuthor, selectedDateRange].filter(Boolean).length + (searchQuery ? 1 : 0);

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Industry Insights Section"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg animate-pulse">
                        <HiOutlineSparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Knowledge Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Explore"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Industry Insights"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Deep dives, expert analysis, and actionable insights to help you navigate the future of supply chain and logistics."}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto mb-4">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search articles, topics, authors..."}
                            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            aria-label="Search articles"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <HiOutlineX className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Popular Tags */}
                    {config?.showPopularTags && (
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {config?.popularTags?.map((tag, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSearchQuery(tag)}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Filter Bar */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveFilter('latest')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'latest'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                Latest
                            </button>
                            <button
                                onClick={() => setActiveFilter('trending')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${activeFilter === 'trending'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <HiOutlineFire className="w-4 h-4" />
                                Trending
                            </button>
                            <button
                                onClick={() => setActiveFilter('popular')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${activeFilter === 'popular'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <HiOutlineChartBar className="w-4 h-4" />
                                Most Popular
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* View Mode Toggle */}
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                    aria-label="Grid view"
                                >
                                    <HiOutlineTemplate className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                    aria-label="List view"
                                >
                                    <HiOutlineDocumentText className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Filter Button */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
                        </div>
                    </div>

                    {/* Expanded Filters Panel */}
                    {showFilters && (
                        <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Category Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                    <select
                                        value={selectedCategory || ''}
                                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Categories</option>
                                        {uniqueCategories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Author Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Author</label>
                                    <select
                                        value={selectedAuthor || ''}
                                        onChange={(e) => setSelectedAuthor(e.target.value || null)}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Authors</option>
                                        {uniqueAuthors.map(author => (
                                            <option key={author} value={author}>{author}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Date Range Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Range</label>
                                    <select
                                        value={selectedDateRange || ''}
                                        onChange={(e) => setSelectedDateRange(e.target.value || null)}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Time</option>
                                        <option value="week">Last 7 Days</option>
                                        <option value="month">Last 30 Days</option>
                                        <option value="quarter">Last 90 Days</option>
                                        <option value="year">Last Year</option>
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
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{displayArticles.length}</span> of{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">{filteredArticles.length}</span> articles
                    </p>
                </div>

                {/* Articles Grid */}
                <div className={`grid gap-8 mb-12 ${viewMode === 'grid'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : viewMode === 'list'
                            ? 'grid-cols-1'
                            : 'grid-cols-1 md:grid-cols-2'
                    }`}>
                    {displayArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                }`}
                        >
                            {/* Article Image */}
                            <Link href={article.link} className={`block overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''}`}>
                                <div className="relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                                            }`}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {article.category && (
                                            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                {article.category}
                                            </span>
                                        )}
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
                                </div>
                            </Link>

                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                {/* Metadata */}
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
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
                                        <span>{article.views || '1.2k'} views</span>
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

                                {/* Author Info */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
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
                                    <Link
                                        href={article.link}
                                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Loading and Load More */}
                {isLoading && (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-gray-500 dark:text-gray-400">Loading more articles...</span>
                        </div>
                    </div>
                )}

                {!isLoading && displayCount < filteredArticles.length && (
                    <div ref={loadMoreRef} className="text-center py-8">
                        <button
                            onClick={() => setDisplayCount(prev => Math.min(prev + (config?.loadMoreCount || 6), filteredArticles.length))}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            Load More Articles
                            <HiArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Featured Webinar/Podcast Section */}
                {config?.showFeaturedContent && (
                    <div className="mt-16 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineMicrophone className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Featured Podcast</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{config?.featuredContent?.title}</h3>
                                <p className="text-indigo-100 mb-6">{config?.featuredContent?.description}</p>
                                <Link
                                    href={config?.featuredContent?.link}
                                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300"
                                >
                                    <HiOutlinePlay className="w-4 h-4" />
                                    Listen Now
                                </Link>
                            </div>
                            <div className="relative">
                                <img
                                    src={config?.featuredContent?.image}
                                    alt={config?.featuredContent?.title}
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl">
                                    <HiOutlineVolumeUp className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter Banner */}
                {config?.showNewsletter && (
                    <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
                        <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Subscribe to Our Newsletter"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Get the latest insights delivered straight to your inbox. Join 10,000+ industry professionals."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email address for newsletter subscription"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime."}
                        </p>
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

export default IndustryInsightsSection3;