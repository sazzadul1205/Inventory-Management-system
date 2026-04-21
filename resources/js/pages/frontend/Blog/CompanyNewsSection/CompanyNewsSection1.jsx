// frontend/Blog/CompanyNewsSection/CompanyNewsSection1.jsx

/**
 * Company News Section - Press & Announcements Hub
 * 
 * Unique design elements:
 * - Featured news story spotlight with large hero layout
 * - Category filter chips with icons
 * - Press mentions carousel with publication logos
 * - Save/bookmark functionality for news articles
 * - Expandable content sections for longer news items
 * - Author attribution with avatars
 * - Read time and view count metrics
 * - Video indicator badges for multimedia content
 * - Search across titles, excerpts, and tags
 * - Newsletter subscription integration
 * - Animated gradient background orbs
 * - Grid/list layout for news cards
 * - View all button for archive navigation
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
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
  HiArrowRight,
  HiOutlineX,
} from 'react-icons/hi';

const CompanyNewsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [savedNews, setSavedNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNews, setExpandedNews] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const news = useMemo(() => config?.news || [], [config?.news]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All News', icon: 'newspaper' },
    { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
    { id: 'product', label: 'Product Updates', icon: 'chip' },
    { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
    { id: 'award', label: 'Awards', icon: 'trophy' },
    { id: 'event', label: 'Events', icon: 'calendar' }
  ], [config?.categories]);

  const pressMentions = useMemo(() => config?.pressMentions || [], [config?.pressMentions]);
  const featuredNews = useMemo(() => config?.featuredNews || news[0], [config?.featuredNews, news]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      newspaper: HiOutlineNewspaper,
      calendar: HiOutlineCalendar,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      external: HiOutlineExternalLink,
      download: HiOutlineDownload,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineTrendingUp,
      trophy: HiOutlineStar,
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
      close: HiOutlineX,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineNewspaper className={className} />;
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
      'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'megaphone', label: 'Announcement' },
      'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update' },
      'partnership': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'handshake', label: 'Partnership' },
      'award': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'trophy', label: 'Award & Recognition' },
      'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event' },
      'press': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'newspaper', label: 'Press Release' },
      'community': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Community' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: 'News' };
  }, []);

  /**
   * Toggle save/bookmark status for a news item
   */
  const handleSaveNews = useCallback((newsId, e) => {
    if (e) e.stopPropagation();
    setSavedNews(prev =>
      prev.includes(newsId)
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  }, []);

  /**
   * Toggle expanded state for a news item
   */
  const toggleExpanded = useCallback((newsId) => {
    setExpandedNews(prev => prev === newsId ? null : newsId);
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
  const filteredNews = useMemo(() => {
    let filtered = [...news];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(query) ||
        item.excerpt?.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    return filtered;
  }, [news, searchQuery, selectedCategory]);

  // Filter out featured news from grid to avoid duplication
  const regularNews = featuredNews
    ? filteredNews.filter(n => n.id !== featuredNews.id)
    : filteredNews;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Company News - Press & Announcements Hub"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon("newspaper", "w-4 h-4 text-blue-600 dark:text-blue-400 mr-2")}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Latest News"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Company"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "News"}
            </span>{' '}
            {config?.title?.suffix || "& Announcements"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Stay updated with the latest company announcements, product releases, partnerships, and industry recognition."}
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
            placeholder={config?.searchPlaceholder || "Search news by title, category, or keyword..."}
            className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search news"
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
              aria-label={`Show ${category.label} news`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED NEWS ==================== */}
        {featuredNews && !hasActiveFilters && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Story
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatRelativeDate(featuredNews.date)}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredNews.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredNews.author?.avatar}
                          alt={featuredNews.author?.name}
                          className="w-8 h-8 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {featuredNews.author?.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon("eye", "w-4 h-4")}
                        <span>{featuredNews.views || '2.5k'} views</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredNews.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Read Full Story
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={(e) => handleSaveNews(featuredNews.id, e)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedNews.includes(featuredNews.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                        {savedNews.includes(featuredNews.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    {featuredNews.videoUrl && (
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

        {/* ==================== NEWS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularNews.map((item) => {
            const categoryConfig = getCategoryConfig(item.category);
            const isExpanded = expandedNews === item.id;
            const isSaved = savedNews.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* News Image */}
                <Link href={item.link} className="block overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                  </div>
                  {item.videoUrl && (
                    <div className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                      {getIcon("play", "w-4 h-4 text-white")}
                    </div>
                  )}
                </Link>

                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatRelativeDate(item.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("eye", "w-4 h-4")}
                      <span>{item.views || '1.2k'} views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {item.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Expandable Content */}
                  {item.content && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? "Show less" : "Read more"}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 animate-fadeIn">
                          {item.content}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, idx) => (
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
                        src={item.author?.avatar}
                        alt={item.author?.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.author?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleSaveNews(item.id, e)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                        aria-label={isSaved ? "Remove from saved" : "Save news"}
                      >
                        {getIcon("bookmark", "w-4 h-4")}
                      </button>
                      <button
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Share news"
                      >
                        {getIcon("share", "w-4 h-4")}
                      </button>
                      <Link
                        href={item.link}
                        className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularNews.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("newspaper", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No news found</h3>
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
        {config?.showViewAll && !hasActiveFilters && regularNews.length < news.length && (
          <div className="text-center">
            <Link
              href={config?.viewAllLink || "/news"}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View All News
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* ==================== PRESS MENTIONS SECTION ==================== */}
        {config?.showPressMentions && pressMentions.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">In the Press</h3>
              <p className="text-gray-600 dark:text-gray-400">Featured in leading publications</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {pressMentions.map((mention, idx) => (
                <a
                  key={idx}
                  href={mention.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label={`Read about us on ${mention.name}`}
                >
                  {mention.logo ? (
                    <img src={mention.logo} alt={mention.name} className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  ) : (
                    <span className="font-semibold text-lg">{mention.name}</span>
                  )}
                  {getIcon("external", "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity")}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
            {getIcon("bell", "w-12 h-12 mx-auto mb-4")}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {config?.newsletter?.title || "Subscribe to Our Newsletter"}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Get the latest company news, product updates, and industry insights delivered straight to your inbox."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl placeholder-gray-500 border border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for newsletter subscription"
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
              {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. We respect your privacy."}
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

export default CompanyNewsSection1;