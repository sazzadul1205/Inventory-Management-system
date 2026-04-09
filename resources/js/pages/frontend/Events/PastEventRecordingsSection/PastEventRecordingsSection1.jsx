// page/frontend/Events/PastEventRecordingsSection/PastEventRecordingsSection1.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineVideoCamera,
  HiOutlineUsers,
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
  HiOutlinePencil,
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineRss, HiOutlineEye, HiOutlineTrophy, } from 'react-icons/hi2';

const PastEventRecordingsSection1 = ({ config }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarkedRecordings, setBookmarkedRecordings] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareRecording, setShareRecording] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [notesRecording, setNotesRecording] = useState(null);
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState({});
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateRecording, setCertificateRecording] = useState(null);
  const videoRef = useRef(null);

  // Get data from config
  const recordings = useMemo(() => config?.recordings || [], [config?.recordings]);
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
    { id: 'most-viewed', label: 'Most Viewed', icon: 'trending' },
    { id: 'bookmarked', label: 'My Bookmarks', icon: 'bookmark' },
  ];

  // Load bookmarks and notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedRecordings');
    if (saved) setBookmarkedRecordings(JSON.parse(saved));

    const savedNotes = localStorage.getItem('recordingNotes');
    if (savedNotes) setSavedNotes(JSON.parse(savedNotes));
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarkedRecordings', JSON.stringify(bookmarkedRecordings));
  }, [bookmarkedRecordings]);

  useEffect(() => {
    localStorage.setItem('recordingNotes', JSON.stringify(savedNotes));
  }, [savedNotes]);

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
  const mostViewedRecordings = [...recordings].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
  const featuredRecordings = recordings.filter(r => r.isFeatured || r.id === featuredRecordingId);

  let displayedRecordings = [];
  if (activeTab === 'all') {
    displayedRecordings = filterRecordings(recordings);
  } else if (activeTab === 'featured') {
    displayedRecordings = filterRecordings(featuredRecordings);
  } else if (activeTab === 'most-viewed') {
    displayedRecordings = filterRecordings(mostViewedRecordings);
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
      setCurrentTime(videoRef.current.currentTime);
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
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Past Event Recordings Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "On-Demand"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Watch"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Past Events"}</span> {config?.title?.suffix || "Any Time"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Access recordings of our past webinars, conferences, and workshops. Learn at your own pace and revisit key insights from industry experts."}
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'video' ? <HiOutlineVideoCamera className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineDownload className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Recording Banner */}
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
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {featuredRecording.category}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredRecording.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredRecording.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredRecording.date && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{formatDate(featuredRecording.date)}</span>
                  </div>
                )}
                {featuredRecording.duration && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{featuredRecording.duration}</span>
                  </div>
                )}
                {featuredRecording.speaker?.name && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    <span>{featuredRecording.speaker.name}</span>
                  </div>
                )}
                {featuredRecording.viewCount && (
                  <div className="flex items-center gap-2">
                    <HiOutlineEye className="w-4 h-4" />
                    <span>{featuredRecording.viewCount.toLocaleString()} views</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setCurrentVideo(featuredRecording);
                    setShowVideoModal(true);
                    setIsPlaying(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <HiOutlinePlay className="w-5 h-5" />
                  Watch Now
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                {featuredRecording.slidesUrl && (
                  <button
                    onClick={() => window.open(featuredRecording.slidesUrl, '_blank')}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    <HiOutlineDocumentText className="w-5 h-5" />
                    Download Slides
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'trending' ? <HiOutlineTrendingUp className="w-4 h-4" /> :
                    <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'bookmarked' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                  {bookmarkedRecordings.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
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
                placeholder="Search recordings by title, description, or speaker..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>

            {/* View Toggle */}
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year === 'all' ? 'All Years' : year}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recordings Grid/List */}
        {displayedRecordings.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No recordings found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedYear('all');
                setSelectedType('all');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedRecordings.map((recording) => {
              const isBookmarked = bookmarkedRecordings.includes(recording.id);

              return (
                <div
                  key={recording.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}>
                    {recording.thumbnail ? (
                      <img
                        src={recording.thumbnail}
                        alt={recording.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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
                      <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">
                        {recording.duration}
                      </span>
                    )}
                    {recording.category && (
                      <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getCategoryBadge(recording.category)}`}>
                        {recording.category}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 flex-1">
                        {recording.title}
                      </h3>
                      <button
                        onClick={(e) => toggleBookmark(recording.id, e)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-yellow-500 transition-colors"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                      >
                        <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                      </button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {recording.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                      {recording.date && (
                        <div className="flex items-center gap-1">
                          <HiOutlineCalendar className="w-3 h-3" />
                          <span>{formatDate(recording.date)}</span>
                        </div>
                      )}
                      {recording.speaker?.name && (
                        <div className="flex items-center gap-1">
                          <HiOutlineUser className="w-3 h-3" />
                          <span>{recording.speaker.name}</span>
                        </div>
                      )}
                      {recording.viewCount && (
                        <div className="flex items-center gap-1">
                          <HiOutlineEye className="w-3 h-3" />
                          <span>{recording.viewCount.toLocaleString()} views</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Watch Now
                      </button>
                      <button
                        onClick={(e) => shareRecordingHandler(recording, e)}
                        className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                      >
                        <HiOutlineShare className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setNotesRecording(recording); setNotes(savedNotes[recording.id] || ''); setShowNotesModal(true); }}
                        className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                      >
                        <HiOutlinePencil className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Certificate Badge */}
                    {recording.certificateAvailable && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-green-600 bg-green-50 dark:bg-green-900/20 py-1.5 rounded-lg">
                        <HiOutlineBadgeCheck className="w-3 h-3" />
                        <span>Certificate available upon completion</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedRecordings.map((recording) => {
              const isBookmarked = bookmarkedRecordings.includes(recording.id);

              return (
                <div
                  key={recording.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Thumbnail */}
                    <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                      {recording.thumbnail ? (
                        <img src={recording.thumbnail} alt={recording.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <HiOutlineVideoCamera className="w-8 h-8 text-white/50" />
                        </div>
                      )}
                      {recording.duration && (
                        <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                          {recording.duration}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{recording.title}</h3>
                        <button
                          onClick={(e) => toggleBookmark(recording.id, e)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-yellow-500"
                        >
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{recording.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                        {recording.date && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDate(recording.date)}</div>}
                        {recording.speaker?.name && <div className="flex items-center gap-1"><HiOutlineUser className="w-4 h-4" />{recording.speaker.name}</div>}
                        {recording.viewCount && <div className="flex items-center gap-1"><HiOutlineEye className="w-4 h-4" />{recording.viewCount.toLocaleString()} views</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Watch Now</button>
                        <button onClick={(e) => shareRecordingHandler(recording, e)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">Share</button>
                      </div>
                    </div>
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
              {/* Video Header */}
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{currentVideo.title}</h3>
                  <p className="text-blue-100 text-xs">
                    {currentVideo.speaker?.name} • {formatDate(currentVideo.date)} • {currentVideo.duration}
                  </p>
                </div>
                <button onClick={() => setShowVideoModal(false)} className="text-white hover:text-gray-200">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>

              {/* Video Player */}
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
                    {/* Play/Pause */}
                    <button onClick={handlePlayPause} className="text-white hover:text-blue-400 transition-colors">
                      {isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}
                    </button>

                    {/* Volume */}
                    <button onClick={handleMute} className="text-white hover:text-blue-400 transition-colors">
                      {isMuted ? <HiOutlineVolumeOff className="w-5 h-5" /> : <HiOutlineVolumeUp className="w-5 h-5" />}
                    </button>

                    {/* Progress Bar */}
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

                    {/* Speed */}
                    <button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400 transition-colors">
                      {playbackSpeed}x
                    </button>

                    {/* Transcript Toggle */}
                    <button onClick={() => setShowTranscript(!showTranscript)} className="text-white text-sm hover:text-blue-400 transition-colors">
                      Transcript
                    </button>

                    {/* Download */}
                    {currentVideo.downloadUrl && (
                      <a href={currentVideo.downloadUrl} download className="text-white hover:text-blue-400 transition-colors">
                        <HiOutlineDownload className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Transcript Panel */}
              {showTranscript && currentVideo.transcript && (
                <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-64 overflow-y-auto">
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

              {/* Video Info Footer */}
              <div className="p-4 bg-gray-900 border-t border-gray-700">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Speaker:</span>
                    <span className="text-white ml-2">{currentVideo.speaker?.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white ml-2">{formatDate(currentVideo.date)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Views:</span>
                    <span className="text-white ml-2">{currentVideo.viewCount?.toLocaleString()}</span>
                  </div>
                </div>
                {currentVideo.slidesUrl && (
                  <div className="mt-3">
                    <a href={currentVideo.slidesUrl} download className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm">
                      <HiOutlineDocumentText className="w-4 h-4" />
                      Download Presentation Slides
                    </a>
                  </div>
                )}
                {currentVideo.certificateAvailable && (
                  <div className="mt-3">
                    <button onClick={() => { setCertificateRecording(currentVideo); setShowCertificateModal(true); }} className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm">
                      <HiOutlineBadgeCheck className="w-4 h-4" />
                      Claim Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Notes Modal */}
        {showNotesModal && notesRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNotesModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">My Notes</h3>
                  <button onClick={() => setShowNotesModal(false)} className="text-white">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {notesRecording.title}
                </p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes about this recording..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
                <button
                  onClick={saveNotes}
                  className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Recording</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareRecording.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareRecording.title)}&body=${encodeURIComponent(`${shareRecording.title}\n${shareRecording.description}\n\nWatch here: ${window.location.origin}/recordings/${shareRecording.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateRecording && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Certificate of Completion</h3>
                  <button onClick={() => setShowCertificateModal(false)} className="text-white">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineBadgeCheck className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateRecording.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Congratulations on completing this recording! Download your certificate of completion.
                </p>
                <button
                  onClick={downloadCertificate}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Recording</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our channel and get notified when new recordings are available. Access exclusive content and learning materials.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlineMail className="w-5 h-5" />
              Subscribe for Updates
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              <HiOutlineRss className="w-5 h-5" />
              RSS Feed
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
        input[type="range"]:focus::-webkit-slider-runnable-track {
          background: #4B5563;
        }
      `}</style>
    </section>
  );
};

export default PastEventRecordingsSection1;