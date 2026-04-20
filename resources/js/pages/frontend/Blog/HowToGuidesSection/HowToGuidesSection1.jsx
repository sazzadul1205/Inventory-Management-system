// frontend/Blog/HowToGuidesSection/HowToGuidesSection1.jsx

/**
 * How-to Guides Section - Step-by-Step Learning Hub
 * 
 * Unique design elements:
 * - Featured guide spotlight with large hero layout
 * - Expandable step preview with step numbers
 * - Difficulty badges (Beginner/Intermediate/Advanced)
 * - Category filter chips
 * - Save/bookmark functionality for guides
 * - Resource hub banner with video and template links
 * - Step-by-step tutorial previews
 * - Author attribution with avatars
 * - Read time and view count metrics
 * - Search across titles, descriptions, and tags
 * - Video tutorial indicator badges
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlinePlay,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineBookmark,
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineTemplate,
  HiOutlineVideoCamera,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineCode,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineX,
} from 'react-icons/hi';

const HowToGuidesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedGuides, setSavedGuides] = useState([]);
  const [expandedGuide, setExpandedGuide] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const resourceHub = config?.resourceHub || null;
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Guides' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'warehouse', label: 'Warehouse' },
    { id: 'fulfillment', label: 'Fulfillment' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'api', label: 'API & Integration' }
  ], [config?.categories]);

  const guides = useMemo(() => config?.guides || [], [config?.guides]);
  const featuredGuide = useMemo(() => config?.featuredGuide || guides[0], [config?.featuredGuide, guides]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      academic: HiOutlineAcademicCap,
      book: HiOutlineBookOpen,
      clock: HiOutlineClock,
      play: HiOutlinePlay,
      arrowRight: HiArrowRight,
      star: HiOutlineStar,
      search: HiOutlineSearch,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      bookmark: HiOutlineBookmark,
      eye: HiOutlineEye,
      calendar: HiOutlineCalendar,
      template: HiOutlineTemplate,
      video: HiOutlineVideoCamera,
      cog: HiOutlineCog,
      chart: HiOutlineChartBar,
      code: HiOutlineCode,
      shield: HiOutlineShieldCheck,
      check: HiOutlineCheckCircle,
      close: HiOutlineX,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineBookOpen className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to relative time string
   */
  const formatRelativeDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffWeeks < 4) return `${diffWeeks}w ago`;
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    return `${diffYears}y ago`;
  }, []);

  /**
   * Returns difficulty badge configuration
   */
  const getDifficultyConfig = useCallback((level) => {
    const configs = {
      beginner: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Beginner', icon: 'star' },
      intermediate: { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', label: 'Intermediate', icon: 'star' },
      advanced: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Advanced', icon: 'star' }
    };
    return configs[level] || configs.beginner;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'getting-started': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'rocket', label: 'Getting Started' },
      'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cog', label: 'Warehouse' },
      'fulfillment': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'check', label: 'Fulfillment' },
      'analytics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Analytics' },
      'api': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'code', label: 'API & Integration' },
      'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'book', label: 'Guide' };
  }, []);

  /**
   * Toggle save/bookmark status for a guide
   */
  const handleSaveGuide = useCallback((guideId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedGuides(prev =>
      prev.includes(guideId)
        ? prev.filter(id => id !== guideId)
        : [...prev, guideId]
    );
  }, []);

  /**
   * Toggle expanded step preview
   */
  const toggleExpanded = useCallback((guideId) => {
    setExpandedGuide(prev => prev === guideId ? null : guideId);
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredGuides = useMemo(() => {
    let filtered = [...guides];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(guide =>
        guide.title?.toLowerCase().includes(query) ||
        guide.description?.toLowerCase().includes(query) ||
        guide.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(guide => guide.category === selectedCategory);
    }

    return filtered;
  }, [guides, searchQuery, selectedCategory]);

  // Filter out featured guide from grid to avoid duplication
  const regularGuides = featuredGuide
    ? filteredGuides.filter(g => g.id !== featuredGuide.id)
    : filteredGuides;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="How-to Guides - Step-by-Step Learning Hub"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon("academic", "w-4 h-4 text-blue-600 dark:text-blue-400 mr-2")}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Step-by-Step Tutorials"}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "How-to"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Guides"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Master supply chain operations with our comprehensive step-by-step guides. From setup to advanced optimization, we've got you covered."}
          </p>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon("search", "w-5 h-5 text-gray-400")}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={config?.searchPlaceholder || "Search guides by title, topic, or keyword..."}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search guides"
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label} guides`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED GUIDE ==================== */}
        {featuredGuide && !hasActiveFilters && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Guide
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("clock", "w-4 h-4")}
                        <span>{featuredGuide.readTime || '10 min read'}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredGuide.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredGuide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredGuide.author?.avatar}
                          alt={featuredGuide.author?.name}
                          className="w-8 h-8 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {featuredGuide.author?.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatRelativeDate(featuredGuide.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("eye", "w-4 h-4")}
                        <span>{featuredGuide.views || '1.2k'} views</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredGuide.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Start Guide
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={(e) => handleSaveGuide(featuredGuide.id, e)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedGuides.includes(featuredGuide.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                        {savedGuides.includes(featuredGuide.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                    <img
                      src={featuredGuide.image}
                      alt={featuredGuide.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    {featuredGuide.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                          {getIcon("play", "w-8 h-8 text-blue-600 ml-1")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== GUIDES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularGuides.map((guide) => {
            const difficultyConfig = getDifficultyConfig(guide.difficulty);
            const categoryConfig = getCategoryConfig(guide.category);
            const isExpanded = expandedGuide === guide.id;
            const isSaved = savedGuides.includes(guide.id);

            return (
              <div
                key={guide.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Guide Image */}
                <Link href={guide.link} className="block overflow-hidden relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyConfig.color}`}>
                      {difficultyConfig.label}
                    </span>
                  </div>
                  {guide.videoUrl && (
                    <div className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                      {getIcon("play", "w-4 h-4 text-white")}
                    </div>
                  )}
                </Link>

                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{guide.readTime || '8 min read'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("star", "w-4 h-4")}
                      <span>{guide.difficulty === 'beginner' ? 'Easy' : guide.difficulty === 'intermediate' ? 'Medium' : 'Advanced'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link href={guide.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {guide.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {guide.description}
                  </p>

                  {/* Steps Preview (Expandable) */}
                  {guide.steps && guide.steps.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(guide.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? "Hide steps" : `Show ${guide.steps.length} steps`}
                      >
                        {isExpanded ? 'Hide steps' : `Show ${guide.steps.length} steps`}
                        {isExpanded ? getIcon("chevronUp", "w-4 h-4") : getIcon("chevronDown", "w-4 h-4")}
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2">
                          {guide.steps.slice(0, 4).map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">{step}</span>
                            </li>
                          ))}
                          {guide.steps.length > 4 && (
                            <li className="text-sm text-gray-500 dark:text-gray-400 pl-7">
                              + {guide.steps.length - 4} more steps
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {guide.tags && guide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer with Author and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img
                        src={guide.author?.avatar}
                        alt={guide.author?.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {guide.author?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleSaveGuide(guide.id, e)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                        aria-label={isSaved ? "Remove from saved" : "Save guide"}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                      </button>
                      <Link
                        href={guide.link}
                        className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularGuides.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("book", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No guides found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== VIEW ALL BUTTON ==================== */}
        {config?.showViewAll && !hasActiveFilters && regularGuides.length < guides.length && (
          <div className="text-center">
            <Link
              href={config?.viewAllLink || "/guides"}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View All Guides
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* ==================== RESOURCE HUB BANNER ==================== */}
        {config?.showResourceHub && resourceHub && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("video", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Resource Hub</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {resourceHub.title || "Need more help?"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {resourceHub.description || "Explore our comprehensive library of video tutorials, templates, and downloadable resources."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={resourceHub.videoLink || "/videos"}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    {getIcon("play", "w-4 h-4")}
                    Watch Tutorials
                  </Link>
                  <Link
                    href={resourceHub.templateLink || "/templates"}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    {getIcon("template", "w-4 h-4")}
                    Download Templates
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {resourceHub.stats?.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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

export default HowToGuidesSection1;