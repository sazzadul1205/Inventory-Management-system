// frontend/FAQ/TechnicalSupportSection/TechnicalSupportSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineQuestionMarkCircle,
  HiOutlineDocumentText,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
} from 'react-icons/hi';

const TechnicalSupportSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSystemStatus] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    issueType: 'technical',
    severity: 'normal',
    message: '',
    logs: null
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const stats = config?.stats || [];
  const systemStatus = config?.systemStatus || {
    status: 'operational',
    lastIncident: null,
    uptime: '99.9%'
  };

  useEffect(() => {
    const savedVotes = localStorage.getItem('techFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedTechFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('techFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedTechFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', issueType: 'technical', severity: 'normal', message: '', logs: null });
      }, 2000);
    }, 500);
  };

  const handleExport = () => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: categories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'technical-faq-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredFaqs = faqs
    .filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') return b.updatedAt?.localeCompare(a.updatedAt) || 0;
      if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
      if (sortBy === 'helpful') return (helpfulVotes[b.id] ? 1 : 0) - (helpfulVotes[a.id] ? 1 : 0);
      return 0;
    });

  const highlightedText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const groupedFaqs = categories.reduce((acc, category) => {
    acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
    return acc;
  }, {});

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Technical Support Knowledge Base"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* System Status Banner */}
        {showSystemStatus && (
          <div className={`mb-8 rounded-2xl p-4 ${systemStatus.status === 'operational' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'}`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 ${systemStatus.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'} rounded-full animate-pulse`} />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">System Status: </span>
                  <span className={systemStatus.status === 'operational' ? 'text-green-600' : 'text-yellow-600'}>
                    {systemStatus.status === 'operational' ? 'All Systems Operational' : 'Partial Outage'}
                  </span>
                </div>
                <div className="text-sm text-gray-500">| Uptime: {systemStatus.uptime}</div>
              </div>
              <Link href="/status" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                View detailed status
                <HiOutlineExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* Popular Questions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            Popular Technical Questions
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {popularQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(question)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search technical questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
            >
              <HiOutlineFilter className="w-4 h-4" />
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="helpful">Most Helpful</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Export FAQs"
            >
              <HiOutlineDownload className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
              title="Print FAQs"
            >
              <HiOutlinePrinter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                      }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500">
            Found {filteredFaqs.length} results for "{searchQuery}"
          </div>
        )}

        {/* Category Accordion View */}
        <div className="space-y-6 mb-12">
          {categories.map((category) => {
            const categoryFaqs = groupedFaqs[category.id] || [];
            if (categoryFaqs.length === 0 && searchQuery) return null;

            const isExpanded = expandedCategories[category.id] || searchQuery !== '';

            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">{categoryFaqs.length} questions</span>
                    {isExpanded ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                    {categoryFaqs.map((faq, idx) => (
                      <div key={idx} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <button
                          onClick={() => toggleFaq(`${category.id}-${idx}`)}
                          className="w-full text-left flex justify-between items-center"
                        >
                          <div className="flex items-start gap-3 pr-4">
                            <div className="text-xl mt-0.5">{faq.icon}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {highlightedText(faq.question, searchQuery)}
                              </div>
                              {faq.tags && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {faq.tags.slice(0, 2).map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSaveFaq(faq.id);
                              }}
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                            </button>
                            <div className="text-blue-500">
                              {openFaq === `${category.id}-${idx}` ? (
                                <HiOutlineChevronUp className="w-5 h-5" />
                              ) : (
                                <HiOutlineChevronDown className="w-5 h-5" />
                              )}
                            </div>
                          </div>
                        </button>

                        {openFaq === `${category.id}-${idx}` && (
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {highlightedText(faq.answer, searchQuery)}
                            </p>
                            {faq.link && (
                              <Link
                                href={faq.link}
                                className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                              >
                                Learn more
                                <HiOutlineExternalLink className="w-3 h-3" />
                              </Link>
                            )}

                            {/* Code Snippet Example */}
                            {faq.codeSnippet && (
                              <div className="mt-3 bg-gray-900 rounded-lg p-3 overflow-x-auto">
                                <pre className="text-green-400 text-xs font-mono">
                                  <code>{faq.codeSnippet}</code>
                                </pre>
                              </div>
                            )}

                            {/* Helpful Section */}
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-4">
                                <span className="text-xs text-gray-500">Was this helpful?</span>
                                <button
                                  onClick={() => handleHelpful(faq.id, true)}
                                  className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === true
                                    ? 'text-green-600'
                                    : 'text-gray-400 hover:text-green-600'
                                    }`}
                                >
                                  <HiOutlineThumbUp className="w-4 h-4" />
                                  Yes
                                </button>
                                <button
                                  onClick={() => handleHelpful(faq.id, false)}
                                  className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === false
                                    ? 'text-red-600'
                                    : 'text-gray-400 hover:text-red-600'
                                    }`}
                                >
                                  <HiOutlineThumbDown className="w-4 h-4" />
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Contact Technical Support
            </button>
          </div>
        )}

        {/* Saved FAQs Section */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineBookmark className="w-5 h-5 text-blue-600" />
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                  <div className="flex items-start gap-2">
                    <div className="text-xl">{faq.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                      <button
                        onClick={() => {
                          setActiveCategory(faq.category);
                          setSearchQuery('');
                          setOpenFaq(null);
                        }}
                        className="text-xs text-blue-600 mt-1 hover:underline"
                      >
                        View in {categories.find(c => c.id === faq.category)?.name}
                      </button>
                    </div>
                    <button
                      onClick={() => handleSaveFaq(faq.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <HiOutlineX className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Chat with our technical support team for immediate assistance
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
              <HiOutlineChat className="w-4 h-4" />
              Start Chat
            </button>
            <p className="text-xs text-gray-500 mt-3">Available 24/7 for enterprise plans</p>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Send us your technical questions and we'll respond within 24 hours
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
            >
              <HiOutlineMail className="w-4 h-4" />
              Send Email
            </button>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Documentation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Browse our comprehensive technical documentation and API guides
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              View Docs
            </Link>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Support Request</h3>
                <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="p-6">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Type</label>
                      <select
                        value={contactForm.issueType}
                        onChange={(e) => setContactForm({ ...contactForm, issueType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="technical">Technical Issue</option>
                        <option value="integration">Integration Problem</option>
                        <option value="api">API Issue</option>
                        <option value="performance">Performance Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Severity</label>
                      <select
                        value={contactForm.severity}
                        onChange={(e) => setContactForm({ ...contactForm, severity: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="low">Low - General question</option>
                        <option value="normal">Normal - Minor issue</option>
                        <option value="high">High - Major issue</option>
                        <option value="critical">Critical - System down</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce, and relevant screenshots..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Error Logs (Optional)</label>
                      <textarea
                        rows={3}
                        value={contactForm.logs}
                        onChange={(e) => setContactForm({ ...contactForm, logs: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 font-mono text-xs"
                        placeholder="Paste any relevant error logs here..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      Submit Request
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-5xl mb-3">✅</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Request Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our technical support team will respond within 24 hours.</p>
                  </div>
                )}
                <p className="text-xs text-gray-500 text-center mt-4">We'll never share your email with third parties.</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Need technical assistance? Our support team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Technical Support"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Service Level Agreement */}
        {config?.showSla && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.slaText || "Enterprise plans include 24/7 priority support with 1-hour response time"}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        mark {
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default TechnicalSupportSection3;