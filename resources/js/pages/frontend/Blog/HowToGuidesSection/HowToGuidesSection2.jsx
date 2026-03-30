// page/frontend/Blog/HowToGuidesSection/HowToGuidesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
    HiArrowRight,
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
    HiOutlineGlobe
} from 'react-icons/hi';

const HowToGuidesSection2 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [completedSteps, setCompletedSteps] = useState({});

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
            globe: <HiOutlineGlobe className={className} />
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
            beginner: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Beginner', icon: 'star' },
            intermediate: { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', label: 'Intermediate', icon: 'rocket' },
            advanced: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Advanced', icon: 'fire' }
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
            'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
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
            return { ...prev, [guideId]: newGuideSteps };
        });
    };

    // Calculate guide progress
    const getGuideProgress = (guide) => {
        const completed = completedSteps[guide.id]?.size || 0;
        const total = guide.steps?.length || 0;
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    };

    // Filter guides
    const getFilteredGuides = () => {
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
    };

    const filteredGuides = getFilteredGuides();
    const categories = config?.categories || [
        { id: 'all', label: 'All Guides', icon: 'sparkles' },
        { id: 'getting-started', label: 'Getting Started', icon: 'rocket' },
        { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
        { id: 'fulfillment', label: 'Fulfillment', icon: 'truck' },
        { id: 'analytics', label: 'Analytics', icon: 'chart' },
        { id: 'api', label: 'API & Integration', icon: 'code' }
    ];

    // Learning paths
    const learningPaths = config?.learningPaths || [];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="How-to Guides Section"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Interactive Tutorials"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Learn"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain"}</span> {config?.title?.suffix || "Operations"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Master supply chain management with our interactive tutorials, video walkthroughs, and step-by-step guides. Learn at your own pace."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{config?.stats?.totalGuides || 50}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Step-by-Step Guides</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{config?.stats?.videoTutorials || 25}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Video Tutorials</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{config?.stats?.students || "10k+"}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Active Learners</div>
                        </div>
                    </div>
                </div>

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
                            placeholder={config?.searchPlaceholder || "Search tutorials, guides, or topics..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search guides"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* View Mode Toggle */}
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                {getIcon('grid', "w-4 h-4")}
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                {getIcon('list', "w-4 h-4")}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
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

                {/* Learning Paths Section */}
                {config?.showLearningPaths && learningPaths.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiOutlineFlag className="w-6 h-6 text-blue-600" />
                                    Learning Paths
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Curated learning journeys to master specific skills</p>
                            </div>
                            <Link href="/learning-paths" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                                View all paths →
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {learningPaths.map((path) => (
                                <div
                                    key={path.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${path.bgColor} flex items-center justify-center`}>
                                            {getIcon(path.icon, "w-6 h-6 text-white")}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{path.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{path.guides} guides • {path.duration}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-gray-500 dark:text-gray-400">Progress</span>
                                            <span className="text-blue-600 dark:text-blue-400">{path.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${path.progress}%` }} />
                                        </div>
                                    </div>
                                    <Link
                                        href={path.link}
                                        className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold group/link"
                                    >
                                        Start learning
                                        <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Guides Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1'
                    }`}>
                    {filteredGuides.map((guide) => {
                        const difficultyConfig = getDifficultyConfig(guide.difficulty);
                        const categoryConfig = getCategoryConfig(guide.category);
                        const progress = getGuideProgress(guide);
                        const totalSteps = guide.steps?.length || 0;
                        const completedCount = completedSteps[guide.id]?.size || 0;

                        return (
                            <div
                                key={guide.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Guide Image / Video Thumbnail */}
                                <Link href={guide.link} className={`block overflow-hidden relative ${viewMode === 'list' ? 'md:w-80 md:shrink-0' : ''}`}>
                                    <div className="relative">
                                        <img
                                            src={guide.image}
                                            alt={guide.title}
                                            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                                                }`}
                                            loading="lazy"
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
                                        {progress > 0 && (
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${progress}%` }} />
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{guide.readTime || '10 min read'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{guide.views || '1.2k'} views</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineStar className="w-4 h-4" />
                                            <span>{guide.rating || '4.8'} ({guide.reviews || 50})</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        <Link href={guide.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {guide.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {guide.description}
                                    </p>

                                    {/* Progress Bar (if steps exist) */}
                                    {totalSteps > 0 && (
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-500 dark:text-gray-400">Progress</span>
                                                <span className="text-blue-600 dark:text-blue-400">{progress}% complete</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {completedCount} of {totalSteps} steps completed
                                            </p>
                                        </div>
                                    )}

                                    {/* Step Preview */}
                                    {guide.steps && guide.steps.length > 0 && (
                                        <div className="mb-4">
                                            <div className="space-y-2">
                                                {guide.steps.slice(0, 3).map((step, idx) => {
                                                    const isCompleted = completedSteps[guide.id]?.has(idx);
                                                    return (
                                                        <div key={idx} className="flex items-start gap-2 text-sm">
                                                            <button
                                                                onClick={() => handleStepComplete(guide.id, idx)}
                                                                className="mt-0.5"
                                                            >
                                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isCompleted
                                                                        ? 'bg-green-500 border-green-500'
                                                                        : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                                                                    }`}>
                                                                    {isCompleted && <HiOutlineCheckCircle className="w-3 h-3 text-white" />}
                                                                </div>
                                                            </button>
                                                            <span className={`${isCompleted ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
                                                                {step}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                                {guide.steps.length > 3 && (
                                                    <p className="text-sm text-blue-600 dark:text-blue-400 pl-7">
                                                        + {guide.steps.length - 3} more steps
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {guide.tags && guide.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {guide.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={guide.author?.avatar}
                                                alt={guide.author?.name}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{guide.author?.name}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{guide.author?.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {guide.videoUrl && (
                                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" aria-label="Watch video">
                                                    <HiOutlinePlay className="w-4 h-4" />
                                                </button>
                                            )}
                                            <Link
                                                href={guide.link}
                                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all duration-300"
                                            >
                                                Start Guide
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredGuides.length === 0 && (
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
                {config?.showNewsletter && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineMail className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Weekly Tutorials</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.newsletter?.title || "Get new guides in your inbox"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.newsletter?.description || "Subscribe to receive weekly tutorials, tips, and best practices delivered straight to your inbox."}
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Email for guide updates"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-xs text-blue-100 mt-3">
                                    {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
                                </p>
                            </div>

                            {/* Popular Topics */}
                            <div>
                                <p className="text-sm font-medium mb-4">Popular topics this week:</p>
                                <div className="flex flex-wrap gap-2">
                                    {config?.popularTopics?.map((topic, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
};

export default HowToGuidesSection2;

