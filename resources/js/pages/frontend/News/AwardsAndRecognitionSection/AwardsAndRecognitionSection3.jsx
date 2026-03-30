// page/frontend/News/AwardsAndRecognitionSection/AwardsAndRecognitionSection3.jsx

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
    HiOutlineBadgeCheck,
    HiOutlineHeart,
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt,
    HiOutlineMicrophone as HiOutlineMicrophoneAlt,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineRefresh,
    HiOutlineClipboardCheck,
    HiOutlineTemplate,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const AwardsAndRecognitionSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedAward, setExpandedAward] = useState(null);
    const [savedAwards, setSavedAwards] = useState([]);
    const [likedAwards, setLikedAwards] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAwardModal, setShowAwardModal] = useState(false);
    const [selectedAward, setSelectedAward] = useState(null);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedAwards');
        if (saved) setSavedAwards(JSON.parse(saved));
        const liked = localStorage.getItem('likedAwards');
        if (liked) setLikedAwards(JSON.parse(liked));
    }, []);

    useEffect(() => {
        localStorage.setItem('savedAwards', JSON.stringify(savedAwards));
    }, [savedAwards]);

    useEffect(() => {
        localStorage.setItem('likedAwards', JSON.stringify(likedAwards));
    }, [likedAwards]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            trophy: <HiOutlineTrophy className={className} />,
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
            phone: <HiOutlinePhone className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            heart: <HiOutlineHeart className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />,
            microphoneAlt: <HiOutlineMicrophoneAlt className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            template: <HiOutlineTemplate className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />
        };
        return icons[iconName] || <HiOutlineTrophy className={className} />;
    };

    // Format date helper
    const formatDate = (dateString, format = 'full') => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

        if (format === 'short') {
            return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
        }
        if (format === 'relative') {
            if (diffDays < 0) return 'Awarded';
            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Yesterday';
            if (diffDays < 7) return `${diffDays} days ago`;
            if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
            if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
            return `${Math.floor(diffDays / 365)} years ago`;
        }
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get award category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'product': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chip', label: 'Product Award', gradient: 'from-blue-500 to-blue-600' },
            'company': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'building', label: 'Company Recognition', gradient: 'from-purple-500 to-purple-600' },
            'innovation': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'lightbulb', label: 'Innovation Award', gradient: 'from-green-500 to-green-600' },
            'leadership': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'briefcase', label: 'Leadership Award', gradient: 'from-orange-500 to-orange-600' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability Award', gradient: 'from-emerald-500 to-emerald-600' },
            'customer': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Customer Excellence', gradient: 'from-pink-500 to-pink-600' }
        };
        return configs[category] || configs.company;
    };

    // Handle save award
    const handleSaveAward = (awardId) => {
        setSavedAwards(prev =>
            prev.includes(awardId)
                ? prev.filter(id => id !== awardId)
                : [...prev, awardId]
        );
    };

    // Handle like award
    const handleLikeAward = (awardId) => {
        setLikedAwards(prev =>
            prev.includes(awardId)
                ? prev.filter(id => id !== awardId)
                : [...prev, awardId]
        );
    };

    // Toggle expanded award
    const toggleExpanded = (awardId) => {
        setExpandedAward(expandedAward === awardId ? null : awardId);
    };

    // Open award modal
    const openAwardModal = (award) => {
        setSelectedAward(award);
        setShowAwardModal(true);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredAwards?.length || 1));
    }, [config?.featuredAwards?.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredAwards?.length || 1)) % (config?.featuredAwards?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredAwards?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredAwards?.length, nextSlide]);

    // Get unique years for filter
    const getAvailableYears = () => {
        const years = new Set();
        config?.awards?.forEach(award => {
            if (award.date) {
                years.add(new Date(award.date).getFullYear());
            }
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Filter awards
    const getFilteredAwards = useCallback(() => {
        let awards = config?.awards || [];

        if (searchQuery) {
            awards = awards.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            awards = awards.filter(a => a.category === selectedCategory);
        }

        if (selectedYear !== 'all') {
            awards = awards.filter(a => new Date(a.date).getFullYear().toString() === selectedYear);
        }

        if (activeTab === 'hall-of-fame') {
            awards = awards.filter(a => a.isHallOfFame);
        } else if (activeTab === 'yearly') {
            const currentYear = new Date().getFullYear().toString();
            awards = awards.filter(a => new Date(a.date).getFullYear().toString() === currentYear);
        } else if (activeTab === 'saved') {
            awards = awards.filter(a => savedAwards.includes(a.id));
        }

        return [...awards].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [config?.awards, searchQuery, selectedCategory, selectedYear, activeTab, savedAwards]);

    const filteredAwards = getFilteredAwards();
    const categories = config?.categories || [
        { id: 'all', label: 'All Awards', icon: 'trophy' },
        { id: 'product', label: 'Product Awards', icon: 'chip' },
        { id: 'company', label: 'Company Recognition', icon: 'building' },
        { id: 'innovation', label: 'Innovation', icon: 'lightbulb' },
        { id: 'leadership', label: 'Leadership', icon: 'briefcase' },
        { id: 'sustainability', label: 'Sustainability', icon: 'globe' }
    ];

    const tabs = [
        { id: 'all', label: 'All Awards', icon: 'trophy' },
        { id: 'hall-of-fame', label: 'Hall of Fame', icon: 'star' },
        { id: 'yearly', label: `Awards ${new Date().getFullYear()}`, icon: 'calendar' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' }
    ];

    const availableYears = getAvailableYears();
    const featuredAwards = config?.featuredAwards || [];

    // Stats cards
    const stats = config?.stats || [
        { value: "25+", label: "Total Awards", icon: "trophy" },
        { value: "10+", label: "Product Awards", icon: "chip" },
        { value: "8", label: "Innovation Awards", icon: "lightbulb" },
        { value: "5", label: "Leadership Awards", icon: "briefcase" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedYear !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedYear('all');
    };

    // Award timeline data
    const awardTimeline = config?.awardTimeline || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Awards & Recognition Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-awards" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-awards)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-600 to-amber-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineTrophy className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Awards Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Awards &"} <span className="bg-linear-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">{config?.title?.highlight || "Recognition"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "We're honored to be recognized by leading industry organizations for our innovation, excellence, and commitment to customer success."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-yellow-600")}
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
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'saved' && savedAwards.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{savedAwards.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Featured Awards Carousel */}
                {activeTab === 'all' && featuredAwards.length > 0 && (
                    <div className="relative mb-16">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredAwards.map((award) => {
                                    const categoryConfig = getCategoryConfig(award.category);
                                    return (
                                        <div key={award.id} className="w-full shrink-0">
                                            <div className="relative h-125 rounded-3xl overflow-hidden cursor-pointer" onClick={() => openAwardModal(award)}>
                                                <img
                                                    src={award.image}
                                                    alt={award.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        {award.presenter && (
                                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">
                                                                {award.presenter}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{award.title}</h2>
                                                    <p className="text-white/80 text-lg mb-4 max-w-2xl line-clamp-2">{award.description}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <HiOutlineCalendar className="w-4 h-4" />
                                                            <span>{formatDate(award.date, 'short')}</span>
                                                        </div>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); handleSaveAward(award.id); }}
                                                            className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 ${savedAwards.includes(award.id) ? 'bg-yellow-500' : ''}`}
                                                        >
                                                            <HiOutlineBookmark className="w-4 h-4" />
                                                            {savedAwards.includes(award.id) ? 'Saved' : 'Save'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {featuredAwards.length > 1 && (
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
                                        {featuredAwards.map((_, idx) => (
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
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search awards by name, category, or organization..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            aria-label="Search awards"
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="all">All Categories</option>
                            {categories.filter(c => c.id !== 'all').map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="all">All Years</option>
                            {availableYears.map(year => (
                                <option key={year} value={year.toString()}>{year}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                ? 'bg-yellow-600 text-white'
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

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="all">All Years</option>
                                    {availableYears.map(year => (
                                        <option key={year} value={year.toString()}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                    <option>Latest First</option>
                                    <option>Most Viewed</option>
                                    <option>Alphabetical</option>
                                </select>
                            </div>
                        </div>
                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={clearAllFilters} className="text-sm text-yellow-600 dark:text-yellow-400 hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredAwards.length}</span> awards
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredAwards.map((award) => {
                        const categoryConfig = getCategoryConfig(award.category);
                        const isExpanded = expandedAward === award.id;
                        const isSaved = savedAwards.includes(award.id);
                        const isLiked = likedAwards.includes(award.id);

                        return (
                            <div
                                key={award.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => openAwardModal(award)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <div className="w-10 h-10 rounded-full bg-yellow-500/90 flex items-center justify-center shadow-lg">
                                            <HiOutlineTrophy className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    {award.presenter && (
                                        <div className="absolute bottom-3 left-3">
                                            <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                                                {award.presenter}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <HiOutlineCalendar className="w-4 h-4" />
                                        <span>{formatDate(award.date, 'relative')}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <HiOutlineEye className="w-4 h-4" />
                                        <span>{award.views || '1.2k'} views</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {award.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {award.description}
                                    </p>

                                    {award.quote && (
                                        <div className="mb-3">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleExpanded(award.id); }}
                                                className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : 'Read quote'}
                                                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isExpanded && (
                                                <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-3 border-yellow-500">
                                                    <p className="text-xs italic text-gray-700 dark:text-gray-300">"{award.quote.text}"</p>
                                                    <p className="text-xs text-gray-500 mt-1">— {award.quote.author}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleLikeAward(award.id); }}
                                                className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleSaveAward(award.id); }}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); openAwardModal(award); }}
                                            className="text-yellow-600 text-xs font-semibold hover:underline"
                                        >
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Award Timeline */}
                {activeTab === 'all' && awardTimeline.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlineClock className="w-5 h-5 text-yellow-600" />
                            Award Timeline
                        </h2>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                            <div className="space-y-6">
                                {awardTimeline.map((item, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                            <HiOutlineTrophy className="w-3 h-3 text-yellow-600" />
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</span>
                                                <span className="text-xs text-gray-500">{item.year}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                            <span className="text-xs text-yellow-600 mt-2 inline-block">{item.presenter}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* No Results */}
                {filteredAwards.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineTrophy className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'saved' ? "You haven't saved any awards yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'saved' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-yellow-600 hover:underline">
                                Browse All Awards
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-yellow-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Award Detail Modal */}
                {showAwardModal && selectedAward && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAwardModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 overflow-hidden">
                                <img src={selectedAward.image} alt={selectedAward.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                <button
                                    onClick={() => setShowAwardModal(false)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                >
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(selectedAward.category).color}`}>
                                            {getCategoryConfig(selectedAward.category).label}
                                        </span>
                                        {selectedAward.presenter && (
                                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                                                {selectedAward.presenter}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <HiOutlineCalendar className="w-4 h-4" />
                                    <span>{formatDate(selectedAward.date, 'short')}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <HiOutlineEye className="w-4 h-4" />
                                    <span>{selectedAward.views || '1.2k'} views</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedAward.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedAward.description}</p>
                                {selectedAward.content && (
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedAward.content}</p>
                                )}
                                {selectedAward.quote && (
                                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500 mb-4">
                                        <HiOutlineQuote className="w-5 h-5 text-yellow-500 mb-2" />
                                        <p className="text-sm italic text-gray-700 dark:text-gray-300">"{selectedAward.quote.text}"</p>
                                        <p className="text-xs text-gray-500 mt-2">— {selectedAward.quote.author}</p>
                                    </div>
                                )}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <button
                                        onClick={() => handleLikeAward(selectedAward.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${likedAwards.includes(selectedAward.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
                                        {selectedAward.likes || 0}
                                    </button>
                                    <button
                                        onClick={() => handleSaveAward(selectedAward.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${savedAwards.includes(selectedAward.id) ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
                                    >
                                        <HiOutlineBookmark className="w-5 h-5" />
                                        {savedAwards.includes(selectedAward.id) ? 'Saved' : 'Save'}
                                    </button>
                                    <Link href={selectedAward.link} className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors ml-auto">
                                        View Award Page
                                        <HiOutlineExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
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

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-linear-to-r from-yellow-600 to-amber-600 dark:from-yellow-500 dark:to-amber-500 rounded-3xl p-8 text-white text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">
                            {config?.newsletter?.title || "Get Award Updates"}
                        </h3>
                        <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive notifications about our latest awards and industry recognition."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for award updates"
                            />
                            <button
                                type="submit"
                                className="bg-white text-yellow-600 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300"
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

export default AwardsAndRecognitionSection3;