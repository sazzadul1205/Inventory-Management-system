// frontend/Testimonials/VideoTestimonialsSection/VideoTestimonialsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
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
  HiOutlineBookmark
} from 'react-icons/hi';
import { HiOutlinePlayCircle } from "react-icons/hi2";

const VideoTestimonialsSection2 = ({ config }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedVideos, setSavedVideos] = useState([]);
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const carouselRef = useRef(null);

  const videos = config?.videos || [];
  const featuredVideo = config?.featuredVideo || videos[0];

  useEffect(() => {
    const saved = localStorage.getItem('savedVideoTestimonials');
    if (saved) {
      setSavedVideos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedVideo]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedVideo]);

  const openModal = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
    setIsPlaying(true);
    setIsMuted(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
    setProgress(0);
    document.body.style.overflow = 'auto';
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const seekTime = (x / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    setSelectedVideo(videos[nextIndex]);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const prevVideo = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prevIndex);
    setSelectedVideo(videos[prevIndex]);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleSaveVideo = (videoId) => {
    setSavedVideos(prev => {
      const newSaved = prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId];
      localStorage.setItem('savedVideoTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`w-3 h-3 ${i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Testimonials Gallery"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Featured Video Hero */}
        {featuredVideo && (
          <div className="relative mb-16 group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => openModal(featuredVideo, 0)}>
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-125 md:h-150 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <HiOutlinePlay className="w-10 h-10 text-blue-600 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(featuredVideo.rating)}
                  <span className="text-sm text-white/80">{featuredVideo.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredVideo.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
              <div className="absolute top-6 right-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                {featuredVideo.badge}
              </div>
            )}
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative cursor-pointer" onClick={() => openModal(video, index)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HiOutlinePlay className="w-5 h-5 text-blue-600 ml-0.5" />
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSaveVideo(video.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
                >
                  <HiOutlineBookmark className={`w-4 h-4 ${savedVideos.includes(video.id) ? 'fill-blue-500 text-blue-500' : ''}`} />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {renderStars(video.rating)}
                    <span className="text-xs text-gray-400">{video.date}</span>
                  </div>
                  <button
                    onClick={() => handleSaveVideo(video.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <HiOutlineHeart className={`w-4 h-4 ${savedVideos.includes(video.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm">
                    {video.avatar || video.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{video.author}</div>
                    <div className="text-xs text-gray-500">{video.company}</div>
                  </div>
                </div>
                {video.result && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-1">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">{video.result}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={(e) => e.target === modalRef.current && closeModal()}
          >
            <div className="relative w-full max-w-6xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Video Player */}
              <div className="relative bg-black rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  src={selectedVideo.url}
                  className="w-full aspect-video"
                  onTimeUpdate={handleTimeUpdate}
                  muted={isMuted}
                />

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div
                    className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer group"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-blue-500 rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
                      >
                        {isPlaying ? (
                          <HiOutlinePause className="w-4 h-4" />
                        ) : (
                          <HiOutlinePlay className="w-4 h-4 ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
                      >
                        {isMuted ? (
                          <HiOutlineVolumeOff className="w-4 h-4" />
                        ) : (
                          <HiOutlineVolumeUp className="w-4 h-4" />
                        )}
                      </button>
                      <span className="text-white text-sm">
                        {videoRef.current && formatDuration(videoRef.current.currentTime)} / {videoRef.current && formatDuration(videoRef.current.duration)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleSaveVideo(selectedVideo.id)}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <HiOutlineHeart className={`w-5 h-5 ${savedVideos.includes(selectedVideo.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => navigator.share && navigator.share({ title: selectedVideo.title, url: window.location.href })}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <HiOutlineShare className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(selectedVideo.rating)}
                  <span className="text-sm text-white/60">{selectedVideo.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    {selectedVideo.avatar || selectedVideo.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{selectedVideo.author}</div>
                    <div className="text-sm text-white/60">{selectedVideo.role}, {selectedVideo.company}</div>
                  </div>
                </div>
                {selectedVideo.result && (
                  <div className="mt-3 flex items-center gap-2 text-green-400">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span className="text-sm">{selectedVideo.result}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlinePlayCircle className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Have a success story to share?"}
              </span>
              <Link
                href={config?.ctaLink || "/submit-testimonial"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Share Your Story"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
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
          animation: fadeIn 0.5s ease-out;
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