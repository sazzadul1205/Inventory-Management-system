// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection1.jsx

/**
 * Ratings & Awards Section Component
 * A comprehensive ratings and awards showcase featuring:
 * - Weighted average rating with star distribution bars
 * - Platform filters (G2, Capterra, Trustpilot, Google, Software Advice)
 * - Individual platform rating cards with hover effects
 * - Awards and recognition showcase
 * - Key metrics dashboard with animated counters
 * - Responsive grid layouts
 * - Half-star rating support
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
  HiArrowRight,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineGlobeAlt,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const RatingAndAwardsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [hoveredRating, setHoveredRating] = useState(null);
  const [activePlatform, setActivePlatform] = useState('all');

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const platforms = useMemo(() => config?.platforms || [], [config]);
  const awards = useMemo(() => config?.awards || [], [config]);
  const ratings = useMemo(() => config?.ratings || [], [config]);
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
      'arrow-right': HiArrowRight,
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
      'globe': HiOutlineGlobeAlt,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Render star rating component with half-star support
   * @param {number} rating - Rating value (1-5)
   * @param {string} size - Size class for stars
   * @returns {JSX.Element} Star rating component
   */
  const renderStars = useCallback((rating, size = "w-5 h-5") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500`)}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative">
                <span>{getIcon("star", `${size} text-gray-300 dark:text-gray-600`)}</span>
                <span className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                  {getIcon("star", `${size} text-yellow-500 fill-yellow-500`)}
                </span>
              </div>
            );
          }
          return <span key={i}>{getIcon("star", `${size} text-gray-300 dark:text-gray-600`)}</span>;
        })}
      </div>
    );
  }, [getIcon]);

  /**
   * Get platform icon and display name
   * @param {string} platformId - Platform identifier
   * @returns {Object} Icon component and display name
   */
  const getPlatformInfo = useCallback((platformId) => {
    const info = {
      g2: { icon: 'chart', name: 'G2' },
      capterra: { icon: 'database', name: 'Capterra' },
      trustpilot: { icon: 'star', name: 'Trustpilot' },
      google: { icon: 'google', name: 'Google' },
      softwareadvice: { icon: 'sparkles', name: 'Software Advice' },
    };
    return info[platformId] || { icon: 'star', name: platformId };
  }, []);

  /**
   * Get platform badge color classes
   * @param {string} platformId - Platform identifier
   * @returns {string} CSS class string
   */
  const getPlatformColor = useCallback((platformId) => {
    const colors = {
      g2: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      capterra: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      trustpilot: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      google: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      softwareadvice: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[platformId] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
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

  // ==================== CALCULATIONS ====================
  const filteredRatings = useMemo(() => {
    return ratings.filter(rating => {
      return activePlatform === 'all' || rating.platform === activePlatform;
    });
  }, [ratings, activePlatform]);

  const totalReviews = useMemo(() => {
    return ratings.reduce((sum, r) => sum + r.reviewCount, 0);
  }, [ratings]);

  const weightedAvg = useMemo(() => {
    const total = ratings.reduce((sum, r) => sum + (r.rating * r.reviewCount), 0);
    return total / totalReviews;
  }, [ratings, totalReviews]);

  // Calculate star distribution percentages
  const starDistribution = useMemo(() => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    ratings.forEach(rating => {
      if (rating.breakdown) {
        rating.breakdown.forEach(b => {
          distribution[b.star] = (distribution[b.star] || 0) + b.count;
        });
      }
    });

    return [5, 4, 3, 2, 1].map(star => ({
      star,
      count: distribution[star],
      percentage: totalReviews > 0 ? (distribution[star] / totalReviews) * 100 : 0,
    }));
  }, [ratings, totalReviews]);

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
      aria-label="Ratings & Awards"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-100/20 dark:bg-amber-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-yellow-100 dark:bg-yellow-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-yellow-200 dark:border-yellow-800'}`}
            aria-label="Ratings badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-yellow-700 dark:text-yellow-300'}`}>
              {config?.badge?.text || "Ratings & Awards"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Recognized'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-yellow-600 to-amber-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Excellence'}
            </span>{' '}
            {config?.title?.suffix || 'Across Platforms'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See why customers and industry experts consistently rate us as a top solution in our category."}
          </p>
        </div>

        {/* ==================== MAIN RATING CARD ==================== */}
        <div className="bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-6 md:p-8 mb-12 shadow-xl border border-yellow-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Average Rating */}
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                {weightedAvg.toFixed(1)}
              </div>
              <div className="flex justify-center lg:justify-start mb-2">
                {renderStars(weightedAvg, "w-6 h-6")}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Based on {totalReviews.toLocaleString()} reviews
              </div>
            </div>

            {/* Right Column - Star Distribution */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {starDistribution.map(({ star, percentage }) => (
                  <div key={star} className="flex items-center gap-3">
                    <div className="w-12 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {star} {getIcon("star", "w-3 h-3 inline")}
                    </div>
                    <div className="flex-1 h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-sm text-gray-500 dark:text-gray-400">
                      {Math.round(percentage)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PLATFORM FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActivePlatform('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activePlatform === 'all'
              ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all platforms"
          >
            All Platforms
          </button>
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activePlatform === platform.id
                ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Filter by ${platform.name}`}
            >
              {getIcon(getPlatformInfo(platform.id).icon, "w-4 h-4")}
              {platform.name}
            </button>
          ))}
        </div>

        {/* ==================== RATINGS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRatings.map((rating, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredRating(index)}
              onMouseLeave={() => setHoveredRating(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-yellow-600 dark:text-yellow-400">
                    {getIcon(getPlatformInfo(rating.platform).icon, "w-6 h-6")}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${getPlatformColor(rating.platform)}`}>
                    {getPlatformInfo(rating.platform).name}
                  </span>
                </div>
                {rating.badge && (
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                    {rating.badge}
                  </span>
                )}
              </div>

              {/* Rating Stars */}
              <div className="mb-3">
                {renderStars(rating.rating, "w-5 h-5")}
              </div>

              {/* Rating Value */}
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {rating.rating.toFixed(1)}
              </div>

              {/* Review Count */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {rating.reviewCount.toLocaleString()} reviews
              </div>

              {/* Snippet */}
              {rating.snippet && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2">
                  "{rating.snippet}"
                </p>
              )}

              {/* Hover Link */}
              {hoveredRating === index && (
                <Link
                  href={rating.link || "#"}
                  className="mt-3 inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:gap-2 transition-all group"
                  aria-label={`Read reviews on ${getPlatformInfo(rating.platform).name}`}
                >
                  Read reviews on {getPlatformInfo(rating.platform).name}
                  {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* ==================== AWARDS SECTION ==================== */}
        {awards.length > 0 && (
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
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.presentedBy}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{award.year}</p>
                  {award.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">{award.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-yellow-600 dark:text-yellow-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
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
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-yellow-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                {getIcon("star", "w-6 h-6 text-yellow-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "See why our customers rate us 4.9 stars"}
              </span>
              <Link
                href={config?.ctaLink || "/reviews"}
                className="px-6 py-3 bg-linear-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Read All Reviews"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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

export default RatingAndAwardsSection1;