// frontend/AboutUs/CultureAndCareersSection/CultureAndCareersSection2.jsx

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
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineCash,
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineTrendingUp,
  HiOutlineUserAdd,
  HiOutlineQuestionMarkCircle,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

const CultureAndCareersSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationForm, setApplicationForm] = useState({ name: '', email: '', phone: '', position: '', resume: null, coverLetter: '', portfolio: '', linkedin: '', github: '', heardFrom: '', agreeTerms: false, });

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const benefits = config?.benefits || [];
  const departments = config?.departments || [];
  const teamMembers = config?.teamMembers || [];
  const cultureMoments = config?.cultureMoments || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const faqCategories = useMemo(() => config?.categories || [], [config?.categories]);
  const openPositions = useMemo(() => config?.openPositions || [], [config?.openPositions]);


  // ==================== FILTERED DATA ====================
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

  const filteredPositions = useMemo(() => {
    return openPositions.filter(position => {
      return activeDepartment === 'all' || position.department === activeDepartment;
    });
  }, [openPositions, activeDepartment]);

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
      HiOutlineBriefcase,
      HiOutlineCalendar,
      HiOutlineLocationMarker,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineChartBar,
      HiOutlineCash,
      HiOutlineAcademicCap,
      HiOutlineHome,
      HiOutlineUsers,
      HiOutlineSparkles,
      HiOutlineGift,
      HiOutlineTrendingUp,
      HiOutlineUserAdd,
      HiOutlineQuestionMarkCircle,
      HiOutlineChip,
      HiOutlineMegaphone,
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
      localStorage.setItem('careersFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedCareersFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Handle file upload for resume
   * @param {Event} e - File input change event
   */
  const handleFileUpload = useCallback((e) => {
    const file = e.target.files[0];
    setApplicationForm({ ...applicationForm, resume: file });
  }, [applicationForm]);

  /**
   * Handle application form submission
   * @param {Event} e - Form submit event
   */
  const handleApplicationSubmit = useCallback((e) => {
    e.preventDefault();
    if (!applicationForm.name || !applicationForm.email || !applicationForm.resume || !applicationForm.agreeTerms) return;
    setTimeout(() => {
      setApplicationSubmitted(true);
      setTimeout(() => {
        setShowApplicationModal(false);
        setApplicationSubmitted(false);
        setApplicationForm({
          name: '', email: '', phone: '', position: '', resume: null, coverLetter: '',
          portfolio: '', linkedin: '', github: '', heardFrom: '', agreeTerms: false,
        });
        setSelectedPosition(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 3000);
    }, 1000);
  }, [applicationForm]);

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
    linkElement.setAttribute('download', 'careers-faq-export.json');
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
    setActiveDepartment('all');
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
        <mark key={i} className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('careersFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedCareersFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Culture & Careers Help Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-rose-50/30 to-transparent dark:from-rose-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-rose-300/5 dark:bg-rose-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-rose-100 dark:bg-rose-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-rose-200 dark:border-rose-800'}`}
            aria-label="Careers badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-rose-700 dark:text-rose-300'}`}>
              {config?.badge?.text || "Join Our Journey"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Build Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-rose-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Career With Us'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "We're more than a company—we're a community of passionate, curious, and driven individuals. If you're looking for a place where you can grow, make an impact, and do the best work of your life, you've found it."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-rose-600 dark:text-rose-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== CULTURE MOMENTS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Life at Inventory Platform
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            A glimpse into our culture, connections, and celebrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultureMoments.map((moment, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="h-48 bg-linear-to-r from-rose-500 to-pink-600 flex items-center justify-center">
                  <div className="text-6xl">{moment.icon}</div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{moment.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== TEAM MEMBERS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Meet Our Team
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Hear directly from the people who make our culture special.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="w-24 h-24 mx-auto bg-linear-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-4xl text-white mb-4">
                  {getIcon(member.avatar || "HiOutlineUserCircle", "w-12 h-12")}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{member.name}</h4>
                <p className="text-sm text-rose-600 dark:text-rose-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== BENEFITS SECTION ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Benefits & Perks
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            We take care of our people so they can focus on doing their best work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-2 text-rose-600 dark:text-rose-400 text-3xl">
                  {getIcon(benefit.icon, "w-6 h-6")}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{benefit.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== OPEN POSITIONS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Open Positions
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Join a team that's shaping the future of inventory management.
          </p>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveDepartment('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeDepartment === 'all'
                ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeDepartment === dept.id
                  ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon(dept.icon, "w-3 h-3")}
                {dept.name}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{position.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full">
                        {departments.find(d => d.id === position.department)?.name || position.department}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        {getIcon("HiOutlineLocationMarker", "w-3 h-3")}
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        {getIcon("HiOutlineBriefcase", "w-3 h-3")}
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    {position.status}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{position.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    {getIcon("HiOutlineCalendar", "w-3 h-3")}
                    Posted {position.postedDate}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPosition(position);
                      setApplicationForm({ ...applicationForm, position: position.title });
                      setShowApplicationModal(true);
                    }}
                    className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                  >
                    Apply Now
                    {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for Positions */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <div className="flex justify-center mb-4 text-gray-400">
                {getIcon("HiOutlineBriefcase", "w-12 h-12")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Check back later for new opportunities.</p>
            </div>
          )}
        </div>

        {/* ==================== SEARCH AND ACTION BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search careers FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
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
                ? 'bg-rose-600 text-white border-rose-600'
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
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
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

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                      ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
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
                        ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
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
                  className="text-sm text-rose-600 dark:text-rose-400 hover:underline"
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
            Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== FAQ ACCORDION ==================== */}
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
                    <div className="text-rose-600 dark:text-rose-400 mt-0.5">
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
                      className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-rose-600' : 'text-gray-400 hover:text-rose-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      aria-label={isSaved ? "Remove from saved" : "Save question"}
                    >
                      {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`)}
                    </button>
                    <div className="text-rose-500 dark:text-rose-400">
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
                        className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && searchQuery && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 text-rose-600 dark:text-rose-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineBookmark", "w-5 h-5 text-rose-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-rose-600 dark:text-rose-400">
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
                        className="text-xs text-rose-600 dark:text-rose-400 mt-1 hover:underline"
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

        {/* ==================== APPLICATION MODAL ==================== */}
        {showApplicationModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowApplicationModal(false)}
            role="dialog"
            aria-label="Job application form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for {selectedPosition?.title || "this position"}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">We'll review your application within 5-7 business days</p>
                </div>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>
              <div className="p-6">
                {!applicationSubmitted ? (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume *</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 dark:file:bg-rose-900/30 dark:file:text-rose-400"
                        required
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">PDF or DOC, max 5MB</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
                      <textarea
                        rows={4}
                        value={applicationForm.coverLetter}
                        onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Portfolio / Website</label>
                      <input
                        type="url"
                        value={applicationForm.portfolio}
                        onChange={(e) => setApplicationForm({ ...applicationForm, portfolio: e.target.value })}
                        placeholder="https://..."
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn</label>
                        <input
                          type="url"
                          value={applicationForm.linkedin}
                          onChange={(e) => setApplicationForm({ ...applicationForm, linkedin: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GitHub</label>
                        <input
                          type="url"
                          value={applicationForm.github}
                          onChange={(e) => setApplicationForm({ ...applicationForm, github: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                      <select
                        value={applicationForm.heardFrom}
                        onChange={(e) => setApplicationForm({ ...applicationForm, heardFrom: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="indeed">Indeed</option>
                        <option value="referral">Employee Referral</option>
                        <option value="conference">Conference / Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={applicationForm.agreeTerms}
                        onChange={(e) => setApplicationForm({ ...applicationForm, agreeTerms: e.target.checked })}
                        className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500 mt-0.5"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <Link href="/privacy" className="text-rose-600 hover:underline">Privacy Policy</Link> and confirm that the information provided is accurate. *
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Submit Application
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h4>
                    <p className="text-gray-600 dark:text-gray-400">Thank you for applying. Our team will review your application and be in touch soon.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Application ID: APP-{Math.floor(Math.random() * 10000)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineHeart", "w-6 h-6 text-rose-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to join our team? Explore open positions and start your journey with us."}
            </span>
            <Link
              href={config?.contactLink || "/careers"}
              className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "View All Jobs"}
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

export default CultureAndCareersSection2;