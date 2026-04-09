// page/frontend/Support/KnowledgeBaseSection/KnowledgeBaseSection2.jsx

// React
import { useState, useEffect, useMemo } from 'react';

// Icons
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineUsers,
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
  HiOutlineCollection,
  HiOutlineViewGrid,
  HiOutlineViewList,
} from 'react-icons/hi';
import {
  HiOutlineUserCircle,
  HiOutlineLink,
  HiOutlineEye,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';
import { MdOutlineHistory as HiOutlineHistory, } from "react-icons/md";

const KnowledgeBaseSection2 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeVersion, setActiveVersion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    dateFrom: '',
    dateTo: '',
    author: '',
    minRating: 0,
  });
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTags, setSelectedTags] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [recentArticles, setRecentArticles] = useState([]);
  const [, setPopularArticles] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareArticle, setShareArticle] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [printArticle, setPrintArticle] = useState(null);
  const [showContributorModal, setShowContributorModal] = useState(false);
  const [selectedContributor] = useState(null);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({});
  const [contributors, setContributors] = useState([]);
  const [articleVersions, setArticleVersions] = useState({});
  const [suggestedArticles, setSuggestedArticles] = useState([]);

  // Get data from config
  const categories = useEffect(() => config?.categories || [], [config?.categories]);
  const articles = useEffect(() => config?.articles || [], [config?.articles]);
  const contributorsList = useEffect(() => config?.contributors || [], [config?.contributors]);

  // Initialize contributors
  useEffect(() => {
    setContributors(contributorsList);
  }, [contributorsList]);

  // Initialize article versions
  useEffect(() => {
    const versions = {};
    articles.forEach(article => {
      versions[article.id] = article.versions || [{ version: '1.0', date: article.updatedAt, content: article.content, author: article.author }];
    });
    setArticleVersions(versions);
  }, [articles]);

  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tags = new Set();
    articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [articles]);

  // Filter articles based on search, category, tags, and advanced filters
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' ||
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => article.tags?.includes(tag));

      const matchesDateFrom = !searchFilters.dateFrom || new Date(article.updatedAt) >= new Date(searchFilters.dateFrom);
      const matchesDateTo = !searchFilters.dateTo || new Date(article.updatedAt) <= new Date(searchFilters.dateTo);
      const matchesAuthor = !searchFilters.author || article.author?.name === searchFilters.author;
      const matchesRating = !searchFilters.minRating || (article.rating || 0) >= searchFilters.minRating;

      return matchesSearch && matchesCategory && matchesTags && matchesDateFrom && matchesDateTo && matchesAuthor && matchesRating;
    });
  }, [articles, searchQuery, activeCategory, selectedTags, searchFilters]);

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

  // Get popular articles
  useEffect(() => {
    const popular = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    setPopularArticles(popular);
  }, [articles]);

  // Generate analytics data
  useEffect(() => {
    const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);
    const avgRating = articles.reduce((sum, a) => sum + (a.rating || 0), 0) / articles.length;
    const categoryViews = {};
    articles.forEach(article => {
      categoryViews[article.category] = (categoryViews[article.category] || 0) + (article.views || 0);
    });

    setAnalyticsData({
      totalArticles: articles.length,
      totalViews,
      avgRating: avgRating.toFixed(1),
      topCategories: Object.entries(categoryViews).sort((a, b) => b[1] - a[1]).slice(0, 3),
      monthlyTrend: {
        'Jan': 1200, 'Feb': 1350, 'Mar': 1500, 'Apr': 1680, 'May': 1820, 'Jun': 2100,
      },
    });
  }, [articles]);

  // Generate suggested articles based on current view
  useEffect(() => {
    if (activeArticle) {
      const suggestions = articles
        .filter(a => a.id !== activeArticle.id && a.category === activeArticle.category)
        .slice(0, 3);
      setSuggestedArticles(suggestions);
    }
  }, [activeArticle, articles]);

  // Load data from localStorage
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

  // Track article view
  const trackArticleView = (article) => {
    const updatedRecent = [article, ...recentArticles.filter(a => a.id !== article.id)].slice(0, 10);
    setRecentArticles(updatedRecent);
  };

  // Toggle bookmark
  const toggleBookmark = (articleId, e) => {
    e?.stopPropagation();
    if (bookmarkedArticles.includes(articleId)) {
      setBookmarkedArticles(bookmarkedArticles.filter(id => id !== articleId));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, articleId]);
    }
  };

  // Handle helpful feedback
  const markHelpful = (articleId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [articleId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  // Toggle tag filter
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Share article
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

  // Print article
  const printArticleHandler = (article) => {
    setPrintArticle(article);
    setShowPrintModal(true);
  };

  // View version history
  const viewVersionHistory = (article) => {
    setActiveArticle(article);
    setActiveVersion(articleVersions[article.id]?.[0] || null);
  };

  // Get category icon
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
      'getting-started': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
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

  // Get unique authors for filter
  const uniqueAuthors = useMemo(() => {
    const authors = new Set(articles.map(a => a.author?.name).filter(Boolean));
    return Array.from(authors);
  }, [articles]);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Knowledge Base Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Knowledge Base"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Comprehensive"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Documentation"}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "Find detailed guides, API references, and tutorials. Track versions, see contributor analytics, and get personalized suggestions."}</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineDocumentText className="w-8 h-8 text-blue-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.totalArticles}</span></div>
            <p className="text-sm text-gray-500 mt-1">Total Articles</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineEye className="w-8 h-8 text-green-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.totalViews?.toLocaleString()}</span></div>
            <p className="text-sm text-gray-500 mt-1">Total Views</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineStar className="w-8 h-8 text-yellow-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.avgRating}</span></div>
            <p className="text-sm text-gray-500 mt-1">Avg Rating</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineUsers className="w-8 h-8 text-purple-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{contributors.length}</span></div>
            <p className="text-sm text-gray-500 mt-1">Contributors</p>
          </div>
        </div>

        {/* Search Bar with Advanced Toggle */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search the knowledge base..." className="w-full pl-12 pr-24 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm" />
            <button onClick={() => setAdvancedSearch(!advancedSearch)} className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Advanced</button>
          </div>
        </div>

        {/* Advanced Search Filters */}
        {advancedSearch && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Date From</label><input type="date" value={searchFilters.dateFrom} onChange={(e) => setSearchFilters(prev => ({ ...prev, dateFrom: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Date To</label><input type="date" value={searchFilters.dateTo} onChange={(e) => setSearchFilters(prev => ({ ...prev, dateTo: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Author</label><select value={searchFilters.author} onChange={(e) => setSearchFilters(prev => ({ ...prev, author: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg"><option value="">All Authors</option>{uniqueAuthors.map(author => <option key={author} value={author}>{author}</option>)}</select></div>
              <div><label className="block text-sm font-medium mb-1">Min Rating</label><select value={searchFilters.minRating} onChange={(e) => setSearchFilters(prev => ({ ...prev, minRating: parseInt(e.target.value) }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg"><option value={0}>Any Rating</option><option value={4}>4+ Stars</option><option value={3}>3+ Stars</option></select></div>
            </div>
            <button onClick={() => setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0 })} className="mt-3 text-sm text-red-600 hover:underline">Clear all filters</button>
          </div>
        )}

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}><HiOutlineCollection className="w-4 h-4" />All<span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">{articles.length}</span></button>
          {categories.map((category) => (
            <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === category.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {getCategoryIcon(category.id)}{category.name}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600'}`}>{articles.filter(a => a.category === category.id).length}</span>
            </button>
          ))}
        </div>

        {/* View Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2"><button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button><button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button></div>
          <button onClick={() => setShowAnalyticsModal(true)} className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200"><HiOutlineChartBar className="w-4 h-4" />Analytics</button>
        </div>

        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="text-sm font-medium mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map((tag) => (
                <button key={tag} onClick={() => toggleTag(tag)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 hover:bg-gray-300'}`}>{tag}</button>
              ))}
              {selectedTags.length > 0 && <button onClick={() => setSelectedTags([])} className="px-3 py-1 rounded-full text-xs text-red-600 hover:bg-red-50">Clear</button>}
            </div>
          </div>
        )}

        {/* Articles Grid/List */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12"><HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 mb-4" /><p className="text-gray-500">No articles found.</p><button onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedTags([]); setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0 }); }} className="mt-4 text-blue-600 hover:underline">Clear all filters</button></div>
        ) : viewMode === 'grid' ? (
          <div className="space-y-12 mb-12">
            {Object.entries(groupedArticles).map(([categoryId, categoryArticles]) => {
              const category = categories.find(c => c.id === categoryId);
              if (!category || categoryArticles.length === 0) return null;
              return (
                <div key={categoryId}>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200"><div className={`p-1.5 rounded-lg ${getCategoryColor(categoryId)}`}>{getCategoryIcon(categoryId)}</div><h3 className="text-lg font-semibold">{category.name}</h3><span className="text-sm text-gray-500">({categoryArticles.length} articles)</span></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryArticles.map((article) => (
                      <div key={article.id} onClick={() => { setActiveArticle(article); trackArticleView(article); setActiveVersion(null); }} className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1"><h4 className="font-semibold group-hover:text-blue-600">{article.title}</h4><p className="text-sm text-gray-500 mt-1 line-clamp-2">{article.description}</p><div className="flex items-center gap-3 mt-3 text-xs text-gray-400"><span>{article.readTime} min read</span><span>Updated {formatDate(article.updatedAt)}</span><span>{article.views || 0} views</span></div><div className="flex items-center gap-1 mt-2">{[...Array(5)].map((_, i) => (<HiOutlineStar key={i} className={`w-3 h-3 ${i < (article.rating || 0) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />))}</div></div>
                          <button onClick={(e) => toggleBookmark(article.id, e)} className="ml-2 p-1.5 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500' : ''}`} /></button>
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
              <div key={article.id} onClick={() => { setActiveArticle(article); trackArticleView(article); }} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-4 flex-1"><div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(article.category)}`}>{getCategoryIcon(article.category)}</div><div className="flex-1"><h4 className="font-semibold">{article.title}</h4><p className="text-sm text-gray-500 line-clamp-1">{article.description}</p></div><div className="flex items-center gap-4 text-xs text-gray-400"><span>{article.readTime} min read</span><span>{article.views || 0} views</span></div></div>
                <div className="flex items-center gap-2"><button onClick={(e) => toggleBookmark(article.id, e)} className="p-1.5 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500' : ''}`} /></button><HiOutlineArrowRight className="w-4 h-4 text-gray-400" /></div>
              </div>
            ))}
          </div>
        )}

        {/* Article Detail Modal with Version History */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => { setActiveArticle(null); setActiveVersion(null); }}>
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div><div className="flex items-center gap-2"><span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(activeArticle.category)}`}>{categories.find(c => c.id === activeArticle.category)?.name}</span><span className="text-xs text-white/70">{activeArticle.readTime} min read</span><span className="text-xs text-white/70">v{activeVersion?.version || '1.0'}</span></div><h3 className="text-white font-bold text-xl mt-2">{activeArticle.title}</h3></div>
                  <button onClick={() => { setActiveArticle(null); setActiveVersion(null); }} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-500"><span>Last updated: {formatDate(activeArticle.updatedAt)}</span><span>By {activeArticle.author?.name}</span><span>{activeArticle.views || 0} views</span></div>
                  <div className="flex gap-2"><button onClick={() => viewVersionHistory(activeArticle)} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg flex items-center gap-1"><HiOutlineHistory className="w-4 h-4" />Versions</button><button onClick={() => printArticleHandler(activeArticle)} className="p-2 rounded-lg bg-gray-100"><HiOutlinePrinter className="w-4 h-4" /></button><button onClick={(e) => shareArticleHandler(activeArticle, e)} className="p-2 rounded-lg bg-gray-100"><HiOutlineShare className="w-4 h-4" /></button><button onClick={(e) => toggleBookmark(activeArticle.id, e)} className="p-2 rounded-lg bg-gray-100"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(activeArticle.id) ? 'fill-current text-yellow-500' : ''}`} /></button></div>
                </div>
                <div className="prose dark:prose-invert max-w-none"><div dangerouslySetInnerHTML={{ __html: activeVersion?.content || activeArticle.content }} /></div>
                {activeArticle.tags && <div className="mt-6 pt-4 border-t"><h4 className="text-sm font-semibold mb-2">Tags</h4><div className="flex flex-wrap gap-2">{activeArticle.tags.map(tag => (<span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{tag}</span>))}</div></div>}
                <div className="mt-6 pt-4 border-t"><p className="text-sm text-gray-600 mb-3">Was this article helpful?</p><div className="flex gap-3"><button onClick={() => markHelpful(activeArticle.id, true)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeArticle.id]?.helpful === true ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-green-50'}`}><HiOutlineThumbUp className="w-4 h-4" />Yes</button><button onClick={() => markHelpful(activeArticle.id, false)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeArticle.id]?.helpful === false ? 'bg-red-100 text-red-700' : 'bg-gray-100 hover:bg-red-50'}`}><HiOutlineThumbDown className="w-4 h-4" />No</button></div></div>
                {suggestedArticles.length > 0 && (<div className="mt-6 pt-4 border-t"><h4 className="text-sm font-semibold mb-3">Suggested Articles</h4><div className="space-y-2">{suggestedArticles.map(related => (<button key={related.id} onClick={() => { setActiveArticle(related); trackArticleView(related); setActiveVersion(null); }} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100"><div className="flex items-center justify-between"><span className="text-sm">{related.title}</span><HiOutlineArrowRight className="w-4 h-4 text-gray-400" /></div></button>))}</div></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Contributors Modal */}
        {showContributorModal && selectedContributor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowContributorModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Contributor Profile</h3><button onClick={() => setShowContributorModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUserCircle className="w-16 h-16 text-blue-600" /></div><h4 className="text-xl font-bold mb-1">{selectedContributor.name}</h4><p className="text-sm text-gray-500 mb-2">{selectedContributor.role}</p><div className="flex justify-center gap-4 mb-4"><div className="text-center"><div className="text-2xl font-bold text-blue-600">{selectedContributor.articles}</div><div className="text-xs text-gray-500">Articles</div></div><div className="text-center"><div className="text-2xl font-bold text-green-600">{selectedContributor.edits}</div><div className="text-xs text-gray-500">Edits</div></div><div className="text-center"><div className="text-2xl font-bold text-yellow-600">{selectedContributor.rating}</div><div className="text-xs text-gray-500">Rating</div></div></div><p className="text-gray-600 text-sm">{selectedContributor.bio}</p><div className="mt-4 flex flex-wrap gap-1 justify-center">{selectedContributor.expertise?.map(exp => (<span key={exp} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{exp}</span>))}</div></div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalyticsModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Knowledge Base Analytics</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6"><div className="p-4 bg-blue-50 rounded-xl text-center"><p className="text-2xl font-bold text-blue-600">{analyticsData.totalArticles}</p><p className="text-sm text-gray-500">Total Articles</p></div><div className="p-4 bg-green-50 rounded-xl text-center"><p className="text-2xl font-bold text-green-600">{analyticsData.totalViews?.toLocaleString()}</p><p className="text-sm text-gray-500">Total Views</p></div><div className="p-4 bg-yellow-50 rounded-xl text-center"><p className="text-2xl font-bold text-yellow-600">{analyticsData.avgRating}</p><p className="text-sm text-gray-500">Avg Rating</p></div><div className="p-4 bg-purple-50 rounded-xl text-center"><p className="text-2xl font-bold text-purple-600">{contributors.length}</p><p className="text-sm text-gray-500">Contributors</p></div></div>
                <div className="mb-6"><h4 className="font-semibold mb-3">Top Categories by Views</h4>{analyticsData.topCategories?.map(([cat, views]) => (<div key={cat} className="mb-2"><div className="flex justify-between text-sm"><span>{categories.find(c => c.id === cat)?.name || cat}</span><span>{views.toLocaleString()} views</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(views / analyticsData.totalViews) * 100}%` }} /></div></div>))}</div>
                <div><h4 className="font-semibold mb-3">Monthly View Trend</h4><div className="space-y-2">{Object.entries(analyticsData.monthlyTrend || {}).map(([month, views]) => (<div key={month}><div className="flex justify-between text-sm"><span>{month}</span><span>{views.toLocaleString()}</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: `${(views / 2500) * 100}%` }} /></div></div>))}</div></div>
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Article</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareArticle.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareArticle.title)}&body=${encodeURIComponent(`${shareArticle.title}\n\n${window.location.origin}/knowledge-base/${shareArticle.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* Print Modal */}
        {showPrintModal && printArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}>
            <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4 flex items-center justify-between"><h3 className="font-bold">Print Preview</h3><button onClick={() => setShowPrintModal(false)}><HiOutlineX className="w-5 h-5" /></button></div>
              <div className="p-6"><div className="prose max-w-none"><h1>{printArticle.title}</h1><div dangerouslySetInnerHTML={{ __html: printArticle.content }} /></div><div className="mt-6 flex justify-center"><button onClick={() => window.print()} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Print</button></div></div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineLifebuoy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-blue-100 mb-6">Our support team is ready to help you with any questions.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Contact Support</button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .prose { max-width: none; }
      `}</style>
    </section>
  );
};

export default KnowledgeBaseSection2;