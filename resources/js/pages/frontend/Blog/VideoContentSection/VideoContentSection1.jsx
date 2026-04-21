// frontend/Blog/VideoContentSection/VideoContentSection1.jsx

/**
 * Video Content Section - Video Learning Hub
 * 
 * Unique design elements:
 * - Featured video hero player with large thumbnail and play button
 * - Playlists section with video count and duration badges
 * - Video category filter chips with icons
 * - Save/bookmark functionality for videos
 * - Presenter attribution with avatars
 * - Duration badges on thumbnails
 * - View count and date metrics
 * - Tag cloud for content categorization
 * - Search across titles, descriptions, and tags
 * - Newsletter subscription for video updates
 * - Video player modal with like/share/save actions
 * - Animated gradient backgrounds
 * - Responsive grid layout for video cards
 * 
 * All icons from react-icons (hi, fa, md, hi2 - Heroicons, FontAwesome, Material Design)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, FontAwesome, Material Design, and Heroicons 2
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
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdOutlineClosedCaption, MdHighQuality, MdOutlineFullscreen } from "react-icons/md";

const VideoContentSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedVideos, setSavedVideos] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const videos = useMemo(() => config?.videos || [], [config?.videos]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Videos', icon: 'video', count: videos.length },
    { id: 'tutorial', label: 'Tutorials', icon: 'play' },
    { id: 'webinar', label: 'Webinars', icon: 'video' },
    { id: 'case-study', label: 'Case Studies', icon: 'briefcase' },
    { id: 'interview', label: 'Interviews', icon: 'microphone' },
    { id: 'product-demo', label: 'Product Demos', icon: 'chip' }
  ], [config?.categories, videos.length]);

  const playlists = useMemo(() => config?.playlists || [], [config?.playlists]);
  const featuredVideo = useMemo(() => config?.featuredVideo || videos[0], [config?.featuredVideo, videos]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, FontAwesome, Material Design, and Heroicons 2
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
      caption: MdOutlineClosedCaption,
      quality: MdHighQuality,
      fullscreen: MdOutlineFullscreen,
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
      'event': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'calendar', label: 'Event Recording' }
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
   * Handle play video - opens modal player
   */
  const handlePlayVideo = useCallback((video) => {
    setActiveVideo(video);
    setShowPlayer(true);
  }, []);

  /**
   * Close video player modal
   */
  const closePlayer = useCallback(() => {
    setShowPlayer(false);
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      e.target.reset();
    }
  }, []);

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

  // Filter out featured video from grid to avoid duplication
  const regularVideos = featuredVideo
    ? filteredVideos.filter(v => v.id !== featuredVideo.id)
    : filteredVideos;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Content - Video Learning Hub"
      itemScope
      itemType="https://schema.org/VideoGallery"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-red-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-red-100 dark:border-gray-700">
            {getIcon("video", "w-4 h-4 text-red-600 dark:text-red-400 mr-2")}
            <span className="text-sm font-medium text-red-700 dark:text-red-300">
              {config?.badge || "Video Library"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Watch &"}{' '}
            <span className="bg-linear-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Learn"}
            </span>{' '}
            {config?.title?.suffix || "from Our Experts"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Explore our collection of video tutorials, webinars, case studies, and expert interviews to enhance your supply chain knowledge."}
          </p>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon("search", "w-5 h-5 text-gray-400")}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={config?.searchPlaceholder || "Search videos by title, topic, or expert..."}
            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label} videos`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
              {category.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{category.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED VIDEO ==================== */}
        {featuredVideo && !hasActiveFilters && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(featuredVideo)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                    aria-label="Play featured video"
                  >
                    {getIcon("play", "w-10 h-10 text-red-600 ml-1")}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredVideo.category).color}`}>
                      {getCategoryConfig(featuredVideo.category).label}
                    </span>
                    <span className="text-white/70 text-sm flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      {featuredVideo.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{featuredVideo.title}</h3>
                  <p className="text-white/80 mb-4 max-w-2xl">{featuredVideo.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredVideo.presenter?.avatar}
                        alt={featuredVideo.presenter?.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white"
                        loading="lazy"
                      />
                      <span className="text-white text-sm">{featuredVideo.presenter?.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      {getIcon("eye", "w-4 h-4")}
                      <span>{formatViews(featuredVideo.views)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatRelativeDate(featuredVideo.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PLAYLISTS SECTION ==================== */}
        {playlists.length > 0 && !hasActiveFilters && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon("list", "w-5 h-5 text-red-600")}
              Featured Playlists
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={playlist.thumbnail}
                      alt={playlist.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        {getIcon("play", "w-6 h-6 text-red-600 ml-1")}
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-lg text-white text-xs">
                      {playlist.videoCount} videos
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{playlist.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{playlist.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{playlist.totalDuration} total</span>
                      <Link href={playlist.link} className="text-red-600 text-sm font-semibold hover:underline">
                        View Playlist →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== VIDEOS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularVideos.map((video) => {
            const categoryConfig = getCategoryConfig(video.category);
            const isSaved = savedVideos.includes(video.id);

            return (
              <div
                key={video.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Video Thumbnail */}
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

                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatRelativeDate(video.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("eye", "w-4 h-4")}
                      <span>{formatViews(video.views)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Presenter */}
                  {video.presenter && (
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={video.presenter.avatar}
                        alt={video.presenter.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-500">{video.presenter.name}</span>
                    </div>
                  )}

                  {/* Tags */}
                  {video.tags && video.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {video.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={(e) => handleSaveVideo(video.id, e)}
                      className={`transition-colors flex items-center gap-1 text-sm ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? "Remove from saved" : "Save video"}
                    >
                      {getIcon("bookmark", "w-4 h-4")}
                      {isSaved ? 'Saved' : 'Save'}
                    </button>
                    <button
                      onClick={() => handlePlayVideo(video)}
                      className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Watch Now
                      {getIcon("play", "w-4 h-4")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularVideos.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
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

        {/* ==================== VIEW ALL BUTTON ==================== */}
        {config?.showViewAll && !hasActiveFilters && regularVideos.length < videos.length && (
          <div className="text-center">
            <Link
              href={config?.viewAllLink || "/videos"}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-red-600 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
            >
              View All Videos
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-red-600 to-purple-600 dark:from-red-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
            {getIcon("bell", "w-12 h-12 mx-auto mb-4")}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {config?.newsletter?.title || "Get New Videos Delivered"}
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Subscribe to receive notifications when we release new video content, tutorials, and webinars."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for video updates"
                required
              />
              <button
                type="submit"
                className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-sm text-red-100 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            <p className="text-xs text-red-100 mt-4">
              {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
            </p>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoContentSection1;