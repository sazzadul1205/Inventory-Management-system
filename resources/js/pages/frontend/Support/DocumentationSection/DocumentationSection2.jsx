// page/frontend/Support/DocumentationSection/DocumentationSection2.jsx

// React
import { useState, useEffect, useMemo } from 'react';

// Icons
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
  HiOutlineShieldCheck as ShieldIcon,
  HiOutlineBeaker,
  HiOutlineAnnotation,
  HiOutlineUsers as UsersIcon,
  HiOutlineClipboardCopy,
  HiOutlineChartBar as ChartIcon,
} from 'react-icons/hi';
import {
  HiOutlineLifebuoy,
  HiOutlineLink,
  HiOutlineQuestionMarkCircle,
  HiOutlineUserCircle,
  HiOutlinePlay as PlayIcon
} from 'react-icons/hi2';

const DocumentationSection2 = ({ config }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeDoc, setActiveDoc] = useState(null);
  const [activeVersion, setActiveVersion] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
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
  const [searchAnalytics, setSearchAnalytics] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [, setSuggestedEdits] = useState([]);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [editSuggestion, setEditSuggestion] = useState('');
  const [contributors, setContributors] = useState([]);
  const [showContributors, setShowContributors] = useState(false);

  // Get data from config
  const documentation = useMemo(() => config?.documentation || [], [config]);
  const sections = config?.sections || [];
  const versions = config?.versions || ['latest', 'v1.0', 'v2.0'];
  const stats = config?.stats || [];

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
      localStorage.setItem('docSearchAnalytics', JSON.stringify(searchAnalytics));
    }
  }, [searchQuery, filteredDocs.length, searchAnalytics]);

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

  // Track document view
  const trackDocView = (doc) => {
    const updatedRecent = [doc, ...recentDocs.filter(d => d.id !== doc.id)].slice(0, 10);
    setRecentDocs(updatedRecent);
  };

  // Toggle bookmark
  const toggleBookmark = (docId, e) => {
    e?.stopPropagation();
    if (bookmarkedDocs.includes(docId)) {
      setBookmarkedDocs(bookmarkedDocs.filter(id => id !== docId));
    } else {
      setBookmarkedDocs([...bookmarkedDocs, docId]);
    }
  };

  // Handle helpful feedback
  const markHelpful = (docId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [docId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  // Share document
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

  // Copy code block
  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // API Explorer - Execute API call
  const executeApiCall = async () => {
    setApiLoading(true);
    // Simulate API call
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

  // Code Playground - Execute code
  const executePlayground = () => {
    setPlaygroundOutput('Running...');
    setTimeout(() => {
      try {
        // Simple JavaScript evaluation for demo
        if (playgroundLanguage === 'javascript') {
          const result = eval(playgroundCode);
          setPlaygroundOutput(String(result));
        } else {
          setPlaygroundOutput(`[${playgroundLanguage.toUpperCase()} output simulation]\n\nCode execution would happen here in a real environment.\n\nYour code:\n${playgroundCode}`);
        }
      } catch (error) {
        setPlaygroundOutput(`Error: ${error.message}`);
      }
    }, 500);
  };

  // Submit edit suggestion
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

  // Get section icon
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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {stat.icon === 'pages' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'api' ? <HiOutlineCode className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'contributors' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineStar className="w-5 h-5 text-blue-600" />}
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
            <select value={activeVersion} onChange={(e) => setActiveVersion(e.target.value)} className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              {versions.map(version => (<option key={version} value={version}>{version === 'latest' ? 'Latest (v2.0)' : version}</option>))}
            </select>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowApiExplorer(!showApiExplorer)} className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${showApiExplorer ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 border border-gray-200'}`}><HiOutlineBeaker className="w-4 h-4" />API Explorer</button>
            <button onClick={() => setShowCodePlayground(!showCodePlayground)} className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${showCodePlayground ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 border border-gray-200'}`}><HiOutlineCode className="w-4 h-4" />Code Playground</button>
            <button onClick={() => setShowAnalytics(!showAnalytics)} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 border border-gray-200 flex items-center gap-2"><ChartIcon className="w-4 h-4" />Analytics</button>
          </div>
        </div>

        {/* API Explorer Panel */}
        {showApiExplorer && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><HiOutlineBeaker className="w-5 h-5 text-blue-600" />API Explorer</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <select value={apiMethod} onChange={(e) => setApiMethod(e.target.value)} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium border-0">
                  <option value="GET">GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option>
                </select>
                <input type="text" value={apiEndpoint} onChange={(e) => setApiEndpoint(e.target.value)} placeholder="/api/v1/endpoint" className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={executeApiCall} disabled={apiLoading} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50">{apiLoading ? 'Sending...' : 'Send Request'}</button>
              </div>
              {apiResponse && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2"><span className={`text-xs px-2 py-1 rounded ${apiResponse.status === 200 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>Status: {apiResponse.status}</span><span className="text-xs text-gray-500">Response Time: ~150ms</span></div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">{JSON.stringify(apiResponse, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Code Playground Panel */}
        {showCodePlayground && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><HiOutlineCode className="w-5 h-5 text-green-600" />Code Playground</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2"><label className="text-sm font-medium">Code Editor</label><select value={playgroundLanguage} onChange={(e) => setPlaygroundLanguage(e.target.value)} className="px-2 py-1 bg-gray-100 rounded text-sm"><option value="javascript">JavaScript</option><option value="python">Python</option><option value="curl">cURL</option></select></div>
                <textarea value={playgroundCode} onChange={(e) => setPlaygroundCode(e.target.value)} placeholder="Write your code here..." rows={10} className="w-full px-4 py-3 bg-gray-900 text-green-400 font-mono text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button onClick={executePlayground} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">Run Code <PlayIcon className="inline ml-1 w-3 h-3" /></button>
              </div>
              <div><label className="text-sm font-medium mb-2 block">Output</label><pre className="bg-gray-900 text-gray-100 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm">{playgroundOutput || 'Run your code to see output...'}</pre></div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search documentation, API references, guides..." className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm" />
          </div>
          {popularSearches.length > 0 && searchQuery === '' && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              <span className="text-xs text-gray-400">Popular:</span>
              {popularSearches.map(([term]) => (
                <button key={term} onClick={() => setSearchQuery(term)} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-200">{term}</button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mb-4"><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-full justify-between"><span className="font-medium">Documentation Menu</span>{mobileMenuOpen ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}</button></div>

        {/* Documentation Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <div key={section.id}>
                  <button onClick={() => setActiveSection(activeSection === section.id ? null : section.id)} className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-white py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
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
              {recentDocs.length > 0 && (<div className="pt-4 border-t"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recently Viewed</p><div className="space-y-1">{recentDocs.slice(0, 5).map((doc) => (<button key={doc.id} onClick={() => { setActiveDoc(doc); trackDocView(doc); }} className="w-full text-left py-1.5 px-3 rounded-lg text-xs text-gray-500 hover:bg-gray-50">{doc.title}</button>))}</div></div>)}
              <div className="pt-4 border-t"><button onClick={() => setShowContributors(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><UsersIcon className="w-4 h-4" />View Contributors</button></div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {searchQuery && filteredDocs.length > 0 ? (
              <div className="space-y-4"><h3 className="text-lg font-semibold mb-4">Search Results ({filteredDocs.length})</h3>{filteredDocs.map((doc) => (<div key={doc.id} onClick={() => { setActiveDoc(doc); trackDocView(doc); setSearchQuery(''); }} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer"><div className="flex items-start justify-between"><div><h4 className="font-semibold">{doc.title}</h4><p className="text-sm text-gray-500 mt-1">{doc.description}</p><div className="flex items-center gap-2 mt-2">{doc.tags?.slice(0, 3).map((tag) => (<span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{tag}</span>))}</div></div><HiOutlineArrowRight className="w-5 h-5 text-gray-400" /></div></div>))}</div>
            ) : activeDoc ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="flex items-center gap-2 mb-2"><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{sections.find(s => s.id === activeDoc.section)?.name}</span><span className="text-xs text-gray-400">Updated {formatDate(activeDoc.updatedAt)}</span></div><h1 className="text-2xl md:text-3xl font-bold">{activeDoc.title}</h1></div>
                    <div className="flex gap-2">
                      <button onClick={(e) => toggleBookmark(activeDoc.id, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-yellow-500"><HiOutlineBookmark className={`w-5 h-5 ${bookmarkedDocs.includes(activeDoc.id) ? 'fill-current text-yellow-500' : ''}`} /></button>
                      <button onClick={() => window.print()} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-blue-600"><HiOutlinePrinter className="w-5 h-5" /></button>
                      <button onClick={(e) => shareDocHandler(activeDoc, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-blue-600"><HiOutlineShare className="w-5 h-5" /></button>
                      <button onClick={() => setShowSuggestModal(true)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-green-600"><HiOutlineAnnotation className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
                <div className="p-6 prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: activeDoc.content }} />
                  {activeDoc.codeExamples && (<div className="mt-6"><h3>Code Examples</h3>{activeDoc.codeExamples.map((example, idx) => (<div key={idx} className="relative group my-4"><div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><button onClick={() => copyCode(example.code, idx)} className="px-2 py-1 bg-gray-700 text-white text-xs rounded flex items-center gap-1">{copiedCode === idx ? <><HiOutlineCheckCircle className="w-3 h-3" /> Copied!</> : <><HiOutlineClipboardCopy className="w-3 h-3" /> Copy</>}</button></div><pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{example.code}</code></pre></div>))}</div>)}
                  {activeDoc.endpoints && (<div className="mt-6"><h3>API Endpoints</h3><div className="space-y-4">{activeDoc.endpoints.map((endpoint, idx) => (<div key={idx} className="border border-gray-200 rounded-lg overflow-hidden"><div className="flex items-center gap-2 p-3 bg-gray-50 border-b"><span className={`text-xs font-mono font-bold px-2 py-1 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{endpoint.method}</span><code className="text-sm font-mono">{endpoint.path}</code><button onClick={() => { setApiMethod(endpoint.method); setApiEndpoint(endpoint.path); setShowApiExplorer(true); }} className="ml-auto text-xs text-blue-600 hover:underline">Try it →</button></div><div className="p-3"><p className="text-sm text-gray-600 mb-2">{endpoint.description}</p></div></div>))}</div></div>)}
                </div>
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">Was this page helpful?</p>
                  <div className="flex gap-3"><button onClick={() => markHelpful(activeDoc.id, true)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeDoc.id]?.helpful === true ? 'bg-green-100 text-green-700' : 'bg-white text-gray-700 hover:bg-green-50'}`}><HiOutlineThumbUp className="w-4 h-4" />Yes</button><button onClick={() => markHelpful(activeDoc.id, false)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${helpfulFeedback[activeDoc.id]?.helpful === false ? 'bg-red-100 text-red-700' : 'bg-white text-gray-700 hover:bg-red-50'}`}><HiOutlineThumbDown className="w-4 h-4" />No</button></div>
                </div>
                {activeDoc.relatedDocs && activeDoc.relatedDocs.length > 0 && (<div className="p-6 border-t border-gray-200"><h4 className="text-sm font-semibold mb-3">Related Documentation</h4><div className="flex flex-wrap gap-2">{activeDoc.relatedDocs.map((relatedId) => { const related = documentation.find(d => d.id === relatedId); if (!related) return null; return (<button key={relatedId} onClick={() => { setActiveDoc(related); trackDocView(related); }} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">{related.title}</button>); })}</div></div>)}
              </div>
            ) : (
              <div className="text-center py-12"><HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 mb-4" /><p className="text-gray-500">Select a document from the sidebar to view its content.</p></div>
            )}
          </main>
        </div>

        {/* Analytics Modal */}
        {showAnalytics && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAnalytics(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Search Analytics</h3><button onClick={() => setShowAnalytics(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6"><div className="mb-6"><h4 className="font-semibold mb-3">Popular Search Terms</h4><div className="space-y-2">{popularSearches.map(([term, count]) => (<div key={term} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span className="text-sm">{term}</span><span className="text-xs text-gray-500">{count} searches</span></div>))}</div></div><div><h4 className="font-semibold mb-3">Recent Searches</h4><div className="space-y-2">{searchAnalytics.slice(0, 10).map((search, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span className="text-sm">{search.query}</span><span className="text-xs text-gray-500">{new Date(search.timestamp).toLocaleDateString()}</span></div>))}</div></div></div>
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
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineLifebuoy className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3><p className="text-blue-100 mb-6">Our developer support team is ready to help.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Contact Support</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .prose { max-width: none; }
        .prose pre { background-color: #1a1a2e; color: #e0e0e0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; }
        .prose code { font-size: 0.875em; }
      `}</style>
    </section>
  );
};

export default DocumentationSection2;