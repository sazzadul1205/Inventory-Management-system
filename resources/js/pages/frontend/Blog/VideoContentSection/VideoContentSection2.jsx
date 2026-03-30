// page/frontend/Blog/VideoContentSection/VideoContentSection2.jsx

// React
import { useState, useCallback, useRef, useEffect } from 'react';

// Icons
import { FaQuoteLeft, FaCertificate } from "react-icons/fa";
import {
    HiOutlinePlay,
    HiOutlineVideoCamera,
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
    HiOutlineStar,
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineMicrophone,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
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
    HiOutlineOfficeBuilding,
    HiOutlineNewspaper,
    HiOutlineQuestionMarkCircle,
    HiOutlinePencil,
    HiOutlineBookOpen,
    HiOutlineBadgeCheck,
    HiOutlineClipboardList,
    HiOutlineTemplate,
    HiOutlineCode,
    HiOutlineDatabase,
    HiOutlineServer,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineZoomIn,
    HiOutlineDownload,
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineVolumeUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlinePlus,
    HiOutlineHeart
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const VideoContentSection2 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedVideos, setSavedVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setWatchHistory] = useState([]);
    const [continueWatching, setContinueWatching] = useState([]);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load watch history from localStorage
    useEffect(() => {
        const savedHistory = localStorage.getItem('videoWatchHistory');
        if (savedHistory) {
            setWatchHistory(JSON.parse(savedHistory));
        }
        const savedContinue = localStorage.getItem('continueWatching');
        if (savedContinue) {
            setContinueWatching(JSON.parse(savedContinue));
        }
        const savedLikes = localStorage.getItem('likedVideos');
        if (savedLikes) {
            setLikedVideos(JSON.parse(savedLikes));
        }
        const savedBookmarks = localStorage.getItem('savedVideos');
        if (savedBookmarks) {
            setSavedVideos(JSON.parse(savedBookmarks));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    }, [likedVideos]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
    }, [savedVideos]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('continueWatching', JSON.stringify(continueWatching));
    }, [continueWatching]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
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
            rocket: <HiOutlineRocketLaunch className={className} />,
            trophy: <HiOutlineStar className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
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
            quote: <FaQuoteLeft className={className} />,
            at: <HiOutlineAtSymbol className={className} />,
            building: <HiOutlineOfficeBuilding className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            question: <HiOutlineQuestionMarkCircle className={className} />,
            pencil: <HiOutlinePencil className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <FaCertificate className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            template: <HiOutlineTemplate className={className} />,
            code: <HiOutlineCode className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            download: <HiOutlineDownload className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineChat className={className} />,
            quality: <HiOutlineStar className={className} />,
            fullscreen: <HiOutlineZoomIn className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            plus: <HiOutlinePlus className={className} />,
            heart: <HiOutlineHeart className={className} />,
            playCircle: <HiOutlinePlay className={className} />
        };
        return icons[iconName] || <HiOutlineVideoCamera className={className} />;
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

    // Format view count
    const formatViews = (views) => {
        if (!views) return '0 views';
        if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
        if (views >= 1000) return `${(views / 1000).toFixed(1)}K views`;
        return `${views} views`;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'tutorial': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'play', label: 'Tutorial', gradient: 'from-blue-500 to-blue-600' },
            'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar', gradient: 'from-purple-500 to-purple-600' },
            'case-study': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'briefcase', label: 'Case Study', gradient: 'from-green-500 to-green-600' },
            'interview': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'microphone', label: 'Interview', gradient: 'from-orange-500 to-orange-600' },
            'product-demo': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'chip', label: 'Product Demo', gradient: 'from-indigo-500 to-indigo-600' },
            'event': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'calendarIcon', label: 'Event', gradient: 'from-red-500 to-red-600' }
        };
        return configs[category] || configs.tutorial;
    };

    // Handle save video
    const handleSaveVideo = (videoId) => {
        setSavedVideos(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    // Handle like video
    const handleLikeVideo = (videoId) => {
        setLikedVideos(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    // Handle watch progress
    const handleWatchProgress = (videoId, progress) => {
        if (progress > 0 && progress < 95) {
            const existing = continueWatching.find(v => v.id === videoId);
            if (!existing) {
                const video = config?.videos?.find(v => v.id === videoId);
                if (video) {
                    setContinueWatching(prev => [...prev, { ...video, progress, lastWatched: new Date().toISOString() }]);
                }
            } else {
                setContinueWatching(prev => prev.map(v => v.id === videoId ? { ...v, progress, lastWatched: new Date().toISOString() } : v));
            }
        }
    };

    // Handle play video
    const handlePlayVideo = (video) => {
        setActiveVideo(video);
        setShowPlayer(true);
        // Add to watch history
        setWatchHistory(prev => {
            const filtered = prev.filter(v => v.id !== video.id);
            return [{ ...video, watchedAt: new Date().toISOString() }, ...filtered].slice(0, 20);
        });
    };

    // Close player
    const closePlayer = () => {
        setShowPlayer(false);
        setActiveVideo(null);
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            if (activeVideo && progress > 0) {
                handleWatchProgress(activeVideo.id, progress);
            }
            videoRef.current.pause();
        }
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.heroVideos?.length || 1));
    }, [config?.heroVideos?.length]);

    // Carousel navigation
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (config?.heroVideos?.length || 1)) % (config?.heroVideos?.length || 1));
    };

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.heroVideos?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.heroVideos?.length, nextSlide]);

    // Filter videos
    const getFilteredVideos = useCallback(() => {
        let videos = config?.videos || [];

        if (searchQuery) {
            videos = videos.filter(v =>
                v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                v.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            videos = videos.filter(v => v.category === selectedCategory);
        }

        return videos;
    }, [config?.videos, searchQuery, selectedCategory]);

    // Filtered videos
    const filteredVideos = getFilteredVideos();

    // Categories
    const categories = config?.categories || [
        { id: 'all', label: 'All Videos', icon: 'video' },
        { id: 'tutorial', label: 'Tutorials', icon: 'play' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'case-study', label: 'Case Studies', icon: 'briefcase' },
        { id: 'interview', label: 'Interviews', icon: 'microphone' },
        { id: 'product-demo', label: 'Product Demos', icon: 'chip' }
    ];

    // Hero videos (carousel)
    const heroVideos = config?.heroVideos || [];

    // Trending videos
    const trendingVideos = [...(config?.videos || [])]
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 6);

    // Continue watching videos
    const continueWatchingVideos = continueWatching.slice(0, 6);

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Video Content Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-red-200 dark:bg-red-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineVideoCamera className="w-4 h-4 text-red-600 dark:text-red-400" />
                            <span className="text-sm font-medium text-red-700 dark:text-red-300">
                                {config?.badge || "Video Hub"}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Video"} <span className="bg-linear-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Library"}</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Watch tutorials, webinars, and expert interviews to master supply chain management."}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{config?.stats?.videos || 50}+</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Videos</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{config?.stats?.hours || 100}+</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Hours of Content</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{config?.stats?.learners || "50K"}+</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Active Learners</div>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xl mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search videos..."
                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        aria-label="Search videos"
                    />
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Hero Carousel */}
                {heroVideos.length > 0 && (
                    <div className="relative mb-16">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {heroVideos.map((video) => (
                                    <div key={video.id} className="w-full shrink-0">
                                        <div className="relative h-125 rounded-3xl overflow-hidden cursor-pointer" onClick={() => handlePlayVideo(video)}>
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
                                                    <HiOutlinePlay className="w-10 h-10 text-red-600 ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(video.category).color}`}>
                                                        {getCategoryConfig(video.category).label}
                                                    </span>
                                                    <span className="text-white/70 text-sm">{video.duration}</span>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{video.title}</h2>
                                                <p className="text-white/80 mb-4 max-w-2xl">{video.description}</p>
                                                <div className="flex items-center gap-4 text-sm text-white/70">
                                                    <span>{formatViews(video.views)}</span>
                                                    <span>{formatDate(video.date)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Navigation */}
                            {heroVideos.length > 1 && (
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
                                        {heroVideos.map((_, idx) => (
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

                {/* Continue Watching Section */}
                {continueWatchingVideos.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <HiOutlinePlay className="w-5 h-5 text-red-600" />
                            Continue Watching
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {continueWatchingVideos.map((video) => (
                                <div key={video.id} className="group cursor-pointer" onClick={() => handlePlayVideo(video)}>
                                    <div className="relative rounded-xl overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-4 h-4 text-red-600 ml-0.5" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                                            <div className="h-full bg-red-600 rounded-full" style={{ width: `${video.progress || 0}%` }} />
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium text-gray-900 dark:text-white mt-2 line-clamp-2">{video.title}</p>
                                    <p className="text-xs text-gray-500">{video.progress || 0}% watched</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Trending Section */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <HiOutlineFire className="w-5 h-5 text-orange-500" />
                        Trending Now
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {trendingVideos.map((video) => (
                            <div key={video.id} className="group cursor-pointer" onClick={() => handlePlayVideo(video)}>
                                <div className="relative rounded-xl overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                            <HiOutlinePlay className="w-4 h-4 text-red-600 ml-0.5" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-black/70 px-1 py-0.5 rounded text-xs text-white">
                                        {video.duration}
                                    </div>
                                </div>
                                <p className="text-xs font-medium text-gray-900 dark:text-white mt-2 line-clamp-2">{video.title}</p>
                                <p className="text-xs text-gray-500">{formatViews(video.views)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Videos Grid */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <HiOutlineVideoCamera className="w-5 h-5 text-red-600" />
                        All Videos
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video) => {
                            const categoryConfig = getCategoryConfig(video.category);
                            const isSaved = savedVideos.includes(video.id);
                            const isLiked = likedVideos.includes(video.id);

                            return (
                                <div
                                    key={video.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative cursor-pointer" onClick={() => handlePlayVideo(video)}>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-6 h-6 text-red-600 ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                {categoryConfig.label}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-lg text-white text-xs">
                                            {video.duration}
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">{video.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{video.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={video.presenter?.avatar}
                                                    alt={video.presenter?.name}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                                <span className="text-xs text-gray-500">{video.presenter?.name}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleLikeVideo(video.id); }}
                                                    className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleSaveVideo(video.id); }}
                                                    className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                >
                                                    <HiOutlineBookmark className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* No Results */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No videos found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-red-600 dark:text-red-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Video Player Modal */}
                {showPlayer && activeVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closePlayer}>
                        <div className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closePlayer}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <div className="aspect-video">
                                <video
                                    ref={videoRef}
                                    src={activeVideo.videoUrl}
                                    className="w-full h-full"
                                    controls
                                    autoPlay
                                    poster={activeVideo.thumbnail}
                                    onTimeUpdate={(e) => {
                                        const progress = (e.target.currentTime / e.target.duration) * 100;
                                        handleWatchProgress(activeVideo.id, progress);
                                    }}
                                />
                            </div>
                            <div className="p-4 bg-gray-900">
                                <h3 className="text-lg font-bold text-white mb-2">{activeVideo.title}</h3>
                                <p className="text-gray-400 text-sm">{activeVideo.description}</p>
                                <div className="flex items-center gap-4 mt-3">
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <HiOutlineThumbUp className="w-4 h-4" />
                                        Like
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <HiOutlineShare className="w-4 h-4" />
                                        Share
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <HiOutlineBookmark className="w-4 h-4" />
                                        Save
                                    </button>
                                </div>
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
      `}</style>
        </section>
    );
};

export default VideoContentSection2;
