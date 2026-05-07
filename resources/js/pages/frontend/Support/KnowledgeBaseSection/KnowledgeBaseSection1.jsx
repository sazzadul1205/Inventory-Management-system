// page/frontend/Support/KnowledgeBaseSection/KnowledgeBaseSection1.jsx

/**
 * Knowledge Base Section I - Comprehensive Documentation & Article Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Knowledge Base Metrics (Articles, Categories, Authors, Popularity)
 * - Search Bar with Live Filtering
 * - Category Navigation with Count Badges
 * - Grid/List View Toggle for Articles
 * - Tag Filtering System
 * - Featured Articles Section with Gradient Cards
 * - Most Popular Articles List with View Counts
 * - Recently Viewed Articles Tracking (localStorage)
 * - Article Detail Modal with Content Rendering
 * - Print Article Functionality
 * - Share Modal with Copy Link and Email Options
 * - Bookmark System for Saving Articles
 * - Helpful Feedback System (Thumbs Up/Down)
 * - Related Articles Recommendations
 * - Fully Responsive with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlinePrinter,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineStar,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSupport,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineCloudUpload,
  HiOutlineDatabase,
  HiOutlineUser,
  HiOutlineMenu,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineFolder,
  HiOutlineCollection,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import {
  HiOutlineLink,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';

const KnowledgeBaseSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [shareArticle, setShareArticle] = useState(null);
  const [printArticle, setPrintArticle] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(null);
  const [popularArticles, setPopularArticles] = useState([]);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  // ==================== MEMOIZED DATA ====================
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);
  const stats = useMemo(() => config?.stats || [], [config?.stats]);
  const featuredArticles = useMemo(() => config?.featuredArticles || [], [config?.featuredArticles]);

  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tags = new Set();
    articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [articles]);

  // Filter articles based on search, category, and tags
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' ||
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => article.tags?.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [articles, searchQuery, activeCategory, selectedTags]);

  // Group articles by category
  const groupedArticles = useMemo(() => {
    const groups = {};
    filteredArticles.forEach(article => {
      if (!groups[article.category]) {
        groups[article.category] = [];
      }
      groups[article.category].push(article);
    });
    return groups;
  }, [filteredArticles]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  // Get popular articles (most viewed or highest rated)
  useEffect(() => {
    const popular = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    setPopularArticles(popular);
  }, [articles]);

  // Load bookmarks, feedback, and recent articles from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('kbBookmarkedArticles');
    if (savedBookmarks) setBookmarkedArticles(JSON.parse(savedBookmarks));

    const savedFeedback = localStorage.getItem('kbHelpfulFeedback');
    if (savedFeedback) setHelpfulFeedback(JSON.parse(savedFeedback));

    const savedRecent = localStorage.getItem('kbRecentArticles');
    if (savedRecent) setRecentArticles(JSON.parse(savedRecent));
  }, []);

  useEffect(() => {
    localStorage.setItem('kbBookmarkedArticles', JSON.stringify(bookmarkedArticles));
  }, [bookmarkedArticles]);

  useEffect(() => {
    localStorage.setItem('kbHelpfulFeedback', JSON.stringify(helpfulFeedback));
  }, [helpfulFeedback]);

  useEffect(() => {
    localStorage.setItem('kbRecentArticles', JSON.stringify(recentArticles));
  }, [recentArticles]);

  // ==================== HELPER FUNCTIONS ====================
  const trackArticleView = (article) => {
    const updatedRecent = [article, ...recentArticles.filter(a => a.id !== article.id)].slice(0, 10);
    setRecentArticles(updatedRecent);
  };

  const toggleBookmark = (articleId, e) => {
    e?.stopPropagation();
    if (bookmarkedArticles.includes(articleId)) {
      setBookmarkedArticles(bookmarkedArticles.filter(id => id !== articleId));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, articleId]);
    }
  };

  const markHelpful = (articleId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [articleId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedTags([]);
  };

  const shareArticleHandler = (article, e) => {
    e?.stopPropagation();
    setShareArticle(article);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareArticle) {
      navigator.clipboard.writeText(`${window.location.origin}/knowledge-base/${shareArticle.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const printArticleHandler = (article) => {
    setPrintArticle(article);
    setShowPrintModal(true);
  };

  const getCategoryIcon = (categoryId) => {
    const icons = {
      'getting-started': <HiOutlineSparkles className="w-5 h-5" />,
      'account-billing': <HiOutlineUser className="w-5 h-5" />,
      'features': <HiOutlineChip className="w-5 h-5" />,
      'troubleshooting': <HiOutlineSupport className="w-5 h-5" />,
      'security': <HiOutlineShieldCheck className="w-5 h-5" />,
      'integrations': <HiOutlineCloudUpload className="w-5 h-5" />,
      'api': <HiOutlineDatabase className="w-5 h-5" />,
    };
    return icons[categoryId] || <HiOutlineDocumentText className="w-5 h-5" />;
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      'getting-started': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      'account-billing': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'features': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'troubleshooting': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'security': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      'integrations': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      'api': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    };
    return colors[categoryId] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Knowledge Base Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Knowledge Base"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Browse Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Documentation"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Find detailed guides, API references, and tutorials to help you make the most of our platform."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'articles' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'categories' ? <HiOutlineFolder className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'authors' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineStar className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search the knowledge base..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search knowledge base"
            />
          </div>
        </div>

        {/* ==================== CATEGORY NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show all articles"
          >
            <HiOutlineCollection className="w-4 h-4" />
            All
            <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">
              {articles.length}
            </span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.name} articles`}
            >
              {getCategoryIcon(category.id)}
              {category.name}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                {articles.filter(a => a.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* ==================== VIEW CONTROLS ==================== */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
              aria-label="Grid view"
            >
              <HiOutlineViewGrid className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
              aria-label="List view"
            >
              <HiOutlineViewList className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300"
            aria-label="Toggle filters"
          >
            <HiOutlineMenu className="w-4 h-4" />
            Filters
            {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* ==================== TAG FILTERS ==================== */}
        {showFilters && allTags.length > 0 && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  aria-label={`Filter by tag: ${tag}`}
                >
                  {tag}
                </button>
              ))}
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="px-3 py-1 rounded-full text-xs text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
                  aria-label="Clear all tags"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        )}

        {/* ==================== FEATURED ARTICLES SECTION ==================== */}
        {featuredArticles.length > 0 && searchQuery === '' && activeCategory === 'all' && selectedTags.length === 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineStar className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Featured Articles</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                  className="group p-5 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveArticle(article)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                      {getCategoryIcon(article.category)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{article.description}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime} min read</span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">Read more →</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== POPULAR ARTICLES SECTION ==================== */}
        {popularArticles.length > 0 && searchQuery === '' && activeCategory === 'all' && selectedTags.length === 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineTrendingUp className="w-5 h-5 text-orange-500 dark:text-orange-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Most Popular</h3>
            </div>
            <div className="space-y-2">
              {popularArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveArticle(article)}
                >
                  <div className="flex items-center gap-3">
                    <HiOutlineDocumentText className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">{article.title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <span>{article.views || 0} views</span>
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== RECENTLY VIEWED ARTICLES SECTION ==================== */}
        {recentArticles.length > 0 && searchQuery === '' && activeCategory === 'all' && selectedTags.length === 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineClock className="w-5 h-5 text-green-500 dark:text-green-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recently Viewed</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  aria-label={`View article: ${article.title}`}
                >
                  {article.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== ARTICLES GRID/LIST ==================== */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No articles found matching your criteria.</p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear all filters"
            >
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="space-y-12 mb-12">
            {Object.entries(groupedArticles).map(([categoryId, categoryArticles]) => {
              const category = categories.find(c => c.id === categoryId);
              if (!category || categoryArticles.length === 0) return null;

              return (
                <div key={categoryId}>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    {getCategoryIcon(categoryId)}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">({categoryArticles.length} articles)</span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                        className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveArticle(article)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{article.description}</p>
                            <div className="flex items-center gap-3 mt-3">
                              <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime} min read</span>
                              <span className="text-xs text-gray-400 dark:text-gray-500">Updated {formatDate(article.updatedAt)}</span>
                            </div>
                            {article.tags && article.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {article.tags.slice(0, 2).map((tag) => (
                                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                                    {tag}
                                  </span>
                                ))}
                                {article.tags.length > 2 && (
                                  <span className="text-xs text-gray-400 dark:text-gray-500">+{article.tags.length - 2}</span>
                                )}
                              </div>
                            )}
                          </div>
                          <button
                            onClick={(e) => toggleBookmark(article.id, e)}
                            className="ml-2 p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                            aria-label={bookmarkedArticles.includes(article.id) ? "Remove bookmark" : "Bookmark article"}
                          >
                            <HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500 dark:text-yellow-400' : ''}`} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3 mb-12">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveArticle(article)}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getCategoryColor(article.category)}`}>
                    {getCategoryIcon(article.category)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{article.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                    <span>{article.readTime} min read</span>
                    <span>{article.views || 0} views</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleBookmark(article.id, e)}
                    className="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                    aria-label={bookmarkedArticles.includes(article.id) ? "Remove bookmark" : "Bookmark article"}
                  >
                    <HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500 dark:text-yellow-400' : ''}`} />
                  </button>
                  <HiOutlineArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== ARTICLE DETAIL MODAL ==================== */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setActiveArticle(null)}
            role="dialog"
            aria-label="Article Details"
            aria-modal="true"
          >
            <div
              className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(activeArticle.category)}`}>
                      {categories.find(c => c.id === activeArticle.category)?.name}
                    </span>
                    <span className="text-xs text-white/70">{activeArticle.readTime} min read</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mt-2">{activeArticle.title}</h3>
                </div>
                <button onClick={() => setActiveArticle(null)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                {/* Article metadata */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Last updated: {formatDate(activeArticle.updatedAt)}</span>
                    <span>{activeArticle.views || 0} views</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => printArticleHandler(activeArticle)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Print article"
                    >
                      <HiOutlinePrinter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => shareArticleHandler(activeArticle, e)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Share article"
                    >
                      <HiOutlineShare className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => toggleBookmark(activeArticle.id, e)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
                      aria-label={bookmarkedArticles.includes(activeArticle.id) ? "Remove bookmark" : "Bookmark article"}
                    >
                      <HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(activeArticle.id) ? 'fill-current text-yellow-500 dark:text-yellow-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Article content */}
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: activeArticle.content }} />
                </div>

                {/* Tags */}
                {activeArticle.tags && activeArticle.tags.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeArticle.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Helpful feedback */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Was this article helpful?</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => markHelpful(activeArticle.id, true)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${helpfulFeedback[activeArticle.id]?.helpful === true
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                        }`}
                      aria-label="Mark as helpful"
                    >
                      <HiOutlineThumbUp className="w-4 h-4" />
                      Yes
                    </button>
                    <button
                      onClick={() => markHelpful(activeArticle.id, false)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${helpfulFeedback[activeArticle.id]?.helpful === false
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                        }`}
                      aria-label="Mark as not helpful"
                    >
                      <HiOutlineThumbDown className="w-4 h-4" />
                      No
                    </button>
                  </div>
                </div>

                {/* Related articles */}
                {activeArticle.relatedArticles && activeArticle.relatedArticles.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Related Articles</h4>
                    <div className="space-y-2">
                      {activeArticle.relatedArticles.map((relatedId) => {
                        const related = articles.find(a => a.id === relatedId);
                        if (!related) return null;
                        return (
                          <button
                            key={relatedId}
                            onClick={() => { setActiveArticle(related); trackArticleView(related); }}
                            className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                            aria-label={`Read related article: ${related.title}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-700 dark:text-gray-300">{related.title}</span>
                              <HiOutlineArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share Article"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Article</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareArticle.title}</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Copy link"
                  >
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button
                    onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareArticle.title)}&body=${encodeURIComponent(`${shareArticle.title}\n\n${window.location.origin}/knowledge-base/${shareArticle.id}`)}`)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Share via email"
                  >
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PRINT MODAL ==================== */}
        {showPrintModal && printArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPrintModal(false)}
            role="dialog"
            aria-label="Print Preview"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between sticky top-0">
                <h3 className="font-bold text-gray-900 dark:text-white">Print Preview</h3>
                <button onClick={() => setShowPrintModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <h1 className="text-gray-900 dark:text-white">{printArticle.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: printArticle.content }} />
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="Print"
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== HELP SECTION CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineLifebuoy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our support team for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Contact support">
              <HiOutlineChat className="w-5 h-5" />
              Contact Support
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300" aria-label="Send feedback">
              <HiOutlineMail className="w-5 h-5" />
              Send Feedback
            </button>
          </div>
        </div>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .prose {
          max-width: none;
        }
        .prose h1, .prose h2, .prose h3, .prose h4 {
          color: inherit;
        }
        .prose p {
          color: inherit;
        }
      `}</style>
    </section>
  );
};

export default KnowledgeBaseSection1;