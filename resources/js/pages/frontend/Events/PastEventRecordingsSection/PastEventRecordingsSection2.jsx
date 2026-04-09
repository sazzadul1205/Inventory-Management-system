// page/frontend/Events/PastEventRecordingsSection/PastEventRecordingsSection2.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineVideoCamera,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineThumbUp as ThumbUpIcon,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineEye, HiOutlineTrophy, } from 'react-icons/hi2';
import {
  MdOutlinePlaylistAdd as HiOutlinePlaylist,
  MdOutlineHistory as HiOutlineHistory,
} from "react-icons/md";

const PastEventRecordingsSection2 = ({ config }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarkedRecordings, setBookmarkedRecordings] = useState([]);
  const [likedRecordings, setLikedRecordings] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchProgress, setWatchProgress] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareRecording, setShareRecording] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [notesRecording, setNotesRecording] = useState(null);
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState({});
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateRecording, setCertificateRecording] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [ratingRecording, setRatingRecording] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratingComment, setRatingComment] = useState('');
  const [userRatings, setUserRatings] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const videoRef = useRef(null);

  // Get data from config
  const recordings = useMemo(() => config?.recordings || [], [config?.recordings]);
  const playlists = config?.playlists || [];
  const stats = config?.stats || [];
  const featuredRecordingId = config?.featuredRecordingId || (recordings[0]?.id);

  const featuredRecording = recordings.find(r => r.id === featuredRecordingId) || recordings[0];

  // Get unique categories, years, and types
  const categories = useMemo(() => {
    const cats = new Set(recordings.map(r => r.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [recordings]);

  const years = useMemo(() => {
    const yrs = new Set(recordings.map(r => r.year).filter(Boolean));
    return ['all', ...Array.from(yrs).sort((a, b) => b - a)];
  }, [recordings]);

  const types = useMemo(() => {
    const tys = new Set(recordings.map(r => r.type).filter(Boolean));
    return ['all', ...Array.from(tys)];
  }, [recordings]);

  const tabs = config?.tabs || [
    { id: 'all', label: 'All Recordings', icon: 'video' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'playlists', label: 'Playlists', icon: 'playlist' },
    { id: 'continue', label: 'Continue Watching', icon: 'history' },
    { id: 'bookmarked', label: 'My Bookmarks', icon: 'bookmark' },
  ];

  // Load data from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedRecordings');
    if (savedBookmarks) setBookmarkedRecordings(JSON.parse(savedBookmarks));

    const savedLikes = localStorage.getItem('likedRecordings');
    if (savedLikes) setLikedRecordings(JSON.parse(savedLikes));

    const savedHistory = localStorage.getItem('watchHistory');
    if (savedHistory) setWatchHistory(JSON.parse(savedHistory));

    const savedProgress = localStorage.getItem('watchProgress');
    if (savedProgress) setWatchProgress(JSON.parse(savedProgress));

    const savedNotes = localStorage.getItem('recordingNotes');
    if (savedNotes) setSavedNotes(JSON.parse(savedNotes));

    const savedRatings = localStorage.getItem('userRatings');
    if (savedRatings) setUserRatings(JSON.parse(savedRatings));
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarkedRecordings', JSON.stringify(bookmarkedRecordings));
  }, [bookmarkedRecordings]);

  useEffect(() => {
    localStorage.setItem('likedRecordings', JSON.stringify(likedRecordings));
  }, [likedRecordings]);

  useEffect(() => {
    localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
  }, [watchHistory]);

  useEffect(() => {
    localStorage.setItem('watchProgress', JSON.stringify(watchProgress));
  }, [watchProgress]);

  useEffect(() => {
    localStorage.setItem('recordingNotes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  useEffect(() => {
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
  }, [userRatings]);

  // Generate recommendations based on watch history and likes
  useEffect(() => {
    if (recordings.length > 0) {
      // Get watched categories
      const watchedCategories = watchHistory
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);

      const likedCategories = likedRecordings
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);

      const preferredCategories = [...new Set([...watchedCategories, ...likedCategories])];

      // Recommend recordings from preferred categories not yet watched
      const recommended = recordings
        .filter(r => !watchHistory.includes(r.id) && preferredCategories.includes(r.category))
        .slice(0, 6);

      setRecommendations(recommended);

      // Continue watching (recordings with progress > 0 and < 100)
      const inProgress = recordings
        .filter(r => watchProgress[r.id] && watchProgress[r.id] > 0 && watchProgress[r.id] < 95)
        .slice(0, 4);

      setContinueWatching(inProgress);
    }
  }, [watchHistory, likedRecordings, recordings, watchProgress]);

  // Filter recordings
  const filterRecordings = (recordingList) => {
    return recordingList.filter((r) => {
      const matchesSearch = searchQuery === '' ||
        r.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.speaker?.name?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || r.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || r.year === selectedYear;
      const matchesType = selectedType === 'all' || r.type === selectedType;

      return matchesSearch && matchesCategory && matchesYear && matchesType;
    });
  };

  // Sort by view count for most viewed tab
  const featuredRecordings = recordings.filter(r => r.isFeatured || r.id === featuredRecordingId);

  let displayedRecordings = [];
  if (activeTab === 'all') {
    displayedRecordings = filterRecordings(recordings);
  } else if (activeTab === 'featured') {
    displayedRecordings = filterRecordings(featuredRecordings);
  } else if (activeTab === 'playlists') {
    displayedRecordings = playlists;
  } else if (activeTab === 'continue') {
    displayedRecordings = continueWatching;
  } else if (activeTab === 'bookmarked') {
    displayedRecordings = filterRecordings(recordings.filter(r => bookmarkedRecordings.includes(r.id)));
  }

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
        setWatchProgress(prev => ({
          ...prev,
          [currentVideo.id]: progress
        }));
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
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

  // Playlist navigation
  const playNext = () => {
    if (currentPlaylist.length > 0 && playlistIndex < currentPlaylist.length - 1) {
      const nextIndex = playlistIndex + 1;
      setPlaylistIndex(nextIndex);
      setCurrentVideo(currentPlaylist[nextIndex]);
      // Save watch history
      if (currentVideo && !watchHistory.includes(currentVideo.id)) {
        setWatchHistory(prev => [currentVideo.id, ...prev].slice(0, 50));
      }
    }
  };

  const playPrevious = () => {
    if (currentPlaylist.length > 0 && playlistIndex > 0) {
      const prevIndex = playlistIndex - 1;
      setPlaylistIndex(prevIndex);
      setCurrentVideo(currentPlaylist[prevIndex]);
    }
  };

  const playPlaylist = (playlist) => {
    setCurrentPlaylist(playlist.videos);
    setPlaylistIndex(0);
    setCurrentVideo(playlist.videos[0]);
    setShowVideoModal(true);
    setIsPlaying(true);
    setShowPlaylist(true);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Bookmark recording
  const toggleBookmark = (recordingId, e) => {
    e.stopPropagation();
    if (bookmarkedRecordings.includes(recordingId)) {
      setBookmarkedRecordings(bookmarkedRecordings.filter(id => id !== recordingId));
    } else {
      setBookmarkedRecordings([...bookmarkedRecordings, recordingId]);
    }
  };

  // Like recording
  const toggleLike = (recordingId, e) => {
    e.stopPropagation();
    if (likedRecordings.includes(recordingId)) {
      setLikedRecordings(likedRecordings.filter(id => id !== recordingId));
    } else {
      setLikedRecordings([...likedRecordings, recordingId]);
    }
  };

  // Save notes
  const saveNotes = () => {
    if (notesRecording) {
      setSavedNotes(prev => ({
        ...prev,
        [notesRecording.id]: notes
      }));
      setShowNotesModal(false);
      setNotes('');
    }
  };

  // Submit rating
  const submitRating = () => {
    if (ratingRecording && rating > 0) {
      setUserRatings(prev => ({
        ...prev,
        [ratingRecording.id]: { rating, comment: ratingComment, date: new Date().toISOString() }
      }));
      setShowRatingModal(false);
      setRating(0);
      setRatingComment('');
    }
  };

  // Share recording
  const shareRecordingHandler = (recording, e) => {
    e.stopPropagation();
    setShareRecording(recording);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareRecording) {
      navigator.clipboard.writeText(`${window.location.origin}/recordings/${shareRecording.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Download certificate
  const downloadCertificate = () => {
    alert('Certificate downloaded!');
    setShowCertificateModal(false);
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // Get category badge color
  const getCategoryBadge = (category) => {
    switch (category?.toLowerCase()) {
      case 'webinar': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'conference': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workshop': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'summit': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'panel': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Past Event Recordings Hub"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "On-Demand Library"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Explore Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Video Library"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Access hundreds of recorded sessions, create playlists, track your progress, and get personalized recommendations based on your interests."}
            </p>
          </div>
          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Continue Watching Row */}
        {continueWatching.length > 0 && activeTab === 'all' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineHistory className="w-5 h-5 text-blue-600" />
                Continue Watching
              </h3>
              <button onClick={() => setActiveTab('continue')} className="text-sm text-blue-600 hover:underline">View All →</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continueWatching.map((recording) => {
                const progress = watchProgress[recording.id] || 0;
                return (
                  <div
                    key={recording.id}
                    onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      {recording.thumbnail ? (
                        <img src={recording.thumbnail} alt={recording.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-full aspect-video bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <HiOutlineVideoCamera className="w-8 h-8 text-white/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <HiOutlinePlay className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2 line-clamp-1">{recording.title}</p>
                    <p className="text-xs text-gray-500">{Math.round(progress)}% watched</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recommended for You Row */}
        {recommendations.length > 0 && activeTab === 'all' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineSparkles className="w-5 h-5 text-purple-600" />
                Recommended for You
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {recommendations.map((recording) => (
                <div
                  key={recording.id}
                  onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    {recording.thumbnail ? (
                      <img src={recording.thumbnail} alt={recording.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full aspect-video bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <HiOutlineVideoCamera className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <HiOutlinePlay className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                    {recording.duration && (
                      <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-1.5 py-0.5 rounded">
                        {recording.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-2 line-clamp-2">{recording.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Recording Banner */}
        {featuredRecording && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Recording</span>
                {featuredRecording.category && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{featuredRecording.category}</span>}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredRecording.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredRecording.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredRecording.date && <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDate(featuredRecording.date)}</span></div>}
                {featuredRecording.duration && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{featuredRecording.duration}</span></div>}
                {featuredRecording.speaker?.name && <div className="flex items-center gap-2"><HiOutlineUser className="w-4 h-4" /><span>{featuredRecording.speaker.name}</span></div>}
                {featuredRecording.viewCount && <div className="flex items-center gap-2"><HiOutlineEye className="w-4 h-4" /><span>{featuredRecording.viewCount.toLocaleString()} views</span></div>}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setCurrentVideo(featuredRecording); setShowVideoModal(true); setIsPlaying(true); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlinePlay className="w-5 h-5" />Watch Now
                </button>
                {featuredRecording.slidesUrl && (
                  <button onClick={() => window.open(featuredRecording.slidesUrl, '_blank')} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                    <HiOutlineDocumentText className="w-5 h-5" />Download Slides
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> : tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> : tab.icon === 'playlist' ? <HiOutlinePlaylist className="w-4 h-4" /> : tab.icon === 'history' ? <HiOutlineHistory className="w-4 h-4" /> : <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'bookmarked' && <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{bookmarkedRecordings.length}</span>}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1"><div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search recordings..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"><HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}</button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div><label className="block text-sm font-medium mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-2">Year</label><select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{years.map(y => <option key={y} value={y}>{y === 'all' ? 'All Years' : y}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-2">Event Type</label><select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{types.map(t => <option key={t} value={t}>{t === 'all' ? 'All Types' : t}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* Playlists View */}
        {activeTab === 'playlists' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {playlists.map((playlist) => (
              <div key={playlist.id} onClick={() => playPlaylist(playlist)} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  {playlist.thumbnail ? (
                    <img src={playlist.thumbnail} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <HiOutlinePlaylist className="w-12 h-12 text-white/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">
                    {playlist.videos.length} videos
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{playlist.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{playlist.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{playlist.videos.length} sessions • {playlist.duration}</span>
                    <span className="text-blue-600 text-sm font-semibold">View Playlist →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recordings Grid/List */}
        {activeTab !== 'playlists' && displayedRecordings.length === 0 ? (
          <div className="text-center py-12"><HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" /><p className="text-gray-500 dark:text-gray-400">No recordings found.</p></div>
        ) : activeTab !== 'playlists' && viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedRecordings.map((recording) => {
              const isBookmarked = bookmarkedRecordings.includes(recording.id);
              const isLiked = likedRecordings.includes(recording.id);
              const progress = watchProgress[recording.id] || 0;
              const userRating = userRatings[recording.id];

              return (
                <div key={recording.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}>
                    {recording.thumbnail ? (
                      <img src={recording.thumbnail} alt={recording.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <HiOutlineVideoCamera className="w-12 h-12 text-white/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {recording.duration && <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">{recording.duration}</span>}
                    {recording.category && <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getCategoryBadge(recording.category)}`}>{recording.category}</span>}
                    {progress > 0 && progress < 95 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 flex-1">{recording.title}</h3>
                      <div className="flex gap-1">
                        <button onClick={(e) => toggleBookmark(recording.id, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-yellow-500 transition-colors" title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}>
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                        </button>
                        <button onClick={(e) => toggleLike(recording.id, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-red-500 transition-colors" title={isLiked ? 'Unlike' : 'Like'}>
                          <ThumbUpIcon className={`w-4 h-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{recording.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                      {recording.date && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-3 h-3" /><span>{formatDate(recording.date)}</span></div>}
                      {recording.speaker?.name && <div className="flex items-center gap-1"><HiOutlineUser className="w-3 h-3" /><span>{recording.speaker.name}</span></div>}
                      {recording.viewCount && <div className="flex items-center gap-1"><HiOutlineEye className="w-3 h-3" /><span>{recording.viewCount.toLocaleString()} views</span></div>}
                    </div>
                    {userRating && (
                      <div className="mb-3 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className={`w-3 h-3 ${i < userRating.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">Your rating</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                        <HiOutlinePlay className="w-4 h-4" />Watch Now
                      </button>
                      <button onClick={(e) => shareRecordingHandler(recording, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm"><HiOutlineShare className="w-4 h-4" /></button>
                      <button onClick={() => { setRatingRecording(recording); setRating(userRating?.rating || 0); setRatingComment(userRating?.comment || ''); setShowRatingModal(true); }} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm"><HiOutlineStar className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : activeTab !== 'playlists' && (
          <div className="space-y-4 mb-12">
            {displayedRecordings.map((recording) => (
              <div key={recording.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                    {recording.thumbnail ? <img src={recording.thumbnail} alt={recording.title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center"><HiOutlineVideoCamera className="w-8 h-8 text-white/50" /></div>}
                    {recording.duration && <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">{recording.duration}</span>}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{recording.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{recording.description}</p>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                      {recording.date && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDate(recording.date)}</div>}
                      {recording.speaker?.name && <div className="flex items-center gap-1"><HiOutlineUser className="w-4 h-4" />{recording.speaker.name}</div>}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Watch Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Player Modal with Playlist */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">{currentVideo.title}</h3><p className="text-blue-100 text-xs">{currentVideo.speaker?.name} • {formatDate(currentVideo.date)} • {currentVideo.duration}</p></div>
                <button onClick={() => setShowVideoModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <video ref={videoRef} src={currentVideo.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} className="w-full aspect-video" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} controls={false} autoPlay />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <button onClick={handlePlayPause} className="text-white hover:text-blue-400">{isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}</button>
                      <button onClick={handleMute} className="text-white hover:text-blue-400">{isMuted ? <HiOutlineVolumeOff className="w-5 h-5" /> : <HiOutlineVolumeUp className="w-5 h-5" />}</button>
                      <div className="flex-1 flex items-center gap-2"><span className="text-white text-xs">{formatTime(currentTime)}</span><input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500" /><span className="text-white text-xs">{formatTime(duration)}</span></div>
                      <button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400">{playbackSpeed}x</button>
                      <button onClick={() => setShowTranscript(!showTranscript)} className="text-white text-sm hover:text-blue-400">Transcript</button>
                      {currentVideo.downloadUrl && <a href={currentVideo.downloadUrl} download className="text-white hover:text-blue-400"><HiOutlineDownload className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  {showTranscript && currentVideo.transcript && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-48 overflow-y-auto">
                      <h4 className="text-white font-semibold mb-3">Transcript</h4>
                      <div className="space-y-2">{currentVideo.transcript.map((segment, idx) => (<div key={idx} className="flex gap-3 text-sm"><span className="text-blue-400 font-mono min-w-16">{segment.time}</span><p className="text-gray-300">{segment.text}</p></div>))}</div>
                    </div>
                  )}
                  <div className="p-4 bg-gray-900 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm"><span className="text-gray-400">Speaker:</span><span className="text-white">{currentVideo.speaker?.name}</span></div>
                      <div className="flex gap-2">
                        <button onClick={() => { setRatingRecording(currentVideo); setRating(userRatings[currentVideo.id]?.rating || 0); setRatingComment(userRatings[currentVideo.id]?.comment || ''); setShowRatingModal(true); }} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm">Rate</button>
                        <button onClick={() => { setNotesRecording(currentVideo); setNotes(savedNotes[currentVideo.id] || ''); setShowNotesModal(true); }} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm">Notes</button>
                        {currentVideo.certificateAvailable && <button onClick={() => { setCertificateRecording(currentVideo); setShowCertificateModal(true); }} className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">Certificate</button>}
                      </div>
                    </div>
                  </div>
                </div>
                {showPlaylist && currentPlaylist.length > 0 && (
                  <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto max-h-150">
                    <div className="p-3 border-b border-gray-700"><h4 className="text-white font-semibold">Playlist ({playlistIndex + 1}/{currentPlaylist.length})</h4></div>
                    <div className="divide-y divide-gray-700">
                      {currentPlaylist.map((video, idx) => (
                        <div key={video.id} onClick={() => { setPlaylistIndex(idx); setCurrentVideo(video); }} className={`p-3 cursor-pointer hover:bg-gray-800 transition-colors ${idx === playlistIndex ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}>
                          <div className="flex gap-3"><div className="w-16 h-12 bg-gray-800 rounded overflow-hidden shrink-0">{video.thumbnail ? <img src={video.thumbnail} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-blue-600/20 flex items-center justify-center"><HiOutlinePlay className="w-4 h-4 text-gray-500" /></div>}</div><div><p className="text-sm text-white line-clamp-2">{video.title}</p><p className="text-xs text-gray-400 mt-1">{video.duration}</p></div></div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 flex gap-2">
                      <button onClick={playPrevious} disabled={playlistIndex === 0} className="flex-1 py-2 bg-gray-700 text-white rounded-lg text-sm disabled:opacity-50">Previous</button>
                      <button onClick={playNext} disabled={playlistIndex === currentPlaylist.length - 1} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50">Next</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rating Modal */}
        {showRatingModal && ratingRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRatingModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-yellow-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Rate This Recording</h3><button onClick={() => setShowRatingModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{ratingRecording.title}</p>
                <div className="flex justify-center gap-2 mb-4">{[...Array(5)].map((_, i) => (<button key={i} onClick={() => setRating(i + 1)} className={`text-3xl transition-all ${rating > i ? 'text-yellow-500' : 'text-gray-300'}`}>★</button>))}</div>
                <textarea value={ratingComment} onChange={(e) => setRatingComment(e.target.value)} placeholder="Share your feedback (optional)" rows="3" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" />
                <button onClick={submitRating} className="w-full mt-4 py-3 bg-yellow-600 text-white rounded-xl font-semibold">Submit Rating</button>
              </div>
            </div>
          </div>
        )}

        {/* Notes Modal */}
        {showNotesModal && notesRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNotesModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">My Notes</h3><button onClick={() => setShowNotesModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Take notes about this recording..." rows="6" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button onClick={saveNotes} className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold">Save Notes</button></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Recording</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareRecording.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareRecording.title)}&body=${encodeURIComponent(`${shareRecording.title}\n\nWatch here: ${window.location.origin}/recordings/${shareRecording.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Certificate of Completion</h3><button onClick={() => setShowCertificateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineBadgeCheck className="w-10 h-10 text-green-600" /></div><h4 className="text-xl font-bold mb-2">{certificateRecording.title}</h4><button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"><HiOutlineDownload className="w-5 h-5" />Download Certificate</button></div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss New Content</h3>
          <p className="text-blue-100 mb-6">Subscribe to get notified when new recordings are added to the library.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineMail className="w-5 h-5" />Subscribe for Updates</button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        input[type="range"] { -webkit-appearance: none; background: transparent; }
        input[type="range"]:focus { outline: none; }
        input[type="range"]::-webkit-slider-runnable-track { background: #4B5563; height: 4px; border-radius: 2px; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; height: 12px; width: 12px; border-radius: 50%; background: #3B82F6; margin-top: -4px; cursor: pointer; }
      `}</style>
    </section>
  );
};

export default PastEventRecordingsSection2;