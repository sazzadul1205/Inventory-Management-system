// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection1.jsx

/**
 * Industry Expert Reviews Section Component
 * A comprehensive showcase of industry expert reviews featuring:
 * - Stats dashboard with key metrics
 * - Featured expert review spotlight with gradient background
 * - Category filters (Analyst, Media, Consultant, Award)
 * - Save/bookmark functionality for reviews
 * - Expandable review details with key highlights
 * - Awards & recognition showcase
 * - Source attribution with external links
 * - Publication and date information
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - All from react-icons library
import { FaQuoteLeft, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const IndustryExpertReviewsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [savedReviews, setSavedReviews] = useState([]);
  const [animatedStats, setAnimatedStats] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const reviews = useMemo(() => config?.reviews || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', 'analyst', 'media', 'consultant', 'award'], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);
  const awards = useMemo(() => config?.awards || [], [config]);

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
      'bookmark': HiOutlineBookmark,
      'badge-check': HiOutlineBadgeCheck,
      'external-link': HiOutlineExternalLink,
      'newspaper': HiOutlineNewspaper,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'trending': HiOutlineTrendingUp,
      'sparkles': HiOutlineSparkles,
      'trophy': HiOutlineTrophy,
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

  // ==================== LOCAL STORAGE FOR SAVED REVIEWS ====================
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

  // ==================== FILTERING LOGIC ====================
  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      return activeCategory === 'all' || review.category === activeCategory;
    });
  }, [reviews, activeCategory]);

  // ==================== FEATURED REVIEW ====================
  const featuredReview = useMemo(() => {
    return filteredReviews.find(r => r.featured === true) || filteredReviews[0];
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
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-indigo-100/20 dark:bg-indigo-900/5 rounded-full blur-3xl" aria-hidden="true" />

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
              {config?.badge?.text || "Industry Recognition"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'What'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Experts'}
            </span>{' '}
            {config?.title?.suffix || 'Are Saying'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Industry analysts, media outlets, and consultants recognize our platform's impact and innovation."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-purple-600 dark:text-purple-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURED EXPERT REVIEW ==================== */}
        {featuredReview && (
          <div className="mb-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Content Column */}
              <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon("badge-check", "w-6 h-6 text-yellow-400")}
                  <span className="text-sm text-white/80">Featured Review</span>
                </div>
                <div className="text-white/30 mb-3">
                  {getIcon("quote-left", "w-10 h-10")}
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{featuredReview.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {getIcon(featuredReview.icon || "star", "w-7 h-7")}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{featuredReview.author}</div>
                    <div className="text-white/80">{featuredReview.role}, {featuredReview.organization}</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="bg-white/10 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center">
                <div className="mb-3">
                  {getIcon(getCategoryInfo(featuredReview.category).icon, "w-12 h-12")}
                </div>
                <div className="text-white font-bold text-2xl mb-1">{featuredReview.publication}</div>
                <div className="text-white/80 text-sm flex items-center gap-1">
                  {getIcon("calendar", "w-3 h-3")}
                  {featuredReview.date}
                </div>
                {featuredReview.rating && (
                  <div className="mt-4">
                    {renderStars(featuredReview.rating, "w-5 h-5")}
                  </div>
                )}
                <Link
                  href={featuredReview.link || "#"}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Read Full Review
                  {getIcon("external-link", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeCategory === 'all'
              ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all reviews"
          >
            {getIcon("star", "w-4 h-4")}
            All Reviews
          </button>
          {categories.filter(c => c !== 'all').map((category) => {
            const { icon, name } = getCategoryInfo(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeCategory === category
                  ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${name} reviews`}
              >
                {getIcon(icon, "w-4 h-4")}
                {name}
              </button>
            );
          })}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredReviews.length}</span> expert reviews
          </div>
          {savedReviews.length > 0 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              📌 {savedReviews.length} saved
            </div>
          )}
        </div>

        {/* ==================== REVIEWS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 md:p-6">
                {/* Header - Category Badge & Save Button */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${getCategoryColor(review.category)}`}>
                    {getIcon(getCategoryInfo(review.category).icon, "w-3 h-3")}
                    {getCategoryInfo(review.category).name}
                  </span>
                  <button
                    onClick={() => handleSaveReview(review.id)}
                    className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label={savedReviews.includes(review.id) ? "Remove from saved" : "Save review"}
                  >
                    {getIcon("bookmark", `w-4 h-4 ${savedReviews.includes(review.id) ? 'fill-purple-600 text-purple-600' : ''}`)}
                  </button>
                </div>

                {/* Publication & Date */}
                <div className="mb-3">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{review.publication}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                    {getIcon("calendar", "w-3 h-3")}
                    {review.date}
                  </div>
                </div>

                {/* Star Rating */}
                {review.rating && (
                  <div className="mb-3">
                    {renderStars(review.rating, "w-4 h-4")}
                  </div>
                )}

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                  "{review.quote}"
                </p>

                {/* Author Info */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      {getIcon(review.icon || "star", "w-4 h-4")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{review.author}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{review.role}</div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="text-purple-600 dark:text-purple-400 text-xs font-semibold hover:underline"
                  >
                    {expandedId === review.id ? 'Show Less' : 'Read Full Review'}
                  </button>
                  <Link
                    href={review.link || "#"}
                    className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Source
                    {getIcon("external-link", "w-3 h-3")}
                  </Link>
                </div>

                {/* Expanded Content */}
                {expandedId === review.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                    {/* Full Quote */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {review.fullQuote || review.quote}
                    </p>

                    {/* Key Highlights */}
                    {review.highlights && review.highlights.length > 0 && (
                      <div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                          {getIcon("sparkles", "w-3 h-3")}
                          Key Highlights:
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
            <p className="text-gray-500 dark:text-gray-400">Try selecting a different category to see more reviews.</p>
          </div>
        )}

        {/* ==================== AWARDS & RECOGNITION ==================== */}
        {config?.showAwards && awards.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("trophy", "w-6 h-6 text-yellow-500")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.awardsTitle || "Awards & Recognition"}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-yellow-500">
                    {getIcon(award.icon || "trophy", "w-10 h-10")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.presentedBy}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{award.year}</p>
                </div>
              ))}
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
                {config?.ctaText || "Want to see what the experts are saying?"}
              </span>
              <Link
                href={config?.ctaLink || "/press"}
                className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "View Press Kit"}
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

export default IndustryExpertReviewsSection1;