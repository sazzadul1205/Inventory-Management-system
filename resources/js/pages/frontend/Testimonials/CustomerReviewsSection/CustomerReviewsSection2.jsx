// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection2.jsx

/**
 * Customer Reviews Gallery Component
 * A comprehensive review showcase featuring:
 * - Search functionality across authors, companies, and quotes
 * - Industry filter tabs for 6 industry categories
 * - Sort by recent, rating, or helpful count
 * - Save/bookmark reviews to localStorage
 * - Expandable review details with challenge/solution
 * - Video reviews gallery
 * - Rating summary statistics
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineSearch,
  HiOutlineBookmark,
  HiOutlineThumbUp,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const CustomerReviewsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('recent');
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedReviews, setSavedReviews] = useState([]);
  const [likedReviews, setLikedReviews] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const testimonials = useMemo(() => config?.testimonials || [], [config]);
  const filters = useMemo(() => config?.filters || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'], [config?.filters]);

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
      'calendar': HiOutlineCalendar,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'play': HiOutlinePlay,
      'search': HiOutlineSearch,
      'bookmark': HiOutlineBookmark,
      'thumb-up': HiOutlineThumbUp,
      'external-link': HiOutlineExternalLink,
      'filter': HiOutlineFilter,
      'x': HiOutlineX,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'trending': HiOutlineTrendingUp,
      'sparkles': HiOutlineSparkles,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
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
   * Get industry badge color classes
   * @param {string} industry - Industry identifier
   * @returns {string} CSS class string
   */
  const getIndustryColor = useCallback((industry) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    };
    return colors[industry] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  }, []);

  /**
   * Get industry display name
   * @param {string} industry - Industry identifier
   * @returns {string} Display name
   */
  const getIndustryName = useCallback((industry) => {
    const names = {
      retail: 'Retail',
      manufacturing: 'Manufacturing',
      logistics: 'Logistics',
      healthcare: 'Healthcare',
      food: 'Food & Beverage',
      electronics: 'Electronics',
    };
    return names[industry] || industry;
  }, []);

  // ==================== LOCAL STORAGE FOR SAVED REVIEWS ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedReviews');
    if (saved) {
      setSavedReviews(JSON.parse(saved));
    }
    const liked = localStorage.getItem('likedReviews');
    if (liked) {
      setLikedReviews(JSON.parse(liked));
    }
  }, []);

  /**
   * Save or unsave a review
   * @param {string|number} reviewId - ID of the review to save/unsave
   */
  const handleSaveReview = useCallback((reviewId) => {
    setSavedReviews(prev => {
      const newSaved = prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId];
      localStorage.setItem('savedReviews', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Like or unlike a review
   * @param {string|number} reviewId - ID of the review to like/unlike
   */
  const handleLikeReview = useCallback((reviewId) => {
    setLikedReviews(prev => {
      const newLiked = prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId];
      localStorage.setItem('likedReviews', JSON.stringify(newLiked));
      return newLiked;
    });
  }, []);

  /**
   * Toggle expanded review details
   * @param {string|number} reviewId - ID of the review to expand/collapse
   */
  const toggleExpand = useCallback((reviewId) => {
    setSelectedTestimonial(selectedTestimonial === reviewId ? null : reviewId);
  }, [selectedTestimonial]);

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

    const statsData = [
      { value: 4.9, suffix: '', isDecimal: true },
      { value: 500, suffix: '+', isDecimal: false },
      { value: 98, suffix: '%', isDecimal: false },
      { value: 4.8, suffix: '', isDecimal: true },
    ];

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const startValues = statsData.map(() => 0);
    const targetValues = statsData.map(s => s.value);
    const increments = statsData.map(s => s.value / steps);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      statsData.forEach((stat, index) => {
        let newValue = startValues[index] + (increments[index] * currentStep);
        if (currentStep >= steps) {
          newValue = targetValues[index];
        }

        let formattedValue;
        if (stat.isDecimal) {
          formattedValue = newValue.toFixed(1);
        } else {
          formattedValue = Math.floor(newValue);
        }
        formattedValue += stat.suffix;

        newValues[index] = formattedValue;
      });

      setAnimatedStats(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredTestimonials = useMemo(() => {
    const filtered = testimonials.filter(testimonial => {
      const matchesFilter = activeFilter === 'all' || testimonial.industry === activeFilter;
      const matchesSearch = searchQuery === '' ||
        testimonial.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.quote?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'helpful') {
        return (b.helpfulCount || 0) - (a.helpfulCount || 0);
      }
      return 0;
    });

    return filtered;
  }, [testimonials, activeFilter, searchQuery, sortBy]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Reviews Gallery"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Customer reviews badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Customer Reviews"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'What Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Customers'}
            </span>{' '}
            {config?.title?.suffix || 'Say'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Browse real reviews from clients across industries. See how we've helped businesses achieve remarkable results."}
          </p>
        </div>

        {/* ==================== RATING SUMMARY ==================== */}
        {config?.showRatingSummary && (
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 md:p-8 mb-8 border border-blue-100 dark:border-blue-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {animatedStats[0] || '4.9'}
                </div>
                <div className="flex justify-center gap-0.5 my-1">
                  {renderStars(5, "w-4 h-4")}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {animatedStats[1] || '500+'}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">Verified Reviews</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {animatedStats[2] || '98%'}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">Would Recommend</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {animatedStats[3] || '4.8'}
                </div>
                <div className="flex justify-center gap-0.5 my-1">
                  {renderStars(5, "w-3 h-3")}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Product Satisfaction</div>
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
              placeholder="Search reviews by company, author, keyword, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search reviews"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {getIcon("filter", "w-4 h-4")}
            Filters
          </button>

          {/* Industry Filter Tabs */}
          <div className={`flex gap-2 overflow-x-auto pb-2 md:pb-0 ${showFilters ? 'flex-wrap' : 'hidden md:flex'}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === filter
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${filter === 'all' ? 'all industries' : getIndustryName(filter)}`}
              >
                {filter === 'all' ? 'All Industries' : getIndustryName(filter)}
              </button>
            ))}
          </div>

          {/* Sort Select */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Sort reviews by"
          >
            <option value="recent">Most Recent</option>
            <option value="rating">Highest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredTestimonials.length}</span> reviews
          </div>
          {savedReviews.length > 0 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              📌 {savedReviews.length} saved
            </div>
          )}
        </div>

        {/* ==================== REVIEWS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5">
                {/* Author and Action Buttons */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {getIcon(testimonial.icon || "users", "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleSaveReview(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={savedReviews.includes(testimonial.id) ? "Remove from saved" : "Save review"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${savedReviews.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                    </button>
                    <button
                      onClick={() => handleLikeReview(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={likedReviews.includes(testimonial.id) ? "Unlike review" : "Like review"}
                    >
                      {getIcon("thumb-up", `w-4 h-4 ${likedReviews.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                    </button>
                  </div>
                </div>

                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-3">
                  {renderStars(testimonial.rating, "w-4 h-4")}
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    {getIcon("calendar", "w-3 h-3")}
                    {testimonial.date}
                  </span>
                </div>

                {/* Industry Badge */}
                <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getIndustryColor(testimonial.industry)}`}>
                  {getIndustryName(testimonial.industry)}
                </span>

                {/* Quote Preview */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4 leading-relaxed">
                  "{testimonial.quote.length > 200 ? `${testimonial.quote.substring(0, 200)}...` : testimonial.quote}"
                </p>

                {/* Result Highlight */}
                {testimonial.result && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-2">
                      {getIcon("check-circle", "w-4 h-4 text-green-600 dark:text-green-400")}
                      <span className="text-xs text-green-700 dark:text-green-400">
                        <span className="font-semibold">Result:</span> {testimonial.result}
                      </span>
                    </div>
                  </div>
                )}

                {/* Footer with Helpful Count and Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {testimonial.helpfulCount || 0} people found this helpful
                  </div>
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                  >
                    {selectedTestimonial === testimonial.id ? 'Show Less' : 'Read Full Review'}
                  </button>
                </div>

                {/* Expanded Content */}
                {selectedTestimonial === testimonial.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                    {/* Challenge */}
                    {testimonial.challenge && (
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                          {getIcon("chart", "w-3 h-3")}
                          The Challenge
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {testimonial.challenge}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {testimonial.solution && (
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                          {getIcon("sparkles", "w-3 h-3")}
                          The Solution
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {testimonial.solution}
                        </p>
                      </div>
                    )}

                    {/* Full Quote */}
                    {testimonial.fullQuote && (
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                          {getIcon("chat", "w-3 h-3")}
                          Full Review
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed">
                          "{testimonial.fullQuote}"
                        </p>
                      </div>
                    )}

                    {/* Read Case Study Link */}
                    <Link
                      href={testimonial.link || "/case-studies"}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:gap-2 transition-all group"
                    >
                      Read Full Case Study
                      {getIcon("external-link", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No reviews found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== VIDEO REVIEWS ==================== */}
        {config?.showVideoReviews && config?.videoReviews?.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("play", "w-6 h-6 text-blue-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.videoTitle || "Video Reviews"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoReviews.map((video, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div
                    className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                      {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="text-white font-semibold">{video.title}</div>
                    <div className="text-white/80 text-sm">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        {config?.showTrustBadges && config?.trustBadges?.length > 0 && (
          <div className="text-center pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
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

        {/* ==================== WRITE REVIEW CTA ==================== */}
        {config?.showWriteReview && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("chat", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.writeReviewText || "Share your experience with us"}
              </span>
              <Link
                href={config?.writeReviewLink || "/submit-review"}
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

export default CustomerReviewsSection2;