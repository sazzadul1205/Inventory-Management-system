// frontend/Blog/ExpertArticlesSection/ExpertArticlesSection1.jsx

/**
 * Expert Articles Section - Thought Leadership Hub
 * 
 * Unique design elements:
 * - Expert contributor filter with avatar buttons
 * - Featured article spotlight with author prominence
 * - Category filter chips with icons
 * - Save/bookmark functionality for articles
 * - Author attribution with titles and avatars
 * - Read time and view count metrics
 * - Tag cloud for content categorization
 * - Search across titles, excerpts, and tags
 * - Newsletter subscription integration
 * - Animated gradient backgrounds
 * - View all button for archive navigation
 * 
 * All icons from react-icons (hi, fa, hi2 - Heroicons + FontAwesome)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and FontAwesome for variety
import { FaQuoteLeft } from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlineNewspaper,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineRocketLaunch, HiOutlineTrophy } from "react-icons/hi2";

const ExpertArticlesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Topics', icon: 'newspaper' },
    { id: 'strategy', label: 'Strategy', icon: 'chart' },
    { id: 'technology', label: 'Technology', icon: 'chip' },
    { id: 'operations', label: 'Operations', icon: 'cog' },
    { id: 'sustainability', label: 'Sustainability', icon: 'globe' },
    { id: 'leadership', label: 'Leadership', icon: 'users' },
    { id: 'innovation', label: 'Innovation', icon: 'rocket' }
  ], [config?.categories]);

  const experts = useMemo(() => config?.experts || [], [config?.experts]);
  const featuredArticle = useMemo(() => config?.featuredArticle || articles[0], [config?.featuredArticle, articles]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, and FontAwesome
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      user: HiOutlineUser,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineRocketLaunch,
      trophy: HiOutlineTrophy,
      users: HiOutlineUserGroup,
      globe: HiOutlineGlobe,
      chart: HiOutlineChartBar,
      lightbulb: HiOutlineLightBulb,
      check: HiOutlineCheckCircle,
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      microphone: HiOutlineMicrophone,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      star: HiOutlineStar,
      trending: HiOutlineTrendingUp,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      briefcase: HiOutlineBriefcase,
      location: HiOutlineLocationMarker,
      usergroup: HiOutlineUsers,
      chip: HiOutlineChip,
      cloud: HiOutlineCloudUpload,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      archive: HiOutlineArchive,
      photo: HiOutlinePhotograph,
      doc: HiOutlineDocument,
      link: HiOutlineLink,
      credit: HiOutlineCreditCard,
      pie: HiOutlineChartPie,
      quote: FaQuoteLeft,
      at: HiOutlineAtSymbol,
      building: HiOutlineBuildingOffice,
      newspaper: HiOutlineNewspaper,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineUser className={className} />;
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
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'strategy': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chart', label: 'Strategy' },
      'technology': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Technology' },
      'operations': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'cog', label: 'Operations' },
      'sustainability': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Sustainability' },
      'leadership': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Leadership' },
      'innovation': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'rocket', label: 'Innovation' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: 'Article' };
  }, []);

  /**
   * Toggle save/bookmark status for an article
   */
  const handleSaveArticle = useCallback((articleId, e) => {
    if (e) e.stopPropagation();
    setSavedArticles(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedExpert(null);
  }, []);

  /**
   * Handle newsletter subscription
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
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title?.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (selectedExpert) {
      filtered = filtered.filter(article => article.author?.id === selectedExpert);
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedExpert]);

  // Filter out featured article from grid to avoid duplication
  const regularArticles = featuredArticle
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedExpert !== null;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Expert Articles - Thought Leadership Hub"
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon("academic", "w-4 h-4 text-blue-600 dark:text-blue-400 mr-2")}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Expert Insights"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Thought"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Leadership"}
            </span>{' '}
            {config?.title?.suffix || "Articles"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Expert perspectives, industry insights, and actionable advice from supply chain leaders and innovators."}
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
            placeholder={config?.searchPlaceholder || "Search articles by title, topic, or expert..."}
            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search articles"
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
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label} articles`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED ARTICLE ==================== */}
        {featuredArticle && !hasActiveFilters && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Article
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("clock", "w-4 h-4")}
                        <span>{featuredArticle.readTime || '10 min read'}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredArticle.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredArticle.author?.avatar}
                          alt={featuredArticle.author?.name}
                          className="w-10 h-10 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {featuredArticle.author?.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {featuredArticle.author?.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatRelativeDate(featuredArticle.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("eye", "w-4 h-4")}
                        <span>{featuredArticle.views || '2.5k'} views</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredArticle.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Read Article
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={(e) => handleSaveArticle(featuredArticle.id, e)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedArticles.includes(featuredArticle.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                        {savedArticles.includes(featuredArticle.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EXPERTS ROW ==================== */}
        {config?.showExperts && experts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Expert Contributors</h3>
              {selectedExpert && (
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {experts.map((expert) => (
                <button
                  key={expert.id}
                  onClick={() => setSelectedExpert(selectedExpert === expert.id ? null : expert.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ${selectedExpert === expert.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  aria-label={`Filter by ${expert.name}`}
                >
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-8 h-8 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className={`text-sm font-medium ${selectedExpert === expert.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {expert.name}
                    </p>
                    <p className={`text-xs ${selectedExpert === expert.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      {expert.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== ARTICLES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article) => {
            const categoryConfig = getCategoryConfig(article.category);
            const isSaved = savedArticles.includes(article.id);

            return (
              <div
                key={article.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Article Image */}
                <Link href={article.link} className="block overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                  </div>
                </Link>

                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatRelativeDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{article.readTime || '8 min read'}</span>
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

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
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
                        {article.author?.title}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleSaveArticle(article.id, e)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                        aria-label={isSaved ? "Remove from saved" : "Save article"}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                      </button>
                      <button
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Share article"
                      >
                        {getIcon("share", "w-4 h-4")}
                      </button>
                    </div>
                    <Link
                      href={article.link}
                      className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularArticles.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("academic", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
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
        {config?.showViewAll && !hasActiveFilters && regularArticles.length < articles.length && (
          <div className="text-center">
            <Link
              href={config?.viewAllLink || "/expert-articles"}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View All Articles
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
            {getIcon("bell", "w-12 h-12 mx-auto mb-4")}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {config?.newsletter?.title || "Get Expert Insights Delivered"}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Subscribe to receive the latest expert articles, industry insights, and thought leadership content."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for expert insights"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-sm text-blue-100 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            <p className="text-xs text-blue-100 mt-4">
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

export default ExpertArticlesSection1;