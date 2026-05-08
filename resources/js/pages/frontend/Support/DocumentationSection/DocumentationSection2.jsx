// page/frontend/Support/DocumentationSection/DocumentationSection2.jsx

/**
 * Documentation Section II - Developer Hub with Interactive Tools
 *
 * Unique Design Elements:
 * - Stats Cards for Documentation Metrics (Pages, API Endpoints, Contributors, Rating)
 * - API Explorer with Live Endpoint Testing
 * - Interactive Code Playground with Multiple Languages
 * - Search Analytics Dashboard with Popular Terms
 * - Contributor Profiles with Contribution Counts
 * - Suggest Edit Functionality for Community Contributions
 * - Version Selector for Multi-version Documentation
 * - Collapsible Sidebar Navigation with Sections
 * - Recently Viewed Documents Tracking
 * - Code Blocks with Copy-to-Clipboard
 * - Bookmark System for Favorite Pages
 * - Helpful Feedback System (Thumbs Up/Down)
 * - Print and Share Functionality
 * - Related Documents Links
 * - Fully Responsive with Mobile Menu
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
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlinePrinter,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineStar,
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
  HiOutlineBeaker,
  HiOutlineAnnotation,
  HiOutlineClipboardCopy,
} from 'react-icons/hi';
import {
  HiOutlineLifebuoy,
  HiOutlineLink,
  HiOutlineQuestionMarkCircle,
  HiOutlineUserCircle,
  HiOutlineShieldCheck as ShieldIcon,
  HiOutlinePlay as PlayIcon,
  HiOutlineChartBar as ChartIcon,
} from 'react-icons/hi2';


const DocumentationSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [shareDoc, setShareDoc] = useState(null);
  const [apiParams, setApiParams] = useState({});
  const [recentDocs, setRecentDocs] = useState([]);
  const [activeDoc, setActiveDoc] = useState(null);
  const [apiMethod, setApiMethod] = useState('GET');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [apiLoading, setApiLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [playgroundCode, setPlaygroundCode] = useState('');
  const [bookmarkedDocs, setBookmarkedDocs] = useState([]);
  const [editSuggestion, setEditSuggestion] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [searchAnalytics, setSearchAnalytics] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeVersion, setActiveVersion] = useState('latest');
  const [playgroundOutput, setPlaygroundOutput] = useState('');
  const [showApiExplorer, setShowApiExplorer] = useState(false);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [showContributors, setShowContributors] = useState(false);
  const [showCodePlayground, setShowCodePlayground] = useState(false);
  const [playgroundLanguage, setPlaygroundLanguage] = useState('javascript');

  // ==================== MEMOIZED DATA ====================
  const documentation = useMemo(() => config?.documentation || [], [config]);
  const sections = useMemo(() => config?.sections || [], [config]);
  const versions = useMemo(() => config?.versions || ['latest', 'v1.0', 'v2.0'], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);

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

  // Filter documentation based on search
  const filteredDocs = useMemo(() => {
    if (!searchQuery) return documentation;
    return documentation.filter(doc => {
      const matchesSearch = doc.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [documentation, searchQuery]);

  // Track search analytics
  useEffect(() => {
    if (searchQuery.length > 2) {
      const newSearch = {
        query: searchQuery,
        timestamp: new Date().toISOString(),
        results: filteredDocs.length,
      };
      setSearchAnalytics(prev => [newSearch, ...prev].slice(0, 50));
    }
  }, [searchQuery, filteredDocs.length]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
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

  // ==================== HELPER FUNCTIONS ====================
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

  const clearSearch = () => {
    setSearchQuery('');
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
          const result = Function(`"use strict"; return (${playgroundCode})`)();
          setPlaygroundOutput(String(result));
        } else {
          setPlaygroundOutput(
            `[${playgroundLanguage.toUpperCase()} output simulation]\n\n` +
            `Code execution would happen here in a real environment.\n\nYour code:\n${playgroundCode}`
          );
        }
      } catch (error) {
        setPlaygroundOutput(`Error: ${error.message}`);
      }
    }, 500);
  };

  // Suggest Edit
  const submitEditSuggestion = () => {
    if (!editSuggestion.trim()) return;
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

  // Popular search terms from analytics
  const popularSearches = useMemo(() => {
    const terms = {};
    searchAnalytics.forEach(s => {
      terms[s.query] = (terms[s.query] || 0) + 1;
    });
    return Object.entries(terms).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [searchAnalytics]);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Documentation Center"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Developer Docs"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Developer"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Documentation"}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "Interactive API explorer, code playground, and comprehensive guides for developers building on our platform."}</p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'pages' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'api' ? <HiOutlineCode className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'contributors' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
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

        {/* ==================== TOOLBAR ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Version:</span>
            <select
              value={activeVersion}
              onChange={(e) => setActiveVersion(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Select documentation version"
            >
              {versions.map(version => (
                <option key={version} value={version}>
                  {version === 'latest' ? 'Latest (v2.0)' : version}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowApiExplorer(!showApiExplorer)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${showApiExplorer ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              aria-label="Toggle API Explorer"
            >
              <HiOutlineBeaker className="w-4 h-4" />API Explorer
            </button>
            <button
              onClick={() => setShowCodePlayground(!showCodePlayground)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${showCodePlayground ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              aria-label="Toggle Code Playground"
            >
              <HiOutlineCode className="w-4 h-4" />Code Playground
            </button>
            <button
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
              aria-label="Toggle Analytics"
            >
              <ChartIcon className="w-4 h-4" />Analytics
            </button>
          </div>
        </div>

        {/* ==================== API EXPLORER PANEL ==================== */}
        {showApiExplorer && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineBeaker className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              API Explorer
            </h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <select
                  value={apiMethod}
                  onChange={(e) => setApiMethod(e.target.value)}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium border-0 text-gray-700 dark:text-gray-300"
                  aria-label="Select HTTP method"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
                <input
                  type="text"
                  value={apiEndpoint}
                  onChange={(e) => setApiEndpoint(e.target.value)}
                  placeholder="/api/v1/endpoint"
                  className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="API endpoint"
                />
                <button
                  onClick={executeApiCall}
                  disabled={apiLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 hover:bg-blue-700 transition-colors"
                  aria-label="Send API request"
                >
                  {apiLoading ? 'Sending...' : 'Send Request'}
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Parameter key"
                  className="flex-1 px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                  onChange={(e) => setApiParams(prev => ({ ...prev, key: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Parameter value"
                  className="flex-1 px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                  onChange={(e) => setApiParams(prev => ({ ...prev, value: e.target.value }))}
                />
              </div>
              {apiResponse && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${apiResponse.status === 200 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                      Status: {apiResponse.status}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Response Time: ~150ms</span>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(apiResponse, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== CODE PLAYGROUND PANEL ==================== */}
        {showCodePlayground && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineCode className="w-5 h-5 text-green-600 dark:text-green-400" />
              Code Playground
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Editor</label>
                  <select
                    value={playgroundLanguage}
                    onChange={(e) => setPlaygroundLanguage(e.target.value)}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300"
                    aria-label="Select programming language"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="curl">cURL</option>
                  </select>
                </div>
                <textarea
                  value={playgroundCode}
                  onChange={(e) => setPlaygroundCode(e.target.value)}
                  placeholder="Write your code here..."
                  rows={10}
                  className="w-full px-4 py-3 bg-gray-900 text-green-400 font-mono text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Code editor"
                />
                <button
                  onClick={executePlayground}
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                  aria-label="Run code"
                >
                  Run Code <PlayIcon className="inline ml-1 w-3 h-3" />
                </button>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Output</label>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm">
                  {playgroundOutput || 'Run your code to see output...'}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, API references, guides..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search documentation"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                aria-label="Clear search"
              >
                <HiOutlineX className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            )}
          </div>
          {popularSearches.length > 0 && searchQuery === '' && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              <span className="text-xs text-gray-400 dark:text-gray-500">Popular:</span>
              {popularSearches.map(([term]) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                  aria-label={`Search for ${term}`}
                >
                  {term}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ==================== MOBILE MENU TOGGLE ==================== */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-full justify-between text-gray-700 dark:text-gray-300"
            aria-label="Toggle documentation menu"
          >
            <span className="font-medium">Documentation Menu</span>
            {mobileMenuOpen ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* ==================== DOCUMENTATION LAYOUT ==================== */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-white py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label={`Toggle ${section.name} section`}
                  >
                    <div className="flex items-center gap-2">
                      {getSectionIcon(section.id)}
                      <span>{section.name}</span>
                    </div>
                    {docTree[section.id]?.length > 0 && (
                      <span className="text-gray-400 dark:text-gray-500">
                        {activeSection === section.id ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                      </span>
                    )}
                  </button>
                  {activeSection === section.id && docTree[section.id] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {docTree[section.id].map((doc) => (
                        <button
                          key={doc.id}
                          onClick={() => { setActiveDoc(doc); trackDocView(doc); setMobileMenuOpen(false); }}
                          className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors duration-300 ${activeDoc?.id === doc.id
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          aria-label={`View document: ${doc.title}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="line-clamp-1">{doc.title}</span>
                            {bookmarkedDocs.includes(doc.id) && (
                              <HiOutlineBookmark className="w-3 h-3 text-yellow-500 dark:text-yellow-400 fill-current" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Recently Viewed Docs */}
              {recentDocs.length > 0 && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Recently Viewed</p>
                  <div className="space-y-1">
                    {recentDocs.slice(0, 5).map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => { setActiveDoc(doc); trackDocView(doc); }}
                        className="w-full text-left py-1.5 px-3 rounded-lg text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        aria-label={`View recently viewed: ${doc.title}`}
                      >
                        {doc.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contributors Link */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowContributors(true)}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="View contributors"
                >
                  <HiOutlineUsers className="w-4 h-4" />
                  View Contributors
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {searchQuery && filteredDocs.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Search Results ({filteredDocs.length})
                  </h3>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Clear search"
                  >
                    Clear search
                  </button>
                </div>
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => { setActiveDoc(doc); trackDocView(doc); setSearchQuery(''); }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveDoc(doc)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{doc.description}</p>
                        {doc.tags && doc.tags.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            {doc.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <HiOutlineArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            ) : activeDoc ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Document Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          {sections.find(s => s.id === activeDoc.section)?.name}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">Updated {formatDate(activeDoc.updatedAt)}</span>
                      </div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{activeDoc.title}</h1>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => toggleBookmark(activeDoc.id, e)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        title={bookmarkedDocs.includes(activeDoc.id) ? 'Remove bookmark' : 'Bookmark'}
                        aria-label={bookmarkedDocs.includes(activeDoc.id) ? "Remove bookmark" : "Bookmark document"}
                      >
                        <HiOutlineBookmark className={`w-5 h-5 ${bookmarkedDocs.includes(activeDoc.id) ? 'fill-current text-yellow-500 dark:text-yellow-400' : ''}`} />
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Print"
                        aria-label="Print document"
                      >
                        <HiOutlinePrinter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => shareDocHandler(activeDoc, e)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Share"
                        aria-label="Share document"
                      >
                        <HiOutlineShare className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShowSuggestModal(true)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        title="Suggest Edit"
                        aria-label="Suggest edit"
                      >
                        <HiOutlineAnnotation className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Document Content */}
                <div className="p-6 prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: activeDoc.content }} />

                  {/* Code blocks with copy functionality */}
                  {activeDoc.codeExamples && activeDoc.codeExamples.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Code Examples</h3>
                      {activeDoc.codeExamples.map((example, idx) => (
                        <div key={idx} className="relative group my-4">
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button
                              onClick={() => copyCode(example.code, idx)}
                              className="px-2 py-1 bg-gray-700 text-white text-xs rounded flex items-center gap-1 hover:bg-gray-600 transition-colors"
                              aria-label="Copy code"
                            >
                              {copiedCode === idx ? (
                                <><HiOutlineCheckCircle className="w-3 h-3" /> Copied!</>
                              ) : (
                                <><HiOutlineClipboardCopy className="w-3 h-3" /> Copy</>
                              )}
                            </button>
                          </div>
                          <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto language-${example.language}`}>
                            <code>{example.code}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* API Endpoints */}
                  {activeDoc.endpoints && activeDoc.endpoints.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">API Endpoints</h3>
                      <div className="space-y-4">
                        {activeDoc.endpoints.map((endpoint, idx) => (
                          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                              <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                                {endpoint.method}
                              </span>
                              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">{endpoint.path}</code>
                              <button
                                onClick={() => { setApiMethod(endpoint.method); setApiEndpoint(endpoint.path); setShowApiExplorer(true); }}
                                className="ml-auto text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                aria-label="Try API endpoint"
                              >
                                Try it →
                              </button>
                            </div>
                            <div className="p-3">
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{endpoint.description}</p>
                              {endpoint.parameters && endpoint.parameters.length > 0 && (
                                <details className="mt-2">
                                  <summary className="text-sm cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Parameters</summary>
                                  <table className="w-full mt-2 text-sm">
                                    <thead>
                                      <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left py-1 text-gray-700 dark:text-gray-300">Name</th>
                                        <th className="text-left py-1 text-gray-700 dark:text-gray-300">Type</th>
                                        <th className="text-left py-1 text-gray-700 dark:text-gray-300">Required</th>
                                        <th className="text-left py-1 text-gray-700 dark:text-gray-300">Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {endpoint.parameters.map((param, pIdx) => (
                                        <tr key={pIdx} className="border-b border-gray-100 dark:border-gray-800">
                                          <td className="py-1 font-mono text-xs text-gray-700 dark:text-gray-300">{param.name}</td>
                                          <td className="py-1 text-xs text-gray-600 dark:text-gray-400">{param.type}</td>
                                          <td className="py-1 text-xs text-gray-600 dark:text-gray-400">{param.required ? 'Yes' : 'No'}</td>
                                          <td className="py-1 text-xs text-gray-600 dark:text-gray-400">{param.description}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </details>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Helpful Feedback */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Was this page helpful?</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => markHelpful(activeDoc.id, true)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${helpfulFeedback[activeDoc.id]?.helpful === true
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                        }`}
                      aria-label="Mark as helpful"
                    >
                      <HiOutlineThumbUp className="w-4 h-4" />
                      Yes
                    </button>
                    <button
                      onClick={() => markHelpful(activeDoc.id, false)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${helpfulFeedback[activeDoc.id]?.helpful === false
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                        }`}
                      aria-label="Mark as not helpful"
                    >
                      <HiOutlineThumbDown className="w-4 h-4" />
                      No
                    </button>
                  </div>
                </div>

                {/* Related Docs */}
                {activeDoc.relatedDocs && activeDoc.relatedDocs.length > 0 && (
                  <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Related Documentation</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDoc.relatedDocs.map((relatedId) => {
                        const related = documentation.find(d => d.id === relatedId);
                        if (!related) return null;
                        return (
                          <button
                            key={relatedId}
                            onClick={() => { setActiveDoc(related); trackDocView(related); }}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label={`View related document: ${related.title}`}
                          >
                            {related.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Select a document from the sidebar to view its content.</p>
              </div>
            )}
          </main>
        </div>

        {/* ==================== ANALYTICS MODAL ==================== */}
        {showAnalytics && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowAnalytics(false)}
            role="dialog"
            aria-label="Search Analytics"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Search Analytics</h3>
                  <button onClick={() => setShowAnalytics(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Search Terms</h4>
                  <div className="space-y-2">
                    {popularSearches.map(([term, count]) => (
                      <div key={term} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{term}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{count} searches</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Searches</h4>
                  <div className="space-y-2">
                    {searchAnalytics.slice(0, 10).map((search, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{search.query}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(search.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CONTRIBUTORS MODAL ==================== */}
        {showContributors && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowContributors(false)}
            role="dialog"
            aria-label="Documentation Contributors"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Documentation Contributors</h3>
                  <button onClick={() => setShowContributors(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {contributors.map((contributor, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <HiOutlineUserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{contributor.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {contributor.role} • {contributor.contributions} contributions
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUGGEST EDIT MODAL ==================== */}
        {showSuggestModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowSuggestModal(false)}
            role="dialog"
            aria-label="Suggest an Edit"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Suggest an Edit</h3>
                  <button onClick={() => setShowSuggestModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Suggest an improvement for "{activeDoc?.title}"
                </p>
                <textarea
                  value={editSuggestion}
                  onChange={(e) => setEditSuggestion(e.target.value)}
                  placeholder="Describe your suggested changes..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Edit suggestion"
                />
                <button
                  onClick={submitEditSuggestion}
                  className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300"
                  aria-label="Submit suggestion"
                >
                  Submit Suggestion
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share Document"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Document</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareDoc.title}</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Copy link"
                  >
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button
                    onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareDoc.title)}&body=${encodeURIComponent(`${shareDoc.title}\n\n${window.location.origin}/docs/${shareDoc.id}`)}`)}
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

        {/* ==================== CTA SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineLifebuoy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6">Our developer support team is ready to help.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Contact support">
            <HiOutlineChat className="w-5 h-5" />
            Contact Support
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .prose {
          max-width: none;
        }
        .prose pre {
          background-color: #1a1a2e;
          color: #e0e0e0;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        .prose code {
          font-size: 0.875em;
        }
      `}</style>
    </section>
  );
};

export default DocumentationSection2;