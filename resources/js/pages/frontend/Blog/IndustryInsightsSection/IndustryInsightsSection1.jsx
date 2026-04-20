// frontend/Blog/IndustryInsightsSection/IndustryInsightsSection1.jsx

/**
 * Industry Insights Section - Knowledge Hub for Supply Chain Professionals
 * 
 * Unique design elements:
 * - Dynamic featured article spotlight with gradient overlay
 * - Trending indicator badge for popular content
 * - Newsletter subscription integration
 * - Category filter system
 * - Author attribution with avatars
 * - Read time and view count metrics
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent styling
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
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineX,
  HiOutlineSearch,
} from 'react-icons/hi';

const IndustryInsightsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const featuredArticle = config?.featuredArticle || null;
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);

  // ==================== FILTERED ARTICLES ====================
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'all' ||
        article.category?.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesSearch = searchQuery === '' ||
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons only for visual consistency
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
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      close: HiOutlineX,
      search: HiOutlineSearch,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineDocumentText className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats ISO date string to readable format (e.g., "Mar 15, 2024")
   */
  const formatDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }, []);

  /**
   * Calculates estimated reading time based on content word count
   * Assumes average reading speed of 200 words per minute
   */
  const getReadingTime = useCallback((content) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
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
   * Clears search input and resets to show all articles
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Insights Section"
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
            aria-label="Section badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            {config?.badge?.icon && (
              <span className="mr-2">{getIcon(config.badge.icon, "w-4 h-4")}</span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
              {config?.badge?.text || "Industry Pulse"}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix || ''}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || "Industry Insights"}
            </span>{' '}
            {config?.title?.suffix || 'That Drive Results'}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description || "Cutting-edge analysis, expert perspectives, and actionable strategies to keep your business ahead of the curve."}
          </p>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("search", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        {config?.showCategories && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Show all articles"
            >
              All Insights
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
                  ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show ${category.label} articles`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* ==================== FEATURED ARTICLE ==================== */}
        {featuredArticle && !searchQuery && activeCategory === 'all' && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Featured Image Container */}
                <div className="relative h-80 lg:h-full">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full shadow-md">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-10">
                  {/* Category and Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {featuredArticle.category}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("calendar", "w-4 h-4")}
                      <span>{formatDate(featuredArticle.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{getReadingTime(featuredArticle.content)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    <Link
                      href={featuredArticle.link}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Author Attribution */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={featuredArticle.author?.avatar}
                      alt={featuredArticle.author?.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-emerald-200 dark:border-emerald-800"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {featuredArticle.author?.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {featuredArticle.author?.role}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={featuredArticle.link}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-2 transition-all duration-300 group"
                  >
                    Read full article
                    <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ARTICLES GRID ==================== */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          itemProp="blogPosts"
        >
          {filteredArticles.map((article, index) => (
            <article
              key={article.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              itemProp="blogPost"
            >
              {/* Article Image with Hover Zoom */}
              <Link href={article.link} className="block overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  itemProp="image"
                />
              </Link>

              <div className="p-6">
                {/* Category and Badge Row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  {article.isTrending && (
                    <span className="flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                      {getIcon("trending", "w-3 h-3")}
                      Trending
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2"
                  itemProp="headline"
                >
                  <Link
                    href={article.link}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p
                  className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
                  itemProp="description"
                >
                  {article.excerpt}
                </p>

                {/* Metadata Row */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    {getIcon("calendar", "w-4 h-4")}
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {getIcon("clock", "w-4 h-4")}
                    <span>{getReadingTime(article.content)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {getIcon("eye", "w-4 h-4")}
                    <span>{article.readTime || '1.2k'} views</span>
                  </div>
                </div>

                {/* Author Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <img
                    src={article.author?.avatar}
                    alt={article.author?.name}
                    className="w-8 h-8 rounded-full object-cover"
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

                {/* Read More Link */}
                <Link
                  href={article.link}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm mt-4 group/link"
                >
                  <span>Read more</span>
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("search", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No matching insights found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== VIEW ALL CTA ==================== */}
        {config?.showViewAll && filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href={config?.viewAllLink || "/blog"}
              className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {config?.viewAllText || "Explore All Insights"}
              <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-20 bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              {config?.newsletter?.title || "Transform Insights Into Action"}
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Weekly analysis, case studies, and frameworks delivered to your inbox."}
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
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Subscribe
              </button>
            </form>

            {emailSubmitted && (
              <p className="text-sm text-emerald-100 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}

            <p className="text-sm text-emerald-100 mt-4 opacity-80">
              {config?.newsletter?.disclaimer || "Join 15,000+ supply chain professionals. Unsubscribe anytime."}
            </p>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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

export default IndustryInsightsSection1;