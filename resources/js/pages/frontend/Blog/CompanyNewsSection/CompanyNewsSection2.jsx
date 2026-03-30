// page/frontend/Blog/CompanyNewsSection/CompanyNewsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

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
    HiOutlineGift
} from 'react-icons/hi';

const CompanyNewsSection2 = ({ config }) => {
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [savedNews, setSavedNews] = useState([]);
    const [expandedNews, setExpandedNews] = useState(null);

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
            gift: <HiOutlineGift className={className} />
        };
        return icons[iconName] || <HiOutlineNewspaper className={className} />;
    };

    // Format date helper
    const formatDate = (dateString, format = 'full') => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (format === 'short') {
            return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
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

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'Announcement', borderColor: 'border-blue-200 dark:border-blue-800' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update', borderColor: 'border-purple-200 dark:border-purple-800' },
            'partnership': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'handshake', label: 'Partnership', borderColor: 'border-green-200 dark:border-green-800' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award', borderColor: 'border-yellow-200 dark:border-yellow-800' },
            'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event', borderColor: 'border-orange-200 dark:border-orange-800' },
            'press': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'newspaper', label: 'Press Release', borderColor: 'border-red-200 dark:border-red-800' }
        };
        return configs[category] || configs.announcement;
    };

    // Handle save news
    const handleSaveNews = (newsId) => {
        setSavedNews(prev =>
            prev.includes(newsId)
                ? prev.filter(id => id !== newsId)
                : [...prev, newsId]
        );
    };

    // Toggle expanded news
    const toggleExpanded = (newsId) => {
        setExpandedNews(expandedNews === newsId ? null : newsId);
    };

    // Get unique years for filter
    const getAvailableYears = () => {
        const years = new Set();
        config?.news?.forEach(news => {
            if (news.date) {
                years.add(new Date(news.date).getFullYear());
            }
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Filter news
    const getFilteredNews = useCallback(() => {
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

        if (selectedYear !== 'all') {
            news = news.filter(n => new Date(n.date).getFullYear().toString() === selectedYear);
        }

        return news;
    }, [config?.news, searchQuery, selectedCategory, selectedYear]);

    const filteredNews = getFilteredNews();
    const categories = config?.categories || [
        { id: 'all', label: 'All News', icon: 'newspaper' },
        { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
        { id: 'product', label: 'Product Updates', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'event', label: 'Events', icon: 'calendar' }
    ];

    const availableYears = getAvailableYears();

    // Group news by month for timeline view
    const groupedNews = filteredNews.reduce((groups, news) => {
        const monthYear = formatDate(news.date, 'month');
        if (!groups[monthYear]) {
            groups[monthYear] = [];
        }
        groups[monthYear].push(news);
        return groups;
    }, {});

    // Hero stats
    const heroStats = config?.heroStats || [
        { value: '150+', label: 'News Articles' },
        { value: '50+', label: 'Press Releases' },
        { value: '30+', label: 'Awards Received' },
        { value: '100+', label: 'Media Mentions' }
    ];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Company News & Press Releases"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
                        <HiOutlineNewspaper className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Newsroom"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Latest"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "News"}</span> {config?.title?.suffix || "& Press Releases"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Stay informed about our latest announcements, product innovations, partnerships, and company milestones."}
                    </p>

                    {/* Hero Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                        {heroStats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search news, press releases, or topics..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search news"
                        />
                    </div>

                    <div className="flex gap-3">
                        {/* Year Filter */}
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Years</option>
                            {availableYears.map(year => (
                                <option key={year} value={year.toString()}>{year}</option>
                            ))}
                        </select>

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
                                onClick={() => setViewMode('timeline')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Timeline view"
                            >
                                <HiOutlineMenu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
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
                        </button>
                    ))}
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredNews.map((news) => {
                            const categoryConfig = getCategoryConfig(news.category);
                            const isSaved = savedNews.includes(news.id);

                            return (
                                <div
                                    key={news.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    {/* News Image */}
                                    <Link href={news.link} className="block overflow-hidden relative">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                {categoryConfig.label}
                                            </span>
                                        </div>
                                        {news.isPressRelease && (
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                                    Press Release
                                                </span>
                                            </div>
                                        )}
                                    </Link>

                                    <div className="p-6">
                                        {/* Date */}
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(news.date, 'short')}</span>
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
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{news.author?.name}</span>
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
                )}

                {/* Timeline View */}
                {viewMode === 'timeline' && (
                    <div className="relative mb-12">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600 hidden md:block" aria-hidden="true"></div>

                        <div className="space-y-12">
                            {Object.entries(groupedNews).map(([monthYear, newsItems]) => (
                                <div key={monthYear}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white px-4">{monthYear}</h3>
                                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                                    </div>

                                    <div className="space-y-8">
                                        {newsItems.map((news, index) => {
                                            const categoryConfig = getCategoryConfig(news.category);
                                            const isExpanded = expandedNews === news.id;
                                            const isEven = index % 2 === 0;

                                            return (
                                                <div
                                                    key={news.id}
                                                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                                >
                                                    {/* Timeline Dot */}
                                                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

                                                    {/* Date Badge (Mobile) */}
                                                    <div className="md:hidden flex items-center gap-2 mb-2">
                                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                            <HiOutlineCalendar className="w-4 h-4 text-blue-600" />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                            {formatDate(news.date, 'short')}
                                                        </span>
                                                    </div>

                                                    {/* Content */}
                                                    <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                                            {/* Category and Date */}
                                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                                <span className={`text-xs px-2 py-1 rounded-full ${categoryConfig.color}`}>
                                                                    {categoryConfig.label}
                                                                </span>
                                                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                                    <HiOutlineCalendar className="w-4 h-4" />
                                                                    <span>{formatDate(news.date, 'short')}</span>
                                                                </div>
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                                <Link href={news.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                                    {news.title}
                                                                </Link>
                                                            </h3>

                                                            {/* Excerpt */}
                                                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                                                {news.excerpt}
                                                            </p>

                                                            {/* Expandable Content */}
                                                            {news.content && (
                                                                <div className="mb-3">
                                                                    <button
                                                                        onClick={() => toggleExpanded(news.id)}
                                                                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                                    >
                                                                        {isExpanded ? 'Show less' : 'Read full story'}
                                                                        {isExpanded ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                                                                    </button>

                                                                    {isExpanded && (
                                                                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                                                            {news.content}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            )}

                                                            {/* Footer */}
                                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                                <div className="flex items-center gap-2">
                                                                    <img
                                                                        src={news.author?.avatar}
                                                                        alt={news.author?.name}
                                                                        className="w-6 h-6 rounded-full object-cover"
                                                                    />
                                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{news.author?.name}</span>
                                                                </div>

                                                                <div className="flex items-center gap-3">
                                                                    <button
                                                                        onClick={() => handleSaveNews(news.id)}
                                                                        className={`transition-colors ${savedNews.includes(news.id) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                                            }`}
                                                                    >
                                                                        <HiOutlineBookmark className="w-4 h-4" />
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

                                                    {/* Empty spacer */}
                                                    <div className="hidden md:block md:w-1/2"></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
                                setSelectedYear('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Press Kit Section */}
                {config?.showPressKit && (
                    <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                    <HiOutlineDownload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Press Kit & Media Resources</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Download logos, brand assets, and media resources</p>
                                </div>
                            </div>
                            <Link
                                href={config?.pressKitLink || "/press-kit"}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                <HiOutlineDownload className="w-4 h-4" />
                                Download Press Kit
                            </Link>
                        </div>
                    </div>
                )}

                {/* Media Contact Section */}
                {config?.showMediaContact && (
                    <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <HiOutlineMail className="w-5 h-5" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Media Contact</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{config?.mediaContact?.name || "Sarah Johnson"}</h3>
                                <p className="text-blue-100">{config?.mediaContact?.title || "Head of Communications"}</p>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={`mailto:${config?.mediaContact?.email || "media@supplychainpro.com"}`}
                                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    <HiOutlineMail className="w-4 h-4" />
                                    Email
                                </a>
                                <a
                                    href={config?.mediaContact?.phone || "tel:+1234567890"}
                                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    <HiOutlineMicrophone className="w-4 h-4" />
                                    Contact
                                </a>
                            </div>
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

export default CompanyNewsSection2;