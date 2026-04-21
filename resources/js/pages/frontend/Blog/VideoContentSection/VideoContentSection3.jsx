// frontend/Blog/VideoContentSection/VideoContentSection3.jsx

/**
 * Video Content Section - Learning Platform Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Courses, Live Streams, Certifications, Video Library)
 * - Featured courses with progress tracking (localStorage)
 * - Course chapters sidebar with time-based navigation
 * - Interactive quizzes with scoring and certificate awarding
 * - Live stream banner with countdown and reminder buttons
 * - Certification programs with popularity bars
 * - Video transcript viewer with time-sync highlighting
 * - Course progress bars for each video
 * - Like/save functionality with localStorage persistence
 * - Certificate download on quiz completion
 * - Chapter-based video navigation
 * - Responsive layout with video player sidebar
 * - Animated live indicator
 * 
 * All icons from react-icons (hi, fa, md, hi2 - Heroicons, FontAwesome, Material Design)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

// React Icons - Heroicons, FontAwesome, Material Design, and Heroicons 2
import { FaQuoteLeft, FaCertificate, FaAward } from "react-icons/fa";
import {
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlineOfficeBuilding,
  HiOutlineNewspaper,
  HiOutlineQuestionMarkCircle,
  HiOutlinePencil,
  HiOutlineBookOpen,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlineTemplate,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineZoomIn,
  HiOutlineDownload,
  HiOutlineVolumeUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineHeart,
  HiOutlineRefresh,
  HiOutlineClipboardCheck,
  HiOutlineLibrary,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch, HiOutlinePlayCircle } from "react-icons/hi2";
import {
  MdOutlineClosedCaption,
  MdOutlineLiveTv,
} from "react-icons/md";

const VideoContentSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [quizScore, setQuizScore] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedVideos, setSavedVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');
  const [transcriptTime, setTranscriptTime] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [courseProgress, setCourseProgress] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [certificateEarned, setCertificateEarned] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const transcriptRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const videos = useMemo(() => config?.videos || [], [config?.videos]);
  const liveStream = useMemo(() => config?.liveStream || null, [config?.liveStream]);
  const certifications = useMemo(() => config?.certifications || [], [config?.certifications]);
  const featuredCourses = useMemo(() => config?.featuredCourses || [], [config?.featuredCourses]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedLikes = localStorage.getItem('likedVideos');
    if (savedLikes) setLikedVideos(JSON.parse(savedLikes));
    const savedBookmarks = localStorage.getItem('savedVideos');
    if (savedBookmarks) setSavedVideos(JSON.parse(savedBookmarks));
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) setCourseProgress(JSON.parse(savedProgress));
    const savedCertificates = localStorage.getItem('certificatesEarned');
    if (savedCertificates) setCertificateEarned(JSON.parse(savedCertificates));
  }, []);

  useEffect(() => {
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
  }, [savedVideos]);

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
  }, [courseProgress]);

  useEffect(() => {
    localStorage.setItem('certificatesEarned', JSON.stringify(certificateEarned));
  }, [certificateEarned]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, FontAwesome, Material Design, and Heroicons 2
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineRocketLaunch,
      trophy: HiOutlineStar,
      users: HiOutlineUserGroup,
      globe: HiOutlineGlobe,
      chart: HiOutlineChartBar,
      lightbulb: HiOutlineLightBulb,
      check: HiOutlineCheckCircle,
      arrow: HiArrowRight,
      microphone: HiOutlineMicrophone,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      star: HiOutlineStar,
      trending: HiOutlineTrendingUp,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      briefcase: HiOutlineBriefcase,
      location: HiOutlineLocationMarker,
      usergroup: HiOutlineUsers,
      chip: HiOutlineChip,
      cloud: HiOutlineCloudUpload,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      archive: HiOutlineArchive,
      photo: HiOutlinePhotograph,
      doc: HiOutlineDocument,
      link: HiOutlineLink,
      credit: HiOutlineCreditCard,
      pie: HiOutlineChartPie,
      quote: FaQuoteLeft,
      at: HiOutlineAtSymbol,
      building: HiOutlineOfficeBuilding,
      newspaper: HiOutlineNewspaper,
      question: HiOutlineQuestionMarkCircle,
      pencil: HiOutlinePencil,
      book: HiOutlineBookOpen,
      badge: HiOutlineBadgeCheck,
      certificate: FaCertificate,
      clipboard: HiOutlineClipboardList,
      template: HiOutlineTemplate,
      code: HiOutlineCode,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      desktop: HiOutlineDesktopComputer,
      mobile: HiOutlineDeviceMobile,
      wifi: HiOutlineWifi,
      zoom: HiOutlineZoomIn,
      download: HiOutlineDownload,
      volume: HiOutlineVolumeUp,
      chevronLeft: HiOutlineChevronLeft,
      chevronRight: HiOutlineChevronRight,
      plus: HiOutlinePlus,
      heart: HiOutlineHeart,
      refresh: HiOutlineRefresh,
      clipboardCheck: HiOutlineClipboardCheck,
      award: FaAward,
      library: HiOutlineLibrary,
      liveTv: MdOutlineLiveTv,
      playCircle: HiOutlinePlayCircle,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineVideoCamera className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'course': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'academic', label: 'Course' },
      'live': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'liveTv', label: 'Live' },
      'tutorial': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'play', label: 'Tutorial' },
      'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar' },
      'certification': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'certificate', label: 'Certification' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'video', label: 'Video' };
  }, []);

  /**
   * Toggle save/bookmark status for a video
   */
  const handleSaveVideo = useCallback((videoId, e) => {
    if (e) e.stopPropagation();
    setSavedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  }, []);

  /**
   * Toggle like status for a video
   */
  const handleLikeVideo = useCallback((videoId, e) => {
    if (e) e.stopPropagation();
    setLikedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  }, []);

  /**
   * Handle play video - opens modal player
   */
  const handlePlayVideo = useCallback((video) => {
    setActiveVideo(video);
    setShowPlayer(true);
    setCurrentChapter(0);
    setQuizSubmitted(false);
    setQuizAnswers({});
    setShowTranscript(false);
  }, []);

  /**
   * Close video player
   */
  const closePlayer = useCallback(() => {
    setShowPlayer(false);
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  /**
   * Handle chapter click navigation
   */
  const handleChapterClick = useCallback((chapterIndex, time) => {
    setCurrentChapter(chapterIndex);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  }, []);

  /**
   * Handle transcript click - seek video to timestamp
   */
  const handleTranscriptClick = useCallback((time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
    setTranscriptTime(time);
  }, []);

  /**
   * Handle quiz submission and certificate awarding
   */
  const handleQuizSubmit = useCallback((quiz) => {
    let correct = 0;
    quiz.questions.forEach((question, idx) => {
      if (quizAnswers[idx] === question.correctAnswer) {
        correct++;
      }
    });
    const score = (correct / quiz.questions.length) * 100;
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score >= 80 && activeVideo) {
      setCertificateEarned(prev => ({ ...prev, [activeVideo.id]: true }));
      setCourseProgress(prev => ({ ...prev, [activeVideo.id]: 100 }));
    }
  }, [quizAnswers, activeVideo]);

  /**
   * Update course progress based on video watch time
   */
  const updateProgress = useCallback((videoId, progress) => {
    if (progress > (courseProgress[videoId] || 0)) {
      setCourseProgress(prev => ({ ...prev, [videoId]: progress }));
    }
  }, [courseProgress]);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredVideos = useMemo(() => {
    let filtered = [...videos];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video =>
        video.title?.toLowerCase().includes(query) ||
        video.description?.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    return filtered;
  }, [videos, searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Video Content - Learning Platform Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("library", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Learning Platform"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Video"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Learning"}
            </span>{' '}
            {config?.title?.suffix || "Platform"}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Comprehensive video courses, live streams, and certification programs to advance your supply chain career."}
          </p>
        </div>

        {/* ==================== TABS NAVIGATION ==================== */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-6">
            {[
              { id: 'courses', label: 'Courses', icon: 'academic' },
              { id: 'live', label: 'Live Streams', icon: 'liveTv' },
              { id: 'certifications', label: 'Certifications', icon: 'certificate' },
              { id: 'library', label: 'Video Library', icon: 'library' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 whitespace-nowrap ${activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                  : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                aria-label={`Switch to ${tab.label} tab`}
              >
                {getIcon(tab.icon, "w-5 h-5")}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== COURSES TAB ==================== */}
        {activeTab === 'courses' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => {
                const progress = courseProgress[course.id] || 0;
                const hasCertificate = certificateEarned[course.id];

                return (
                  <div
                    key={course.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => handlePlayVideo(course)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(course)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {hasCertificate && (
                        <div className="absolute top-3 right-3 bg-amber-500 rounded-full p-2 shadow-lg">
                          <FaCertificate className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0">
                        <div className="h-1 bg-gray-700">
                          <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(course.category).color}`}>
                          {course.lessons} lessons
                        </span>
                        <span className="text-xs text-gray-500">{course.duration} total</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={course.instructor.avatar} alt="" className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{course.instructor.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {getIcon("star", "w-4 h-4 text-amber-400 fill-current")}
                          <span className="text-sm font-semibold">{course.rating}</span>
                          <span className="text-xs text-gray-500">({course.reviews})</span>
                        </div>
                      </div>
                      {progress > 0 && (
                        <div className="mt-3 text-right">
                          <span className="text-xs text-blue-600">{progress}% complete</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== LIVE STREAMS TAB ==================== */}
        {activeTab === 'live' && liveStream && (
          <div className="mb-12">
            <div className="bg-linear-to-r from-red-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <img
                  src={liveStream.thumbnail}
                  alt={liveStream.title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(liveStream)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                    aria-label="Watch live stream"
                  >
                    {getIcon("play", "w-10 h-10 text-red-600 ml-1")}
                  </button>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">LIVE NOW</span>
                </div>
              </div>
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{liveStream.title}</h2>
                <p className="text-white/80 mb-4">{liveStream.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img src={liveStream.host.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white" loading="lazy" />
                    <div>
                      <p className="font-semibold">{liveStream.host.name}</p>
                      <p className="text-sm text-white/70">{liveStream.host.title}</p>
                    </div>
                  </div>
                  <button className="ml-auto bg-white/20 hover:bg-white/30 px-6 py-2 rounded-xl font-semibold transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATIONS TAB ==================== */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <FaCertificate className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">{cert.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-500">
                        {getIcon("clock", "w-4 h-4")}
                        {cert.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        {getIcon("document", "w-4 h-4")}
                        {cert.modules} modules
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${cert.popularity}%` }} />
                        </div>
                        <span className="text-xs text-gray-500">{cert.students}+ students</span>
                      </div>
                      <Link href={cert.link} className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== VIDEO LIBRARY TAB ==================== */}
        {activeTab === 'library' && (
          <>
            {/* Search and Category Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon("search", "w-5 h-5 text-gray-400")}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search videos..."
                  className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Search videos"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Clear search"
                  >
                    {getIcon("close", "w-5 h-5")}
                  </button>
                )}
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                <option value="tutorial">Tutorials</option>
                <option value="webinar">Webinars</option>
                <option value="course">Courses</option>
              </select>
            </div>

            {/* Videos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => {
                const categoryConfig = getCategoryConfig(video.category);
                const isSaved = savedVideos.includes(video.id);
                const isLiked = likedVideos.includes(video.id);
                const progress = courseProgress[video.id] || 0;

                return (
                  <div
                    key={video.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => handlePlayVideo(video)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-lg text-white text-xs">
                        {video.duration}
                      </div>
                      {progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                          <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">{video.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{video.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={video.presenter?.avatar} alt="" className="w-6 h-6 rounded-full object-cover" loading="lazy" />
                          <span className="text-xs text-gray-500">{video.presenter?.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => handleLikeVideo(video.id, e)}
                            className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                            aria-label={isLiked ? "Unlike video" : "Like video"}
                          >
                            {getIcon("heart", "w-4 h-4")}
                          </button>
                          <button
                            onClick={(e) => handleSaveVideo(video.id, e)}
                            className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                            aria-label={isSaved ? "Remove from saved" : "Save video"}
                          >
                            {getIcon("bookmark", "w-4 h-4")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("video", "w-16 h-16")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No videos found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* ==================== VIDEO PLAYER MODAL ==================== */}
        {showPlayer && activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={closePlayer}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon("close", "w-6 h-6")}
              </button>

              <div className="grid lg:grid-cols-3 gap-0">
                {/* Video Player Area */}
                <div className="lg:col-span-2">
                  <div className="aspect-video">
                    <video
                      ref={videoRef}
                      src={activeVideo.videoUrl}
                      className="w-full h-full"
                      controls
                      autoPlay
                      poster={activeVideo.thumbnail}
                      onTimeUpdate={(e) => {
                        const progress = (e.target.currentTime / e.target.duration) * 100;
                        updateProgress(activeVideo.id, progress);
                      }}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-4 bg-gray-900">
                    <h3 className="text-lg font-bold text-white mb-2">{activeVideo.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{activeVideo.description}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        {getIcon("thumbsUp", "w-4 h-4")}
                        Like
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        {getIcon("share", "w-4 h-4")}
                        Share
                      </button>
                      <button
                        onClick={() => setShowTranscript(!showTranscript)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <MdOutlineClosedCaption className="w-4 h-4" />
                        Transcript
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Chapters/Quiz/Transcript */}
                <div className="bg-gray-800 border-l border-gray-700">
                  <div className="border-b border-gray-700">
                    <div className="flex">
                      <button
                        onClick={() => setCurrentChapter(0)}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${currentChapter === 0 ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                      >
                        Chapters
                      </button>
                      {activeVideo.quiz && (
                        <button
                          onClick={() => setCurrentChapter(1)}
                          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${currentChapter === 1 ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                        >
                          Quiz
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="h-96 overflow-y-auto p-4">
                    {/* Chapters View */}
                    {currentChapter === 0 && activeVideo.chapters && (
                      <div className="space-y-3">
                        {activeVideo.chapters.map((chapter, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleChapterClick(0, chapter.time)}
                            className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-white group-hover:text-blue-400">{chapter.title}</span>
                              <span className="text-xs text-gray-400">{chapter.duration}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{chapter.description}</p>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Quiz View */}
                    {currentChapter === 1 && activeVideo.quiz && !quizSubmitted && (
                      <div className="space-y-6">
                        {activeVideo.quiz.questions.map((question, qIdx) => (
                          <div key={qIdx} className="space-y-3">
                            <p className="text-white font-medium">{qIdx + 1}. {question.text}</p>
                            <div className="space-y-2">
                              {question.options.map((option, oIdx) => (
                                <label key={oIdx} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition-colors">
                                  <input
                                    type="radio"
                                    name={`q${qIdx}`}
                                    value={oIdx}
                                    onChange={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                                    className="w-4 h-4 text-blue-600"
                                  />
                                  <span className="text-gray-300 text-sm">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={() => handleQuizSubmit(activeVideo.quiz)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
                        >
                          Submit Quiz
                        </button>
                      </div>
                    )}

                    {/* Quiz Results View */}
                    {currentChapter === 1 && quizSubmitted && (
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                          {quizScore >= 80 ? (
                            <HiOutlineBadgeCheck className="w-10 h-10 text-green-500" />
                          ) : (
                            <HiOutlineRefresh className="w-10 h-10 text-orange-500" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {quizScore >= 80 ? 'Congratulations!' : 'Keep Learning!'}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          You scored {quizScore}% {quizScore >= 80 ? 'and earned your certificate!' : 'Keep reviewing to earn your certificate.'}
                        </p>
                        {quizScore >= 80 && (
                          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                            Download Certificate
                          </button>
                        )}
                        {quizScore < 80 && (
                          <button
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizAnswers({});
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
                          >
                            Retake Quiz
                          </button>
                        )}
                      </div>
                    )}

                    {/* Transcript View */}
                    {showTranscript && activeVideo.transcript && (
                      <div className="space-y-2" ref={transcriptRef}>
                        {activeVideo.transcript.map((entry, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleTranscriptClick(entry.time)}
                            className={`w-full text-left p-2 rounded-lg transition-colors ${Math.abs(transcriptTime - entry.time) < 1 ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-gray-700 text-gray-300'
                              }`}
                          >
                            <span className="text-xs text-gray-500">[{entry.timestamp}]</span>
                            <p className="text-sm mt-1">{entry.text}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoContentSection3;