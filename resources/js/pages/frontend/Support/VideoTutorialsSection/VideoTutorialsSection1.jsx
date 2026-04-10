// page/frontend/Support/VideoTutorialsSection/VideoTutorialsSection1.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineSearch,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineCollection,
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineCode,
  HiOutlineMail,
} from 'react-icons/hi';
import { HiOutlineBell, HiOutlineLink, HiOutlinePlayCircle, HiOutlineQueueList } from 'react-icons/hi2';

const VideoTutorialsSection1 = ({ config }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchProgress, setWatchProgress] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareVideo, setShareVideo] = useState(null);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const videoRef = useRef(null);

  // Get data from config
  const categories = config?.categories || [];
  const videos = useEffect(() => config?.videos || [], [config]);
  const playlists = config?.playlists || [];
  const stats = config?.stats || [];
  const featuredVideo = config?.featuredVideo || videos[0];

  // Get unique levels and duration ranges
  const levels = useMemo(() => {
    const lev = new Set(videos.map(v => v.level).filter(Boolean));
    return ['all', ...Array.from(lev)];
  }, [videos]);

  const durationRanges = useEffect(() => [
    { id: 'all', label: 'All Durations' },
    { id: 'short', label: 'Short (< 5 min)', max: 5 },
    { id: 'medium', label: 'Medium (5-15 min)', min: 5, max: 15 },
    { id: 'long', label: 'Long (> 15 min)', min: 15 },
  ], []);

  // Filter videos based on search, category, level, and duration
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = searchQuery === '' ||
        video.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
      const matchesLevel = selectedLevel === 'all' || video.level === selectedLevel;

      let matchesDuration = true;
      if (selectedDuration !== 'all') {
        const durationMin = parseInt(video.duration) || 0;
        const range = durationRanges.find(r => r.id === selectedDuration);
        if (range) {
          if (range.min && range.max) {
            matchesDuration = durationMin >= range.min && durationMin <= range.max;
          } else if (range.min) {
            matchesDuration = durationMin >= range.min;
          } else if (range.max) {
            matchesDuration = durationMin <= range.max;
          }
        }
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });
  }, [videos, searchQuery, activeCategory, selectedLevel, selectedDuration, durationRanges]);

  // Group videos by category
  const groupedVideos = useMemo(() => {
    const groups = {};
    filteredVideos.forEach(video => {
      if (!groups[video.category]) {
        groups[video.category] = [];
      }
      groups[video.category].push(video);
    });
    return groups;
  }, [filteredVideos]);

  // Load data from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('videoBookmarks');
    if (savedBookmarks) setBookmarkedVideos(JSON.parse(savedBookmarks));

    const savedHistory = localStorage.getItem('videoWatchHistory');
    if (savedHistory) setWatchHistory(JSON.parse(savedHistory));

    const savedProgress = localStorage.getItem('videoWatchProgress');
    if (savedProgress) setWatchProgress(JSON.parse(savedProgress));
  }, []);

  useEffect(() => {
    localStorage.setItem('videoBookmarks', JSON.stringify(bookmarkedVideos));
  }, [bookmarkedVideos]);

  useEffect(() => {
    localStorage.setItem('videoWatchHistory', JSON.stringify(watchHistory));
  }, [watchHistory]);

  useEffect(() => {
    localStorage.setItem('videoWatchProgress', JSON.stringify(watchProgress));
  }, [watchProgress]);

  // Track video view
  const trackVideoView = (video) => {
    const updatedHistory = [video, ...watchHistory.filter(v => v.id !== video.id)].slice(0, 20);
    setWatchHistory(updatedHistory);
  };

  // Save watch progress
  const saveProgress = (videoId, progress) => {
    setWatchProgress(prev => ({
      ...prev,
      [videoId]: { progress, lastWatched: new Date().toISOString() }
    }));
  };

  // Toggle bookmark
  const toggleBookmark = (videoId, e) => {
    e?.stopPropagation();
    if (bookmarkedVideos.includes(videoId)) {
      setBookmarkedVideos(bookmarkedVideos.filter(id => id !== videoId));
    } else {
      setBookmarkedVideos([...bookmarkedVideos, videoId]);
    }
  };

  // Share video
  const shareVideoHandler = (video, e) => {
    e?.stopPropagation();
    setShareVideo(video);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareVideo) {
      navigator.clipboard.writeText(`${window.location.origin}/tutorials/${shareVideo.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Video player controls
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const newTime = videoRef.current.currentTime;
      setCurrentTime(newTime);

      // Save progress every 5 seconds
      if (currentVideo && Math.floor(newTime) % 5 === 0) {
        const progress = (newTime / duration) * 100;
        saveProgress(currentVideo.id, progress);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      // Restore progress
      if (currentVideo && watchProgress[currentVideo.id]?.progress) {
        const seekTime = (watchProgress[currentVideo.id].progress / 100) * videoRef.current.duration;
        videoRef.current.currentTime = seekTime;
      }
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSpeedChange = () => {
    const speeds = [0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
      setPlaybackSpeed(nextSpeed);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDuration = (durationStr) => {
    if (!durationStr) return '';
    return durationStr;
  };

  const getLevelBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (categoryId) => {
    const icons = {
      'getting-started': <HiOutlineSparkles className="w-5 h-5" />,
      'features': <HiOutlineChip className="w-5 h-5" />,
      'integrations': <HiOutlineGlobe className="w-5 h-5" />,
      'api': <HiOutlineCode className="w-5 h-5" />,
      'best-practices': <HiOutlineLightBulb className="w-5 h-5" />,
    };
    return icons[categoryId] || <HiOutlinePlayCircle className="w-5 h-5" />;
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      'getting-started': 'bg-green-100 text-green-700',
      'features': 'bg-blue-100 text-blue-700',
      'integrations': 'bg-purple-100 text-purple-700',
      'api': 'bg-orange-100 text-orange-700',
      'best-practices': 'bg-yellow-100 text-yellow-700',
    };
    return colors[categoryId] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Tutorials Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlinePlayCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Video Tutorials"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Learn with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Video Tutorials"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Watch step-by-step video guides to master our platform. From beginner to advanced, we've got you covered."}
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'videos' ? <HiOutlinePlayCircle className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'hours' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'students' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineStar className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Video Banner */}
        {featuredVideo && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineSparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Tutorial</span>
                {featuredVideo.level && (
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getLevelBadge(featuredVideo.level)}`}>
                    {featuredVideo.level}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredVideo.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredVideo.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredVideo.duration && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{formatDuration(featuredVideo.duration)}</span>
                  </div>
                )}
                {featuredVideo.views && (
                  <div className="flex items-center gap-2">
                    <HiOutlineEye className="w-4 h-4" />
                    <span>{featuredVideo.views.toLocaleString()} views</span>
                  </div>
                )}
                {featuredVideo.instructor && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    <span>{featuredVideo.instructor.name}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setCurrentVideo(featuredVideo);
                    setShowVideoModal(true);
                    setIsPlaying(true);
                    trackVideoView(featuredVideo);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <HiOutlinePlay className="w-5 h-5" />
                  Watch Now
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials by title, topic, or instructor..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
          >
            <HiOutlineCollection className="w-4 h-4" />
            All
            <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">
              {videos.length}
            </span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {getCategoryIcon(category.id)}
              {category.name}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                {videos.filter(v => v.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
            >
              <HiOutlineViewGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
            >
              <HiOutlineViewList className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all"
          >
            <HiOutlineFilter className="w-4 h-4" />
            Filters
            {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {durationRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Playlists Section */}
        {playlists.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineQueueList className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Learning Playlists</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => setSelectedPlaylist(playlist)}
                  className="group p-4 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                      <HiOutlineQueueList className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {playlist.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{playlist.videoCount} videos • {playlist.totalDuration}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: `${playlist.progress || 0}%` }} />
                        </div>
                        <span className="text-xs text-gray-500">{playlist.progress || 0}% complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Grid/List */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlinePlayCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No videos found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedLevel('all');
                setSelectedDuration('all');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="space-y-12 mb-12">
            {Object.entries(groupedVideos).map(([categoryId, categoryVideos]) => {
              const category = categories.find(c => c.id === categoryId);
              if (!category || categoryVideos.length === 0) return null;

              return (
                <div key={categoryId}>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    <div className={`p-1.5 rounded-lg ${getCategoryColor(categoryId)}`}>
                      {getCategoryIcon(categoryId)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                    <span className="text-sm text-gray-500">({categoryVideos.length} videos)</span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryVideos.map((video) => {
                      const isBookmarked = bookmarkedVideos.includes(video.id);
                      const progress = watchProgress[video.id]?.progress || 0;

                      return (
                        <div
                          key={video.id}
                          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
                        >
                          <div
                            className="relative h-48 overflow-hidden"
                            onClick={() => {
                              setCurrentVideo(video);
                              setShowVideoModal(true);
                              setIsPlaying(true);
                              trackVideoView(video);
                            }}
                          >
                            {video.thumbnail ? (
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <HiOutlinePlayCircle className="w-12 h-12 text-white/50" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                            {video.duration && (
                              <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">
                                {formatDuration(video.duration)}
                              </span>
                            )}
                            {video.level && (
                              <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(video.level)}`}>
                                {video.level}
                              </span>
                            )}
                            {progress > 0 && progress < 95 && (
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">
                                {video.title}
                              </h4>
                              <button
                                onClick={(e) => toggleBookmark(video.id, e)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-yellow-500 transition-colors"
                              >
                                <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                              </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{video.description}</p>
                            <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                              <div className="flex items-center gap-2">
                                <span>{video.views?.toLocaleString() || 0} views</span>
                                {video.instructor && <span>• {video.instructor.name}</span>}
                              </div>
                              <button
                                onClick={(e) => shareVideoHandler(video, e)}
                                className="p-1 hover:text-blue-600 transition-colors"
                              >
                                <HiOutlineShare className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {filteredVideos.map((video) => {
              const isBookmarked = bookmarkedVideos.includes(video.id);
              const progress = watchProgress[video.id]?.progress || 0;

              return (
                <div
                  key={video.id}
                  onClick={() => {
                    setCurrentVideo(video);
                    setShowVideoModal(true);
                    setIsPlaying(true);
                    trackVideoView(video);
                  }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="relative w-40 h-24 rounded-lg overflow-hidden shrink-0">
                    {video.thumbnail ? (
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <HiOutlinePlayCircle className="w-6 h-6 text-white/50" />
                      </div>
                    )}
                    {video.duration && (
                      <span className="absolute bottom-1 right-1 text-xs bg-black/70 text-white px-1.5 py-0.5 rounded">
                        {formatDuration(video.duration)}
                      </span>
                    )}
                    {progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{video.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">{video.description}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span>{video.views?.toLocaleString() || 0} views</span>
                      {video.level && <span className={`px-1.5 py-0.5 rounded-full ${getLevelBadge(video.level)}`}>{video.level}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleBookmark(video.id, e)}
                      className="p-2 rounded-lg text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => shareVideoHandler(video, e)}
                      className="p-2 rounded-lg text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <HiOutlineShare className="w-4 h-4" />
                    </button>
                    <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Video Player Modal */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{currentVideo.title}</h3>
                  <p className="text-blue-100 text-xs">
                    {currentVideo.instructor?.name} • {formatDuration(currentVideo.duration)} • {currentVideo.views?.toLocaleString()} views
                  </p>
                </div>
                <button onClick={() => setShowVideoModal(false)} className="text-white hover:text-gray-200">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
              <div className="relative">
                <video
                  ref={videoRef}
                  src={currentVideo.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
                  className="w-full aspect-video"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls={false}
                  autoPlay
                />

                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePlayPause} className="text-white hover:text-blue-400 transition-colors">
                      {isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}
                    </button>
                    <button onClick={handleMute} className="text-white hover:text-blue-400 transition-colors">
                      {isMuted ? <HiOutlineVolumeOff className="w-5 h-5" /> : <HiOutlineVolumeUp className="w-5 h-5" />}
                    </button>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-white text-xs">{formatTime(currentTime)}</span>
                      <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <span className="text-white text-xs">{formatTime(duration)}</span>
                    </div>
                    <button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400 transition-colors">
                      {playbackSpeed}x
                    </button>
                    {currentVideo.downloadUrl && (
                      <a href={currentVideo.downloadUrl} download className="text-white hover:text-blue-400 transition-colors">
                        <HiOutlineDownload className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gray-900 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-400">Instructor:</span>
                    <span className="text-white">{currentVideo.instructor?.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleBookmark(currentVideo.id)}
                      className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm flex items-center gap-1"
                    >
                      <HiOutlineBookmark className="w-4 h-4" />
                      Bookmark
                    </button>
                    <button
                      onClick={() => shareVideoHandler(currentVideo)}
                      className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm flex items-center gap-1"
                    >
                      <HiOutlineShare className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
                {currentVideo.transcript && (
                  <div className="mt-3 p-3 bg-gray-800 rounded-lg max-h-32 overflow-y-auto">
                    <p className="text-xs text-gray-300">{currentVideo.transcript}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Video</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareVideo.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareVideo.title)}&body=${encodeURIComponent(`${shareVideo.title}\n\nWatch here: ${window.location.origin}/tutorials/${shareVideo.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Playlist Modal */}
        {showPlaylistModal && selectedPlaylist && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPlaylistModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedPlaylist.title}</h3>
                  <button onClick={() => setShowPlaylistModal(false)} className="text-white">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selectedPlaylist.description}</p>
                <div className="space-y-2">
                  {selectedPlaylist.videos?.map((video, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentVideo(video);
                        setShowVideoModal(true);
                        setShowPlaylistModal(false);
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                    >
                      <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <HiOutlinePlay className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{video.title}</p>
                        <p className="text-xs text-gray-500">{video.duration}</p>
                      </div>
                      <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setCurrentVideo(selectedPlaylist.videos?.[0]);
                    setShowVideoModal(true);
                    setShowPlaylistModal(false);
                  }}
                  className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-semibold"
                >
                  Start Playlist
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineAcademicCap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Master the Platform?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for regular tutorials and updates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlinePlay className="w-5 h-5" />
              Subscribe on YouTube
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              <HiOutlineBell className="w-5 h-5" />
              Get Notifications
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        input[type="range"] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          background: #4B5563;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3B82F6;
          margin-top: -4px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default VideoTutorialsSection1;