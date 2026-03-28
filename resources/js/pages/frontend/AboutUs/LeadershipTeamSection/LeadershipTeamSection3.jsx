// frontend/AboutUs/LeadershipTeamSection/LeadershipTeamSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineMail,
    HiOutlineLinkedin,
    HiOutlineTwitter,
    HiOutlineArrowRight,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
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
    HiOutlineHeart,
    HiOutlinePlay,
} from 'react-icons/hi';

const LeadershipTeamSection3 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeDepartment, setActiveDepartment] = useState('all');
    const [activeView, setActiveView] = useState('grid');
    const [sortBy, setSortBy] = useState('name');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('leaders');
    const [expandedCategories, setExpandedCategories] = useState({});
    const [activeVideo, setActiveVideo] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const searchRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const departments = config?.departments || [];
    const leaders = config?.leaders || [];
    const stats = config?.stats || [];
    const videos = config?.videos || [];
    const quotes = config?.quotes || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('leadershipFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedLeadershipFaqs');
        if (saved) {
            setSavedFaqs(JSON.parse(saved));
        }
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const handleHelpful = (faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('leadershipFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedLeadershipFaqs', JSON.stringify(newSaved));
            return newSaved;
        });
    };

    const handleExport = () => {
        const exportData = filteredFaqs.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            category: categories.find(c => c.id === faq.category)?.name || faq.category,
            tags: faq.tags
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'leadership-faq-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const filteredLeaders = leaders
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
            if (sortBy === 'experience') return b.experience - a.experience;
            return 0;
        });

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    const groupedFaqs = categories.reduce((acc, category) => {
        acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
        return acc;
    }, {});

    const highlightedText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Leadership Team Knowledge Base"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
                            {config?.badge?.text}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText}
                        </span>{' '}
                        {config?.title?.suffix}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all group">
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('leaders')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'leaders'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineUserGroup className="inline w-4 h-4 mr-2" />
                        Leadership Team
                    </button>
                    <button
                        onClick={() => setActiveTab('stories')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'stories'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlinePlay className="inline w-4 h-4 mr-2" />
                        Stories & Videos
                    </button>
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'faq'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineQuestionMarkCircle className="inline w-4 h-4 mr-2" />
                        FAQs
                    </button>
                </div>

                {/* Leaders Tab */}
                {activeTab === 'leaders' && (
                    <>
                        {/* Department Filters */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            <button
                                onClick={() => setActiveDepartment('all')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDepartment === 'all'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                    }`}
                            >
                                All Leaders
                            </button>
                            {departments.map((dept) => (
                                <button
                                    key={dept.id}
                                    onClick={() => setActiveDepartment(dept.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeDepartment === dept.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                        }`}
                                >
                                    <span>{dept.icon}</span>
                                    {dept.name}
                                </button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className="flex justify-end mb-6">
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                                <button
                                    onClick={() => setActiveView('grid')}
                                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${activeView === 'grid'
                                            ? 'bg-white dark:bg-gray-700 shadow-sm'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    Grid
                                </button>
                                <button
                                    onClick={() => setActiveView('list')}
                                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${activeView === 'list'
                                            ? 'bg-white dark:bg-gray-700 shadow-sm'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    List
                                </button>
                            </div>
                        </div>

                        {/* Search and Action Bar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative" ref={searchRef}>
                                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search leaders by name, title, or department..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                >
                                    <HiOutlineFilter className="w-4 h-4" />
                                </button>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="title">Sort by Title</option>
                                    <option value="experience">Sort by Experience</option>
                                </select>
                            </div>
                        </div>

                        {/* Expanded Filters */}
                        {showFilters && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department</label>
                                        <select
                                            value={activeDepartment}
                                            onChange={(e) => setActiveDepartment(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="all">All Departments</option>
                                            {departments.map((dept) => (
                                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="name">Name</option>
                                            <option value="title">Title</option>
                                            <option value="experience">Years of Experience</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Results Count */}
                        {searchQuery && (
                            <div className="text-center mb-4 text-sm text-gray-500">
                                Found {filteredLeaders.length} leaders for "{searchQuery}"
                            </div>
                        )}

                        {/* Leadership Grid/List View */}
                        {activeView === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {filteredLeaders.map((leader, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
                                        onClick={() => {
                                            setSelectedLeader(leader);
                                            setShowModal(true);
                                        }}
                                    >
                                        <div className="relative h-64 bg-linear-to-br from-blue-500 to-indigo-600">
                                            {leader.avatar ? (
                                                <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-8xl group-hover:scale-110 transition-transform">{leader.icon}</div>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
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
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <HiOutlineBriefcase className="w-3 h-3" />
                                                    <span>{leader.experience}+ years exp.</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    {leader.linkedin && (
                                                        <a
                                                            href={leader.linkedin}
                                                            className="text-gray-400 hover:text-blue-600 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <HiOutlineLinkedin className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {leader.twitter && (
                                                        <a
                                                            href={leader.twitter}
                                                            className="text-gray-400 hover:text-blue-400 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <HiOutlineTwitter className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4 mb-16">
                                {filteredLeaders.map((leader, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-5 cursor-pointer flex items-center gap-4"
                                        onClick={() => {
                                            setSelectedLeader(leader);
                                            setShowModal(true);
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl text-white shrink-0">
                                            {leader.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 dark:text-white">{leader.name}</h3>
                                            <p className="text-sm text-blue-600">{leader.title}</p>
                                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">{leader.bio}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <div className="text-xs text-gray-500">{leader.experience}+ years</div>
                                                {leader.education && (
                                                    <div className="text-xs text-gray-400">{leader.education.split(',')[0]}</div>
                                                )}
                                            </div>
                                            <HiOutlineArrowRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Empty State */}
                        {filteredLeaders.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">👥</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No leaders found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Stories Tab */}
                {activeTab === 'stories' && (
                    <>
                        {/* Video Gallery */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Leadership Insights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
                                        onClick={() => {
                                            setActiveVideo(video);
                                            setShowVideoModal(true);
                                        }}
                                    >
                                        <div className="relative h-48 bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                                <HiOutlinePlay className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                                            <p className="text-sm text-gray-500">{video.author} • {video.role}</p>
                                            <p className="text-xs text-gray-400 mt-2">{video.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Leadership Quotes */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Words from Our Leaders
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {quotes.map((quote, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="text-3xl">{quote.icon}</div>
                                            <div>
                                                <p className="text-gray-600 dark:text-gray-400 italic">"{quote.text}"</p>
                                                <div className="mt-3">
                                                    <div className="font-semibold text-gray-900 dark:text-white">{quote.author}</div>
                                                    <div className="text-xs text-gray-500">{quote.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Leadership Philosophy */}
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-16">
                            <div className="text-5xl mb-3">🌟</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Leadership Philosophy</h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                "We believe that great leaders create more leaders, not followers. Our leadership team is committed to empowering every team member to grow, innovate, and lead in their own way. We lead with empathy, transparency, and a relentless focus on customer success."
                            </p>
                        </div>
                    </>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <>
                        {/* Search and Action Bar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative" ref={searchRef}>
                                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search leadership FAQs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                >
                                    <HiOutlineFilter className="w-4 h-4" />
                                </button>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="helpful">Most Helpful</option>
                                </select>
                                <button
                                    onClick={handleExport}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                    title="Export FAQs"
                                >
                                    <HiOutlineDownload className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                    title="Print FAQs"
                                >
                                    <HiOutlinePrinter className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Expanded Filters */}
                        {showFilters && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setActiveCategory('all')}
                                                className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === 'all'
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                                    }`}
                                            >
                                                All
                                            </button>
                                            {categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => setActiveCategory(category.id)}
                                                    className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category.id
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    <span>{category.icon}</span>
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="recent">Most Recent</option>
                                            <option value="popular">Most Popular</option>
                                            <option value="helpful">Most Helpful</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Results Count */}
                        {searchQuery && (
                            <div className="text-center mb-4 text-sm text-gray-500">
                                Found {filteredFaqs.length} results for "{searchQuery}"
                            </div>
                        )}

                        {/* FAQ Category Accordion */}
                        <div className="space-y-6 mb-12">
                            {categories.map((category) => {
                                const categoryFaqs = groupedFaqs[category.id] || [];
                                if (categoryFaqs.length === 0 && searchQuery) return null;

                                const isExpanded = expandedCategories[category.id] || searchQuery !== '';

                                return (
                                    <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleCategory(category.id)}
                                            className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{category.icon}</span>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                                    <p className="text-sm text-gray-500">{category.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-gray-400">{categoryFaqs.length} questions</span>
                                                {isExpanded ? (
                                                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                                                ) : (
                                                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                                                )}
                                            </div>
                                        </button>

                                        {isExpanded && (
                                            <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                                                {categoryFaqs.map((faq, idx) => (
                                                    <div key={idx} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                        <button
                                                            onClick={() => toggleFaq(`${category.id}-${idx}`)}
                                                            className="w-full text-left flex justify-between items-center"
                                                        >
                                                            <div className="flex items-start gap-3 pr-4">
                                                                <div className="text-xl mt-0.5">{faq.icon}</div>
                                                                <div className="flex-1">
                                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                                        {highlightedText(faq.question, searchQuery)}
                                                                    </div>
                                                                    {faq.tags && (
                                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                                            {faq.tags.slice(0, 2).map((tag, tagIdx) => (
                                                                                <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                                                                    {tag}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleSaveFaq(faq.id);
                                                                    }}
                                                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                                                >
                                                                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                                                                </button>
                                                                <div className="text-blue-500">
                                                                    {openFaq === `${category.id}-${idx}` ? (
                                                                        <HiOutlineChevronUp className="w-5 h-5" />
                                                                    ) : (
                                                                        <HiOutlineChevronDown className="w-5 h-5" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </button>

                                                        {openFaq === `${category.id}-${idx}` && (
                                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                    {highlightedText(faq.answer, searchQuery)}
                                                                </p>
                                                                {faq.link && (
                                                                    <Link
                                                                        href={faq.link}
                                                                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                                                                    >
                                                                        Learn more
                                                                        <HiOutlineExternalLink className="w-3 h-3" />
                                                                    </Link>
                                                                )}

                                                                {/* Helpful Section */}
                                                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                                    <div className="flex items-center gap-4">
                                                                        <span className="text-xs text-gray-500">Was this helpful?</span>
                                                                        <button
                                                                            onClick={() => handleHelpful(faq.id, true)}
                                                                            className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === true
                                                                                ? 'text-green-600'
                                                                                : 'text-gray-400 hover:text-green-600'
                                                                                }`}
                                                                        >
                                                                            <HiOutlineThumbUp className="w-4 h-4" />
                                                                            Yes
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleHelpful(faq.id, false)}
                                                                            className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === false
                                                                                ? 'text-red-600'
                                                                                : 'text-gray-400 hover:text-red-600'
                                                                                }`}
                                                                        >
                                                                            <HiOutlineThumbDown className="w-4 h-4" />
                                                                            No
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Empty State */}
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">👥</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                            </div>
                        )}

                        {/* Saved FAQs Section */}
                        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <HiOutlineBookmark className="w-5 h-5 text-blue-600" />
                                    Saved Questions
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                                            <div className="flex items-start gap-2">
                                                <div className="text-xl">{faq.icon}</div>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                                                    <button
                                                        onClick={() => {
                                                            setActiveCategory(faq.category);
                                                            setSearchQuery('');
                                                            setOpenFaq(null);
                                                        }}
                                                        className="text-xs text-blue-600 mt-1 hover:underline"
                                                    >
                                                        View Answer
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => handleSaveFaq(faq.id)}
                                                    className="text-gray-400 hover:text-red-600"
                                                >
                                                    <HiOutlineX className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Leadership Modal */}
                {showModal && selectedLeader && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 bg-linear-to-r from-blue-500 to-indigo-600 rounded-t-3xl">
                                <div className="absolute inset-0 bg-black/20 rounded-t-3xl"></div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-white hover:text-gray-200"
                                >
                                    <HiOutlineX className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-16 left-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-4 border-white dark:border-gray-800">
                                    {selectedLeader.avatar ? (
                                        <img src={selectedLeader.avatar} alt={selectedLeader.name} className="w-full h-full object-cover rounded-2xl" />
                                    ) : (
                                        selectedLeader.icon
                                    )}
                                </div>
                                <div className="mt-20">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLeader.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-2">{selectedLeader.title}</p>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <HiOutlineBriefcase className="w-4 h-4" />
                                            <span>{selectedLeader.experience}+ years experience</span>
                                        </div>
                                        {selectedLeader.education && (
                                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                                <HiOutlineAcademicCap className="w-4 h-4" />
                                                <span>{selectedLeader.education}</span>
                                            </div>
                                        )}
                                        {selectedLeader.joined && (
                                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>Joined {selectedLeader.joined}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedLeader.fullBio || selectedLeader.bio}</p>
                                    {selectedLeader.previousRoles && selectedLeader.previousRoles.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Previous Experience</h4>
                                            <ul className="space-y-1">
                                                {selectedLeader.previousRoles.map((role, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                        <HiOutlineBriefcase className="w-3 h-3" />
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
                                                        <HiOutlineStar className="w-3 h-3 text-yellow-500" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        {selectedLeader.linkedin && (
                                            <a href={selectedLeader.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                                                <HiOutlineLinkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {selectedLeader.twitter && (
                                            <a href={selectedLeader.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                                                <HiOutlineTwitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {selectedLeader.email && (
                                            <a href={`mailto:${selectedLeader.email}`} className="text-gray-500 hover:text-blue-600 transition-colors">
                                                <HiOutlineMail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && activeVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <div className="bg-black rounded-2xl overflow-hidden">
                                <div className="aspect-video flex items-center justify-center">
                                    <video
                                        src={activeVideo.url}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                        poster={activeVideo.thumbnail}
                                    />
                                </div>
                                <div className="p-4 bg-gray-900">
                                    <h3 className="text-white font-bold">{activeVideo.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{activeVideo.author} • {activeVideo.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineHeart className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Want to connect with our leadership team? Reach out to us."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Contact Us"}
                            <HiOutlineArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button, .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
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

export default LeadershipTeamSection3;