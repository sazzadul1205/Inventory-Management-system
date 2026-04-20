// frontend/Blog/IndustryInsightsSection/IndustryInsightsSection2.jsx

/**
 * Industry Insights Section - Advanced Knowledge Hub
 * 
 * Unique design elements:
 * - Dual-column layout with hero featured article
 * - Editor's picks sidebar with vertical cards
 * - Expert contributor showcase grid
 * - Multi-tab content filtering (Latest/Trending/Popular)
 * - Search functionality with topic chips
 * - Bookmark/save article capability
 * - RSS feed integration link
 * - Animated gradient backgrounds
 * - Newsletter subscription banner
 * 
 * All icons from react-icons (hi only - Heroicons for consistency)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineTag,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineTrendingUp,
  HiOutlineEye,
  HiArrowRight,
  HiOutlineBookOpen,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineChatAlt,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineGlobe,
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineX,
} from 'react-icons/hi';

const IndustryInsightsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(config?.tabs?.[0]?.id || 'latest');

  // ==================== MEMOIZED DATA ====================
  const featuredArticle = config?.featuredArticle || null;
  const topics = useMemo(() => config?.topics || [], [config?.topics]);
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const editorsPicks = useMemo(() => config?.editorsPicks || [], [config?.editorsPicks]);
  const contributors = useMemo(() => config?.contributors || [], [config?.contributors]);

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
      user: HiOutlineUser,
      tag: HiOutlineTag,
      chart: HiOutlineChartBar,
      bolt: HiOutlineLightningBolt,
      trending: HiOutlineTrendingUp,
      eye: HiOutlineEye,
      book: HiOutlineBookOpen,
      newspaper: HiOutlineNewspaper,
      academic: HiOutlineAcademicCap,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      chat: HiOutlineChatAlt,
      fire: HiOutlineFire,
      sparkles: HiOutlineSparkles,
      heart: HiOutlineHeart,
      globe: HiOutlineGlobe,
      download: HiOutlineDownload,
      mail: HiOutlineMail,
      search: HiOutlineSearch,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      close: HiOutlineX,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineDocumentText className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to relative time string (e.g., "3 days ago")
   * Provides more engaging UX for recent content
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
    if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`;
    if (diffMonths < 12) return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
    return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
  }, []);

  /**
   * Calculates estimated reading time from content string
   */
  const getReadingTime = useCallback((content) => {
    if (!content) return '4 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }, []);

  /**
   * Toggle save/bookmark status for an article
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
   * Handles newsletter subscription form submission
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
   * Loads more articles (pagination)
   */
  const handleLoadMore = useCallback(() => {
    setVisibleArticles(prev => prev + 6);
  }, []);

  /**
   * Clears search input
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  /**
   * Sets a topic as search query
   */
  const handleTopicClick = useCallback((topic) => {
    setSearchQuery(topic);
    setActiveTab('latest');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Apply tab filtering
    if (activeTab === 'trending') {
      filtered = filtered.filter(article => article.isTrending);
    } else if (activeTab === 'popular') {
      filtered = filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (activeTab === 'latest') {
      filtered = filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    }

    // Apply search filtering
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title?.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        article.category?.toLowerCase().includes(query) ||
        article.author?.name?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [articles, activeTab, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < filteredArticles.length;

  return (
    <section
      className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Insights Section - Advanced Knowledge Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION WITH SEARCH ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
            {getIcon("sparkles", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Deep Intelligence"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Beyond the"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Supply Chain Horizon"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Proprietary research, predictive analytics, and strategic frameworks that redefine what's possible in inventory management."}
          </p>

          {/* Search Bar with Clear Button */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Explore 500+ articles, white papers, and case studies..."}
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
            )}
          </div>

          {/* Popular Topics Chips */}
          {config?.showTopics && topics.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {topics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTopicClick(topic)}
                  className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ==================== CONTENT TABS ==================== */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {config?.tabs?.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Show ${tab.label} articles`}
                aria-pressed={activeTab === tab.id}
              >
                {getIcon(tab.icon, "w-4 h-4")}
                {tab.label}
                {tab.count && (
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* RSS Feed Link */}
          {config?.showRss && (
            <Link
              href={config?.rssLink || "/insights/rss"}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Subscribe to RSS feed"
            >
              {getIcon("download", "w-4 h-4")}
              RSS Feed
            </Link>
          )}
        </div>

        {/* ==================== FEATURED GRID - 2 COLUMN LAYOUT ==================== */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article with Glow Effect */}
          {featuredArticle && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-md">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap items-center gap-3 text-white text-sm mb-2">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">{featuredArticle.category}</span>
                      <div className="flex items-center gap-1">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatRelativeDate(featuredArticle.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {getIcon("clock", "w-4 h-4")}
                        <span>{getReadingTime(featuredArticle.content)}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-white/80 text-sm line-clamp-2 mb-3">
                      {featuredArticle.excerpt}
                    </p>
                    <Link
                      href={featuredArticle.link}
                      className="inline-flex items-center text-white font-semibold text-sm hover:gap-2 transition-all duration-300 group/link"
                    >
                      Read full article
                      <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Editor's Picks Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                {getIcon("fire", "w-5 h-5 text-orange-500")}
                Editor&apos;s Picks
              </h3>
              <Link
                href={config?.editorsPickLink || "/insights/editors-picks"}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all
              </Link>
            </div>

            {editorsPicks.map((pick, idx) => (
              <div
                key={pick.id || idx}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={pick.image}
                      alt={pick.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{pick.category}</span>
                      <span>•</span>
                      <span>{formatRelativeDate(pick.publishDate)}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <Link href={pick.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {pick.title}
                      </Link>
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        {getIcon("eye", "w-3 h-3")}
                        {(pick.views || 0).toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        {getIcon("clock", "w-3 h-3")}
                        {getReadingTime(pick.content)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ARTICLES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.length > 0 ? (
            displayedArticles.map((article) => {
              const isSaved = savedArticles.includes(article.id);
              return (
                <article
                  key={article.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Article Image with Overlay Badges */}
                  <Link href={article.link} className="relative block overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
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
                  </Link>

                  <div className="p-6">
                    {/* Author and Date Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={article.author?.avatar}
                        alt={article.author?.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {article.author?.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{formatRelativeDate(article.publishDate)}</span>
                          <span>•</span>
                          <span>{getReadingTime(article.content)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <Link
                        href={article.link}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Stats and Share Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          {getIcon("eye", "w-4 h-4")}
                          {(article.views || 0).toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          {getIcon("chat", "w-4 h-4")}
                          {article.comments || 0}
                        </span>
                      </div>
                      <button
                        className="flex items-center gap-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Share article"
                      >
                        {getIcon("share", "w-4 h-4")}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              {getIcon("book", "w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4")}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            </div>
          )}
        </div>

        {/* ==================== LOAD MORE BUTTON ==================== */}
        {config?.showLoadMore && hasMoreArticles && (
          <div className="text-center mb-16">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="Load more articles"
            >
              Load More Articles
              {getIcon("chevronDown", "w-4 h-4")}
            </button>
          </div>
        )}

        {/* ==================== EXPERT CONTRIBUTORS SECTION ==================== */}
        {config?.showContributors && contributors.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Meet Our Expert Contributors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Industry leaders sharing their knowledge and insights
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {contributors.map((contributor, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-600 dark:group-hover:border-blue-500 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white mt-3 text-sm">{contributor.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{contributor.role}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{contributor.articles} articles</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER BANNER ==================== */}
        {config?.showNewsletter && (
          <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
            <div className="max-w-2xl mx-auto">
              {getIcon("mail", "w-12 h-12 mx-auto mb-4")}
              <h3 className="text-3xl font-bold mb-4">{config?.newsletter?.title || "Join the Intelligence Briefing"}</h3>
              <p className="text-xl text-blue-100 mb-8">
                {config?.newsletter?.description || "Weekly data-driven insights, proprietary models, and strategic frameworks delivered to senior supply chain leaders."}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
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
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Subscribe Now
                </button>
              </form>
              {emailSubmitted && (
                <p className="text-sm text-blue-100 mt-4 animate-fadeIn">
                  Thanks for subscribing! Check your inbox for confirmation.
                </p>
              )}
              <p className="text-sm text-blue-100 mt-4 opacity-80">
                {config?.newsletter?.disclaimer || "We respect your inbox. Unsubscribe with one click."}
              </p>
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

export default IndustryInsightsSection2;