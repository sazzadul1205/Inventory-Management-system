// page/frontend/Blog/CompanyNewsSection/CompanyNewsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

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
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
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
    HiOutlineTrendingUp as HiOutlineTrendingUpAlt,
    HiOutlineRefresh
} from 'react-icons/hi';

const CompanyNewsSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('news');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [savedNews, setSavedNews] = useState([]);
    const carouselRef = useRef(null);

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
            rocket: <HiOutlineTrendingUp className={className} />,
            trophy: <HiOutlineStar className={className} />,
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
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
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
            trend: <HiOutlineTrendingUpAlt className={className} />,
            refresh: <HiOutlineRefresh className={className} />
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
        if (format === 'year') {
            return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
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
            'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'Announcement' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update' },
            'partnership': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'handshake', label: 'Partnership' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award' },
            'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event' },
            'financial': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Financial' }
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

    // Carousel navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredNews?.length || 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredNews?.length || 1)) % (config?.featuredNews?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel]);

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

        return news;
    }, [config?.news, searchQuery, selectedCategory]);

    const filteredNews = getFilteredNews();
    const categories = config?.categories || [
        { id: 'all', label: 'All News', icon: 'newspaper' },
        { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
        { id: 'product', label: 'Product Updates', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'event', label: 'Events', icon: 'calendar' },
        { id: 'financial', label: 'Financial', icon: 'chart' }
    ];

    // Press releases archive by year
    const pressReleasesByYear = config?.pressReleases?.reduce((acc, release) => {
        const year = formatDate(release.date, 'year');
        if (!acc[year]) acc[year] = [];
        acc[year].push(release);
        return acc;
    }, {});

    // Media gallery items
    const mediaGallery = config?.mediaGallery || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Company News & Media Center"
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
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineNewspaper className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Media Center"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "News"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Media Center"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Latest news, press releases, media assets, and company announcements."}
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setActiveTab('news')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'news' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Latest News
                        </button>
                        <button
                            onClick={() => setActiveTab('press')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'press' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Press Releases
                        </button>
                        <button
                            onClick={() => setActiveTab('media')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'media' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Media Gallery
                        </button>
                        <button
                            onClick={() => setActiveTab('investors')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'investors' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Investor Relations
                        </button>
                    </div>
                </div>

                {/* Featured News Carousel */}
                {activeTab === 'news' && config?.featuredNews && config.featuredNews.length > 0 && (
                    <div className="mb-16 relative">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {config.featuredNews.map((news, idx) => {
                                    const categoryConfig = getCategoryConfig(news.category);
                                    return (
                                        <div key={news.id} className="w-full shrink-0">
                                            <div className="relative h-125 rounded-3xl overflow-hidden">
                                                <img
                                                    src={news.image}
                                                    alt={news.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        {news.isPressRelease && (
                                                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                                                Press Release
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{news.title}</h2>
                                                    <p className="text-white/80 text-lg mb-4 max-w-2xl">{news.excerpt}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <HiOutlineCalendar className="w-4 h-4" />
                                                            <span>{formatDate(news.date, 'short')}</span>
                                                        </div>
                                                        <Link
                                                            href={news.link}
                                                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                                                        >
                                                            Read More
                                                            <HiArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Carousel Navigation */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <HiOutlineChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <HiOutlineChevronRight className="w-6 h-6" />
                            </button>

                            {/* Carousel Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {config.featuredNews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* News Tab */}
                {activeTab === 'news' && (
                    <>
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
                                    placeholder="Search news articles..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search news"
                                />
                            </div>
                        </div>

                        {/* Category Filters */}
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
                                </button>
                            ))}
                        </div>

                        {/* News Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {filteredNews.map((news) => {
                                const categoryConfig = getCategoryConfig(news.category);
                                const isSaved = savedNews.includes(news.id);

                                return (
                                    <div
                                        key={news.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                    >
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
                                        </Link>

                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(news.date, 'short')}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{news.views || '1.2k'} views</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                                <Link href={news.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                    {news.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                                {news.excerpt}
                                            </p>

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
                                                    >
                                                        <HiOutlineBookmark className="w-4 h-4" />
                                                    </button>
                                                    <Link href={news.link} className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                                                        Read More →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* Press Releases Tab */}
                {activeTab === 'press' && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Press Release Archive</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Official announcements and media statements</p>
                        </div>

                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {Object.entries(pressReleasesByYear || {}).sort((a, b) => b[0] - a[0]).map(([year, releases]) => (
                                <div key={year}>
                                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{year}</h3>
                                    </div>
                                    {releases.map((release) => (
                                        <div key={release.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                                            <div className="flex flex-wrap items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(release.date, 'short')}</span>
                                                        <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded-full">
                                                            Press Release
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                                        <Link href={release.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                            {release.title}
                                                        </Link>
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{release.excerpt}</p>
                                                </div>
                                                <Link
                                                    href={release.link}
                                                    className="shrink-0 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                                >
                                                    Download PDF
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Media Gallery Tab */}
                {activeTab === 'media' && (
                    <div>
                        {/* Media Gallery Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {mediaGallery.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {item.type === 'video' && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                    <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-xs px-2 py-1 rounded-full ${item.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {item.type === 'video' ? 'Video' : 'Image'}
                                            </span>
                                            <span className="text-xs text-gray-500">{item.date}</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                        <div className="flex items-center gap-3 mt-2">
                                            <a href={item.downloadUrl} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                                <HiOutlineDownload className="w-3 h-3" />
                                                Download
                                            </a>
                                            <button className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                                <HiOutlineShare className="w-3 h-3" />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Brand Assets */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <HiOutlineCloudUpload className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Brand Assets</h3>
                            </div>
                            <div className="grid md:grid-cols-4 gap-4">
                                {config?.brandAssets?.map((asset, idx) => (
                                    <a
                                        key={idx}
                                        href={asset.link}
                                        className="flex items-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
                                    >
                                        {getIcon(asset.icon, "w-5 h-5 text-blue-600")}
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white text-sm">{asset.name}</p>
                                            <p className="text-xs text-gray-500">{asset.format}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Investor Relations Tab */}
                {activeTab === 'investors' && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Stock Info */}
                        <div className="lg:col-span-1">
                            <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-semibold mb-4">Stock Information</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Ticker Symbol</span>
                                        <span className="font-bold">{config?.stockInfo?.symbol || "SCP"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Current Price</span>
                                        <span className="font-bold">{config?.stockInfo?.price || "$45.67"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Change</span>
                                        <span className="font-bold text-green-300">+2.34%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Market Cap</span>
                                        <span className="font-bold">{config?.stockInfo?.marketCap || "$2.5B"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Financial Reports */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Financial Reports</h3>
                                <div className="space-y-3">
                                    {config?.financialReports?.map((report, idx) => (
                                        <a
                                            key={idx}
                                            href={report.link}
                                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{report.title}</p>
                                                    <p className="text-xs text-gray-500">{report.date}</p>
                                                </div>
                                            </div>
                                            <HiOutlineDownload className="w-5 h-5 text-gray-400" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* No Results */}
                {activeTab === 'news' && filteredNews.length === 0 && (
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

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Subscribe to News Alerts</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Get the latest company news and press releases delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for news alerts"
                            />
                            <button
                                type="submit"
                                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
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

export default CompanyNewsSection3;

