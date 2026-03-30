// page/frontend/Blog/BestPracticesSection/BestPracticesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    HiOutlineLightBulb,
    HiOutlineChartBar,
    HiOutlineTruck,
    HiOutlineCube,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineGlobe,
    HiOutlineTrendingUp,
    HiOutlineCheckCircle,
    HiOutlineXCircle,
    HiArrowRight,
    HiOutlineStar,
    HiOutlineEye,
    HiOutlineCalendar,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineDownload,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineSparkles,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineClipboardList,
    HiOutlineScale,
    HiOutlineCurrencyDollar,
    HiOutlineRefresh,
    HiOutlineCog,
    HiOutlineCalculator,
    HiOutlineChartPie,
    HiOutlineChartSquareBar,
    HiOutlineClipboardCheck,
    HiOutlineBadgeCheck,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineExternalLink,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineBookOpen,
    HiOutlineTemplate,
    HiOutlineCode,
    HiOutlineCloudUpload,
    HiOutlineDatabase,
    HiOutlineServer,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineZoomIn,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineCreditCard
} from 'react-icons/hi';


const BestPracticesSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('practices');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [savedPractices, setSavedPractices] = useState([]);
    const [assessmentAnswers, setAssessmentAnswers] = useState({});
    const [assessmentResult, setAssessmentResult] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [maturityLevel, setMaturityLevel] = useState(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('bestPracticesSaved');
        if (saved) setSavedPractices(JSON.parse(saved));
        const savedAssessment = localStorage.getItem('maturityAssessment');
        if (savedAssessment) setAssessmentAnswers(JSON.parse(savedAssessment));
    }, []);

    useEffect(() => {
        localStorage.setItem('bestPracticesSaved', JSON.stringify(savedPractices));
    }, [savedPractices]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            lightbulb: <HiOutlineLightBulb className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            truck: <HiOutlineTruck className={className} />,
            cube: <HiOutlineCube className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            clock: <HiOutlineClock className={className} />,
            users: <HiOutlineUsers className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            xcircle: <HiOutlineXCircle className={className} />,
            star: <HiOutlineStar className={className} />,
            eye: <HiOutlineEye className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            download: <HiOutlineDownload className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            scale: <HiOutlineScale className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            cog: <HiOutlineCog className={className} />,
            calculator: <HiOutlineCalculator className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            bar: <HiOutlineChartSquareBar className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            badgeCheck: <HiOutlineBadgeCheck className={className} />,
            thumbsUp: <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            template: <HiOutlineTemplate className={className} />,
            code: <HiOutlineCode className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            credit: <HiOutlineCreditCard className={className} />
        };
        return icons[iconName] || <HiOutlineLightBulb className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management', borderColor: 'border-blue-200 dark:border-blue-800' },
            'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations', borderColor: 'border-purple-200 dark:border-purple-800' },
            'transportation': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'truck', label: 'Transportation', borderColor: 'border-green-200 dark:border-green-800' },
            'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment', borderColor: 'border-orange-200 dark:border-orange-800' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability', borderColor: 'border-emerald-200 dark:border-emerald-800' },
            'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation', borderColor: 'border-indigo-200 dark:border-indigo-800' },
            'risk': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Risk Management', borderColor: 'border-red-200 dark:border-red-800' },
            'people': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'People & Culture', borderColor: 'border-pink-200 dark:border-pink-800' }
        };
        return configs[category] || configs.inventory;
    };

    // Get maturity level configuration
    const getMaturityConfig = (level) => {
        const configs = {
            'initial': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Initial', description: 'Ad-hoc processes, limited visibility' },
            'developing': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Developing', description: 'Some processes defined, partial visibility' },
            'defined': { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', label: 'Defined', description: 'Standardized processes, good visibility' },
            'managed': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Managed', description: 'Measured and controlled processes' },
            'optimizing': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Optimizing', description: 'Continuous improvement culture' }
        };
        return configs[level] || configs.initial;
    };

    // Handle save practice
    const handleSavePractice = (practiceId) => {
        setSavedPractices(prev =>
            prev.includes(practiceId)
                ? prev.filter(id => id !== practiceId)
                : [...prev, practiceId]
        );
    };

    // Handle assessment answer
    const handleAssessmentAnswer = (questionId, value) => {
        setAssessmentAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    // Calculate maturity assessment result
    const calculateMaturity = () => {
        const questions = config?.maturityAssessment?.questions || [];
        const totalScore = Object.values(assessmentAnswers).reduce((sum, val) => sum + val, 0);
        const maxScore = questions.length * 5;
        const percentage = (totalScore / maxScore) * 100;

        let level = 'initial';
        if (percentage >= 80) level = 'optimizing';
        else if (percentage >= 60) level = 'managed';
        else if (percentage >= 40) level = 'defined';
        else if (percentage >= 20) level = 'developing';

        setAssessmentResult({ percentage, level, totalScore, maxScore });
        setMaturityLevel(level);
        localStorage.setItem('maturityAssessment', JSON.stringify(assessmentAnswers));
    };

    // Filter practices
    const getFilteredPractices = useCallback(() => {
        let practices = config?.practices || [];

        if (searchQuery) {
            practices = practices.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            practices = practices.filter(p => p.category === selectedCategory);
        }

        return practices;
    }, [config?.practices, searchQuery, selectedCategory]);

    const filteredPractices = getFilteredPractices();
    const categories = config?.categories || [
        { id: 'all', label: 'All Practices', icon: 'sparkles', count: config?.practices?.length || 0 },
        { id: 'inventory', label: 'Inventory', icon: 'cube' },
        { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
        { id: 'transportation', label: 'Transportation', icon: 'truck' },
        { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
        { id: 'technology', label: 'Technology', icon: 'cog' }
    ];

    // Webinars and videos
    const webinars = config?.webinars || [];
    const toolkits = config?.toolkits || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Best Practices Knowledge Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-3" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="20" cy="80" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="80" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-3)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineBadgeCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Best Practices Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Supply Chain"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Best Practices"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Comprehensive resources, expert insights, and proven frameworks to help you achieve supply chain excellence."}
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
                            placeholder={config?.searchPlaceholder || "Search best practices, webinars, or toolkits..."}
                            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            aria-label="Search best practices"
                        />
                    </div>
                </div>

                {/* Main Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <div className="flex flex-wrap gap-6">
                        {[
                            { id: 'practices', label: 'Best Practices', icon: 'lightbulb', count: filteredPractices.length },
                            { id: 'assessment', label: 'Maturity Assessment', icon: 'clipboardCheck', count: null },
                            { id: 'webinars', label: 'Webinars & Videos', icon: 'video', count: webinars.length },
                            { id: 'toolkits', label: 'Toolkits & Templates', icon: 'template', count: toolkits.length }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === tab.id
                                        ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                                        : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                {getIcon(tab.icon, "w-5 h-5")}
                                {tab.label}
                                {tab.count !== null && tab.count > 0 && (
                                    <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Best Practices Tab */}
                {activeTab === 'practices' && (
                    <>
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {getIcon(category.icon, "w-4 h-4")}
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Practices Grid */}
                        <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                : 'grid-cols-1'
                            }`}>
                            {filteredPractices.map((practice) => {
                                const categoryConfig = getCategoryConfig(practice.category);
                                const isSaved = savedPractices.includes(practice.id);

                                return (
                                    <div
                                        key={practice.id}
                                        className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                            }`}
                                    >
                                        <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-64 md:shrink-0' : ''}`}>
                                            <img
                                                src={practice.image}
                                                alt={practice.title}
                                                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-48 md:h-full' : 'h-48'
                                                    }`}
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                    {categoryConfig.label}
                                                </span>
                                            </div>
                                            {practice.videoUrl && (
                                                <button
                                                    onClick={() => {
                                                        setCurrentVideo(practice.videoUrl);
                                                        setShowVideoModal(true);
                                                    }}
                                                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                        <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                                    </div>
                                                </button>
                                            )}
                                        </div>

                                        <div className="p-6 flex-1">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <HiOutlineClock className="w-4 h-4" />
                                                    <span>{practice.readTime || '8 min read'}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleSavePractice(practice.id)}
                                                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                                                >
                                                    <HiOutlineBookmark className={`w-5 h-5 ${isSaved ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                                </button>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                <Link href={practice.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                    {practice.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                                {practice.description}
                                            </p>

                                            {practice.keyMetrics && (
                                                <div className="grid grid-cols-3 gap-2 mb-4">
                                                    {practice.keyMetrics.map((metric, idx) => (
                                                        <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                                                            <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={practice.author?.avatar}
                                                        alt={practice.author?.name}
                                                        className="w-6 h-6 rounded-full object-cover"
                                                    />
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{practice.author?.name}</span>
                                                </div>
                                                <Link
                                                    href={practice.link}
                                                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                                >
                                                    Read More
                                                    <HiArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* Maturity Assessment Tab */}
                {activeTab === 'assessment' && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineClipboardCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Supply Chain Maturity Assessment
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    Answer the following questions to assess your organization's supply chain maturity level and get personalized recommendations.
                                </p>
                            </div>

                            {!assessmentResult ? (
                                <>
                                    <div className="space-y-6 mb-8">
                                        {config?.maturityAssessment?.questions?.map((q, idx) => (
                                            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                                <p className="font-medium text-gray-900 dark:text-white mb-3">{idx + 1}. {q.text}</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {[1, 2, 3, 4, 5].map((rating) => (
                                                        <button
                                                            key={rating}
                                                            onClick={() => handleAssessmentAnswer(idx, rating)}
                                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${assessmentAnswers[idx] === rating
                                                                    ? 'bg-blue-600 text-white'
                                                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                                                }`}
                                                        >
                                                            {rating === 1 && 'Very Low'}
                                                            {rating === 2 && 'Low'}
                                                            {rating === 3 && 'Moderate'}
                                                            {rating === 4 && 'High'}
                                                            {rating === 5 && 'Very High'}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            onClick={calculateMaturity}
                                            disabled={Object.keys(assessmentAnswers).length !== config?.maturityAssessment?.questions?.length}
                                            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${Object.keys(assessmentAnswers).length === config?.maturityAssessment?.questions?.length
                                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            Calculate My Maturity Level
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="mb-6">
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                            <HiOutlineBadgeCheck className="w-12 h-12 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            Your Maturity Level: {getMaturityConfig(assessmentResult.level).label}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {getMaturityConfig(assessmentResult.level).description}
                                        </p>
                                    </div>

                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                                        <div
                                            className="bg-linear-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                                            style={{ width: `${assessmentResult.percentage}%` }}
                                         />
                                    </div>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                        Score: {assessmentResult.totalScore} / {assessmentResult.maxScore} ({Math.round(assessmentResult.percentage)}%)
                                    </p>

                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={() => {
                                                setAssessmentResult(null);
                                                setAssessmentAnswers({});
                                            }}
                                            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Retake Assessment
                                        </button>
                                        <Link
                                            href="/resources/maturity-report"
                                            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Download Full Report
                                        </Link>
                                    </div>

                                    {/* Recommended Practices */}
                                    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Next Steps</h4>
                                        <ul className="text-left space-y-2">
                                            {config?.maturityAssessment?.recommendations?.[assessmentResult.level]?.map((rec, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                    {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Webinars Tab */}
                {activeTab === 'webinars' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {webinars.map((webinar) => (
                            <div
                                key={webinar.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => {
                                    setCurrentVideo(webinar.videoUrl);
                                    setShowVideoModal(true);
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={webinar.thumbnail}
                                        alt={webinar.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                                            <HiOutlineClock className="w-3 h-3" />
                                            {webinar.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(webinar.category).color}`}>
                                            {webinar.category}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{webinar.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {webinar.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                                        {webinar.description}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={webinar.speaker?.avatar}
                                            alt={webinar.speaker?.name}
                                            className="w-6 h-6 rounded-full object-cover"
                                        />
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{webinar.speaker?.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Toolkits Tab */}
                {activeTab === 'toolkits' && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {toolkits.map((toolkit) => (
                            <div
                                key={toolkit.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shrink-0">
                                        {getIcon(toolkit.icon, "w-6 h-6 text-blue-600")}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{toolkit.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{toolkit.description}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{toolkit.format} • {toolkit.pages} pages</span>
                                            <Link
                                                href={toolkit.downloadLink}
                                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                            >
                                                <HiOutlineDownload className="w-4 h-4" />
                                                Download
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {activeTab === 'practices' && filteredPractices.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineLightBulb className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
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

                {/* Newsletter Section */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineMail className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.newsletter?.title || "Get the latest best practices"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.newsletter?.description || "Subscribe to receive weekly best practices, case studies, and expert insights."}
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Email for best practices newsletter"
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
                                    <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.practices || "50+"}</div>
                                    <div className="text-sm text-blue-100">Best Practices</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <div className="text-2xl font-bold mb-1">{config?.newsletter?.stats?.experts || "25+"}</div>
                                    <div className="text-sm text-blue-100">Expert Contributors</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-5 h-5" />
                            </button>
                            <video
                                ref={videoRef}
                                src={currentVideo}
                                className="w-full"
                                controls
                                autoPlay
                            />
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

export default BestPracticesSection3;

