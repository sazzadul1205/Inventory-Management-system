// frontend/AboutUs/CoreValuesSection/CoreValuesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineHeart,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineGlobeAlt,
    HiOutlineSparkles,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlinePause,
    HiOutlineUserGroup,
    HiOutlineFlag,
    HiOutlineBookOpen,
    HiOutlineQuestionMarkCircle,
    HiOutlineChartBar,
    HiOutlineShieldCheck,
    HiOutlineUsers,
    HiOutlineLightBulb,
    HiOutlineOfficeBuilding,
    HiOutlineAcademicCap,
    HiOutlineChat,
    HiOutlineUserCircle,
    HiOutlineCalendar,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const CoreValuesSection3 = ({ config }) => {
    // ==================== STATE MANAGEMENT ====================
    const [openFaq, setOpenFaq] = useState(null);
    const [sortBy, setSortBy] = useState('recent');
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [activeValue, setActiveValue] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('values');
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [showFilters, setShowFilters] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [autoplayValues, setAutoplayValues] = useState(true);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedRecognition, setSelectedRecognition] = useState(null);
    const [showRecognitionModal, setShowRecognitionModal] = useState(false);

    // ==================== REFS ====================
    const searchRef = useRef(null);
    const intervalRef = useRef(null);

    // ==================== MEMOIZED DATA ====================
    const stats = config?.stats || [];
    const values = config?.values || [];
    const videos = config?.videos || [];
    const initiatives = config?.initiatives || [];
    const testimonials = config?.testimonials || [];
    const recognitions = config?.recognitions || [];
    const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
    const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]); // config?.faqCategories || [];


    // ==================== FILTERED FAQS ====================
    const filteredFaqs = useMemo(() => {
        return faqs
            .filter(faq => {
                const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
                const matchesSearch = searchQuery === '' ||
                    faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => {
                if (sortBy === 'recent') return (b.updatedAt || '').localeCompare(a.updatedAt || '');
                if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
                if (sortBy === 'helpful') {
                    const aHelpful = helpfulVotes[a.id] === true ? 1 : 0;
                    const bHelpful = helpfulVotes[b.id] === true ? 1 : 0;
                    return bHelpful - aHelpful;
                }
                return 0;
            });
    }, [faqs, activeCategory, searchQuery, sortBy, helpfulVotes]);

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
            HiOutlineHeart,
            HiOutlineArrowRight,
            HiOutlineCheckCircle,
            HiOutlineGlobeAlt,
            HiOutlineSparkles,
            HiOutlineX,
            HiOutlineThumbUp,
            HiOutlineThumbDown,
            HiOutlineExternalLink,
            HiOutlineFilter,
            HiOutlineBookmark,
            HiOutlinePrinter,
            HiOutlineDownload,
            HiOutlinePlay,
            HiOutlinePause,
            HiOutlineUserGroup,
            HiOutlineFlag,
            HiOutlineBookOpen,
            HiOutlineQuestionMarkCircle,
            HiOutlineChartBar,
            HiOutlineTrophy,
            HiOutlineShieldCheck,
            HiOutlineUsers,
            HiOutlineLightBulb,
            HiOutlineOfficeBuilding,
            HiOutlineAcademicCap,
            HiOutlineChat,
            HiOutlineUserCircle,
            HiOutlineCalendar,
        };
        const IconComponent = icons[iconName] || HiOutlineHeart;
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
            localStorage.setItem('valuesFaqHelpfulVotes', JSON.stringify(newVotes));
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
            localStorage.setItem('savedValuesFaqs', JSON.stringify(newSaved));
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
            category: faqCategories.find(c => c.id === faq.category)?.name || faq.category,
            tags: faq.tags
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'values-faq-export.json');
        linkElement.click();
    }, [filteredFaqs, faqCategories]);

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
     * Clear all filters
     */
    const clearFilters = useCallback(() => {
        setSearchQuery('');
        setActiveCategory('all');
        setSortBy('recent');
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
                <mark key={i} className="bg-violet-200 dark:bg-violet-800 text-gray-900 dark:text-white px-0.5 rounded">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    }, []);

    // ==================== AUTO-PLAY VALUES EFFECT ====================
    useEffect(() => {
        if (autoplayValues && values.length > 0 && activeTab === 'values') {
            intervalRef.current = setInterval(() => {
                setActiveValue((prev) => (prev + 1) % values.length);
            }, 6000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplayValues, values.length, activeTab]);

    // ==================== LOCAL STORAGE EFFECTS ====================
    useEffect(() => {
        const savedVotes = localStorage.getItem('valuesFaqHelpfulVotes');
        if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
        const saved = localStorage.getItem('savedValuesFaqs');
        if (saved) setSavedFaqs(JSON.parse(saved));
    }, []);

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Core Values Knowledge Base"
        >
            {/* ==================== BACKGROUND DECORATIONS ==================== */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-violet-50/30 to-transparent dark:from-violet-900/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
            <div className="absolute top-1/3 left-10 w-64 h-64 bg-violet-300/5 dark:bg-violet-500/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ==================== SECTION HEADER ==================== */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-violet-100 dark:bg-violet-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-violet-200 dark:border-violet-800'}`}
                        aria-label="Values badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-violet-700 dark:text-violet-300'}`}>
                            {config?.badge?.text || "Our DNA"}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || 'Values That'}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-violet-600 to-purple-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || 'Move Us'}
                        </span>{' '}
                        {config?.title?.suffix || 'Forward Together'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description || "Our core values are the heartbeat of our organization. They shape our culture, guide our decisions, and define how we show up for each other, our customers, and the world around us."}
                    </p>
                </div>

                {/* ==================== STATS ROW ==================== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="flex justify-center mb-2 text-violet-600 dark:text-violet-400">
                                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ==================== TAB NAVIGATION ==================== */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveTab('values')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'values'
                            ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {getIcon("HiOutlineHeart", "w-4 h-4")}
                        Our Values
                    </button>
                    <button
                        onClick={() => setActiveTab('stories')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'stories'
                            ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {getIcon("HiOutlineUserGroup", "w-4 h-4")}
                        Team Stories
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'impact'
                            ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {getIcon("HiOutlineTrophy", "w-4 h-4")}
                        Impact & Recognition
                    </button>
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
                            ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
                        FAQs
                    </button>
                </div>

                {/* ==================== VALUES TAB ==================== */}
                {activeTab === 'values' && (
                    <>
                        {/* Values Carousel */}
                        {values.length > 0 && (
                            <div className="mb-16">
                                <div className="relative max-w-6xl mx-auto">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                                        <div className="relative h-56 bg-linear-to-r from-violet-500 to-purple-600">
                                            <div className="absolute inset-0 bg-black/20" />
                                            <div className="absolute bottom-4 left-6 text-white">
                                                <div className="flex justify-center mb-2 text-white text-6xl">
                                                    {getIcon(values[activeValue]?.icon, "w-12 h-12")}
                                                </div>
                                                <div className="text-2xl font-bold">{values[activeValue]?.title}</div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">{values[activeValue]?.description}</p>
                                            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 mb-4">
                                                <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 mb-2">
                                                    {getIcon("HiOutlineCheckCircle", "w-5 h-5")}
                                                    <span className="font-semibold">How We Live This Value:</span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{values[activeValue]?.example}</p>
                                            </div>
                                            {values[activeValue]?.initiative && (
                                                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                                                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-2">
                                                        {getIcon("HiOutlineSparkles", "w-5 h-5")}
                                                        <span className="font-semibold">Featured Initiative:</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{values[activeValue]?.initiative}</p>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex gap-2">
                                                    {values.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => {
                                                                setActiveValue(idx);
                                                                setAutoplayValues(false);
                                                            }}
                                                            className={`h-2 rounded-full transition-all duration-300 ${activeValue === idx ? 'w-8 bg-violet-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                                                            aria-label={`Go to value ${idx + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => setAutoplayValues(!autoplayValues)}
                                                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 flex items-center gap-1 transition-colors"
                                                    aria-label={autoplayValues ? "Pause autoplay" : "Play autoplay"}
                                                >
                                                    {autoplayValues ? getIcon("HiOutlinePause", "w-3 h-3") : getIcon("HiOutlinePlay", "w-3 h-3")}
                                                    {autoplayValues ? 'Pause' : 'Play'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Values Grid (Alternative View) */}
                        <div className="mb-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                Our Core Values at a Glance
                            </h3>
                            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                Explore each value that defines who we are.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setActiveValue(index);
                                            setAutoplayValues(false);
                                            document.getElementById('values-carousel')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center cursor-pointer border border-gray-100 dark:border-gray-700 group"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveValue(index)}
                                    >
                                        <div className="flex justify-center mb-4 text-violet-600 dark:text-violet-400 text-5xl group-hover:scale-110 transition-transform">
                                            {getIcon(value.icon, "w-12 h-12")}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{value.description}</p>
                                        <button className="mt-3 text-xs text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1">
                                            Learn more
                                            {getIcon("HiOutlineArrowRight", "w-3 h-3")}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Initiatives */}
                        {initiatives.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                    Our Values in Action
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                    Programs and initiatives bringing our values to life.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {initiatives.map((initiative, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="text-violet-600 dark:text-violet-400 text-4xl">
                                                    {getIcon(initiative.icon, "w-8 h-8")}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{initiative.title}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{initiative.description}</p>
                                                    <div className="flex flex-wrap items-center gap-2 text-xs">
                                                        <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full">{initiative.value}</span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-gray-500 dark:text-gray-400">Impact: {initiative.impact}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* ==================== STORIES TAB ==================== */}
                {activeTab === 'stories' && (
                    <>
                        {/* Video Stories */}
                        {videos.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                    Watch Our Stories
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                    Hear directly from our people about what our values mean to them.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {videos.map((video, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setSelectedVideo(video);
                                                setShowVideoModal(true);
                                            }}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedVideo(video) && setShowVideoModal(true)}
                                        >
                                            <div className="relative h-48 bg-linear-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                                    {getIcon("HiOutlinePlay", "w-8 h-8 text-white")}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{video.author} • {video.role}</p>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{video.duration}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Written Testimonials */}
                        {testimonials.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                    What Our Team Says
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                    Voices from within our value-driven community.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                                        >
                                            <div className="flex items-center gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-sm">★</span>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 text-2xl">
                                                    {getIcon(testimonial.icon || "HiOutlineUserCircle", "w-6 h-6")}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                                                    <div className="text-xs text-violet-600 dark:text-violet-400 mt-1">{testimonial.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* ==================== IMPACT TAB ==================== */}
                {activeTab === 'impact' && (
                    <>
                        {/* Recognitions */}
                        {recognitions.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                    Awards & Recognition
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                    Accolades that reflect our value-driven culture.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {recognitions.map((recognition, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setSelectedRecognition(recognition);
                                                setShowRecognitionModal(true);
                                            }}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center cursor-pointer border border-gray-100 dark:border-gray-700 group"
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedRecognition(recognition) && setShowRecognitionModal(true)}
                                        >
                                            <div className="flex justify-center mb-3 text-violet-600 dark:text-violet-400 text-5xl group-hover:scale-110 transition-transform">
                                                {getIcon(recognition.icon, "w-10 h-10")}
                                            </div>
                                            <div className="font-bold text-gray-900 dark:text-white mb-1">{recognition.title}</div>
                                            <div className="text-sm text-violet-600 dark:text-violet-400 mb-2">{recognition.awarder}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">{recognition.year}</div>
                                            {recognition.description && (
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 line-clamp-2">{recognition.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Community Impact */}
                        <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-8 border border-green-100 dark:border-green-800">
                            <div className="flex items-center gap-3 mb-6">
                                {getIcon("HiOutlineGlobeAlt", "w-8 h-8 text-green-600")}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Community Impact</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">$1.2M+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Donated to causes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">3,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer hours</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">25+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Nonprofits supported</div>
                                </div>
                            </div>
                        </div>

                        {/* Sustainability Impact */}
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
                            <div className="flex items-center gap-3 mb-6">
                                {getIcon("HiOutlineFlag", "w-8 h-8 text-blue-600")}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sustainability Impact</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">30%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Avg waste reduction for customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">2,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Tons CO2 reduced</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">2030</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Carbon neutrality target</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* ==================== FAQ TAB ==================== */}
                {activeTab === 'faq' && (
                    <>
                        {/* Search and Action Bar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative" ref={searchRef}>
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    {getIcon("HiOutlineSearch", "w-5 h-5")}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search core values FAQs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                    aria-label="Search FAQs"
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
                                        ? 'bg-violet-600 text-white border-violet-600'
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
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all"
                                    aria-label="Sort FAQs"
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="helpful">Most Helpful</option>
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

                        {/* Expanded Filters Panel */}
                        {showFilters && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setActiveCategory('all')}
                                                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                                                    ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                    }`}
                                            >
                                                All
                                            </button>
                                            {faqCategories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => setActiveCategory(category.id)}
                                                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                                                        ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {getIcon(category.icon, "w-3 h-3")}
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all"
                                        >
                                            <option value="recent">Most Recent</option>
                                            <option value="popular">Most Popular</option>
                                            <option value="helpful">Most Helpful</option>
                                        </select>
                                    </div>
                                </div>
                                {(activeCategory !== 'all' || sortBy !== 'recent') && (
                                    <div className="mt-4 text-right">
                                        <button
                                            onClick={clearFilters}
                                            className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Results Count */}
                        {searchQuery && (
                            <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
                            </div>
                        )}

                        {/* FAQ Accordion */}
                        <div className="max-w-6xl mx-auto space-y-4 mb-16">
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
                                                <div className="text-violet-600 dark:text-violet-400 mt-0.5">
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
                                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-violet-600' : 'text-gray-400 hover:text-violet-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                        }`}
                                                    aria-label={isSaved ? "Remove from saved" : "Save question"}
                                                >
                                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-violet-600' : ''}`)}
                                                </button>
                                                <div className="text-violet-500 dark:text-violet-400">
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
                                                        className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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

                        {/* Empty State */}
                        {filteredFaqs.length === 0 && searchQuery && (
                            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                                <div className="flex justify-center mb-4 text-gray-400">
                                    {getIcon("HiOutlineSearch", "w-12 h-12")}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 px-4 py-2 text-violet-600 dark:text-violet-400 font-semibold text-sm hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                        {/* Saved FAQs Section */}
                        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
                            <div className="mb-16">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    {getIcon("HiOutlineBookmark", "w-5 h-5 text-violet-600")}
                                    Saved Questions
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className="text-violet-600 dark:text-violet-400">
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
                                                        className="text-xs text-violet-600 dark:text-violet-400 mt-1 hover:underline"
                                                    >
                                                        View in {faqCategories.find(c => c.id === faq.category)?.name}
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
                    </>
                )}

                {/* ==================== CULTURE BOOK DOWNLOAD ==================== */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                            {getIcon("HiOutlineBookOpen", "w-6 h-6 text-violet-600")}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Culture Book</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Learn more about our values, culture, and what makes our team special. Download our Culture Book to get an inside look.
                    </p>
                    <Link
                        href="/downloads/culture-book.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {getIcon("HiOutlineDownload", "w-4 h-4")}
                        Download Culture Book
                    </Link>
                </div>

                {/* ==================== VIDEO MODAL ==================== */}
                {showVideoModal && selectedVideo && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setShowVideoModal(false)}
                        role="dialog"
                        aria-label="Video player"
                        aria-modal="true"
                    >
                        <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                                aria-label="Close video"
                            >
                                {getIcon("HiOutlineX", "w-6 h-6")}
                            </button>
                            <div className="bg-black rounded-2xl overflow-hidden">
                                <div className="aspect-video flex items-center justify-center bg-gray-900">
                                    <video
                                        src={selectedVideo.url}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                        poster={selectedVideo.thumbnail}
                                    />
                                </div>
                                <div className="p-4 bg-gray-900">
                                    <h3 className="text-white font-bold">{selectedVideo.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{selectedVideo.author} • {selectedVideo.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== RECOGNITION MODAL ==================== */}
                {showRecognitionModal && selectedRecognition && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                        onClick={() => setShowRecognitionModal(false)}
                        role="dialog"
                        aria-label="Recognition details"
                        aria-modal="true"
                    >
                        <div
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6 animate-fadeIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-5xl">{selectedRecognition.icon}</div>
                                <button
                                    onClick={() => setShowRecognitionModal(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {getIcon("HiOutlineX", "w-5 h-5")}
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedRecognition.title}</h3>
                            <p className="text-sm text-violet-600 dark:text-violet-400 mb-2">{selectedRecognition.awarder} • {selectedRecognition.year}</p>
                            {selectedRecognition.description && (
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{selectedRecognition.description}</p>
                            )}
                            {selectedRecognition.details && (
                                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{selectedRecognition.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ==================== CTA SECTION ==================== */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-violet-100 dark:border-gray-700">
                        <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                            {getIcon("HiOutlineHeart", "w-6 h-6 text-violet-600")}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                            {config?.contactText || "Values-driven culture awaits. Join a team where principles meet practice."}
                        </span>
                        <Link
                            href={config?.contactLink || "/careers"}
                            className="px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Join Our Team"}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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

export default CoreValuesSection3;