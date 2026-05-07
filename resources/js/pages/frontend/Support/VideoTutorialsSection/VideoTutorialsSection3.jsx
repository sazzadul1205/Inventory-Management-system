// page/frontend/Support/VideoTutorialsSection/VideoTutorialsSection3.jsx

/**
 * Video Tutorials Section III - AI-Powered Learning Platform with Gamification
 *
 * Unique Design Elements:
 * - AI-Powered Search with Relevance Scoring
 * - AI Learning Assistant Chatbot with Points Rewards
 * - Gamification System with Points and Badges
 * - Leaderboard for Top Learners
 * - Interactive Transcript with Timestamp Navigation
 * - Multi-language Transcript Translation
 * - Live Coding Environment for Hands-on Practice
 * - Peer Review System for Collaborative Learning
 * - AI-Powered Video Recommendations
 * - Course Enrollment with Points Rewards
 * - Quiz System with Points and Certificates
 * - Watch Progress Tracking with Points
 * - Responsive Grid Layout with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2, ai)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and AI Icons
import { AiOutlineRobot as HiOutlineRobot } from "react-icons/ai";
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
  HiOutlineCollection,
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineCode,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlineTranslate,
  HiOutlineAnnotation,
  HiOutlineMail,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineUserCircle,
  HiOutlinePlayCircle,
  HiOutlineLink,
} from 'react-icons/hi2';

const VideoTutorialsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const [quizScore, setQuizScore] = useState(null);
  const [userBadges, setUserBadges] = useState([]);
  const [codeOutput, setCodeOutput] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchMode, setSearchMode] = useState('ai');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizResults, setQuizResults] = useState({});
  const [shareVideo, setShareVideo] = useState(null);
  const [quizCourse, setQuizCourse] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [liveCoding, setLiveCoding] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [watchProgress, setWatchProgress] = useState({});
  const [currentVideo, setCurrentVideo] = useState(null);
  const [aiChatMessages, setAiChatMessages] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPeerReview, setShowPeerReview] = useState(false);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [aiRecommendations, setAiRecommendations] = useState([]);
  const [peerReviewComment, setPeerReviewComment] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [certificateCourse, setCertificateCourse] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [translatedTranscript, setTranslatedTranscript] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(() => config?.categories || [], [config?.categories]);
  const videos = useMemo(() => config?.videos || [], [config?.videos]);
  const courses = useMemo(() => config?.courses || [], [config?.courses]);
  const stats = useMemo(() => config?.stats || [], [config?.stats]);
  const featuredCourse = useMemo(() => config?.featuredCourse || courses[0], [courses, config?.featuredCourse]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
  ];

  // Get unique levels
  const levels = useMemo(() => {
    const lev = new Set(videos.map(v => v.level).filter(Boolean));
    return ['all', ...Array.from(lev)];
  }, [videos]);

  const durationRanges = useMemo(() => [
    { id: 'all', label: 'All Durations' },
    { id: 'short', label: 'Short (< 5 min)', max: 5 },
    { id: 'medium', label: 'Medium (5-15 min)', min: 5, max: 15 },
    { id: 'long', label: 'Long (> 15 min)', min: 15 },
  ], []);

  // AI-Powered Search
  const performAISearch = useCallback((query) => {
    const results = videos.map(video => {
      let relevance = 0;
      if (video.title?.toLowerCase().includes(query.toLowerCase())) relevance += 40;
      if (video.description?.toLowerCase().includes(query.toLowerCase())) relevance += 20;
      if (video.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) relevance += 15;
      if (video.transcript?.toLowerCase().includes(query.toLowerCase())) relevance += 10;
      return { ...video, relevance: Math.min(relevance + Math.random() * 10, 100) };
    }).filter(v => v.relevance > 30).sort((a, b) => b.relevance - a.relevance);
    return results;
  }, [videos]);

  // Filter videos
  const filteredVideos = useMemo(() => {
    let results = videos;

    if (searchQuery) {
      if (searchMode === 'ai') {
        results = performAISearch(searchQuery);
      } else {
        results = videos.filter(video => {
          const matchesSearch = video.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
          return matchesSearch;
        });
      }
    }

    return results.filter(video => {
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

      return matchesCategory && matchesLevel && matchesDuration;
    });
  }, [videos, searchQuery, searchMode, performAISearch, activeCategory, selectedLevel, selectedDuration, durationRanges]);

  // AI Recommendations based on watch history
  useEffect(() => {
    if (watchHistory.length > 0) {
      const watchedCategories = watchHistory.map(v => v.category).filter(Boolean);
      const preferredCategories = [...new Set(watchedCategories)];
      const recommended = videos
        .filter(v => !watchHistory.some(w => w.id === v.id) && preferredCategories.includes(v.category))
        .slice(0, 6);
      setAiRecommendations(recommended);
    } else {
      setAiRecommendations(videos.slice(0, 6));
    }
  }, [watchHistory, videos]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('videoBookmarks');
    if (savedBookmarks) setBookmarkedVideos(JSON.parse(savedBookmarks));

    const savedEnrolled = localStorage.getItem('enrolledCourses');
    if (savedEnrolled) setEnrolledCourses(JSON.parse(savedEnrolled));

    const savedHistory = localStorage.getItem('videoWatchHistory');
    if (savedHistory) setWatchHistory(JSON.parse(savedHistory));

    const savedProgress = localStorage.getItem('videoWatchProgress');
    if (savedProgress) setWatchProgress(JSON.parse(savedProgress));

    const savedQuizzes = localStorage.getItem('quizResults');
    if (savedQuizzes) setQuizResults(JSON.parse(savedQuizzes));

    const savedCertificates = localStorage.getItem('certificates');
    if (savedCertificates) setCertificates(JSON.parse(savedCertificates));

    const savedPoints = localStorage.getItem('userPoints');
    if (savedPoints) setUserPoints(parseInt(savedPoints));

    const savedBadges = localStorage.getItem('userBadges');
    if (savedBadges) setUserBadges(JSON.parse(savedBadges));

    const savedLeaderboard = localStorage.getItem('leaderboard');
    if (savedLeaderboard) setLeaderboard(JSON.parse(savedLeaderboard));


    const savedAiChat = localStorage.getItem('aiTutorChat');
    if (savedAiChat) setAiChatMessages(JSON.parse(savedAiChat));
  }, []);

  useEffect(() => {
    localStorage.setItem('videoBookmarks', JSON.stringify(bookmarkedVideos));
  }, [bookmarkedVideos]);

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('videoWatchHistory', JSON.stringify(watchHistory));
  }, [watchHistory]);

  useEffect(() => {
    localStorage.setItem('videoWatchProgress', JSON.stringify(watchProgress));
  }, [watchProgress]);

  useEffect(() => {
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
  }, [quizResults]);

  useEffect(() => {
    localStorage.setItem('certificates', JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('userPoints', userPoints.toString());
  }, [userPoints]);

  useEffect(() => {
    localStorage.setItem('userBadges', JSON.stringify(userBadges));
  }, [userBadges]);

  useEffect(() => {
    localStorage.setItem('aiTutorChat', JSON.stringify(aiChatMessages));
  }, [aiChatMessages]);

  // ==================== GAMIFICATION FUNCTIONS ====================
  const addPoints = (points) => {
    const newPoints = userPoints + points;
    setUserPoints(prev => prev + points);

    if (newPoints >= 100 && !userBadges.some(b => b.name === 'Rookie Learner')) {
      setUserBadges(prev => [...prev, { name: 'Rookie Learner', description: 'Earned 100 points', icon: '🌟', earnedAt: new Date().toISOString() }]);
    }
    if (newPoints >= 500 && !userBadges.some(b => b.name === 'Dedicated Student')) {
      setUserBadges(prev => [...prev, { name: 'Dedicated Student', description: 'Earned 500 points', icon: '📚', earnedAt: new Date().toISOString() }]);
    }
    if (newPoints >= 1000 && !userBadges.some(b => b.name === 'Master Learner')) {
      setUserBadges(prev => [...prev, { name: 'Master Learner', description: 'Earned 1000 points', icon: '🏆', earnedAt: new Date().toISOString() }]);
    }

    setLeaderboard(prev => {
      const userEntry = prev.find(u => u.name === 'You');
      if (userEntry) {
        return prev.map(u => u.name === 'You' ? { ...u, points: u.points + points, badges: userBadges.length } : u);
      }
      return [...prev, { name: 'You', points, badges: userBadges.length }];
    });
  };

  // ==================== HELPER FUNCTIONS ====================
  const translateTranscript = () => {
    if (currentVideo?.transcript && selectedLanguage !== 'en') {
      const translated = currentVideo.transcript.map(segment => ({
        ...segment,
        text: `[${languages.find(l => l.code === selectedLanguage)?.name}] ${segment.text}`
      }));
      setTranslatedTranscript(translated);
    } else {
      setTranslatedTranscript(null);
    }
  };

  const runCode = () => {
    try {
      setCodeOutput(`> ${codeInput}\n\nOutput: This is a simulated output.\n\n✅ Code executed successfully!`);
      addPoints(5, 'Ran code in live environment');
    } catch (error) {
      setCodeOutput(`Error: ${error.message}`);
    }
  };

  const submitPeerReview = () => {
    if (!peerReviewComment.trim()) return;
    setPeerReviewComment('');
    setShowPeerReview(false);
    addPoints(10, 'Submitted peer review');
    alert('Thank you for your review! +10 points');
  };

  const trackVideoView = (video) => {
    const updatedHistory = [video, ...watchHistory.filter(v => v.id !== video.id)].slice(0, 20);
    setWatchHistory(updatedHistory);
    addPoints(3, `Watched: ${video.title}`);
  };

  const saveProgress = (videoId, progress, videoDuration) => {
    setWatchProgress(prev => ({
      ...prev,
      [videoId]: { progress, lastWatched: new Date().toISOString(), duration: videoDuration }
    }));
    if (progress >= 90) {
      addPoints(10, `Completed video`);
    }
  };

  const enrollInCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      addPoints(50, `Enrolled in course`);
    }
  };

  const getCourseProgress = (course) => {
    if (!course || !course.videos) return 0;
    const totalProgress = course.videos.reduce((sum, videoId) => sum + (watchProgress[videoId]?.progress || 0), 0);
    return Math.round(totalProgress / course.videos.length);
  };

  const isCourseCompleted = (course) => getCourseProgress(course) >= 90;

  const handleQuizSubmit = () => {
    const course = quizCourse;
    if (!course || !course.quiz) return;

    let correct = 0;
    course.quiz.questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) correct++;
    });

    const score = (correct / course.quiz.questions.length) * 100;
    const passed = score >= (course.quiz.passingScore || 70);

    setQuizResults(prev => ({
      ...prev,
      [course.id]: { score, passed, completedAt: new Date().toISOString() }
    }));
    setQuizScore(score);

    if (passed) {
      addPoints(100, `Passed quiz: ${course.title}`);
      const certificate = {
        id: Date.now(),
        courseId: course.id,
        courseTitle: course.title,
        issuedAt: new Date().toISOString(),
        score,
      };
      setCertificates(prev => [...prev, certificate]);
    } else {
      addPoints(20, `Attempted quiz: ${course.title}`);
    }
  };

  const toggleBookmark = (videoId, e) => {
    e?.stopPropagation();
    if (bookmarkedVideos.includes(videoId)) {
      setBookmarkedVideos(bookmarkedVideos.filter(id => id !== videoId));
    } else {
      setBookmarkedVideos([...bookmarkedVideos, videoId]);
      addPoints(2, `Bookmarked video`);
    }
  };

  const shareVideoHandler = (video, e) => {
    e?.stopPropagation();
    setShareVideo(video);
    setShowShareModal(true);
    addPoints(2, `Shared video`);
  };

  const copyLink = () => {
    if (shareVideo) {
      navigator.clipboard.writeText(`${window.location.origin}/tutorials/${shareVideo.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedLevel('all');
    setSelectedDuration('all');
  };

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

      if (currentVideo && Math.floor(newTime) % 10 === 0) {
        const progress = (newTime / duration) * 100;
        saveProgress(currentVideo.id, progress, duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
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
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDuration = (durationStr) => durationStr || '';

  const getLevelBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Tutorials Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-vt" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-vt)" />
        </svg>
      </div>

      {/* ==================== GAMIFICATION WIDGET ==================== */}
      <div className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 min-w-44">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <HiOutlineTrophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your Points</p>
            <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{userPoints}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {userBadges.slice(0, 3).map((badge, idx) => (
            <div key={idx} className="group relative">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-xs">{badge.icon}</span>
              </div>
              <div className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                {badge.name}
              </div>
            </div>
          ))}
          <button onClick={() => setShowLeaderboard(true)} className="ml-auto text-xs text-blue-600 dark:text-blue-400 hover:underline" aria-label="View leaderboard">
            Leaderboard
          </button>
        </div>
      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineRobot className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Learning"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Master"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain"}</span> {config?.title?.suffix || "with AI"}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "AI-powered video tutorials, interactive coding environments, peer reviews, and gamified learning. Earn points, badges, and certificates as you progress."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'courses' ? <HiOutlineAcademicCap className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'students' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'hours' ? <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineBadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== AI RECOMMENDATIONS ROW ==================== */}
        {aiRecommendations.length > 0 && searchQuery === '' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineRobot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                AI Recommended for You
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aiRecommendations.map((video) => (
                <div
                  key={video.id}
                  onClick={() => { setCurrentVideo(video); setShowVideoModal(true); setIsPlaying(true); trackVideoView(video); }}
                  className="group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(video)}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <HiOutlinePlay className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-2 line-clamp-2">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FEATURED COURSE BANNER ==================== */}
        {featuredCourse && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Course</span>
                {featuredCourse.level && (
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getLevelBadge(featuredCourse.level)}`}>
                    {featuredCourse.level}
                  </span>
                )}
                {featuredCourse.hasCertificate && (
                  <span className="ml-2 text-xs bg-green-500/30 px-2 py-1 rounded-full">🎓 Certificate + 100 pts</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredCourse.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredCourse.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredCourse.duration && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{featuredCourse.duration}</span>
                  </div>
                )}
                {featuredCourse.videos && (
                  <div className="flex items-center gap-2">
                    <HiOutlinePlayCircle className="w-4 h-4" />
                    <span>{featuredCourse.videos.length} lessons</span>
                  </div>
                )}
                {featuredCourse.quiz && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClipboardList className="w-4 h-4" />
                    <span>Quiz + 100 pts</span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { setCurrentCourse(featuredCourse); enrollInCourse(featuredCourse.id); setShowVideoModal(true); setCurrentVideo(featuredCourse.videos?.[0]); setIsPlaying(true); }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Start learning"
                >
                  <HiOutlinePlay className="w-5 h-5" />Start Learning (+50 pts)
                </button>
                <button
                  onClick={() => { setSelectedInstructor(featuredCourse.instructor); setShowInstructorModal(true); }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="Meet instructor"
                >
                  <HiOutlineUser className="w-5 h-5" />Meet Instructor
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SEARCH BAR WITH AI MODE ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI or search for tutorials..."
              className="w-full pl-12 pr-32 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search tutorials"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button
                onClick={() => setSearchMode('ai')}
                className={`px-2 py-1 text-xs rounded transition-all duration-300 ${searchMode === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="AI search"
              >
                AI Search
              </button>
              <button
                onClick={() => setSearchMode('semantic')}
                className={`px-2 py-1 text-xs rounded transition-all duration-300 ${searchMode === 'semantic' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="Semantic search"
              >
                Semantic
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle filters"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all videos"
          >
            <HiOutlineCollection className="w-4 h-4" />
            All
            <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">{videos.length}</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.name} videos`}
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

        {/* ==================== FILTER PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by level"
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
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by duration"
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

        {/* ==================== COURSES SECTION ==================== */}
        {courses.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineAcademicCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Popular Courses</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => {
                const progress = getCourseProgress(course);
                const completed = isCourseCompleted(course);
                const hasCertificate = certificates.some(c => c.courseId === course.id);
                const isEnrolled = enrolledCourses.includes(course.id);

                return (
                  <div key={course.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                    <div className="relative h-40 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      {course.level && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(course.level)}`}>
                          {course.level}
                        </span>
                      )}
                      {course.hasCertificate && (
                        <span className="absolute top-4 right-4 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          +100 pts
                        </span>
                      )}
                      {progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{course.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-4">
                        <span>{course.videos?.length} lessons</span>
                        <span>{course.duration}</span>
                        {course.rating && (
                          <div className="flex items-center gap-1">
                            <HiOutlineStar className="w-3 h-3 text-yellow-500 dark:text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {isEnrolled ? (
                          <button
                            onClick={() => { setCurrentCourse(course); setCurrentVideo(course.videos?.[0]); setShowVideoModal(true); setIsPlaying(true); }}
                            className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-colors"
                            aria-label="Continue course"
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            onClick={() => enrollInCourse(course.id)}
                            className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
                            aria-label="Enroll in course"
                          >
                            Enroll (+50 pts)
                          </button>
                        )}
                        {course.quiz && quizResults[course.id]?.passed && (
                          <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                            <HiOutlineBadgeCheck className="w-4 h-4" />
                            Completed
                          </div>
                        )}
                        {completed && hasCertificate && (
                          <button
                            onClick={() => { setCertificateCourse(course); setShowCertificateModal(true); }}
                            className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-xs hover:bg-yellow-600 transition-colors"
                            aria-label="Get certificate"
                          >
                            Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== VIDEOS GRID ==================== */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlinePlayCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No videos found.</p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear all filters"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredVideos.map((video) => {
              const isBookmarked = bookmarkedVideos.includes(video.id);
              const progress = watchProgress[video.id]?.progress || 0;

              return (
                <div key={video.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => { setCurrentVideo(video); setShowVideoModal(true); setIsPlaying(true); trackVideoView(video); }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(video)}
                  >
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {video.duration && (
                      <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">
                        {formatDuration(video.duration)} min
                      </span>
                    )}
                    {video.level && (
                      <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(video.level)}`}>
                        {video.level}
                      </span>
                    )}
                    {progress > 0 && (
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
                        className="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark video"}
                      >
                        <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500 dark:text-yellow-400' : ''}`} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-400 dark:text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{video.views?.toLocaleString() || 0} views</span>
                        {video.instructor && <span>• {video.instructor.name}</span>}
                      </div>
                      <button
                        onClick={(e) => shareVideoHandler(video, e)}
                        className="p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Share video"
                      >
                        <HiOutlineShare className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== VIDEO PLAYER MODAL WITH AI FEATURES ==================== */}
        {showVideoModal && (currentVideo || currentCourse) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video Player"
            aria-modal="true"
          >
            <div
              className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{currentVideo?.title || currentCourse?.title}</h3>
                  <p className="text-blue-100 text-xs">{currentVideo?.instructor?.name || currentCourse?.instructor?.name} • {currentVideo?.duration || currentCourse?.duration}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm hover:bg-white/30 transition-colors"
                    aria-label="Toggle transcript"
                  >
                    Transcript
                  </button>
                  <button
                    onClick={() => setLiveCoding(!liveCoding)}
                    className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm hover:bg-white/30 transition-colors"
                    aria-label="Toggle code lab"
                  >
                    Code Lab
                  </button>
                  <button
                    onClick={() => setShowPeerReview(true)}
                    className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm hover:bg-white/30 transition-colors"
                    aria-label="Open peer review"
                  >
                    Review
                  </button>
                  <button onClick={() => setShowVideoModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close video">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <video
                    ref={videoRef}
                    src={currentVideo?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
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
                      <button onClick={handlePlayPause} className="text-white hover:text-blue-400 transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}
                      </button>
                      <button onClick={handleMute} className="text-white hover:text-blue-400 transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
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
                          aria-label="Video progress"
                        />
                        <span className="text-white text-xs">{formatTime(duration)}</span>
                      </div>
                      <button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400 transition-colors" aria-label="Playback speed">
                        {playbackSpeed}x
                      </button>
                      <button
                        onClick={() => addPoints(5, 'Engaged with video')}
                        className="text-white text-sm hover:text-yellow-400 transition-colors"
                        aria-label="Earn points"
                      >
                        +5 pts
                      </button>
                    </div>
                  </div>

                  {/* Transcript Panel with Translation */}
                  {showTranscript && (currentVideo?.transcript || translatedTranscript) && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700 max-h-48 overflow-y-auto">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white font-semibold">Interactive Transcript</h4>
                        <div className="flex gap-2">
                          <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="px-2 py-1 bg-gray-700 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Select language"
                          >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="zh">Chinese</option>
                          </select>
                          <button
                            onClick={translateTranscript}
                            className="px-3 py-1 bg-purple-600 text-white text-sm rounded flex items-center gap-1 hover:bg-purple-700 transition-colors"
                            aria-label="Translate transcript"
                          >
                            <HiOutlineTranslate className="w-3 h-3" />
                            Translate
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(translatedTranscript || currentVideo?.transcript || []).map((segment, idx) => (
                          <div key={idx} className="flex gap-3 text-sm">
                            <button
                              onClick={() => { if (videoRef.current) videoRef.current.currentTime = segment.startTime; }}
                              className="text-blue-400 font-mono min-w-16 hover:underline text-left"
                              aria-label={`Jump to ${formatTime(segment.startTime)}`}
                            >
                              {formatTime(segment.startTime)}
                            </button>
                            <p className="text-gray-300">{segment.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live Coding Environment */}
                  {liveCoding && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700">
                      <h4 className="text-white font-semibold mb-3">Live Coding Environment</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">Code Editor</label>
                          <textarea
                            value={codeInput}
                            onChange={(e) => setCodeInput(e.target.value)}
                            placeholder="Write your code here..."
                            rows="8"
                            className="w-full px-3 py-2 bg-gray-800 text-white font-mono text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Code editor"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">Output</label>
                          <pre className="w-full px-3 py-2 bg-gray-800 text-green-400 font-mono text-sm rounded-lg h-48 overflow-y-auto">
                            {codeOutput || 'Run your code to see output here...'}
                          </pre>
                        </div>
                      </div>
                      <button
                        onClick={runCode}
                        className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                        aria-label="Run code"
                      >
                        Run Code (+5 pts)
                      </button>
                    </div>
                  )}

                  <div className="p-4 bg-gray-900 border-t border-gray-700">
                    <div className="flex justify-between">
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-400">Instructor:</span>
                        <span className="text-white">{currentVideo?.instructor?.name || currentCourse?.instructor?.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => { if (currentVideo) toggleBookmark(currentVideo.id); }}
                          className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-gray-600 transition-colors"
                          aria-label="Bookmark video"
                        >
                          <HiOutlineBookmark className="w-4 h-4 inline mr-1" />
                          Bookmark
                        </button>
                        <button
                          onClick={() => shareVideoHandler(currentVideo)}
                          className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-gray-600 transition-colors"
                          aria-label="Share video"
                        >
                          <HiOutlineShare className="w-4 h-4 inline mr-1" />
                          Share
                        </button>
                        <button
                          onClick={() => setShowPeerReview(true)}
                          className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-gray-600 transition-colors"
                          aria-label="Open peer review"
                        >
                          <HiOutlineAnnotation className="w-4 h-4 inline mr-1" />
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {currentCourse && currentCourse.videos && (
                  <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto max-h-150">
                    <div className="p-3 border-b border-gray-700">
                      <h4 className="text-white font-semibold">Course Content ({currentCourse.videos.length} lessons) • +{currentCourse.videos.length * 3} pts</h4>
                    </div>
                    <div className="divide-y divide-gray-700">
                      {currentCourse.videos.map((video, idx) => {
                        const videoData = videos.find(v => v.id === video);
                        const progress = watchProgress[video]?.progress || 0;
                        return (
                          <div
                            key={idx}
                            onClick={() => { setCurrentVideo(videoData); setIsPlaying(true); }}
                            className={`p-3 cursor-pointer hover:bg-gray-800 transition-colors ${currentVideo?.id === video ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(videoData)}
                          >
                            <div className="flex gap-3">
                              <div className="w-16 h-12 bg-gray-800 rounded overflow-hidden flex items-center justify-center">
                                <HiOutlinePlay className="w-4 h-4 text-gray-500" />
                              </div>
                              <div>
                                <p className="text-sm text-white line-clamp-2">{videoData?.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{videoData?.duration} min</p>
                                {progress > 0 && (
                                  <div className="w-full h-0.5 bg-gray-600 mt-1">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {currentCourse.quiz && !quizResults[currentCourse.id]?.passed && (
                      <button
                        onClick={() => { setQuizCourse(currentCourse); setShowQuizModal(true); }}
                        className="w-full m-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                        aria-label="Take quiz"
                      >
                        Take Quiz (+100 pts) →
                      </button>
                    )}
                    {quizResults[currentCourse.id]?.passed && (
                      <div className="m-3 p-2 bg-green-600/20 rounded-lg text-center">
                        <p className="text-green-400 text-sm">✓ Quiz passed! Score: {quizResults[currentCourse.id].score}% +100 pts</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUIZ MODAL ==================== */}
        {showQuizModal && quizCourse && quizCourse.quiz && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowQuizModal(false)}
            role="dialog"
            aria-label="Quiz"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Quiz: {quizCourse.title} (+100 pts)</h3>
                  <button onClick={() => setShowQuizModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close quiz">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {quizScore !== null ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${quizScore >= 70 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
                      <span className={`text-3xl font-bold ${quizScore >= 70 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                        {Math.round(quizScore)}%
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {quizScore >= 70 ? '🎉 Congratulations! +100 points!' : '📚 Keep Learning!'}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {quizScore >= 70 ? 'You passed the quiz! Your certificate is ready.' : 'Review the course material and try again to earn your certificate and points.'}
                    </p>
                    {quizScore >= 70 && (
                      <button
                        onClick={() => { setCertificateCourse(quizCourse); setShowCertificateModal(true); setShowQuizModal(false); }}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        aria-label="Get certificate"
                      >
                        Get Certificate
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Passing score: {quizCourse.quiz.passingScore || 70}%</p>
                    {quizCourse.quiz.questions.map((q, idx) => (
                      <div key={q.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="font-medium text-gray-900 dark:text-white mb-3">{idx + 1}. {q.text}</p>
                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => (
                            <label key={optIdx} className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors">
                              <input
                                type="radio"
                                name={`q${q.id}`}
                                value={opt}
                                onChange={(e) => setQuizAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                className="w-4 h-4 accent-purple-500"
                                aria-label={`Select answer: ${opt}`}
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={handleQuizSubmit}
                      className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all duration-300"
                      aria-label="Submit quiz"
                    >
                      Submit Quiz (+100 pts)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== PEER REVIEW MODAL ==================== */}
        {showPeerReview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPeerReview(false)}
            role="dialog"
            aria-label="Peer Review"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Peer Review (+10 pts)</h3>
                  <button onClick={() => setShowPeerReview(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Share your thoughts on this tutorial to help other learners.</p>
                <textarea
                  value={peerReviewComment}
                  onChange={(e) => setPeerReviewComment(e.target.value)}
                  placeholder="What did you find helpful? Any suggestions for improvement?"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Peer review comment"
                />
                <button
                  onClick={submitPeerReview}
                  className="w-full mt-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300"
                  aria-label="Submit review"
                >
                  Submit Review (+10 pts)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATE MODAL ==================== */}
        {showCertificateModal && certificateCourse && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowCertificateModal(false)}
            role="dialog"
            aria-label="Certificate of Completion"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Certificate of Completion</h3>
                  <button onClick={() => setShowCertificateModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineBadgeCheck className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateCourse.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Congratulations on completing the course! +100 points earned.</p>
                <button
                  onClick={() => alert('Certificate downloaded!')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Download certificate"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== INSTRUCTOR MODAL ==================== */}
        {showInstructorModal && selectedInstructor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowInstructorModal(false)}
            role="dialog"
            aria-label="Instructor Profile"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Instructor Profile</h3>
                  <button onClick={() => setShowInstructorModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineUserCircle className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedInstructor.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedInstructor.title}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedInstructor.courses}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedInstructor.students}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{selectedInstructor.rating}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedInstructor.bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== LEADERBOARD MODAL ==================== */}
        {showLeaderboard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowLeaderboard(false)}
            role="dialog"
            aria-label="Leaderboard"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-yellow-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">🏆 Leaderboard</h3>
                  <button onClick={() => setShowLeaderboard(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {leaderboard.sort((a, b) => b.points - a.points).slice(0, 10).map((user, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg ${user.name === 'You' ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-700'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gray-500 dark:text-gray-400">#{idx + 1}</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{user.badges || 0} badges</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-yellow-600 dark:text-yellow-400">{user.points} pts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share Video"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Video</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareVideo.title}</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Copy link"
                  >
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button
                    onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareVideo.title)}&body=${encodeURIComponent(`${shareVideo.title}\n\nWatch here: ${window.location.origin}/tutorials/${shareVideo.id}`)}`)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Share via email"
                  >
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineRobot className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your AI-Powered Learning Journey</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6">Earn points, unlock badges, get certificates, and master supply chain management.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Start learning">
            <HiOutlinePlay className="w-5 h-5" />
            Start Learning Today
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce { animation: bounce 1s infinite; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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
      `}</style>
    </section>
  );
};

export default VideoTutorialsSection3;