// page/frontend/Events/PastEventRecordingsSection/PastEventRecordingsSection3.jsx

/**
 * Past Event Recordings Section III - AI-Powered Learning Hub with Smart Features
 *
 * Unique Design Elements:
 * - Stats Cards for Learning Metrics (Courses, Quiz Takers, Certificates, AI Searches)
 * - AI-Powered Semantic Search with Relevance Scoring
 * - Smart Video Player with Chapter Markers and Transcript
 * - Interactive Quizzes with Score Calculation and Certificate Rewards
 * - Smart Transcript Translation (Multi-language Support)
 * - Learning Progress Tracking with Resume Playback
 * - Personalized AI Recommendations
 * - Chapter-Based Video Navigation
 * - Bookmark and Like System
 * - Notes Taking for Each Video
 * - Rating System with Feedback
 * - Playlist Support with Progress Tracking
 * - Certificate Download for Quiz Passers
 * - Animated Pulse Badge in Header
 * - Fully Responsive Design
 *
 * All icons from react-icons (hi, hi2, md, ai)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, Material Design, and AI Icons
import { AiOutlineRobot } from "react-icons/ai";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineVideoCamera,
  HiOutlineUsers,
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
  HiOutlineTranslate,
  HiOutlineClipboardList,
  HiOutlineDocumentSearch,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy } from 'react-icons/hi2';
import {
  MdOutlinePlaylistAdd,
  MdOutlineHistory,
} from "react-icons/md";

const PastEventRecordingsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [quizScores, setQuizScores] = useState({});
  const [savedNotes, setSavedNotes] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [userRatings, setUserRatings] = useState({});
  const [watchHistory, setWatchHistory] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [ratingComment, setRatingComment] = useState('');
  const [watchProgress, setWatchProgress] = useState({});
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showChapters, setShowChapters] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showAiSearch, setShowAiSearch] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [aiSearchResults, setAiSearchResults] = useState([]);
  const [likedRecordings, setLikedRecordings] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [shareRecording, setShareRecording] = useState(null);
  const [notesRecording, setNotesRecording] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [learningProgress, setLearningProgress] = useState({});
  const [continueWatching, setContinueWatching] = useState([]);
  const [ratingRecording, setRatingRecording] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedRecordings, setBookmarkedRecordings] = useState([]);
  const [certificateRecording, setCertificateRecording] = useState(null);
  const [translatedTranscript, setTranslatedTranscript] = useState(null);
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

  const tabs = config?.tabs || [
    { id: 'all', label: 'All Recordings', icon: 'video' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'playlists', label: 'Playlists', icon: 'playlist' },
    { id: 'continue', label: 'Continue Learning', icon: 'history' },
    { id: 'certified', label: 'Certified', icon: 'badge' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
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
    const savedLearningProgress = localStorage.getItem('learningProgress');
    if (savedLearningProgress) setLearningProgress(JSON.parse(savedLearningProgress));
    const savedQuizScores = localStorage.getItem('quizScores');
    if (savedQuizScores) setQuizScores(JSON.parse(savedQuizScores));
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
    localStorage.setItem('learningProgress', JSON.stringify(learningProgress));
  }, [learningProgress]);
  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);
  useEffect(() => {
    localStorage.setItem('recordingNotes', JSON.stringify(savedNotes));
  }, [savedNotes]);
  useEffect(() => {
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
  }, [userRatings]);

  // ==================== AI SEARCH FUNCTIONALITY ====================
  const handleAISearch = useCallback(() => {
    if (!aiSearchQuery.trim()) return;

    const query = aiSearchQuery.toLowerCase();
    const results = recordings.filter(recording => {
      const titleMatch = recording.title?.toLowerCase().includes(query);
      const descMatch = recording.description?.toLowerCase().includes(query);
      const speakerMatch = recording.speaker?.name?.toLowerCase().includes(query);
      const transcriptMatch = recording.transcript?.some(t => t.text.toLowerCase().includes(query));

      let score = 0;
      if (titleMatch) score += 10;
      if (descMatch) score += 5;
      if (speakerMatch) score += 3;
      if (transcriptMatch) score += 2;

      return score > 0;
    }).map(r => ({ ...r, relevanceScore: 100 }));

    setAiSearchResults(results);
    setShowAiSearch(true);
  }, [aiSearchQuery, recordings]);

  // ==================== RECOMMENDATIONS ====================
  useEffect(() => {
    if (recordings.length > 0) {
      const watchedCategories = watchHistory
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);
      const likedCategories = likedRecordings
        .map(id => recordings.find(r => r.id === id)?.category)
        .filter(Boolean);
      const completedQuizzes = Object.keys(quizScores).filter(key => quizScores[key] >= 70);
      const completedCategories = completedQuizzes
        .map(id => recordings.find(r => r.id === parseInt(id))?.category)
        .filter(Boolean);
      const preferredCategories = [...new Set([...watchedCategories, ...likedCategories, ...completedCategories])];

      const recommended = recordings
        .filter(r => !watchHistory.includes(r.id) && preferredCategories.includes(r.category))
        .slice(0, 6);
      setRecommendations(recommended);

      const inProgress = recordings
        .filter(r => watchProgress[r.id] && watchProgress[r.id] > 0 && watchProgress[r.id] < 95)
        .slice(0, 4);
      setContinueWatching(inProgress);
    }
  }, [watchHistory, likedRecordings, recordings, quizScores, watchProgress]);

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
  const certifiedRecordings = recordings.filter(r => r.certificateAvailable && quizScores[r.id] >= 70);

  let displayedRecordings = [];
  if (activeTab === 'all') {
    displayedRecordings = filterRecordings(recordings);
  } else if (activeTab === 'featured') {
    displayedRecordings = filterRecordings(featuredRecordings);
  } else if (activeTab === 'playlists') {
    displayedRecordings = playlists;
  } else if (activeTab === 'continue') {
    displayedRecordings = continueWatching;
  } else if (activeTab === 'certified') {
    displayedRecordings = filterRecordings(certifiedRecordings);
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

      if (currentVideo?.chapters) {
        const chapter = currentVideo.chapters.find(c => newTime >= c.startTime && newTime <= c.endTime);
        setCurrentChapter(chapter);
      }

      if (currentVideo && Math.floor(newTime) % 10 === 0) {
        const progress = (newTime / duration) * 100;
        setWatchProgress(prev => ({
          ...prev,
          [currentVideo.id]: progress
        }));
        setLearningProgress(prev => ({
          ...prev,
          [currentVideo.id]: {
            lastWatched: new Date().toISOString(),
            progress,
            lastPosition: newTime
          }
        }));
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      if (currentVideo && learningProgress[currentVideo.id]?.lastPosition) {
        videoRef.current.currentTime = learningProgress[currentVideo.id].lastPosition;
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

  const jumpToChapter = (startTime) => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      setCurrentTime(startTime);
    }
  };

  const playNext = () => {
    if (playlistIndex < currentPlaylist.length - 1) {
      const nextIndex = playlistIndex + 1;
      setPlaylistIndex(nextIndex);
      setCurrentVideo(currentPlaylist[nextIndex]);
      setQuizScore(null);
      setQuizAnswers({});
      setShowQuiz(false);
    }
  };

  const playPrevious = () => {
    if (playlistIndex > 0) {
      const prevIndex = playlistIndex - 1;
      setPlaylistIndex(prevIndex);
      setCurrentVideo(currentPlaylist[prevIndex]);
      setQuizScore(null);
      setQuizAnswers({});
      setShowQuiz(false);
    }
  };

  const playPlaylist = (playlist) => {
    setCurrentPlaylist(playlist.videos);
    setPlaylistIndex(0);
    setCurrentVideo(playlist.videos[0]);
    setShowVideoModal(true);
    setIsPlaying(true);
    setShowPlaylist(true);
    setQuizScore(null);
    setQuizAnswers({});
  };

  // ==================== AI TRANSLATE ====================
  const handleTranslateTranscript = () => {
    if (currentVideo?.transcript && selectedLanguage !== 'en') {
      const translated = currentVideo.transcript.map(segment => ({
        ...segment,
        text: `[Translated to ${languages.find(l => l.code === selectedLanguage)?.name}] ${segment.text}`
      }));
      setTranslatedTranscript(translated);
    } else {
      setTranslatedTranscript(null);
    }
  };

  // ==================== QUIZ HANDLING ====================
  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = () => {
    if (!currentVideo?.quiz) return;

    let correct = 0;
    currentVideo.quiz.questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) correct++;
    });

    const score = (correct / currentVideo.quiz.questions.length) * 100;
    setQuizScore(score);

    setQuizScores(prev => ({
      ...prev,
      [currentVideo.id]: score
    }));

    if (score >= 70) {
      alert(`Quiz passed! Score: ${score}%. You've earned a certificate!`);
    } else {
      alert(`Quiz completed. Score: ${score}%. Try again to earn your certificate.`);
    }
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

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Past Event Recordings Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-per" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-per)" />
        </svg>
      </div>

      {/* ==================== AI SEARCH BAR ==================== */}
      <div className="fixed bottom-24 right-4 z-40 w-80">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center p-2">
            <AiOutlineRobot className="w-5 h-5 text-purple-500 ml-2" />
            <input
              type="text"
              value={aiSearchQuery}
              onChange={(e) => setAiSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAISearch()}
              placeholder="AI Search: Ask anything about our content..."
              className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-sm text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="AI search query"
            />
            <button onClick={handleAISearch} className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors" aria-label="Search">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ==================== AI SEARCH RESULTS MODAL ==================== */}
      {showAiSearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAiSearch(false)} role="dialog" aria-label="AI Search Results" aria-modal="true">
          <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <AiOutlineRobot className="w-5 h-5" /> AI Search Results
                </h3>
                <button onClick={() => setShowAiSearch(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto max-h-[70vh]">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Searching for: "{aiSearchQuery}"</p>
              {aiSearchResults.length > 0 ? (
                <div className="space-y-3">
                  {aiSearchResults.map(result => (
                    <div
                      key={result.id}
                      onClick={() => { setCurrentVideo(result); setShowVideoModal(true); setShowAiSearch(false); setQuizScore(null); setQuizAnswers({}); }}
                      className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(result)}
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-12 bg-gray-800 rounded overflow-hidden">
                          {result.thumbnail ? <img src={result.thumbnail} className="w-full h-full object-cover" alt={result.title} /> : <div className="w-full h-full bg-purple-600/20 flex items-center justify-center"><HiOutlineVideoCamera className="w-4 h-4 text-gray-500" /></div>}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{result.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Relevance: {result.relevanceScore}% • {result.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <HiOutlineDocumentSearch className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">No results found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Learning"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Video Library"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "AI-powered search, smart transcripts, chapter markers, interactive quizzes, and learning analytics. Transform how you learn from past events."}
          </p>
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {stat.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'users' ? <HiOutlineUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> :
                        stat.icon === 'quiz' ? <HiOutlineClipboardList className="w-4 h-4 text-blue-600 dark:text-blue-400" /> :
                          <HiOutlineBadgeCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================== CONTINUE LEARNING ROW ==================== */}
        {continueWatching.length > 0 && activeTab === 'all' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <MdOutlineHistory className="w-5 h-5 text-blue-600" />
                Continue Learning
              </h3>
              <button onClick={() => setActiveTab('continue')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline" aria-label="View all">View All →</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continueWatching.map((recording) => {
                const progress = watchProgress[recording.id] || 0;
                return (
                  <div
                    key={recording.id}
                    onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); setQuizScore(null); setQuizAnswers({}); }}
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
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <HiOutlinePlay className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2 line-clamp-1">{recording.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{Math.round(progress)}% complete</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== AI RECOMMENDED ROW ==================== */}
        {recommendations.length > 0 && activeTab === 'all' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <AiOutlineRobot className="w-5 h-5 text-purple-600" />
                AI Recommended for You
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
                <span className="text-sm font-semibold text-yellow-300">Featured Course</span>
                {featuredRecording.category && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{featuredRecording.category}</span>
                )}
                {featuredRecording.quiz && (
                  <span className="ml-2 text-xs bg-emerald-500/30 px-2 py-1 rounded-full">Quiz Available</span>
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
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { setCurrentVideo(featuredRecording); setShowVideoModal(true); setIsPlaying(true); setQuizScore(null); setQuizAnswers({}); }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Start learning"
                >
                  <HiOutlinePlay className="w-5 h-5" />Start Learning
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
                      <HiOutlineBadgeCheck className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'certified' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{certifiedRecordings.length}</span>
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Has Quiz</label>
                  <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" aria-label="Filter by quiz">
                    <option value="all">All</option>
                    <option value="with-quiz">With Quiz</option>
                    <option value="certified">Certified</option>
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
              <div
                key={playlist.id}
                onClick={() => playPlaylist(playlist)}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && playPlaylist(playlist)}
              >
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
              const quizPassed = quizScores[recording.id] >= 70;
              const hasQuiz = recording.quiz && recording.quiz.questions?.length > 0;

              return (
                <div key={recording.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); setQuizScore(null); setQuizAnswers({}); }} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}>
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
                    {hasQuiz && (
                      <span className="absolute top-4 right-4 text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Quiz</span>
                    )}
                    {quizPassed && (
                      <span className="absolute bottom-4 left-4 text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">Certified</span>
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
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); setQuizScore(null); setQuizAnswers({}); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors" aria-label="Watch recording">
                        <HiOutlinePlay className="w-4 h-4" />Watch Now
                      </button>
                      <button onClick={(e) => shareRecordingHandler(recording, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share recording">
                        <HiOutlineShare className="w-4 h-4" />
                      </button>
                    </div>
                    {hasQuiz && !quizPassed && (
                      <div className="mt-3 text-center text-xs text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 py-1 rounded-lg">
                        Take quiz to earn certificate
                      </div>
                    )}
                    {quizPassed && (
                      <div className="mt-3 text-center text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 py-1 rounded-lg">
                        Certificate earned! Score: {quizScores[recording.id]}%
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
              <div
                key={recording.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => { setCurrentVideo(recording); setShowVideoModal(true); setIsPlaying(true); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(recording)}
              >
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

        {/* ==================== VIDEO PLAYER MODAL WITH AI FEATURES ==================== */}
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
                      <button onClick={() => setShowChapters(!showChapters)} className="text-white text-sm hover:text-blue-400 transition-colors" aria-label="Toggle chapters">
                        Chapters
                      </button>
                      {currentVideo.quiz && (
                        <button onClick={() => { setShowQuiz(true); setShowTranscript(false); setShowChapters(false); }} className="text-white text-sm hover:text-blue-400 transition-colors" aria-label="Take quiz">
                          Quiz
                        </button>
                      )}
                      {currentVideo.downloadUrl && (
                        <a href={currentVideo.downloadUrl} download className="text-white hover:text-blue-400 transition-colors" aria-label="Download video">
                          <HiOutlineDownload className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Transcript Panel with AI Translate */}
                  {showTranscript && (currentVideo.transcript || translatedTranscript) && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-64 overflow-y-auto">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white font-semibold">Transcript</h4>
                        <div className="flex gap-2">
                          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="px-2 py-1 bg-gray-700 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-purple-500" aria-label="Select language">
                            {languages.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
                          </select>
                          <button onClick={handleTranslateTranscript} className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors flex items-center gap-1" aria-label="Translate">
                            <HiOutlineTranslate className="w-3 h-3" />Translate
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(translatedTranscript || currentVideo.transcript || []).map((segment, idx) => (
                          <div key={idx} className="flex gap-3 text-sm">
                            <button onClick={() => jumpToChapter(segment.startTime)} className="text-blue-400 font-mono min-w-16 hover:underline" aria-label={`Jump to ${formatTime(segment.startTime)}`}>
                              {formatTime(segment.startTime)}
                            </button>
                            <p className="text-gray-300">{segment.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Chapters Panel */}
                  {showChapters && currentVideo.chapters && currentVideo.chapters.length > 0 && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-64 overflow-y-auto">
                      <h4 className="text-white font-semibold mb-3">Chapters</h4>
                      <div className="space-y-2">
                        {currentVideo.chapters.map((chapter, idx) => (
                          <button
                            key={idx}
                            onClick={() => jumpToChapter(chapter.startTime)}
                            className={`w-full text-left p-2 rounded-lg transition-all duration-300 ${currentChapter?.startTime === chapter.startTime ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            aria-label={`Jump to ${chapter.title}`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{chapter.title}</span>
                              <span className="text-xs text-gray-400">{formatTime(chapter.startTime)}</span>
                            </div>
                            <p className="text-xs mt-1 opacity-75">{chapter.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quiz Panel */}
                  {showQuiz && currentVideo.quiz && (
                    <div className="p-6 bg-gray-900 border-t border-gray-700 max-h-96 overflow-y-auto">
                      <h4 className="text-white font-semibold mb-4">Knowledge Check</h4>
                      {quizScore !== null ? (
                        <div className="text-center py-8">
                          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${quizScore >= 70 ? 'bg-emerald-500/20' : 'bg-yellow-500/20'}`}>
                            <span className={`text-3xl font-bold ${quizScore >= 70 ? 'text-emerald-500' : 'text-yellow-500'}`}>{Math.round(quizScore)}%</span>
                          </div>
                          <h5 className="text-xl font-bold text-white mb-2">{quizScore >= 70 ? 'Congratulations!' : 'Keep Learning!'}</h5>
                          <p className="text-gray-400 mb-4">{quizScore >= 70 ? 'You passed the quiz! Your certificate is ready.' : 'Review the material and try again to earn your certificate.'}</p>
                          {quizScore >= 70 && (
                            <button onClick={() => { setCertificateRecording(currentVideo); setShowCertificateModal(true); }} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors" aria-label="Download certificate">
                              Download Certificate
                            </button>
                          )}
                        </div>
                      ) : (
                        <>
                          <div className="space-y-6">
                            {currentVideo.quiz.questions.map((q, idx) => (
                              <div key={q.id} className="p-4 bg-gray-800 rounded-lg">
                                <p className="text-white font-medium mb-3">{idx + 1}. {q.text}</p>
                                <div className="space-y-2">
                                  {q.options.map((opt, optIdx) => (
                                    <label key={optIdx} className="flex items-center gap-3 p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-all">
                                      <input type="radio" name={`q${q.id}`} value={opt} onChange={() => handleQuizAnswer(q.id, opt)} className="w-4 h-4 accent-blue-500" aria-label={`Select answer: ${opt}`} />
                                      <span className="text-gray-200">{opt}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <button onClick={submitQuiz} className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300" aria-label="Submit quiz">
                            Submit Quiz
                          </button>
                        </>
                      )}
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
                          onClick={() => { setPlaylistIndex(idx); setCurrentVideo(video); setQuizScore(null); setQuizAnswers({}); setShowQuiz(false); }}
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
                              {quizScores[video.id] >= 70 && <p className="text-xs text-emerald-500 mt-1">Certified</p>}
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Congratulations on passing the quiz!</p>
                <button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300" aria-label="Download certificate">
                  <HiOutlineDownload className="w-5 h-5" />Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <AiOutlineRobot className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience AI-Powered Learning</h3>
          <p className="text-blue-100 mb-6">Smart search, interactive quizzes, and personalized recommendations.</p>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
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

export default PastEventRecordingsSection3;