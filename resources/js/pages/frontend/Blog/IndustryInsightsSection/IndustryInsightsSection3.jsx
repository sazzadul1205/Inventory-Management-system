// frontend/Blog/IndustryInsightsSection/IndustryInsightsSection3.jsx

/**
 * Industry Insights Section - Advanced Discovery Hub
 * 
 * Unique design elements:
 * - Multi-filter system (category, author, date range)
 * - View mode toggle (grid, list)
 * - Infinite scroll / load more pagination
 * - Active filter indicators with count
 * - Popular tags quick-filter chips
 * - Featured podcast/webinar content block
 * - Animated loading states
 * - Newsletter integration
 * - Trending indicator badges
 * - Bookmark/save functionality
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// React Icons - Heroicons for consistent, accessible iconography
import {
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineEye,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlinePlay,
  HiOutlineVolumeUp,
  HiOutlineMicrophone,
  HiOutlineTemplate,
  HiOutlineViewList,
  HiOutlineChevronDown,
} from 'react-icons/hi';

const IndustryInsightsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const loadMoreRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('latest');
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
  const [displayCount, setDisplayCount] = useState(config?.initialDisplayCount || 9);

  // ==================== MEMOIZED DATA ====================
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const popularTags = useMemo(() => config?.popularTags || [], [config?.popularTags]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      document: HiOutlineDocumentText,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      chart: HiOutlineChartBar,
      eye: HiOutlineEye,
      arrowRight: HiArrowRight,
      bookmark: HiOutlineBookmark,
      fire: HiOutlineFire,
      sparkles: HiOutlineSparkles,
      mail: HiOutlineMail,
      search: HiOutlineSearch,
      filter: HiOutlineFilter,
      close: HiOutlineX,
      play: HiOutlinePlay,
      volumeUp: HiOutlineVolumeUp,
      microphone: HiOutlineMicrophone,
      template: HiOutlineTemplate,
      viewList: HiOutlineViewList,
      chevronDown: HiOutlineChevronDown,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineDocumentText className={className} />;
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
   * Calculates estimated reading time from content
   */
  const getReadingTime = useCallback((content) => {
    if (!content) return '4 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }, []);

  /**
   * Toggle save/bookmark status
   */
  const handleSaveArticle = useCallback((articleId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedArticles(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
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

  /**
   * Clears all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedAuthor(null);
    setSelectedDateRange(null);
    setActiveFilter('latest');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title?.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        article.category?.toLowerCase().includes(query) ||
        article.author?.name?.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Apply author filter
    if (selectedAuthor) {
      filtered = filtered.filter(article => article.author?.name === selectedAuthor);
    }

    // Apply date range filter
    if (selectedDateRange) {
      const now = new Date();
      filtered = filtered.filter(article => {
        const publishDate = new Date(article.publishDate);
        const diffDays = Math.ceil((now - publishDate) / (1000 * 60 * 60 * 24));
        switch (selectedDateRange) {
          case 'week': return diffDays <= 7;
          case 'month': return diffDays <= 30;
          case 'quarter': return diffDays <= 90;
          case 'year': return diffDays <= 365;
          default: return true;
        }
      });
    }

    // Apply sort filter
    switch (activeFilter) {
      case 'trending':
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'popular':
        filtered.sort((a, b) => (b.comments || 0) - (a.comments || 0));
        break;
      case 'latest':
      default:
        filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        break;
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedAuthor, selectedDateRange, activeFilter]);

  // ==================== UNIQUE VALUES FOR FILTERS ====================
  const uniqueCategories = useMemo(() => {
    const categories = new Set(articles.map(a => a.category).filter(Boolean));
    return Array.from(categories);
  }, [articles]);

  const uniqueAuthors = useMemo(() => {
    const authors = new Set(articles.map(a => a.author?.name).filter(Boolean));
    return Array.from(authors);
  }, [articles]);

  // ==================== ACTIVE FILTERS COUNT ====================
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchQuery) count++;
    if (selectedCategory) count++;
    if (selectedAuthor) count++;
    if (selectedDateRange) count++;
    if (activeFilter !== 'latest') count++;
    return count;
  }, [searchQuery, selectedCategory, selectedAuthor, selectedDateRange, activeFilter]);

  // ==================== DISPLAYED ARTICLES ====================
  const displayedArticles = filteredArticles.slice(0, displayCount);
  const hasMore = displayCount < filteredArticles.length;

  // ==================== INFINITE SCROLL OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          setIsLoading(true);
          setTimeout(() => {
            setDisplayCount(prev => Math.min(prev + (config?.loadMoreCount || 6), filteredArticles.length));
            setIsLoading(false);
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, hasMore, config?.loadMoreCount, filteredArticles.length]);

  // ==================== RESET DISPLAY COUNT ON FILTER CHANGE ====================
  useEffect(() => {
    setDisplayCount(config?.initialDisplayCount || 9);
  }, [searchQuery, selectedCategory, selectedAuthor, selectedDateRange, activeFilter, config?.initialDisplayCount]);

  // ==================== HANDLE TOPIC CLICK ====================
  const handleTopicClick = useCallback((topic) => {
    setSearchQuery(topic);
    setShowFilters(false);
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Insights - Advanced Discovery Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
            {getIcon("sparkles", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Knowledge Hub"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Explore"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Industry Insights"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Deep dives, expert analysis, and actionable insights to help you navigate the future of supply chain and logistics."}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Search articles, topics, authors..."}
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Clear search"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
            )}
          </div>

          {/* Popular Tags */}
          {config?.showPopularTags && popularTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {popularTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTopicClick(tag)}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ==================== FILTER BAR ==================== */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Sort Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('latest')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'latest'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Latest
              </button>
              <button
                onClick={() => setActiveFilter('trending')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${activeFilter === 'trending'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon("fire", "w-4 h-4")}
                Trending
              </button>
              <button
                onClick={() => setActiveFilter('popular')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${activeFilter === 'popular'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon("chart", "w-4 h-4")}
                Most Popular
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="Grid view"
                >
                  {getIcon("template", "w-4 h-4")}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="List view"
                >
                  {getIcon("viewList", "w-4 h-4")}
                </button>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label="Toggle filters"
              >
                {getIcon("filter", "w-4 h-4")}
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Expanded Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">All Categories</option>
                    {uniqueCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Author Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Author
                  </label>
                  <select
                    value={selectedAuthor || ''}
                    onChange={(e) => setSelectedAuthor(e.target.value || null)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">All Authors</option>
                    {uniqueAuthors.map(author => (
                      <option key={author} value={author}>{author}</option>
                    ))}
                  </select>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date Range
                  </label>
                  <select
                    value={selectedDateRange || ''}
                    onChange={(e) => setSelectedDateRange(e.target.value || null)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">All Time</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="quarter">Last 90 Days</option>
                    <option value="year">Last Year</option>
                  </select>
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{displayedArticles.length}</span> of{' '}
            <span className="font-semibold text-gray-900 dark:text-white">{filteredArticles.length}</span> articles
          </p>
        </div>

        {/* ==================== ARTICLES GRID/LIST ==================== */}
        <div className={`grid gap-8 mb-12 ${viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
          }`}>
          {displayedArticles.map((article) => {
            const isSaved = savedArticles.includes(article.id);
            return (
              <article
                key={article.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Article Image */}
                <Link href={article.link} className={`block overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''}`}>
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                        }`}
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {article.category && (
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      )}
                      {article.isTrending && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                          {getIcon("fire", "w-3 h-3")}
                          Trending
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleSaveArticle(article.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors group/save"
                      aria-label={isSaved ? "Remove from saved" : "Save article"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${isSaved ? 'fill-blue-600 text-blue-600' : 'text-gray-600 dark:text-gray-400'} group-hover/save:text-white`)}
                    </button>
                  </div>
                </Link>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatRelativeDate(article.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{getReadingTime(article.content)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("eye", "w-4 h-4")}
                      <span>{(article.views || 1200).toLocaleString()} views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link href={article.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Author and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <img
                        src={article.author?.avatar}
                        alt={article.author?.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {article.author?.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {article.author?.role}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={article.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      Read More
                      {getIcon("arrowRight", "w-4 h-4")}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {displayedArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("search", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={clearAllFilters}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== LOAD MORE TRIGGER ==================== */}
        {hasMore && (
          <div ref={loadMoreRef} className="text-center py-8">
            {isLoading ? (
              <div className="inline-flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-gray-500 dark:text-gray-400">Loading more articles...</span>
              </div>
            ) : (
              <button
                onClick={() => setDisplayCount(prev => Math.min(prev + (config?.loadMoreCount || 6), filteredArticles.length))}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                Load More Articles
                {getIcon("chevronDown", "w-4 h-4")}
              </button>
            )}
          </div>
        )}

        {/* ==================== FEATURED PODCAST/WEBINAR ==================== */}
        {config?.showFeaturedContent && config?.featuredContent && (
          <div className="mt-16 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("microphone", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Featured Podcast</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{config.featuredContent.title}</h3>
                <p className="text-indigo-100 mb-6">{config.featuredContent.description}</p>
                <Link
                  href={config.featuredContent.link}
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300"
                >
                  {getIcon("play", "w-4 h-4")}
                  Listen Now
                </Link>
              </div>
              <div className="relative">
                <img
                  src={config.featuredContent.image}
                  alt={config.featuredContent.title}
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl">
                  {getIcon("volumeUp", "w-6 h-6 text-indigo-600")}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER BANNER ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
            {getIcon("mail", "w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || "Subscribe to Our Newsletter"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Get the latest insights delivered straight to your inbox. Join 10,000+ industry professionals."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none border border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                aria-label="Email address for newsletter subscription"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime."}
            </p>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-spin { animation: spin 1s linear infinite; }
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

export default IndustryInsightsSection3;