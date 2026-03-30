// page/frontend/Blog/ExpertArticlesSection/ExpertArticlesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef } from 'react';

// Icons
import {
    HiOutlineUser,
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
    HiOutlinePlay,
    HiOutlineVideoCamera,
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
    HiOutlineCalendar as HiOutlineCalendarIcon
} from 'react-icons/hi';

const ExpertArticlesSection3 = ({ config }) => {
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedArticles, setSavedArticles] = useState([]);
    const [activeTab, setActiveTab] = useState('masterclasses');
    const [expandedPaper, setExpandedPaper] = useState(null);
    const searchInputRef = useRef(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            user: <HiOutlineUser className={className} />,
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
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
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
            calendarIcon: <HiOutlineCalendarIcon className={className} />
        };
        return icons[iconName] || <HiOutlineAcademicCap className={className} />;
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'strategy': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chart', label: 'Strategy' },
            'technology': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Technology' },
            'operations': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'cog', label: 'Operations' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability' },
            'leadership': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Leadership' },
            'innovation': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'rocket', label: 'Innovation' }
        };
        return configs[category] || configs.strategy;
    };

    // Handle save article
    const handleSaveArticle = (articleId) => {
        setSavedArticles(prev =>
            prev.includes(articleId)
                ? prev.filter(id => id !== articleId)
                : [...prev, articleId]
        );
    };

    // Filter articles
    const getFilteredArticles = useCallback(() => {
        let articles = config?.articles || [];

        if (searchQuery) {
            articles = articles.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            articles = articles.filter(a => a.category === selectedCategory);
        }

        if (selectedExpert) {
            articles = articles.filter(a => a.author?.id === selectedExpert);
        }

        return articles;
    }, [config?.articles, searchQuery, selectedCategory, selectedExpert]);

    // Filtered articles
    const filteredArticles = getFilteredArticles();

    // Categories
    const categories = config?.categories || [
        { id: 'all', label: 'All Topics', icon: 'newspaper' },
        { id: 'strategy', label: 'Strategy', icon: 'chart' },
        { id: 'technology', label: 'Technology', icon: 'chip' },
        { id: 'operations', label: 'Operations', icon: 'cog' },
        { id: 'sustainability', label: 'Sustainability', icon: 'globe' },
        { id: 'leadership', label: 'Leadership', icon: 'users' },
        { id: 'innovation', label: 'Innovation', icon: 'rocket' }
    ];

    // Experts data
    const experts = config?.experts || [];

    // Masterclasses
    const masterclasses = config?.masterclasses || [];

    // Research papers
    const researchPapers = config?.researchPapers || [];

    // Upcoming events
    const upcomingEvents = config?.upcomingEvents || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Expert Knowledge Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineAcademicCap className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Expert Knowledge Hub"}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Learn from"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "World-Class Experts"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Access masterclasses, research papers, and exclusive content from leading supply chain experts and practitioners."}
                    </p>
                </div>

                {/* Main Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <div className="flex flex-wrap gap-6">
                        {[
                            { id: 'masterclasses', label: 'Masterclasses', icon: 'certificate', count: masterclasses.length },
                            { id: 'research', label: 'Research Papers', icon: 'document', count: researchPapers.length },
                            { id: 'articles', label: 'Expert Articles', icon: 'book', count: filteredArticles.length },
                            { id: 'events', label: 'Live Events', icon: 'calendarIcon', count: upcomingEvents.length },
                            { id: 'experts', label: 'Expert Directory', icon: 'users', count: experts.length }
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
                                {tab.count > 0 && (
                                    <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masterclasses Tab */}
                {activeTab === 'masterclasses' && (
                    <div>
                        {/* Featured Masterclass */}
                        {config?.featuredMasterclass && (
                            <div className="mb-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                                <div className="grid md:grid-cols-2 gap-8 p-8 text-white">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <HiOutlineBadgeCheck className="w-5 h-5" />
                                            <span className="text-sm font-semibold uppercase">Featured Masterclass</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{config.featuredMasterclass.title}</h2>
                                        <p className="text-blue-100 mb-6">{config.featuredMasterclass.description}</p>
                                        <div className="flex items-center gap-4 mb-6">
                                            <img
                                                src={config.featuredMasterclass.instructor.avatar}
                                                alt={config.featuredMasterclass.instructor.name}
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                            <div>
                                                <p className="font-semibold">{config.featuredMasterclass.instructor.name}</p>
                                                <p className="text-sm text-blue-100">{config.featuredMasterclass.instructor.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={config.featuredMasterclass.link}
                                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                            >
                                                Enroll Now
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                                                <HiOutlinePlay className="w-4 h-4" />
                                                Watch Trailer
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src={config.featuredMasterclass.image}
                                            alt={config.featuredMasterclass.title}
                                            className="rounded-2xl shadow-xl w-full object-cover h-64"
                                        />
                                        <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-full p-3 shadow-lg">
                                            <HiOutlineCertificate className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Masterclasses Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {masterclasses.map((masterclass) => (
                                <div
                                    key={masterclass.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={masterclass.image}
                                            alt={masterclass.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                {masterclass.level}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                                                    <HiOutlineClock className="w-3 h-3" />
                                                    {masterclass.duration}
                                                </span>
                                                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
                                                    <HiOutlineVideoCamera className="w-3 h-3" />
                                                    {masterclass.lessons} lessons
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <img
                                                src={masterclass.instructor.avatar}
                                                alt={masterclass.instructor.name}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{masterclass.instructor.name}</p>
                                                <p className="text-xs text-gray-500">{masterclass.instructor.title}</p>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {masterclass.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {masterclass.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-1">
                                                <HiOutlineStar className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-semibold">{masterclass.rating}</span>
                                                <span className="text-xs text-gray-500">({masterclass.reviews})</span>
                                            </div>
                                            <Link
                                                href={masterclass.link}
                                                className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Research Papers Tab */}
                {activeTab === 'research' && (
                    <div className="space-y-4 mb-12">
                        {researchPapers.map((paper) => {
                            const isExpanded = expandedPaper === paper.id;
                            return (
                                <div
                                    key={paper.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(paper.category).color}`}>
                                                    {paper.category}
                                                </span>
                                                <span className="text-xs text-gray-500">{formatDate(paper.date)}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {paper.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                                {paper.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <HiOutlineUser className="w-4 h-4" />
                                                    {paper.authors.join(', ')}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <HiOutlineEye className="w-4 h-4" />
                                                    {paper.citations} citations
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={paper.downloadUrl}
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                                            >
                                                <HiOutlineDownload className="w-4 h-4" />
                                                Download PDF
                                            </a>
                                            <button
                                                onClick={() => setExpandedPaper(isExpanded ? null : paper.id)}
                                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                                            >
                                                {isExpanded ? 'Show Less' : 'Abstract'}
                                            </button>
                                        </div>
                                    </div>
                                    {isExpanded && (
                                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                {paper.abstract}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Expert Articles Tab */}
                {activeTab === 'articles' && (
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
                                    placeholder="Search articles..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ref={searchInputRef}
                                />
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Categories</option>
                                {categories.filter(c => c.id !== 'all').map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                            <select
                                value={selectedExpert || ''}
                                onChange={(e) => setSelectedExpert(e.target.value || null)}
                                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">All Experts</option>
                                {experts.map(expert => (
                                    <option key={expert.id} value={expert.id}>{expert.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {filteredArticles.map((article) => {
                                const categoryConfig = getCategoryConfig(article.category);
                                const isSaved = savedArticles.includes(article.id);

                                return (
                                    <div
                                        key={article.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                    >
                                        <Link href={article.link} className="block overflow-hidden relative">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                                    {categoryConfig.label}
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <HiOutlineCalendar className="w-4 h-4" />
                                                    <span>{formatDate(article.date)}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <HiOutlineClock className="w-4 h-4" />
                                                    <span>{article.readTime || '8 min read'}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                                <Link href={article.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                    {article.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={article.author?.avatar}
                                                        alt={article.author?.name}
                                                        className="w-6 h-6 rounded-full object-cover"
                                                    />
                                                    <span className="text-xs text-gray-500">{article.author?.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => handleSaveArticle(article.id)}
                                                        className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                    >
                                                        <HiOutlineBookmark className="w-4 h-4" />
                                                    </button>
                                                    <Link href={article.link} className="text-blue-600 text-sm font-semibold hover:underline">
                                                        Read More →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* Live Events Tab */}
                {activeTab === 'events' && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-48 md:h-full object-cover"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <HiOutlineCalendarIcon className="w-4 h-4" />
                                                <span>{formatDate(event.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={event.speaker.avatar}
                                                alt={event.speaker.name}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{event.speaker.name}</span>
                                            <span className="text-xs text-gray-500">{event.speaker.title}</span>
                                        </div>
                                        <div className="mt-4">
                                            <Link
                                                href={event.link}
                                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                                            >
                                                Register Now
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Expert Directory Tab */}
                {activeTab === 'experts' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                            >
                                <img
                                    src={expert.avatar}
                                    alt={expert.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 dark:border-blue-900"
                                />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{expert.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{expert.title}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{expert.bio}</p>
                                <div className="flex justify-center gap-4 mb-4">
                                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{expert.articles} articles</span>
                                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{expert.yearsExperience}+ years</span>
                                </div>
                                <Link
                                    href={`/experts/${expert.id}`}
                                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                >
                                    View Profile
                                    <HiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {activeTab === 'articles' && filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedExpert(null);
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
                        <div className="text-center max-w-2xl mx-auto">
                            <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {config?.newsletter?.title || "Get Expert Insights"}
                            </h3>
                            <p className="text-blue-100 mb-6">
                                {config?.newsletter?.description || "Subscribe to receive exclusive masterclasses, research papers, and expert articles."}
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
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

export default ExpertArticlesSection3;