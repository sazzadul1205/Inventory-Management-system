// frontend/Testimonials/PartnerTestimonialsSection/PartnerTestimonialsSection3.jsx

/**
 * Partner Testimonials Hub Component
 * A comprehensive partner success showcase featuring:
 * - Tabbed navigation (Partner Testimonials, Partner Spotlights, Success Metrics)
 * - Partner stats dashboard with key metrics and trend indicators
 * - Search functionality across partner names, companies, and quotes
 * - Category filters (Technology, Implementation, Reseller, Strategic)
 * - Sort by featured, revenue, or partnership duration
 * - Save/bookmark functionality for testimonials
 * - Expandable testimonial details with collaboration highlights
 * - Partner spotlights with images and key metrics
 * - Success metrics with growth trends visualization
 * - Revenue badges for top partners
 * - Partner program call-to-action
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
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineChartPie,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdOutlineHandshake } from 'react-icons/md';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const PartnerTestimonialsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('testimonials');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [savedTestimonials, setSavedTestimonials] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const sectionRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const testimonials = useMemo(() => config?.testimonials || [], [config]);
  const partnerSpotlights = useMemo(() => config?.partnerSpotlights || [], [config]);
  const categories = useMemo(() => config?.categories || ['all', 'technology', 'implementation', 'reseller', 'strategic'], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);
  const successMetrics = useMemo(() => config?.successMetrics || [], [config]);
  const growthTrends = useMemo(() => config?.growthTrends || [], [config]);

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
      'trending': HiOutlineTrendingUp,
      'search': HiOutlineSearch,
      'download': HiOutlineDownload,
      'document': HiOutlineDocumentText,
      'presentation': HiOutlinePresentationChartLine,
      'chart-pie': HiOutlineChartPie,
      'dollar': HiOutlineCurrencyDollar,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'sparkles': HiOutlineSparkles,
      'globe': HiOutlineGlobeAlt,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'handshake': MdOutlineHandshake,
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
      technology: { icon: 'chip', name: 'Technology' },
      implementation: { icon: 'sparkles', name: 'Implementation' },
      reseller: { icon: 'handshake', name: 'Reseller' },
      strategic: { icon: 'trending', name: 'Strategic' },
    };
    return info[category] || { icon: 'handshake', name: category };
  }, []);

  /**
   * Get category badge color classes
   * @param {string} category - Category identifier
   * @returns {string} CSS class string
   */
  const getCategoryColor = useCallback((category) => {
    const colors = {
      technology: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      implementation: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      reseller: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      strategic: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  }, []);

  /**
   * Format currency for display
   * @param {number} value - Numeric value
   * @returns {string} Formatted currency string
   */
  const formatCurrency = useCallback((value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
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
    const saved = localStorage.getItem('savedPartnerTestimonials');
    if (saved) {
      setSavedTestimonials(JSON.parse(saved));
    }
  }, []);

  /**
   * Save or unsave a testimonial
   * @param {string|number} id - ID of the testimonial to save/unsave
   */
  const handleSaveTestimonial = useCallback((id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedPartnerTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Toggle expanded view for a testimonial
   * @param {string|number} id - ID of the testimonial to expand/collapse
   */
  const toggleExpand = useCallback((id) => {
    setSelectedPartner(selectedPartner === id ? null : id);
  }, [selectedPartner]);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredTestimonials = useMemo(() => {
    const filtered = testimonials.filter(testimonial => {
      const matchesCategory = activeCategory === 'all' || testimonial.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        testimonial.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.quote?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.partnerType?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'revenue') return (b.annualRevenue || 0) - (a.annualRevenue || 0);
      if (sortBy === 'since') {
        const yearA = parseInt(a.partnerSince) || 0;
        const yearB = parseInt(b.partnerSince) || 0;
        return yearB - yearA;
      }
      return 0;
    });

    return filtered;
  }, [testimonials, activeCategory, searchQuery, sortBy]);

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
      aria-label="Partner Testimonials Hub"
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
            aria-label="Partner testimonials badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Partner Success"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Partner Ecosystem'}
            </span>{' '}
            {config?.title?.suffix || 'in Action'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Discover how our partners are driving success for their clients while growing their own businesses."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
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

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'testimonials'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show partner testimonials"
          >
            {getIcon("quote-left", "w-4 h-4")}
            Partner Testimonials
          </button>
          <button
            onClick={() => setActiveTab('spotlights')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'spotlights'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show partner spotlights"
          >
            {getIcon("presentation", "w-4 h-4")}
            Partner Spotlights
          </button>
          <button
            onClick={() => setActiveTab('success')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${activeTab === 'success'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show success metrics"
          >
            {getIcon("chart-pie", "w-4 h-4")}
            Success Metrics
          </button>
        </div>

        {/* ==================== TESTIMONIALS TAB ==================== */}
        {activeTab === 'testimonials' && (
          <div className="animate-fadeIn">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("search", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search partners by name, company, or testimonial..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  aria-label="Search partner testimonials"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Category Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                  {categories.map((category) => {
                    const { icon, name } = getCategoryInfo(category);
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${activeCategory === category
                          ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        aria-label={`Filter by ${category === 'all' ? 'all partners' : name}`}
                      >
                        {category !== 'all' && getIcon(icon, "w-3 h-3")}
                        {category === 'all' ? 'All' : name}
                      </button>
                    );
                  })}
                </div>

                {/* Sort Select */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Sort testimonials by"
                >
                  <option value="featured">Featured First</option>
                  <option value="revenue">Highest Revenue</option>
                  <option value="since">Partner Since</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredTestimonials.length}</span> partner testimonials
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors">
                {getIcon("download", "w-4 h-4")}
                Export
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border ${testimonial.featured
                    ? 'ring-2 ring-blue-500 border-gray-100 dark:border-gray-700'
                    : 'border-gray-100 dark:border-gray-700'
                    }`}
                >
                  <div className="p-5 md:p-6">
                    {/* Header - Author Info & Save Button */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                          {getIcon(testimonial.icon || "handshake", "w-7 h-7")}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.author}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSaveTestimonial(testimonial.id)}
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={savedTestimonials.includes(testimonial.id) ? "Remove from saved" : "Save testimonial"}
                      >
                        {getIcon("bookmark", `w-5 h-5 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`)}
                      </button>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${getCategoryColor(testimonial.category)}`}>
                        {getIcon(getCategoryInfo(testimonial.category).icon, "w-3 h-3")}
                        {testimonial.partnerType}
                      </span>
                      {testimonial.featured && (
                        <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                          {getIcon("badge-check", "w-3 h-3")}
                          Featured
                        </span>
                      )}
                      {testimonial.annualRevenue && (
                        <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {getIcon("dollar", "w-3 h-3")}
                          {formatCurrency(testimonial.annualRevenue)} revenue
                        </span>
                      )}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      "{testimonial.quote}"
                    </p>

                    {/* Partner Since & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                        {getIcon("calendar", "w-3 h-3")}
                        Partner since {testimonial.partnerSince}
                      </div>
                      {testimonial.rating && renderStars(testimonial.rating, "w-4 h-4")}
                    </div>

                    {/* Results Grid */}
                    {testimonial.results && testimonial.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {testimonial.results.map((result, idx) => (
                          <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-2 text-center">
                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{result.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline flex items-center gap-1"
                      >
                        {selectedPartner === testimonial.id ? 'Show Less' : 'View Full Story'}
                        {getIcon("arrow-right", "w-4 h-4")}
                      </button>
                      <Link href={testimonial.link || "#"} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                        Learn More →
                      </Link>
                    </div>

                    {/* Expanded Content */}
                    {selectedPartner === testimonial.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fadeIn">
                        {/* Full Quote */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {testimonial.fullQuote || testimonial.quote}
                        </p>

                        {/* Collaboration Highlights */}
                        {testimonial.collaboration && testimonial.collaboration.length > 0 && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 border border-blue-100 dark:border-blue-800">
                            <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1">
                              {getIcon("handshake", "w-3 h-3")}
                              Collaboration Highlights
                            </div>
                            <ul className="space-y-1.5">
                              {testimonial.collaboration.map((item, idx) => (
                                <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                                  {getIcon("check-circle", "w-3 h-3 text-green-500 mt-0.5 shrink-0")}
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Case Study Link */}
                        <Link
                          href={testimonial.caseStudyLink || "/case-studies"}
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all group"
                        >
                          {getIcon("document", "w-4 h-4")}
                          Read Case Study
                          {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredTestimonials.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No partner testimonials found</h3>
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
          </div>
        )}

        {/* ==================== PARTNER SPOTLIGHTS TAB ==================== */}
        {activeTab === 'spotlights' && partnerSpotlights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fadeIn">
            {partnerSpotlights.map((spotlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Hero Image Section */}
                <div className="relative h-48">
                  <img
                    src={spotlight.image}
                    alt={spotlight.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="mb-1">
                      {getIcon(spotlight.icon || "building", "w-8 h-8")}
                    </div>
                    <div className="text-xl font-bold">{spotlight.company}</div>
                    <div className="text-sm opacity-90">{spotlight.partnerType}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${getCategoryColor(spotlight.category)}`}>
                      {spotlight.partnerType}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      {getIcon("calendar", "w-3 h-3")}
                      Partner since {spotlight.partnerSince}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {spotlight.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-2 text-center border border-green-100 dark:border-green-800">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">{spotlight.metric1}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{spotlight.metric1Label}</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-2 text-center border border-blue-100 dark:border-blue-800">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{spotlight.metric2}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{spotlight.metric2Label}</div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={spotlight.link || "#"}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all group"
                  >
                    Read Full Spotlight
                    {getIcon("arrow-right", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SUCCESS METRICS TAB ==================== */}
        {activeTab === 'success' && (
          <div className="space-y-8 mb-12 animate-fadeIn">
            {/* Header Banner */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl">
              <div className="flex justify-center mb-3">
                {getIcon("chart", "w-10 h-10 text-white")}
              </div>
              <h3 className="text-2xl font-bold mb-2">Partner Program Impact</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our partners are driving exceptional results for their clients while growing their own businesses
              </p>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* Growth Trends */}
            {growthTrends.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6 flex items-center justify-center gap-2">
                  {getIcon("trending", "w-5 h-5 text-blue-600")}
                  Partner Growth Trends
                </h3>
                <div className="space-y-5">
                  {growthTrends.map((trend, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-600 dark:text-gray-400">{trend.year}</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{trend.growth}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-full h-2.5 transition-all duration-1000"
                          style={{ width: trend.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

        {/* ==================== PARTNER PROGRAM CTA ==================== */}
        {config?.showPartnerProgram && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("handshake", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.partnerCtaText || "Ready to join our partner ecosystem?"}
              </span>
              <Link
                href={config?.partnerCtaLink || "/partners"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.partnerCtaButtonText || "Apply to Become a Partner"}
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

export default PartnerTestimonialsSection3;