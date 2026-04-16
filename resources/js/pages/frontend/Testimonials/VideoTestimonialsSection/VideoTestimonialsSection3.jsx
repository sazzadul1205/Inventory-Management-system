// frontend/Testimonials/VideoTestimonialsSection/VideoTestimonialsSection3.jsx

/**
 * Video Testimonials Library Component
 * A comprehensive video testimonial library featuring:
 * - Search functionality across titles, authors, companies, and tags
 * - Industry category filters with color-coded badges
 * - Full-featured modal video player with:
 *   - Custom play/pause controls
 *   - Mute/unmute toggle
 *   - Progress bar with seeking
 *   - Transcript viewer toggle
 *   - Related videos sidebar
 *   - Key results display
 * - Video duration badges
 * - Client star ratings
 * - Responsive video grid
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineX,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineSearch,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineFilter,
} from 'react-icons/hi';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const VideoTestimonialsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const [showRelated, setShowRelated] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Refs
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const videos = useMemo(() => config?.videos || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'], [config]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'play': HiOutlinePlay,
      'pause': HiOutlinePause,
      'volume-up': HiOutlineVolumeUp,
      'volume-off': HiOutlineVolumeOff,
      'x': HiOutlineX,
      'arrow-right': HiArrowRight,
      'star': HiOutlineStar,
      'calendar': HiOutlineCalendar,
      'check-circle': HiOutlineCheckCircle,
      'search': HiOutlineSearch,
      'clock': HiOutlineClock,
      'chart': HiOutlineChartBar,
      'bulb': HiOutlineLightBulb,
      'play-circle': HiOutlinePlayCircle,
      'users': HiOutlineUsers,
      'filter': HiOutlineFilter,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlinePlayCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Render star rating component
   * @param {number} rating - Rating value (1-5)
   * @param {string} size - Size class for stars
   * @returns {JSX.Element} Star rating component
   */
  const renderStars = useCallback((rating, size = "w-4 h-4") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500`)}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500 opacity-50`)}</span>;
          }
          return <span key={i}>{getIcon("star", `${size} text-gray-300 dark:text-gray-600`)}</span>;
        })}
      </div>
    );
  }, [getIcon]);

  /**
   * Format duration in seconds to MM:SS format
   * @param {number} seconds - Duration in seconds
   * @returns {string} Formatted duration string
   */
  const formatDuration = useCallback((seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  /**
   * Get category badge color classes
   * @param {string} category - Category identifier
   * @returns {string} CSS class string
   */
  const getCategoryColor = useCallback((category) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  }, []);

  /**
   * Get category display name
   * @param {string} category - Category identifier
   * @returns {string} Display name
   */
  const getCategoryName = useCallback((category) => {
    const names = {
      retail: 'Retail',
      manufacturing: 'Manufacturing',
      logistics: 'Logistics',
      healthcare: 'Healthcare',
      food: 'Food & Beverage',
      electronics: 'Electronics',
    };
    return names[category] || category;
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        video.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (video.tags && video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [videos, activeCategory, searchQuery]);

  // ==================== MODAL CONTROLS ====================
  const openModal = useCallback((video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setIsMuted(true);
    setShowTranscript(false);
    setShowRelated(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
    setProgress(0);
    document.body.style.overflow = 'auto';
  }, []);

  // ==================== VIDEO EVENT HANDLERS ====================
  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleMuteToggle = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleSeek = useCallback((e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const seekPercentage = x / width;
    if (videoRef.current && duration) {
      videoRef.current.currentTime = seekPercentage * duration;
    }
  }, [duration]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  // ==================== KEYBOARD EVENT HANDLER ====================
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedVideo, closeModal]);

  // ==================== VIDEO PLAYBACK EFFECT ====================
  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedVideo]);

  // ==================== CLEANUP ON UNMOUNT ====================
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  // Get related videos (same category, excluding current)
  const relatedVideos = useMemo(() => {
    if (!selectedVideo) return [];
    return videos
      .filter(v => v.id !== selectedVideo.id && v.category === selectedVideo.category)
      .slice(0, 3);
  }, [videos, selectedVideo]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Video Testimonials Library"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Video testimonials badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Video Library"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Video'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Testimonials'}
            </span>{' '}
            {config?.title?.suffix || 'Library'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Browse our collection of client success stories, filtered by industry and topic."}
          </p>
        </div>

        {/* ==================== SEARCH AND FILTER BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("search", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search videos by title, company, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search videos"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {getIcon("filter", "w-4 h-4")}
            Filters
          </button>

          {/* Category Filter Tabs */}
          <div className={`flex gap-2 overflow-x-auto pb-2 md:pb-0 ${showFilters ? 'flex-wrap' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${category === 'all' ? 'all industries' : getCategoryName(category)}`}
              >
                {category === 'all' ? 'All Industries' : getCategoryName(category)}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredVideos.length}</span> videos
        </div>

        {/* ==================== VIDEO GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => openModal(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(video)}
              aria-label={`Play video: ${video.title}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(video.category)}`}>
                    {getCategoryName(video.category)}
                  </span>
                </div>
                {/* Duration Badge */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md flex items-center gap-1 backdrop-blur-sm">
                    {getIcon("clock", "w-3 h-3")}
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  {renderStars(video.rating, "w-3 h-3")}
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    {getIcon("calendar", "w-3 h-3")}
                    {video.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">
                    {video.avatar || video.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{video.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{video.company}</div>
                  </div>
                </div>
                {video.keyResult && (
                  <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                    {getIcon("check-circle", "w-3 h-3")}
                    <span>{video.keyResult}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No videos found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {selectedVideo && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-y-auto"
            onClick={(e) => e.target === modalRef.current && closeModal()}
            role="dialog"
            aria-label="Video player modal"
            aria-modal="true"
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                aria-label="Close video player"
              >
                {getIcon("x", "w-5 h-5")}
              </button>

              {/* Video Player */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src={selectedVideo.url}
                  className="w-full aspect-video"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleVideoEnd}
                  muted={isMuted}
                  autoPlay
                  playsInline
                />

                {/* Custom Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div
                    className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer group/progress"
                    onClick={handleSeek}
                    role="progressbar"
                    aria-label="Video progress"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Play/Pause Button */}
                      <button
                        onClick={handlePlayPause}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          getIcon("pause", "w-4 h-4")
                        ) : (
                          getIcon("play", "w-4 h-4 ml-0.5")
                        )}
                      </button>

                      {/* Mute/Unmute Button */}
                      <button
                        onClick={handleMuteToggle}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          getIcon("volume-off", "w-4 h-4")
                        ) : (
                          getIcon("volume-up", "w-4 h-4")
                        )}
                      </button>

                      {/* Time Display */}
                      <span className="text-white text-sm font-mono">
                        {formatDuration(currentTime)} / {formatDuration(duration)}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {/* Transcript Toggle */}
                      <button
                        onClick={() => setShowTranscript(!showTranscript)}
                        className="text-white/70 hover:text-white text-sm px-3 py-1 rounded-lg bg-white/10 transition-colors"
                      >
                        {showTranscript ? 'Hide' : 'Show'} Transcript
                      </button>
                      {/* Related Videos Toggle */}
                      <button
                        onClick={() => setShowRelated(!showRelated)}
                        className="text-white/70 hover:text-white text-sm px-3 py-1 rounded-lg bg-white/10 transition-colors"
                      >
                        Related
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Main Info Column */}
                <div className="lg:col-span-2">
                  {/* Rating and Metadata */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {renderStars(selectedVideo.rating, "w-4 h-4")}
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      {getIcon("calendar", "w-3 h-3")}
                      {selectedVideo.date}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedVideo.category)}`}>
                      {getCategoryName(selectedVideo.category)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{selectedVideo.title}</h3>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl">
                      {selectedVideo.avatar || selectedVideo.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{selectedVideo.author}</div>
                      <div className="text-white/60 text-sm">{selectedVideo.role}, {selectedVideo.company}</div>
                    </div>
                  </div>

                  {/* Transcript Section */}
                  {showTranscript && selectedVideo.transcript && (
                    <div className="bg-white/10 rounded-xl p-4 mb-4 animate-fadeIn">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        {getIcon("bulb", "w-4 h-4")}
                        Transcript
                      </h4>
                      <div className="text-white/70 text-sm leading-relaxed max-h-48 overflow-y-auto">
                        {selectedVideo.transcript}
                      </div>
                    </div>
                  )}

                  {/* Key Results Section */}
                  {selectedVideo.keyResults && selectedVideo.keyResults.length > 0 && (
                    <div className="bg-green-500/20 rounded-xl p-4 mb-4 border border-green-500/30">
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        {getIcon("chart", "w-4 h-4")}
                        Key Results
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedVideo.keyResults.map((result, idx) => (
                          <li key={idx} className="text-white/80 text-sm flex items-start gap-2">
                            {getIcon("check-circle", "w-4 h-4 text-green-400 mt-0.5 shrink-0")}
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Related Videos Column */}
                {showRelated && relatedVideos.length > 0 && (
                  <div className="bg-white/10 rounded-xl p-4 animate-fadeIn">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      {getIcon("play-circle", "w-4 h-4")}
                      Related Videos
                    </h4>
                    <div className="space-y-3">
                      {relatedVideos.map((related) => (
                        <div
                          key={related.id}
                          className="flex gap-3 cursor-pointer hover:bg-white/20 rounded-lg p-2 transition-all duration-200"
                          onClick={() => openModal(related)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && openModal(related)}
                        >
                          <img
                            src={related.thumbnail}
                            alt={related.title}
                            className="w-20 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium line-clamp-2">{related.title}</div>
                            <div className="text-white/50 text-xs flex items-center gap-1 mt-1">
                              {getIcon("clock", "w-3 h-3")}
                              {related.duration}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href={selectedVideo.caseStudyLink || "/case-studies"}
                  className="px-5 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Read Full Case Study
                </Link>
                <Link
                  href="/demo"
                  className="px-5 py-2.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-300 hover:opacity-100 hover:scale-110">
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("play-circle", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Want to share your video testimonial?"}
              </span>
              <Link
                href={config?.ctaLink || "/submit-testimonial"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Submit Your Video"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonialsSection3;