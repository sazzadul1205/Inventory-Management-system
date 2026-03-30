// page/frontend/News/PressReleasesSection/PressReleasesSection3.jsx

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
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineNewspaper as HiOutlineNewspaperAlt,
    HiOutlineZoomIn,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineRefresh,
    HiOutlineClipboardCheck,
    HiOutlineBadgeCheck,
    HiOutlineTemplate
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

const PressReleasesSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('releases');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedRelease, setExpandedRelease] = useState(null);
    const [savedReleases, setSavedReleases] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showMediaModal, setShowMediaModal] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const carouselRef = useRef(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            newspaper: <HiOutlineNewspaper className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
            newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            badgeCheck: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            template: <HiOutlineTemplate className={className} />
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

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'product': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chip', label: 'Product Launch', gradient: 'from-blue-500 to-blue-600' },
            'partnership': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'users', label: 'Partnership', gradient: 'from-green-500 to-green-600' },
            'award': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'trophy', label: 'Award', gradient: 'from-yellow-500 to-yellow-600' },
            'funding': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'credit', label: 'Funding', gradient: 'from-purple-500 to-purple-600' },
            'acquisition': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'rocket', label: 'Acquisition', gradient: 'from-orange-500 to-orange-600' },
            'executive': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Executive', gradient: 'from-red-500 to-red-600' },
            'financial': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Financial', gradient: 'from-emerald-500 to-emerald-600' }
        };
        return configs[category] || configs.product;
    };

    // Handle save press release
    const handleSaveRelease = (releaseId) => {
        setSavedReleases(prev =>
            prev.includes(releaseId)
                ? prev.filter(id => id !== releaseId)
                : [...prev, releaseId]
        );
        localStorage.setItem('savedPressReleases', JSON.stringify(
            savedReleases.includes(releaseId)
                ? savedReleases.filter(id => id !== releaseId)
                : [...savedReleases, releaseId]
        ));
    };

    // Toggle expanded release
    const toggleExpanded = (releaseId) => {
        setExpandedRelease(expandedRelease === releaseId ? null : releaseId);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredReleases?.length || 1));
    }, [config?.featuredReleases?.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredReleases?.length || 1)) % (config?.featuredReleases?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredReleases?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredReleases?.length, nextSlide]);

    // Load saved releases from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedPressReleases');
        if (saved) setSavedReleases(JSON.parse(saved));
    }, []);

    // Get unique years for filter
    const getAvailableYears = () => {
        const years = new Set();
        config?.pressReleases?.forEach(release => {
            if (release.date) {
                years.add(new Date(release.date).getFullYear());
            }
        });
        return Array.from(years).sort((a, b) => b - a);
    };

    // Filter press releases
    const getFilteredReleases = useCallback(() => {
        let releases = config?.pressReleases || [];

        if (searchQuery) {
            releases = releases.filter(r =>
                r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            releases = releases.filter(r => r.category === selectedCategory);
        }

        if (selectedYear !== 'all') {
            releases = releases.filter(r => new Date(r.date).getFullYear().toString() === selectedYear);
        }

        return releases;
    }, [config?.pressReleases, searchQuery, selectedCategory, selectedYear]);

    const filteredReleases = getFilteredReleases();
    const categories = config?.categories || [
        { id: 'all', label: 'All Releases', icon: 'newspaperAlt' },
        { id: 'product', label: 'Product Launches', icon: 'chip' },
        { id: 'partnership', label: 'Partnerships', icon: 'users' },
        { id: 'award', label: 'Awards', icon: 'trophy' },
        { id: 'funding', label: 'Funding', icon: 'credit' },
        { id: 'acquisition', label: 'Acquisitions', icon: 'rocket' }
    ];

    const availableYears = getAvailableYears();
    const featuredReleases = config?.featuredReleases || [];

    // Group releases by year for archive view
    const releasesByYear = filteredReleases.reduce((groups, release) => {
        const year = formatDate(release.date, 'year');
        if (!groups[year]) groups[year] = [];
        groups[year].push(release);
        return groups;
    }, {});

    // Media gallery items
    const mediaGallery = config?.mediaGallery || [];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedYear !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedYear('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Press Center & Media Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-press" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-press)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineNewspaperAlt className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Media Center"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Press"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Center"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Official news, press releases, and media resources from SupplyChainPro."}
                    </p>

                    {/* Quick Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setActiveTab('releases')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'releases'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon('newspaperAlt', "w-4 h-4")}
                            Press Releases
                        </button>
                        <button
                            onClick={() => setActiveTab('media')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'media'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon('photo', "w-4 h-4")}
                            Media Gallery
                        </button>
                        <button
                            onClick={() => setActiveTab('archive')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'archive'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon('archive', "w-4 h-4")}
                            Archive
                        </button>
                        <button
                            onClick={() => setActiveTab('resources')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'resources'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon('template', "w-4 h-4")}
                            Media Resources
                        </button>
                    </div>
                </div>

                {/* Featured Releases Carousel */}
                {activeTab === 'releases' && featuredReleases.length > 0 && (
                    <div className="relative mb-16">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredReleases.map((release) => {
                                    const categoryConfig = getCategoryConfig(release.category);
                                    return (
                                        <div key={release.id} className="w-full shrink-0">
                                            <div className="relative h-125 rounded-3xl overflow-hidden">
                                                <img
                                                    src={release.image}
                                                    alt={release.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute inset-0 bg-black/40" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                            {categoryConfig.label}
                                                        </span>
                                                        {release.isPressRelease && (
                                                            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                                                Featured
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{release.title}</h2>
                                                    <p className="text-white/80 text-lg mb-4 max-w-2xl">{release.excerpt}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <HiOutlineCalendarIcon className="w-4 h-4" />
                                                            <span>{formatDate(release.date, 'short')}</span>
                                                        </div>
                                                        <Link
                                                            href={release.link}
                                                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                                                        >
                                                            Read Full Release
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
                            {featuredReleases.length > 1 && (
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
                                        {featuredReleases.map((_, idx) => (
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

                {/* Press Releases Tab */}
                {activeTab === 'releases' && (
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
                                    placeholder="Search press releases..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search press releases"
                                />
                            </div>
                            <div className="flex gap-2">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
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

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredReleases.length}</span> press releases
                            </p>
                        </div>

                        {/* Press Releases Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredReleases.map((release) => {
                                const categoryConfig = getCategoryConfig(release.category);
                                const isExpanded = expandedRelease === release.id;
                                const isSaved = savedReleases.includes(release.id);

                                return (
                                    <div
                                        key={release.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                    >
                                        <Link href={release.link} className="block overflow-hidden relative">
                                            <img
                                                src={release.image}
                                                alt={release.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                    {categoryConfig.label}
                                                </span>
                                            </div>
                                            {release.pdfUrl && (
                                                <div className="absolute bottom-3 right-3">
                                                    <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                                                        <HiOutlineDownload className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                            )}
                                        </Link>

                                        <div className="p-5">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                <HiOutlineCalendarIcon className="w-4 h-4" />
                                                <span>{formatDate(release.date, 'short')}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{release.views || '1.2k'} views</span>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                                <Link href={release.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                    {release.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                                {release.excerpt}
                                            </p>

                                            <button
                                                onClick={() => toggleExpanded(release.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'Read more'}
                                                {isExpanded ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                                            </button>

                                            {isExpanded && release.quote && (
                                                <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                                    <HiOutlineQuote className="w-4 h-4 text-blue-500 mb-1" />
                                                    <p className="text-xs italic text-gray-700 dark:text-gray-300">"{release.quote.text}"</p>
                                                    <p className="text-xs text-gray-500 mt-1">— {release.quote.author}</p>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={release.author?.avatar}
                                                        alt={release.author?.name}
                                                        className="w-6 h-6 rounded-full object-cover"
                                                    />
                                                    <span className="text-xs text-gray-500">{release.author?.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => handleSaveRelease(release.id)}
                                                        className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                    >
                                                        <HiOutlineBookmark className="w-4 h-4" />
                                                    </button>
                                                    <Link href={release.link} className="text-blue-600 text-sm font-semibold hover:underline">
                                                        Read →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* No Results */}
                        {filteredReleases.length === 0 && (
                            <div className="text-center py-12">
                                <HiOutlineNewspaper className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No press releases found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                                <button
                                    onClick={clearAllFilters}
                                    className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Media Gallery Tab */}
                {activeTab === 'media' && (
                    <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {mediaGallery.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => {
                                        setSelectedMedia(item);
                                        setShowMediaModal(true);
                                    }}
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
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {item.type === 'video' ? 'Video' : 'Image'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <a
                                                href={item.downloadUrl}
                                                download
                                                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <HiOutlineDownload className="w-3 h-3" />
                                                Download
                                            </a>
                                            <button className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                                <HiOutlineZoomIn className="w-3 h-3" />
                                                Preview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Archive Tab */}
                {activeTab === 'archive' && (
                    <div className="space-y-12 mb-12">
                        {Object.entries(releasesByYear).sort((a, b) => b[0] - a[0]).map(([year, releases]) => (
                            <div key={year}>
                                <div className="flex items-center gap-4 mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{year}</h2>
                                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                                    <span className="text-sm text-gray-500">{releases.length} releases</span>
                                </div>
                                <div className="space-y-4">
                                    {releases.map((release) => (
                                        <div key={release.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-wrap items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-sm text-gray-500">{formatDate(release.date, 'short')}</span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryConfig(release.category).color}`}>
                                                            {getCategoryConfig(release.category).label}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                        <Link href={release.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                            {release.title}
                                                        </Link>
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{release.excerpt}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    {release.pdfUrl && (
                                                        <a
                                                            href={release.pdfUrl}
                                                            download
                                                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                                        >
                                                            <HiOutlineDownload className="w-4 h-4" />
                                                            PDF
                                                        </a>
                                                    )}
                                                    <Link href={release.link} className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                                        Read
                                                        <HiArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Media Resources Tab */}
                {activeTab === 'resources' && (
                    <div>
                        {/* Brand Assets */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <HiOutlineTemplate className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Brand Assets</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {config?.brandAssets?.map((asset, idx) => (
                                    <a
                                        key={idx}
                                        href={asset.link}
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 group"
                                    >
                                        {getIcon(asset.icon, "w-5 h-5 text-blue-500")}
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white text-sm">{asset.name}</p>
                                            <p className="text-xs text-gray-500">{asset.format}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Media Contact */}
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white">
                            <div className="flex flex-wrap items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <HiOutlineMail className="w-5 h-5" />
                                        <span className="text-sm font-semibold uppercase tracking-wider">Media Contact</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{config?.mediaContact?.name || "Sarah Johnson"}</h3>
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
                                        href={`tel:${config?.mediaContact?.phone || "+1 (555) 123-4567"}`}
                                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        <HiOutlinePhone className="w-4 h-4" />
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        {config?.showNewsletter && (
                            <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                                <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {config?.newsletter?.title || "Subscribe to Press Alerts"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                                    {config?.newsletter?.description || "Get the latest press releases delivered to your inbox."}
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                )}

                {/* Media Modal */}
                {showMediaModal && selectedMedia && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowMediaModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowMediaModal(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            {selectedMedia.type === 'video' ? (
                                <video
                                    src={selectedMedia.url}
                                    className="w-full"
                                    controls
                                    autoPlay
                                    poster={selectedMedia.thumbnail}
                                />
                            ) : (
                                <img
                                    src={selectedMedia.url || selectedMedia.thumbnail}
                                    alt={selectedMedia.title}
                                    className="w-full h-auto"
                                />
                            )}
                            <div className="p-4 bg-gray-900">
                                <h3 className="text-lg font-bold text-white">{selectedMedia.title}</h3>
                                <div className="flex items-center gap-4 mt-2">
                                    <a
                                        href={selectedMedia.downloadUrl}
                                        download
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <HiOutlineDownload className="w-4 h-4" />
                                        Download
                                    </a>
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <HiOutlineShareAlt className="w-4 h-4" />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
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

export default PressReleasesSection3;
