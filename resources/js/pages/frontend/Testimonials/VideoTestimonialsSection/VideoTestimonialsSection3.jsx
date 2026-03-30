// frontend/Testimonials/VideoTestimonialsSection/VideoTestimonialsSection3.jsx

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
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineSearch,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineLightBulb
} from 'react-icons/hi';
import { HiOutlinePlayCircle } from "react-icons/hi2";

const VideoTestimonialsSection3 = ({ config }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const [showRelated, setShowRelated] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  const videos = config?.videos || [];
  const categories = config?.categories || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'];

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

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (video.tags && video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setIsMuted(true);
    setShowTranscript(false);
    setShowRelated(false);
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

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`w-4 h-4 ${i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
              }`}
          />
        ))}
      </div>
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Video Testimonials Library"
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

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search videos by title, company, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {category === 'all' ? 'All Industries' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500">
          Found {filteredVideos.length} videos
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
              onClick={() => openModal(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(video.category)}`}>
                    {video.category}
                  </span>
                </div>
                {video.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded flex items-center gap-1">
                    <HiOutlineClock className="w-3 h-3" />
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  {renderStars(video.rating)}
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    {video.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm">
                    {video.avatar || video.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{video.author}</div>
                    <div className="text-xs text-gray-500">{video.company}</div>
                  </div>
                </div>
                {video.keyResult && (
                  <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                    <HiOutlineCheckCircle className="w-3 h-3" />
                    <span>{video.keyResult}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No videos found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-y-auto"
            onClick={(e) => e.target === modalRef.current && closeModal()}
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>

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
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowTranscript(!showTranscript)}
                        className="text-white/70 hover:text-white text-sm px-3 py-1 rounded-lg bg-white/10 transition-colors"
                      >
                        {showTranscript ? 'Hide' : 'Show'} Transcript
                      </button>
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
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(selectedVideo.rating)}
                    <span className="text-white/60 text-sm">{selectedVideo.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(selectedVideo.category)}`}>
                      {selectedVideo.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{selectedVideo.title}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                      {selectedVideo.avatar || selectedVideo.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{selectedVideo.author}</div>
                      <div className="text-white/60 text-sm">{selectedVideo.role}, {selectedVideo.company}</div>
                    </div>
                  </div>

                  {/* Transcript Section */}
                  {showTranscript && selectedVideo.transcript && (
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <HiOutlineLightBulb className="w-4 h-4" />
                        Transcript
                      </h4>
                      <div className="text-white/70 text-sm leading-relaxed max-h-48 overflow-y-auto">
                        {selectedVideo.transcript}
                      </div>
                    </div>
                  )}

                  {/* Key Results */}
                  {selectedVideo.keyResults && (
                    <div className="bg-green-500/20 rounded-xl p-4 mb-4">
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        <HiOutlineChartBar className="w-4 h-4" />
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {selectedVideo.keyResults.map((result, idx) => (
                          <li key={idx} className="text-white/80 text-sm flex items-start gap-2">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Related Videos */}
                {showRelated && (
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <HiOutlinePlayCircle className="w-4 h-4" />
                      Related Videos
                    </h4>
                    <div className="space-y-3">
                      {videos.filter(v => v.id !== selectedVideo.id && v.category === selectedVideo.category).slice(0, 3).map(related => (
                        <div
                          key={related.id}
                          className="flex gap-2 cursor-pointer hover:bg-white/20 rounded-lg p-2 transition-all"
                          onClick={() => openModal(related)}
                        >
                          <img src={related.thumbnail} alt={related.title} className="w-20 h-12 object-cover rounded" />
                          <div>
                            <div className="text-white text-sm font-medium line-clamp-2">{related.title}</div>
                            <div className="text-white/50 text-xs">{related.duration}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Link
                  href={selectedVideo.caseStudyLink}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Full Case Study
                </Link>
                <Link
                  href="/demo"
                  className="px-4 py-2 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule a Demo
                </Link>
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
                {config?.ctaText || "Want to share your video testimonial?"}
              </span>
              <Link
                href={config?.ctaLink || "/submit-testimonial"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Submit Your Video"}
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

export default VideoTestimonialsSection3;