// page/frontend/Support/DocumentationSection/DocumentationSection1.jsx

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
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineCloudUpload,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineFolder,
  HiOutlineCode,
  HiOutlineTerminal,
  HiOutlineCube,
  HiOutlineClipboardCopy,
  HiOutlineShieldCheck as ShieldIcon,
} from 'react-icons/hi';
import { HiOutlineLifebuoy, HiOutlineLink, HiOutlineQuestionMarkCircle, } from 'react-icons/hi2';

const DocumentationSection1 = ({ config }) => {
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

  // Load data from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('docBookmarks');
    if (savedBookmarks) setBookmarkedDocs(JSON.parse(savedBookmarks));

    const savedFeedback = localStorage.getItem('docHelpfulFeedback');
    if (savedFeedback) setHelpfulFeedback(JSON.parse(savedFeedback));

    const savedRecent = localStorage.getItem('recentDocs');
    if (savedRecent) setRecentDocs(JSON.parse(savedRecent));
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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Documentation Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Documentation"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Technical"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Documentation"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Comprehensive guides, API references, and developer resources to help you integrate and build with our platform."}
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'pages' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'sections' ? <HiOutlineFolder className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'api' ? <HiOutlineCode className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineUsers className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Version Selector and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Version:</span>
            <select
              value={activeVersion}
              onChange={(e) => setActiveVersion(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {versions.map(version => (
                <option key={version} value={version}>
                  {version === 'latest' ? 'Latest (v2.0)' : version}
                </option>
              ))}
            </select>
            <span className="text-xs text-gray-400 ml-2">Last updated: {formatDate(new Date().toISOString())}</span>
          </div>
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-full justify-between"
          >
            <span className="font-medium">Documentation Menu</span>
            {mobileMenuOpen ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Documentation Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-white py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {getSectionIcon(section.id)}
                      <span>{section.name}</span>
                    </div>
                    {docTree[section.id]?.length > 0 && (
                      <span className="text-gray-400">
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
                          className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors ${activeDoc?.id === doc.id
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="line-clamp-1">{doc.title}</span>
                            {bookmarkedDocs.includes(doc.id) && (
                              <HiOutlineBookmark className="w-3 h-3 text-yellow-500 fill-current" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Recent Docs */}
              {recentDocs.length > 0 && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recently Viewed</p>
                  <div className="space-y-1">
                    {recentDocs.slice(0, 5).map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => { setActiveDoc(doc); trackDocView(doc); }}
                        className="w-full text-left py-1.5 px-3 rounded-lg text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {doc.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {searchQuery && filteredDocs.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Search Results ({filteredDocs.length})
                </h3>
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => { setActiveDoc(doc); trackDocView(doc); setSearchQuery(''); }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{doc.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {doc.tags?.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <HiOutlineArrowRight className="w-5 h-5 text-gray-400" />
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
                        <span className="text-xs text-gray-400">Updated {formatDate(activeDoc.updatedAt)}</span>
                      </div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{activeDoc.title}</h1>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => toggleBookmark(activeDoc.id, e)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-yellow-500 transition-colors"
                        title={bookmarkedDocs.includes(activeDoc.id) ? 'Remove bookmark' : 'Bookmark'}
                      >
                        <HiOutlineBookmark className={`w-5 h-5 ${bookmarkedDocs.includes(activeDoc.id) ? 'fill-current text-yellow-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-blue-600 transition-colors"
                        title="Print"
                      >
                        <HiOutlinePrinter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => shareDocHandler(activeDoc, e)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 hover:text-blue-600 transition-colors"
                        title="Share"
                      >
                        <HiOutlineShare className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Document Content */}
                <div className="p-6 prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: activeDoc.content }} />

                  {/* Code blocks with copy functionality */}
                  {activeDoc.codeExamples && (
                    <div className="mt-6">
                      <h3>Code Examples</h3>
                      {activeDoc.codeExamples.map((example, idx) => (
                        <div key={idx} className="relative group my-4">
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button
                              onClick={() => copyCode(example.code, idx)}
                              className="px-2 py-1 bg-gray-700 text-white text-xs rounded flex items-center gap-1"
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
                  {activeDoc.endpoints && (
                    <div className="mt-6">
                      <h3>API Endpoints</h3>
                      <div className="space-y-4">
                        {activeDoc.endpoints.map((endpoint, idx) => (
                          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                              <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                {endpoint.method}
                              </span>
                              <code className="text-sm font-mono">{endpoint.path}</code>
                            </div>
                            <div className="p-3">
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{endpoint.description}</p>
                              {endpoint.parameters && (
                                <details className="mt-2">
                                  <summary className="text-sm cursor-pointer text-blue-600">Parameters</summary>
                                  <table className="w-full mt-2 text-sm">
                                    <thead>
                                      <tr className="border-b border-gray-200">
                                        <th className="text-left py-1">Name</th>
                                        <th className="text-left py-1">Type</th>
                                        <th className="text-left py-1">Required</th>
                                        <th className="text-left py-1">Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {endpoint.parameters.map((param, pIdx) => (
                                        <tr key={pIdx} className="border-b border-gray-100">
                                          <td className="py-1 font-mono text-xs">{param.name}</td>
                                          <td className="py-1 text-xs">{param.type}</td>
                                          <td className="py-1 text-xs">{param.required ? 'Yes' : 'No'}</td>
                                          <td className="py-1 text-xs">{param.description}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </details>
                              )}
                              {endpoint.response && (
                                <details className="mt-2">
                                  <summary className="text-sm cursor-pointer text-blue-600">Response Example</summary>
                                  <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded-lg text-xs overflow-x-auto">
                                    {JSON.stringify(endpoint.response, null, 2)}
                                  </pre>
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
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${helpfulFeedback[activeDoc.id]?.helpful === true
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50'
                        }`}
                    >
                      <HiOutlineThumbUp className="w-4 h-4" />
                      Yes
                    </button>
                    <button
                      onClick={() => markHelpful(activeDoc.id, false)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${helpfulFeedback[activeDoc.id]?.helpful === false
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-50'
                        }`}
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
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors"
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
              <div className="text-center py-12">
                <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Select a document from the sidebar to view its content.</p>
              </div>
            )}
          </main>
        </div>

        {/* Share Modal */}
        {showShareModal && shareDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Document</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareDoc.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareDoc.title)}&body=${encodeURIComponent(`${shareDoc.title}\n\n${window.location.origin}/docs/${shareDoc.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineLifebuoy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our support team for assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlineChat className="w-5 h-5" />
              Contact Support
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              <HiOutlineMail className="w-5 h-5" />
              Send Feedback
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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
        .prose h1, .prose h2, .prose h3, .prose h4 {
          color: inherit;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
        }
        .prose p {
          color: inherit;
          margin-bottom: 1em;
        }
        .prose ul, .prose ol {
          margin-top: 0.5em;
          margin-bottom: 1em;
        }
        .prose li {
          margin-bottom: 0.25em;
        }
        .prose a {
          color: #3b82f6;
          text-decoration: underline;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1em 0;
        }
        .prose th, .prose td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem;
          text-align: left;
        }
        .dark .prose th, .dark .prose td {
          border-color: #374151;
        }
        .prose th {
          background-color: #f3f4f6;
        }
        .dark .prose th {
          background-color: #1f2937;
        }
      `}</style>
    </section>
  );
};

export default DocumentationSection1;