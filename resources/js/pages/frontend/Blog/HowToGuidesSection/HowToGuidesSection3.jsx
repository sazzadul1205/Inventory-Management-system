// page/frontend/Blog/HowToGuidesSection/HowToGuidesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback } from 'react';

// Icons
import {
    HiOutlineAcademicCap,
    HiOutlineBookOpen,
    HiOutlineLightBulb,
    HiOutlineCog,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlinePlay,
    HiOutlineDownload,
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineLink,
    HiOutlineExternalLink,
    HiOutlineCheckCircle,
    HiOutlineStar,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineEye,
    HiOutlineCalendar,
    HiOutlineTag,
    HiOutlineSparkles,
    HiOutlineTrendingUp,
    HiOutlineQuestionMarkCircle,
    HiOutlineClipboardList,
    HiOutlineTemplate,
    HiOutlinePencil,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineFire,
    HiOutlineTruck,
    HiOutlineCube,
    HiOutlineGlobe,
    HiOutlineCloudUpload,
    HiOutlineDatabase,
    HiOutlineServer,
    HiOutlineChip,
    HiOutlineWifi,
    HiOutlineCreditCard,
    HiOutlineRefresh,
    HiOutlineScale,
    HiOutlineBeaker,
    HiOutlinePresentationChartLine,
    HiOutlineClipboardCheck,
    HiOutlineBadgeCheck
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const HowToGuidesSection3 = ({ config }) => {
    const [activeGuide, setActiveGuide] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [progressTracking, setProgressTracking] = useState({});
    const [completedSteps, setCompletedSteps] = useState({});
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showQuizResults, setShowQuizResults] = useState(false);
    const [bookmarkedGuides, setBookmarkedGuides] = useState([]);
    const [, setUserRating] = useState(null);
    const [showCodeEditor, setShowCodeEditor] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const videoRef = useRef(null);

    // Load saved progress from localStorage
    useEffect(() => {
        const savedProgress = localStorage.getItem('guideProgress');
        if (savedProgress) {
            setProgressTracking(JSON.parse(savedProgress));
        }
        const savedSteps = localStorage.getItem('completedSteps');
        if (savedSteps) {
            setCompletedSteps(JSON.parse(savedSteps));
        }
        const savedBookmarks = localStorage.getItem('bookmarkedGuides');
        if (savedBookmarks) {
            setBookmarkedGuides(JSON.parse(savedBookmarks));
        }
    }, []);

    // Save progress to localStorage
    useEffect(() => {
        localStorage.setItem('guideProgress', JSON.stringify(progressTracking));
    }, [progressTracking]);

    useEffect(() => {
        localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    }, [completedSteps]);

    useEffect(() => {
        localStorage.setItem('bookmarkedGuides', JSON.stringify(bookmarkedGuides));
    }, [bookmarkedGuides]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            academic: <HiOutlineAcademicCap className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            cog: <HiOutlineCog className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            users: <HiOutlineUsers className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            clock: <HiOutlineClock className={className} />,
            play: <HiOutlinePlay className={className} />,
            download: <HiOutlineDownload className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            code: <HiOutlineCode className={className} />,
            link: <HiOutlineLink className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            star: <HiOutlineStar className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            eye: <HiOutlineEye className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineTrendingUp className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            question: <HiOutlineQuestionMarkCircle className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            template: <HiOutlineTemplate className={className} />,
            pencil: <HiOutlinePencil className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            fire: <HiOutlineFire className={className} />,
            truck: <HiOutlineTruck className={className} />,
            cube: <HiOutlineCube className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
            chip: <HiOutlineChip className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            scale: <HiOutlineScale className={className} />,
            beaker: <HiOutlineBeaker className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            badgeCheck: <HiOutlineBadgeCheck className={className} />
        };
        return icons[iconName] || <HiOutlineBookOpen className={className} />;
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    // Get difficulty badge configuration
    const getDifficultyConfig = (level) => {
        const configs = {
            beginner: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Beginner', icon: 'star', gradient: 'from-green-500 to-emerald-500' },
            intermediate: { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', label: 'Intermediate', icon: 'rocket', gradient: 'from-yellow-500 to-orange-500' },
            advanced: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Advanced', icon: 'fire', gradient: 'from-red-500 to-pink-500' }
        };
        return configs[level] || configs.beginner;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'getting-started': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'rocket', label: 'Getting Started' },
            'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse' },
            'fulfillment': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'truck', label: 'Fulfillment' },
            'analytics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Analytics' },
            'api': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'code', label: 'API & Integration' },
            'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' },
            'automation': { color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', icon: 'cog', label: 'Automation' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability' }
        };
        return configs[category] || configs['getting-started'];
    };

    // Handle step completion
    const handleStepComplete = (guideId, stepIndex) => {
        setCompletedSteps(prev => {
            const guideSteps = prev[guideId] || new Set();
            const newGuideSteps = new Set(guideSteps);
            if (newGuideSteps.has(stepIndex)) {
                newGuideSteps.delete(stepIndex);
            } else {
                newGuideSteps.add(stepIndex);
            }
            const updated = { ...prev, [guideId]: newGuideSteps };

            // Update overall progress
            const guide = config?.guides?.find(g => g.id === guideId);
            if (guide) {
                const totalSteps = guide.steps?.length || 0;
                const completedCount = newGuideSteps.size;
                const progress = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
                setProgressTracking(prevProgress => ({
                    ...prevProgress,
                    [guideId]: progress
                }));
            }

            return updated;
        });
    };

    // Handle quiz answer
    const handleQuizAnswer = (questionId, answerIndex) => {
        setQuizAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }));
    };

    // Calculate quiz score
    const calculateQuizScore = (quiz) => {
        let correct = 0;
        quiz.questions.forEach((question, idx) => {
            if (quizAnswers[`${quiz.id}_${idx}`] === question.correctAnswer) {
                correct++;
            }
        });
        return { correct, total: quiz.questions.length, percentage: (correct / quiz.questions.length) * 100 };
    };

    // Handle code execution simulation
    const executeCode = (code) => {
        // Simulate code execution (for demo purposes)
        setCodeOutput(`> Executing code...\n> ${code}\n> Output: Sample execution result\n> Operation completed successfully!`);
    };

    // Handle guide selection
    const selectGuide = (guide) => {
        setActiveGuide(guide);
        setActiveTab('overview');
        setShowQuizResults(false);
        setUserRating(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle bookmark toggle
    const toggleBookmark = (guideId) => {
        setBookmarkedGuides(prev =>
            prev.includes(guideId)
                ? prev.filter(id => id !== guideId)
                : [...prev, guideId]
        );
    };

    // Filter guides
    const getFilteredGuides = useCallback(() => {
        let guides = config?.guides || [];

        if (searchQuery) {
            guides = guides.filter(g =>
                g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            guides = guides.filter(g => g.category === selectedCategory);
        }

        return guides;
    }, [config?.guides, searchQuery, selectedCategory]);

    const filteredGuides = getFilteredGuides();
    const categories = config?.categories || [
        { id: 'all', label: 'All Guides', icon: 'sparkles', count: config?.guides?.length || 0 },
        { id: 'getting-started', label: 'Getting Started', icon: 'rocket' },
        { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
        { id: 'fulfillment', label: 'Fulfillment', icon: 'truck' },
        { id: 'analytics', label: 'Analytics', icon: 'chart' },
        { id: 'automation', label: 'Automation', icon: 'cog' }
    ];

    // Featured courses
    const featuredCourses = config?.featuredCourses || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="How-to Guides & Courses"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-2)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineVideoCamera className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Learning Center"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Master"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain"}</span> {config?.title?.suffix || "Operations"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Comprehensive video courses, interactive tutorials, and hands-on exercises to help you become a supply chain expert."}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search courses, tutorials, or topics..."}
                            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            aria-label="Search guides"
                        />
                    </div>
                </div>

                {/* Featured Courses Section */}
                {config?.showFeaturedCourses && featuredCourses.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiOutlineBadgeCheck className="w-6 h-6 text-blue-600" />
                                    Featured Courses
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Curated learning paths for career advancement</p>
                            </div>
                            <Link href="/courses" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                                View all courses →
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => selectGuide(course)}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyConfig(course.difficulty).color}`}>
                                                {getDifficultyConfig(course.difficulty).label}
                                            </span>
                                        </div>
                                        {course.badge && (
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                    {course.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(course.category).color}`}>
                                                {getCategoryConfig(course.category).label}
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiOutlineStar key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">({course.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${course.progress || 0}%` }} />
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{course.progress || 0}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                            {category.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {category.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Guides Grid */}
                {!activeGuide ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredGuides.map((guide) => {
                            const difficultyConfig = getDifficultyConfig(guide.difficulty);
                            const categoryConfig = getCategoryConfig(guide.category);
                            const progress = progressTracking[guide.id] || 0;
                            const isBookmarked = bookmarkedGuides.includes(guide.id);

                            return (
                                <div
                                    key={guide.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => selectGuide(guide)}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={guide.image}
                                            alt={guide.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {guide.videoUrl && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                    <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                {categoryConfig.label}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyConfig.color}`}>
                                                {difficultyConfig.label}
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleBookmark(guide.id);
                                            }}
                                            className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        >
                                            <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`} />
                                        </button>
                                        {progress > 0 && (
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${progress}%` }} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{guide.readTime || '10 min'}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{guide.views || '1.2k'}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {guide.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {guide.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={guide.author?.avatar}
                                                    alt={guide.author?.name}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{guide.author?.name}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiOutlineStar key={i} className={`w-3 h-3 ${i < Math.floor(guide.rating || 4.5) ? 'fill-current' : ''}`} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">({guide.reviews || 0})</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Detailed Guide View */
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
                        {/* Guide Header */}
                        <div className="relative h-64 md:h-96 overflow-hidden">
                            <img
                                src={activeGuide.image}
                                alt={activeGuide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(activeGuide.category).color}`}>
                                        {getCategoryConfig(activeGuide.category).label}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyConfig(activeGuide.difficulty).color}`}>
                                        {getDifficultyConfig(activeGuide.difficulty).label}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">{activeGuide.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={activeGuide.author?.avatar}
                                            alt={activeGuide.author?.name}
                                            className="w-8 h-8 rounded-full object-cover border-2 border-white"
                                        />
                                        <span>{activeGuide.author?.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineClock className="w-4 h-4" />
                                        <span>{activeGuide.readTime || '10 min read'}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineCalendar className="w-4 h-4" />
                                        <span>{formatDate(activeGuide.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineEye className="w-4 h-4" />
                                        <span>{activeGuide.views || '1.2k'} views</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveGuide(null)}
                                className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <HiOutlineArrowRight className="w-4 h-4 rotate-180" />
                                Back to Guides
                            </button>
                        </div>

                        {/* Guide Tabs */}
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <div className="flex overflow-x-auto">
                                {['overview', 'steps', 'resources', 'quiz'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-3 font-medium transition-all duration-300 capitalize ${activeTab === tab
                                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        {tab === 'overview' && 'Overview'}
                                        {tab === 'steps' && 'Step-by-Step'}
                                        {tab === 'resources' && 'Resources'}
                                        {tab === 'quiz' && 'Knowledge Check'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-8">
                            {/* Overview Tab */}
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You&apos;ll Learn</h2>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {activeGuide.description}
                                        </p>
                                    </div>

                                    {activeGuide.learningObjectives && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Learning Objectives</h3>
                                            <ul className="space-y-2">
                                                {activeGuide.learningObjectives.map((obj, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                        <span className="text-gray-600 dark:text-gray-400">{obj}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeGuide.videoUrl && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Video Tutorial</h3>
                                            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                                                <video
                                                    ref={videoRef}
                                                    src={activeGuide.videoUrl}
                                                    className="w-full h-full"
                                                    controls
                                                    poster={activeGuide.videoPoster}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            onClick={() => setActiveTab('steps')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                        >
                                            Start Learning
                                        </button>
                                        <button
                                            onClick={() => toggleBookmark(activeGuide.id)}
                                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${bookmarkedGuides.includes(activeGuide.id)
                                                ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700'
                                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                }`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4 inline mr-2" />
                                            {bookmarkedGuides.includes(activeGuide.id) ? 'Saved' : 'Save for Later'}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Steps Tab */}
                            {activeTab === 'steps' && activeGuide.steps && (
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Step-by-Step Guide</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Progress: {progressTracking[activeGuide.id] || 0}%
                                            </span>
                                            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                                                    style={{ width: `${progressTracking[activeGuide.id] || 0}%` }}
                                                 />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {activeGuide.steps.map((step, idx) => {
                                            const isCompleted = completedSteps[activeGuide.id]?.has(idx);
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`p-5 rounded-xl border transition-all duration-300 ${isCompleted
                                                        ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                                                        : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                                                        }`}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="shrink-0">
                                                            <button
                                                                onClick={() => handleStepComplete(activeGuide.id, idx)}
                                                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                                                                    ? 'bg-green-500 text-white'
                                                                    : 'bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-green-500'
                                                                    }`}
                                                            >
                                                                {isCompleted ? <HiOutlineCheckCircle className="w-5 h-5" /> : <span className="text-sm font-medium">{idx + 1}</span>}
                                                            </button>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className={`font-semibold mb-2 ${isCompleted ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-gray-900 dark:text-white'}`}>
                                                                {step.title || `Step ${idx + 1}`}
                                                            </h3>
                                                            <p className={`text-sm ${isCompleted ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'}`}>
                                                                {step.description}
                                                            </p>
                                                            {step.codeExample && showCodeEditor && (
                                                                <div className="mt-3">
                                                                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                                                                        <code>{step.codeExample}</code>
                                                                    </pre>
                                                                    <button
                                                                        onClick={() => executeCode(step.codeExample)}
                                                                        className="mt-2 text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
                                                                    >
                                                                        Run Example
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="flex justify-between pt-4">
                                        <button
                                            onClick={() => setShowCodeEditor(!showCodeEditor)}
                                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            {showCodeEditor ? 'Hide Code Editor' : 'Show Code Examples'}
                                        </button>
                                        {codeOutput && (
                                            <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                                {codeOutput}
                                            </pre>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Resources Tab */}
                            {activeTab === 'resources' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Additional Resources</h2>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {activeGuide.resources?.map((resource, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                                                {getIcon(resource.icon, "w-6 h-6 text-blue-600")}
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-900 dark:text-white">{resource.title}</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                                                </div>
                                                <Link href={resource.link} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                                                    Download
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <HiOutlineLightBulb className="w-6 h-6 text-yellow-500" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pro Tip</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {activeGuide.proTip || "Bookmark this guide and revisit as needed. Practice each step multiple times to reinforce your learning."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quiz Tab */}
                            {activeTab === 'quiz' && activeGuide.quiz && (
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Knowledge Check</h2>
                                        {showQuizResults && (
                                            <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                <span className="text-green-700 dark:text-green-400 font-semibold">
                                                    Score: {calculateQuizScore(activeGuide.quiz).percentage}%
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400">
                                        Test your understanding of the concepts covered in this guide.
                                    </p>

                                    <div className="space-y-6">
                                        {activeGuide.quiz.questions.map((question, qIdx) => (
                                            <div key={qIdx} className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                                                <p className="font-medium text-gray-900 dark:text-white mb-3">
                                                    {qIdx + 1}. {question.text}
                                                </p>
                                                <div className="space-y-2">
                                                    {question.options.map((option, oIdx) => (
                                                        <label key={oIdx} className="flex items-center gap-3 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name={`question_${qIdx}`}
                                                                value={oIdx}
                                                                checked={quizAnswers[`${activeGuide.id}_${qIdx}`] === oIdx}
                                                                onChange={() => handleQuizAnswer(`${activeGuide.id}_${qIdx}`, oIdx)}
                                                                className="w-4 h-4 text-blue-600"
                                                                disabled={showQuizResults}
                                                            />
                                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                {showQuizResults && (
                                                    <div className={`mt-3 text-sm ${quizAnswers[`${activeGuide.id}_${qIdx}`] === question.correctAnswer
                                                        ? 'text-green-600'
                                                        : 'text-red-600'
                                                        }`}>
                                                        {quizAnswers[`${activeGuide.id}_${qIdx}`] === question.correctAnswer
                                                            ? '✓ Correct!'
                                                            : `✗ Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        {!showQuizResults ? (
                                            <button
                                                onClick={() => setShowQuizResults(true)}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                            >
                                                Submit Answers
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    setShowQuizResults(false);
                                                    setQuizAnswers({});
                                                }}
                                                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                            >
                                                Retake Quiz
                                            </button>
                                        )}
                                    </div>

                                    {showQuizResults && calculateQuizScore(activeGuide.quiz).percentage >= 80 && (
                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                            <HiOutlineBadgeCheck className="w-8 h-8 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold text-green-700 dark:text-green-400">Congratulations!</h4>
                                                <p className="text-sm text-green-600 dark:text-green-300">
                                                    You&apos;ve mastered this guide! Consider moving on to the next topic in the series.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {filteredGuides.length === 0 && !activeGuide && (
                    <div className="text-center py-12">
                        <HiOutlineBookOpen className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No guides found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && !activeGuide && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineMail className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Weekly Learning</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.newsletter?.title || "Get new tutorials in your inbox"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.newsletter?.description || "Subscribe to receive weekly tutorials, expert tips, and exclusive resources."}
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Email for tutorials"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.tutorials || "50+"}</div>
                                    <div className="text-sm text-blue-100">Step-by-Step Guides</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.videos || "25+"}</div>
                                    <div className="text-sm text-blue-100">Video Tutorials</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
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

export default HowToGuidesSection3;

