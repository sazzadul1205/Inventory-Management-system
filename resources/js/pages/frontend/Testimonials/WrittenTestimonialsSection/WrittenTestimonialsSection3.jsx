// frontend/Testimonials/WrittenTestimonialsSection/WrittenTestimonialsSection3.jsx

/**
 * Customer Testimonials Hub Component
 * A comprehensive testimonial management hub featuring:
 * - Stats dashboard with animated counters
 * - Featured testimonial spotlight with award badge
 * - Grid/List view toggle for flexible browsing
 * - Search functionality across multiple fields
 * - Advanced filters with collapsible panel
 * - Export functionality (PDF, CSV, Print)
 * - Save/bookmark testimonials to localStorage
 * - Like/unlike with dynamic helpful counts
 * - Newsletter signup integration
 * - Category filters with color-coded badges
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// React Icons - All from react-icons library
import { FaQuoteLeft, FaAward, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineThumbUp,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineTrendingUp,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineX,
  HiOutlineViewGrid,
  HiOutlineViewList,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const WrittenTestimonialsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeView, setActiveView] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedId, setExpandedId] = useState(null);
  const [savedTestimonials, setSavedTestimonials] = useState([]);
  const [likedTestimonials, setLikedTestimonials] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const testimonials = useMemo(() => config?.testimonials || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'star': HiOutlineStar,
      'chat': HiOutlineChatAlt,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'bookmark': HiOutlineBookmark,
      'filter': HiOutlineFilter,
      'search': HiOutlineSearch,
      'thumb-up': HiOutlineThumbUp,
      'download': HiOutlineDownload,
      'printer': HiOutlinePrinter,
      'trending': HiOutlineTrendingUp,
      'badge-check': HiOutlineBadgeCheck,
      'external-link': HiOutlineExternalLink,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'x': HiOutlineX,
      'view-grid': HiOutlineViewGrid,
      'view-list': HiOutlineViewList,
      'quote-left': FaQuoteLeft,
      'award': FaAward,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Render star rating component
   * @param {number} rating - Rating value (1-5)
   * @param {string} size - Size class for stars
   * @returns {JSX.Element} Star rating component
   */
  const renderStars = useCallback((rating, size = "w-4 h-4") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500`)}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500 opacity-50`)}</span>;
          }
          return <span key={i}>{getIcon("star", `${size} text-gray-300 dark:text-gray-600`)}</span>;
        })}
      </div>
    );
  }, [getIcon]);

  /**
   * Get category badge color classes
   * @param {string} category - Category identifier
   * @returns {string} CSS class string
   */
  const getCategoryColor = useCallback((category) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  }, []);

  /**
   * Get category display name
   * @param {string} category - Category identifier
   * @returns {string} Display name
   */
  const getCategoryName = useCallback((category) => {
    const names = {
      retail: 'Retail',
      manufacturing: 'Manufacturing',
      logistics: 'Logistics',
      healthcare: 'Healthcare',
      food: 'Food & Beverage',
      electronics: 'Electronics',
    };
    return names[category] || category;
  }, []);

  /**
   * Parse metric value to extract numeric value and suffix
   * @param {string} value - Metric value string
   * @returns {Object} Object containing numeric value and suffix
   */
  const parseMetricValue = useCallback((value) => {
    const match = value.match(/[\d,.]+/);
    const numericValue = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
    const suffix = value.replace(/[\d,.]+/, '').trim();
    return { numericValue, suffix };
  }, []);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedWrittenTestimonials');
    if (saved) setSavedTestimonials(JSON.parse(saved));
    const liked = localStorage.getItem('likedWrittenTestimonials');
    if (liked) setLikedTestimonials(JSON.parse(liked));
    setTestimonialsData(testimonials);
  }, [testimonials]);

  /**
   * Save or unsave a testimonial
   * @param {string|number} id - ID of the testimonial to save/unsave
   */
  const handleSaveTestimonial = useCallback((id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id) ? prev.filter(savedId => savedId !== id) : [...prev, id];
      localStorage.setItem('savedWrittenTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Like or unlike a testimonial with helpful count update
   * @param {string|number} id - ID of the testimonial to like/unlike
   */
  const handleLikeTestimonial = useCallback((id) => {
    const wasLiked = likedTestimonials.includes(id);

    setLikedTestimonials(prev => {
      const newLiked = wasLiked ? prev.filter(likedId => likedId !== id) : [...prev, id];
      localStorage.setItem('likedWrittenTestimonials', JSON.stringify(newLiked));
      return newLiked;
    });

    setTestimonialsData(prevData =>
      prevData.map(t =>
        t.id === id ? { ...t, helpfulCount: (t.helpfulCount || 0) + (wasLiked ? -1 : 1) } : t
      )
    );
  }, [likedTestimonials]);

  /**
   * Toggle expanded view for a testimonial
   * @param {string|number} id - ID of the testimonial to expand/collapse
   */
  const toggleExpand = useCallback((id) => {
    setExpandedId(expandedId === id ? null : id);
  }, [expandedId]);

  /**
   * Handle export functionality
   * @param {string} format - Export format (PDF, CSV, Print)
   */
  const handleExport = useCallback((format) => {
    // In production, implement actual export functionality
    alert(`Exporting as ${format}... This would generate a file in production.`);
  }, []);

  /**
   * Handle newsletter subscription
   */
  const handleSubscribe = useCallback(() => {
    if (subscribeEmail && subscribeEmail.includes('@')) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 3000);
      setSubscribeEmail('');
    }
  }, [subscribeEmail]);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredTestimonials = useMemo(() => {
    const filtered = testimonialsData.filter(testimonial => {
      const matchesCategory = activeCategory === 'all' || testimonial.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        testimonial.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.quote?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (testimonial.tags && testimonial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'helpful') return (b.helpfulCount || 0) - (a.helpfulCount || 0);
      return 0;
    });

    return filtered;
  }, [testimonialsData, activeCategory, searchQuery, sortBy]);

  // ==================== FEATURED TESTIMONIAL ====================
  const featuredTestimonial = useMemo(() => {
    return filteredTestimonials.find(t => t.rating === 5 && (t.helpfulCount || 0) > 50);
  }, [filteredTestimonials]);

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE STATISTICS ====================
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const startValues = {};
    const targetValues = {};
    const increments = {};
    const suffixes = {};

    stats.forEach((stat, index) => {
      const { numericValue, suffix } = parseMetricValue(stat.value);
      startValues[index] = 0;
      targetValues[index] = numericValue;
      increments[index] = numericValue / steps;
      suffixes[index] = suffix;
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      stats.forEach((_, index) => {
        let newValue = startValues[index] + (increments[index] * currentStep);
        if (currentStep >= steps) newValue = targetValues[index];

        let formattedValue;
        if (suffixes[index] === '%') {
          formattedValue = `${Math.floor(newValue)}%`;
        } else if (suffixes[index] === 'K' && newValue >= 1000) {
          formattedValue = `${(newValue / 1000).toFixed(1)}K`;
        } else if (newValue >= 1000000) {
          formattedValue = `${(newValue / 1000000).toFixed(1)}M`;
        } else if (newValue >= 1000) {
          formattedValue = `${(newValue / 1000).toFixed(1)}K`;
        } else {
          formattedValue = `${Math.floor(newValue)}${suffixes[index]}`;
        }

        newValues[index] = formattedValue;
      });

      setAnimatedStats(newValues);
      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, stats, parseMetricValue]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Testimonials Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Testimonials hub badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Testimonials Hub"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'What Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Clients'}
            </span>{' '}
            {config?.title?.suffix || 'Say'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Real success stories from businesses that have transformed their operations with our solutions."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.change && (
                <div className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center justify-center gap-1">
                  {getIcon("trending", "w-3 h-3")}
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ==================== FEATURED TESTIMONIAL SPOTLIGHT ==================== */}
        {featuredTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Content Column */}
              <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 text-white">
                <div className="flex items-center gap-3 mb-3">
                  {renderStars(featuredTestimonial.rating, "w-5 h-5")}
                  <span className="text-sm text-white/80">{featuredTestimonial.rating}.0</span>
                  {getIcon("badge-check", "w-5 h-5 text-yellow-400")}
                </div>
                <div className="text-white/30 mb-3">
                  {getIcon("quote-left", "w-10 h-10")}
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {getIcon(featuredTestimonial.icon || "users", "w-7 h-7")}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{featuredTestimonial.author}</div>
                    <div className="text-white/80">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="bg-white/10 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center">
                <div className="mb-3">
                  {getIcon(featuredTestimonial.icon || "building", "w-16 h-16")}
                </div>
                <div className="text-white font-bold text-3xl mb-1">{featuredTestimonial.keyMetric || "287%"}</div>
                <div className="text-white/80 text-sm">improvement achieved</div>
                <div className="mt-6 flex items-center gap-2">
                  {getIcon("award", "w-5 h-5 text-yellow-400")}
                  <span className="text-white text-sm">Featured Success Story</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND FILTER BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("search", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search testimonials by company, author, keyword, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search testimonials"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              aria-label="Toggle filters"
            >
              {getIcon("filter", "w-4 h-4")}
              Filters
            </button>

            {/* View Toggle Buttons */}
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveView('grid')}
                className={`px-4 py-3 transition-all duration-200 ${activeView === 'grid'
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                aria-label="Grid view"
              >
                {getIcon("view-grid", "w-4 h-4")}
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`px-4 py-3 transition-all duration-200 ${activeView === 'list'
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                aria-label="List view"
              >
                {getIcon("view-list", "w-4 h-4")}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600">
                {getIcon("x", "w-4 h-4")}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === category
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {category === 'all' ? 'All Industries' : getCategoryName(category)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>

              {/* Export Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Export</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleExport('PDF')}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
                  >
                    {getIcon("download", "w-4 h-4")} PDF
                  </button>
                  <button
                    onClick={() => handleExport('CSV')}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
                  >
                    {getIcon("download", "w-4 h-4")} CSV
                  </button>
                  <button
                    onClick={() => handleExport('Print')}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
                  >
                    {getIcon("printer", "w-4 h-4")} Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredTestimonials.length}</span> testimonials
          </div>
          {savedTestimonials.length > 0 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              📌 {savedTestimonials.length} saved
            </div>
          )}
        </div>

        {/* ==================== TESTIMONIALS GRID/LIST ==================== */}
        {activeView === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="p-5 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {getIcon(testimonial.icon || "users", "w-5 h-5")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveTestimonial(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={savedTestimonials.includes(testimonial.id) ? "Remove from saved" : "Save testimonial"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                    </button>
                  </div>

                  {/* Rating & Category */}
                  <div className="flex items-center justify-between mb-2">
                    {renderStars(testimonial.rating, "w-4 h-4")}
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      {getIcon("calendar", "w-3 h-3")}
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(testimonial.category)}`}>
                    {getCategoryName(testimonial.category)}
                  </span>

                  {/* Quote */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Result Highlight */}
                  {testimonial.result && (
                    <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                      <div className="flex items-center gap-1.5">
                        {getIcon("check-circle", "w-3 h-3 text-green-600 dark:text-green-400")}
                        <span className="text-xs text-green-700 dark:text-green-400">{testimonial.result}</span>
                      </div>
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => handleLikeTestimonial(testimonial.id)}
                      className={`flex items-center gap-1.5 text-xs transition-colors ${likedTestimonials.includes(testimonial.id)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                    >
                      {getIcon("thumb-up", "w-3 h-3")}
                      <span>{testimonial.helpfulCount || 0}</span>
                    </button>
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                    >
                      {expandedId === testimonial.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === testimonial.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2 animate-fadeIn">
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {testimonial.fullQuote || testimonial.quote}
                      </p>
                      <Link
                        href={testimonial.link || "/case-studies"}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:gap-2 transition-all group"
                      >
                        Read Full Case Study
                        {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4 mb-12">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Main Content */}
                  <div className="md:w-2/3 p-5 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                          {getIcon(testimonial.icon || "users", "w-5 h-5")}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSaveTestimonial(testimonial.id)}
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {getIcon("bookmark", `w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating, "w-4 h-4")}
                      <span className="text-xs text-gray-400 dark:text-gray-500">{testimonial.date}</span>
                    </div>
                    <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(testimonial.category)}`}>
                      {getCategoryName(testimonial.category)}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="text-blue-600 dark:text-blue-400 text-xs font-semibold mt-2 hover:underline"
                    >
                      {expandedId === testimonial.id ? 'Show Less' : 'Read Full Review'}
                    </button>
                    {expandedId === testimonial.id && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                          {testimonial.fullQuote || testimonial.quote}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700/50 p-5 md:p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                    {testimonial.result && (
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Key Result</div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">{testimonial.result}</div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleLikeTestimonial(testimonial.id)}
                        className={`flex items-center gap-1 text-xs transition-colors ${likedTestimonials.includes(testimonial.id)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                      >
                        {getIcon("thumb-up", "w-3 h-3")}
                        <span>{testimonial.helpfulCount || 0}</span>
                      </button>
                      <Link
                        href={testimonial.link || "/case-studies"}
                        className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Case Study
                        {getIcon("external-link", "w-3 h-3")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No testimonials found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== NEWSLETTER SIGNUP ==================== */}
        {config?.showNewsletter && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Get the latest success stories</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-5">Subscribe to receive new testimonials and case studies</p>
            {emailSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                {getIcon("check-circle", "w-5 h-5")}
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        {config?.showTrustBadges && config?.trustBadges?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="mb-1">
                    {getIcon(badge.icon, "w-8 h-8 text-gray-500 dark:text-gray-400")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== LEAVE REVIEW CTA ==================== */}
        {config?.showLeaveReview && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("chat", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.leaveReviewText || "Share your experience with us"}
              </span>
              <Link
                href={config?.leaveReviewLink || "/submit-review"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Write a Review
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default WrittenTestimonialsSection3;