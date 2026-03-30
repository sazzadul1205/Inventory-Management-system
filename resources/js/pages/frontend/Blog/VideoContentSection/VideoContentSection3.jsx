// page/frontend/Blog/VideoContentSection/VideoContentSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect } from 'react';

// Icons
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
    HiOutlineRocket,
    HiOutlineTrophy,
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineMicrophone,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
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
    HiOutlineQuote,
    HiOutlineAtSymbol,
    HiOutlineBuildingOffice,
    HiOutlineNewspaper,
    HiOutlineQuestionMarkCircle,
    HiOutlinePencil,
    HiOutlineBookOpen,
    HiOutlineBadgeCheck,
    HiOutlineCertificate,
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
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineVolumeUp,
    HiOutlineClosedCaption,
    HiOutlineQuality,
    HiOutlineFullscreen,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlinePlus,
    HiOutlineHeart,
    HiOutlinePlayCircle,
    HiOutlineRefresh,
    HiOutlineClipboardCheck,
    HiOutlineAward,
    HiOutlineLibrary,
    HiOutlineLiveTv,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt
} from 'react-icons/hi';

const VideoContentSection3 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedVideos, setSavedVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);
    const [activeTab, setActiveTab] = useState('courses');
    const [currentChapter, setCurrentChapter] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState(0);
    const [certificateEarned, setCertificateEarned] = useState({});
    const [courseProgress, setCourseProgress] = useState({});
    const [showTranscript, setShowTranscript] = useState(false);
    const [transcriptTime, setTranscriptTime] = useState(0);
    const [liveStreamActive, setLiveStreamActive] = useState(true);
    const videoRef = useRef(null);
    const transcriptRef = useRef(null);

    // Load data from localStorage
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

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    }, [likedVideos]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
    }, [savedVideos]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
    }, [courseProgress]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('certificatesEarned', JSON.stringify(certificateEarned));
    }, [certificateEarned]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            usergroup: <HiOutlineUsers className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            archive: <HiOutlineArchive className={className} />,
            photo: <HiOutlinePhotograph className={className} />,
            doc: <HiOutlineDocument className={className} />,
            link: <HiOutlineLink className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            quote: <HiOutlineQuote className={className} />,
            at: <HiOutlineAtSymbol className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            question: <HiOutlineQuestionMarkCircle className={className} />,
            pencil: <HiOutlinePencil className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            template: <HiOutlineTemplate className={className} />,
            code: <HiOutlineCode className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            download: <HiOutlineDownload className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            quality: <HiOutlineQuality className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            plus: <HiOutlinePlus className={className} />,
            heart: <HiOutlineHeart className={className} />,
            playCircle: <HiOutlinePlayCircle className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            award: <HiOutlineAward className={className} />,
            library: <HiOutlineLibrary className={className} />,
            liveTv: <HiOutlineLiveTv className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />
        };
        return icons[iconName] || <HiOutlineVideoCamera className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'course': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'academic', label: 'Course', gradient: 'from-blue-500 to-blue-600' },
            'live': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'liveTv', label: 'Live', gradient: 'from-red-500 to-red-600' },
            'tutorial': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'play', label: 'Tutorial', gradient: 'from-green-500 to-green-600' },
            'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar', gradient: 'from-purple-500 to-purple-600' },
            'certification': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'certificate', label: 'Certification', gradient: 'from-yellow-500 to-yellow-600' }
        };
        return configs[category] || configs.course;
    };

    // Handle save video
    const handleSaveVideo = (videoId) => {
        setSavedVideos(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    // Handle like video
    const handleLikeVideo = (videoId) => {
        setLikedVideos(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    // Handle play video
    const handlePlayVideo = (video) => {
        setActiveVideo(video);
        setShowPlayer(true);
        setCurrentChapter(0);
        setQuizSubmitted(false);
        setQuizAnswers({});
    };

    // Close player
    const closePlayer = () => {
        setShowPlayer(false);
        setActiveVideo(null);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    // Handle chapter navigation
    const handleChapterClick = (chapterIndex, time) => {
        setCurrentChapter(chapterIndex);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            videoRef.current.play();
        }
    };

    // Handle transcript click
    const handleTranscriptClick = (time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            videoRef.current.play();
        }
        setTranscriptTime(time);
    };

    // Handle quiz submission
    const handleQuizSubmit = (quiz) => {
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
    };

    // Update course progress
    const updateProgress = (videoId, progress) => {
        if (progress > (courseProgress[videoId] || 0)) {
            setCourseProgress(prev => ({ ...prev, [videoId]: progress }));
        }
    };

    // Filter videos
    const getFilteredVideos = useCallback(() => {
        let videos = config?.videos || [];

        if (searchQuery) {
            videos = videos.filter(v =>
                v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                v.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            videos = videos.filter(v => v.category === selectedCategory);
        }

        return videos;
    }, [config?.videos, searchQuery, selectedCategory]);

    // Get filtered videos
    const filteredVideos = getFilteredVideos();

    // Featured courses
    const featuredCourses = config?.featuredCourses || [];

    // Live stream info
    const liveStream = config?.liveStream;

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Video Learning Platform"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineLibrary className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Learning Platform"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Video"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Learning"}</span> {config?.title?.suffix || "Platform"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Comprehensive video courses, live streams, and certification programs to advance your supply chain career."}
                    </p>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
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
                                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === tab.id
                                    ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                                    : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700'
                                    }`}
                            >
                                {getIcon(tab.icon, "w-5 h-5")}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Tab */}
                {activeTab === 'courses' && (
                    <>
                        {/* Featured Courses */}
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
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={course.thumbnail}
                                                    alt={course.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {hasCertificate && (
                                                    <div className="absolute top-3 right-3 bg-yellow-500 rounded-full p-2">
                                                        <HiOutlineCertificate className="w-4 h-4 text-white" />
                                                    </div>
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0">
                                                    <div className="h-1 bg-gray-700">
                                                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
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
                                                        <img src={course.instructor.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.instructor.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <HiOutlineStar className="w-4 h-4 text-yellow-400 fill-current" />
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
                    </>
                )}

                {/* Live Streams Tab */}
                {activeTab === 'live' && liveStream && (
                    <div className="mb-12">
                        <div className="bg-linear-to-r from-red-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="relative aspect-video">
                                {liveStreamActive ? (
                                    <>
                                        <img
                                            src={liveStream.thumbnail}
                                            alt={liveStream.title}
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button
                                                onClick={() => handlePlayVideo(liveStream)}
                                                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                                            >
                                                <HiOutlinePlay className="w-10 h-10 text-red-600 ml-1" />
                                            </button>
                                        </div>
                                        <div className="absolute top-4 left-4 flex items-center gap-2">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                            </span>
                                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">LIVE NOW</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <HiOutlineCalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                            <p className="text-xl">Next live stream: {liveStream.nextDate}</p>
                                            <p className="text-gray-400">{liveStream.nextTopic}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 text-white">
                                <h2 className="text-2xl font-bold mb-2">{liveStream.title}</h2>
                                <p className="text-white/80 mb-4">{liveStream.description}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <img src={liveStream.host.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
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

                {/* Certifications Tab */}
                {activeTab === 'certifications' && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {config?.certifications?.map((cert) => (
                            <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                                        <HiOutlineCertificate className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cert.description}</p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="flex items-center gap-1 text-gray-500">
                                                <HiOutlineClock className="w-4 h-4" />
                                                {cert.duration}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-500">
                                                <HiOutlineDocumentText className="w-4 h-4" />
                                                {cert.modules} modules
                                            </span>
                                        </div>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${cert.popularity}%` }}></div>
                                                </div>
                                                <span className="text-xs text-gray-500">{cert.students}+ students</span>
                                            </div>
                                            <Link to={cert.link} className="text-blue-600 text-sm font-semibold hover:underline">
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Video Library Tab */}
                {activeTab === 'library' && (
                    <>
                        {/* Search and Filters */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search videos..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                    >
                                        <div className="relative">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                    <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
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
                                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">{video.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{video.description}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img src={video.presenter?.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                                                    <span className="text-xs text-gray-500">{video.presenter?.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleLikeVideo(video.id); }}
                                                        className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                    >
                                                        <HiOutlineHeart className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleSaveVideo(video.id); }}
                                                        className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                    >
                                                        <HiOutlineBookmark className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* Video Player Modal */}
                {showPlayer && activeVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={closePlayer}>
                        <div className="relative max-w-6xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closePlayer}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>

                            <div className="grid lg:grid-cols-3 gap-0">
                                {/* Video Player */}
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
                                                <HiOutlineThumbUp className="w-4 h-4" />
                                                Like
                                            </button>
                                            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                                <HiOutlineShare className="w-4 h-4" />
                                                Share
                                            </button>
                                            <button
                                                onClick={() => setShowTranscript(!showTranscript)}
                                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <HiOutlineClosedCaption className="w-4 h-4" />
                                                Transcript
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar - Chapters/Transcript/Quiz */}
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

                                    <div className="h-100 overflow-y-auto p-4">
                                        {/* Chapters */}
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

                                        {/* Quiz */}
                                        {currentChapter === 1 && activeVideo.quiz && !quizSubmitted && (
                                            <div className="space-y-6">
                                                {activeVideo.quiz.questions.map((question, qIdx) => (
                                                    <div key={qIdx} className="space-y-3">
                                                        <p className="text-white font-medium">{qIdx + 1}. {question.text}</p>
                                                        <div className="space-y-2">
                                                            {question.options.map((option, oIdx) => (
                                                                <label key={oIdx} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700">
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

                                        {/* Quiz Results */}
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
                                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
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

                                        {/* Transcript */}
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </section>
    );
};

export default VideoContentSection3;