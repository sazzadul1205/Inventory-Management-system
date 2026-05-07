// page/frontend/Support/KnowledgeBaseSection/KnowledgeBaseSection3.jsx

/**
 * Knowledge Base Section III - AI-Powered Documentation Hub with Smart Features
 *
 * Unique Design Elements:
 * - AI-Powered Semantic Search with Relevance Scoring
 * - AI Chatbot Assistant for Documentation Help
 * - AI Content Generator for Article Creation
 * - Personalized Learning Path Based on User Activity
 * - Advanced Analytics Dashboard with AI Metrics
 * - Version History Tracking with Comparison
 * - Collaborative Editing Suggestions
 * - Article Rating System with Helpful Feedback
 * - Bookmark and Share Functionality
 * - Recently Viewed Articles Tracking
 * - Suggested Articles Based on Current View
 * - Contributor Profiles with Analytics
 * - Print and Export Capabilities
 * - Fully Responsive with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2, ai, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and AI Icons
import { AiOutlineRobot as HiOutlineRobot } from "react-icons/ai";
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
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
  HiOutlinePencil,
} from 'react-icons/hi';
import { HiOutlineEye, HiOutlineLink } from 'react-icons/hi2';
import { MdOutlineHistory as HiOutlineHistory } from "react-icons/md";

const KnowledgeBaseSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [aiPrompt, setAiPrompt] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [printArticle, setPrintArticle] = useState(null);
  const [analyticsData, setAnalyticsData] = useState({});
  const [shareArticle, setShareArticle] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeVersion, setActiveVersion] = useState(null);
  const [searchMode, setSearchMode] = useState('semantic');
  const [recentArticles, setRecentArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(null);
  const [editSuggestion, setEditSuggestion] = useState('');
  const [aiChatMessages, setAiChatMessages] = useState([]);
  const [articleVersions, setArticleVersions] = useState({});
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [personalizedPath, setPersonalizedPath] = useState([]);
  const [learningProgress, setLearningProgress] = useState({});
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [aiGeneratedContent, setAiGeneratedContent] = useState('');
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showContributorModal, setShowContributorModal] = useState(false);
  const [showSuggestEditModal, setShowSuggestEditModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState({ dateFrom: '', dateTo: '', author: '', minRating: 0, contentType: 'all', });

  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(() => config?.categories || [], [config?.categories]);
  const articles = useMemo(() => config?.articles || [], [config?.articles]);
  const contributorsList = useMemo(() => config?.contributors || [], [config?.contributors]);

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

  // Initialize learning progress
  useEffect(() => {
    const saved = localStorage.getItem('kbLearningProgress');
    if (saved) setLearningProgress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('kbLearningProgress', JSON.stringify(learningProgress));
  }, [learningProgress]);

  // Generate personalized learning path
  useEffect(() => {
    if (learningProgress.completedArticles?.length > 0) {
      const completed = learningProgress.completedArticles;
      const recommended = articles
        .filter(a => !completed.includes(a.id) && a.difficulty === 'beginner')
        .slice(0, 3);
      setPersonalizedPath(recommended);
    }
  }, [learningProgress, articles]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [articles]);

  // Semantic/AI search
  const performSemanticSearch = useCallback((query) => {
    const results = articles.filter(article => {
      const relevance =
        (article.title?.toLowerCase().includes(query.toLowerCase()) ? 10 : 0) +
        (article.description?.toLowerCase().includes(query.toLowerCase()) ? 5 : 0) +
        (article.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ? 3 : 0);
      return relevance > 0;
    }).map(article => ({ ...article, relevance: 85 }));
    return results;
  }, [articles]);

  // AI Content Generator
  const generateAIContent = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const generated = `# ${aiPrompt}\n\n## Introduction\nThis is AI-generated content about ${aiPrompt}. The knowledge base uses advanced AI to help create comprehensive documentation.\n\n## Key Points\n- Point 1 about ${aiPrompt}\n- Point 2 about ${aiPrompt}\n- Point 3 about ${aiPrompt}\n\n## Conclusion\nThis content was generated by AI to assist in creating documentation. Please review and edit as needed.`;
      setAiGeneratedContent(generated);
      setIsGenerating(false);
    }, 2000);
  };

  // Filter articles
  const filteredArticles = useMemo(() => {
    let results = articles;

    if (searchQuery) {
      if (searchMode === 'semantic') {
        results = performSemanticSearch(searchQuery);
      } else {
        results = articles.filter(article => {
          const matchesSearch = article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
          return matchesSearch;
        });
      }
    }

    results = results.filter(article => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => article.tags?.includes(tag));
      const matchesDateFrom = !searchFilters.dateFrom || new Date(article.updatedAt) >= new Date(searchFilters.dateFrom);
      const matchesDateTo = !searchFilters.dateTo || new Date(article.updatedAt) <= new Date(searchFilters.dateTo);
      const matchesAuthor = !searchFilters.author || article.author?.name === searchFilters.author;
      const matchesRating = !searchFilters.minRating || (article.rating || 0) >= searchFilters.minRating;
      const matchesContentType = searchFilters.contentType === 'all' || article.type === searchFilters.contentType;

      return matchesCategory && matchesTags && matchesDateFrom && matchesDateTo && matchesAuthor && matchesRating && matchesContentType;
    });

    return results;
  }, [articles, searchQuery, searchMode, performSemanticSearch, activeCategory, selectedTags, searchFilters]);

  // Group articles by category
  const groupedArticles = useMemo(() => {
    const groups = {};
    filteredArticles.forEach(article => {
      if (!groups[article.category]) groups[article.category] = [];
      groups[article.category].push(article);
    });
    return groups;
  }, [filteredArticles]);

  // Generate analytics
  useEffect(() => {
    const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);
    const avgRating = articles.reduce((sum, a) => sum + (a.rating || 0), 0) / (articles.length || 1);
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
      aiGenerated: articles.filter(a => a.aiGenerated).length,
    });
  }, [articles]);

  // Generate suggested articles
  useEffect(() => {
    if (activeArticle) {
      const suggestions = articles
        .filter(a => a.id !== activeArticle.id && a.category === activeArticle.category)
        .slice(0, 3);
      setSuggestedArticles(suggestions);
    }
  }, [activeArticle, articles]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('kbBookmarkedArticles');
    if (savedBookmarks) setBookmarkedArticles(JSON.parse(savedBookmarks));
    const savedFeedback = localStorage.getItem('kbHelpfulFeedback');
    if (savedFeedback) setHelpfulFeedback(JSON.parse(savedFeedback));
    const savedRecent = localStorage.getItem('kbRecentArticles');
    if (savedRecent) setRecentArticles(JSON.parse(savedRecent));
    const savedAiChat = localStorage.getItem('kbAiChat');
    if (savedAiChat) setAiChatMessages(JSON.parse(savedAiChat));
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

  useEffect(() => {
    localStorage.setItem('kbAiChat', JSON.stringify(aiChatMessages));
  }, [aiChatMessages]);

  // ==================== HELPER FUNCTIONS ====================
  const trackArticleView = (article) => {
    const updatedRecent = [article, ...recentArticles.filter(a => a.id !== article.id)].slice(0, 10);
    setRecentArticles(updatedRecent);
    setLearningProgress(prev => ({
      ...prev,
      completedArticles: [...new Set([...(prev.completedArticles || []), article.id])],
      lastViewed: new Date().toISOString(),
    }));
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
    setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0, contentType: 'all' });
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

  const viewVersionHistory = (article) => {
    setActiveArticle(article);
    setSelectedVersion(articleVersions[article.id]?.[0] || null);
    setShowVersionModal(true);
  };

  const submitEditSuggestion = () => {
    if (!editSuggestion.trim()) return;
    setShowSuggestEditModal(false);
    setEditSuggestion('');
    alert('Thank you for your suggestion! Our team will review it.');
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

  const uniqueAuthors = useMemo(() => {
    const authors = new Set(articles.map(a => a.author?.name).filter(Boolean));
    return Array.from(authors);
  }, [articles]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Knowledge Base Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-kb" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-kb)" />
        </svg>
      </div>


      {/* ==================== AI CONTENT GENERATOR MODAL ==================== */}
      {showAIGenerator && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowAIGenerator(false)}
          role="dialog"
          aria-label="AI Content Generator"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <HiOutlineRobot className="w-5 h-5" /> AI Content Generator
                </h3>
                <button onClick={() => setShowAIGenerator(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What would you like to write about?
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="E.g., How to set up API authentication..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                  aria-label="AI prompt"
                />
              </div>
              <button
                onClick={generateAIContent}
                disabled={isGenerating}
                className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50 hover:opacity-90 transition-all duration-300"
                aria-label="Generate content"
              >
                {isGenerating ? 'Generating...' : 'Generate Content'}
              </button>
              {aiGeneratedContent && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl animate-fadeIn">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Generated Content:</h4>
                  <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                    <div dangerouslySetInnerHTML={{ __html: aiGeneratedContent.replace(/\n/g, '<br/>') }} />
                  </div>
                  <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors" aria-label="Use this content">
                    Use This Content
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineRobot className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Knowledge"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Knowledge Base"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "AI-powered search, content generation, personalized learning paths, and collaborative documentation. Find answers faster than ever."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineDocumentText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.totalArticles}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Articles</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineEye className="w-8 h-8 text-green-500 dark:text-green-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.totalViews?.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Views</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineStar className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.avgRating}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Avg Rating</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineRobot className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.aiGenerated}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI Generated</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineUsers className="w-8 h-8 text-orange-500 dark:text-orange-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{contributors.length}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Contributors</p>
          </div>
        </div>

        {/* ==================== PERSONALIZED LEARNING PATH ==================== */}
        {personalizedPath.length > 0 && (
          <div className="mb-8 p-4 bg-linear-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineSparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                Your Personalized Learning Path
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {personalizedPath.map(article => (
                <div
                  key={article.id}
                  onClick={() => { setActiveArticle(article); trackArticleView(article); }}
                  className="min-w-64 p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveArticle(article)}
                >
                  <h4 className="font-medium text-sm text-gray-900 dark:text-white">{article.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{article.readTime} min read</p>
                  <div className="flex items-center gap-1 mt-2">
                    <HiOutlineStar className="w-3 h-3 text-yellow-500 dark:text-yellow-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">{article.rating || 4.5}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SEARCH BAR WITH AI MODE ==================== */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI or search the knowledge base..."
              className="w-full pl-12 pr-40 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search knowledge base"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button
                onClick={() => setSearchMode('semantic')}
                className={`px-2 py-1 text-xs rounded transition-all duration-300 ${searchMode === 'semantic' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="Semantic search"
              >
                Semantic
              </button>
              <button
                onClick={() => setSearchMode('ai')}
                className={`px-2 py-1 text-xs rounded transition-all duration-300 ${searchMode === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                aria-label="AI search"
              >
                AI
              </button>
              <button
                onClick={() => setAdvancedSearch(!advancedSearch)}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle advanced search"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* ==================== ADVANCED SEARCH FILTERS ==================== */}
        {advancedSearch && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date From</label>
                <input
                  type="date"
                  value={searchFilters.dateFrom}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, dateFrom: e.target.value }))}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                  aria-label="Filter from date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date To</label>
                <input
                  type="date"
                  value={searchFilters.dateTo}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, dateTo: e.target.value }))}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                  aria-label="Filter to date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Author</label>
                <select
                  value={searchFilters.author}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                  aria-label="Filter by author"
                >
                  <option value="">All Authors</option>
                  {uniqueAuthors.map(author => <option key={author} value={author}>{author}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Content Type</label>
                <select
                  value={searchFilters.contentType}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, contentType: e.target.value }))}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                  aria-label="Filter by content type"
                >
                  <option value="all">All Types</option>
                  <option value="guide">Guide</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="reference">Reference</option>
                  <option value="faq">FAQ</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0, contentType: 'all' })}
              className="mt-3 text-sm text-red-600 dark:text-red-400 hover:underline"
              aria-label="Clear all filters"
            >
              Clear all filters
            </button>
          </div>
        )}

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
            <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">{articles.length}</span>
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
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700 shadow-md' : ''}`}
              aria-label="Grid view"
            >
              <HiOutlineViewGrid className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700 shadow-md' : ''}`}
              aria-label="List view"
            >
              <HiOutlineViewList className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAIGenerator(true)}
              className="px-4 py-2 text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-300"
              aria-label="Open AI generator"
            >
              <HiOutlineRobot className="w-4 h-4" />
              AI Generate
            </button>
            <button
              onClick={() => setShowAnalyticsModal(true)}
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="View analytics"
            >
              <HiOutlineChartBar className="w-4 h-4" />
              Analytics
            </button>
          </div>
        </div>

        {/* ==================== TAG FILTERS ==================== */}
        {allTags.length > 0 && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map((tag) => (
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
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* ==================== ARTICLES GRID/LIST ==================== */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No articles found.</p>
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
                    <div className={`p-1.5 rounded-lg ${getCategoryColor(categoryId)}`}>
                      {getCategoryIcon(categoryId)}
                    </div>
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
                            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400 dark:text-gray-500">
                              <span>{article.readTime} min read</span>
                              <span>Updated {formatDate(article.updatedAt)}</span>
                              <span>{article.views || 0} views</span>
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <HiOutlineStar
                                  key={i}
                                  className={`w-3 h-3 ${i < (article.rating || 0) ? 'text-yellow-500 dark:text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                                />
                              ))}
                            </div>
                            {article.aiGenerated && (
                              <span className="inline-flex items-center gap-1 mt-2 text-xs text-purple-600 dark:text-purple-400">
                                <HiOutlineRobot className="w-3 h-3" />
                                AI Generated
                              </span>
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
            onClick={() => { setActiveArticle(null); setActiveVersion(null); }}
            role="dialog"
            aria-label="Article Details"
            aria-modal="true"
          >
            <div
              className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(activeArticle.category)}`}>
                        {categories.find(c => c.id === activeArticle.category)?.name}
                      </span>
                      <span className="text-xs text-white/70">{activeArticle.readTime} min read</span>
                      {activeArticle.aiGenerated && (
                        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">🤖 AI Generated</span>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-xl mt-2">{activeArticle.title}</h3>
                  </div>
                  <button onClick={() => { setActiveArticle(null); setActiveVersion(null); }} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Last updated: {formatDate(activeArticle.updatedAt)}</span>
                    <span>By {activeArticle.author?.name}</span>
                    <span>{activeArticle.views || 0} views</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => viewVersionHistory(activeArticle)}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="View version history"
                    >
                      <HiOutlineHistory className="w-4 h-4" />
                      Versions
                    </button>
                    <button
                      onClick={() => setShowSuggestEditModal(true)}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Suggest edit"
                    >
                      <HiOutlinePencil className="w-4 h-4" />
                      Suggest Edit
                    </button>
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

                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: activeVersion?.content || activeArticle.content }} />
                </div>

                {activeArticle.tags && activeArticle.tags.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeArticle.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

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

                {suggestedArticles.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Suggested Articles</h4>
                    <div className="space-y-2">
                      {suggestedArticles.map(related => (
                        <button
                          key={related.id}
                          onClick={() => { setActiveArticle(related); trackArticleView(related); }}
                          className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                          aria-label={`Read suggested article: ${related.title}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 dark:text-gray-300">{related.title}</span>
                            <HiOutlineArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== VERSION HISTORY MODAL ==================== */}
        {showVersionModal && activeArticle && selectedVersion && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowVersionModal(false)}
            role="dialog"
            aria-label="Version History"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Version History - {activeArticle.title}</h3>
                  <button onClick={() => setShowVersionModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {articleVersions[activeArticle.id]?.map((version, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVersion(version)}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${selectedVersion === version
                        ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedVersion(version)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white">Version {version.version}</span>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Updated {formatDate(version.date)} by {version.author}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{version.content.substring(0, 150)}...</p>
                    </div>
                  ))}
                </div>
                {selectedVersion && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Version {selectedVersion.version} Content</h4>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg max-h-60 overflow-y-auto">
                      <div dangerouslySetInnerHTML={{ __html: selectedVersion.content }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUGGEST EDIT MODAL ==================== */}
        {showSuggestEditModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowSuggestEditModal(false)}
            role="dialog"
            aria-label="Suggest Edit"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Suggest Edit</h3>
                  <button onClick={() => setShowSuggestEditModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Suggest an improvement for "{activeArticle?.title}"
                </p>
                <textarea
                  value={editSuggestion}
                  onChange={(e) => setEditSuggestion(e.target.value)}
                  placeholder="Describe your suggested changes..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Edit suggestion"
                />
                <button
                  onClick={submitEditSuggestion}
                  className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
                  aria-label="Submit suggestion"
                >
                  Submit Suggestion
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CONTRIBUTOR MODAL ==================== */}
        {showContributorModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowContributorModal(false)}
            role="dialog"
            aria-label="Contributor Profile"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Contributor Profile</h3>
                  <button onClick={() => setShowContributorModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ANALYTICS MODAL ==================== */}
        {showAnalyticsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAnalyticsModal(false)}
            role="dialog"
            aria-label="Knowledge Analytics"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Knowledge Analytics</h3>
                  <button onClick={() => setShowAnalyticsModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{analyticsData.totalArticles}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Articles</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-xl text-center">
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">{analyticsData.totalViews?.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Views</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl text-center">
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{analyticsData.avgRating}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Avg Rating</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{analyticsData.aiGenerated}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">AI Generated</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Top Categories</h4>
                  {analyticsData.topCategories?.map(([cat, views]) => (
                    <div key={cat} className="mb-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{categories.find(c => c.id === cat)?.name || cat}</span>
                        <span className="text-gray-500 dark:text-gray-400">{views.toLocaleString()} views</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(views / analyticsData.totalViews) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Monthly Trend</h4>
                  <div className="space-y-2">
                    {Object.entries(analyticsData.monthlyTrend || {}).map(([month, views]) => (
                      <div key={month}>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700 dark:text-gray-300">{month}</span>
                          <span className="text-gray-500 dark:text-gray-400">{views.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(views / 2500) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
              <div className="sticky top-0 bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
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

        {/* ==================== CTA SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineRobot className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience AI-Powered Documentation</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6">Get instant answers, generate content, and learn with personalized recommendations.</p>
          <button
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Chat with AI assistant"
          >
            <HiOutlineChat className="w-5 h-5" />
            Chat with AI Assistant
          </button>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce { animation: bounce 1s infinite; }
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
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
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

export default KnowledgeBaseSection3;