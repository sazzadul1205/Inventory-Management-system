// page/frontend/Support/DocumentationSection/DocumentationSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot, } from "react-icons/ai";
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlinePrinter,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineCloudUpload,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCode,
  HiOutlineTerminal,
  HiOutlineCube,
  HiOutlineShieldCheck as ShieldIcon,
  HiOutlineBeaker,
  HiOutlineAnnotation,
  HiOutlineUsers as UsersIcon,
  HiOutlineChartBar as ChartIcon,
  HiOutlineClipboardCopy,
  HiOutlineTranslate,
} from 'react-icons/hi';
import {
  HiOutlineUserCircle,
  HiOutlinePlay as PlayIcon,
  HiOutlineQuestionMarkCircle,
  HiOutlineLink
} from 'react-icons/hi2';

const DocumentationSection3 = ({ config }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeDoc, setActiveDoc] = useState(null);
  const [activeVersion, setActiveVersion] = useState('latest');
  const [compareVersion] = useState(null);
  const [showVersionCompare, setShowVersionCompare] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState('ai');
  const [aiSearchResults, setAiSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarkedDocs, setBookmarkedDocs] = useState([]);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [recentDocs, setRecentDocs] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareDoc, setShareDoc] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);
  const [showApiExplorer, setShowApiExplorer] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [apiMethod, setApiMethod] = useState('GET');
  const [apiParams] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [showCodePlayground, setShowCodePlayground] = useState(false);
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [playgroundOutput, setPlaygroundOutput] = useState('');
  const [playgroundLanguage, setPlaygroundLanguage] = useState('javascript');
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  const [searchAnalytics, setSearchAnalytics] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [, setSuggestedEdits] = useState([]);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [editSuggestion, setEditSuggestion] = useState('');
  const [contributors, setContributors] = useState([]);
  const [showContributors, setShowContributors] = useState(false);
  const [showAITranslate, setShowAITranslate] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedContent, setTranslatedContent] = useState(null);
  const [smartTOC, setSmartTOC] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiAssistantMessage, setAiAssistantMessage] = useState('');
  const [aiAssistantResponse, setAiAssistantResponse] = useState('');
  const [aiAssistantTyping, setAiAssistantTyping] = useState(false);
  const [, setVersionHistory] = useState({});
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    fontSize: 'medium',
    theme: 'system',
    lineNumbers: true,
  });
  const contentRef = useRef(null);

  // Get data from config
  const documentation = useMemo(() => config?.documentation || [], [config]);
  const sections = config?.sections || [];
  const versions = config?.versions || ['latest', 'v1.0', 'v2.0'];
  const stats = config?.stats || [];
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
  ];

  // Build documentation tree
  const docTree = useMemo(() => {
    const tree = {};
    documentation.forEach(doc => {
      if (!tree[doc.section]) {
        tree[doc.section] = [];
      }
      tree[doc.section].push(doc);
    });
    return tree;
  }, [documentation]);

  // AI-Powered Search
  const performAISearch = useCallback((query) => {
    if (!query.trim()) return [];

    // Simulate AI semantic search with relevance scoring and contextual understanding
    const results = documentation.map(doc => {
      let relevance = 0;
      const titleMatch = doc.title?.toLowerCase().includes(query.toLowerCase());
      const contentMatch = doc.content?.toLowerCase().includes(query.toLowerCase());
      const descMatch = doc.description?.toLowerCase().includes(query.toLowerCase());
      const tagMatch = doc.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      if (titleMatch) relevance += 40;
      if (descMatch) relevance += 20;
      if (contentMatch) relevance += 15;
      if (tagMatch) relevance += 10;

      // Contextual understanding (simulated)
      if (query.includes('how to') && doc.type === 'guide') relevance += 15;
      if (query.includes('api') && doc.type === 'api') relevance += 20;
      if (query.includes('error') && doc.type === 'troubleshooting') relevance += 15;

      return { ...doc, relevance: Math.min(relevance + Math.random() * 5, 100) };
    }).filter(r => r.relevance > 30).sort((a, b) => b.relevance - a.relevance);

    return results;
  }, [documentation]);

  // Update search results when query changes
  useEffect(() => {
    if (searchQuery.length > 2) {
      if (searchMode === 'ai') {
        const results = performAISearch(searchQuery);
        setAiSearchResults(results);
        setShowAiSuggestions(true);
      }

      // Track search analytics
      const newSearch = {
        query: searchQuery,
        mode: searchMode,
        timestamp: new Date().toISOString(),
        results: aiSearchResults.length,
      };
      setSearchAnalytics(prev => [newSearch, ...prev].slice(0, 50));
      localStorage.setItem('docSearchAnalytics', JSON.stringify(searchAnalytics));
    } else {
      setShowAiSuggestions(false);
    }
  }, [searchQuery, searchMode, performAISearch, aiSearchResults.length, searchAnalytics]);

  // Generate Smart TOC from document content
  useEffect(() => {
    if (activeDoc?.content) {
      const headings = [];
      const headingRegex = /<h([1-3])[^>]*>(.*?)<\/h\1>/gi;
      let match;
      while ((match = headingRegex.exec(activeDoc.content)) !== null) {
        headings.push({
          level: parseInt(match[1]),
          text: match[2].replace(/<[^>]*>/g, ''),
          id: `heading-${headings.length}`,
        });
      }
      setSmartTOC(headings);
    }
  }, [activeDoc]);

  // Scroll spy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3');
      let current = '';
      headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.id;
        }
      });
      setActiveHeading(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AI Assistant
  const askAIAssistant = () => {
    if (!aiAssistantMessage.trim()) return;

    setAiAssistantTyping(true);
    setTimeout(() => {
      let response = '';
      const msg = aiAssistantMessage.toLowerCase();

      if (msg.includes('api') || msg.includes('endpoint')) {
        response = "I can help you with API documentation! Based on your query, you might be looking for information about authentication, rate limits, or specific endpoints. Check out our API Reference section for detailed information. Would you like me to show you an example?";
      } else if (msg.includes('code') || msg.includes('example')) {
        response = "Here's a code example in JavaScript:\n\n```javascript\nconst response = await fetch('/api/v1/endpoint', {\n  method: 'GET',\n  headers: {\n    'Authorization': 'Bearer YOUR_TOKEN',\n    'Content-Type': 'application/json'\n  }\n});\nconst data = await response.json();\nconsole.log(data);\n```\n\nWould you like an example in another language?";
      } else if (msg.includes('error') || msg.includes('troubleshoot')) {
        response = "I see you're troubleshooting. Common issues include: invalid API keys, incorrect endpoint URLs, missing required parameters, or rate limiting. Can you share more details about the specific error you're encountering?";
      } else if (msg.includes('guide') || msg.includes('tutorial')) {
        response = "We have comprehensive guides for getting started! Check out the 'Getting Started' section for setup instructions, or browse our video tutorials for visual walkthroughs. Is there a specific topic you'd like to learn about?";
      } else {
        response = "I'm your AI documentation assistant! I can help you find API references, code examples, troubleshooting guides, or explain concepts. What would you like to know?";
      }

      setAiAssistantResponse(response);
      setAiAssistantTyping(false);
    }, 1500);
  };

  // AI Translation
  const translateDocument = () => {
    if (activeDoc && selectedLanguage !== 'en') {
      const translated = `[Translated to ${languages.find(l => l.code === selectedLanguage)?.name}]\n\n${activeDoc.content.substring(0, 500)}...\n\n[Full translation would appear here in production]`;
      setTranslatedContent(translated);
      setShowAITranslate(true);
    } else {
      setTranslatedContent(null);
      setShowAITranslate(false);
    }
  };

  // Load data from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('docBookmarks');
    if (savedBookmarks) setBookmarkedDocs(JSON.parse(savedBookmarks));

    const savedFeedback = localStorage.getItem('docHelpfulFeedback');
    if (savedFeedback) setHelpfulFeedback(JSON.parse(savedFeedback));

    const savedRecent = localStorage.getItem('recentDocs');
    if (savedRecent) setRecentDocs(JSON.parse(savedRecent));

    const savedAnalytics = localStorage.getItem('docSearchAnalytics');
    if (savedAnalytics) setSearchAnalytics(JSON.parse(savedAnalytics));

    const savedContributors = localStorage.getItem('docContributors');
    if (savedContributors) setContributors(JSON.parse(savedContributors));

    const savedEdits = localStorage.getItem('docSuggestedEdits');
    if (savedEdits) setSuggestedEdits(JSON.parse(savedEdits));

    const savedPreferences = localStorage.getItem('docPreferences');
    if (savedPreferences) setUserPreferences(JSON.parse(savedPreferences));

    const savedVersionHistory = localStorage.getItem('docVersionHistory');
    if (savedVersionHistory) setVersionHistory(JSON.parse(savedVersionHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem('docBookmarks', JSON.stringify(bookmarkedDocs));
  }, [bookmarkedDocs]);

  useEffect(() => {
    localStorage.setItem('docHelpfulFeedback', JSON.stringify(helpfulFeedback));
  }, [helpfulFeedback]);

  useEffect(() => {
    localStorage.setItem('recentDocs', JSON.stringify(recentDocs));
  }, [recentDocs]);

  useEffect(() => {
    localStorage.setItem('docSearchAnalytics', JSON.stringify(searchAnalytics));
  }, [searchAnalytics]);

  useEffect(() => {
    localStorage.setItem('docPreferences', JSON.stringify(userPreferences));
  }, [userPreferences]);

  // Track document view
  const trackDocView = (doc) => {
    const updatedRecent = [doc, ...recentDocs.filter(d => d.id !== doc.id)].slice(0, 10);
    setRecentDocs(updatedRecent);
  };

  const toggleBookmark = (docId, e) => {
    e?.stopPropagation();
    if (bookmarkedDocs.includes(docId)) {
      setBookmarkedDocs(bookmarkedDocs.filter(id => id !== docId));
    } else {
      setBookmarkedDocs([...bookmarkedDocs, docId]);
    }
  };

  const markHelpful = (docId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [docId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  const shareDocHandler = (doc, e) => {
    e?.stopPropagation();
    setShareDoc(doc);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareDoc) {
      navigator.clipboard.writeText(`${window.location.origin}/docs/${shareDoc.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // API Explorer
  const executeApiCall = async () => {
    setApiLoading(true);
    setTimeout(() => {
      const mockResponse = {
        status: 200,
        data: {
          success: true,
          message: `Mock response for ${apiMethod} ${apiEndpoint}`,
          timestamp: new Date().toISOString(),
          params: apiParams,
        },
      };
      setApiResponse(mockResponse);
      setApiLoading(false);
    }, 1000);
  };

  // Code Playground
  const executePlayground = () => {
    setPlaygroundOutput('Running...');
    setTimeout(() => {
      try {
        if (playgroundLanguage === 'javascript') {
          const result = eval(playgroundCode);
          setPlaygroundOutput(String(result));
        } else {
          setPlaygroundOutput(`[${playgroundLanguage.toUpperCase()} output simulation]\n\nYour code:\n${playgroundCode}`);
        }
      } catch (error) {
        setPlaygroundOutput(`Error: ${error.message}`);
      }
    }, 500);
  };

  const submitEditSuggestion = () => {
    if (!editSuggestion.trim()) return;
    const newSuggestion = {
      id: Date.now(),
      docId: activeDoc?.id,
      docTitle: activeDoc?.title,
      suggestion: editSuggestion,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };
    setSuggestedEdits(prev => [...prev, newSuggestion]);
    setShowSuggestModal(false);
    setEditSuggestion('');
    alert('Thank you for your suggestion! Our team will review it.');
  };

  const getSectionIcon = (sectionId) => {
    const icons = {
      'getting-started': <HiOutlineSparkles className="w-5 h-5" />,
      'guides': <HiOutlineBookOpen className="w-5 h-5" />,
      'api-reference': <HiOutlineCode className="w-5 h-5" />,
      'sdk': <HiOutlineCube className="w-5 h-5" />,
      'cli': <HiOutlineTerminal className="w-5 h-5" />,
      'security': <ShieldIcon className="w-5 h-5" />,
      'integrations': <HiOutlineCloudUpload className="w-5 h-5" />,
      'faq': <HiOutlineQuestionMarkCircle className="w-5 h-5" />,
    };
    return icons[sectionId] || <HiOutlineDocumentText className="w-5 h-5" />;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const popularSearches = useMemo(() => {
    const terms = {};
    searchAnalytics.forEach(s => {
      terms[s.query] = (terms[s.query] || 0) + 1;
    });
    return Object.entries(terms).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [searchAnalytics]);

  // Font size classes
  const fontSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Documentation Premium Hub"
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-doc" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-doc)" />
        </svg>
      </div>

      {/* AI Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showAIAssistant ? (
          <button onClick={() => setShowAIAssistant(true)} className="bg-linear-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-pulse">
            <HiOutlineRobot className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-linear-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2"><HiOutlineRobot className="w-5 h-5 text-white" /><h3 className="text-white font-semibold">AI Documentation Assistant</h3></div>
              <button onClick={() => setShowAIAssistant(false)} className="text-white"><HiOutlineX className="w-5 h-5" /></button>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Ask me anything about our documentation, APIs, or code examples!</p>
              </div>
              {aiAssistantResponse && (
                <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{aiAssistantResponse}</p>
                </div>
              )}
              {aiAssistantTyping && (
                <div className="mb-4 p-3 bg-gray-100 rounded-lg">
                  <div className="flex gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} /></div>
                </div>
              )}
              <div className="flex gap-2">
                <input type="text" value={aiAssistantMessage} onChange={(e) => setAiAssistantMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && askAIAssistant()} placeholder="Ask a question..." className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button onClick={askAIAssistant} className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm">Ask</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineRobot className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Documentation"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Documentation"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{config?.description || "AI-powered search, intelligent code completion, real-time collaboration, and version comparison. The smartest way to explore our documentation."}</p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {stat.icon === 'pages' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'api' ? <HiOutlineCode className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'contributors' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineRobot className="w-5 h-5 text-blue-600" />}
                </div>
                <div><div className="text-2xl font-bold text-gray-900">{stat.value}</div><div className="text-xs text-gray-500">{stat.label}</div></div>
              </div>
            ))}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Version:</span>
            <select value={activeVersion} onChange={(e) => setActiveVersion(e.target.value)} className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 rounded-lg text-sm">
              {versions.map(version => (<option key={version} value={version}>{version === 'latest' ? 'Latest (v2.0)' : version}</option>))}
            </select>
            <button onClick={() => setShowVersionModal(true)} className="px-2 py-1 text-xs text-blue-600 hover:underline">Version History</button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowApiExplorer(!showApiExplorer)} className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${showApiExplorer ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 border'}`}><HiOutlineBeaker className="w-4 h-4" />API Explorer</button>
            <button onClick={() => setShowCodePlayground(!showCodePlayground)} className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${showCodePlayground ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 border'}`}><HiOutlineCode className="w-4 h-4" />Playground</button>
            <button onClick={() => setShowAnalytics(!showAnalytics)} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 border flex items-center gap-2"><ChartIcon className="w-4 h-4" />Analytics</button>
          </div>
        </div>

        {/* API Explorer Panel */}
        {showApiExplorer && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><HiOutlineBeaker className="w-5 h-5 text-blue-600" />API Explorer</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <select value={apiMethod} onChange={(e) => setApiMethod(e.target.value)} className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium">
                  <option value="GET">GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option>
                </select>
                <input type="text" value={apiEndpoint} onChange={(e) => setApiEndpoint(e.target.value)} placeholder="/api/v1/endpoint" className="flex-1 px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={executeApiCall} disabled={apiLoading} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50">{apiLoading ? 'Sending...' : 'Send Request'}</button>
              </div>
              {apiResponse && (<div className="mt-4"><div className="flex items-center gap-2 mb-2"><span className={`text-xs px-2 py-1 rounded ${apiResponse.status === 200 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>Status: {apiResponse.status}</span></div><pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">{JSON.stringify(apiResponse, null, 2)}</pre></div>)}
            </div>
          </div>
        )}

        {/* Code Playground Panel */}
        {showCodePlayground && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><HiOutlineCode className="w-5 h-5 text-green-600" />Code Playground</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div><div className="flex justify-between items-center mb-2"><label className="text-sm font-medium">Code Editor</label><select value={playgroundLanguage} onChange={(e) => setPlaygroundLanguage(e.target.value)} className="px-2 py-1 bg-gray-100 rounded text-sm"><option value="javascript">JavaScript</option><option value="python">Python</option><option value="curl">cURL</option></select></div><textarea value={playgroundCode} onChange={(e) => setPlaygroundCode(e.target.value)} placeholder="Write your code here..." rows={10} className="w-full px-4 py-3 bg-gray-900 text-green-400 font-mono text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" /><button onClick={executePlayground} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">Run Code <PlayIcon className="inline ml-1 w-3 h-3" /></button></div>
              <div><label className="text-sm font-medium mb-2 block">Output</label><pre className="bg-gray-900 text-gray-100 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm">{playgroundOutput || 'Run your code to see output...'}</pre></div>
            </div>
          </div>
        )}

        {/* AI Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Ask AI or search documentation..." className="w-full pl-12 pr-32 py-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button onClick={() => setSearchMode('ai')} className={`px-2 py-1 text-xs rounded ${searchMode === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}>AI Search</button>
              <button onClick={() => setSearchMode('keyword')} className={`px-2 py-1 text-xs rounded ${searchMode === 'keyword' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>Keyword</button>
            </div>
          </div>
          {showAiSuggestions && aiSearchResults.length > 0 && (
            <div className="absolute mt-2 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg border z-10">
              <div className="p-2 border-b"><p className="text-xs text-gray-500">🤖 AI-Powered Results ({aiSearchResults.length})</p></div>
              {aiSearchResults.slice(0, 5).map((result) => (
                <div key={result.id} onClick={() => { setActiveDoc(result); trackDocView(result); setSearchQuery(''); setShowAiSuggestions(false); }} className="p-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between"><p className="text-sm font-medium text-gray-900">{result.title}</p><span className="text-xs text-purple-600">{result.relevance}% match</span></div>
                  <p className="text-xs text-gray-500 mt-1">{result.description?.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          )}
          {popularSearches.length > 0 && searchQuery === '' && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center"><span className="text-xs text-gray-400">Popular:</span>{popularSearches.map(([term]) => (<button key={term} onClick={() => setSearchQuery(term)} className="text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200">{term}</button>))}</div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mb-4"><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg w-full justify-between"><span className="font-medium">Documentation Menu</span>{mobileMenuOpen ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}</button></div>

        {/* Documentation Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <div key={section.id}>
                  <button onClick={() => setActiveSection(activeSection === section.id ? null : section.id)} className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-white py-2 px-3 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-2">{getSectionIcon(section.id)}<span>{section.name}</span></div>
                    {docTree[section.id]?.length > 0 && (activeSection === section.id ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />)}
                  </button>
                  {activeSection === section.id && docTree[section.id] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {docTree[section.id].map((doc) => (
                        <button key={doc.id} onClick={() => { setActiveDoc(doc); trackDocView(doc); setMobileMenuOpen(false); }} className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors ${activeDoc?.id === doc.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                          <div className="flex items-center justify-between"><span className="line-clamp-1">{doc.title}</span>{bookmarkedDocs.includes(doc.id) && <HiOutlineBookmark className="w-3 h-3 text-yellow-500 fill-current" />}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {recentDocs.length > 0 && (<div className="pt-4 border-t"><p className="text-xs font-semibold text-gray-400 uppercase mb-2">Recently Viewed</p><div className="space-y-1">{recentDocs.slice(0, 5).map((doc) => (<button key={doc.id} onClick={() => { setActiveDoc(doc); trackDocView(doc); }} className="w-full text-left py-1.5 px-3 rounded-lg text-xs text-gray-500 hover:bg-gray-50">{doc.title}</button>))}</div></div>)}
              <div className="pt-4 border-t"><button onClick={() => setShowContributors(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><UsersIcon className="w-4 h-4" />View Contributors</button></div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0" ref={contentRef}>
            {searchQuery && aiSearchResults.length > 0 ? (
              <div className="space-y-4"><h3 className="text-lg font-semibold mb-4">AI Search Results ({aiSearchResults.length})</h3>{aiSearchResults.map((doc) => (<div key={doc.id} onClick={() => { setActiveDoc(doc); trackDocView(doc); setSearchQuery(''); setShowAiSuggestions(false); }} className="p-4 bg-white dark:bg-gray-800 rounded-xl border hover:shadow-md transition-all cursor-pointer"><div className="flex items-start justify-between"><div><h4 className="font-semibold">{doc.title}</h4><p className="text-sm text-gray-500 mt-1">{doc.description}</p><div className="flex items-center gap-2 mt-2"><span className="text-xs text-purple-600">AI Relevance: {doc.relevance}%</span>{doc.tags?.slice(0, 3).map((tag) => (<span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{tag}</span>))}</div></div><HiOutlineArrowRight className="w-5 h-5 text-gray-400" /></div></div>))}</div>
            ) : activeDoc ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="flex items-center gap-2 mb-2"><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{sections.find(s => s.id === activeDoc.section)?.name}</span><span className="text-xs text-gray-400">Updated {formatDate(activeDoc.updatedAt)}</span><span className="text-xs text-purple-600">v{activeDoc.version || activeVersion}</span></div><h1 className="text-2xl md:text-3xl font-bold">{activeDoc.title}</h1></div>
                    <div className="flex gap-2">
                      <button onClick={() => setShowAITranslate(!showAITranslate)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-purple-600"><HiOutlineTranslate className="w-5 h-5" /></button>
                      <button onClick={(e) => toggleBookmark(activeDoc.id, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-yellow-500"><HiOutlineBookmark className={`w-5 h-5 ${bookmarkedDocs.includes(activeDoc.id) ? 'fill-current text-yellow-500' : ''}`} /></button>
                      <button onClick={() => window.print()} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-blue-600"><HiOutlinePrinter className="w-5 h-5" /></button>
                      <button onClick={(e) => shareDocHandler(activeDoc, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-blue-600"><HiOutlineShare className="w-5 h-5" /></button>
                      <button onClick={() => setShowSuggestModal(true)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-green-600"><HiOutlineAnnotation className="w-5 h-5" /></button>
                    </div>
                  </div>
                  {/* AI Translation Panel */}
                  {showAITranslate && (
                    <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><HiOutlineTranslate className="w-4 h-4 text-purple-600" /><span className="text-sm font-medium">AI Translation</span></div><select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="px-2 py-1 bg-white dark:bg-gray-700 border rounded text-sm"><option value="en">English</option><option value="es">Spanish</option><option value="fr">French</option><option value="de">German</option><option value="zh">Chinese</option></select><button onClick={translateDocument} className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Translate</button></div>
                      {translatedContent && (<div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded-lg"><p className="text-sm text-gray-700 dark:text-gray-300">{translatedContent}</p></div>)}
                    </div>
                  )}
                </div>
                {/* Smart Table of Contents */}
                {smartTOC.length > 0 && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b">
                    <p className="text-xs font-semibold text-gray-500 mb-2">On this page</p>
                    <div className="flex flex-wrap gap-2">
                      {smartTOC.map((heading) => (
                        <button key={heading.id} className={`text-xs px-2 py-1 rounded-full transition-colors ${activeHeading === heading.id ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-200'}`}>
                          {heading.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className={`p-6 prose dark:prose-invert max-w-none ${fontSizeClasses[userPreferences.fontSize]}`}>
                  <div dangerouslySetInnerHTML={{ __html: activeDoc.content }} />
                  {activeDoc.codeExamples && (<div className="mt-6"><h3>Code Examples</h3>{activeDoc.codeExamples.map((example, idx) => (<div key={idx} className="relative group my-4"><div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><button onClick={() => copyCode(example.code, idx)} className="px-2 py-1 bg-gray-700 text-white text-xs rounded flex items-center gap-1">{copiedCode === idx ? <><HiOutlineCheckCircle className="w-3 h-3" /> Copied!</> : <><HiOutlineClipboardCopy className="w-3 h-3" /> Copy</>}</button></div><pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{example.code}</code></pre></div>))}</div>)}
                  {activeDoc.endpoints && (<div className="mt-6"><h3>API Endpoints</h3><div className="space-y-4">{activeDoc.endpoints.map((endpoint, idx) => (<div key={idx} className="border rounded-lg overflow-hidden"><div className="flex items-center gap-2 p-3 bg-gray-50 border-b"><span className={`text-xs font-mono font-bold px-2 py-1 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{endpoint.method}</span><code className="text-sm font-mono">{endpoint.path}</code><button onClick={() => { setApiMethod(endpoint.method); setApiEndpoint(endpoint.path); setShowApiExplorer(true); }} className="ml-auto text-xs text-blue-600 hover:underline">Try it →</button></div><div className="p-3"><p className="text-sm text-gray-600 mb-2">{endpoint.description}</p></div></div>))}</div></div>)}
                </div>
                <div className="p-6 border-t bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">Was this page helpful?</p>
                  <div className="flex gap-3"><button onClick={() => markHelpful(activeDoc.id, true)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeDoc.id]?.helpful === true ? 'bg-green-100 text-green-700' : 'bg-white text-gray-700 hover:bg-green-50'}`}><HiOutlineThumbUp className="w-4 h-4" />Yes</button><button onClick={() => markHelpful(activeDoc.id, false)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeDoc.id]?.helpful === false ? 'bg-red-100 text-red-700' : 'bg-white text-gray-700 hover:bg-red-50'}`}><HiOutlineThumbDown className="w-4 h-4" />No</button></div>
                </div>
                {activeDoc.relatedDocs && activeDoc.relatedDocs.length > 0 && (<div className="p-6 border-t"><h4 className="text-sm font-semibold mb-3">Related Documentation</h4><div className="flex flex-wrap gap-2">{activeDoc.relatedDocs.map((relatedId) => { const related = documentation.find(d => d.id === relatedId); if (!related) return null; return (<button key={relatedId} onClick={() => { setActiveDoc(related); trackDocView(related); }} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">{related.title}</button>); })}</div></div>)}
              </div>
            ) : (
              <div className="text-center py-12"><HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 mb-4" /><p className="text-gray-500">Select a document from the sidebar to view its content.</p></div>
            )}
          </main>
        </div>

        {/* Version Comparison Modal */}
        {showVersionCompare && compareVersion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowVersionCompare(false)}>
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Version Comparison</h3><button onClick={() => setShowVersionCompare(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="border rounded-lg overflow-hidden"><div className="bg-gray-100 p-3 font-semibold">Version {compareVersion.version1?.version}</div><div className="p-4 prose max-w-none"><div dangerouslySetInnerHTML={{ __html: compareVersion.version1?.content?.substring(0, 500) || '' }} /></div></div>
                <div className="border rounded-lg overflow-hidden"><div className="bg-gray-100 p-3 font-semibold">Version {compareVersion.version2?.version}</div><div className="p-4 prose max-w-none"><div dangerouslySetInnerHTML={{ __html: compareVersion.version2?.content?.substring(0, 500) || '' }} /></div></div>
              </div>
            </div>
          </div>
        )}

        {/* Version History Modal */}
        {showVersionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowVersionModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Version History</h3><button onClick={() => setShowVersionModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="space-y-3">{versions.map((version) => (<div key={version} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="font-medium">{version === 'latest' ? 'Latest (v2.0)' : version}</span><button onClick={() => { setActiveVersion(version); setShowVersionModal(false); }} className="px-3 py-1 text-sm bg-blue-600 text-white rounded">View</button></div>))}</div></div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalytics && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalytics(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Search Analytics</h3><button onClick={() => setShowAnalytics(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="mb-6"><h4 className="font-semibold mb-3">Popular Search Terms</h4><div className="space-y-2">{popularSearches.map(([term, count]) => (<div key={term} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span className="text-sm">{term}</span><span className="text-xs text-gray-500">{count} searches</span></div>))}</div></div><div><h4 className="font-semibold mb-3">Recent Searches</h4><div className="space-y-2">{searchAnalytics.slice(0, 10).map((search, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span className="text-sm">{search.query}</span><span className="text-xs text-gray-500">{new Date(search.timestamp).toLocaleDateString()}</span><span className="text-xs text-purple-600">{search.mode}</span></div>))}</div></div></div>
            </div>
          </div>
        )}

        {/* Contributors Modal */}
        {showContributors && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowContributors(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Documentation Contributors</h3><button onClick={() => setShowContributors(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="space-y-3">{contributors.map((contributor, idx) => (<div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUserCircle className="w-6 h-6 text-blue-600" /></div><div><p className="font-medium">{contributor.name}</p><p className="text-xs text-gray-500">{contributor.role} • {contributor.contributions} contributions</p></div></div>))}</div></div>
            </div>
          </div>
        )}

        {/* Suggest Edit Modal */}
        {showSuggestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSuggestModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Suggest an Edit</h3><button onClick={() => setShowSuggestModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-3">Suggest an improvement for "{activeDoc?.title}"</p><textarea value={editSuggestion} onChange={(e) => setEditSuggestion(e.target.value)} placeholder="Describe your suggested changes..." rows="5" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" /><button onClick={submitEditSuggestion} className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold">Submit Suggestion</button></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareDoc && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}><div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Document</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareDoc.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareDoc.title)}&body=${encodeURIComponent(`${shareDoc.title}\n\n${window.location.origin}/docs/${shareDoc.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineRobot className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Experience AI-Powered Documentation</h3><p className="text-blue-100 mb-6">Get instant answers, intelligent search, and interactive code examples.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Try AI Assistant</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-bounce { animation: bounce 1s infinite; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .prose { max-width: none; }
        .prose pre { background-color: #1a1a2e; color: #e0e0e0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; }
        .prose code { font-size: 0.875em; }
      `}</style>
    </section>
  );
};

export default DocumentationSection3;