// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection3.jsx

/**
 * Ratings & Awards Showcase Component
 * A comprehensive ratings and awards showcase featuring:
 * - Tabbed navigation (Overview, Awards, Certifications)
 * - Weighted average rating with star distribution bars
 * - Animated statistics dashboard
 * - Platform ratings grid with review links
 * - Featured awards showcase
 * - All awards grid with year badges
 * - Award timeline visualization
 * - Certifications and compliance badges
 * - Trust and security badges with hover tooltips
 * - Half-star rating support
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineChartPie,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineClock,
  HiOutlineEye,
} from 'react-icons/hi';
import { HiOutlineShieldCheck, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const RatingAndAwardsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const ratings = useMemo(() => config?.ratings || [], [config]);
  const awards = useMemo(() => config?.awards || [], [config]);
  const certifications = useMemo(() => config?.certifications || [], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);
  const badges = useMemo(() => config?.badges || [], [config]);

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
      'badge-check': HiOutlineBadgeCheck,
      'chart-pie': HiOutlineChartPie,
      'sparkles': HiOutlineSparkles,
      'shield': HiOutlineShieldCheck,
      'trophy': HiOutlineTrophy,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'trending': HiOutlineTrendingUp,
      'globe': HiOutlineGlobeAlt,
      'clock': HiOutlineClock,
      'eye': HiOutlineEye,
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
  const renderStars = useCallback((rating, size = "w-6 h-6") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-1">
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
   * Get platform icon emoji (fallback)
   * @param {string} platform - Platform identifier
   * @returns {string} Icon emoji
   */
  const getPlatformIcon = useCallback((platform) => {
    const icons = {
      g2: '⭐',
      capterra: '📊',
      trustpilot: '🌐',
      google: '🔍',
      softwareadvice: '💻',
    };
    return icons[platform] || '⭐';
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

  // Featured awards (first 3)
  const featuredAwards = useMemo(() => {
    return awards.filter(a => a.featured).slice(0, 3);
  }, [awards]);

  // Awards for timeline (first 6)
  const timelineAwards = useMemo(() => {
    return awards.slice(0, 6);
  }, [awards]);

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
      aria-label="Ratings & Awards Showcase"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-100 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

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
            {config?.title?.prefix || 'Industry'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-yellow-600 to-amber-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Recognition'}
            </span>{' '}
            {config?.title?.suffix || 'Showcase'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See why customers and industry experts consistently rate us as a top solution in our category."}
          </p>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'overview'
              ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show overview"
          >
            {getIcon("chart-pie", "w-4 h-4")}
            Overview
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'awards'
              ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show awards"
          >
            {getIcon("trophy", "w-4 h-4")}
            Awards
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'certifications'
              ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show certifications"
          >
            {getIcon("badge-check", "w-4 h-4")}
            Certifications
          </button>
        </div>

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Rating Card */}
            <div className="bg-linear-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Average Rating */}
                <div className="text-center lg:text-left text-white">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    {weightedAvg.toFixed(1)}
                  </div>
                  <div className="flex justify-center lg:justify-start mb-3">
                    {renderStars(weightedAvg, "w-7 h-7")}
                  </div>
                  <div className="text-lg mb-1">Exceptional</div>
                  <div className="text-white/80">
                    Based on {totalReviews.toLocaleString()} verified reviews
                  </div>
                </div>

                {/* Right Column - Star Distribution */}
                <div className="space-y-3">
                  {starDistribution.map(({ star, percentage }) => (
                    <div key={star} className="flex items-center gap-3">
                      <div className="w-12 text-sm font-medium text-white">{star} ★</div>
                      <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm text-white/80">{Math.round(percentage)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
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

            {/* Platform Ratings */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-8">
                {getIcon("star", "w-6 h-6 text-yellow-500")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Customer Reviews Across Platforms
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{getPlatformIcon(rating.platform)}</span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {rating.platform.charAt(0).toUpperCase() + rating.platform.slice(1)}
                        </div>
                        {rating.badge && (
                          <span className="text-xs text-green-600 dark:text-green-400">{rating.badge}</span>
                        )}
                      </div>
                    </div>
                    <div className="mb-2">
                      {renderStars(rating.rating, "w-5 h-5")}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {rating.rating.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {rating.reviewCount.toLocaleString()} reviews
                    </div>
                    <Link
                      href={rating.link || "#"}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:gap-2 transition-all group"
                    >
                      Read reviews
                      {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Awards Showcase */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-8">
                {getIcon("trophy", "w-6 h-6 text-yellow-500")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Featured Awards
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredAwards.map((award, index) => (
                  <div
                    key={index}
                    className="relative bg-linear-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl border border-yellow-100 dark:border-gray-700"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200 dark:bg-yellow-900/30 rounded-bl-full opacity-50" />
                    <div className="text-5xl mb-3 relative z-10">{award.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.presentedBy}</p>
                    <p className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-3">{award.year}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-center gap-2 mb-6">
                {getIcon("shield", "w-6 h-6 text-green-600")}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Trust & Security Badges
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="text-center relative cursor-pointer group"
                    onMouseEnter={() => setSelectedBadge(index)}
                    onMouseLeave={() => setSelectedBadge(null)}
                  >
                    <div className="text-4xl mb-2 text-green-600 dark:text-green-400">
                      {getIcon(badge.icon, "w-8 h-8")}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{badge.name}</div>
                    {selectedBadge === index && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-full whitespace-nowrap z-10 shadow-lg animate-fadeIn">
                        {badge.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== AWARDS TAB ==================== */}
        {activeTab === 'awards' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Year Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linear-to-r from-yellow-500 to-amber-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl">
                <div className="flex justify-center mb-3">
                  {getIcon("trophy", "w-12 h-12")}
                </div>
                <div className="text-4xl font-bold mb-2">2024</div>
                <div className="text-lg">2 New Awards</div>
                <div className="text-white/80 mt-2">G2 Leader & Global Supply Chain Excellence</div>
              </div>
              <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl">
                <div className="flex justify-center mb-3">
                  {getIcon("sparkles", "w-12 h-12")}
                </div>
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-lg">5 Major Awards</div>
                <div className="text-white/80 mt-2">Inc. 5000, AI Summit, Best Security & More</div>
              </div>
            </div>

            {/* All Awards Grid */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-8">
                {getIcon("trophy", "w-6 h-6 text-yellow-500")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  All Awards & Recognition
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{award.icon}</div>
                      <span className={`text-xs px-2.5 py-1 rounded-full ${award.year === '2024'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                        {award.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{award.presentedBy}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {award.description}
                    </p>
                    <Link
                      href={award.link || "#"}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mt-3 hover:gap-2 transition-all group"
                    >
                      Learn more
                      {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Award Timeline */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-center gap-2 mb-6">
                {getIcon("clock", "w-6 h-6 text-yellow-500")}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Award Timeline
                </h3>
              </div>
              <div className="relative">
                {/* Vertical Center Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-yellow-500 to-amber-500 rounded-full" />

                <div className="space-y-8">
                  {timelineAwards.map((award, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white dark:border-gray-800 shadow-md z-10" />

                      {/* Spacer for desktop */}
                      <div className="hidden md:block w-1/2" />

                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-700">
                          <div className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-1">{award.year}</div>
                          <div className="font-bold text-gray-900 dark:text-white">{award.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{award.presentedBy}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATIONS TAB ==================== */}
        {activeTab === 'certifications' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-green-600 dark:text-green-400">
                    {getIcon(cert.icon || "shield", "w-12 h-12")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Validated by {cert.validator}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{cert.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* Compliance Statement */}
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 md:p-8 text-center border border-green-100 dark:border-green-800">
              <div className="flex justify-center mb-3">
                {getIcon("shield", "w-12 h-12 text-green-600")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Our platform meets the highest standards for security, privacy, and compliance,
                ensuring your data is always protected.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
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
                {config?.ctaText || "Experience the award-winning platform yourself"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Free Trial"}
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

export default RatingAndAwardsSection3;