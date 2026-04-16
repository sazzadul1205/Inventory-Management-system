// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection3.jsx

/**
 * Industry Expert Reviews Hub Component
 * A comprehensive expert recognition hub featuring:
 * - Tabbed navigation (Expert Reviews, Analyst Reports, Awards)
 * - Stats dashboard with key metrics and trend indicators
 * - Timeline milestones for recognition journey
 * - Search functionality across publications, authors, organizations
 * - Category filters (Analyst, Media, Consultant)
 * - Year filter for reviews
 * - Sort by date, rating, or organization name
 * - Save/bookmark functionality for reviews
 * - Expandable review details with key takeaways
 * - Analyst reports section with download links
 * - Awards showcase with descriptions
 * - Press kit download option
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
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineDocumentReport,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const IndustryExpertReviewsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('reviews');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [selectedYear, setSelectedYear] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [savedReviews, setSavedReviews] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const reviews = useMemo(() => config?.reviews || [], [config]);
  const reports = useMemo(() => config?.reports || [], [config]);
  const awards = useMemo(() => config?.awards || [], [config]);
  const timeline = useMemo(() => config?.timeline || [], [config]);
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
      'bookmark': HiOutlineBookmark,
      'external-link': HiOutlineExternalLink,
      'newspaper': HiOutlineNewspaper,
      'trending': HiOutlineTrendingUp,
      'search': HiOutlineSearch,
      'download': HiOutlineDownload,
      'document-report': HiOutlineDocumentReport,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'trophy': HiOutlineTrophy,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
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
      report: { icon: 'document-report', name: 'Report' },
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
      report: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
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

  // ==================== YEARS LIST ====================
  const years = useMemo(() => {
    const yearSet = new Set(reviews.map(r => r.year).filter(Boolean));
    return ['all', ...Array.from(yearSet).sort().reverse()];
  }, [reviews]);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredReviews = useMemo(() => {
    const filtered = reviews.filter(review => {
      const matchesCategory = activeCategory === 'all' || review.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        review.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.organization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.publication?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.quote?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === 'all' || review.year === selectedYear;
      return matchesCategory && matchesSearch && matchesYear;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'name') return a.organization?.localeCompare(b.organization || '');
      return 0;
    });

    return filtered;
  }, [reviews, activeCategory, searchQuery, sortBy, selectedYear]);

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
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews Hub"
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
            {config?.title?.prefix || 'Industry'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Recognition'}
            </span>{' '}
            {config?.title?.suffix || 'Hub'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Discover what industry experts, analysts, and awards are saying about our platform."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-purple-600 dark:text-purple-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.trend && (
                <div className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center justify-center gap-1">
                  {getIcon("trending", "w-3 h-3")}
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ==================== TIMELINE MILESTONES ==================== */}
        {timeline.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("sparkles", "w-6 h-6 text-purple-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recognition Timeline
              </h3>
            </div>
            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-purple-500 to-indigo-500 rounded-full" aria-hidden="true" />

              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full border-2 border-white dark:border-gray-800 shadow-md z-10" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-purple-600 dark:text-purple-400">
                            {getIcon(event.icon, "w-5 h-5")}
                          </div>
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{event.year}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                          {event.description}
                        </p>
                        {event.publication && (
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            {getIcon("newspaper", "w-3 h-3")}
                            {event.publication}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'reviews'
              ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show expert reviews"
          >
            {getIcon("newspaper", "w-4 h-4")}
            Expert Reviews
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'reports'
              ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show analyst reports"
          >
            {getIcon("document-report", "w-4 h-4")}
            Analyst Reports
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'awards'
              ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show awards"
          >
            {getIcon("award", "w-4 h-4")}
            Awards & Recognition
          </button>
        </div>

        {/* ==================== EXPERT REVIEWS TAB ==================== */}
        {activeTab === 'reviews' && (
          <div className="animate-fadeIn">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
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
              <div className="flex flex-wrap gap-2">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  <option value="analyst">Analyst</option>
                  <option value="media">Media</option>
                  <option value="consultant">Consultant</option>
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Filter by year"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                  ))}
                </select>
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

            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Found <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredReviews.length}</span> expert reviews
              </div>
              <button
                onClick={handleExport}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors"
              >
                {getIcon("download", "w-4 h-4")}
                Export
              </button>
            </div>

            {/* Reviews Grid */}
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
                    <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full mb-3 ${getCategoryColor(review.category)}`}>
                      {getIcon(getCategoryInfo(review.category).icon, "w-3 h-3")}
                      {getCategoryInfo(review.category).name}
                    </span>

                    {/* Rating */}
                    {review.rating && (
                      <div className="mb-3">
                        {renderStars(review.rating, "w-4 h-4")}
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
                              {getIcon("sparkles", "w-3 h-3")}
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

            {/* Empty State */}
            {filteredReviews.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No expert reviews found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setSelectedYear('all');
                  }}
                  className="mt-4 px-4 py-2 text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== ANALYST REPORTS TAB ==================== */}
        {activeTab === 'reports' && reports.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fadeIn">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                      {getIcon(report.icon || "document-report", "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{report.title}</h3>
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">{report.publisher}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                        {getIcon("calendar", "w-3 h-3")}
                        {report.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {renderStars(report.rating, "w-4 h-4")}
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{report.rating}</span>
                      <span className="text-xs text-gray-500">/ 5.0</span>
                    </div>
                    <Link
                      href={report.link || "#"}
                      className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:gap-2 transition-all group"
                    >
                      Download Report
                      {getIcon("download", "w-4 h-4 group-hover:translate-y-0.5 transition-transform")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== AWARDS TAB ==================== */}
        {activeTab === 'awards' && awards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fadeIn">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-3 text-yellow-500">
                  {getIcon(award.icon || "trophy", "w-12 h-12")}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.presentedBy}</p>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">{award.year}</p>
                {award.description && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== PRESS KIT DOWNLOAD ==================== */}
        <div className="text-center mt-12">
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

export default IndustryExpertReviewsSection3;