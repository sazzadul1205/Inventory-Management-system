// frontend/AboutUs/LeadershipTeamSection/LeadershipTeamSection3.jsx

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
  HiOutlineQuestionMarkCircle,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

const LeadershipTeamSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeView, setActiveView] = useState('grid');
  const [activeTab, setActiveTab] = useState('leaders');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const videos = config?.videos || [];
  const quotes = config?.quotes || [];
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

  const groupedFaqs = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [categories, filteredFaqs]);

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
      HiOutlineQuestionMarkCircle,
      HiOutlineGlobeAlt,
      HiOutlineChartBar,
      HiOutlineSparkles,
      HiOutlineChip,
      HiOutlineMegaphone,
      HiOutlineUsers,
      HiOutlineCurrencyDollar,
      HiOutlineLightBulb,
      AiOutlineLinkedin,
      AiOutlineTwitter,
    };
    const IconComponent = icons[iconName] || HiOutlineUserGroup;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {string|number} key - Key of the FAQ to toggle
   */
  const toggleFaq = useCallback((key) => {
    setOpenFaq(prev => prev === key ? null : key);
  }, []);

  /**
   * Toggle category expansion
   * @param {string} categoryId - ID of the category to toggle
   */
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
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
        <mark key={i} className="bg-amber-200 dark:bg-amber-800 text-gray-900 dark:text-white px-0.5 rounded">
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

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery) {
      const expanded = {};
      categories.forEach(category => {
        expanded[category.id] = true;
      });
      setExpandedCategories(expanded);
    }
  }, [searchQuery, categories]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Leadership Team Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
            aria-label="Leadership badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Executive Leadership"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'The Leaders'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Behind the Mission'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our leadership team brings together visionary thinking, deep expertise, and a shared commitment to excellence. Learn about the people who guide our strategy, shape our culture, and inspire our teams to achieve the extraordinary."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('leaders')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'leaders'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineUserGroup", "w-4 h-4")}
            Leadership Team
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'stories'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePlay", "w-4 h-4")}
            Stories & Videos
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== LEADERS TAB ==================== */}
        {activeTab === 'leaders' && (
          <>
            {/* Department Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveDepartment('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeDepartment === 'all'
                  ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
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
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(dept.icon, "w-3 h-3")}
                  {dept.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex justify-end mb-6">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setActiveView('grid')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${activeView === 'grid'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-amber-600'
                    : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setActiveView('list')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${activeView === 'list'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-amber-600'
                    : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search leaders by name, title, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  aria-label="Search leaders"
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
                    ? 'bg-amber-600 text-white border-amber-600'
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                  aria-label="Sort leaders"
                >
                  <option value="name">Sort by Name</option>
                  <option value="title">Sort by Title</option>
                  <option value="experience">Sort by Experience</option>
                </select>
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Department</label>
                    <select
                      value={activeDepartment}
                      onChange={(e) => setActiveDepartment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option value="all">All Departments</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
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
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
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
                Found {filteredLeaders.length} leader{filteredLeaders.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Leadership Grid/List View */}
            {activeView === 'grid' ? (
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
                    <div className="relative h-64 bg-linear-to-br from-amber-500 to-orange-600">
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
                              className="text-gray-400 hover:text-amber-600 transition-colors"
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
                              className="text-gray-400 hover:text-amber-400 transition-colors"
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
            ) : (
              <div className="space-y-4 mb-16">
                {filteredLeaders.map((leader, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedLeader(leader);
                      setShowModal(true);
                    }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 cursor-pointer flex items-center gap-4 border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-800"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedLeader(leader) && setShowModal(true)}
                  >
                    <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-3xl text-white shrink-0">
                      {getIcon(leader.icon || "HiOutlineUserCircle", "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">{leader.name}</h3>
                      <p className="text-sm text-amber-600 dark:text-amber-400">{leader.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{leader.bio}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{leader.experience}+ years</div>
                        {leader.education && (
                          <div className="text-xs text-gray-400 dark:text-gray-500">{leader.education.split(',')[0]}</div>
                        )}
                      </div>
                      {getIcon("HiOutlineArrowRight", "w-5 h-5 text-gray-400")}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
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
                  className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}

        {/* ==================== STORIES TAB ==================== */}
        {activeTab === 'stories' && (
          <>
            {/* Video Gallery */}
            {videos.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  Leadership Insights
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Hear directly from our leaders on strategy, culture, and vision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setActiveVideo(video);
                        setShowVideoModal(true);
                      }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveVideo(video) && setShowVideoModal(true)}
                    >
                      <div className="relative h-48 bg-linear-to-r from-amber-500 to-orange-600 flex items-center justify-center">
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

            {/* Leadership Quotes */}
            {quotes.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  Words from Our Leaders
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Philosophy and inspiration from those who lead.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quotes.map((quote, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-amber-600 dark:text-amber-400 text-3xl">
                          {getIcon(quote.icon, "w-8 h-8")}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">"{quote.text}"</p>
                          <div className="mt-3">
                            <div className="font-semibold text-gray-900 dark:text-white">{quote.author}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{quote.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Philosophy */}
            <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-16 border border-amber-100 dark:border-gray-700">
              <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400 text-5xl">
                {getIcon("HiOutlineStar", "w-12 h-12")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Leadership Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                "We believe that great leaders create more leaders, not followers. Our leadership team is committed to empowering every team member to grow, innovate, and lead in their own way. We lead with empathy, transparency, and a relentless focus on customer success."
              </p>
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
                  placeholder="Search leadership FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                    ? 'bg-amber-600 text-white border-amber-600'
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
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
                          ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        All
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                            ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
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
                      onClick={() => {
                        setActiveCategory('all');
                        setSortBy('recent');
                      }}
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
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

            {/* FAQ Category Accordion */}
            <div className="space-y-6 mb-16">
              {categories.map((category) => {
                const categoryFaqs = groupedFaqs[category.id] || [];
                if (categoryFaqs.length === 0 && searchQuery) return null;
                if (categoryFaqs.length === 0 && !searchQuery) return null;

                const isExpanded = expandedCategories[category.id] || searchQuery !== '';

                return (
                  <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      aria-label={isExpanded ? "Collapse category" : "Expand category"}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-amber-600 dark:text-amber-400 text-2xl">
                          {getIcon(category.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 dark:text-gray-500">{categoryFaqs.length} questions</span>
                        {isExpanded ? getIcon("HiOutlineChevronUp", "w-5 h-5 text-gray-400") : getIcon("HiOutlineChevronDown", "w-5 h-5 text-gray-400")}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                        {categoryFaqs.map((faq, idx) => {
                          const faqKey = `${category.id}-${idx}`;
                          const isSaved = savedFaqs.includes(faq.id);

                          return (
                            <div key={faqKey} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                              <div
                                onClick={() => toggleFaq(faqKey)}
                                className="w-full text-left flex justify-between items-start cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(faqKey)}
                              >
                                <div className="flex items-start gap-3 pr-4">
                                  <div className="text-amber-600 dark:text-amber-400 mt-0.5">
                                    {getIcon(faq.icon, "w-5 h-5")}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                      {highlightText(faq.question, searchQuery)}
                                    </div>
                                    {faq.tags && faq.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {faq.tags.slice(0, 3).map((tag, tagIdx) => (
                                          <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                    aria-label={isSaved ? "Remove from saved" : "Save question"}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`)}
                                  </button>
                                  <div className="text-amber-500 dark:text-amber-400">
                                    {openFaq === faqKey ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                                  </div>
                                </div>
                              </div>

                              {openFaq === faqKey && (
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {highlightText(faq.answer, searchQuery)}
                                  </p>
                                  {faq.link && (
                                    <Link
                                      href={faq.link}
                                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-16">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-amber-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-amber-600 dark:text-amber-400">
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
                            className="text-xs text-amber-600 dark:text-amber-400 mt-1 hover:underline"
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
          </>
        )}

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
              <div className="relative h-48 bg-linear-to-r from-amber-500 to-orange-600 rounded-t-3xl">
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
                    getIcon(selectedLeader.icon || "HiOutlineUserCircle", "w-16 h-16 text-amber-600")
                  )}
                </div>
                <div className="mt-20">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLeader.name}</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold mb-2">{selectedLeader.title}</p>
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
                        className="text-gray-500 hover:text-amber-600 transition-colors"
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
                        className="text-gray-500 hover:text-amber-400 transition-colors"
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
                        className="text-gray-500 hover:text-amber-600 transition-colors"
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

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && activeVideo && (
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

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineHeart", "w-6 h-6 text-amber-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Interested in speaking with a member of our leadership team? Reach out to learn more."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Leadership"}
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
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

export default LeadershipTeamSection3;