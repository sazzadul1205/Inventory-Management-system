// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection3.jsx

/**
 * Customer Reviews Showcase Component
 * A comprehensive testimonial showcase featuring:
 * - Animated rating statistics with counters
 * - Category filters (All, 5-Star, 4-Star, 3-Star, Verified Only)
 * - Spotlight section for most helpful reviews with award badge
 * - Expandable review details with full quotes
 * - Verified customer badges
 * - Video testimonials gallery
 * - Trust signals and badges
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaAward, FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineThumbUp,
  HiOutlineBadgeCheck,
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

const CustomerReviewsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [selectedReview, setSelectedReview] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // ======================== REFS ========================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const reviews = useMemo(() => config?.reviews || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', '5-star', '4-star', '3-star', 'verified'], [config]);
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
      'play': HiOutlinePlay,
      'thumb-up': HiOutlineThumbUp,
      'badge-check': HiOutlineBadgeCheck,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'trending': HiOutlineTrendingUp,
      'sparkles': HiOutlineSparkles,
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
   * Get category icon and label
   * @param {string} category - Category identifier
   * @returns {Object} Icon and label
   */
  const getCategoryInfo = useCallback((category) => {
    const info = {
      'all': { icon: 'users', label: 'All Reviews' },
      '5-star': { icon: 'star', label: '5 Star' },
      '4-star': { icon: 'star', label: '4 Star' },
      '3-star': { icon: 'star', label: '3 Star' },
      'verified': { icon: 'badge-check', label: 'Verified Only' },
    };
    return info[category] || info['all'];
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

  // ==================== FILTERING LOGIC ====================
  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      if (activeCategory === 'all') return true;
      if (activeCategory === '5-star') return review.rating === 5;
      if (activeCategory === '4-star') return review.rating === 4;
      if (activeCategory === '3-star') return review.rating === 3;
      if (activeCategory === 'verified') return review.isVerified === true;
      return true;
    });
  }, [reviews, activeCategory]);

  // ==================== TOP REVIEWS (MOST HELPFUL) ====================
  const topReviews = useMemo(() => {
    return [...filteredReviews]
      .sort((a, b) => (b.helpfulCount || 0) - (a.helpfulCount || 0))
      .slice(0, 3);
  }, [filteredReviews]);

  // ==================== TOGGLE EXPAND REVIEW ====================
  const toggleExpand = useCallback((reviewId) => {
    setSelectedReview(selectedReview === reviewId ? null : reviewId);
  }, [selectedReview]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Reviews Showcase"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

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
            {config?.description || "Don't just take our word for it. Here's what our clients have to say about their experience."}
          </p>
        </div>

        {/* ==================== TRUST BADGES ==================== */}
        {config?.trustBadges && config.trustBadges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {config.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400">
                  {getIcon(badge.icon, "w-4 h-4")}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* ==================== STATS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.subtext && (
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.subtext}</div>
              )}
            </div>
          ))}
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const { icon, label } = getCategoryInfo(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeCategory === category
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${label}`}
              >
                {getIcon(icon, "w-4 h-4")}
                {label}
              </button>
            );
          })}
        </div>

        {/* ==================== TOP REVIEWS SPOTLIGHT ==================== */}
        {topReviews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("award", "w-6 h-6 text-yellow-500")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.spotlightTitle || "Most Helpful Reviews"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  {/* Award Badge for Top Review */}
                  {index === 0 && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-bl-2xl flex items-center justify-center">
                      {getIcon("award", "w-6 h-6 text-white")}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {getIcon(review.icon || "users", "w-6 h-6")}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {review.author}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{review.company}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                      {renderStars(review.rating, "w-4 h-4")}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4 line-clamp-4 leading-relaxed">
                      "{review.quote}"
                    </p>

                    {/* Result Highlight */}
                    {review.result && (
                      <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                        <div className="flex items-center gap-2">
                          {getIcon("check-circle", "w-4 h-4 text-green-600 dark:text-green-400")}
                          <span className="text-xs text-green-700 dark:text-green-400">
                            {review.result}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-1.5">
                        {getIcon("thumb-up", "w-3 h-3 text-gray-400")}
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {review.helpfulCount || 0} helpful
                        </span>
                      </div>
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                      >
                        {selectedReview === review.id ? 'Show Less' : 'Read More'}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {selectedReview === review.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {review.fullQuote || review.quote}
                        </p>
                        <Link
                          href={review.link || "/case-studies"}
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all group"
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
          </div>
        )}

        {/* ==================== REVIEWS GRID ==================== */}
        {filteredReviews.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {filteredReviews.slice(3).map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    {getIcon(review.icon || "users", "w-5 h-5")}
                  </div>

                  <div className="flex-1">
                    {/* Author and Verified Badge */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
                          {review.author}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{review.company}</div>
                      </div>
                      {review.isVerified && (
                        <div className="flex items-center gap-1 text-blue-500">
                          {getIcon("badge-check", "w-4 h-4")}
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>

                    {/* Rating and Date */}
                    <div className="flex items-center justify-between mb-2">
                      {renderStars(review.rating, "w-3 h-3")}
                      <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                        {getIcon("calendar", "w-3 h-3")}
                        {review.date}
                      </span>
                    </div>

                    {/* Quote Preview */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3 leading-relaxed">
                      "{review.quote}"
                    </p>

                    {/* Result Tag */}
                    {review.result && (
                      <span className="inline-block text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
                        {review.result}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== VERIFIED PURCHASE BADGE ==================== */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            {getIcon("badge-check", "w-4 h-4 text-blue-500")}
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {config?.verifiedText || "All reviews are from verified customers"}
            </span>
          </div>
        </div>

        {/* ==================== VIDEO TESTIMONIALS ==================== */}
        {config?.showVideo && config?.videoTestimonials?.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("play", "w-6 h-6 text-blue-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.videoTitle || "Video Testimonials"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoTestimonials.map((video, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <div
                    className="w-full h-56 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                      {getIcon("play", "w-5 h-5 text-blue-600 ml-0.5")}
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="text-white text-sm font-semibold">{video.title}</div>
                    <div className="text-white/70 text-xs">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== LEAVE REVIEW CTA ==================== */}
        {config?.showLeaveReview && (
          <div className="text-center mb-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("chat", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.leaveReviewText || "Have you used our platform? Share your experience"}
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

        {/* ==================== TRUST SIGNALS ==================== */}
        {config?.trustSignals && config.trustSignals.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustSignals.map((signal, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="mb-1">
                    {getIcon(signal.icon, "w-8 h-8 text-gray-500 dark:text-gray-400")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{signal.name}</span>
                </div>
              ))}
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

export default CustomerReviewsSection3;