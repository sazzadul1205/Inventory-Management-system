// frontend/Blog/BestPracticesSection/BestPracticesSection1.jsx

/**
 * Best Practices Section - Proven Strategies Knowledge Hub
 * 
 * Unique design elements:
 * - Featured best practice spotlight with impact metrics
 * - Expandable insights with implementation steps
 * - Benefit tags for quick value scanning
 * - Impact value badges showing expected outcomes
 * - Category filter chips with icons
 * - Save/bookmark functionality for practices
 * - Downloadable resources toolkit banner
 * - Implementation steps in expandable sections
 * - Author attribution with avatars
 * - Read time and view count metrics
 * - Search across titles, descriptions, benefits, and tags
 * - Animated gradient background orbs
 * - Newsletter subscription for weekly practices
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSparkles,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardList,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineX,
  HiOutlineMail,
} from 'react-icons/hi';

const BestPracticesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPractices, setSavedPractices] = useState([]);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedPractice, setExpandedPractice] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const practices = useMemo(() => config?.practices || [], [config?.practices]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Practices', icon: 'sparkles' },
    { id: 'inventory', label: 'Inventory', icon: 'cube' },
    { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
    { id: 'transportation', label: 'Transportation', icon: 'truck' },
    { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
    { id: 'technology', label: 'Technology', icon: 'cog' }
  ], [config?.categories]);

  const featuredPractice = useMemo(() => config?.featuredPractice || practices[0], [config?.featuredPractice, practices]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      lightbulb: HiOutlineLightBulb,
      chart: HiOutlineChartBar,
      truck: HiOutlineTruck,
      cube: HiOutlineCube,
      shield: HiOutlineShieldCheck,
      clock: HiOutlineClock,
      users: HiOutlineUsers,
      globe: HiOutlineGlobe,
      trending: HiOutlineTrendingUp,
      check: HiOutlineCheckCircle,
      xcircle: HiOutlineXCircle,
      star: HiOutlineStar,
      eye: HiOutlineEye,
      calendar: HiOutlineCalendar,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      download: HiOutlineDownload,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      sparkles: HiOutlineSparkles,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      clipboard: HiOutlineClipboardList,
      scale: HiOutlineScale,
      dollar: HiOutlineCurrencyDollar,
      refresh: HiOutlineRefresh,
      cog: HiOutlineCog,
      close: HiOutlineX,
      mail: HiOutlineMail,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineLightBulb className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to relative time string
   */
  const formatRelativeDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management' },
      'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations' },
      'transportation': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'truck', label: 'Transportation' },
      'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment' },
      'sustainability': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Sustainability' },
      'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation' },
      'risk': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Risk Management' },
      'people': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'People & Culture' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'lightbulb', label: 'Best Practice' };
  }, []);

  /**
   * Toggle save/bookmark status for a practice
   */
  const handleSavePractice = useCallback((practiceId, e) => {
    if (e) e.stopPropagation();
    setSavedPractices(prev =>
      prev.includes(practiceId)
        ? prev.filter(id => id !== practiceId)
        : [...prev, practiceId]
    );
  }, []);

  /**
   * Toggle expanded state for a practice
   */
  const toggleExpanded = useCallback((practiceId) => {
    setExpandedPractice(prev => prev === practiceId ? null : practiceId);
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  /**
   * Handles newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      e.target.reset();
    }
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredPractices = useMemo(() => {
    let filtered = [...practices];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(practice =>
        practice.title?.toLowerCase().includes(query) ||
        practice.description?.toLowerCase().includes(query) ||
        practice.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        practice.benefits?.some(benefit => benefit.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(practice => practice.category === selectedCategory);
    }

    return filtered;
  }, [practices, searchQuery, selectedCategory]);

  // Filter out featured practice from grid to avoid duplication
  const regularPractices = featuredPractice
    ? filteredPractices.filter(p => p.id !== featuredPractice.id)
    : filteredPractices;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Best Practices - Proven Strategies Knowledge Hub"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-emerald-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-emerald-100 dark:border-gray-700">
            {getIcon("lightbulb", "w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2")}
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {config?.badge || "Industry Best Practices"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Proven"}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Best Practices"}
            </span>{' '}
            {config?.title?.suffix || "for Supply Chain Excellence"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Discover proven strategies and expert-recommended approaches to optimize your supply chain operations, reduce costs, and improve efficiency."}
          </p>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon("search", "w-5 h-5 text-gray-400")}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={config?.searchPlaceholder || "Search best practices by topic, benefit, or keyword..."}
            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search best practices"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              {getIcon("close", "w-5 h-5")}
            </button>
          )}
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label} practices`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED PRACTICE ==================== */}
        {featuredPractice && !hasActiveFilters && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        Featured Best Practice
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("clock", "w-4 h-4")}
                        <span>{featuredPractice.readTime || '10 min read'}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPractice.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredPractice.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredPractice.author?.avatar}
                          alt={featuredPractice.author?.name}
                          className="w-8 h-8 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {featuredPractice.author?.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatRelativeDate(featuredPractice.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("eye", "w-4 h-4")}
                        <span>{featuredPractice.views || '2.5k'} views</span>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    {featuredPractice.impact && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {featuredPractice.impact.map((stat, idx) => (
                          <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredPractice.link}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Read Full Practice
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={(e) => handleSavePractice(featuredPractice.id, e)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPractices.includes(featuredPractice.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600'
                          }`}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                        {savedPractices.includes(featuredPractice.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                    <img
                      src={featuredPractice.image}
                      alt={featuredPractice.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PRACTICES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPractices.map((practice) => {
            const categoryConfig = getCategoryConfig(practice.category);
            const isExpanded = expandedPractice === practice.id;
            const isSaved = savedPractices.includes(practice.id);

            return (
              <div
                key={practice.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Header with Icon and Save Button */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-xl ${categoryConfig.color.replace('text', 'bg').replace('dark:text', 'dark:bg')} bg-opacity-20`}>
                      {getIcon(categoryConfig.icon, "w-6 h-6")}
                    </div>
                    <button
                      onClick={(e) => handleSavePractice(practice.id, e)}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                      aria-label={isSaved ? "Remove from saved" : "Save practice"}
                    >
                      {getIcon("bookmark", `w-5 h-5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`)}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {practice.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {practice.description}
                  </p>

                  {/* Key Benefits Preview */}
                  {practice.benefits && practice.benefits.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {practice.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                        {practice.benefits.length > 2 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            +{practice.benefits.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Expandable Content */}
                  {practice.details && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(practice.id)}
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? "Show less" : "Read key insights"}
                      >
                        {isExpanded ? 'Show less' : 'Read key insights'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-3 animate-fadeIn">
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {practice.details}
                          </p>
                          {practice.implementation && (
                            <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Implementation Steps:</p>
                              <ul className="space-y-1">
                                {practice.implementation.slice(0, 3).map((step, idx) => (
                                  <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                                    {getIcon("check", "w-3 h-3 text-emerald-500 mt-0.5 shrink-0")}
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {practice.tags && practice.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {practice.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img
                        src={practice.author?.avatar}
                        alt={practice.author?.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {practice.author?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {practice.impactValue && (
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          {practice.impactValue}
                        </span>
                      )}
                      <Link
                        href={practice.link}
                        className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularPractices.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("lightbulb", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== DOWNLOADABLE RESOURCES BANNER ==================== */}
        {config?.showResources && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  {getIcon("download", "w-6 h-6 text-emerald-600 dark:text-emerald-400")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Download Best Practices Toolkit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get templates, checklists, and implementation guides</p>
                </div>
              </div>
              <Link
                href={config?.resourcesLink || "/resources/best-practices"}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Download Free Toolkit
                {getIcon("download", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {config?.newsletter?.title || "Get Weekly Best Practices"}
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Subscribe to receive curated best practices, expert insights, and implementation guides delivered to your inbox."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl placeholder-gray-500 border border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for best practices newsletter"
                required
              />
              <button
                type="submit"
                className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-sm text-emerald-100 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            <p className="text-xs text-emerald-100 mt-4">
              {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
            </p>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BestPracticesSection1;