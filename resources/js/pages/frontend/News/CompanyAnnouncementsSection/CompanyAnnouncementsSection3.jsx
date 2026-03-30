// page/frontend/News/CompanyAnnouncementsSection/CompanyAnnouncementsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import { AiOutlineShareAlt as HiOutlineShareAlt } from "react-icons/ai";
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
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
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineHeart,
    HiOutlineBadgeCheck,
    HiOutlineTrendingUp as HiOutlineTrendingUpAlt,
    HiOutlineFire as HiOutlineFireAlt,
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt,
    HiOutlineMicrophone as HiOutlineMicrophoneAlt,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineRefresh,
    HiOutlineClipboardCheck,
    HiOutlineTemplate
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineMegaphone } from 'react-icons/hi2';

const CompanyAnnouncementsSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedAnnouncement, setExpandedAnnouncement] = useState(null);
    const [savedAnnouncements, setSavedAnnouncements] = useState([]);
    const [likedAnnouncements, setLikedAnnouncements] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo] = useState(null);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedAnnouncements');
        if (saved) setSavedAnnouncements(JSON.parse(saved));
        const liked = localStorage.getItem('likedAnnouncements');
        if (liked) setLikedAnnouncements(JSON.parse(liked));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('savedAnnouncements', JSON.stringify(savedAnnouncements));
    }, [savedAnnouncements]);

    useEffect(() => {
        localStorage.setItem('likedAnnouncements', JSON.stringify(likedAnnouncements));
    }, [likedAnnouncements]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            megaphone: <HiOutlineMegaphone className={className} />,
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
            phone: <HiOutlinePhone className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            trendingAlt: <HiOutlineTrendingUpAlt className={className} />,
            fireAlt: <HiOutlineFireAlt className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />,
            microphoneAlt: <HiOutlineMicrophoneAlt className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            template: <HiOutlineTemplate className={className} />
        };
        return icons[iconName] || <HiOutlineMegaphone className={className} />;
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

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'product': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chip', label: 'Product Launch', gradient: 'from-blue-500 to-blue-600' },
            'company': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'building', label: 'Company News', gradient: 'from-purple-500 to-purple-600' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award', gradient: 'from-yellow-500 to-yellow-600' },
            'partnership': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'users', label: 'Partnership', gradient: 'from-green-500 to-green-600' },
            'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event', gradient: 'from-orange-500 to-orange-600' },
            'milestone': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'rocket', label: 'Milestone', gradient: 'from-red-500 to-red-600' },
            'leadership': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'briefcase', label: 'Leadership', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[category] || configs.company;
    };

    // Handle save announcement
    const handleSaveAnnouncement = (announcementId) => {
        setSavedAnnouncements(prev =>
            prev.includes(announcementId)
                ? prev.filter(id => id !== announcementId)
                : [...prev, announcementId]
        );
    };

    // Handle like announcement
    const handleLikeAnnouncement = (announcementId) => {
        setLikedAnnouncements(prev =>
            prev.includes(announcementId)
                ? prev.filter(id => id !== announcementId)
                : [...prev, announcementId]
        );
    };

    // Toggle expanded announcement
    const toggleExpanded = (announcementId) => {
        setExpandedAnnouncement(expandedAnnouncement === announcementId ? null : announcementId);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredAnnouncements?.length || 1));
    }, [config?.featuredAnnouncements?.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredAnnouncements?.length || 1)) % (config?.featuredAnnouncements?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredAnnouncements?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredAnnouncements?.length, nextSlide]);

    // Get unique years for filter
    const getAvailableYears = () => {
        const years = new Set();
        config?.announcements?.forEach(announcement => {
            if (announcement.date) {
                years.add(new Date(announcement.date).getFullYear());
            }
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Filter announcements
    const getFilteredAnnouncements = useCallback(() => {
        let announcements = config?.announcements || [];

        if (searchQuery) {
            announcements = announcements.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            announcements = announcements.filter(a => a.category === selectedCategory);
        }

        if (selectedYear !== 'all') {
            announcements = announcements.filter(a => new Date(a.date).getFullYear().toString() === selectedYear);
        }

        if (activeTab !== 'all') {
            if (activeTab === 'featured') {
                announcements = announcements.filter(a => a.isFeatured);
            } else if (activeTab === 'trending') {
                announcements = [...announcements].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0)).slice(0, 6);
            } else if (activeTab === 'recent') {
                announcements = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
            }
        }

        return announcements;
    }, [config?.announcements, searchQuery, selectedCategory, selectedYear, activeTab]);

    const filteredAnnouncements = getFilteredAnnouncements();
    const categories = config?.categories || [
        { id: 'all', label: 'All Announcements', icon: 'megaphone' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'trending', label: 'Trending', icon: 'fire' },
        { id: 'recent', label: 'Recent', icon: 'clock' }
    ];

    const availableYears = getAvailableYears();
    const featuredAnnouncements = config?.featuredAnnouncements || [];

    // Stats cards
    const stats = config?.stats || [
        { value: "50+", label: "Announcements", icon: "megaphone" },
        { value: "15+", label: "Product Launches", icon: "chip" },
        { value: "20+", label: "Awards Won", icon: "trophy" },
        { value: "10+", label: "Partnerships", icon: "users" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedYear !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedYear('all');
    };

    // Announcements by year for archive view
    const announcementsByYear = filteredAnnouncements.reduce((groups, announcement) => {
        const year = formatDate(announcement.date, 'year');
        if (!groups[year]) groups[year] = [];
        groups[year].push(announcement);
        return groups;
    }, {});

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Company Announcements Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-announce" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-announce)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineMegaphone className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Announcements Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Company"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Announcements"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Stay informed about the latest company news, product launches, awards, and important updates from SupplyChainPro."}
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

                {/* Featured Announcements Carousel */}
                {activeTab === 'all' && featuredAnnouncements.length > 0 && (
                    <div className="relative mb-16">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredAnnouncements.map((announcement) => {
                                    const categoryConfig = getCategoryConfig(announcement.category);
                                    return (
                                        <div key={announcement.id} className="w-full shrink-0">
                                            <div className="relative h-125 rounded-3xl overflow-hidden">
                                                <img
                                                    src={announcement.image}
                                                    alt={announcement.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        {announcement.isUrgent && (
                                                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
                                                                Urgent
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{announcement.title}</h2>
                                                    <p className="text-white/80 text-lg mb-4 max-w-2xl line-clamp-2">{announcement.excerpt}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <HiOutlineCalendar className="w-4 h-4" />
                                                            <span>{formatDate(announcement.date, 'short')}</span>
                                                        </div>
                                                        <Link
                                                            href={announcement.link}
                                                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                                                        >
                                                            Read Announcement
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
                            {featuredAnnouncements.length > 1 && (
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
                                        {featuredAnnouncements.map((_, idx) => (
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
                                placeholder="Search announcements by title, category, or keyword..."
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Search announcements"
                            />
                        </div>

                        <div className="flex gap-2">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Categories</option>
                                {config?.categories?.filter(c => c.id !== 'all' && c.id !== 'featured' && c.id !== 'trending' && c.id !== 'recent').map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
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
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
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
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Categories</option>
                                    {config?.categories?.filter(c => c.id !== 'all' && c.id !== 'featured' && c.id !== 'trending' && c.id !== 'recent').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
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
                                <button onClick={clearAllFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
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
                            Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredAnnouncements.length}</span> announcements
                            {searchQuery && ` matching "${searchQuery}"`}
                        </p>
                    </div>
                )}

                {/* Announcements Grid */}
                {activeTab === 'all' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredAnnouncements.map((announcement) => {
                            const categoryConfig = getCategoryConfig(announcement.category);
                            const isExpanded = expandedAnnouncement === announcement.id;
                            const isSaved = savedAnnouncements.includes(announcement.id);
                            const isLiked = likedAnnouncements.includes(announcement.id);

                            return (
                                <div
                                    key={announcement.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={announcement.image}
                                            alt={announcement.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                {categoryConfig.label}
                                            </span>
                                        </div>
                                        {announcement.isUrgent && (
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
                                                    Urgent
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{formatDate(announcement.date, 'short')}</span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{announcement.views || '1.2k'} views</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            <Link href={announcement.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                {announcement.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                            {announcement.excerpt}
                                        </p>

                                        <button
                                            onClick={() => toggleExpanded(announcement.id)}
                                            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 hover:gap-2 transition-all duration-300"
                                        >
                                            {isExpanded ? 'Show less' : 'Read more'}
                                            <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isExpanded && announcement.quote && (
                                            <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                                <HiOutlineQuote className="w-4 h-4 text-blue-500 mb-1" />
                                                <p className="text-xs italic text-gray-700 dark:text-gray-300">"{announcement.quote.text}"</p>
                                                <p className="text-xs text-gray-500 mt-1">— {announcement.quote.author}</p>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleLikeAnnouncement(announcement.id)}
                                                    className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
                                                    <span>{announcement.likes || 0}</span>
                                                </button>
                                                <button
                                                    onClick={() => handleSaveAnnouncement(announcement.id)}
                                                    className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                >
                                                    <HiOutlineBookmark className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <Link href={announcement.link} className="text-blue-600 text-xs font-semibold hover:underline">
                                                Read →
                                            </Link>
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
                        {filteredAnnouncements.map((announcement) => (
                            <div key={announcement.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                            <HiOutlineFire className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryConfig(announcement.category).color}`}>
                                                {getCategoryConfig(announcement.category).label}
                                            </span>
                                            <span className="text-xs text-gray-500">{formatDate(announcement.date, 'short')}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                                            <Link href={announcement.link} className="hover:text-blue-600 transition-colors">
                                                {announcement.title}
                                            </Link>
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{announcement.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Recent Tab Content */}
                {activeTab === 'recent' && (
                    <div className="space-y-4 mb-12">
                        {filteredAnnouncements.map((announcement) => (
                            <div key={announcement.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryConfig(announcement.category).color}`}>
                                                {getCategoryConfig(announcement.category).label}
                                            </span>
                                            <span className="text-xs text-gray-500">{formatDate(announcement.date, 'short')}</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                            <Link href={announcement.link} className="hover:text-blue-600 transition-colors">
                                                {announcement.title}
                                            </Link>
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{announcement.excerpt}</p>
                                    </div>
                                    <Link href={announcement.link} className="shrink-0 text-blue-600 text-sm font-medium hover:underline">
                                        Read →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Archive Tab (Year-based grouping) */}
                {activeTab === 'all' && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlineArchive className="w-5 h-5 text-blue-600" />
                            Announcement Archive
                        </h2>
                        <div className="space-y-8">
                            {Object.entries(announcementsByYear).sort((a, b) => b[0] - a[0]).slice(0, 3).map(([year, announcements]) => (
                                <div key={year}>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{year}</h3>
                                    <div className="space-y-3">
                                        {announcements.slice(0, 3).map((announcement) => (
                                            <div key={announcement.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryConfig(announcement.category).color}`}>
                                                            {getCategoryConfig(announcement.category).label}
                                                        </span>
                                                        <span className="text-xs text-gray-500">{formatDate(announcement.date, 'short')}</span>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{announcement.title}</p>
                                                </div>
                                                <Link href={announcement.link} className="text-blue-600 text-sm hover:underline ml-4">
                                                    Read
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {filteredAnnouncements.length === 0 && activeTab === 'all' && (
                    <div className="text-center py-12">
                        <HiOutlineMegaphone className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No announcements found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button onClick={clearAllFilters} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Media Resources Section */}
                {config?.showMediaResources && (
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
                            <Link href="/press-kit" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
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
                                <a href={`mailto:${config.mediaContact.email}`} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                    <HiOutlineMail className="w-4 h-4" />
                                    Email
                                </a>
                                <a href={`tel:${config.mediaContact.phone}`} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                    <HiOutlinePhone className="w-4 h-4" />
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Subscribe to Announcements"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                            {config?.newsletter?.description || "Get the latest company announcements delivered to your inbox."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Subscribe</button>
                        </form>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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

export default CompanyAnnouncementsSection3;