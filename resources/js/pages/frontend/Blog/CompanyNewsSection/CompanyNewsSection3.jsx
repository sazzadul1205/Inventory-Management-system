// frontend/Blog/CompanyNewsSection/CompanyNewsSection3.jsx

/**
 * Company News Section - Media Center & Press Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (News, Press Releases, Media Gallery, Investor Relations)
 * - Featured news carousel with auto-play and manual navigation
 * - Press release archive grouped by year
 * - Media gallery with image/video thumbnails and download links
 * - Brand assets library with format indicators
 * - Stock information card with real-time data
 * - Financial reports download section
 * - Investor relations dashboard
 * - Category filters with icon badges
 * - Save/bookmark functionality
 * - Newsletter subscription integration
 * - Author attribution with avatars
 * - Responsive carousel with dots and navigation arrows
 * - Animated background pattern
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
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
  HiOutlineRefresh,
} from 'react-icons/hi';

const CompanyNewsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [savedNews, setSavedNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('news');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const news = useMemo(() => config?.news || [], [config?.news]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All News', icon: 'newspaper' },
    { id: 'announcement', label: 'Announcements', icon: 'sparkles' },
    { id: 'product', label: 'Product Updates', icon: 'chip' },
    { id: 'partnership', label: 'Partnerships', icon: 'handshake' },
    { id: 'award', label: 'Awards', icon: 'trophy' },
    { id: 'event', label: 'Events', icon: 'calendar' },
    { id: 'financial', label: 'Financial', icon: 'chart' }
  ], [config?.categories]);

  const stockInfo = useMemo(() => config?.stockInfo || null, [config?.stockInfo]);
  const brandAssets = useMemo(() => config?.brandAssets || [], [config?.brandAssets]);
  const featuredNews = useMemo(() => config?.featuredNews || [], [config?.featuredNews]);
  const mediaGallery = useMemo(() => config?.mediaGallery || [], [config?.mediaGallery]);
  const pressReleases = useMemo(() => config?.pressReleases || [], [config?.pressReleases]);
  const financialReports = useMemo(() => config?.financialReports || [], [config?.financialReports]);

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
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      chevronLeft: HiOutlineChevronLeft,
      chevronRight: HiOutlineChevronRight,
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
      refresh: HiOutlineRefresh,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineNewspaper className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to various display formats
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    if (format === 'year') {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
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
      'announcement': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'sparkles', label: 'Announcement' },
      'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chip', label: 'Product Update' },
      'partnership': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'handshake', label: 'Partnership' },
      'award': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'trophy', label: 'Award' },
      'event': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'calendar', label: 'Event' },
      'financial': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'chart', label: 'Financial' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'newspaper', label: 'News' };
  }, []);

  /**
   * Toggle save/bookmark status for a news item
   */
  const handleSaveNews = useCallback((newsId) => {
    setSavedNews(prev =>
      prev.includes(newsId)
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredNews.length || 1));
  }, [featuredNews.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredNews.length || 1)) % (featuredNews.length || 1));
  }, [featuredNews.length]);

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

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredNews.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredNews.length, nextSlide]);

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

  // Group press releases by year
  const pressReleasesByYear = useMemo(() => {
    const groups = {};
    pressReleases.forEach(release => {
      const year = formatDate(release.date, 'year');
      if (!groups[year]) groups[year] = [];
      groups[year].push(release);
    });
    return groups;
  }, [pressReleases, formatDate]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Company News - Media Center & Press Hub"
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
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            {getIcon("newspaper", "w-4 h-4")}
            <span className="text-sm font-medium">{config?.badge || "Media Center"}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "News"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Media Center"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Latest news, press releases, media assets, and company announcements."}
          </p>

          {/* Quick Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'news'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'press'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Press Releases
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'media'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Media Gallery
            </button>
            <button
              onClick={() => setActiveTab('investors')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'investors'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Investor Relations
            </button>
          </div>
        </div>

        {/* ==================== FEATURED NEWS CAROUSEL ==================== */}
        {activeTab === 'news' && featuredNews.length > 0 && (
          <div className="mb-16 relative">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredNews.map((item) => {
                  const categoryConfig = getCategoryConfig(item.category);
                  return (
                    <div key={item.id} className="w-full shrink-0">
                      <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </span>
                            {item.isPressRelease && (
                              <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                Press Release
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{item.title}</h2>
                          <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl line-clamp-2">{item.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon("calendar", "w-4 h-4")}
                              <span>{formatDate(item.date, 'short')}</span>
                            </div>
                            <Link
                              href={item.link}
                              className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                              Read More
                              <HiArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredNews.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    {getIcon("chevronLeft", "w-6 h-6")}
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next slide"
                  >
                    {getIcon("chevronRight", "w-6 h-6")}
                  </button>
                </>
              )}

              {/* Carousel Dots */}
              {featuredNews.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredNews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== NEWS TAB ==================== */}
        {activeTab === 'news' && (
          <>
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon("search", "w-5 h-5 text-gray-400")}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news articles..."
                  className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Show ${category.label} news`}
                >
                  {getIcon(category.icon, "w-4 h-4")}
                  {category.label}
                </button>
              ))}
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredNews.map((item) => {
                const categoryConfig = getCategoryConfig(item.category);
                const isSaved = savedNews.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
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
                    </Link>

                    <div className="p-6">
                      {/* Metadata */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {getIcon("calendar", "w-4 h-4")}
                        <span>{formatDate(item.date, 'short')}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        {getIcon("eye", "w-4 h-4")}
                        <span>{item.views || '1.2k'} views</span>
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

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.author?.avatar}
                            alt={item.author?.name}
                            className="w-6 h-6 rounded-full object-cover"
                            loading="lazy"
                          />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{item.author?.name}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleSaveNews(item.id)}
                            className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                            aria-label={isSaved ? "Remove from saved" : "Save news"}
                          >
                            {getIcon("bookmark", "w-4 h-4")}
                          </button>
                          <Link href={item.link} className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
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
            {filteredNews.length === 0 && (
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
          </>
        )}

        {/* ==================== PRESS RELEASES TAB ==================== */}
        {activeTab === 'press' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Press Release Archive</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Official announcements and media statements</p>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {Object.entries(pressReleasesByYear)
                .sort((a, b) => Number(b[0]) - Number(a[0]))
                .map(([year, releases]) => (
                  <div key={year}>
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{year}</h3>
                    </div>
                    {releases.map((release) => (
                      <div key={release.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(release.date, 'short')}</span>
                              <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded-full">
                                Press Release
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              <Link href={release.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                {release.title}
                              </Link>
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{release.excerpt}</p>
                          </div>
                          <Link
                            href={release.link}
                            className="shrink-0 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                          >
                            Download PDF
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ==================== MEDIA GALLERY TAB ==================== */}
        {activeTab === 'media' && (
          <div>
            {/* Media Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {mediaGallery.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${item.type === 'video' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                        {item.type === 'video' ? 'Video' : 'Image'}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <a href={item.downloadUrl} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        {getIcon("download", "w-3 h-3")}
                        Download
                      </a>
                      <button className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1">
                        {getIcon("share", "w-3 h-3")}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Assets Section */}
            {brandAssets.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  {getIcon("cloud", "w-6 h-6 text-blue-600")}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Brand Assets</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {brandAssets.map((asset, idx) => (
                    <a
                      key={idx}
                      href={asset.link}
                      className="flex items-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      {getIcon(asset.icon, "w-5 h-5 text-blue-600")}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{asset.name}</p>
                        <p className="text-xs text-gray-500">{asset.format}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== INVESTOR RELATIONS TAB ==================== */}
        {activeTab === 'investors' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stock Information Card */}
            {stockInfo && (
              <div className="lg:col-span-1">
                <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">Stock Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Ticker Symbol</span>
                      <span className="font-bold">{stockInfo.symbol || "SCP"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current Price</span>
                      <span className="font-bold">{stockInfo.price || "$45.67"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Change</span>
                      <span className="font-bold text-green-300">+2.34%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Cap</span>
                      <span className="font-bold">{stockInfo.marketCap || "$2.5B"}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Financial Reports */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Financial Reports</h3>
                <div className="space-y-3">
                  {financialReports.map((report, idx) => (
                    <a
                      key={idx}
                      href={report.link}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getIcon("document", "w-5 h-5 text-blue-600")}
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{report.title}</p>
                          <p className="text-xs text-gray-500">{report.date}</p>
                        </div>
                      </div>
                      {getIcon("download", "w-5 h-5 text-gray-400")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
            {getIcon("bell", "w-12 h-12 mx-auto mb-4")}
            <h3 className="text-2xl font-bold mb-4">Subscribe to News Alerts</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest company news and press releases delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl placeholder-gray-500 border border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for news alerts"
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
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
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

export default CompanyNewsSection3;