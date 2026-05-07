// page/frontend/Events/PastEventRecordingsSection/PastEventRecordingsSection2.jsx

/**
 * Past Event Recordings Section II - Personalized Video Library with Playlists & Recommendations
 *
 * Unique Design Elements:
 * - Stats Cards for Library Metrics (Recordings, Hours, Views, Playlists)
 * - Personalized "Continue Watching" Row with Progress Bars
 * - AI-Powered "Recommended for You" Row
 * - Playlist Support with Thumbnail and Video Count
 * - Video Player with Custom Controls and Playlist Sidebar
 * - Like and Bookmark System for Content Curation
 * - Rating System with 5-Star Feedback
 * - Watch History and Progress Tracking
 * - Notes Taking for Each Recording
 * - Certificate Download for Verified Completion
 * - Share Modal for Easy Content Promotion
 * - Search and Filter System
 * - Grid/List View Toggle
 * - Fully Responsive Design
 *
 * All icons from react-icons (hi, hi2, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and Material Design Icons
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
  HiOutlineThumbUp,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineEye, HiOutlineTrophy } from 'react-icons/hi2';
import {
  MdOutlinePlaylistAdd,
  MdOutlineHistory,
} from "react-icons/md";

const PastEventRecordingsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [savedNotes, setSavedNotes] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userRatings, setUserRatings] = useState({});
  const [watchHistory, setWatchHistory] = useState([]);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [watchProgress, setWatchProgress] = useState({});
  const [ratingComment, setRatingComment] = useState('');
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [likedRecordings, setLikedRecordings] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [shareRecording, setShareRecording] = useState(null);
  const [notesRecording, setNotesRecording] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [continueWatching, setContinueWatching] = useState([]);
  const [ratingRecording, setRatingRecording] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedRecordings, setBookmarkedRecordings] = useState([]);
  const [certificateRecording, setCertificateRecording] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // ====================== REFS ====================
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const recordings = useMemo(() => config?.recordings || [], [config?.recordings]);
  const playlists = useMemo(() => config?.playlists || [], [config?.playlists]);
  const stats = config?.stats || [];
  const featuredRecordingId = config?.featuredRecordingId || (recordings[0]?.id);
  const featuredRecording = recordings.find(r => r.id === featuredRecordingId) || recordings[0];

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

  // ==================== LOCAL STORAGE & EFFECTS ====================
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
      const watchedCategories = watchHistory
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);
      const likedCategories = likedRecordings
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);
      const preferredCategories = [...new Set([...watchedCategories, ...likedCategories])];

      const recommended = recordings
        .filter(r => !watchHistory.includes(r.id) && preferredCategories.includes(r.category))
        .slice(0, 6);
      setRecommendations(recommended);

      const inProgress = recordings
        .filter(r => watchProgress[r.id] && watchProgress[r.id] > 0 && watchProgress[r.id] < 95)
        .slice(0, 4);
      setContinueWatching(inProgress);
    }
  }, [watchHistory, likedRecordings, recordings, watchProgress]);

  // ==================== HELPER FUNCTIONS ====================
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

  // ==================== VIDEO PLAYER CONTROLS ====================
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

  const playNext = () => {
    if (currentPlaylist.length > 0 && playlistIndex < currentPlaylist.length - 1) {
      const nextIndex = playlistIndex + 1;
      setPlaylistIndex(nextIndex);
      setCurrentVideo(currentPlaylist[nextIndex]);
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

  // ==================== UI HANDLERS ====================
  const toggleBookmark = (recordingId, e) => {
    e.stopPropagation();
    setBookmarkedRecordings(prev =>
      prev.includes(recordingId) ? prev.filter(id => id !== recordingId) : [...prev, recordingId]
    );
  };

  const toggleLike = (recordingId, e) => {
    e.stopPropagation();
    setLikedRecordings(prev =>
      prev.includes(recordingId) ? prev.filter(id => id !== recordingId) : [...prev, recordingId]
    );
  };

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

  const downloadCertificate = () => {
    alert('Certificate downloaded!');
    setShowCertificateModal(false);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const getCategoryBadge = (category) => {
    switch (category?.toLowerCase()) {
      case 'webinar': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'conference': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workshop': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
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
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
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

        {/* ==================== CONTINUE WATCHING ROW ==================== */}
        {continueWatching.length > 0 && activeTab === 'all' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <MdOutlineHistory className="w-5 h-5 text-blue-600" />
                Continue Watching
              </h3>
              <button onClick={() => setActiveTab('continue')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline" aria-label="View all">View All →</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continueWatching.map((recording) => {
                const progress = watchProgress[recording.id] || 0;
                return (
                  <div
                    key={recording.id}
                    onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                    className="group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      {recording.thumbnail ? (
                        <img src={recording.thumbnail} alt={recording.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                    <p className="text-xs text-gray-500 dark:text-gray-400">{Math.round(progress)}% watched</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== RECOMMENDED FOR YOU ROW ==================== */}
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    {recording.thumbnail ? (
                      <img src={recording.thumbnail} alt={recording.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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

        {/* ==================== FEATURED RECORDING BANNER ==================== */}
        {featuredRecording && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Recording</span>
                {featuredRecording.category && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{featuredRecording.category}</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredRecording.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredRecording.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredRecording.date && (
                  <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDate(featuredRecording.date)}</span></div>
                )}
                {featuredRecording.duration && (
                  <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{featuredRecording.duration}</span></div>
                )}
                {featuredRecording.speaker?.name && (
                  <div className="flex items-center gap-2"><HiOutlineUser className="w-4 h-4" /><span>{featuredRecording.speaker.name}</span></div>
                )}
                {featuredRecording.viewCount && (
                  <div className="flex items-center gap-2"><HiOutlineEye className="w-4 h-4" /><span>{featuredRecording.viewCount.toLocaleString()} views</span></div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { setCurrentVideo(featuredRecording); setShowVideoModal(true); setIsPlaying(true); }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Watch now"
                >
                  <HiOutlinePlay className="w-5 h-5" />Watch Now
                </button>
                {featuredRecording.slidesUrl && (
                  <button
                    onClick={() => window.open(featuredRecording.slidesUrl, '_blank')}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                    aria-label="Download slides"
                  >
                    <HiOutlineDocumentText className="w-5 h-5" />Download Slides
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'playlist' ? <MdOutlinePlaylistAdd className="w-4 h-4" /> :
                    tab.icon === 'history' ? <MdOutlineHistory className="w-4 h-4" /> :
                      <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'bookmarked' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{bookmarkedRecordings.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recordings..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search recordings"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="Grid view">
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`} aria-label="List view">
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by category">
                    {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                  <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by year">
                    {years.map(y => <option key={y} value={y}>{y === 'all' ? 'All Years' : y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                  <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by event type">
                    {types.map(t => <option key={t} value={t}>{t === 'all' ? 'All Types' : t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== PLAYLISTS VIEW ==================== */}
        {activeTab === 'playlists' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedRecordings.map((playlist) => (
              <div key={playlist.id} onClick={() => playPlaylist(playlist)} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && playPlaylist(playlist)}>
                <div className="relative h-40 overflow-hidden">
                  {playlist.thumbnail ? (
                    <img src={playlist.thumbnail} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <MdOutlinePlaylistAdd className="w-12 h-12 text-white/50" />
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
                    <span className="text-sm text-gray-500 dark:text-gray-400">{playlist.videos.length} sessions • {playlist.duration}</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">View Playlist →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== RECORDINGS GRID ==================== */}
        {activeTab !== 'playlists' && displayedRecordings.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No recordings found.</p>
          </div>
        ) : activeTab !== 'playlists' && viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedRecordings.map((recording) => {
              const isBookmarked = bookmarkedRecordings.includes(recording.id);
              const isLiked = likedRecordings.includes(recording.id);
              const progress = watchProgress[recording.id] || 0;
              const userRating = userRatings[recording.id];

              return (
                <div key={recording.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}>
                    {recording.thumbnail ? (
                      <img src={recording.thumbnail} alt={recording.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                    {recording.duration && (
                      <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">{recording.duration}</span>
                    )}
                    {recording.category && (
                      <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getCategoryBadge(recording.category)}`}>
                        {recording.category}
                      </span>
                    )}
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
                        <button onClick={(e) => toggleBookmark(recording.id, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors" title={isBookmarked ? 'Remove bookmark' : 'Bookmark'} aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark recording'}>
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                        </button>
                        <button onClick={(e) => toggleLike(recording.id, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors" title={isLiked ? 'Unlike' : 'Like'} aria-label={isLiked ? 'Unlike' : 'Like recording'}>
                          <HiOutlineThumbUp className={`w-4 h-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{recording.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
                      {recording.date && (
                        <div className="flex items-center gap-1"><HiOutlineCalendar className="w-3 h-3" /><span>{formatDate(recording.date)}</span></div>
                      )}
                      {recording.speaker?.name && (
                        <div className="flex items-center gap-1"><HiOutlineUser className="w-3 h-3" /><span>{recording.speaker.name}</span></div>
                      )}
                      {recording.viewCount && (
                        <div className="flex items-center gap-1"><HiOutlineEye className="w-3 h-3" /><span>{recording.viewCount.toLocaleString()} views</span></div>
                      )}
                    </div>
                    {userRating && (
                      <div className="mb-3 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className={`w-3 h-3 ${i < userRating.rating ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                        ))}
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Your rating</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors" aria-label="Watch recording">
                        <HiOutlinePlay className="w-4 h-4" />Watch Now
                      </button>
                      <button onClick={(e) => shareRecordingHandler(recording, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share recording">
                        <HiOutlineShare className="w-4 h-4" />
                      </button>
                      <button onClick={() => { setRatingRecording(recording); setRating(userRating?.rating || 0); setRatingComment(userRating?.comment || ''); setShowRatingModal(true); }} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Rate recording">
                        <HiOutlineStar className="w-4 h-4" />
                      </button>
                    </div>
                    {recording.certificateAvailable && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 py-1.5 rounded-lg">
                        <HiOutlineBadgeCheck className="w-3 h-3" />
                        <span>Certificate available upon completion</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : activeTab !== 'playlists' && (
          <div className="space-y-4 mb-12">
            {displayedRecordings.map((recording) => (
              <div key={recording.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                    {recording.thumbnail ? <img src={recording.thumbnail} alt={recording.title} className="w-full h-full object-cover" loading="lazy" /> : <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center"><HiOutlineVideoCamera className="w-8 h-8 text-white/50" /></div>}
                    {recording.duration && <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">{recording.duration}</span>}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{recording.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{recording.description}</p>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      {recording.date && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDate(recording.date)}</div>}
                      {recording.speaker?.name && <div className="flex items-center gap-1"><HiOutlineUser className="w-4 h-4" />{recording.speaker.name}</div>}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Watch now">Watch Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== VIDEO PLAYER MODAL WITH PLAYLIST ==================== */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={() => setShowVideoModal(false)} role="dialog" aria-label="Video Player" aria-modal="true">
            <div className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{currentVideo.title}</h3>
                  <p className="text-blue-100 text-xs">{currentVideo.speaker?.name} • {formatDate(currentVideo.date)} • {currentVideo.duration}</p>
                </div>
                <button onClick={() => setShowVideoModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close video">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
              <div className="flex">
                <div className="flex-1">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <button onClick={handlePlayPause} className="text-white hover:text-blue-400 transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
                        {isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}
                      </button>
                      <button onClick={handleMute} className="text-white hover:text-blue-400 transition-colors" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                        {isMuted ? <HiOutlineVolumeOff className="w-5 h-5" /> : <HiOutlineVolumeUp className="w-5 h-5" />}
                      </button>
                      <div className="flex-1 flex items-center gap-2">
                        <span className="text-white text-xs">{formatTime(currentTime)}</span>
                        <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500" aria-label="Video progress" />
                        <span className="text-white text-xs">{formatTime(duration)}</span>
                      </div>
                      <button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400 transition-colors" aria-label="Playback speed">
                        {playbackSpeed}x
                      </button>
                      <button onClick={() => setShowTranscript(!showTranscript)} className="text-white text-sm hover:text-blue-400 transition-colors" aria-label="Toggle transcript">
                        Transcript
                      </button>
                      {currentVideo.downloadUrl && (
                        <a href={currentVideo.downloadUrl} download className="text-white hover:text-blue-400 transition-colors" aria-label="Download video">
                          <HiOutlineDownload className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  {showTranscript && currentVideo.transcript && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-48 overflow-y-auto">
                      <h4 className="text-white font-semibold mb-3">Transcript</h4>
                      <div className="space-y-2">
                        {currentVideo.transcript.map((segment, idx) => (
                          <div key={idx} className="flex gap-3 text-sm">
                            <span className="text-blue-400 font-mono min-w-16">{segment.time}</span>
                            <p className="text-gray-300">{segment.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="p-4 bg-gray-900 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-400">Speaker:</span>
                        <span className="text-white">{currentVideo.speaker?.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => { setRatingRecording(currentVideo); setRating(userRatings[currentVideo.id]?.rating || 0); setRatingComment(userRatings[currentVideo.id]?.comment || ''); setShowRatingModal(true); }} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors" aria-label="Rate">Rate</button>
                        <button onClick={() => { setNotesRecording(currentVideo); setNotes(savedNotes[currentVideo.id] || ''); setShowNotesModal(true); }} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors" aria-label="Take notes">Notes</button>
                        {currentVideo.certificateAvailable && (
                          <button onClick={() => { setCertificateRecording(currentVideo); setShowCertificateModal(true); }} className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors" aria-label="Get certificate">Certificate</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {showPlaylist && currentPlaylist.length > 0 && (
                  <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto max-h-150">
                    <div className="p-3 border-b border-gray-700">
                      <h4 className="text-white font-semibold">Playlist ({playlistIndex + 1}/{currentPlaylist.length})</h4>
                    </div>
                    <div className="divide-y divide-gray-700">
                      {currentPlaylist.map((video, idx) => (
                        <div
                          key={video.id}
                          onClick={() => { setPlaylistIndex(idx); setCurrentVideo(video); }}
                          className={`p-3 cursor-pointer hover:bg-gray-800 transition-colors ${idx === playlistIndex ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setPlaylistIndex(idx)}
                        >
                          <div className="flex gap-3">
                            <div className="w-16 h-12 bg-gray-800 rounded overflow-hidden shrink-0">
                              {video.thumbnail ? <img src={video.thumbnail} className="w-full h-full object-cover" alt={video.title} /> : <div className="w-full h-full bg-blue-600/20 flex items-center justify-center"><HiOutlinePlay className="w-4 h-4 text-gray-500" /></div>}
                            </div>
                            <div>
                              <p className="text-sm text-white line-clamp-2">{video.title}</p>
                              <p className="text-xs text-gray-400 mt-1">{video.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 flex gap-2">
                      <button onClick={playPrevious} disabled={playlistIndex === 0} className="flex-1 py-2 bg-gray-700 text-white rounded-lg text-sm disabled:opacity-50 hover:bg-gray-600 transition-colors" aria-label="Previous video">Previous</button>
                      <button onClick={playNext} disabled={playlistIndex === currentPlaylist.length - 1} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50 hover:bg-blue-700 transition-colors" aria-label="Next video">Next</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== RATING MODAL ==================== */}
        {showRatingModal && ratingRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRatingModal(false)} role="dialog" aria-label="Rate Recording" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-yellow-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Rate This Recording</h3>
                  <button onClick={() => setShowRatingModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{ratingRecording.title}</p>
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <button key={i} onClick={() => setRating(i + 1)} className={`text-3xl transition-all duration-300 hover:scale-110 ${rating > i ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} aria-label={`Rate ${i + 1} stars`}>
                      ★
                    </button>
                  ))}
                </div>
                <textarea value={ratingComment} onChange={(e) => setRatingComment(e.target.value)} placeholder="Share your feedback (optional)" rows="3" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none" aria-label="Rating comment" />
                <button onClick={submitRating} className="w-full mt-4 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl font-semibold transition-all duration-300" aria-label="Submit rating">Submit Rating</button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NOTES MODAL ==================== */}
        {showNotesModal && notesRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNotesModal(false)} role="dialog" aria-label="Take Notes" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">My Notes</h3>
                  <button onClick={() => setShowNotesModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes about this recording..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                  aria-label="Notes text"
                />
                <button onClick={saveNotes} className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300" aria-label="Save notes">Save Notes</button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)} role="dialog" aria-label="Share Recording" aria-modal="true">
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Recording</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">{shareRecording.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Copy link">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareRecording.title)}&body=${encodeURIComponent(`${shareRecording.title}\n\nWatch here: ${window.location.origin}/recordings/${shareRecording.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share via email">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATE MODAL ==================== */}
        {showCertificateModal && certificateRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)} role="dialog" aria-label="Certificate of Completion" aria-modal="true">
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Certificate of Completion</h3>
                  <button onClick={() => setShowCertificateModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineBadgeCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateRecording.title}</h4>
                <button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300" aria-label="Download certificate">
                  <HiOutlineDownload className="w-5 h-5" />Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss New Content</h3>
          <p className="text-blue-100 mb-6">Subscribe to get notified when new recordings are added to the library.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Subscribe for updates">
            <HiOutlineMail className="w-5 h-5" />Subscribe for Updates
          </button>
        </div>
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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
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
        input[type="range"]:focus::-webkit-slider-runnable-track {
          background: #4B5563;
        }
      `}</style>
    </section>
  );
};

export default PastEventRecordingsSection2;