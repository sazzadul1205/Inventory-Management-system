// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection2.jsx

/**
 * Industry Expert Reviews Dashboard Component
 * A comprehensive expert review dashboard featuring:
 * - Stats dashboard with key metrics and trend indicators
 * - Featured reviews carousel/grid with award badges
 * - Search functionality across publications, authors, and organizations
 * - Category filters (Analyst, Media, Consultant, Award)
 * - Sort by date, rating, or organization name
 * - Save/bookmark functionality for reviews
 * - Expandable review details with key takeaways
 * - Export report functionality
 * - Press kit download option
 * - Source attribution with external links
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - All from react-icons library
import { FaAward, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineLightBulb,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
  HiOutlineTrendingUp,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const IndustryExpertReviewsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('date');
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [savedReviews, setSavedReviews] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [ratingFilter, setRatingFilter] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const reviews = useMemo(() => config?.reviews || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', 'analyst', 'media', 'consultant', 'award'], [config]);
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
      'calendar': HiOutlineCalendar,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'bulb': HiOutlineLightBulb,
      'bookmark': HiOutlineBookmark,
      'external-link': HiOutlineExternalLink,
      'newspaper': HiOutlineNewspaper,
      'trending': HiOutlineTrendingUp,
      'filter': HiOutlineFilter,
      'search': HiOutlineSearch,
      'download': HiOutlineDownload,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'trophy': HiOutlineTrophy,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'x': HiOutlineX,
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
   * Get category icon and display name
   * @param {string} category - Category identifier
   * @returns {Object} Icon component and display name
   */
  const getCategoryInfo = useCallback((category) => {
    const info = {
      analyst: { icon: 'chart', name: 'Analyst' },
      media: { icon: 'newspaper', name: 'Media' },
      consultant: { icon: 'users', name: 'Consultant' },
      award: { icon: 'trophy', name: 'Award' },
    };
    return info[category] || { icon: 'star', name: category };
  }, []);

  /**
   * Get category badge color classes
   * @param {string} category - Category identifier
   * @returns {string} CSS class string
   */
  const getCategoryColor = useCallback((category) => {
    const colors = {
      analyst: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      media: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      consultant: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      award: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
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
    const saved = localStorage.getItem('savedExpertReviews');
    if (saved) {
      setSavedReviews(JSON.parse(saved));
    }
  }, []);

  /**
   * Save or unsave a review
   * @param {string|number} id - ID of the review to save/unsave
   */
  const handleSaveReview = useCallback((id) => {
    setSavedReviews(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedExpertReviews', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Toggle expanded view for a review
   * @param {string|number} id - ID of the review to expand/collapse
   */
  const toggleExpand = useCallback((id) => {
    setExpandedId(expandedId === id ? null : id);
  }, [expandedId]);

  /**
   * Handle export functionality
   */
  const handleExport = useCallback(() => {
    alert('Exporting report... This would generate a PDF/CSV in production.');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredReviews = useMemo(() => {
    const filtered = reviews.filter(review => {
      const matchesCategory = activeCategory === 'all' || review.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        review.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.organization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.publication?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.quote?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = !ratingFilter || (review.rating || 0) >= ratingFilter;
      return matchesCategory && matchesSearch && matchesRating;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'name') return a.organization?.localeCompare(b.organization || '');
      return 0;
    });

    return filtered;
  }, [reviews, activeCategory, searchQuery, sortBy, ratingFilter]);

  // ==================== FEATURED REVIEWS ====================
  const featuredReviews = useMemo(() => {
    return filteredReviews.filter(r => r.featured === true).slice(0, 2);
  }, [filteredReviews]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
        if (currentStep >= steps) {
          newValue = targetValues[index];
        }

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

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, stats, parseMetricValue]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews Dashboard"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-300/5 dark:bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-purple-100 dark:bg-purple-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-purple-200 dark:border-purple-800'}`}
            aria-label="Expert reviews badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-purple-700 dark:text-purple-300'}`}>
              {config?.badge?.text || "Expert Recognition"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'What'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Industry Experts'}
            </span>{' '}
            {config?.title?.suffix || 'Say'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Leading analysts, media outlets, and consultants recognize our platform's impact and innovation."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-purple-600 dark:text-purple-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 font-mono">
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

        {/* ==================== FEATURED REVIEWS ==================== */}
        {featuredReviews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("award", "w-6 h-6 text-yellow-500")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Recognition
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      {getIcon("award", "w-6 h-6 text-yellow-400")}
                      <span className="text-sm text-white/80">Featured Recognition</span>
                    </div>
                    <div className="mb-3">
                      {getIcon(getCategoryInfo(review.category).icon, "w-10 h-10")}
                    </div>
                    <p className="text-base md:text-lg leading-relaxed mb-4 line-clamp-3">
                      "{review.quote}"
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <div className="font-bold">{review.publication}</div>
                        <div className="text-sm text-white/70">{review.author}, {review.organization}</div>
                      </div>
                      {review.rating && (
                        <div>{renderStars(review.rating, "w-5 h-5")}</div>
                      )}
                    </div>
                    <Link
                      href={review.link || "#"}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      Read Full Review
                      {getIcon("external-link", "w-4 h-4")}
                    </Link>
                  </div>
                </div>
              ))}
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
              placeholder="Search reviews by publication, author, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              aria-label="Search expert reviews"
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

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              aria-label="Sort reviews by"
            >
              <option value="date">Most Recent</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Organization A-Z</option>
            </select>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600">
                {getIcon("x", "w-4 h-4")}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const { icon, name } = getCategoryInfo(category);
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category
                          ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        {getIcon(icon, "w-3 h-3")}
                        {category === 'all' ? 'All' : name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Minimum Rating</label>
                <div className="flex gap-2">
                  {[null, 5, 4, 3].map((rating) => (
                    <button
                      key={rating === null ? 'all' : rating}
                      onClick={() => setRatingFilter(rating)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${ratingFilter === rating
                        ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {rating === null ? 'All Stars' : `${rating}+ Stars`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredReviews.length}</span> expert reviews
          </div>
          <button
            onClick={handleExport}
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            {getIcon("download", "w-4 h-4")}
            Export Report
          </button>
        </div>

        {/* ==================== REVIEWS GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 md:p-6">
                {/* Header - Publication & Save Button */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                      {getIcon(getCategoryInfo(review.category).icon, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">{review.publication}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        {getIcon("calendar", "w-3 h-3")}
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveReview(review.id)}
                    className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label={savedReviews.includes(review.id) ? "Remove from saved" : "Save review"}
                  >
                    {getIcon("bookmark", `w-5 h-5 ${savedReviews.includes(review.id) ? 'fill-purple-600 text-purple-600' : ''}`)}
                  </button>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${getCategoryColor(review.category)}`}>
                    {getIcon(getCategoryInfo(review.category).icon, "w-3 h-3")}
                    {getCategoryInfo(review.category).name}
                  </span>
                </div>

                {/* Rating */}
                {review.rating && (
                  <div className="mb-3 flex items-center gap-2">
                    {renderStars(review.rating, "w-4 h-4")}
                    <span className="text-xs text-gray-500 dark:text-gray-400">{review.rating}.0/5.0</span>
                  </div>
                )}

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{review.quote}"
                </p>

                {/* Footer - Author & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{review.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{review.role}, {review.organization}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleExpand(review.id)}
                      className="text-purple-600 dark:text-purple-400 text-xs font-semibold hover:underline"
                    >
                      {expandedId === review.id ? 'Less' : 'Read More'}
                    </button>
                    <Link
                      href={review.link || "#"}
                      className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      aria-label="View source"
                    >
                      {getIcon("external-link", "w-4 h-4")}
                    </Link>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedId === review.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                    {/* Full Quote */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {review.fullQuote || review.quote}
                    </p>

                    {/* Key Takeaways */}
                    {review.highlights && review.highlights.length > 0 && (
                      <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 border border-purple-100 dark:border-purple-800">
                        <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-1">
                          {getIcon("bulb", "w-3 h-3")}
                          Key Takeaways
                        </div>
                        <ul className="space-y-1.5">
                          {review.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                              {getIcon("check-circle", "w-3 h-3 text-green-500 mt-0.5 shrink-0")}
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No expert reviews found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setRatingFilter(null);
              }}
              className="mt-4 px-4 py-2 text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== PRESS KIT DOWNLOAD ==================== */}
        {config?.showPressKit && (
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 md:p-8 border border-purple-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📁</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Press Kit</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Download all expert reviews, analyst reports, and awards in one package</p>
                  </div>
                </div>
                <Link
                  href={config?.pressKitLink || "/press-kit"}
                  className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  {getIcon("download", "w-5 h-5")}
                  Download Press Kit
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Recognized by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-300 hover:opacity-100 hover:scale-110">
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                {getIcon("newspaper", "w-6 h-6 text-purple-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Want to see our full press coverage?"}
              </span>
              <Link
                href={config?.ctaLink || "/press"}
                className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Visit Press Room"}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default IndustryExpertReviewsSection2;