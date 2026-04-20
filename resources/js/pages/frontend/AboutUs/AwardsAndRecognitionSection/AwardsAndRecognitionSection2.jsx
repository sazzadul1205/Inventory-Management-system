// frontend/AboutUs/AwardsAndRecognitionSection/AwardsAndRecognitionSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineArrowRight,
  HiOutlineCalendar,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const AwardsAndRecognitionSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('year');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const years = config?.years || [];
  const awardTypes = config?.awardTypes || [];
  const categories = config?.categories || [];
  const featuredAward = config?.featuredAward || null;
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const awards = useMemo(() => config?.awards || [], [config?.awards]);


  // ==================== FILTERED DATA ====================
  const filteredAwards = useMemo(() => {
    return awards
      .filter(award => {
        const matchesYear = activeYear === 'all' || award.year === activeYear;
        const matchesType = activeType === 'all' || award.type === activeType;
        const matchesSearch = searchQuery === '' ||
          award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          award.awarder.toLowerCase().includes(searchQuery.toLowerCase()) ||
          award.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesYear && matchesType && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'year') return parseInt(b.year) - parseInt(a.year);
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'awarder') return a.awarder.localeCompare(b.awarder);
        return 0;
      });
  }, [awards, activeYear, activeType, searchQuery, sortBy]);

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
        return 0;
      });
  }, [faqs, activeCategory, searchQuery, sortBy]);

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
      HiOutlineArrowRight,
      HiOutlineCalendar,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineSparkles,
      HiOutlineTrophy,
      HiOutlineStar,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineHeart,
      HiOutlineChartBar,
      HiOutlineLightBulb,
      HiOutlineQuestionMarkCircle,
    };
    const IconComponent = icons[iconName] || HiOutlineTrophy;
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
      localStorage.setItem('awardsFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedAwardsFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Export awards to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredAwards.map(award => ({
      title: award.title,
      awarder: award.awarder,
      year: award.year,
      type: award.type,
      description: award.description,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'awards-export.json');
    linkElement.click();
  }, [filteredAwards]);

  /**
   * Print awards
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
   * Get type color for award badge
   * @param {string} type - Award type
   * @returns {string} CSS classes for color
   */
  const getTypeColor = useCallback((type) => {
    switch (type) {
      case 'product': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'company': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'customer': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workplace': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'innovation': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }, []);

  /**
   * Get type label for award
   * @param {string} type - Award type
   * @returns {string} Human-readable label
   */
  const getTypeLabel = useCallback((type) => {
    switch (type) {
      case 'product': return 'Product Award';
      case 'company': return 'Company Award';
      case 'customer': return 'Customer Success';
      case 'workplace': return 'Workplace Culture';
      case 'innovation': return 'Innovation Award';
      default: return 'Award';
    }
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
        <mark key={i} className="bg-blue-200 dark:bg-blue-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('awardsFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedAwardsFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Awards & Recognition Help Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Awards badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Our Accolades"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Celebrating'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Industry Leadership'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "We're honored to be recognized by leading industry analysts, prestigious publications, and most importantly, our customers. These awards reflect our relentless commitment to innovation, customer success, and building a product that truly makes a difference."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURED AWARD ==================== */}
        {featuredAward && (
          <div className="mb-16">
            <div
              onClick={() => {
                setSelectedAward(featuredAward);
                setShowModal(true);
              }}
              className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center border border-blue-200 dark:border-blue-800 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedAward(featuredAward) && setShowModal(true)}
            >
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 text-6xl animate-pulse">
                {getIcon("HiOutlineTrophy", "w-12 h-12")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{featuredAward.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{featuredAward.awarder} • {featuredAward.year}</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">{featuredAward.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                View Details
                {getIcon("HiOutlineArrowRight", "w-3 h-3")}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND FILTER BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search awards by title, awarder, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search awards"
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
                ? 'bg-blue-600 text-white border-blue-600'
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
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
              aria-label="Sort awards"
            >
              <option value="year">Sort by Year (Recent First)</option>
              <option value="title">Sort by Title</option>
              <option value="awarder">Sort by Awarder</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Export Awards"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Print Awards"
            >
              {getIcon("HiOutlinePrinter", "w-4 h-4")}
            </button>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Year</label>
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Award Type</label>
                <select
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="all">All Types</option>
                  {awardTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="year">Year (Recent First)</option>
                  <option value="title">Title</option>
                  <option value="awarder">Awarder</option>
                </select>
              </div>
            </div>
            {(activeYear !== 'all' || activeType !== 'all' || sortBy !== 'year') && (
              <div className="mt-4 text-right">
                <button
                  onClick={() => {
                    setActiveYear('all');
                    setActiveType('all');
                    setSortBy('year');
                  }}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
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
            Found {filteredAwards.length} award{filteredAwards.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== AWARDS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAwards.map((award, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAward(award);
                setShowModal(true);
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer group border border-gray-100 dark:border-gray-700"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedAward(award) && setShowModal(true)}
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-600 dark:text-blue-400 text-4xl group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(award.type)}`}>
                      {getTypeLabel(award.type)}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{award.awarder}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      {getIcon("HiOutlineCalendar", "w-3 h-3")}
                      {award.year}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">{award.description}</p>
                  <div className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineTrophy", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setActiveYear('all');
                setActiveType('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
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
            Common questions about our awards and recognitions.
          </p>

          {/* Category Filters for FAQs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === 'all'
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
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
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md'
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
                      <div className="text-blue-600 dark:text-blue-400 mt-0.5">
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
                        className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        aria-label={isSaved ? "Remove from saved" : "Save question"}
                      >
                        {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`)}
                      </button>
                      <div className="text-blue-500 dark:text-blue-400">
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
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
                {getIcon("HiOutlineBookmark", "w-5 h-5 text-blue-600")}
                Saved Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-blue-600 dark:text-blue-400">
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
                          className="text-xs text-blue-600 dark:text-blue-400 mt-1 hover:underline"
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

        {/* ==================== AWARD MODAL ==================== */}
        {showModal && selectedAward && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-label="Award details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="text-5xl">{selectedAward.icon}</div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                    aria-label="Close modal"
                  >
                    {getIcon("HiOutlineX", "w-6 h-6")}
                  </button>
                </div>
                <h3 className="text-xl font-bold mt-3">{selectedAward.title}</h3>
                <p className="text-sm opacity-90 mt-1">{selectedAward.awarder} • {selectedAward.year}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(selectedAward.type)}`}>
                    {getTypeLabel(selectedAward.type)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{selectedAward.description}</p>
                {selectedAward.details && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What the judges said:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedAward.details}</p>
                  </div>
                )}
                {selectedAward.link && (
                  <Link
                    href={selectedAward.link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-200 group"
                  >
                    Read the announcement
                    {getIcon("HiOutlineExternalLink", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== PRESS & MEDIA CTA ==================== */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12 border border-blue-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getIcon("HiOutlineSparkles", "w-8 h-8 text-blue-600")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Press & Media Inquiries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            For press inquiries, interview requests, or to request our media kit, please contact our media relations team.
          </p>
          <Link
            href="/press"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Media Team
            {getIcon("HiOutlineArrowRight", "w-4 h-4")}
          </Link>
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineTrophy", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Want to learn more about our achievements? Contact our media team."}
            </span>
            <Link
              href={config?.contactLink || "/press"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Press & Media"}
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

export default AwardsAndRecognitionSection2;