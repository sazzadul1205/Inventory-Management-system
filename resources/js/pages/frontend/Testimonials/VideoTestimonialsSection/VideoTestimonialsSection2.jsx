// frontend/Testimonials/VideoTestimonialsSection/VideoTestimonialsSection2.jsx

/**
 * Video Testimonials Gallery Component
 * A comprehensive video testimonial showcase featuring:
 * - Featured video hero section with overlay content
 * - Responsive video grid with thumbnails
 * - Full-featured modal video player with:
 *   - Previous/Next video navigation
 *   - Custom play/pause controls
 *   - Mute/unmute toggle
 *   - Progress bar with seeking
 *   - Save/unsave videos to localStorage
 *   - Share functionality (Web Share API)
 *   - Keyboard navigation (ESC to close)
 * - Save/Bookmark functionality with heart/bookmark icons
 * - Client result highlights
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
  HiOutlineCheckCircle,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineEye,
} from 'react-icons/hi';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

// sweetalert
import Swal from 'sweetalert2';

const VideoTestimonialsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [savedVideos, setSavedVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const videos = useMemo(() => config?.videos || [], [config]);
  const featuredVideo = useMemo(() => config?.featuredVideo || videos[0], [config, videos]);

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
      'check-circle': HiOutlineCheckCircle,
      'chevron-left': HiOutlineChevronLeft,
      'chevron-right': HiOutlineChevronRight,
      'heart': HiOutlineHeart,
      'share': HiOutlineShare,
      'bookmark': HiOutlineBookmark,
      'play-circle': HiOutlinePlayCircle,
      'clock': HiOutlineClock,
      'users': HiOutlineUsers,
      'eye': HiOutlineEye,
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
  const renderStars = useCallback((rating, size = "w-3 h-3") => {
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

  // ==================== LOCAL STORAGE FOR SAVED VIDEOS ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedVideoTestimonials');
    if (saved) {
      setSavedVideos(JSON.parse(saved));
    }
  }, []);

  /**
   * Save or unsave a video
   * @param {string|number} videoId - ID of the video to save/unsave
   */
  const handleSaveVideo = useCallback((videoId) => {
    setSavedVideos(prev => {
      const newSaved = prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId];
      localStorage.setItem('savedVideoTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  // ==================== MODAL CONTROLS ====================
  const openModal = useCallback((video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
    setIsPlaying(true);
    setIsMuted(true);
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

  // ==================== VIDEO NAVIGATION ====================
  const nextVideo = useCallback(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    setSelectedVideo(videos[nextIndex]);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.load();
      setTimeout(() => videoRef.current.play(), 100);
    }
  }, [currentIndex, videos]);

  const prevVideo = useCallback(() => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prevIndex);
    setSelectedVideo(videos[prevIndex]);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.load();
      setTimeout(() => videoRef.current.play(), 100);
    }
  }, [currentIndex, videos]);

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

  // ==================== SHARE FUNCTIONALITY ====================
  const handleShare = useCallback(async () => {
    if (!selectedVideo) return;

    const shareUrl = window.location.href;
    const shareTitle = selectedVideo.title;
    const shareText = `Check out this testimonial from ${selectedVideo.author} at ${selectedVideo.company}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });

        Swal.fire({
          icon: 'success',
          title: 'Shared!',
          text: 'Video shared successfully.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        console.error('Share cancelled', { err });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);

        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Link copied to clipboard.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Failed to copy link. ${err}`,
        });
      }
    }
  }, [selectedVideo]);

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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Testimonials Gallery"
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
              {config?.badge?.text || "Video Testimonials"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Success Stories'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'in Action'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Watch real clients share their experiences and results achieved with our solutions."}
          </p>
        </div>

        {/* ==================== FEATURED VIDEO HERO ==================== */}
        {featuredVideo && (
          <div className="relative mb-16 group">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => openModal(featuredVideo, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(featuredVideo, 0)}
              aria-label={`Play featured video: ${featuredVideo.title}`}
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-96 md:h-125 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {getIcon("play", "w-8 h-8 md:w-10 md:h-10 text-blue-600 ml-1")}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(featuredVideo.rating, "w-4 h-4")}
                  <span className="text-sm text-white/80">{featuredVideo.date}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-2">{featuredVideo.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    {featuredVideo.avatar || featuredVideo.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{featuredVideo.author}</div>
                    <div className="text-sm text-white/70">{featuredVideo.role}, {featuredVideo.company}</div>
                  </div>
                </div>
              </div>
            </div>
            {featuredVideo.badge && (
              <div className="absolute top-6 right-6 px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                {featuredVideo.badge}
              </div>
            )}
          </div>
        )}

        {/* ==================== VIDEO GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div
              key={video.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Thumbnail */}
              <div className="relative cursor-pointer" onClick={() => openModal(video, index)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon("play", "w-5 h-5 text-blue-600 ml-0.5")}
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md backdrop-blur-sm">
                    {video.duration}
                  </div>
                )}
                {/* Save/Bookmark Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSaveVideo(video.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  aria-label={savedVideos.includes(video.id) ? "Remove from saved" : "Save video"}
                >
                  {getIcon("bookmark", `w-4 h-4 ${savedVideos.includes(video.id) ? 'fill-blue-500 text-blue-500' : ''}`)}
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {renderStars(video.rating, "w-3 h-3")}
                    <span className="text-xs text-gray-400 dark:text-gray-500">{video.date}</span>
                  </div>
                  <button
                    onClick={() => handleSaveVideo(video.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={savedVideos.includes(video.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    {getIcon("heart", `w-4 h-4 ${savedVideos.includes(video.id) ? 'fill-red-500 text-red-500' : ''}`)}
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">
                    {video.avatar || video.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{video.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{video.company}</div>
                  </div>
                </div>
                {video.result && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      {getIcon("check-circle", "w-3 h-3 text-green-500")}
                      <span className="text-xs text-green-600 dark:text-green-400">{video.result}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== VIDEO MODAL ==================== */}
        {selectedVideo && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
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

              {/* Previous Video Button */}
              {videos.length > 1 && (
                <button
                  onClick={prevVideo}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  aria-label="Previous video"
                >
                  {getIcon("chevron-left", "w-6 h-6")}
                </button>
              )}

              {/* Next Video Button */}
              {videos.length > 1 && (
                <button
                  onClick={nextVideo}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  aria-label="Next video"
                >
                  {getIcon("chevron-right", "w-6 h-6")}
                </button>
              )}

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

                    <div className="flex items-center gap-3">
                      {/* Save/Bookmark Button */}
                      <button
                        onClick={() => handleSaveVideo(selectedVideo.id)}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                        aria-label={savedVideos.includes(selectedVideo.id) ? "Remove from saved" : "Save video"}
                      >
                        {getIcon("heart", `w-5 h-5 ${savedVideos.includes(selectedVideo.id) ? 'fill-red-500 text-red-500' : ''}`)}
                      </button>

                      {/* Share Button */}
                      <button
                        onClick={handleShare}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                        aria-label="Share video"
                      >
                        {getIcon("share", "w-5 h-5")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(selectedVideo.rating, "w-4 h-4")}
                  <span className="text-sm text-white/60">{selectedVideo.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    {selectedVideo.avatar || selectedVideo.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{selectedVideo.author}</div>
                    <div className="text-sm text-white/60">{selectedVideo.role}, {selectedVideo.company}</div>
                  </div>
                </div>
                {selectedVideo.result && (
                  <div className="mt-3 flex items-center gap-2 text-green-400">
                    {getIcon("check-circle", "w-4 h-4")}
                    <span className="text-sm">{selectedVideo.result}</span>
                  </div>
                )}
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
                {config?.ctaText || "Have a success story to share?"}
              </span>
              <Link
                href={config?.ctaLink || "/submit-testimonial"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Share Your Story"}
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
          animation: fadeIn 0.5s ease-out forwards;
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

export default VideoTestimonialsSection2;