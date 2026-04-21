// frontend/Blog/VideoContentSection/VideoContentSection2.jsx

/**
 * Video Content Section - Video Library Hub
 * 
 * Unique design elements:
 * - Hero carousel with auto-play and manual navigation
 * - Continue watching section with progress tracking (localStorage)
 * - Trending videos section sorted by view count
 * - Like/save functionality with localStorage persistence
 * - Watch history tracking with progress percentage
 * - Stats cards for total videos, hours, learners
 * - Category filter pills with icons
 * - Search functionality
 * - Video player modal with progress tracking
 * - Responsive grid layout for video cards
 * - Duration badges and view counts
 * - Presenter attribution with avatars
 * - Animated gradient backgrounds
 * 
 * All icons from react-icons (hi, fa, hi2 - Heroicons, FontAwesome, Heroicons 2)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - Heroicons, FontAwesome, and Heroicons 2 for variety
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
  HiOutlineVolumeUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineHeart,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const VideoContentSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedVideos, setSavedVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [continueWatching, setContinueWatching] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedContinue = localStorage.getItem('continueWatching');
    if (savedContinue) setContinueWatching(JSON.parse(savedContinue));
    const savedLikes = localStorage.getItem('likedVideos');
    if (savedLikes) setLikedVideos(JSON.parse(savedLikes));
    const savedBookmarks = localStorage.getItem('savedVideos');
    if (savedBookmarks) setSavedVideos(JSON.parse(savedBookmarks));
  }, []);

  useEffect(() => {
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
  }, [savedVideos]);

  useEffect(() => {
    localStorage.setItem('continueWatching', JSON.stringify(continueWatching));
  }, [continueWatching]);

  // ==================== MEMOIZED DATA ====================
  const videos = useMemo(() => config?.videos || [], [config?.videos]);
  const heroVideos = useMemo(() => config?.heroVideos || [], [config?.heroVideos]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Videos', icon: 'video' },
    { id: 'tutorial', label: 'Tutorials', icon: 'play' },
    { id: 'webinar', label: 'Webinars', icon: 'video' },
    { id: 'case-study', label: 'Case Studies', icon: 'briefcase' },
    { id: 'interview', label: 'Interviews', icon: 'microphone' },
    { id: 'product-demo', label: 'Product Demos', icon: 'chip' }
  ], [config?.categories]);

  const stats = config?.stats || { videos: 0, hours: 0, learners: '0' };

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, FontAwesome, and Heroicons 2
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineRocketLaunch,
      trophy: HiOutlineStar,
      users: HiOutlineUserGroup,
      globe: HiOutlineGlobe,
      chart: HiOutlineChartBar,
      lightbulb: HiOutlineLightBulb,
      check: HiOutlineCheckCircle,
      arrow: HiArrowRight,
      microphone: HiOutlineMicrophone,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      star: HiOutlineStar,
      trending: HiOutlineTrendingUp,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      briefcase: HiOutlineBriefcase,
      location: HiOutlineLocationMarker,
      usergroup: HiOutlineUsers,
      chip: HiOutlineChip,
      cloud: HiOutlineCloudUpload,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      archive: HiOutlineArchive,
      photo: HiOutlinePhotograph,
      doc: HiOutlineDocument,
      link: HiOutlineLink,
      credit: HiOutlineCreditCard,
      pie: HiOutlineChartPie,
      quote: FaQuoteLeft,
      at: HiOutlineAtSymbol,
      building: HiOutlineOfficeBuilding,
      newspaper: HiOutlineNewspaper,
      question: HiOutlineQuestionMarkCircle,
      pencil: HiOutlinePencil,
      book: HiOutlineBookOpen,
      badge: HiOutlineBadgeCheck,
      certificate: FaCertificate,
      clipboard: HiOutlineClipboardList,
      template: HiOutlineTemplate,
      code: HiOutlineCode,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      desktop: HiOutlineDesktopComputer,
      mobile: HiOutlineDeviceMobile,
      wifi: HiOutlineWifi,
      zoom: HiOutlineZoomIn,
      download: HiOutlineDownload,
      volume: HiOutlineVolumeUp,
      chevronLeft: HiOutlineChevronLeft,
      chevronRight: HiOutlineChevronRight,
      plus: HiOutlinePlus,
      heart: HiOutlineHeart,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineVideoCamera className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to relative time string
   */
  const formatRelativeDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffWeeks < 4) return `${diffWeeks}w ago`;
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    return `${diffYears}y ago`;
  }, []);

  /**
   * Formats view count with K/M suffixes
   */
  const formatViews = useCallback((views) => {
    if (!views) return '0 views';
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K views`;
    return `${views} views`;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'tutorial': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'play', label: 'Tutorial' },
      'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar' },
      'case-study': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'briefcase', label: 'Case Study' },
      'interview': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'microphone', label: 'Interview' },
      'product-demo': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'chip', label: 'Product Demo' },
      'event': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'calendar', label: 'Event' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'video', label: 'Video' };
  }, []);

  /**
   * Toggle save/bookmark status for a video
   */
  const handleSaveVideo = useCallback((videoId, e) => {
    if (e) e.stopPropagation();
    setSavedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  }, []);

  /**
   * Toggle like status for a video
   */
  const handleLikeVideo = useCallback((videoId, e) => {
    if (e) e.stopPropagation();
    setLikedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  }, []);

  /**
   * Handle watch progress for continue watching feature
   */
  const handleWatchProgress = useCallback((videoId, progress) => {
    if (progress > 0 && progress < 95) {
      const existing = continueWatching.find(v => v.id === videoId);
      const video = videos.find(v => v.id === videoId);
      if (video) {
        if (!existing) {
          setContinueWatching(prev => [...prev, { ...video, progress, lastWatched: new Date().toISOString() }]);
        } else {
          setContinueWatching(prev => prev.map(v => v.id === videoId ? { ...v, progress, lastWatched: new Date().toISOString() } : v));
        }
      }
    } else if (progress >= 95) {
      setContinueWatching(prev => prev.filter(v => v.id !== videoId));
    }
  }, [continueWatching, videos]);

  /**
   * Handle play video - opens modal and tracks history
   */
  const handlePlayVideo = useCallback((video) => {
    setActiveVideo(video);
    setShowPlayer(true);
  }, []);

  /**
   * Close video player and save progress
   */
  const closePlayer = useCallback(() => {
    if (videoRef.current && activeVideo) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      if (progress > 0) {
        handleWatchProgress(activeVideo.id, progress);
      }
      videoRef.current.pause();
    }
    setShowPlayer(false);
    setActiveVideo(null);
  }, [activeVideo, handleWatchProgress]);

  /**
   * Carousel navigation
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (heroVideos.length || 1));
  }, [heroVideos.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (heroVideos.length || 1)) % (heroVideos.length || 1));
  }, [heroVideos.length]);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && heroVideos.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, heroVideos.length, nextSlide]);

  // ==================== FILTERING LOGIC ====================
  const filteredVideos = useMemo(() => {
    let filtered = [...videos];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video =>
        video.title?.toLowerCase().includes(query) ||
        video.description?.toLowerCase().includes(query) ||
        video.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    return filtered;
  }, [videos, searchQuery, selectedCategory]);

  // Trending videos sorted by views
  const trendingVideos = useMemo(() => {
    return [...videos].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);
  }, [videos]);

  // Continue watching videos from localStorage
  const continueWatchingVideos = useMemo(() => {
    return continueWatching.slice(0, 6);
  }, [continueWatching]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Video Content - Video Library Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-200 dark:bg-red-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon("video", "w-4 h-4 text-red-600 dark:text-red-400")}
              <span className="text-sm font-medium text-red-700 dark:text-red-300">
                {config?.badge || "Video Hub"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Video"}{' '}
              <span className="bg-linear-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Library"}
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Watch tutorials, webinars, and expert interviews to master supply chain management."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.videos}+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Videos</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.hours}+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Hours of Content</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.learners}+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Active Learners</div>
            </div>
          </div>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-xl mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon("search", "w-5 h-5 text-gray-400")}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
            className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
            aria-label="Search videos"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              {getIcon("close", "w-5 h-5")}
            </button>
          )}
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label} videos`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== HERO CAROUSEL ==================== */}
        {heroVideos.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {heroVideos.map((video) => {
                  const categoryConfig = getCategoryConfig(video.category);
                  return (
                    <div key={video.id} className="w-full shrink-0">
                      <div
                        className="relative h-96 md:h-125 rounded-3xl overflow-hidden cursor-pointer"
                        onClick={() => handlePlayVideo(video)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(video)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
                            {getIcon("play", "w-10 h-10 text-red-600 ml-1")}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </span>
                            <span className="text-white/70 text-sm">{video.duration}</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2">{video.title}</h2>
                          <p className="text-white/80 mb-4 max-w-2xl">{video.description}</p>
                          <div className="flex items-center gap-4 text-sm text-white/70">
                            <span>{formatViews(video.views)}</span>
                            <span>{formatRelativeDate(video.date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation */}
              {heroVideos.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    {getIcon("chevronLeft", "w-6 h-6")}
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next slide"
                  >
                    {getIcon("chevronRight", "w-6 h-6")}
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroVideos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== CONTINUE WATCHING SECTION ==================== */}
        {continueWatchingVideos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("play", "w-5 h-5 text-red-600")}
              Continue Watching
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {continueWatchingVideos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => handlePlayVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(video)}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        {getIcon("play", "w-4 h-4 text-red-600 ml-0.5")}
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

        {/* ==================== TRENDING SECTION ==================== */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            {getIcon("fire", "w-5 h-5 text-orange-500")}
            Trending Now
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingVideos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => handlePlayVideo(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(video)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      {getIcon("play", "w-4 h-4 text-red-600 ml-0.5")}
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

        {/* ==================== ALL VIDEOS GRID ==================== */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            {getIcon("video", "w-5 h-5 text-red-600")}
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
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handlePlayVideo(video)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        {getIcon("play", "w-6 h-6 text-red-600 ml-1")}
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
                          loading="lazy"
                        />
                        <span className="text-xs text-gray-500">{video.presenter?.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => handleLikeVideo(video.id, e)}
                          className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                          aria-label={isLiked ? "Unlike video" : "Like video"}
                        >
                          {getIcon("heart", "w-4 h-4")}
                        </button>
                        <button
                          onClick={(e) => handleSaveVideo(video.id, e)}
                          className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                          aria-label={isSaved ? "Remove from saved" : "Save video"}
                        >
                          {getIcon("bookmark", "w-4 h-4")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("video", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No videos found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-red-600 dark:text-red-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== VIDEO PLAYER MODAL ==================== */}
        {showPlayer && activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closePlayer}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon("close", "w-6 h-6")}
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
                    if (activeVideo) handleWatchProgress(activeVideo.id, progress);
                  }}
                />
              </div>
              <div className="p-4 bg-gray-900">
                <h3 className="text-lg font-bold text-white mb-2">{activeVideo.title}</h3>
                <p className="text-gray-400 text-sm">{activeVideo.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    {getIcon("thumbsUp", "w-4 h-4")}
                    Like
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    {getIcon("share", "w-4 h-4")}
                    Share
                  </button>
                  <button
                    onClick={() => handleSaveVideo(activeVideo.id)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {getIcon("bookmark", "w-4 h-4")}
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoContentSection2;