// page/frontend/News/MediaCoverageSection/MediaCoverageSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import { AiOutlineShareAlt as HiOutlineShareAlt } from "react-icons/ai";
import { FaQuoteLeft as HiOutlineQuote } from "react-icons/fa";
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
    HiOutlineAtSymbol,
    HiOutlinePrinter,
    HiOutlineDuplicate,
    HiOutlineQrcode,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineChevronRight,
    HiOutlineHeart,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineChevronLeft } from 'react-icons/hi2';

const MediaCoverageSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedPublication, setSelectedPublication] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCoverage, setExpandedCoverage] = useState(null);
    const [savedCoverage, setSavedCoverage] = useState([]);
    const [likedCoverage, setLikedCoverage] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedMediaCoverage');
        if (saved) setSavedCoverage(JSON.parse(saved));
        const liked = localStorage.getItem('likedMediaCoverage');
        if (liked) setLikedCoverage(JSON.parse(liked));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('savedMediaCoverage', JSON.stringify(savedCoverage));
    }, [savedCoverage]);

    useEffect(() => {
        localStorage.setItem('likedMediaCoverage', JSON.stringify(likedCoverage));
    }, [likedCoverage]);

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
            arrow: <HiArrowRight className={className} />,
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
            printer: <HiOutlinePrinter className={className} />,
            shareAlt: <HiOutlineShareAlt className={className} />,
            duplicate: <HiOutlineDuplicate className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            heart: <HiOutlineHeart className={className} />,
            phone: <HiOutlinePhone className={className} />
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
        if (format === 'year') {
            return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
        }
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get publication configuration
    const getPublicationConfig = (publication) => {
        const configs = {
            'TechCrunch': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chip', label: 'TechCrunch', gradient: 'from-orange-500 to-orange-600' },
            'Forbes': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'star', label: 'Forbes', gradient: 'from-blue-500 to-blue-600' },
            'Bloomberg': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'chart', label: 'Bloomberg', gradient: 'from-yellow-500 to-yellow-600' },
            'Wall Street Journal': { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: 'WSJ', gradient: 'from-gray-500 to-gray-600' },
            'SupplyChain Digital': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'SupplyChain Digital', gradient: 'from-green-500 to-green-600' },
            'Gartner': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'academic', label: 'Gartner', gradient: 'from-purple-500 to-purple-600' },
            'Business Insider': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'building', label: 'Business Insider', gradient: 'from-indigo-500 to-indigo-600' },
            'Fast Company': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'rocket', label: 'Fast Company', gradient: 'from-pink-500 to-pink-600' }
        };
        return configs[publication] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: publication };
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'feature': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'star', label: 'Feature' },
            'interview': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'microphone', label: 'Interview' },
            'review': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'document', label: 'Review' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award' },
            'mention': { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'quote', label: 'Mention' }
        };
        return configs[category] || configs.feature;
    };

    // Handle save coverage
    const handleSaveCoverage = (coverageId) => {
        setSavedCoverage(prev =>
            prev.includes(coverageId)
                ? prev.filter(id => id !== coverageId)
                : [...prev, coverageId]
        );
    };

    // Handle like coverage
    const handleLikeCoverage = (coverageId) => {
        setLikedCoverage(prev =>
            prev.includes(coverageId)
                ? prev.filter(id => id !== coverageId)
                : [...prev, coverageId]
        );
    };

    // Toggle expanded coverage
    const toggleExpanded = (coverageId) => {
        setExpandedCoverage(expandedCoverage === coverageId ? null : coverageId);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredCoverage?.length || 1));
    }, [config?.featuredCoverage?.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredCoverage?.length || 1)) % (config?.featuredCoverage?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredCoverage?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredCoverage?.length, nextSlide]);

    // Get unique years for filter
    const getAvailableYears = () => {
        const years = new Set();
        config?.mediaCoverage?.forEach(item => {
            if (item.date) {
                years.add(new Date(item.date).getFullYear());
            }
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Get unique publications for filter
    const getUniquePublications = () => {
        const pubs = new Set();
        config?.mediaCoverage?.forEach(item => {
            if (item.publication) {
                pubs.add(item.publication);
            }
        });
        return Array.from(pubs);
    };

    // Filter media coverage
    const getFilteredCoverage = useCallback(() => {
        let coverage = config?.mediaCoverage || [];

        if (searchQuery) {
            coverage = coverage.filter(c =>
                c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedPublication !== 'all') {
            coverage = coverage.filter(c => c.publication === selectedPublication);
        }

        if (selectedCategory !== 'all') {
            coverage = coverage.filter(c => c.category === selectedCategory);
        }

        if (selectedYear !== 'all') {
            coverage = coverage.filter(c => new Date(c.date).getFullYear().toString() === selectedYear);
        }

        if (activeTab !== 'all') {
            if (activeTab === 'featured') {
                coverage = coverage.filter(c => c.isFeatured);
            } else if (activeTab === 'trending') {
                coverage = [...coverage].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0)).slice(0, 6);
            } else if (activeTab === 'recent') {
                coverage = [...coverage].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
            }
        }

        return coverage;
    }, [config?.mediaCoverage, searchQuery, selectedPublication, selectedCategory, selectedYear, activeTab]);

    const filteredCoverage = getFilteredCoverage();
    const categories = config?.categories || [
        { id: 'all', label: 'All Coverage', icon: 'newspaper' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'trending', label: 'Trending', icon: 'fire' },
        { id: 'recent', label: 'Recent', icon: 'clock' }
    ];

    const availableYears = getAvailableYears();
    const uniquePublications = getUniquePublications();

    // Stats cards
    const stats = config?.stats || [
        { value: "50+", label: "Media Mentions", icon: "newspaper" },
        { value: "25+", label: "Publications", icon: "globe" },
        { value: "2M+", label: "Total Impressions", icon: "eye" },
        { value: "4.8", label: "Avg. Rating", icon: "star" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedPublication !== 'all', selectedCategory !== 'all', selectedYear !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedPublication('all');
        setSelectedCategory('all');
        setSelectedYear('all');
    };

    // Featured coverage carousel items
    const featuredCoverage = config?.featuredCoverage || [];

    // Media mentions timeline data
    const mentionsTimeline = config?.mentionsTimeline || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Media Coverage Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-media" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-media)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineGlobe className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Media Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "In the"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Spotlight"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Discover how SupplyChainPro is making waves in leading publications worldwide. From feature articles to expert interviews, see our latest media coverage."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-blue-600")}
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Featured Coverage Carousel */}
                {activeTab === 'all' && featuredCoverage.length > 0 && (
                    <div className="relative mb-16">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredCoverage.map((coverage) => {
                                    const pubConfig = getPublicationConfig(coverage.publication);
                                    return (
                                        <div key={coverage.id} className="w-full shrink-0">
                                            <div className="relative h-125 rounded-3xl overflow-hidden">
                                                <img
                                                    src={coverage.image}
                                                    alt={coverage.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${pubConfig.color}`}>
                                                            {pubConfig.label}
                                                        </div>
                                                        {coverage.category && (
                                                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(coverage.category).color}`}>
                                                                {getCategoryConfig(coverage.category).label}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{coverage.title}</h2>
                                                    <p className="text-white/80 text-lg mb-4 max-w-2xl line-clamp-2">{coverage.excerpt}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <HiOutlineCalendar className="w-4 h-4" />
                                                            <span>{formatDate(coverage.date, 'short')}</span>
                                                        </div>
                                                        <a
                                                            href={coverage.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                                                        >
                                                            Read Full Article
                                                            <HiOutlineExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Carousel Navigation */}
                            {featuredCoverage.length > 1 && (
                                <>
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
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {featuredCoverage.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Search and Filters */}
                {activeTab === 'all' && (
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search media coverage by publication, topic, or keyword..."
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Search media coverage"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
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
                )}

                {/* Expanded Filters Panel */}
                {showFilters && activeTab === 'all' && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Publication Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Publication</label>
                                <select
                                    value={selectedPublication}
                                    onChange={(e) => setSelectedPublication(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Publications</option>
                                    {uniquePublications.map(pub => (
                                        <option key={pub} value={pub}>{pub}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="feature">Features</option>
                                    <option value="interview">Interviews</option>
                                    <option value="review">Reviews</option>
                                    <option value="award">Awards</option>
                                    <option value="mention">Mentions</option>
                                </select>
                            </div>

                            {/* Year Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Years</option>
                                    {availableYears.map(year => (
                                        <option key={year} value={year.toString()}>{year}</option>
                                    ))}
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

                {/* Results Count */}
                {activeTab === 'all' && (
                    <div className="mb-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredCoverage.length}</span> media mentions
                            {searchQuery && ` matching "${searchQuery}"`}
                        </p>
                    </div>
                )}

                {/* Media Coverage Grid */}
                {activeTab === 'all' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredCoverage.map((coverage) => {
                            const pubConfig = getPublicationConfig(coverage.publication);
                            const categoryConfig = getCategoryConfig(coverage.category);
                            const isExpanded = expandedCoverage === coverage.id;
                            const isSaved = savedCoverage.includes(coverage.id);
                            const isLiked = likedCoverage.includes(coverage.id);

                            return (
                                <div
                                    key={coverage.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    {/* Publication Header */}
                                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {coverage.publicationLogo ? (
                                                    <img
                                                        src={coverage.publicationLogo}
                                                        alt={coverage.publication}
                                                        className="h-8 w-auto object-contain"
                                                    />
                                                ) : (
                                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${pubConfig.color}`}>
                                                        {pubConfig.label}
                                                    </div>
                                                )}
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                                    {categoryConfig.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <HiOutlineCalendar className="w-3 h-3" />
                                                <span>{formatDate(coverage.date, 'short')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            <a
                                                href={coverage.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                {coverage.title}
                                            </a>
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                            {coverage.excerpt}
                                        </p>

                                        {/* Expandable Quote */}
                                        {coverage.quote && (
                                            <div className="mb-3">
                                                <button
                                                    onClick={() => toggleExpanded(coverage.id)}
                                                    className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                                >
                                                    {isExpanded ? 'Show less' : 'Read quote'}
                                                    <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                                </button>

                                                {isExpanded && (
                                                    <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-3 border-blue-500">
                                                        <HiOutlineQuote className="w-3 h-3 text-blue-500 mb-1" />
                                                        <p className="text-xs italic text-gray-700 dark:text-gray-300">"{coverage.quote}"</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Tags */}
                                        {coverage.tags && coverage.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {coverage.tags.slice(0, 3).map((tag, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Footer Actions */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleLikeCoverage(coverage.id)}
                                                    className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                        }`}
                                                >
                                                    <HiOutlineHeart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
                                                    <span>{coverage.likes || 0}</span>
                                                </button>
                                                <button
                                                    onClick={() => handleSaveCoverage(coverage.id)}
                                                    className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                        }`}
                                                >
                                                    <HiOutlineBookmark className="w-3 h-3" />
                                                </button>
                                                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                    <HiOutlineShareAlt className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <a
                                                href={coverage.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:gap-2 transition-all duration-300"
                                            >
                                                Read
                                                <HiOutlineExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Trending Tab Content */}
                {activeTab === 'trending' && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {filteredCoverage.map((coverage) => (
                            <div key={coverage.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                            <HiOutlineFire className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getPublicationConfig(coverage.publication).color}`}>
                                                {getPublicationConfig(coverage.publication).label}
                                            </span>
                                            <span className="text-xs text-gray-500">{formatDate(coverage.date, 'short')}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                                            <a href={coverage.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                {coverage.title}
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{coverage.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Recent Tab Content */}
                {activeTab === 'recent' && (
                    <div className="space-y-4 mb-12">
                        {filteredCoverage.map((coverage) => (
                            <div key={coverage.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getPublicationConfig(coverage.publication).color}`}>
                                                {getPublicationConfig(coverage.publication).label}
                                            </span>
                                            <span className="text-xs text-gray-500">{formatDate(coverage.date, 'short')}</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                            <a href={coverage.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                {coverage.title}
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{coverage.excerpt}</p>
                                    </div>
                                    <a
                                        href={coverage.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-blue-600 text-sm font-medium hover:underline"
                                    >
                                        Read →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {filteredCoverage.length === 0 && activeTab === 'all' && (
                    <div className="text-center py-12">
                        <HiOutlineNewspaper className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No media coverage found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Media Mentions Timeline */}
                {activeTab === 'all' && mentionsTimeline.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlineClock className="w-5 h-5 text-blue-600" />
                            Media Mentions Timeline
                        </h2>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                            <div className="space-y-6">
                                {mentionsTimeline.slice(0, 5).map((mention, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <HiOutlineStar className="w-3 h-3 text-blue-600" />
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{mention.publication}</span>
                                                <span className="text-xs text-gray-500">{formatDate(mention.date, 'short')}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{mention.title}</p>
                                            <a href={mention.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2 hover:underline">
                                                Read article
                                                <HiOutlineExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Press Kit & Media Resources */}
                {config?.showPressKit && (
                    <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                    <HiOutlineDownload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Media Resources & Press Kit</h3>
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
                {config?.showMediaContact && config?.mediaContact && (
                    <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <HiOutlineMail className="w-5 h-5" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Media Contact</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{config.mediaContact.name}</h3>
                                <p className="text-blue-100">{config.mediaContact.title}</p>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={`mailto:${config.mediaContact.email}`}
                                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    <HiOutlineMail className="w-4 h-4" />
                                    Email
                                </a>
                                <a
                                    href={`tel:${config.mediaContact.phone}`}
                                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    <HiOutlinePhone className="w-4 h-4" />
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video
                                ref={videoRef}
                                src={currentVideo}
                                className="w-full"
                                controls
                                autoPlay
                            />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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

export default MediaCoverageSection3;