// frontend/AboutUs/LeadershipTeamSection/LeadershipTeamSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineMail,
    HiOutlineArrowRight,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
    HiOutlineGlobeAlt,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlineCalendar,
    HiOutlineStar,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineStar as HiOutlineStarIcon,
    HiOutlineSparkles,
    HiOutlineChip,
    HiOutlineUsers,
    HiOutlineLightBulb,
    HiOutlineHeart,
    HiOutlineQuestionMarkCircle,
    HiOutlineUserCircle,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

const LeadershipTeamSection2 = ({ config }) => {
    // ==================== STATE MANAGEMENT ====================
    const [openFaq, setOpenFaq] = useState(null);
    const [sortBy, setSortBy] = useState('name');
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [showFilters, setShowFilters] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeDepartment, setActiveDepartment] = useState('all');

    // ==================== REFS ====================
    const searchRef = useRef(null);

    // ==================== MEMOIZED DATA ====================
    const stats = config?.stats || [];
    const departments = config?.departments || [];
    const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
    const leaders = useMemo(() => config?.leaders || [], [config?.leaders]);
    const categories = useMemo(() => config?.categories || [], [config?.categories]); // config?.categories || [];


    // ==================== FILTERED DATA ====================
    const filteredLeaders = useMemo(() => {
        return leaders
            .filter(leader => {
                const matchesDepartment = activeDepartment === 'all' || leader.department === activeDepartment;
                const matchesSearch = searchQuery === '' ||
                    leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    leader.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    leader.bio.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesDepartment && matchesSearch;
            })
            .sort((a, b) => {
                if (sortBy === 'name') return a.name.localeCompare(b.name);
                if (sortBy === 'title') return a.title.localeCompare(b.title);
                if (sortBy === 'experience') return (b.experience || 0) - (a.experience || 0);
                return 0;
            });
    }, [leaders, activeDepartment, searchQuery, sortBy]);

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
            return matchesCategory && matchesSearch;
        });
    }, [faqs, activeCategory, searchQuery]);

    // ==================== HELPER FUNCTIONS ====================

    /**
     * Get icon component by name
     * @param {string} iconName - Name of the icon from config
     * @param {string} className - CSS classes for styling
     * @returns {JSX.Element} - React Icon component
     */
    const getIcon = useCallback((iconName, className = "w-5 h-5") => {
        const icons = {
            HiOutlineChevronDown,
            HiOutlineChevronUp,
            HiOutlineSearch,
            HiOutlineMail,
            HiOutlineArrowRight,
            HiOutlineBriefcase,
            HiOutlineAcademicCap,
            HiOutlineGlobeAlt,
            HiOutlineX,
            HiOutlineThumbUp,
            HiOutlineThumbDown,
            HiOutlineExternalLink,
            HiOutlineFilter,
            HiOutlineBookmark,
            HiOutlinePrinter,
            HiOutlineDownload,
            HiOutlineCalendar,
            HiOutlineStar,
            HiOutlineUserGroup,
            HiOutlineChartBar,
            HiOutlineStarIcon,
            HiOutlineSparkles,
            HiOutlineChip,
            HiOutlineMegaphone,
            HiOutlineUsers,
            HiOutlineLightBulb,
            HiOutlineHeart,
            HiOutlineQuestionMarkCircle,
            HiOutlineUserCircle,
            AiOutlineLinkedin,
            AiOutlineTwitter,
        };
        const IconComponent = icons[iconName] || HiOutlineUserCircle;
        return <IconComponent className={className} />;
    }, []);

    /**
     * Toggle FAQ accordion item
     * @param {number} index - Index of the FAQ to toggle
     */
    const toggleFaq = useCallback((index) => {
        setOpenFaq(prev => prev === index ? null : index);
    }, []);

    /**
     * Handle helpful/unhelpful vote
     * @param {string|number} faqId - ID of the FAQ
     * @param {boolean} isHelpful - Whether the answer was helpful
     */
    const handleHelpful = useCallback((faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('leadershipFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    }, []);

    /**
     * Handle save/unsave FAQ bookmark
     * @param {string|number} faqId - ID of the FAQ to save or unsave
     */
    const handleSaveFaq = useCallback((faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedLeadershipFaqs', JSON.stringify(newSaved));
            return newSaved;
        });
    }, []);

    /**
     * Export FAQs to JSON file
     */
    const handleExport = useCallback(() => {
        const exportData = filteredFaqs.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            category: categories.find(c => c.id === faq.category)?.name || faq.category,
            tags: faq.tags
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'leadership-faq-export.json');
        linkElement.click();
    }, [filteredFaqs, categories]);

    /**
     * Print FAQs
     */
    const handlePrint = useCallback(() => {
        window.print();
    }, []);

    /**
     * Clear search query
     */
    const clearSearch = useCallback(() => {
        setSearchQuery('');
        searchRef.current?.focus();
    }, []);

    /**
     * Highlight search matches in text
     * @param {string} text - Text to highlight
     * @param {string} query - Search query to highlight
     * @returns {JSX.Element|string} Text with highlighted matches
     */
    const highlightText = useCallback((text, query) => {
        if (!query || !text) return text;
        const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i} className="bg-indigo-200 dark:bg-indigo-800 text-gray-900 dark:text-white px-0.5 rounded">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    }, []);


    // ==================== LOCAL STORAGE EFFECTS ====================
    useEffect(() => {
        const savedVotes = localStorage.getItem('leadershipFaqHelpfulVotes');
        if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
        const saved = localStorage.getItem('savedLeadershipFaqs');
        if (saved) setSavedFaqs(JSON.parse(saved));
    }, []);

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Leadership Team Help Center"
        >
            {/* ==================== BACKGROUND DECORATIONS ==================== */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
            <div className="absolute top-1/3 left-10 w-64 h-64 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ==================== SECTION HEADER ==================== */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-indigo-100 dark:bg-indigo-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-indigo-200 dark:border-indigo-800'}`}
                        aria-label="Leadership badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-indigo-700 dark:text-indigo-300'}`}>
                            {config?.badge?.text || "Executive Leadership"}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || 'Meet the'}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || 'Executive Team'}
                        </span>{' '}
                        {config?.title?.suffix || 'Driving Our Vision'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description || "Our executive leadership team brings together unparalleled expertise, diverse backgrounds, and a shared commitment to excellence. Get to know the people steering our strategic direction and shaping our future."}
                    </p>
                </div>

                {/* ==================== STATS ROW ==================== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="flex justify-center mb-2 text-indigo-600 dark:text-indigo-400">
                                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ==================== DEPARTMENT FILTERS ==================== */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveDepartment('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeDepartment === 'all'
                            ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        All Leaders
                    </button>
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setActiveDepartment(dept.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeDepartment === dept.id
                                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(dept.icon, "w-3 h-3")}
                            {dept.name}
                        </button>
                    ))}
                </div>

                {/* ==================== SEARCH AND ACTION BAR ==================== */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative" ref={searchRef}>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            {getIcon("HiOutlineSearch", "w-5 h-5")}
                        </div>
                        <input
                            type="text"
                            placeholder="Search leaders or leadership FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            aria-label="Search"
                        />
                        {searchQuery && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                aria-label="Clear search"
                            >
                                {getIcon("HiOutlineX", "w-5 h-5")}
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            aria-label="Toggle filters"
                        >
                            {getIcon("HiOutlineFilter", "w-4 h-4")}
                            Filters
                        </button>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                            aria-label="Sort leaders"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="title">Sort by Title</option>
                            <option value="experience">Sort by Experience</option>
                        </select>
                        <button
                            onClick={handleExport}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                            title="Export FAQs"
                        >
                            {getIcon("HiOutlineDownload", "w-4 h-4")}
                        </button>
                        <button
                            onClick={handlePrint}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                            title="Print FAQs"
                        >
                            {getIcon("HiOutlinePrinter", "w-4 h-4")}
                        </button>
                    </div>
                </div>

                {/* ==================== EXPANDED FILTERS PANEL ==================== */}
                {showFilters && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Department</label>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setActiveDepartment('all')}
                                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeDepartment === 'all'
                                            ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        All
                                    </button>
                                    {departments.map((dept) => (
                                        <button
                                            key={dept.id}
                                            onClick={() => setActiveDepartment(dept.id)}
                                            className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeDepartment === dept.id
                                                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                }`}
                                        >
                                            {getIcon(dept.icon, "w-3 h-3")}
                                            {dept.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                                >
                                    <option value="name">Name</option>
                                    <option value="title">Title</option>
                                    <option value="experience">Years of Experience</option>
                                </select>
                            </div>
                        </div>
                        {(activeDepartment !== 'all' || sortBy !== 'name') && (
                            <div className="mt-4 text-right">
                                <button
                                    onClick={() => {
                                        setActiveDepartment('all');
                                        setSortBy('name');
                                    }}
                                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* ==================== RESULTS COUNT ==================== */}
                {searchQuery && (
                    <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                        Found {filteredLeaders.length} leader{filteredLeaders.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </div>
                )}

                {/* ==================== LEADERSHIP GRID ==================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredLeaders.map((leader, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedLeader(leader);
                                setShowModal(true);
                            }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedLeader(leader) && setShowModal(true)}
                        >
                            <div className="relative h-64 bg-linear-to-br from-indigo-500 to-purple-600">
                                {leader.avatar ? (
                                    <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white text-8xl">
                                        {getIcon(leader.icon || "HiOutlineUserCircle", "w-24 h-24")}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-bold">{leader.name}</h3>
                                    <p className="text-sm opacity-90">{leader.title}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                                    {leader.bio}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        {getIcon("HiOutlineBriefcase", "w-3 h-3")}
                                        <span>{leader.experience}+ years exp.</span>
                                        {leader.education && (
                                            <>
                                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                                {getIcon("HiOutlineAcademicCap", "w-3 h-3")}
                                                <span>{leader.education.split(',')[0]}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {leader.linkedin && (
                                            <a
                                                href={leader.linkedin}
                                                className="text-gray-400 hover:text-indigo-600 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${leader.name} on LinkedIn`}
                                            >
                                                {getIcon("AiOutlineLinkedin", "w-4 h-4")}
                                            </a>
                                        )}
                                        {leader.twitter && (
                                            <a
                                                href={leader.twitter}
                                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${leader.name} on Twitter`}
                                            >
                                                {getIcon("AiOutlineTwitter", "w-4 h-4")}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ==================== EMPTY STATE FOR LEADERS ==================== */}
                {filteredLeaders.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                        <div className="flex justify-center mb-4 text-gray-400">
                            {getIcon("HiOutlineUserGroup", "w-12 h-12")}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No leaders found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                        <button
                            onClick={() => {
                                setActiveDepartment('all');
                                setSearchQuery('');
                            }}
                            className="mt-4 px-4 py-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* ==================== FAQ SECTION ==================== */}
                <div className="max-w-6xl mx-auto mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Common questions about our leadership team and their approach.
                    </p>

                    {/* FAQ Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === 'all'
                                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                                    ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {getIcon(category.icon, "w-3 h-3")}
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4 mb-12">
                        {filteredFaqs.map((faq, index) => {
                            const isSaved = savedFaqs.includes(faq.id);

                            return (
                                <div
                                    key={faq.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                                >
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                                        aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
                                    >
                                        <div className="flex items-start gap-3 pr-4">
                                            <div className="text-indigo-600 dark:text-indigo-400 mt-0.5">
                                                {getIcon(faq.icon, "w-5 h-5")}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-white">
                                                    {highlightText(faq.question, searchQuery)}
                                                </div>
                                                {faq.tags && faq.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-1">
                                                        {faq.tags.slice(0, 2).map((tag, idx) => (
                                                            <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSaveFaq(faq.id);
                                                }}
                                                className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                    }`}
                                                aria-label={isSaved ? "Remove from saved" : "Save question"}
                                            >
                                                {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-indigo-600' : ''}`)}
                                            </button>
                                            <div className="text-indigo-500 dark:text-indigo-400">
                                                {openFaq === index ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                                            </div>
                                        </div>
                                    </div>

                                    {openFaq === index && (
                                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {highlightText(faq.answer, searchQuery)}
                                            </p>
                                            {faq.link && (
                                                <Link
                                                    href={faq.link}
                                                    className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                                >
                                                    Learn more
                                                    {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                                </Link>
                                            )}

                                            {/* Helpful Section */}
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                                                    <button
                                                        onClick={() => handleHelpful(faq.id, true)}
                                                        className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === true
                                                            ? 'text-green-600 dark:text-green-400'
                                                            : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                                                            }`}
                                                    >
                                                        {getIcon("HiOutlineThumbUp", "w-4 h-4")}
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={() => handleHelpful(faq.id, false)}
                                                        className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === false
                                                            ? 'text-red-600 dark:text-red-400'
                                                            : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                                                            }`}
                                                    >
                                                        {getIcon("HiOutlineThumbDown", "w-4 h-4")}
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* FAQ Empty State */}
                    {filteredFaqs.length === 0 && searchQuery && (
                        <div className="text-center py-8">
                            <p className="text-gray-500 dark:text-gray-400">No FAQs found for "{searchQuery}"</p>
                        </div>
                    )}

                    {/* Saved FAQs Section */}
                    {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                {getIcon("HiOutlineBookmark", "w-5 h-5 text-indigo-600")}
                                Saved Questions
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-3">
                                            <div className="text-indigo-600 dark:text-indigo-400">
                                                {getIcon(faq.icon, "w-5 h-5")}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                                                <button
                                                    onClick={() => {
                                                        setActiveCategory(faq.category);
                                                        setSearchQuery('');
                                                        setOpenFaq(null);
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className="text-xs text-indigo-600 dark:text-indigo-400 mt-1 hover:underline"
                                                >
                                                    View in {categories.find(c => c.id === faq.category)?.name}
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => handleSaveFaq(faq.id)}
                                                className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                                aria-label="Remove from saved"
                                            >
                                                {getIcon("HiOutlineX", "w-4 h-4")}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* ==================== LEADERSHIP MODAL ==================== */}
                {showModal && selectedLeader && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                        role="dialog"
                        aria-label="Leader details"
                        aria-modal="true"
                    >
                        <div
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-48 bg-linear-to-r from-indigo-500 to-purple-600 rounded-t-3xl">
                                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                                    aria-label="Close modal"
                                >
                                    {getIcon("HiOutlineX", "w-6 h-6")}
                                </button>
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-16 left-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-4 border-white dark:border-gray-800">
                                    {selectedLeader.avatar ? (
                                        <img src={selectedLeader.avatar} alt={selectedLeader.name} className="w-full h-full object-cover rounded-2xl" />
                                    ) : (
                                        getIcon(selectedLeader.icon || "HiOutlineUserCircle", "w-16 h-16 text-indigo-600")
                                    )}
                                </div>
                                <div className="mt-20">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLeader.name}</h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{selectedLeader.title}</p>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                            {getIcon("HiOutlineBriefcase", "w-4 h-4")}
                                            <span>{selectedLeader.experience}+ years experience</span>
                                        </div>
                                        {selectedLeader.education && (
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                {getIcon("HiOutlineAcademicCap", "w-4 h-4")}
                                                <span>{selectedLeader.education}</span>
                                            </div>
                                        )}
                                        {selectedLeader.joined && (
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                {getIcon("HiOutlineCalendar", "w-4 h-4")}
                                                <span>Joined {selectedLeader.joined}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {selectedLeader.fullBio || selectedLeader.bio}
                                    </p>
                                    {selectedLeader.previousRoles && selectedLeader.previousRoles.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Previous Experience</h4>
                                            <ul className="space-y-1">
                                                {selectedLeader.previousRoles.map((role, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                        {getIcon("HiOutlineBriefcase", "w-3 h-3")}
                                                        {role}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {selectedLeader.achievements && selectedLeader.achievements.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                                            <ul className="space-y-1">
                                                {selectedLeader.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                        {getIcon("HiOutlineStar", "w-3 h-3 text-yellow-500")}
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        {selectedLeader.linkedin && (
                                            <a
                                                href={selectedLeader.linkedin}
                                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${selectedLeader.name} on LinkedIn`}
                                            >
                                                {getIcon("AiOutlineLinkedin", "w-5 h-5")}
                                            </a>
                                        )}
                                        {selectedLeader.twitter && (
                                            <a
                                                href={selectedLeader.twitter}
                                                className="text-gray-500 hover:text-indigo-400 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${selectedLeader.name} on Twitter`}
                                            >
                                                {getIcon("AiOutlineTwitter", "w-5 h-5")}
                                            </a>
                                        )}
                                        {selectedLeader.email && (
                                            <a
                                                href={`mailto:${selectedLeader.email}`}
                                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                                aria-label={`Email ${selectedLeader.name}`}
                                            >
                                                {getIcon("HiOutlineMail", "w-5 h-5")}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== CTA SECTION ==================== */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-indigo-100 dark:border-gray-700">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                            {getIcon("HiOutlineGlobeAlt", "w-6 h-6 text-indigo-600")}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                            {config?.contactText || "Interested in connecting with our leadership team? Reach out to learn more about speaking engagements or partnerships."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Contact Us"}
                            {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                        </Link>
                    </div>
                </div>
            </div>

            {/* ==================== STYLES ==================== */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        mark {
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
        </section>
    );
};

export default LeadershipTeamSection2;