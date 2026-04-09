// page/frontend/Support/KnowledgeBaseSection/KnowledgeBaseSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot, } from "react-icons/ai";
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
  HiOutlineSparkles as SparklesIcon,
} from 'react-icons/hi';
import { HiOutlineEye, HiOutlineLink, HiOutlineUserCircle, } from 'react-icons/hi2';
import { MdOutlineHistory as HiOutlineHistory, } from "react-icons/md";

const KnowledgeBaseSection3 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeVersion, setActiveVersion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState('semantic'); // semantic, keyword, ai
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    dateFrom: '',
    dateTo: '',
    author: '',
    minRating: 0,
    contentType: 'all',
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
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiGeneratedContent, setAiGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState([]);
  const [newAiMessage, setNewAiMessage] = useState('');
  const [aiChatTyping, setAiChatTyping] = useState(false);
  const [personalizedPath, setPersonalizedPath] = useState([]);
  const [learningProgress, setLearningProgress] = useState({});
  const [, setShowPathModal] = useState(false);
  const [, setSuggestedEdits] = useState([]);
  const [showSuggestEditModal, setShowSuggestEditModal] = useState(false);
  const [editSuggestion, setEditSuggestion] = useState('');
  const chatContainerRef = useRef(null);

  // Get data from config
  const categories = config?.categories || [];
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
    // Simulate AI-powered semantic search
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
    // Simulate AI generation
    setTimeout(() => {
      const generated = `# ${aiPrompt}\n\n## Introduction\nThis is AI-generated content about ${aiPrompt}. The knowledge base uses advanced AI to help create comprehensive documentation.\n\n## Key Points\n- Point 1 about ${aiPrompt}\n- Point 2 about ${aiPrompt}\n- Point 3 about ${aiPrompt}\n\n## Conclusion\nThis content was generated by AI to assist in creating documentation. Please review and edit as needed.`;
      setAiGeneratedContent(generated);
      setIsGenerating(false);
    }, 2000);
  };

  // AI Chatbot for knowledge base
  const sendAiChatMessage = () => {
    if (!newAiMessage.trim()) return;

    const userMessage = { id: Date.now(), text: newAiMessage, sender: 'user', timestamp: new Date().toISOString() };
    setAiChatMessages(prev => [...prev, userMessage]);
    setNewAiMessage('');
    setAiChatTyping(true);

    setTimeout(() => {
      let response = '';
      const msg = newAiMessage.toLowerCase();
      if (msg.includes('how to') || msg.includes('guide')) {
        response = "I can help you find guides! Check out our 'Getting Started' category for step-by-step tutorials. Is there a specific feature you'd like to learn about?";
      } else if (msg.includes('error') || msg.includes('issue')) {
        response = "I'm sorry you're experiencing an issue. Please check our Troubleshooting section, or describe the problem in more detail so I can help better.";
      } else if (msg.includes('api') || msg.includes('integration')) {
        response = "Our API documentation is comprehensive. You can find endpoint references, authentication guides, and code examples in the API Reference section.";
      } else {
        response = "I'm here to help! You can ask me about documentation, guides, troubleshooting, or specific features. What would you like to know?";
      }
      const agentMessage = { id: Date.now() + 1, text: response, sender: 'ai', timestamp: new Date().toISOString() };
      setAiChatMessages(prev => [...prev, agentMessage]);
      setAiChatTyping(false);
    }, 1000);
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

  // Get popular articles
  useEffect(() => {
    const popular = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    setPopularArticles(popular);
  }, [articles]);

  // Generate analytics
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
      monthlyTrend: { 'Jan': 1200, 'Feb': 1350, 'Mar': 1500, 'Apr': 1680, 'May': 1820, 'Jun': 2100 },
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

  // Load data from localStorage
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
    setHelpfulFeedback(prev => ({ ...prev, [articleId]: { helpful: isHelpful, timestamp: new Date().toISOString() } }));
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
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
    setActiveVersion(articleVersions[article.id]?.[0] || null);
  };

  const submitEditSuggestion = () => {
    if (!editSuggestion.trim()) return;
    setSuggestedEdits(prev => [...prev, { id: Date.now(), articleId: activeArticle?.id, suggestion: editSuggestion, status: 'pending', date: new Date().toISOString() }]);
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

  const uniqueAuthors = useMemo(() => {
    const authors = new Set(articles.map(a => a.author?.name).filter(Boolean));
    return Array.from(authors);
  }, [articles]);

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden" role="region" aria-label="Knowledge Base Premium Hub">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="circuit-pattern-kb" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" /><circle cx="20" cy="20" r="2" fill="#9CA3AF" /><circle cx="80" cy="20" r="2" fill="#9CA3AF" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-kb)" />
        </svg>
      </div>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showAIChat ? (
          <button onClick={() => setShowAIChat(true)} className="bg-linear-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-pulse">
            <HiOutlineRobot className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2"><HiOutlineRobot className="w-5 h-5 text-white" /><h3 className="text-white font-semibold">KB Assistant</h3><span className="text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">AI</span></div>
              <button onClick={() => setShowAIChat(false)} className="text-white"><HiOutlineX className="w-5 h-5" /></button>
            </div>
            <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-3">
              {aiChatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800'}`}>
                    {msg.sender === 'ai' && <div className="flex items-center gap-1 mb-1"><HiOutlineRobot className="w-3 h-3" /><span className="text-xs font-semibold">AI Assistant</span></div>}
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
              {aiChatTyping && (<div className="flex justify-start"><div className="bg-gray-100 p-3 rounded-xl"><div className="flex gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} /></div></div></div>)}
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2"><input type="text" value={newAiMessage} onChange={(e) => setNewAiMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendAiChatMessage()} placeholder="Ask about documentation..." className="flex-1 px-3 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" /><button onClick={sendAiChatMessage} className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm">Send</button></div>
            </div>
          </div>
        )}
      </div>

      {/* AI Content Generator Modal */}
      {showAIGenerator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAIGenerator(false)}>
          <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">🤖 AI Content Generator</h3><button onClick={() => setShowAIGenerator(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
            <div className="p-6">
              <div className="mb-4"><label className="block text-sm font-medium mb-2">What would you like to write about?</label><textarea value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} placeholder="E.g., How to set up API authentication..." rows="3" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <button onClick={generateAIContent} disabled={isGenerating} className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50">{isGenerating ? 'Generating...' : 'Generate Content'}</button>
              {aiGeneratedContent && (<div className="mt-4 p-4 bg-gray-50 rounded-xl"><h4 className="font-semibold mb-2">Generated Content:</h4><div className="prose prose-sm max-w-none"><div dangerouslySetInnerHTML={{ __html: aiGeneratedContent.replace(/\n/g, '<br/>') }} /></div><button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Use This Content</button></div>)}
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse"><HiOutlineRobot className="w-4 h-4" /><span className="text-sm font-medium">{config?.badge || "AI-Powered Knowledge"}</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">{config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Knowledge Base"}</span></h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{config?.description || "AI-powered search, content generation, personalized learning paths, and collaborative documentation. Find answers faster than ever."}</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border"><div className="flex items-center justify-between"><HiOutlineDocumentText className="w-8 h-8 text-blue-500" /><span className="text-2xl font-bold">{analyticsData.totalArticles}</span></div><p className="text-sm text-gray-500 mt-1">Total Articles</p></div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border"><div className="flex items-center justify-between"><HiOutlineEye className="w-8 h-8 text-green-500" /><span className="text-2xl font-bold">{analyticsData.totalViews?.toLocaleString()}</span></div><p className="text-sm text-gray-500 mt-1">Total Views</p></div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border"><div className="flex items-center justify-between"><HiOutlineStar className="w-8 h-8 text-yellow-500" /><span className="text-2xl font-bold">{analyticsData.avgRating}</span></div><p className="text-sm text-gray-500 mt-1">Avg Rating</p></div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border"><div className="flex items-center justify-between"><HiOutlineRobot className="w-8 h-8 text-purple-500" /><span className="text-2xl font-bold">{analyticsData.aiGenerated}</span></div><p className="text-sm text-gray-500 mt-1">AI Generated</p></div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border"><div className="flex items-center justify-between"><HiOutlineUsers className="w-8 h-8 text-orange-500" /><span className="text-2xl font-bold">{contributors.length}</span></div><p className="text-sm text-gray-500 mt-1">Contributors</p></div>
        </div>

        {/* Personalized Learning Path */}
        {personalizedPath.length > 0 && (
          <div className="mb-8 p-4 bg-linear-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
            <div className="flex items-center justify-between mb-3"><h3 className="font-semibold flex items-center gap-2"><SparklesIcon className="w-5 h-5 text-green-600" />Your Personalized Learning Path</h3><button onClick={() => setShowPathModal(true)} className="text-sm text-blue-600">View All →</button></div>
            <div className="flex gap-4 overflow-x-auto pb-2">{personalizedPath.map(article => (<div key={article.id} onClick={() => { setActiveArticle(article); trackArticleView(article); }} className="min-w-64 p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:shadow-md transition-all"><h4 className="font-medium text-sm">{article.title}</h4><p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p><div className="flex items-center gap-1 mt-2"><HiOutlineStar className="w-3 h-3 text-yellow-500" /><span className="text-xs">{article.rating || 4.5}</span></div></div>))}</div>
          </div>
        )}

        {/* Search Bar with AI Mode */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Ask AI or search the knowledge base..." className="w-full pl-12 pr-32 py-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button onClick={() => setSearchMode('semantic')} className={`px-2 py-1 text-xs rounded ${searchMode === 'semantic' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>Semantic</button>
              <button onClick={() => setSearchMode('ai')} className={`px-2 py-1 text-xs rounded ${searchMode === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}>AI</button>
              <button onClick={() => setAdvancedSearch(!advancedSearch)} className="px-3 py-1 text-xs bg-gray-100 rounded">Filter</button>
            </div>
          </div>
        </div>

        {/* Advanced Search Filters */}
        {advancedSearch && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Date From</label><input type="date" value={searchFilters.dateFrom} onChange={(e) => setSearchFilters(prev => ({ ...prev, dateFrom: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Date To</label><input type="date" value={searchFilters.dateTo} onChange={(e) => setSearchFilters(prev => ({ ...prev, dateTo: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Author</label><select value={searchFilters.author} onChange={(e) => setSearchFilters(prev => ({ ...prev, author: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg"><option value="">All Authors</option>{uniqueAuthors.map(author => <option key={author} value={author}>{author}</option>)}</select></div>
              <div><label className="block text-sm font-medium mb-1">Content Type</label><select value={searchFilters.contentType} onChange={(e) => setSearchFilters(prev => ({ ...prev, contentType: e.target.value }))} className="w-full px-3 py-2 bg-gray-50 border rounded-lg"><option value="all">All Types</option><option value="guide">Guide</option><option value="tutorial">Tutorial</option><option value="reference">Reference</option><option value="faq">FAQ</option></select></div>
            </div>
            <button onClick={() => setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0, contentType: 'all' })} className="mt-3 text-sm text-red-600 hover:underline">Clear all filters</button>
          </div>
        )}

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700'}`}><HiOutlineCollection className="w-4 h-4" />All<span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">{articles.length}</span></button>
          {categories.map((category) => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{getCategoryIcon(category.id)}{category.name}<span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>{articles.filter(a => a.category === category.id).length}</span></button>))}
        </div>

        {/* View Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2"><button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button><button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button></div>
          <div className="flex gap-2"><button onClick={() => setShowAIGenerator(true)} className="px-4 py-2 text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center gap-2"><HiOutlineRobot className="w-4 h-4" />AI Generate</button><button onClick={() => setShowAnalyticsModal(true)} className="px-4 py-2 text-sm bg-gray-100 rounded-lg flex items-center gap-2"><HiOutlineChartBar className="w-4 h-4" />Analytics</button></div>
        </div>

        {/* Tag Filters */}
        {allTags.length > 0 && (<div className="mb-8 p-4 bg-gray-50 rounded-xl"><h3 className="text-sm font-medium mb-3">Popular Tags</h3><div className="flex flex-wrap gap-2">{allTags.slice(0, 10).map((tag) => (<button key={tag} onClick={() => toggleTag(tag)} className={`px-3 py-1 rounded-full text-xs font-medium ${selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>{tag}</button>))}{selectedTags.length > 0 && <button onClick={() => setSelectedTags([])} className="px-3 py-1 rounded-full text-xs text-red-600">Clear</button>}</div></div>)}

        {/* Articles Grid/List */}
        {filteredArticles.length === 0 ? (<div className="text-center py-12"><HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 mb-4" /><p className="text-gray-500">No articles found.</p><button onClick={() => { setSearchQuery(''); setActiveCategory('all'); setSelectedTags([]); setSearchFilters({ dateFrom: '', dateTo: '', author: '', minRating: 0, contentType: 'all' }); }} className="mt-4 text-blue-600">Clear all filters</button></div>) : viewMode === 'grid' ? (
          <div className="space-y-12 mb-12">
            {Object.entries(groupedArticles).map(([categoryId, categoryArticles]) => {
              const category = categories.find(c => c.id === categoryId);
              if (!category || categoryArticles.length === 0) return null;
              return (<div key={categoryId}><div className="flex items-center gap-2 mb-4 pb-2 border-b"><div className={`p-1.5 rounded-lg ${getCategoryColor(categoryId)}`}>{getCategoryIcon(categoryId)}</div><h3 className="text-lg font-semibold">{category.name}</h3><span className="text-sm text-gray-500">({categoryArticles.length} articles)</span></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{categoryArticles.map((article) => (<div key={article.id} onClick={() => { setActiveArticle(article); trackArticleView(article); }} className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer"><div className="flex items-start justify-between"><div className="flex-1"><h4 className="font-semibold group-hover:text-blue-600">{article.title}</h4><p className="text-sm text-gray-500 mt-1 line-clamp-2">{article.description}</p><div className="flex items-center gap-3 mt-3 text-xs text-gray-400"><span>{article.readTime} min read</span><span>Updated {formatDate(article.updatedAt)}</span><span>{article.views || 0} views</span></div><div className="flex items-center gap-1 mt-2">{[...Array(5)].map((_, i) => (<HiOutlineStar key={i} className={`w-3 h-3 ${i < (article.rating || 0) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />))}</div>{article.aiGenerated && <span className="inline-flex items-center gap-1 mt-2 text-xs text-purple-600"><HiOutlineRobot className="w-3 h-3" />AI Generated</span>}</div><button onClick={(e) => toggleBookmark(article.id, e)} className="ml-2 p-1.5 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500' : ''}`} /></button></div></div>))}</div></div>);
            })}
          </div>
        ) : (
          <div className="space-y-3 mb-12">
            {filteredArticles.map((article) => (<div key={article.id} onClick={() => { setActiveArticle(article); trackArticleView(article); }} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer"><div className="flex items-center gap-4 flex-1"><div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(article.category)}`}>{getCategoryIcon(article.category)}</div><div className="flex-1"><h4 className="font-semibold">{article.title}</h4><p className="text-sm text-gray-500 line-clamp-1">{article.description}</p></div><div className="flex items-center gap-4 text-xs text-gray-400"><span>{article.readTime} min read</span><span>{article.views || 0} views</span></div></div><div className="flex items-center gap-2"><button onClick={(e) => toggleBookmark(article.id, e)} className="p-1.5 rounded-lg text-gray-400 hover:text-yellow-500"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-current text-yellow-500' : ''}`} /></button><HiOutlineArrowRight className="w-4 h-4 text-gray-400" /></div></div>))}
          </div>
        )}

        {/* Article Detail Modal */}
        {activeArticle && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => { setActiveArticle(null); setActiveVersion(null); }}><div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}><div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><div><div className="flex items-center gap-2"><span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(activeArticle.category)}`}>{categories.find(c => c.id === activeArticle.category)?.name}</span><span className="text-xs text-white/70">{activeArticle.readTime} min read</span>{activeArticle.aiGenerated && <span className="text-xs bg-purple-500/50 px-2 py-1 rounded-full">🤖 AI Generated</span>}</div><h3 className="text-white font-bold text-xl mt-2">{activeArticle.title}</h3></div><button onClick={() => { setActiveArticle(null); setActiveVersion(null); }} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="flex items-center justify-between pb-4 mb-4 border-b"><div className="flex items-center gap-4 text-sm text-gray-500"><span>Last updated: {formatDate(activeArticle.updatedAt)}</span><span>By {activeArticle.author?.name}</span><span>{activeArticle.views || 0} views</span></div><div className="flex gap-2"><button onClick={() => viewVersionHistory(activeArticle)} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg flex items-center gap-1"><HiOutlineHistory className="w-4 h-4" />Versions</button><button onClick={() => setShowSuggestEditModal(true)} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg flex items-center gap-1"><HiOutlinePencil className="w-4 h-4" />Suggest Edit</button><button onClick={() => printArticleHandler(activeArticle)} className="p-2 rounded-lg bg-gray-100"><HiOutlinePrinter className="w-4 h-4" /></button><button onClick={(e) => shareArticleHandler(activeArticle, e)} className="p-2 rounded-lg bg-gray-100"><HiOutlineShare className="w-4 h-4" /></button><button onClick={(e) => toggleBookmark(activeArticle.id, e)} className="p-2 rounded-lg bg-gray-100"><HiOutlineBookmark className={`w-4 h-4 ${bookmarkedArticles.includes(activeArticle.id) ? 'fill-current text-yellow-500' : ''}`} /></button></div></div><div className="prose dark:prose-invert max-w-none"><div dangerouslySetInnerHTML={{ __html: activeVersion?.content || activeArticle.content }} /></div>{activeArticle.tags && (<div className="mt-6 pt-4 border-t"><h4 className="text-sm font-semibold mb-2">Tags</h4><div className="flex flex-wrap gap-2">{activeArticle.tags.map(tag => (<span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{tag}</span>))}</div></div>)}<div className="mt-6 pt-4 border-t"><p className="text-sm text-gray-600 mb-3">Was this article helpful?</p><div className="flex gap-3"><button onClick={() => markHelpful(activeArticle.id, true)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeArticle.id]?.helpful === true ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-green-50'}`}><HiOutlineThumbUp className="w-4 h-4" />Yes</button><button onClick={() => markHelpful(activeArticle.id, false)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeArticle.id]?.helpful === false ? 'bg-red-100 text-red-700' : 'bg-gray-100 hover:bg-red-50'}`}><HiOutlineThumbDown className="w-4 h-4" />No</button></div></div>{suggestedArticles.length > 0 && (<div className="mt-6 pt-4 border-t"><h4 className="text-sm font-semibold mb-3">Suggested Articles</h4><div className="space-y-2">{suggestedArticles.map(related => (<button key={related.id} onClick={() => { setActiveArticle(related); trackArticleView(related); }} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100"><div className="flex items-center justify-between"><span className="text-sm">{related.title}</span><HiOutlineArrowRight className="w-4 h-4 text-gray-400" /></div></button>))}</div></div>)}</div></div></div>)}

        {/* Suggest Edit Modal */}
        {showSuggestEditModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSuggestEditModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Suggest Edit</h3><button onClick={() => setShowSuggestEditModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-3">Suggest an improvement for "{activeArticle?.title}"</p><textarea value={editSuggestion} onChange={(e) => setEditSuggestion(e.target.value)} placeholder="Describe your suggested changes..." rows="5" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button onClick={submitEditSuggestion} className="w-full mt-4 py-3 bg-blue-600 text-white rounded-xl font-semibold">Submit Suggestion</button></div></div></div>)}

        {/* Contributors Modal */}
        {showContributorModal && selectedContributor && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowContributorModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Contributor Profile</h3><button onClick={() => setShowContributorModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 text-center"><div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUserCircle className="w-16 h-16 text-blue-600" /></div><h4 className="text-xl font-bold mb-1">{selectedContributor.name}</h4><p className="text-sm text-gray-500 mb-2">{selectedContributor.role}</p><div className="flex justify-center gap-4 mb-4"><div className="text-center"><div className="text-2xl font-bold text-blue-600">{selectedContributor.articles}</div><div className="text-xs text-gray-500">Articles</div></div><div className="text-center"><div className="text-2xl font-bold text-green-600">{selectedContributor.edits}</div><div className="text-xs text-gray-500">Edits</div></div><div className="text-center"><div className="text-2xl font-bold text-yellow-600">{selectedContributor.rating}</div><div className="text-xs text-gray-500">Rating</div></div></div><p className="text-gray-600 text-sm">{selectedContributor.bio}</p><div className="mt-4 flex flex-wrap gap-1 justify-center">{selectedContributor.expertise?.map(exp => (<span key={exp} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{exp}</span>))}</div></div></div></div>)}

        {/* Analytics Modal */}
        {showAnalyticsModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalyticsModal(false)}><div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Knowledge Analytics</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="grid grid-cols-2 gap-4 mb-6"><div className="p-4 bg-blue-50 rounded-xl text-center"><p className="text-2xl font-bold text-blue-600">{analyticsData.totalArticles}</p><p className="text-sm text-gray-500">Total Articles</p></div><div className="p-4 bg-green-50 rounded-xl text-center"><p className="text-2xl font-bold text-green-600">{analyticsData.totalViews?.toLocaleString()}</p><p className="text-sm text-gray-500">Total Views</p></div><div className="p-4 bg-yellow-50 rounded-xl text-center"><p className="text-2xl font-bold text-yellow-600">{analyticsData.avgRating}</p><p className="text-sm text-gray-500">Avg Rating</p></div><div className="p-4 bg-purple-50 rounded-xl text-center"><p className="text-2xl font-bold text-purple-600">{analyticsData.aiGenerated}</p><p className="text-sm text-gray-500">AI Generated</p></div></div><div className="mb-6"><h4 className="font-semibold mb-3">Top Categories</h4>{analyticsData.topCategories?.map(([cat, views]) => (<div key={cat} className="mb-2"><div className="flex justify-between text-sm"><span>{categories.find(c => c.id === cat)?.name || cat}</span><span>{views.toLocaleString()} views</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(views / analyticsData.totalViews) * 100}%` }} /></div></div>))}</div><div><h4 className="font-semibold mb-3">Monthly Trend</h4><div className="space-y-2">{Object.entries(analyticsData.monthlyTrend || {}).map(([month, views]) => (<div key={month}><div className="flex justify-between text-sm"><span>{month}</span><span>{views.toLocaleString()}</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: `${(views / 2500) * 100}%` }} /></div></div>))}</div></div></div></div></div>)}

        {/* Share Modal */}
        {showShareModal && shareArticle && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}><div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Article</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareArticle.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareArticle.title)}&body=${encodeURIComponent(`${shareArticle.title}\n\n${window.location.origin}/knowledge-base/${shareArticle.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div></div></div>)}

        {/* Print Modal */}
        {showPrintModal && printArticle && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}><div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4 flex items-center justify-between"><h3 className="font-bold">Print Preview</h3><button onClick={() => setShowPrintModal(false)}><HiOutlineX className="w-5 h-5" /></button></div><div className="p-6"><div className="prose max-w-none"><h1>{printArticle.title}</h1><div dangerouslySetInnerHTML={{ __html: printArticle.content }} /></div><div className="mt-6 flex justify-center"><button onClick={() => window.print()} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Print</button></div></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineRobot className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Experience AI-Powered Documentation</h3><p className="text-blue-100 mb-6">Get instant answers, generate content, and learn with personalized recommendations.</p><button onClick={() => setShowAIChat(true)} className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Chat with AI Assistant</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-bounce { animation: bounce 1s infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .prose { max-width: none; }
      `}</style>
    </section>
  );
};

export default KnowledgeBaseSection3;