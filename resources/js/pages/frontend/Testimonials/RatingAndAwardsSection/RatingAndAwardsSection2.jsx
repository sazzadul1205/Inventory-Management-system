// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection2.jsx

/**
 * Ratings & Awards Gallery Component
 * A comprehensive ratings and awards showcase featuring:
 * - Weighted average rating with star distribution bars
 * - Platform ratings grid (G2, Capterra, Trustpilot, Google, Software Advice)
 * - Award search and filter functionality
 * - Year and category filters for awards
 * - Expandable award details with key highlights
 * - Trust badges and certifications
 * - Animated statistics dashboard
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
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineGlobeAlt,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const RatingAndAwardsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({});
  const [selectedAward, setSelectedAward] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== REFS ====================
  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const awards = useMemo(() => config?.awards || [], [config]);
  const ratings = useMemo(() => config?.ratings || [], [config]);
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
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'trending': HiOutlineTrendingUp,
      'search': HiOutlineSearch,
      'clock': HiOutlineClock,
      'eye': HiOutlineEye,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
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
   * @returns {Object} Icon and display name
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
   * Get category icon and display name
   * @param {string} category - Category identifier
   * @returns {string} Icon emoji
   */
  const getCategoryIcon = useCallback((category) => {
    const icons = {
      technology: '🔌',
      innovation: '💡',
      customer: '👥',
      growth: '📈',
      security: '🔒',
    };
    return icons[category] || '🏆';
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

  // ==================== YEARS LIST ====================
  const years = useMemo(() => {
    const yearSet = new Set(awards.map(a => a.year).filter(Boolean));
    return ['all', ...Array.from(yearSet).sort().reverse()];
  }, [awards]);

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

  // ==================== FILTERING LOGIC ====================
  const filteredAwards = useMemo(() => {
    return awards.filter(award => {
      const matchesYear = activeYear === 'all' || award.year === activeYear;
      const matchesCategory = activeCategory === 'all' || award.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        award.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        award.presentedBy?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesCategory && matchesSearch;
    });
  }, [awards, activeYear, activeCategory, searchQuery]);

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

  /**
   * Toggle award expansion
   * @param {number} index - Award index
   */
  const toggleAward = useCallback((index) => {
    setSelectedAward(selectedAward === index ? null : index);
  }, [selectedAward]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Ratings & Awards Gallery"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-amber-200/20 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-yellow-300/5 dark:bg-yellow-500/5 rounded-full blur-3xl" aria-hidden="true" />

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

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-yellow-600 dark:text-yellow-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 font-mono">
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

        {/* ==================== RATING OVERVIEW CARD ==================== */}
        <div className="bg-linear-to-r from-yellow-500 to-amber-500 rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Average Rating */}
            <div className="text-center lg:text-left text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {weightedAvg.toFixed(1)}
              </div>
              <div className="flex justify-center lg:justify-start mb-2">
                {renderStars(weightedAvg, "w-6 h-6")}
              </div>
              <div className="text-sm text-white/80">
                Based on {totalReviews.toLocaleString()} reviews across all platforms
              </div>
            </div>

            {/* Right Column - Star Distribution */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {starDistribution.map(({ star, percentage }) => (
                  <div key={star} className="flex items-center gap-3">
                    <div className="w-12 text-sm font-medium text-white">
                      {star} ★
                    </div>
                    <div className="flex-1 h-2.5 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-sm text-white/80">
                      {Math.round(percentage)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PLATFORM RATINGS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ratings.map((rating, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700 group"
              onMouseEnter={() => setHoveredRating(index)}
              onMouseLeave={() => setHoveredRating(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-yellow-600 dark:text-yellow-400">
                    {getIcon(getPlatformInfo(rating.platform).icon, "w-6 h-6")}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
              <div className="mb-2">
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
                <p className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2 mb-3">
                  "{rating.snippet}"
                </p>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                  {getIcon("clock", "w-3 h-3")}
                  <span>Updated {rating.lastUpdated}</span>
                </div>
                {hoveredRating === index && (
                  <Link
                    href={rating.link || "#"}
                    className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:underline flex items-center gap-1 transition-all"
                  >
                    Read Reviews
                    {getIcon("arrow-right", "w-3 h-3")}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== AWARDS SECTION ==================== */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            {getIcon("trophy", "w-6 h-6 text-yellow-500")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.awardsTitle || "Awards & Recognition"}
            </h3>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {getIcon("search", "w-5 h-5")}
              </div>
              <input
                type="text"
                placeholder="Search awards by title or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                aria-label="Search awards"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                aria-label="Filter by year"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                ))}
              </select>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                <option value="technology">Technology</option>
                <option value="innovation">Innovation</option>
                <option value="customer">Customer Experience</option>
                <option value="growth">Growth</option>
                <option value="security">Security</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Found {filteredAwards.length} awards
          </div>
        </div>

        {/* ==================== AWARDS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => toggleAward(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleAward(index)}
            >
              <div className="p-5 md:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{award.icon}</div>
                  <span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                    {award.year}
                  </span>
                </div>

                {/* Title & Presenter */}
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.presentedBy}</p>

                {/* Category Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center gap-1">
                    <span>{getCategoryIcon(award.category)}</span>
                    {award.category.charAt(0).toUpperCase() + award.category.slice(1)}
                  </span>
                  {award.isNew && (
                    <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {award.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                    {getIcon("eye", "w-3 h-3")}
                    <span>Featured in {award.featuredIn}</span>
                  </div>
                  <button className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold group-hover:underline">
                    {selectedAward === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>

                {/* Expanded Content */}
                {selectedAward === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                    {/* Full Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {award.fullDescription || award.description}
                    </p>

                    {/* Key Highlights */}
                    {award.highlights && award.highlights.length > 0 && (
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3 border border-yellow-100 dark:border-yellow-800">
                        <div className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 mb-2">
                          Key Highlights:
                        </div>
                        <ul className="space-y-1.5">
                          {award.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                              {getIcon("check-circle", "w-3 h-3 text-green-500 mt-0.5 shrink-0")}
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* View Details Link */}
                    <Link
                      href={award.link || "#"}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:gap-2 transition-all group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Award Details
                      {getIcon("arrow-right", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveYear('all');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== TRUST BADGES SECTION ==================== */}
        {config?.showBadges && badges.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              {getIcon("shield", "w-6 h-6 text-green-600")}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Trust Badges & Certifications
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {badges.map((badge, index) => (
                <div key={index} className="text-center group transition-all duration-300 hover:scale-105">
                  <div className="text-3xl mb-2 text-green-600 dark:text-green-400">
                    {getIcon(badge.icon, "w-8 h-8")}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{badge.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{badge.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

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
                {config?.ctaText || "Join our satisfied customers"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
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

export default RatingAndAwardsSection2;