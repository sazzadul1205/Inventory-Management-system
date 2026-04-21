// frontend/Blog/ExpertArticlesSection/ExpertArticlesSection2.jsx

/**
 * Expert Articles Section - Industry Leader Insights Hub
 * 
 * Unique design elements:
 * - Expert profile spotlight with bio and video intro
 * - Expert selector buttons with avatars
 * - Multi-tab interface (Articles, Expert Q&A, Video Insights)
 * - Featured expert spotlight card with stats
 * - Q&A accordion with expert attribution
 * - Video library gallery with modal player
 * - Category filter with dropdown
 * - Search functionality across articles
 * - Save/bookmark functionality
 * - Author attribution with avatars
 * - Read time and date metrics
 * - Newsletter subscription with expert avatars
 * - Animated gradient backgrounds
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineSearch,
  HiOutlineBookmark,
  HiOutlineMail,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineX,
  HiOutlineQuestionMarkCircle,
  HiOutlineBookOpen,
  HiOutlineArrowRight,
  HiOutlineFilter,
  HiOutlineTag,
  HiOutlineShare,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineChip,
  HiOutlineCog,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineStar,
} from 'react-icons/hi';

const ExpertArticlesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('articles');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExpert, setSelectedExpert] = useState(config?.experts?.[0]?.id || null);

  // ==================== MEMOIZED DATA ====================
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
  const qaItems = useMemo(() => config?.qaItems || [], [config?.qaItems]);
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const videoLibrary = useMemo(() => config?.videoLibrary || [], [config?.videoLibrary]);
  const currentExpert = useMemo(() => experts.find(e => e.id === selectedExpert), [experts, selectedExpert]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      search: HiOutlineSearch,
      bookmark: HiOutlineBookmark,
      mail: HiOutlineMail,
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      document: HiOutlineDocumentText,
      academic: HiOutlineAcademicCap,
      close: HiOutlineX,
      question: HiOutlineQuestionMarkCircle,
      book: HiOutlineBookOpen,
      arrowRight: HiOutlineArrowRight,
      filter: HiOutlineFilter,
      tag: HiOutlineTag,
      share: HiOutlineShare,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      users: HiOutlineUserGroup,
      globe: HiOutlineGlobe,
      chart: HiOutlineChartBar,
      lightbulb: HiOutlineLightBulb,
      check: HiOutlineCheckCircle,
      chip: HiOutlineChip,
      cog: HiOutlineCog,
      usergroup: HiOutlineUsers,
      trending: HiOutlineTrendingUp,
      fire: HiOutlineFire,
      star: HiOutlineStar,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineDocumentText className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to short display format
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
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
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'document', label: 'Article' };
  }, []);

  /**
   * Toggle save/bookmark status for an article
   */
  const handleSaveArticle = useCallback((articleId) => {
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
  const expertArticles = useMemo(() => {
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

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Expert Articles - Industry Leader Insights Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("academic", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Expert Voices"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Insights from"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Industry Leaders"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Exclusive interviews, deep-dive analysis, and expert perspectives on the future of supply chain management."}
          </p>
        </div>

        {/* ==================== EXPERT SELECTOR ==================== */}
        {experts.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {experts.map((expert) => (
                <button
                  key={expert.id}
                  onClick={() => setSelectedExpert(expert.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ${selectedExpert === expert.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  aria-label={`View articles by ${expert.name}`}
                >
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-10 h-10 rounded-full object-cover"
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

            {/* Featured Expert Spotlight */}
            {currentExpert && (
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <img
                    src={currentExpert.avatar}
                    alt={currentExpert.name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{currentExpert.name}</h2>
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full">
                        Featured Expert
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{currentExpert.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{currentExpert.bio}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        {getIcon("book", "w-4 h-4")}
                        <span>{currentExpert.articles} articles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        {getIcon("eye", "w-4 h-4")}
                        <span>{currentExpert.views || '10k+'} views</span>
                      </div>
                      {currentExpert.linkedin && (
                        <a href={currentExpert.linkedin} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          LinkedIn →
                        </a>
                      )}
                    </div>
                  </div>
                  {currentExpert.videoIntro && (
                    <button
                      onClick={() => {
                        setCurrentVideo(currentExpert.videoIntro);
                        setShowVideoModal(true);
                      }}
                      className="shrink-0 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      aria-label="Watch introduction video"
                    >
                      {getIcon("play", "w-5 h-5 text-blue-600")}
                      <span className="text-sm font-medium">Watch Intro</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== TABS NAVIGATION ==================== */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => setActiveTab('articles')}
              className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === 'articles'
                ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              aria-label="Show articles tab"
            >
              {getIcon("document", "w-5 h-5")}
              Latest Articles
              <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                {expertArticles.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === 'qa'
                ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              aria-label="Show Q&A tab"
            >
              {getIcon("question", "w-5 h-5")}
              Expert Q&A
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === 'videos'
                ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              aria-label="Show videos tab"
            >
              {getIcon("video", "w-5 h-5")}
              Video Insights
            </button>
          </div>
        </div>

        {/* ==================== ARTICLES TAB ==================== */}
        {activeTab === 'articles' && (
          <>
            {/* Search and Category Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon("search", "w-5 h-5 text-gray-400")}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {expertArticles.map((article) => {
                const categoryConfig = getCategoryConfig(article.category);
                const isSaved = savedArticles.includes(article.id);

                return (
                  <div
                    key={article.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
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
                          <span>{formatDate(article.date, 'short')}</span>
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

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <img
                            src={article.author?.avatar}
                            alt={article.author?.name}
                            className="w-6 h-6 rounded-full object-cover"
                            loading="lazy"
                          />
                          <span className="text-xs text-gray-500">{article.author?.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleSaveArticle(article.id)}
                            className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                            aria-label={isSaved ? "Remove from saved" : "Save article"}
                          >
                            {getIcon("bookmark", "w-4 h-4")}
                          </button>
                          <Link href={article.link} className="text-blue-600 text-sm font-semibold hover:underline">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {expertArticles.length === 0 && (
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
          </>
        )}

        {/* ==================== Q&A TAB ==================== */}
        {activeTab === 'qa' && (
          <div className="space-y-6 mb-12">
            {qaItems.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      {getIcon("question", "w-5 h-5 text-blue-600")}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.question}</h3>
                    <div className="flex items-start gap-3 mt-2">
                      <img
                        src={item.expert.avatar}
                        alt={item.expert.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.expert.name}</p>
                        <p className="text-xs text-gray-500 mb-2">{item.expert.title}</p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== VIDEOS TAB ==================== */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videoLibrary.map((video) => (
              <div
                key={video.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => {
                  setCurrentVideo(video.url);
                  setShowVideoModal(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentVideo(video.url) && setShowVideoModal(true)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={video.expert.avatar} alt="" className="w-6 h-6 rounded-full object-cover" loading="lazy" />
                    <span className="text-xs text-gray-500">{video.expert.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== NEWSLETTER SECTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("mail", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Expert Insights</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config?.newsletter?.title || "Get the latest expert articles"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {config?.newsletter?.description || "Subscribe to receive weekly insights from industry leaders delivered to your inbox."}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Email for expert insights newsletter"
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
                  <p className="text-sm text-blue-100 mt-3 animate-fadeIn">
                    Thanks for subscribing! Check your inbox for confirmation.
                  </p>
                )}
              </div>
              <div className="flex -space-x-3 justify-center">
                {experts.slice(0, 4).map((expert, idx) => (
                  <img
                    key={idx}
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
              <video
                src={currentVideo}
                className="w-full"
                controls
                autoPlay
              />
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
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

export default ExpertArticlesSection2;