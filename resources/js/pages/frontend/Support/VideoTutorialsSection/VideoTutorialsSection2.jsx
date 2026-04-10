// page/frontend/Support/VideoTutorialsSection/VideoTutorialsSection2.jsx

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
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlineMail,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineUserCircle,
  HiOutlinePlayCircle,
  HiOutlineLink
} from 'react-icons/hi2';

const VideoTutorialsSection2 = ({ config }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
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
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchProgress, setWatchProgress] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareVideo, setShareVideo] = useState(null);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizCourse, setQuizCourse] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateCourse, setCertificateCourse] = useState(null);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [learningAnalytics, setLearningAnalytics] = useState({
    totalHours: 0,
    coursesCompleted: 0,
    quizzesPassed: 0,
    certificatesEarned: 0,
    averageScore: 0,
  });
  const videoRef = useRef(null);

  // Get data from config
  const categories = config?.categories || [];
  const videos = useEffect(() => config?.videos || [], [config]);
  const courses = useEffect(() => config?.courses || [], [config]);
  const stats = config?.stats || [];
  const featuredCourse = config?.featuredCourse || courses[0];

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

  // Calculate learning analytics
  useEffect(() => {
    const totalHours = Object.values(watchProgress).reduce((sum, p) => sum + (p.progress / 100) * (p.duration || 0), 0) / 60;
    const coursesCompleted = enrolledCourses.filter(courseId => {
      const course = courses.find(c => c.id === courseId);
      if (!course) return false;
      const courseProgress = course.videos?.reduce((sum, videoId) => sum + (watchProgress[videoId]?.progress || 0), 0) / (course.videos?.length || 1);
      return courseProgress >= 90;
    }).length;
    const quizzesPassed = Object.values(quizResults).filter(r => r.passed).length;
    const averageScore = Object.values(quizResults).reduce((sum, r) => sum + (r.score || 0), 0) / (Object.values(quizResults).length || 1);

    setLearningAnalytics({
      totalHours: Math.round(totalHours * 10) / 10,
      coursesCompleted,
      quizzesPassed,
      certificatesEarned: certificates.length,
      averageScore: Math.round(averageScore),
    });
  }, [watchProgress, enrolledCourses, quizResults, certificates, courses]);

  // Track video view
  const trackVideoView = (video) => {
    const updatedHistory = [video, ...watchHistory.filter(v => v.id !== video.id)].slice(0, 20);
    setWatchHistory(updatedHistory);
  };

  // Save watch progress
  const saveProgress = (videoId, progress, videoDuration) => {
    setWatchProgress(prev => ({
      ...prev,
      [videoId]: { progress, lastWatched: new Date().toISOString(), duration: videoDuration }
    }));
  };

  // Enroll in course
  const enrollInCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  // Check course completion
  const getCourseProgress = (course) => {
    if (!course || !course.videos) return 0;
    const totalProgress = course.videos.reduce((sum, videoId) => sum + (watchProgress[videoId]?.progress || 0), 0);
    return Math.round(totalProgress / course.videos.length);
  };

  const isCourseCompleted = (course) => {
    return getCourseProgress(course) >= 90;
  };

  // Handle quiz submission
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
      // Generate certificate
      const certificate = {
        id: Date.now(),
        courseId: course.id,
        courseTitle: course.title,
        issuedAt: new Date().toISOString(),
        score,
      };
      setCertificates(prev => [...prev, certificate]);
    }
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

      if (currentVideo && Math.floor(newTime) % 5 === 0) {
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
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Video Tutorials Learning Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      {/* Learning Analytics Widget */}
      <div className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 min-w-48">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500">Your Learning Progress</p>
          <button onClick={() => setShowAnalyticsModal(true)} className="text-blue-600 text-xs hover:underline">Details</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center"><p className="text-lg font-bold text-blue-600">{learningAnalytics.totalHours}</p><p className="text-xs text-gray-500">Hours</p></div>
          <div className="text-center"><p className="text-lg font-bold text-green-600">{learningAnalytics.coursesCompleted}</p><p className="text-xs text-gray-500">Completed</p></div>
          <div className="text-center"><p className="text-lg font-bold text-purple-600">{learningAnalytics.quizzesPassed}</p><p className="text-xs text-gray-500">Quizzes</p></div>
          <div className="text-center"><p className="text-lg font-bold text-yellow-600">{learningAnalytics.certificatesEarned}</p><p className="text-xs text-gray-500">Certificates</p></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Learning Platform"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Master"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain"}</span> {config?.title?.suffix || "with Video Courses"}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "Comprehensive video courses with quizzes, certificates, and progress tracking. Learn at your own pace and earn professional credentials."}</p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {stat.icon === 'courses' ? <HiOutlineAcademicCap className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'students' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'hours' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineBadgeCheck className="w-5 h-5 text-blue-600" />}
                </div>
                <div><div className="text-2xl font-bold text-gray-900">{stat.value}</div><div className="text-xs text-gray-500">{stat.label}</div></div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Course Banner */}
        {featuredCourse && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Course</span>
                {featuredCourse.level && <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getLevelBadge(featuredCourse.level)}`}>{featuredCourse.level}</span>}
                {featuredCourse.hasCertificate && <span className="ml-2 text-xs bg-green-500/30 px-2 py-1 rounded-full">🎓 Certificate</span>}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredCourse.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredCourse.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredCourse.duration && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{featuredCourse.duration}</span></div>}
                {featuredCourse.videos && <div className="flex items-center gap-2"><HiOutlinePlayCircle className="w-4 h-4" /><span>{featuredCourse.videos.length} lessons</span></div>}
                {featuredCourse.quiz && <div className="flex items-center gap-2"><HiOutlineClipboardList className="w-4 h-4" /><span>Quiz included</span></div>}
                {featuredCourse.instructor && <div className="flex items-center gap-2"><HiOutlineUser className="w-4 h-4" /><span>{featuredCourse.instructor.name}</span></div>}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setCurrentCourse(featuredCourse); enrollInCourse(featuredCourse.id); setShowVideoModal(true); setCurrentVideo(featuredCourse.videos?.[0]); setIsPlaying(true); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlinePlay className="w-5 h-5" />Start Learning
                </button>
                <button onClick={() => { setSelectedInstructor(featuredCourse.instructor); setShowInstructorModal(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                  <HiOutlineUser className="w-5 h-5" />Meet Instructor
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search courses, tutorials, or topics..." className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm" />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700'}`}><HiOutlineCollection className="w-4 h-4" />All<span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">{videos.length}</span></button>
          {categories.map((category) => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700'}`}>{getCategoryIcon(category.id)}{category.name}<span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>{videos.filter(v => v.category === category.id).length}</span></button>))}
        </div>

        {/* Filters Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2"><button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button><button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button></div>
          <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50"><HiOutlineFilter className="w-4 h-4" />Filters{showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}</button>
        </div>

        {/* Filter Panel */}
        {showFilters && (<div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl"><div className="grid md:grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-2">Level</label><select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{levels.map(level => (<option key={level} value={level}>{level === 'all' ? 'All Levels' : level}</option>))}</select></div><div><label className="block text-sm font-medium mb-2">Duration</label><select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border rounded-lg">{durationRanges.map(range => (<option key={range.id} value={range.id}>{range.label}</option>))}</select></div></div></div>)}

        {/* Courses Section */}
        {courses.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4"><HiOutlineAcademicCap className="w-5 h-5 text-blue-600" /><h3 className="text-lg font-semibold">Featured Courses</h3></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => {
                const progress = getCourseProgress(course);
                const completed = isCourseCompleted(course);
                const hasCertificate = certificates.some(c => c.courseId === course.id);
                const isEnrolled = enrolledCourses.includes(course.id);

                return (
                  <div key={course.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200">
                    <div className="relative h-40 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      {course.level && <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(course.level)}`}>{course.level}</span>}
                      {course.hasCertificate && <span className="absolute top-4 right-4 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Certificate</span>}
                      {progress > 0 && (<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} /></div>)}
                    </div>
                    <div className="p-5"><h3 className="font-bold text-lg mb-2">{course.title}</h3><p className="text-sm text-gray-500 mb-3 line-clamp-2">{course.description}</p><div className="flex items-center gap-3 text-xs text-gray-400 mb-4"><span>{course.videos?.length} lessons</span><span>{course.duration}</span>{course.rating && <div className="flex items-center gap-1"><HiOutlineStar className="w-3 h-3 text-yellow-500" /><span>{course.rating}</span></div>}</div>
                      <div className="flex gap-2">{isEnrolled ? (<button onClick={() => { setCurrentCourse(course); setCurrentVideo(course.videos?.[0]); setShowVideoModal(true); setIsPlaying(true); }} className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">Continue</button>) : (<button onClick={() => enrollInCourse(course.id)} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Enroll Now</button>)}
                        {course.quiz && quizResults[course.id]?.passed && <div className="flex items-center gap-1 text-xs text-green-600"><HiOutlineBadgeCheck className="w-4 h-4" />Completed</div>}
                        {completed && hasCertificate && (<button onClick={() => { setCertificateCourse(course); setShowCertificateModal(true); }} className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-xs">Certificate</button>)}</div></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Videos Grid/List */}
        {filteredVideos.length === 0 ? (<div className="text-center py-12"><HiOutlinePlayCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" /><p className="text-gray-500">No videos found.</p><button onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedLevel('all'); setSelectedDuration('all'); }} className="mt-4 text-blue-600">Clear filters</button></div>) : viewMode === 'grid' ? (
          <div className="space-y-12 mb-12">
            {Object.entries(groupedVideos).map(([categoryId, categoryVideos]) => {
              const category = categories.find(c => c.id === categoryId);
              if (!category || categoryVideos.length === 0) return null;
              return (<div key={categoryId}><div className="flex items-center gap-2 mb-4 pb-2 border-b"><div className={`p-1.5 rounded-lg ${getCategoryColor(categoryId)}`}>{getCategoryIcon(categoryId)}</div><h3 className="text-lg font-semibold">{category.name}</h3><span className="text-sm text-gray-500">({categoryVideos.length} videos)</span></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{categoryVideos.map((video) => {
                  const isBookmarked = bookmarkedVideos.includes(video.id);
                  const progress = watchProgress[video.id]?.progress || 0;
                  return (<div key={video.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200"><div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => { setCurrentVideo(video); setShowVideoModal(true); setIsPlaying(true); trackVideoView(video); }}><img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /><div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110"><HiOutlinePlay className="w-8 h-8 text-white ml-1" /></div></div>{video.duration && <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded-lg">{formatDuration(video.duration)}</span>}{video.level && <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(video.level)}`}>{video.level}</span>}{progress > 0 && (<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600"><div className="h-full bg-blue-500" style={{ width: `${progress}%` }} /></div>)}</div><div className="p-4"><div className="flex items-start justify-between gap-2"><h4 className="font-semibold line-clamp-2 flex-1">{video.title}</h4><button onClick={(e) => toggleBookmark(video.id, e)} className="p-1.5 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} /></button></div><p className="text-sm text-gray-500 mt-2 line-clamp-2">{video.description}</p><div className="flex items-center justify-between mt-3 text-xs text-gray-400"><div className="flex items-center gap-2"><span>{video.views?.toLocaleString() || 0} views</span>{video.instructor && <span>• {video.instructor.name}</span>}</div><button onClick={(e) => shareVideoHandler(video, e)} className="p-1 hover:text-blue-600"><HiOutlineShare className="w-3 h-3" /></button></div></div></div>);
                })}</div></div>);
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {filteredVideos.map((video) => {
              const isBookmarked = bookmarkedVideos.includes(video.id);
              const progress = watchProgress[video.id]?.progress || 0;
              return (<div key={video.id} onClick={() => { setCurrentVideo(video); setShowVideoModal(true); setIsPlaying(true); trackVideoView(video); }} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer"><div className="relative w-40 h-24 rounded-lg overflow-hidden shrink-0"><img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />{video.duration && <span className="absolute bottom-1 right-1 text-xs bg-black/70 text-white px-1.5 py-0.5 rounded">{formatDuration(video.duration)}</span>}{progress > 0 && (<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600"><div className="h-full bg-blue-500" style={{ width: `${progress}%` }} /></div>)}</div><div className="flex-1"><h4 className="font-semibold">{video.title}</h4><p className="text-sm text-gray-500 line-clamp-1">{video.description}</p><div className="flex items-center gap-3 mt-1 text-xs text-gray-400"><span>{video.views?.toLocaleString() || 0} views</span>{video.level && <span className={`px-1.5 py-0.5 rounded-full ${getLevelBadge(video.level)}`}>{video.level}</span>}</div></div><div className="flex items-center gap-2"><button onClick={(e) => toggleBookmark(video.id, e)} className="p-2 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} /></button><button onClick={(e) => shareVideoHandler(video, e)} className="p-2 rounded-lg text-gray-400 hover:text-blue-600"><HiOutlineShare className="w-4 h-4" /></button><HiOutlineArrowRight className="w-4 h-4 text-gray-400" /></div></div>);
            })}
          </div>
        )}

        {/* Video Player Modal with Course Navigation */}
        {showVideoModal && (currentVideo || currentCourse) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">{currentVideo?.title || currentCourse?.title}</h3><p className="text-blue-100 text-xs">{currentVideo?.instructor?.name || currentCourse?.instructor?.name} • {currentVideo?.duration || currentCourse?.duration}</p></div>
                <button onClick={() => setShowVideoModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <video ref={videoRef} src={currentVideo?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} className="w-full aspect-video" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} controls={false} autoPlay />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4"><button onClick={handlePlayPause} className="text-white hover:text-blue-400">{isPlaying ? <HiOutlinePause className="w-6 h-6" /> : <HiOutlinePlay className="w-6 h-6" />}</button><button onClick={handleMute} className="text-white hover:text-blue-400">{isMuted ? <HiOutlineVolumeOff className="w-5 h-5" /> : <HiOutlineVolumeUp className="w-5 h-5" />}</button><div className="flex-1 flex items-center gap-2"><span className="text-white text-xs">{formatTime(currentTime)}</span><input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500" /><span className="text-white text-xs">{formatTime(duration)}</span></div><button onClick={handleSpeedChange} className="text-white text-sm hover:text-blue-400">{playbackSpeed}x</button></div>
                  </div>
                  <div className="p-4 bg-gray-900 border-t border-gray-700"><div className="flex justify-between"><div className="flex gap-4 text-sm"><span className="text-gray-400">Instructor:</span><span className="text-white">{currentVideo?.instructor?.name || currentCourse?.instructor?.name}</span></div><div className="flex gap-2"><button onClick={() => { if (currentVideo) toggleBookmark(currentVideo.id); }} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm"><HiOutlineBookmark className="w-4 h-4 inline mr-1" />Bookmark</button><button onClick={() => shareVideoHandler(currentVideo)} className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm"><HiOutlineShare className="w-4 h-4 inline mr-1" />Share</button></div></div></div>
                </div>
                {currentCourse && currentCourse.videos && (
                  <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto max-h-150">
                    <div className="p-3 border-b border-gray-700"><h4 className="text-white font-semibold">Course Content ({currentCourse.videos.length} lessons)</h4></div>
                    <div className="divide-y divide-gray-700">
                      {currentCourse.videos.map((video, idx) => {
                        const videoData = videos.find(v => v.id === video);
                        const progress = watchProgress[video]?.progress || 0;
                        return (<div key={idx} onClick={() => { setCurrentVideo(videoData); setIsPlaying(true); }} className={`p-3 cursor-pointer hover:bg-gray-800 transition-colors ${currentVideo?.id === video ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}><div className="flex gap-3"><div className="w-16 h-12 bg-gray-800 rounded overflow-hidden flex items-center justify-center"><HiOutlinePlay className="w-4 h-4 text-gray-500" /></div><div><p className="text-sm text-white line-clamp-2">{videoData?.title}</p><p className="text-xs text-gray-400 mt-1">{videoData?.duration}</p>{progress > 0 && <div className="w-full h-0.5 bg-gray-600 mt-1"><div className="h-full bg-blue-500" style={{ width: `${progress}%` }} /></div>}</div></div></div>);
                      })}
                    </div>
                    {currentCourse.quiz && !quizResults[currentCourse.id]?.passed && (<button onClick={() => { setQuizCourse(currentCourse); setShowQuizModal(true); }} className="w-full m-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold">Take Quiz →</button>)}
                    {quizResults[currentCourse.id]?.passed && (<div className="m-3 p-2 bg-green-600/20 rounded-lg text-center"><p className="text-green-400 text-sm">✓ Quiz passed! Score: {quizResults[currentCourse.id].score}%</p></div>)}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {showQuizModal && quizCourse && quizCourse.quiz && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowQuizModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Quiz: {quizCourse.title}</h3><button onClick={() => setShowQuizModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {quizScore !== null ? (<div className="text-center py-8"><div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${quizScore >= 70 ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}><span className={`text-3xl font-bold ${quizScore >= 70 ? 'text-green-500' : 'text-yellow-500'}`}>{Math.round(quizScore)}%</span></div><h4 className="text-xl font-bold mb-2">{quizScore >= 70 ? '🎉 Congratulations!' : '📚 Keep Learning!'}</h4><p className="text-gray-600 mb-4">{quizScore >= 70 ? 'You passed the quiz! Your certificate is ready.' : 'Review the course material and try again to earn your certificate.'}</p>{quizScore >= 70 && <button onClick={() => { setCertificateCourse(quizCourse); setShowCertificateModal(true); setShowQuizModal(false); }} className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold">Get Certificate</button>}</div>) : (<div className="space-y-6"><p className="text-sm text-gray-500 mb-4">Passing score: {quizCourse.quiz.passingScore || 70}%</p>{quizCourse.quiz.questions.map((q, idx) => (<div key={q.id} className="p-4 bg-gray-50 rounded-lg"><p className="font-medium mb-3">{idx + 1}. {q.text}</p><div className="space-y-2">{q.options.map((opt, optIdx) => (<label key={optIdx} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><input type="radio" name={`q${q.id}`} value={opt} onChange={(e) => setQuizAnswers(prev => ({ ...prev, [q.id]: e.target.value }))} className="w-4 h-4 accent-purple-500" /><span className="text-sm">{opt}</span></label>))}</div></div>))}<button onClick={handleQuizSubmit} className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold">Submit Quiz</button></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Certificate of Completion</h3><button onClick={() => setShowCertificateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineBadgeCheck className="w-10 h-10 text-green-600" /></div><h4 className="text-xl font-bold mb-2">{certificateCourse.title}</h4><p className="text-sm text-gray-600 mb-4">Congratulations on completing the course!</p><button onClick={() => alert('Certificate downloaded!')} className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"><HiOutlineDownload className="w-5 h-5" />Download Certificate</button></div>
            </div>
          </div>
        )}

        {/* Instructor Modal */}
        {showInstructorModal && selectedInstructor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowInstructorModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Instructor Profile</h3><button onClick={() => setShowInstructorModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUserCircle className="w-16 h-16 text-blue-600" /></div><h4 className="text-xl font-bold mb-1">{selectedInstructor.name}</h4><p className="text-sm text-gray-500 mb-2">{selectedInstructor.title}</p><div className="flex justify-center gap-4 mb-4"><div className="text-center"><div className="text-2xl font-bold text-blue-600">{selectedInstructor.courses}</div><div className="text-xs text-gray-500">Courses</div></div><div className="text-center"><div className="text-2xl font-bold text-green-600">{selectedInstructor.students}</div><div className="text-xs text-gray-500">Students</div></div><div className="text-center"><div className="text-2xl font-bold text-yellow-600">{selectedInstructor.rating}</div><div className="text-xs text-gray-500">Rating</div></div></div><p className="text-gray-600 text-sm">{selectedInstructor.bio}</p><div className="mt-4 flex flex-wrap gap-1 justify-center">{selectedInstructor.expertise?.map(exp => (<span key={exp} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{exp}</span>))}</div></div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalyticsModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Learning Analytics</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="grid grid-cols-2 gap-4 mb-6"><div className="p-4 bg-blue-50 rounded-xl text-center"><p className="text-2xl font-bold text-blue-600">{learningAnalytics.totalHours}</p><p className="text-sm text-gray-500">Hours Learned</p></div><div className="p-4 bg-green-50 rounded-xl text-center"><p className="text-2xl font-bold text-green-600">{learningAnalytics.coursesCompleted}</p><p className="text-sm text-gray-500">Courses Completed</p></div><div className="p-4 bg-purple-50 rounded-xl text-center"><p className="text-2xl font-bold text-purple-600">{learningAnalytics.quizzesPassed}</p><p className="text-sm text-gray-500">Quizzes Passed</p></div><div className="p-4 bg-yellow-50 rounded-xl text-center"><p className="text-2xl font-bold text-yellow-600">{learningAnalytics.certificatesEarned}</p><p className="text-sm text-gray-500">Certificates Earned</p></div></div><div className="mb-6"><h4 className="font-semibold mb-3">Average Quiz Score</h4><div className="relative h-32"><div className="absolute inset-0 flex items-center justify-center"><div className="text-center"><div className="text-4xl font-bold text-purple-600">{learningAnalytics.averageScore}%</div><div className="w-32 h-32 rounded-full border-8 border-purple-200"><div className="w-full h-full rounded-full border-8 border-purple-600" style={{ clipPath: `inset(0 ${100 - learningAnalytics.averageScore}% 0 0)` }} /></div></div></div></div></div><div><h4 className="font-semibold mb-3">Recent Activity</h4><div className="space-y-2">{watchHistory.slice(0, 5).map((video, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span className="text-sm">{video.title}</span><span className="text-xs text-gray-500">{new Date(watchProgress[video.id]?.lastWatched).toLocaleDateString()}</span></div>))}</div></div></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareVideo && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}><div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Video</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareVideo.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareVideo.title)}&body=${encodeURIComponent(`${shareVideo.title}\n\nWatch here: ${window.location.origin}/tutorials/${shareVideo.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineAcademicCap className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Learning Journey Today</h3><p className="text-blue-100 mb-6">Get certified, track your progress, and advance your career.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlinePlay className="w-5 h-5" />Browse All Courses</button></div>
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

export default VideoTutorialsSection2;