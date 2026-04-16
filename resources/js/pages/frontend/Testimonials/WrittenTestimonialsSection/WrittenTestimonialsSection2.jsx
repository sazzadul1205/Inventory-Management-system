// frontend/Testimonials/WrittenTestimonialsSection/WrittenTestimonialsSection2.jsx

/**
 * Customer Testimonials Gallery Component
 * A comprehensive written testimonial showcase featuring:
 * - Featured testimonial spotlight with gradient background
 * - Search functionality across author, company, quote, and tags
 * - Industry category filters with color-coded badges
 * - Sort by recent, rating, or helpful count
 * - Save/bookmark testimonials to localStorage
 * - Like/unlike functionality with localStorage persistence
 * - Expandable reviews with full content
 * - Client result highlights
 * - Tags display for easy filtering
 * - Dynamic helpful count updates
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// React Icons - All from react-icons library
import { FaQuoteLeft, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineThumbUp,
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

// Sweetalert
import Swal from 'sweetalert2';

const WrittenTestimonialsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('recent');
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [likedTestimonials, setLikedTestimonials] = useState([]);
  const [savedTestimonials, setSavedTestimonials] = useState([]);

  // ==================== REFS ====================
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
      'calendar': HiOutlineCalendar,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'share': HiOutlineShare,
      'bookmark': HiOutlineBookmark,
      'search': HiOutlineSearch,
      'thumb-up': HiOutlineThumbUp,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'trending': HiOutlineTrendingUp,
      'sparkles': HiOutlineSparkles,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'quote-left': FaQuoteLeft,
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

  /**
   * Share testimonial using Web Share API
   * @param {Object} testimonial - Testimonial object to share
   */
  const handleShare = useCallback(async (testimonial) => {
    if (!testimonial) return;

    const shareUrl = testimonial.link || window.location.href;
    const shareText = testimonial.quote?.substring(0, 100) || '';
    const shareTitle = `Testimonial from ${testimonial.author}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });

        Swal.fire({
          icon: 'success',
          title: 'Shared!',
          text: 'Testimonial shared successfully.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        // user cancelled → ignore
        console.error('Share cancelled', err);
      }
    } else {
      try {
        // Copy the LINK (not just the quote)
        await navigator.clipboard.writeText(shareUrl);

        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Link copied to clipboard.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Failed to copy link.  ${err}`,
        });
      }
    }
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
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
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
      const newLiked = wasLiked
        ? prev.filter(likedId => likedId !== id)
        : [...prev, id];
      localStorage.setItem('likedWrittenTestimonials', JSON.stringify(newLiked));
      return newLiked;
    });

    // Update helpful count in UI
    setTestimonialsData(prevData =>
      prevData.map(t =>
        t.id === id
          ? { ...t, helpfulCount: (t.helpfulCount || 0) + (wasLiked ? -1 : 1) }
          : t
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

    // Apply sorting
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
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Testimonials Gallery"
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
            aria-label="Testimonials badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Client Testimonials"}
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

        {/* ==================== RATING SUMMARY ==================== */}
        {config?.showRatingSummary && stats.length > 0 && (
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 md:p-8 mb-8 border border-blue-100 dark:border-blue-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {animatedStats[index] || stat.value}
                  </div>
                  {stat.icon === 'star' && (
                    <div className="flex justify-center gap-0.5 my-1">
                      {renderStars(5, "w-4 h-4")}
                    </div>
                  )}
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FEATURED TESTIMONIAL SPOTLIGHT ==================== */}
        {featuredTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl overflow-hidden border border-blue-100 dark:border-blue-800">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Content Column */}
              <div className="lg:col-span-2 p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(featuredTestimonial.rating, "w-5 h-5")}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{featuredTestimonial.rating}.0</span>
                </div>
                <div className="text-blue-400 dark:text-blue-500 mb-3">
                  {getIcon("quote-left", "w-8 h-8")}
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                    {getIcon(featuredTestimonial.icon || "users", "w-6 h-6")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {featuredTestimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {featuredTestimonial.role}, {featuredTestimonial.company}
                    </div>
                  </div>
                </div>
                {featuredTestimonial.result && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                    {getIcon("check-circle", "w-4 h-4 text-green-600 dark:text-green-400")}
                    <span className="text-xs text-green-700 dark:text-green-400 font-medium">{featuredTestimonial.result}</span>
                  </div>
                )}
              </div>

              {/* Visual Column */}
              <div className={`bg-linear-to-br ${featuredTestimonial.gradient || 'from-blue-600 to-indigo-600'} p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-white`}>
                <div className="mb-3">
                  {getIcon(featuredTestimonial.icon || "building", "w-16 h-16")}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{featuredTestimonial.company}</div>
                  <div className="text-sm opacity-90">{getCategoryName(featuredTestimonial.category)}</div>
                  <div className="mt-4 text-3xl font-bold">{featuredTestimonial.keyMetric || "287%"}</div>
                  <div className="text-xs opacity-80">improvement achieved</div>
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
              placeholder="Search by company, author, keyword, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search testimonials"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${category === 'all' ? 'all industries' : getCategoryName(category)}`}
              >
                {category === 'all' ? 'All Industries' : getCategoryName(category)}
              </button>
            ))}
          </div>

          {/* Sort Select */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Sort testimonials by"
          >
            <option value="recent">Most Recent</option>
            <option value="rating">Highest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

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

        {/* ==================== TESTIMONIALS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 md:p-6">
                {/* Header - Author & Actions */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {getIcon(testimonial.icon || "users", "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {/* Save Button */}
                    <button
                      onClick={() => handleSaveTestimonial(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={savedTestimonials.includes(testimonial.id) ? "Remove from saved" : "Save testimonial"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                    </button>
                    {/* Share Button */}
                    <button
                      onClick={() => handleShare(testimonial)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Share testimonial"
                    >
                      {getIcon("share", "w-4 h-4")}
                    </button>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
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
                  "{expandedId === testimonial.id ? (testimonial.fullQuote || testimonial.quote) : testimonial.quote}"
                </p>

                {/* Result Highlight (only in expanded view) */}
                {testimonial.result && expandedId === testimonial.id && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-2">
                      {getIcon("check-circle", "w-4 h-4 text-green-600 dark:text-green-400")}
                      <span className="text-xs text-green-700 dark:text-green-400">
                        <span className="font-semibold">Result:</span> {testimonial.result}
                      </span>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    {/* Like Button */}
                    <button
                      onClick={() => handleLikeTestimonial(testimonial.id)}
                      className={`flex items-center gap-1 text-xs transition-colors ${likedTestimonials.includes(testimonial.id)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      aria-label={likedTestimonials.includes(testimonial.id) ? "Unlike" : "Like"}
                    >
                      {getIcon("thumb-up", "w-3 h-3")}
                      <span>{testimonial.helpfulCount || 0}</span>
                    </button>
                    <span className="text-xs text-gray-300 dark:text-gray-600">·</span>
                    {/* Read More Button */}
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                    >
                      {expandedId === testimonial.id ? 'Show Less' : 'Read Full Review'}
                    </button>
                  </div>

                  {/* Tags */}
                  {testimonial.tags && testimonial.tags.length > 0 && (
                    <div className="flex gap-1">
                      {testimonial.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                {expandedId === testimonial.id && (
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

                    {/* Read Case Study Link */}
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

        {/* ==================== EMPTY STATE ==================== */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No testimonials found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
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

export default WrittenTestimonialsSection2;